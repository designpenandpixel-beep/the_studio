
// ══════════════════════════════════════
// STAGE 4 — POST PRODUCTION
// ══════════════════════════════════════

// ── Supabase table helpers ──
const PP_TABLE = 'studio_post_production';

async function ppTableUpsert(projectId, data) {
  if (!SB.ready()) return;
  try {
    const payload = { project_id: projectId, ...data };
    const r = await fetch(SB._url + '/rest/v1/' + PP_TABLE, {
      method: 'POST',
      headers: { ...SB._wh(), 'Prefer': 'resolution=merge-duplicates,return=minimal' },
      body: JSON.stringify(payload)
    });
    if (!r.ok) { const t = await r.text(); console.warn('PP upsert', r.status, t.substring(0, 80)); }
  } catch(e) { console.warn('PP upsert', e.message); }
}

// ── In-project storage helpers ──
function getPP(p) { return p.postProduction || {}; }

function savePP(pid, updates) {
  const p = DB.getProject(pid); if (!p) return;
  if (!p.postProduction) p.postProduction = {};
  Object.assign(p.postProduction, updates);
  DB.saveProject(p);
  // Async sync to dedicated table
  ppTableUpsert(pid, {
    project_manifest:    p.postProduction.manifest || null,
    editing_style:       p.postProduction.referenceAnalysis ? JSON.stringify(p.postProduction.referenceAnalysis[0] || {}) : null,
    creative_direction:  p.postProduction.creativeDirection || null,
    premiere_jsx:        p.postProduction.scripts?.premiere || null,
    aftereffects_jsx:    p.postProduction.scripts?.aftereffects || null,
    blender_py:          p.postProduction.scripts?.blender || null,
    tool_status:         p.postProduction.toolStatus || null,
    export_urls:         p.postProduction.exportSettings || null
  }).catch(() => {});
}

// ── File download ──
function dlFile(content, filename, type) {
  const b = new Blob([content], { type: type || 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(b);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(a.href), 3000);
  toast('Downloaded ' + filename, 'ok');
}

// ── URL extractor ──
function extractUrls(text) {
  const m = (text || '').match(/https?:\/\/[^\s<>"{}|\\^`[\]]+/g) || [];
  return m.filter(u => u.length < 300);
}

// ══════════════════════════════════════
// STEP 1 — TOOL SELECTION & IMPORT
// ══════════════════════════════════════

function sPostToolSelection(p) {
  const pp = getPP(p);
  const b  = { ...p.clientBrief, ...p.brief };
  const shots    = p.shots || [];
  const vidCount = Object.values(S.vidState   || {}).filter(s => s?.url).length;
  const audCount = Object.values(S.audioState || {}).filter(s => s?.url).length;
  const sbCount  = Object.values(S.sbState    || {}).filter(s => s?.status === 'done').length;
  const refUrls  = extractUrls(b.references || '');
  const ts       = pp.toolSelection;

  return `<div class="ptitle">Post Production</div>
<div class="psub">Select tools, analyse references, generate project manifest</div>

<div class="section-lbl">Project Assets</div>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:16px">
  <div style="background:var(--bg3);border:1px solid var(--b1);border-radius:8px;padding:14px;text-align:center">
    <div style="font-size:24px;font-weight:700;color:var(--gold)">${shots.length}</div>
    <div style="font-size:9px;color:var(--t4);text-transform:uppercase;margin-top:3px;letter-spacing:.06em">Shots</div>
  </div>
  <div style="background:var(--bg3);border:1px solid var(--b1);border-radius:8px;padding:14px;text-align:center">
    <div style="font-size:24px;font-weight:700;color:var(--blue)">${sbCount}</div>
    <div style="font-size:9px;color:var(--t4);text-transform:uppercase;margin-top:3px;letter-spacing:.06em">SB Frames</div>
  </div>
  <div style="background:var(--bg3);border:1px solid var(--b1);border-radius:8px;padding:14px;text-align:center">
    <div style="font-size:24px;font-weight:700;color:var(--purple)">${vidCount}</div>
    <div style="font-size:9px;color:var(--t4);text-transform:uppercase;margin-top:3px;letter-spacing:.06em">Video Clips</div>
  </div>
  <div style="background:var(--bg3);border:1px solid var(--b1);border-radius:8px;padding:14px;text-align:center">
    <div style="font-size:24px;font-weight:700;color:var(--green)">${audCount}</div>
    <div style="font-size:9px;color:var(--t4);text-transform:uppercase;margin-top:3px;letter-spacing:.06em">Audio Tracks</div>
  </div>
</div>

${refUrls.length ? `<div class="section-lbl">Reference Links</div>
<div style="display:flex;flex-direction:column;gap:4px;margin-bottom:16px">
${refUrls.map(u => `<a href="${u}" target="_blank" rel="noopener"
  style="color:var(--blue);font-size:11px;padding:7px 11px;background:var(--bg3);border:1px solid var(--b1);border-radius:6px;display:flex;align-items:center;gap:7px;text-decoration:none">
  <span style="flex-shrink:0">🔗</span>
  <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1">${esc(u)}</span>
</a>`).join('')}
</div>` : ''}

<div class="btn-row" style="margin-bottom:10px">
  <button class="btn btn-gold" onclick="ppAnalyseTools()">✦ Analyse &amp; Select Tools</button>
  <span id="pp-ts-st" style="font-size:9px;color:var(--t4)">${ts ? '✓ Analysis complete' : ''}</span>
</div>
<div class="ai-load" id="pp-ts-load"><div class="spinner"></div>Analysing project...</div>

${ts ? ppRenderStep1Results(pp) : '<div style="color:var(--t4);font-size:10px;padding:10px 0">Click above to analyse the project and select post-production tools.</div>'}

<div class="btn-row" style="margin-top:16px">
  <button class="btn btn-gold" onclick="ppGoToProcessing()" ${!ts ? 'disabled' : ''}>✦ Generate project.json →</button>
</div>`;
}

function ppRenderStep1Results(pp) {
  const ts = pp.toolSelection;
  if (!ts) return '';
  const ICONS  = { premiere_pro: '🎬', after_effects: '✨', blender: '🔷', photoshop: '🖼', illustrator: '✏', canva: '🎨' };
  const LABELS = { premiere_pro: 'Premiere Pro', after_effects: 'After Effects', blender: 'Blender', photoshop: 'Photoshop', illustrator: 'Illustrator', canva: 'Canva' };

  const toolCards = (ts.tools_required || []).map(tool => {
    const dep  = (ts.dependency_chain || []).find(d => d.tool === tool);
    const task = (dep?.task || '').replace(/_/g, ' ');
    const deps = dep?.depends_on || [];
    const reason = ts.tool_reasons?.[tool] || '';
    return `<div style="background:var(--bg3);border:1px solid var(--b2);border-radius:8px;padding:14px">
      <div style="display:flex;align-items:center;gap:9px;margin-bottom:8px">
        <span style="font-size:20px">${ICONS[tool] || '⚙'}</span>
        <div>
          <div style="font-size:12px;font-weight:700;color:var(--t1)">${LABELS[tool] || tool.replace(/_/g,' ')}</div>
          <div style="font-size:9px;color:var(--gold);text-transform:uppercase;letter-spacing:.05em;margin-top:1px">${task}</div>
        </div>
      </div>
      <div style="font-size:10px;color:var(--t3);line-height:1.55;margin-bottom:7px">${esc(reason)}</div>
      ${deps.length
        ? `<div style="font-size:8px;color:var(--t4)">↳ After: ${deps.map(d => LABELS[d] || d).join(', ')}</div>`
        : '<div style="font-size:8px;color:var(--green)">↳ First in chain</div>'}
    </div>`;
  }).join('');

  return `<div class="section-lbl">Selected Tools</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:8px;margin-bottom:16px">
${toolCards}
</div>

${pp.creativeDirection ? `<div class="section-lbl">Creative Direction</div>
<div class="fg" style="margin-bottom:16px">
  <textarea id="pp-cd-ta" rows="5"
    onchange="ppSaveCreativeDirection()"
    style="background:var(--bg3);border:1px solid var(--b2);color:var(--t1);padding:10px 13px;border-radius:var(--r);font-size:12px;font-family:inherit;line-height:1.7;resize:vertical;width:100%;outline:none;transition:var(--ease)"
    onfocus="this.style.borderColor='var(--gold)'"
    onblur="this.style.borderColor='var(--b2)'">${esc(pp.creativeDirection)}</textarea>
</div>` : ''}

${(pp.referenceAnalysis || []).length ? `<div class="section-lbl">Reference Analysis</div>
<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
${(pp.referenceAnalysis).map((ref, i) => ppRenderRefCard(ref, i)).join('')}
</div>` : ''}`;
}

function ppRenderRefCard(ref, i) {
  const cs   = ref.colour_grade || {};
  const temp = cs.temperature || 0;
  const sat  = Math.max(0, Math.min(100, (cs.saturation || 100) - 50));
  const hue  = 30 + temp * 0.5;
  const light = 38 + Math.max(-8, Math.min(8, (cs.shadows || 0) / 8));
  const swatch = `background:hsl(${hue},${sat}%,${light}%)`;

  return `<div style="background:var(--bg3);border:1px solid var(--b1);border-radius:8px;padding:12px">
  <div style="display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin-bottom:8px">
    <span style="font-size:9px;color:var(--blue);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(ref.url || '')}</span>
    <button class="btn btn-ghost btn-sm" onclick="ppReanalyseRef(${i})">↻ Reanalyse</button>
  </div>
  <div style="display:flex;gap:5px;flex-wrap:wrap;align-items:center;margin-bottom:6px">
    ${ref.pace        ? `<span class="badge badge-gray">${ref.pace} pace</span>` : ''}
    ${ref.rhythm      ? `<span class="badge badge-gray">${ref.rhythm}</span>` : ''}
    ${ref.transitions ? `<span class="badge badge-gray">${ref.transitions}</span>` : ''}
    ${ref.energy_arc  ? `<span class="badge badge-purple">${(ref.energy_arc).replace(/_/g,' ')}</span>` : ''}
    ${cs.style        ? `<span class="badge badge-gold">${cs.style.replace(/_/g,' ')}</span>` : ''}
    <div style="width:22px;height:22px;border-radius:50%;border:1px solid var(--b2);${swatch};flex-shrink:0;margin-left:auto"
         title="${esc(cs.description || 'Colour grade')}"></div>
  </div>
  ${ref.caption_style?.description ? `<div style="font-size:9px;color:var(--t4)">Caption: <span style="color:var(--t3)">${esc(ref.caption_style.description)}</span></div>` : ''}
  ${ref.avg_cut_duration_seconds   ? `<div style="font-size:9px;color:var(--t4)">Avg cut: <span style="color:var(--t3)">${ref.avg_cut_duration_seconds}s</span></div>` : ''}
</div>`;
}

function ppSaveCreativeDirection() {
  const ta = document.getElementById('pp-cd-ta');
  if (ta) savePP(S.pid, { creativeDirection: ta.value });
}

function ppGoToProcessing() {
  ppSaveCreativeDirection();
  // If manifest not yet generated, kick it off then navigate
  const p  = DB.getProject(S.pid); if (!p) return;
  const pp = getPP(p);
  if (!pp.manifest) {
    goStep(2);
    setTimeout(ppGenManifest, 200);
  } else {
    goStep(2);
  }
}

async function ppAnalyseTools() {
  if (!kC()) { toast('Enter Claude API key', 'err'); return; }
  const p = DB.getProject(S.pid); if (!p) return;
  const b = { ...p.clientBrief, ...p.brief };

  const load = document.getElementById('pp-ts-load');
  const stat = document.getElementById('pp-ts-st');
  load?.classList.add('show');
  if (stat) stat.textContent = 'Analysing...';

  const shots    = p.shots || [];
  const supers   = shots.filter(s => s.supers || (s.description || '').toLowerCase().includes('super')).map(s => s.description || s.scene).join(', ');
  const refUrls  = extractUrls(b.references || '');
  const has3d    = shots.some(s => (s.description || '').toLowerCase().includes('3d'));
  const hasSupers = supers.length > 0;

  const sys = 'You are a post production supervisor. Analyse projects and select the right tools for each job.';
  const usr = `Analyse this project and select the required post production tools.

PROJECT TYPE: ${MT[p.type]?.label || p.type}
BRIEF: ${Object.values(b).filter(v => v && typeof v === 'string').join(' ').substring(0, 300)}
SHOT LIST: ${JSON.stringify(shots.slice(0, 15).map(s => ({ num: s.num, scene: s.scene, type: s.type, description: s.description })))} — ${shots.length} shots
SCRIPT SUPERS (text on screen): ${supers || 'none'}
HAS 3D ELEMENTS: ${has3d}
HAS MOTION GRAPHICS: ${hasSupers}
PLATFORMS: ${b.platforms || 'Digital'}
REFERENCE URLS: ${refUrls.join(', ') || 'none'}
TONE: ${b.tone || 'not specified'}
DURATION: ${b.duration || 'not specified'}

Return JSON:
{
  "tools_required": ["premiere_pro", "after_effects"],
  "dependency_chain": [
    { "tool": "after_effects", "task": "supers_and_lower_thirds", "depends_on": [] },
    { "tool": "premiere_pro", "task": "final_assembly", "depends_on": ["after_effects"] }
  ],
  "creative_direction": "Plain English brief — pace, style, colour grade, caption style, energy arc. 3-4 sentences.",
  "tool_reasons": {
    "after_effects": "Script has 8 SUPER lines requiring animated text overlays",
    "premiere_pro": "Final assembly, colour grade, audio mix"
  }
}

Tool options: premiere_pro, after_effects, photoshop, illustrator, blender, canva
Only include tools that are genuinely needed.`;

  try {
    const r = await callClaude(sys, usr, 2000);
    const d = JSON.parse(r.replace(/```json|```/g, '').trim());

    // Reference analysis — parallel, cap at 3 refs
    let refAnalysis = getPP(p).referenceAnalysis || [];
    if (refUrls.length) {
      if (stat) stat.textContent = 'Analysing references...';
      refAnalysis = await Promise.all(refUrls.slice(0, 3).map(url => ppCallRefAnalysis(url, b)));
    }

    savePP(S.pid, {
      toolSelection:     d,
      creativeDirection: d.creative_direction,
      referenceAnalysis: refAnalysis
    });
    if (stat) stat.textContent = '✓ Analysis complete';
    toast('Tools selected!', 'ok');
    render();
  } catch(e) {
    toast(e.message, 'err');
    if (stat) stat.textContent = '';
  }
  load?.classList.remove('show');
}

async function ppCallRefAnalysis(url, b) {
  const sys = 'You are a post production editor and colorist. Analyse video references and extract precise technical parameters.';
  const usr = `Analyse this reference and extract editing style parameters.

REFERENCE URL: ${url}
PROJECT TYPE: ${b.type || 'video'}
TONE: ${b.tone || 'not specified'}

Return JSON:
{
  "pace": "fast_cut | medium | slow",
  "avg_cut_duration_seconds": 1.8,
  "rhythm": "beat_cut | dialogue_driven | action_matched | ambient | free_form",
  "time_remapping": { "used": true, "style": "speed_ramps | freeze_frames | slow_motion | none", "description": "Speed ramps on product reveals" },
  "transitions": "hard_cuts | dissolves | whip_pans | match_cuts | glitch | mixed",
  "energy_arc": "builds | constant | drops | peaks_and_valleys",
  "colour_grade": {
    "style": "warm_cinematic | cold_clean | desaturated | vibrant | natural | dark_moody",
    "description": "Description",
    "temperature": 15, "contrast": 25, "highlights": -20, "shadows": 15, "saturation": 110
  },
  "caption_style": {
    "font_weight": "bold | regular | light",
    "position": "bottom_third | centre | top | dynamic",
    "animation": "quick_pop | typewriter | slide_in | fade | kinetic",
    "background": "none | solid | blur | gradient",
    "description": "Bold white caps, quick pop animation, bottom third"
  },
  "music_style": "upbeat_electronic | cinematic_orchestral | minimal_ambient | hip_hop | none"
}`;

  try {
    const r = await callClaude(sys, usr, 1000);
    const d = JSON.parse(r.replace(/```json|```/g, '').trim());
    return { ...d, url };
  } catch(e) {
    return { url, pace: 'medium', rhythm: 'free_form', energy_arc: 'constant', colour_grade: {}, caption_style: {} };
  }
}

async function ppReanalyseRef(i) {
  const p  = DB.getProject(S.pid); if (!p) return;
  const pp = getPP(p);
  const refs = pp.referenceAnalysis || [];
  const ref  = refs[i]; if (!ref?.url) return;
  const b = { ...p.clientBrief, ...p.brief };
  toast('Reanalysing reference...', 'info');
  const updated = await ppCallRefAnalysis(ref.url, b);
  refs[i] = updated;
  savePP(S.pid, { referenceAnalysis: refs });
  render();
  toast('Reference updated', 'ok');
}

// ══════════════════════════════════════
// STEP 2 — PROCESSING (SCRIPT GENERATION)
// ══════════════════════════════════════

function sPostProcessing(p) {
  const pp       = getPP(p);
  const chain    = pp.toolSelection?.dependency_chain || [];
  const scripts  = pp.scripts    || {};
  const tsMap    = pp.toolStatus || {};
  const LABELS   = { premiere_pro: 'Premiere Pro', after_effects: 'After Effects', blender: 'Blender', photoshop: 'Photoshop', illustrator: 'Illustrator', canva: 'Canva' };

  const scriptCards = chain.map(dep => {
    const tool   = dep.tool;
    const task   = (dep.task || '').replace(/_/g, ' ');
    const deps   = dep.depends_on || [];
    const sKey   = ppScriptKey(tool);
    const ext    = tool === 'blender' ? '.py' : '.jsx';
    const script = scripts[sKey];
    const status = tsMap[sKey] || 'pending';
    // Blocked if any dependency script hasn't been generated
    const blocked = deps.some(d => !scripts[ppScriptKey(d)]);

    const statusClass = status === 'done' ? 'badge-green' : (status === 'generating' ? 'badge-gold' : 'badge-gray');

    return `<div class="card" style="margin-bottom:10px">
  <div class="card-head">
    <div style="display:flex;align-items:center;gap:8px">
      <span class="card-title">${LABELS[tool] || tool.replace(/_/g,' ')}</span>
      <span style="font-size:9px;color:var(--t4);font-weight:400;text-transform:none;letter-spacing:0">${task}</span>
    </div>
    <div style="display:flex;align-items:center;gap:7px">
      ${deps.length ? `<span style="font-size:9px;color:var(--t4)">after: ${deps.map(d => LABELS[d] || d).join(', ')}</span>` : ''}
      <span class="badge ${statusClass}">${status}</span>
    </div>
  </div>
  <div class="card-body">
    ${blocked ? `<div class="ib ib-red" style="margin-bottom:10px"><strong>Blocked</strong> — generate ${deps.map(d => LABELS[d] || d).join(', ')} first</div>` : ''}
    <div class="btn-row" style="margin-bottom:10px">
      <button class="btn ${blocked ? 'btn-ghost' : 'btn-gold'}" onclick="ppGenScript('${sKey}','${tool}')" ${blocked ? 'disabled' : ''}>✦ ${script ? 'Regenerate' : 'Generate'} Script</button>
      ${script ? `<button class="btn btn-outline btn-sm" onclick="ppDownloadScript('${sKey}','${ext}')">↓ ${ext}</button>` : ''}
    </div>
    <div class="ai-load" id="pp-sc-load-${sKey}"><div class="spinner"></div>Generating script...</div>
    ${script ? `<pre style="background:var(--bg4);border:1px solid var(--b1);border-radius:6px;padding:12px;max-height:320px;overflow-y:auto;font-family:monospace;font-size:10px;color:var(--t3);line-height:1.6;white-space:pre;overflow-x:auto;margin:0">${esc(script)}</pre>` : ''}
  </div>
</div>`;
  }).join('');

  const chainViz = chain.length > 1 ? `<div class="section-lbl">Dependency Chain</div>
<div style="background:var(--bg3);border:1px solid var(--b1);border-radius:8px;padding:14px;margin-bottom:14px;overflow-x:auto">
  <div style="display:flex;align-items:center;gap:10px;min-width:max-content">
    ${chain.map((dep, i) => {
      const sKey = ppScriptKey(dep.tool);
      const done = !!scripts[sKey];
      return `${i > 0 ? '<span style="color:var(--t3);font-size:18px;font-weight:300">→</span>' : ''}
      <div style="background:${done ? 'rgba(48,209,88,.07)' : 'var(--bg4)'};border:1px solid ${done ? 'rgba(48,209,88,.2)' : 'var(--b1)'};border-radius:6px;padding:8px 14px;text-align:center">
        <div style="font-size:11px;font-weight:600;color:${done ? 'var(--green)' : 'var(--t2)'}">${LABELS[dep.tool] || dep.tool}</div>
        <div style="font-size:8px;color:var(--t4);margin-top:2px">${(dep.task || '').replace(/_/g,' ')}</div>
        ${done ? '<div style="font-size:8px;color:var(--green);margin-top:2px">✓ ready</div>' : ''}
      </div>`;
    }).join('')}
  </div>
</div>` : '';

  return `<div class="ptitle">Generate Scripts</div>
<div class="psub">Generate project manifest and per-tool automation scripts</div>

<div class="section-lbl">project.json Manifest</div>
<div class="card" style="margin-bottom:14px">
  <div class="card-head">
    <span class="card-title">PROJECT.JSON</span>
    <div style="display:flex;gap:6px">
      <button class="btn btn-ghost btn-sm" onclick="ppGenManifest()">↻ ${pp.manifest ? 'Regenerate' : 'Generate'}</button>
      ${pp.manifest ? `<button class="btn btn-outline btn-sm" onclick="ppDownloadManifest()">↓ Download</button>` : ''}
    </div>
  </div>
  <div class="card-body">
    <div class="ai-load" id="pp-mf-load"><div class="spinner"></div>Generating manifest...</div>
    ${pp.manifest
      ? `<pre style="background:var(--bg4);border:1px solid var(--b1);border-radius:6px;padding:12px;max-height:280px;overflow-y:auto;font-family:monospace;font-size:10px;color:var(--t3);line-height:1.6;white-space:pre-wrap;margin:0">${esc(typeof pp.manifest === 'string' ? pp.manifest : JSON.stringify(pp.manifest, null, 2))}</pre>`
      : '<div style="color:var(--t4);font-size:10px">Click Generate to create the full project manifest.</div>'}
  </div>
</div>

<div class="section-lbl">Tool Scripts</div>
${chain.length === 0 ? '<div class="ib ib-gold">Complete Step 1 (Tool Selection) first.</div>' : ''}
${scriptCards}
${chainViz}

<div class="btn-row" style="margin-top:16px">
  <button class="btn btn-ghost" onclick="goStep(1)">← Back</button>
  <button class="btn btn-gold" onclick="goStep(3)">Export Settings →</button>
</div>`;
}

// Normalise tool ID → script storage key
function ppScriptKey(tool) {
  if (tool === 'premiere_pro')  return 'premiere';
  if (tool === 'after_effects') return 'aftereffects';
  return tool; // blender, photoshop, illustrator, canva
}

async function ppGenManifest() {
  if (!kC()) { toast('Enter Claude API key', 'err'); return; }
  const p  = DB.getProject(S.pid); if (!p) return;
  const pp = getPP(p);

  document.getElementById('pp-mf-load')?.classList.add('show');

  const sys = 'You are a post production technical director. Generate precise project manifests.';
  const usr = `Generate a complete project.json manifest for this project.

PROJECT: ${JSON.stringify({
  name:   p.name,
  type:   MT[p.type]?.label || p.type,
  brief:  { ...p.clientBrief, ...p.brief },
  shots:  (p.shots || []).slice(0, 20),
  script: (p.script || '').substring(0, 500)
})}
TOOLS REQUIRED: ${JSON.stringify(pp.toolSelection?.tools_required || [])}
DEPENDENCY CHAIN: ${JSON.stringify(pp.toolSelection?.dependency_chain || [])}
EDITING STYLE: ${JSON.stringify(pp.referenceAnalysis?.[0] || {})}
CREATIVE DIRECTION: ${pp.creativeDirection || ''}

Return a complete project.json with:
- All shot entries with timecodes, file paths, audio, supers
- Per-tool instructions with exact parameters
- Colour grade values (Lumetri parameters for Premiere)
- Caption/super specifications (font, size, animation, position)
- Audio mix levels (dB per track type)
- Export specifications per platform
- Dependency chain with input/output file names`;

  try {
    const r = await callClaude(sys, usr, 4000);
    const cleaned = r.replace(/```json|```/g, '').trim();
    let manifest;
    try { manifest = JSON.parse(cleaned); } catch(e) { manifest = cleaned; }
    savePP(S.pid, { manifest });
    toast('Manifest generated!', 'ok');
    render();
  } catch(e) {
    toast(e.message, 'err');
  }
  document.getElementById('pp-mf-load')?.classList.remove('show');
}

function ppDownloadManifest() {
  const p  = DB.getProject(S.pid); if (!p) return;
  const pp = getPP(p);
  const content = typeof pp.manifest === 'string' ? pp.manifest : JSON.stringify(pp.manifest, null, 2);
  dlFile(content, (p.name || 'project').replace(/\s+/g,'_') + '_project.json', 'application/json');
}

async function ppGenScript(sKey, toolId) {
  if (!kC()) { toast('Enter Claude API key', 'err'); return; }
  const p  = DB.getProject(S.pid); if (!p) return;
  const pp = getPP(p);

  const loadEl = document.getElementById('pp-sc-load-' + sKey);
  loadEl?.classList.add('show');

  const tsMap = pp.toolStatus || {};
  tsMap[sKey] = 'generating';
  savePP(S.pid, { toolStatus: tsMap });

  const b  = { ...p.clientBrief, ...p.brief };
  const es = (pp.referenceAnalysis || [])[0] || {};
  const cs = es.colour_grade || {};
  let sys, usr;

  if (toolId === 'premiere_pro') {
    sys = 'You are an expert Premiere Pro ExtendScript developer. Write scripts that build complete timelines programmatically.';
    usr = `Write a Premiere Pro ExtendScript (.jsx) that builds a complete timeline for this project.

PROJECT MANIFEST: ${JSON.stringify(pp.manifest || { name: p.name, shots: p.shots || [] })}

The script must:
1. Create a new sequence with correct settings (${b.fps || '25'}fps, ${b.resolution || '1920x1080'})
2. Import all video clips from the assets folder
3. Place clips in shot order on Video Track 1
4. Import and place all audio files on Audio Track 1 (dialogue) and Audio Track 2 (SFX)
5. Apply Lumetri colour grade: temperature=${cs.temperature || 0}, contrast=${cs.contrast || 0}, highlights=${cs.highlights || 0}, shadows=${cs.shadows || 0}, saturation=${cs.saturation || 100}
6. Add markers at each scene change with shot numbers
7. Set audio levels: dialogue=-6dB, sfx=-12dB, music=-18dB
8. Apply speed ramps where specified in manifest
9. Add chapter markers for key moments (product hero, CTA, pack shot)
10. Export the sequence to /delivery/${(p.name || 'project').replace(/\s+/g,'_')}_{platform}.{format}

Asset folder structure the script should expect:
/assets/videos/S01.mp4, S02.mp4 ... (shot number order)
/assets/audio/S01_audio.mp3, S02_audio.mp3 ...
/assets/ae_exports/supers_overlay.mov (if After Effects in chain)

Return ONLY the .jsx script, no explanation.`;
  } else if (toolId === 'after_effects') {
    const shots  = p.shots || [];
    const supers = shots
      .filter(s => s.supers || (s.description || '').toLowerCase().includes('super'))
      .map(s => ({ timecode: s.timecode || '00:00:00', text: s.scene || s.description, shot_num: s.num }));
    const captStyle = es.caption_style || {};
    sys = 'You are an expert After Effects ExtendScript developer. Write scripts that build motion graphic compositions.';
    usr = `Write an After Effects ExtendScript (.jsx) that creates all motion graphics for this project.

PROJECT MANIFEST: ${JSON.stringify(pp.manifest || { name: p.name, shots: p.shots || [] })}
SUPERS LIST: ${JSON.stringify(supers)}
CAPTION STYLE: ${JSON.stringify(captStyle)}
BRAND: ${b.colours ? 'Brand colours: ' + b.colours : 'No specific brand colours provided'}

The script must:
1. Create a new project
2. Create a composition per unique super/text element
3. Apply text animation preset: ${captStyle.animation || 'quick_pop'}
4. Set font size: 72, colour: #FFFFFF, weight: ${captStyle.font_weight || 'bold'}
5. Position: ${captStyle.position || 'bottom_third'}
6. Duration: 90 frames
7. Add brand elements where specified
8. Render all compositions to /assets/ae_exports/
9. Create a master comp that assembles all elements in timecode order

Return ONLY the .jsx script.`;
  } else if (toolId === 'blender') {
    const shots3d = (p.shots || []).filter(s => (s.description || '').toLowerCase().includes('3d'));
    const shot    = shots3d[0] || (p.shots || [])[0] || {};
    sys = 'You are an expert Blender Python developer. Write scripts that build complete 3D scenes.';
    usr = `Write a Blender Python script that builds a 3D scene for this shot.

SHOT: ${JSON.stringify(shot)}
CAMERA ANGLE: Front/Three-Quarter Left
LOCATION: ${shot.location || 'Studio environment'}
PROPS: ${shot.props || 'See shot description'}
LIGHTING: ${cs.style || 'natural'}
RENDER SETTINGS: 1920x1080, 24fps, 128 samples

The script must:
1. Clear default scene
2. Set up camera matching the specified angle
3. Import/create environment geometry for the location
4. Set up lighting with appropriate colour temperature
5. Import prop assets if available, otherwise create placeholder geometry
6. Set render settings: 1920x1080, 128 samples, EEVEE
7. Output render to /assets/blender_renders/${shot.num || '01'}.png

Return ONLY the Python script.`;
  } else {
    sys = 'You are an expert creative software developer.';
    usr = `Write a script for ${toolId.replace(/_/g,' ')} to automate processing for this project.

PROJECT: ${JSON.stringify({ name: p.name, type: p.type, shots: (p.shots || []).slice(0, 5) })}
MANIFEST: ${JSON.stringify(pp.manifest || {})}

Return ONLY the script, no explanation.`;
  }

  try {
    const r       = await callClaude(sys, usr, 4000);
    const scripts = { ...(pp.scripts || {}), [sKey]: r };
    const tsMap2  = { ...(pp.toolStatus || {}), [sKey]: 'done' };
    savePP(S.pid, { scripts, toolStatus: tsMap2 });
    toast('Script generated!', 'ok');
    render();
  } catch(e) {
    const tsMap2 = { ...(pp.toolStatus || {}), [sKey]: 'pending' };
    savePP(S.pid, { toolStatus: tsMap2 });
    toast(e.message, 'err');
    render();
  }
  loadEl?.classList.remove('show');
}

function ppDownloadScript(sKey, ext) {
  const p  = DB.getProject(S.pid); if (!p) return;
  const pp = getPP(p);
  const script = pp.scripts?.[sKey];
  if (!script) { toast('No script generated yet', 'err'); return; }
  const names = { premiere: 'premiere_timeline', aftereffects: 'aftereffects_supers', blender: 'blender_scene', photoshop: 'photoshop_grade', illustrator: 'illustrator_assets', canva: 'canva_layout' };
  const mtype = ext === '.py' ? 'text/x-python' : 'application/javascript';
  dlFile(script, (names[sKey] || sKey) + ext, mtype);
}

// ══════════════════════════════════════
// STEP 3 — EXPORT
// ══════════════════════════════════════

const PP_PLATFORM_DEFAULTS = {
  instagram_reel: { label: 'Instagram Reel',     codec: 'H.264',       resolution: '1080x1920', fps: 30, bitrate: '8Mbps',  max_size_mb: 15, audio_codec: 'AAC', audio_bitrate: '320kbps' },
  youtube:        { label: 'YouTube',             codec: 'H.264',       resolution: '3840x2160', fps: 25, bitrate: '40Mbps', audio_codec: 'AAC', audio_bitrate: '320kbps' },
  tvc:            { label: 'TVC (Broadcast)',     codec: 'ProRes 4444', resolution: '1920x1080', fps: 25, bitrate: '220Mbps', broadcast_safe: true, audio_codec: 'PCM', audio_bitrate: '48kHz/24bit' }
};

function sPostExport(p) {
  const pp        = getPP(p);
  const shots     = p.shots || [];
  const vidCount  = Object.values(S.vidState   || {}).filter(s => s?.url).length;
  const audCount  = Object.values(S.audioState || {}).filter(s => s?.url).length;
  const sbCount   = Object.values(S.sbState    || {}).filter(s => s?.status === 'done').length;
  const platforms = pp.exportSettings && Object.keys(pp.exportSettings).length
    ? pp.exportSettings
    : {};
  const scripts   = pp.scripts || {};
  const chainLen  = pp.toolSelection?.tools_required?.length || 1;

  return `<div class="ptitle">Export</div>
<div class="psub">Platform export settings and final delivery package</div>

<div class="btn-row" style="margin-bottom:10px">
  <button class="btn btn-gold" onclick="ppGenExportSettings()">✦ Generate Export Settings</button>
  <span id="pp-ex-st" style="font-size:9px;color:var(--t4)">${Object.keys(platforms).length ? '✓ Generated' : ''}</span>
</div>
<div class="ai-load" id="pp-ex-load"><div class="spinner"></div>Generating export settings...</div>

<div class="section-lbl">Platform Settings</div>
<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:10px">
${Object.keys(platforms).length
  ? Object.entries(platforms).map(([k, v]) => ppRenderPlatCard(k, v)).join('')
  : Object.entries(PP_PLATFORM_DEFAULTS).slice(0, 1).map(([k, v]) => ppRenderPlatCard(k, v)).join('')}
</div>
<button class="btn btn-ghost btn-sm" style="margin-bottom:16px" onclick="ppAddPlatform()">+ Add Platform</button>

<div class="section-lbl">Delivery Package</div>
<div class="card" style="margin-bottom:14px">
  <div class="card-body">
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px">
      <button class="btn btn-outline" onclick="ppDownloadExportSettings()">↓ export_settings.json</button>
      <button class="btn btn-gold" onclick="ppGenExportScript()">✦ Generate Export Script</button>
      ${pp.exportScript ? `<button class="btn btn-outline" onclick="ppDownloadExportScript()">↓ export_premiere.jsx</button>` : ''}
    </div>
    <div class="ai-load" id="pp-exsc-load"><div class="spinner"></div>Generating export script...</div>
    ${pp.exportScript ? `<div style="font-size:9px;color:var(--green)">✓ Export script ready</div>` : ''}
  </div>
</div>

<div class="section-lbl">Project Summary</div>
<div class="card" style="margin-bottom:14px">
  <div class="card-body">
    <div style="display:flex;flex-direction:column;gap:7px;margin-bottom:16px">
      ${ppChecklistItem('Storyboard frames',   sbCount,                             shots.length)}
      ${ppChecklistItem('Video clips',         vidCount,                            shots.length)}
      ${ppChecklistItem('Audio tracks',        audCount,                            shots.length)}
      ${ppChecklistItem('project.json',        pp.manifest ? 1 : 0,                1)}
      ${ppChecklistItem('Generated scripts',   Object.keys(scripts).length,         chainLen)}
      ${ppChecklistItem('Export settings',     Object.keys(platforms).length > 0 ? 1 : 0, 1)}
    </div>
    <div class="btn-row">
      <button class="btn btn-green" onclick="ppMarkComplete()">Mark as Complete ✓</button>
    </div>
    ${p.workflowStatus === 'complete' ? '<div style="margin-top:8px"><span class="badge badge-green">Project Complete ✓</span></div>' : ''}
  </div>
</div>

<div class="btn-row">
  <button class="btn btn-ghost" onclick="goStep(2)">← Back</button>
</div>`;
}

function ppChecklistItem(label, count, total) {
  const done    = total > 0 && count >= total;
  const partial = count > 0 && !done;
  const col   = done ? 'var(--green)' : (partial ? 'var(--gold)' : 'var(--t4)');
  const icon  = done ? '✓' : (partial ? '◑' : '○');
  const tCol  = done ? 'var(--t2)' : 'var(--t4)';
  return `<div style="display:flex;align-items:center;gap:8px">
  <span style="color:${col};font-size:13px;width:16px;flex-shrink:0">${icon}</span>
  <span style="font-size:11px;color:${tCol};flex:1">${label}</span>
  <span style="font-size:9px;color:var(--t4)">${count} / ${total}</span>
</div>`;
}

function ppRenderPlatCard(key, plat) {
  const val = (f) => esc(String(plat[f] || ''));
  return `<div style="background:var(--bg3);border:1px solid var(--b1);border-radius:8px;padding:14px" data-platform="${key}">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
    <span style="font-size:12px;font-weight:600;color:var(--t1)">${esc(plat.label || key.replace(/_/g,' '))}</span>
    <button class="btn btn-ghost btn-sm" onclick="ppRemovePlatform('${key}')">✕</button>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
    ${ppPlatField(key,'codec','Codec',val('codec'))}
    ${ppPlatField(key,'resolution','Resolution',val('resolution'))}
    ${ppPlatField(key,'fps','FPS',val('fps'),'number')}
    ${ppPlatField(key,'bitrate','Bitrate',val('bitrate'))}
    ${ppPlatField(key,'audio_bitrate','Audio',val('audio_bitrate'))}
    ${ppPlatField(key,'audio_codec','Audio Codec',val('audio_codec'))}
  </div>
</div>`;
}

function ppPlatField(key, field, lbl, val, type) {
  return `<div class="fg" style="margin:0">
  <label>${lbl}</label>
  <input type="${type || 'text'}" value="${val}"
    onchange="ppUpdatePlatform('${key}','${field}',${type === 'number' ? '+this.value' : 'this.value'})"
    style="background:var(--bg4);border:1px solid var(--b1);color:var(--t1);padding:6px 10px;border-radius:var(--r);font-size:11px;font-family:inherit;outline:none;width:100%;transition:var(--ease)"
    onfocus="this.style.borderColor='var(--gold)'"
    onblur="this.style.borderColor='var(--b1)'"/>
</div>`;
}

function ppUpdatePlatform(key, field, value) {
  const p = DB.getProject(S.pid); if (!p) return;
  const pp = getPP(p);
  if (!pp.exportSettings) pp.exportSettings = {};
  if (!pp.exportSettings[key]) pp.exportSettings[key] = { ...(PP_PLATFORM_DEFAULTS[key] || {}) };
  pp.exportSettings[key][field] = value;
  savePP(S.pid, { exportSettings: pp.exportSettings });
}

function ppRemovePlatform(key) {
  const p = DB.getProject(S.pid); if (!p) return;
  const pp = getPP(p);
  if (!pp.exportSettings) return;
  delete pp.exportSettings[key];
  savePP(S.pid, { exportSettings: pp.exportSettings });
  render();
}

function ppAddPlatform() {
  const key = 'platform_' + Date.now();
  const p   = DB.getProject(S.pid); if (!p) return;
  const pp  = getPP(p);
  if (!pp.exportSettings) pp.exportSettings = {};
  pp.exportSettings[key] = { label: 'New Platform', codec: 'H.264', resolution: '1920x1080', fps: 25, bitrate: '16Mbps', audio_codec: 'AAC', audio_bitrate: '320kbps' };
  savePP(S.pid, { exportSettings: pp.exportSettings });
  render();
}

async function ppGenExportSettings() {
  if (!kC()) { toast('Enter Claude API key', 'err'); return; }
  const p = DB.getProject(S.pid); if (!p) return;
  const b = { ...p.clientBrief, ...p.brief };

  document.getElementById('pp-ex-load')?.classList.add('show');
  document.getElementById('pp-ex-st').textContent = 'Generating...';

  const sys = 'You are a delivery and mastering engineer. Generate precise export specifications.';
  const usr = `Generate export settings for this project.

PROJECT TYPE: ${MT[p.type]?.label || p.type}
PLATFORMS: ${b.platforms || 'Digital / YouTube pre-roll, Instagram & Facebook Reels'}
DURATION: ${b.duration || 'not specified'}
HAS DIALOGUE: ${(p.shots || []).some(s => (s.description || '').toLowerCase().includes('dialogue')) ? 'yes' : 'likely'}

Return JSON:
{
  "platforms": {
    "instagram_reel": {
      "label": "Instagram Reel",
      "codec": "H.264",
      "resolution": "1080x1920",
      "fps": 30,
      "bitrate": "8Mbps",
      "max_size_mb": 15,
      "audio_codec": "AAC",
      "audio_bitrate": "320kbps",
      "premiere_preset": "Match Source - High Bitrate"
    }
  }
}`;

  try {
    const r = await callClaude(sys, usr, 2000);
    const d = JSON.parse(r.replace(/```json|```/g, '').trim());
    savePP(S.pid, { exportSettings: d.platforms || d });
    document.getElementById('pp-ex-st').textContent = '✓ Generated';
    toast('Export settings generated!', 'ok');
    render();
  } catch(e) {
    toast(e.message, 'err');
    document.getElementById('pp-ex-st').textContent = '';
  }
  document.getElementById('pp-ex-load')?.classList.remove('show');
}

async function ppGenExportScript() {
  if (!kC()) { toast('Enter Claude API key', 'err'); return; }
  const p  = DB.getProject(S.pid); if (!p) return;
  const pp = getPP(p);

  document.getElementById('pp-exsc-load')?.classList.add('show');

  const sys = 'You are an expert Premiere Pro ExtendScript developer.';
  const usr = `Write a Premiere Pro ExtendScript (.jsx) that exports the final sequence to all delivery formats.

PROJECT NAME: ${p.name}
EXPORT SETTINGS: ${JSON.stringify(pp.exportSettings || PP_PLATFORM_DEFAULTS)}

The script must:
1. Get the active sequence in Premiere Pro
2. For each platform below, set up an AME export job with the specified codec and resolution
3. Export to /delivery/ folder with project name and platform as filename
4. Show progress for each export
5. Alert when all exports are complete

Return ONLY the .jsx script.`;

  try {
    const r = await callClaude(sys, usr, 3000);
    savePP(S.pid, { exportScript: r });
    toast('Export script generated!', 'ok');
    render();
  } catch(e) {
    toast(e.message, 'err');
  }
  document.getElementById('pp-exsc-load')?.classList.remove('show');
}

function ppDownloadExportSettings() {
  const p  = DB.getProject(S.pid); if (!p) return;
  const pp = getPP(p);
  const settings = pp.exportSettings && Object.keys(pp.exportSettings).length ? pp.exportSettings : PP_PLATFORM_DEFAULTS;
  dlFile(JSON.stringify({ platforms: settings }, null, 2), 'export_settings.json', 'application/json');
}

function ppDownloadExportScript() {
  const p  = DB.getProject(S.pid); if (!p) return;
  const pp = getPP(p);
  if (!pp.exportScript) { toast('Generate export script first', 'err'); return; }
  dlFile(pp.exportScript, 'export_premiere.jsx', 'application/javascript');
}

function ppMarkComplete() {
  const p = DB.getProject(S.pid); if (!p) return;
  if (!p.stageHistory) p.stageHistory = [];
  p.stageHistory.push({ stage: 'complete', enteredAt: new Date().toISOString() });
  p.workflowStatus = 'complete';
  DB.saveProject(p);
  toast('Project marked as complete!', 'ok');
  render();
}
