
// ══════════════════════════════════════
// MEDIA TYPES
// ══════════════════════════════════════
const MT={
  commercial_ad:{label:'Commercial Ad',icon:'📺',color:'gold',
    clientQs:[
      {id:'brand',q:'What is your brand or company name?',hint:'e.g. Mercedes-Benz India, Zomato, Noise',t:'text'},
      {id:'product',q:'What product or service are you advertising?',hint:'e.g. E-Class Sedan launch, Summer Sale, New App Feature',t:'text'},
      {id:'platforms',q:'Where will this ad run?',t:'select',opts:['Digital / YouTube pre-roll','Instagram & Facebook Reels','Television (TVC)','Cinema (PVR / INOX)','Out-of-Home (Hoarding / Billboard)','Multiple platforms']},
      {id:'duration',q:'How long should the ad be?',t:'select',opts:['6 seconds (bumper)','15 seconds','30 seconds','45 seconds','60 seconds','90 seconds to 2 minutes (brand film)']},
      {id:'audience',q:'Who is your target audience?',hint:'e.g. Working professionals aged 28-40 in metros, first-time car buyers',t:'text'},
      {id:'tone',q:'What feeling should the ad evoke in the viewer?',t:'select',opts:['Premium & aspirational','Fun & lighthearted','Emotional & heartfelt','Bold & powerful','Comedic / satirical','Urgent & action-driving','Nostalgic & warm']},
      {id:'message',q:'What is the single core message or tagline?',hint:'The one thing you want the viewer to remember. e.g. Stuck? Upgrade.',t:'text'},
      {id:'cta',q:'What should the viewer do after watching?',hint:'e.g. Visit the website, call a number, download the app, visit the showroom',t:'text'},
      {id:'hero_moment',q:'Is there a key visual or hero moment you want in the ad?',hint:'e.g. Car driving at sunrise, product unboxing, a family reunion',t:'textarea'},
      {id:'references',q:'Any ads or brands whose style you admire?',hint:'e.g. Something like Apple iPhone ads, Fun like Fevicol — paste YouTube or Instagram links',t:'textarea'},
      {id:'avoid',q:'What should NOT be in this ad?',hint:'Competitors, certain visuals, topics, colours, or stereotypes to avoid',t:'text'},
      {id:'special',q:'Any special requirements?',hint:'e.g. Must include a celebrity, product shown in first 3 seconds, need Hindi and English versions',t:'textarea'},
    ]},
  short_film:{label:'Short Film',icon:'🎬',color:'purple',
    clientQs:[
      {id:'title',q:'Working title of the film?',hint:'e.g. The Last Call',t:'text'},
      {id:'genre',q:'Genre?',t:'select',opts:['Drama','Thriller','Comedy','Romance','Horror','Sci-Fi','Slice of life']},
      {id:'logline',q:'Describe the story in one sentence',hint:'e.g. A retired cop reconnects with his daughter through one last case',t:'text'},
      {id:'duration',q:'Target running time?',t:'select',opts:['5–10 min','10–20 min','20–30 min']},
      {id:'setting',q:'Where and when is it set?',hint:'e.g. Present-day Mumbai',t:'text'},
      {id:'concept',q:'Tell us more about your story',hint:'Characters, conflict, mood',t:'textarea'},
    ]},
  youtube_explainer:{label:'YouTube Explainer',icon:'▶',color:'red',
    clientQs:[
      {id:'topic',q:'What topic will the video explain?',hint:'e.g. How compound interest works',t:'text'},
      {id:'channel',q:'Channel or brand name?',t:'text'},
      {id:'audience',q:'Who is your audience?',hint:'e.g. Young professionals learning to invest',t:'text'},
      {id:'duration',q:'Video length?',t:'select',opts:['3–5 min','5–10 min','10–15 min']},
      {id:'keypoints',q:'Top 3 things viewers must learn?',hint:'One per line',t:'textarea'},
      {id:'cta',q:'What should viewers do at the end?',hint:'e.g. Subscribe, download guide',t:'text'},
    ]},
  podcast:{label:'Podcast',icon:'🎙',color:'blue',
    clientQs:[
      {id:'show',q:'Podcast show name?',t:'text'},
      {id:'episode',q:'What is this episode about?',t:'text'},
      {id:'format',q:'Episode format?',t:'select',opts:['Solo monologue','Interview','Panel discussion','Narrative storytelling']},
      {id:'duration',q:'Episode length?',t:'select',opts:['15–20 min','30–45 min','45–60 min']},
      {id:'guest',q:'Guest name and expertise? (if any)',t:'text'},
      {id:'keypoints',q:'Main topics to cover?',t:'textarea'},
    ]},
  product_video:{label:'Product Video',icon:'📦',color:'teal',
    clientQs:[
      {id:'brand',q:'Brand name?',t:'text'},
      {id:'product',q:'Product name and category?',hint:'e.g. AirFlow Pro V2 — air purifier',t:'text'},
      {id:'audience',q:'Target customer?',t:'text'},
      {id:'duration',q:'Video length?',t:'select',opts:['30 sec','60 sec','90 sec','2–3 min']},
      {id:'usp',q:'Top 3 features or benefits?',hint:'One per line',t:'textarea'},
      {id:'cta',q:'Call to action?',hint:'e.g. Available on Amazon',t:'text'},
    ]},
  testimonial:{label:'Testimonial',icon:'🎤',color:'green',
    clientQs:[
      {id:'brand',q:'Your brand name?',t:'text'},
      {id:'subject',q:'Who is being interviewed?',hint:'Name and title',t:'text'},
      {id:'company',q:'Their company?',t:'text'},
      {id:'outcome',q:'What result should this highlight?',hint:'e.g. 40% cost reduction',t:'text'},
      {id:'keypoints',q:'Key messages to cover?',t:'textarea'},
      {id:'platform',q:'Where will this be used?',t:'select',opts:['Website','Sales deck','Social media','Internal']},
    ]},
  influencer_ugc:{label:'Influencer / UGC',icon:'📱',color:'pink',
    clientQs:[
      {id:'brand',q:'Brand or product?',t:'text'},
      {id:'platform',q:'Platform?',t:'select',opts:['Instagram Reels','TikTok','YouTube Shorts','Multiple']},
      {id:'duration',q:'Video length?',t:'select',opts:['15 sec','30 sec','60 sec']},
      {id:'format',q:'Content format?',t:'select',opts:['Product review','Tutorial','Before & after','Day in the life','Unboxing']},
      {id:'keypoints',q:'Key benefits to mention?',t:'textarea'},
      {id:'cta',q:'Call to action and promo code?',t:'text'},
    ]},
  music_video:{label:'Music Video',icon:'🎵',color:'coral',
    clientQs:[
      {id:'artist',q:'Artist or band name?',t:'text'},
      {id:'song',q:'Song title and genre?',t:'text'},
      {id:'theme',q:'Mood or visual theme?',t:'select',opts:['Dark & cinematic','Bright & euphoric','Gritty & raw','Surreal & abstract','Nostalgic & warm']},
      {id:'concept',q:'Describe your visual concept',t:'textarea'},
      {id:'lyrics',q:'Paste the song lyrics',hint:'We sync visuals to the song structure',t:'textarea'},
    ]},
  design:{label:'Design',icon:'✏',color:'teal',
    clientQs:[
      {id:'brand',q:'What is your brand or company name?',hint:'e.g. Zomato, Apple India, Local Bakery',t:'text'},
      {id:'design_type',q:'What type of design do you need?',t:'select',opts:['Social Media Static Post','Social Media Carousel','YouTube Thumbnail','Event Poster','Hoarding / Billboard','Magazine Cover','Brochure / Flyer','Logo','Brand Identity Kit','Packaging Design','Presentation Deck','Other — describe below']},
      {id:'platform',q:'Where will this design be used?',hint:'e.g. Instagram, print, outdoor, website',t:'text'},
      {id:'count',q:'How many designs do you need?',t:'select',opts:['1 design','2–3 designs','5 designs','10 designs','Custom — specify in notes']},
      {id:'size',q:'What size or dimensions do you need?',hint:'e.g. A4, 1080×1080px, 40×60 ft — or leave blank if unsure',t:'text'},
      {id:'tone',q:'What visual style are you looking for?',t:'select',opts:['Clean & minimal','Bold & vibrant','Luxury & premium','Fun & playful','Dark & moody','Natural & earthy','Corporate & professional','Retro / vintage']},
      {id:'copy',q:'What text or copy should appear on the design?',hint:'Headlines, taglines, offers, dates, contact info',t:'textarea'},
      {id:'colours',q:'Do you have brand colours? If yes, share them.',hint:'e.g. Primary: #FF5733, Secondary: Navy Blue — or just describe: "red and white"',t:'text'},
      {id:'references',q:'Any reference designs you like?',hint:'Paste links, describe styles, or name brands whose look you admire',t:'textarea'},
      {id:'deadline',q:'When do you need this by?',hint:'e.g. 25th March, end of this week',t:'text'},
    ]},
};

const IMG_MODELS=[
  {id:'fal-ai/flux-pro/v1.1-ultra',n:'FLUX 1.1 Ultra',s:'Best quality, photorealistic',tags:['recommended','photorealistic'],c:'~$0.06/img'},
  {id:'fal-ai/flux/dev',n:'FLUX Dev',s:'Fast, good quality',tags:['fast'],c:'~$0.03/img'},
  {id:'fal-ai/flux-pro/kontext',n:'FLUX Kontext',s:'Image-to-image, consistency',tags:['img2img','consistency'],c:'~$0.05/img'},
  {id:'fal-ai/recraft-v3',n:'Recraft V3',s:'Design, illustration, logos',tags:['design','illustration'],c:'~$0.04/img'},
  {id:'fal-ai/ideogram/v2',n:'Ideogram V2',s:'Text in images, posters',tags:['text-rendering'],c:'~$0.05/img'},
  {id:'fal-ai/stable-diffusion-v35-large',n:'Stable Diffusion 3.5',s:'Open, versatile, high detail',tags:['versatile'],c:'~$0.04/img'},
  {id:'fal-ai/nano-banana/v1',n:'Nano Banana',s:'Ultra-photorealistic, skin detail',tags:['photorealistic','skin'],c:'~$0.08/img',responseKey:'image'},
  {id:'fal-ai/seedream-3',n:'Seedream 3.0',s:'Artistic, stylized, cinematic',tags:['artistic','cinematic'],c:'~$0.05/img'},
  {id:'fal-ai/flux/schnell',n:'FLUX Schnell',s:'Fastest, drafts & iterations',tags:['fast','draft'],c:'~$0.01/img'},
  {id:'fal-ai/aura-flow',n:'AuraFlow',s:'Creative, painterly, artistic',tags:['artistic'],c:'~$0.03/img'},
  {id:'fal-ai/kolors',n:'Kolors',s:'Vivid colors, commercial look',tags:['commercial','vivid'],c:'~$0.03/img'},
  {id:'fal-ai/playground-v25',n:'Playground v2.5',s:'Aesthetic, social media quality',tags:['social','aesthetic'],c:'~$0.02/img'},
  {id:'openai/dall-e-3',n:'DALL-E 3',s:'Creative, accurate prompt following',tags:['creative','accurate'],c:'~$0.08/img'},
  {id:'fal-ai/soul-cinema',n:'Soul Cinema',s:'Cinematic grade, film aesthetics',tags:['cinematic','film'],c:'~$0.07/img'},
  {id:'openai/gpt-image-1',n:'GPT Image (OpenAI)',s:'Precise prompt following, text-in-image',tags:['accurate','text'],c:'~$0.08/img'},
  {id:'google/imagen-3',n:'Imagen 3 (Google)',s:'Enterprise photorealism, Vertex AI',tags:['photorealistic','enterprise'],c:'~$0.08/img'},
  {id:'adobe/firefly-image-3',n:'Adobe Firefly 3',s:'Copyright-safe, licensed training data',tags:['commercial-safe','licensed'],c:'~$0.06/img'},
  {id:'leonardo/phoenix',n:'Leonardo Phoenix',s:'Product viz, concept art, game assets',tags:['product','concept'],c:'~$0.04/img'}
];
const IMG_QUALITY=['standard','hd'];
const IMG_TONES=['photorealistic','cinematic','illustration','editorial','minimal','vibrant','moody','warm','cool'];
const WRITER_TYPES=[
  {id:'film',n:'Film Writer',icon:'🎬',desc:'Cinematic storytelling, visual narratives, emotional arcs',sys:'You are an award-winning film scriptwriter. Write with cinematic depth, visual poetry, and emotional resonance. Focus on show-don\'t-tell, subtext, and powerful visual storytelling.'},
  {id:'commercial',n:'Commercial Ad Writer',icon:'📺',desc:'Punchy, time-coded, brand-focused ad scripts',sys:'You are a senior TVC and digital ad scriptwriter at a top agency. Every second counts. Write punchy, precise, brand-driven scripts that sell. Time-coded, visual-first, emotionally compelling.'},
  {id:'social_short',n:'Social Media (Short-form)',icon:'📱',desc:'Reels, TikTok, Shorts — hook-driven, fast-paced',sys:'You are a viral short-form content writer specializing in Instagram Reels, TikTok, and YouTube Shorts. Master the hook in 1 second, deliver value fast, end with a bang. Conversational, trend-aware, scroll-stopping.'},
  {id:'youtube_long',n:'Long-form (YouTube)',icon:'🎥',desc:'Educational, documentary, or entertainment — structured for retention',sys:'You are an expert YouTube scriptwriter who understands retention curves. Write with strong hooks, pattern interrupts, open loops, and satisfying payoffs. Structure for 8-20 minute videos with chapters and visual cues.'},
  {id:'brand_copy',n:'Brand Copywriter',icon:'✍',desc:'Brand voice, taglines, campaign messaging, tone of voice',sys:'You are a senior brand copywriter who crafts distinctive brand voices. Write copy that builds brand equity — taglines, manifestos, campaign lines, product descriptions. Every word carries the brand\'s personality.'},
  {id:'auto',n:'Auto (Recommended)',icon:'✦',desc:'Automatically selects the best writer for your project type',sys:''}
];
const VIDEO_MODELS=[
  {id:'fal-ai/veo3',n:'Google Veo 3',s:'Dialogue, humans, cinematic',tags:['dialogue','cinematic','recommended'],c:'~$0.50–1.00/shot'},
  {id:'fal-ai/kling-video/v2.1/master/image-to-video',n:'Kling 2.1 Master',s:'Consistency, vehicles, stylized',tags:['consistency'],c:'~$0.20–0.40'},
  {id:'fal-ai/kling-video/v2.5/master/image-to-video',n:'Kling 2.5 Turbo',s:'Faster Kling, high quality',tags:['fast','consistency'],c:'~$0.15–0.30'},
  {id:'fal-ai/minimax/video-01-live',n:'Minimax Hailuo 02',s:'Fast, action, dynamic motion',tags:['fast','action'],c:'~$0.10–0.20'},
  {id:'fal-ai/runway-gen4/image-to-video',n:'Runway Gen-4',s:'Premium tracking, commercial',tags:['tracking','premium'],c:'~$0.80–1.20'},
  {id:'fal-ai/wan-2.1/image-to-video',n:'Wan 2.1',s:'Flexible, budget-friendly',tags:['budget'],c:'~$0.05–0.15'},
  {id:'fal-ai/wan-2.2/image-to-video',n:'Wan 2.2',s:'Improved Wan, better motion',tags:['budget','motion'],c:'~$0.06–0.18'},
  {id:'luma/dream-machine',n:'Luma Ray3',s:'Physics-based, realistic motion',tags:['realistic','physics'],c:'~$0.30–0.60'},
  {id:'fal-ai/pika/v2.2/image-to-video',n:'Pika 2.2',s:'Stylized, effects, creative',tags:['stylized','effects'],c:'~$0.15–0.35'},
  {id:'fal-ai/cogvideox-5b/image-to-video',n:'CogVideoX 5B',s:'Open source, consistent',tags:['open-source'],c:'~$0.05–0.12'},
  {id:'fal-ai/haiper-video-v2',n:'Haiper v2',s:'Smooth motion, natural scenes',tags:['smooth','natural'],c:'~$0.10–0.20'},
  {id:'fal-ai/seedance-pro',n:'Seedance Pro',s:'Dance, movement, body motion',tags:['motion','body'],c:'~$0.20–0.40'},
  {id:'openai/sora-2',n:'Sora 2',s:'Long-form, coherent narratives',tags:['long-form','narrative'],c:'~$1.00–2.00/shot'},
  {id:'lightricks/ltx-2',n:'LTX-2 (Lightricks)',s:'4K · 50fps · copyright-safe · ComfyUI ready',tags:['4k','open-source','commercial-safe'],c:'~$0.04–0.10'},
  {id:'tencent/hunyuan-video',n:'HunyuanVideo',s:'Cinematic, open-source, strong motion',tags:['cinematic','open-source'],c:'~$0.05–0.12'},
  {id:'skyreels/v1',n:'SkyReels V1',s:'Human-centric, 33 expressions, film-trained',tags:['human','cinematic'],c:'~$0.15–0.30'},
  {id:'adobe/firefly-video',n:'Adobe Firefly Video',s:'Copyright-safe, Premiere Pro integration',tags:['commercial-safe','premiere'],c:'~$0.20–0.50'}
];

const VEO_RULES=[
  {id:'eyeline',n:'01',title:'Eye-Line Rule',d:'Explicit direction + reference point for every gaze.'},
  {id:'stillness',n:'02',title:'Listener Stillness',d:'"posture still, subtle breathing, micro facial movement."'},
  {id:'audiosilence',n:'03',title:'Audio Silence',d:'"audio": "none" when no dialogue — never blank.'},
  {id:'camera',n:'04',title:'Camera Motion',d:'Static unless explicitly requesting movement.'},
  {id:'lens',n:'05',title:'Lens & Depth',d:'Telephoto feel (70–100mm), shallow DOF.'},
  {id:'motion',n:'06',title:'Smooth Motion',d:'"smooth natural movement, micro facial movement."'},
  {id:'safety',n:'07',title:'Safety Filter',d:'Visual prompt = physical action ONLY.'},
];

// ══════════════════════════════════════
// DATA LAYER — in-memory (localStorage optional fallback)
// ══════════════════════════════════════
// ══════════════════════════════════════
// DATA LAYER — in-memory cache + localStorage fallback + Supabase sync
// ══════════════════════════════════════
let _users=[], _projects=[], _session=null, _notifs=[], _integrations=[], _ldEntries=[], _pms=[], _pmChats=[], _pmMemory={};
function _tryLS(fn){try{fn()}catch(e){console.warn('localStorage error:',e.message);}}

// Debounce utility — delays fn execution until wait ms after last call
let _debounceTimers={};
function debounceRender(key,ms){clearTimeout(_debounceTimers[key]);_debounceTimers[key]=setTimeout(()=>render(),ms||300);}

// Safe password visibility toggle
function togglePwVis(btn){
  const code=btn?.previousElementSibling;
  if(!code||!code.dataset.pw)return;
  const masked='••••••••';
  code.textContent=code.textContent===masked?code.dataset.pw:masked;
  btn.textContent=code.textContent===masked?'👁':'👁‍🗨';
}
function _loadLS(){
  _tryLS(()=>{const u=localStorage.getItem('sv2_users');if(u)_users=JSON.parse(u)});
  _tryLS(()=>{const p=localStorage.getItem('sv2_projects');if(p)_projects=JSON.parse(p)});
  _tryLS(()=>{const s=JSON.parse(localStorage.getItem('sv2_session')||'null');if(s&&new Date(s.exp)>new Date())_session=s;});
  _tryLS(()=>{const n=localStorage.getItem('sv2_notifs');if(n)_notifs=JSON.parse(n)});
  _tryLS(()=>{const i=localStorage.getItem('sv2_integrations');if(i)_integrations=JSON.parse(i)});
  _tryLS(()=>{const l=localStorage.getItem('sv2_ld');if(l)_ldEntries=JSON.parse(l)});
  _tryLS(()=>{const c=localStorage.getItem('sv2_pmchats');if(c)_pmChats=JSON.parse(c)});
  _tryLS(()=>{const m=localStorage.getItem('sv2_pmmem');if(m)_pmMemory=JSON.parse(m)});
}
_loadLS();

// ── Supabase REST layer ──
const SB={
  _url:'',_key:'',_status:'unconfigured', // unconfigured | ok | error | syncing
  _queue:[],_flushing:false,_retries:0,_maxRetries:3,_dirty:new Set(), // _dirty tracks IDs with local unsaved changes
  init(){
    this._url=localStorage.getItem('sb_url')||'';
    this._key=localStorage.getItem('sb_key')||'';
    if(this._url&&this._key)this._status='saved'; else this._status='unconfigured';
  },
  setConfig(url,key){
    this._url=url;this._key=key;
    localStorage.setItem('sb_url',url);localStorage.setItem('sb_key',key);
    // 'saved' means credentials stored but not yet verified — dot stays grey
    this._status=(url&&key)?'saved':'unconfigured';
    SB._updateDot();
  },
  ready(){return!!(this._url&&this._key)},
  _rh(){return{'apikey':this._key,'Authorization':'Bearer '+this._key,'Accept':'application/json'}},
  _wh(){return{'apikey':this._key,'Authorization':'Bearer '+this._key,'Content-Type':'application/json','Prefer':'resolution=merge-duplicates,return=minimal'}},
  headers(){return this._wh()},
  _updateDot(){const d=document.getElementById('sb-dot');if(!d)return;const m={ok:'var(--green)',error:'var(--red)',syncing:'#FF8A5C',unconfigured:'var(--b3)',saved:'#FF6B35'};d.style.background=m[this._status]||'var(--b3)';const labels={ok:'Connected ✓',error:'Connection error',syncing:'Syncing…',unconfigured:'Not configured',saved:'Saved — not verified'};d.title='Supabase: '+(labels[this._status]||this._status);},
  // Low-level REST
  async _get(table){
    if(!this.ready())return null;
    try{
      // notifications orders by created_at; others by updated_at
      const order=table==='studio_notifications'?'created_at.desc':'updated_at.desc';
      const r=await fetch(this._url+'/rest/v1/'+table+'?select=data&order='+order+'&limit=500',{headers:this._rh()});
      if(!r.ok){const t=await r.text();throw new Error('HTTP '+r.status+': '+t.substring(0,120));}
      const rows=await r.json();
      if(!Array.isArray(rows))throw new Error('Unexpected response: '+JSON.stringify(rows).substring(0,80));
      return rows.map(row=>row.data).filter(Boolean);
    }catch(e){this._status='error';this._updateDot();console.warn('SB get',table,e.message);return null;}
  },
  async _upsert(table,id,data){
    if(!this.ready())return;
    // notifications uses created_at (server default); others use updated_at
    const ts=new Date().toISOString();
    const payload=table==='studio_notifications'
      ?{id,data}
      :{id,data,updated_at:ts};
    try{
      const r=await fetch(this._url+'/rest/v1/'+table,{method:'POST',headers:this._wh(),body:JSON.stringify(payload)});
      if(!r.ok){const t=await r.text();throw new Error('HTTP '+r.status+': '+t.substring(0,100));}
      if(this._status==='error'){this._status='ok';this._updateDot();}
    }catch(e){this._status='error';this._updateDot();console.warn('SB upsert',table,id,e.message);}
  },
  async _delete(table,id){
    if(!this.ready())return;
    try{
      const r=await fetch(this._url+'/rest/v1/'+table+'?id=eq.'+encodeURIComponent(id),{method:'DELETE',headers:this._rh()});
      if(!r.ok)throw new Error(r.status);
    }catch(e){this._status='error';this._updateDot();console.warn('SB delete',table,id,e.message);}
  },
  // Enqueue write — queues even when not ready (will flush when connected)
  push(table,id,data){
    this._dirty.add(table+':'+id);
    this._queue.push({table,id,data});
    if(this.ready())this._flush();
  },
  del(table,id){this._dirty.delete(table+':'+id);this._queue.push({table,id,_delete:true});if(this.ready())this._flush();},
  async _flush(){
    if(this._flushing||!this._queue.length||!this.ready())return;
    this._flushing=true;this._status='syncing';this._updateDot();
    const failed=[];
    while(this._queue.length){
      const op=this._queue.shift();
      let ok=false;
      for(let attempt=0;attempt<this._maxRetries;attempt++){
        try{
          if(op._delete)await this._delete(op.table,op.id);
          else if(op._ld)await this._upsertLD(op.entry);
          else if(op._delLD)await this._delLD(op.id);
          else await this._upsert(op.table,op.id,op.data);
          ok=true;
          this._dirty.delete((op.table||'ld')+':'+(op.id||op.entry?.id));
          break;
        }catch(e){
          console.warn('SB flush retry',attempt+1,'/',this._maxRetries,e.message);
          if(attempt<this._maxRetries-1)await new Promise(r=>setTimeout(r,1000*(attempt+1))); // backoff: 1s, 2s, 3s
        }
      }
      if(!ok){failed.push(op);console.warn('SB flush failed permanently:',op.table,op.id);}
    }
    if(failed.length){this._queue.unshift(...failed);this._status='error';}
    else if(this._status==='syncing'){this._status='ok';}
    this._flushing=false;this._updateDot();
  },
  // Merge-aware pull — preserves locally dirty data instead of overwriting
  _mergeArray(local,remote,table){
    if(!remote||!remote.length)return local;
    const dirtyIds=new Set([...this._dirty].filter(k=>k.startsWith(table+':')).map(k=>k.split(':')[1]));
    const merged=new Map();
    // Start with remote as base
    remote.forEach(item=>merged.set(item.id,item));
    // Overlay local dirty items (they haven't synced yet — keep local version)
    local.forEach(item=>{
      if(dirtyIds.has(item.id))merged.set(item.id,item);
    });
    return Array.from(merged.values());
  },
  async pullAll(){
    if(!this.ready())return false;
    if(this._status==='saved')return false; // Don't pull until connection verified
    if(this._flushing)return false; // Don't pull while flushing — avoid race
    this._status='syncing';this._updateDot();
    try{
      const [users,projects,notifs,intgs]=await Promise.all([
        this._get('studio_users'),this._get('studio_projects'),
        this._get('studio_notifications'),this._get('studio_integrations')
      ]);
      if(users&&users.length){_users=this._mergeArray(_users,users,'studio_users');_tryLS(()=>localStorage.setItem('sv2_users',JSON.stringify(_users)));}
      if(projects){_projects=this._mergeArray(_projects,projects,'studio_projects');_tryLS(()=>localStorage.setItem('sv2_projects',JSON.stringify(_projects)));}
      if(notifs){_notifs=this._mergeArray(_notifs,notifs,'studio_notifications');_tryLS(()=>localStorage.setItem('sv2_notifs',JSON.stringify(_notifs)));}
      if(intgs){_integrations=this._mergeArray(_integrations,intgs,'studio_integrations');_tryLS(()=>localStorage.setItem('sv2_integrations',JSON.stringify(_integrations)));}
      const ld=await this._getLD();
      if(ld&&ld.length){_ldEntries=ld;_tryLS(()=>localStorage.setItem('sv2_ld',JSON.stringify(_ldEntries)));}
      this._status='ok';this._updateDot();
      return true;
    }catch(e){this._status='error';this._updateDot();console.warn('SB pullAll',e.message);return false;}
  },
  // Push everything in memory to Supabase
  async pushAll(){
    if(!this.ready()){toast('Supabase not configured','err');return;}
    this._status='syncing';this._updateDot();
    const all=[
      ..._users.map(u=>({table:'studio_users',id:u.id,data:u})),
      ..._projects.map(p=>({table:'studio_projects',id:p.id,data:p})),
      ..._notifs.map(n=>({table:'studio_notifications',id:n.id,data:n})),
      ..._integrations.map(i=>({table:'studio_integrations',id:i.id,data:i})),
    ];
    for(const op of all)await this._upsert(op.table,op.id,op.data);
    for(const e of _ldEntries)await this._upsertLD(e);
    this._status='ok';this._updateDot();toast('All data pushed to Supabase!','ok');
  },
  // LD uses real columns not jsonb wrapper
  async _upsertLD(entry){
    if(!this.ready())return;
    try{
      const payload={
        id:entry.id,type:entry.type,title:entry.title,description:entry.description||'',
        tags:entry.tags||[],media_types:entry.media_types||[],source_url:entry.source_url||null,
        content:entry.content||{},extracted_style:entry.extracted_style||{},
        lora_model_id:entry.lora_model_id||null,lora_status:entry.lora_status||'none',
        lora_training_job:entry.lora_training_job||null,active:entry.active!==false,
        updated_at:new Date().toISOString()
      };
      const r=await fetch(this._url+'/rest/v1/studio_ld',{method:'POST',headers:this._wh(),body:JSON.stringify(payload)});
      if(!r.ok){const t=await r.text();console.warn('SB upsertLD',r.status,t.substring(0,80));}
    }catch(e){console.warn('SB upsertLD',e.message);}
  },
  async _getLD(){
    if(!this.ready())return null;
    try{
      const r=await fetch(this._url+'/rest/v1/studio_ld?order=created_at.desc&limit=500',{headers:this._rh()});
      if(!r.ok)return null;
      return await r.json();
    }catch(e){return null;}
  },
  async _delLD(id){
    if(!this.ready())return;
    try{await fetch(this._url+'/rest/v1/studio_ld?id=eq.'+encodeURIComponent(id),{method:'DELETE',headers:this._rh()});}
    catch(e){console.warn('SB delLD',e.message);}
  },
  pushLD(entry){if(!this.ready())return;this._queue.push({_ld:true,entry});this._flush();},
  delLD(id){if(!this.ready())return;this._queue.push({_delLD:true,id});this._flush();},
  // Test connection — tries multiple Supabase endpoints
  async testConnection(){
    if(!this.ready())return{ok:false,msg:'URL and key required'};
    if(!this._key.startsWith('eyJ'))return{ok:false,msg:'Anon key wrong — must start with eyJ. Copy anon public key from Supabase Dashboard → Settings → API.'};
    const base=this._url.replace(/[\/]+$/,'').replace(/\/rest.*$/,'');
    if(!base.startsWith('https://')||!base.includes('supabase'))return{ok:false,msg:'URL wrong — must be https://xxxx.supabase.co'};
    this._url=base; // normalize — strip any trailing /rest/v1 etc

    if(location.protocol==='file:'){
      return{ok:false,msg:'FILE_PROTOCOL'};
    }

    const endpoints=[
      // Hit studio_users table directly — returns [] if empty, 200 either way
      {url:base+'/rest/v1/studio_users?select=id&limit=1',label:'studio_users table'},
      // Auth health — always available
      {url:base+'/auth/v1/health',label:'auth health'},
      // PostgREST root
      {url:base+'/rest/v1/',label:'PostgREST root'},
    ];

    let lastErr='';
    for(const ep of endpoints){
      try{
        const r=await fetch(ep.url,{method:'GET',headers:this._rh()});
        if(r.status===200||r.status===204){
          this._status='ok';this._updateDot();
          return{ok:true,msg:'Connected ✓ ('+ep.label+', HTTP '+r.status+')'};
        }
        if(r.status===401)return{ok:false,msg:'Invalid anon key (401 Unauthorized). Re-copy the anon public key from Supabase Dashboard → Settings → API → Project API keys.'};
        if(r.status===404){
          if(ep.label.includes('studio_users'))continue; // table might not exist yet, try next
          return{ok:false,msg:'Project not found (404). Check the URL is exactly https://xxxx.supabase.co'};
        }
        const body=await r.text().catch(()=>'');
        lastErr='HTTP '+r.status+' on '+ep.label+(body?' ('+body.substring(0,60)+')':'');
      }catch(e){
        lastErr=e.message.substring(0,80)+' ['+ep.label+']';
        continue; // try next endpoint
      }
    }
    return{ok:false,msg:'Cannot reach Supabase. Last error: '+lastErr};
  },
  // Initialize tables via Supabase SQL API
  async initTables(){
    if(!this.ready())return{ok:false,msg:'Configure URL and key first'};
    const sql=`
-- Core tables
CREATE TABLE IF NOT EXISTS studio_users (
  id text PRIMARY KEY,
  data jsonb NOT NULL,
  updated_at timestamptz DEFAULT now()
);
CREATE TABLE IF NOT EXISTS studio_projects (
  id text PRIMARY KEY,
  data jsonb NOT NULL,
  updated_at timestamptz DEFAULT now()
);
CREATE TABLE IF NOT EXISTS studio_notifications (
  id text PRIMARY KEY,
  user_id text GENERATED ALWAYS AS ((data->>'userId')::text) STORED,
  data jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);
CREATE TABLE IF NOT EXISTS studio_integrations (
  id text PRIMARY KEY,
  data jsonb NOT NULL,
  updated_at timestamptz DEFAULT now()
);

-- Audit log table
CREATE TABLE IF NOT EXISTS studio_audit_log (
  id bigserial PRIMARY KEY,
  event_type text NOT NULL,
  user_id text,
  user_role text,
  target_id text,
  detail text,
  ip text,
  created_at timestamptz DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_notifs_user ON studio_notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_projects_updated ON studio_projects(updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_audit_created ON studio_audit_log(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_audit_user ON studio_audit_log(user_id);

-- Enable Row-Level Security
ALTER TABLE studio_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio_notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio_integrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio_audit_log ENABLE ROW LEVEL SECURITY;

-- Anon role: read-only access (writes go through authenticated server endpoints)
CREATE POLICY IF NOT EXISTS "anon_read_users" ON studio_users FOR SELECT TO anon USING (true);
CREATE POLICY IF NOT EXISTS "anon_read_projects" ON studio_projects FOR SELECT TO anon USING (true);
CREATE POLICY IF NOT EXISTS "anon_read_notifs" ON studio_notifications FOR SELECT TO anon USING (true);
CREATE POLICY IF NOT EXISTS "anon_read_integrations" ON studio_integrations FOR SELECT TO anon USING (true);

-- Authenticated role: full access (server-side operations use service_role key)
GRANT ALL ON studio_users, studio_projects, studio_notifications, studio_integrations, studio_audit_log TO authenticated;
GRANT USAGE, SELECT ON SEQUENCE studio_audit_log_id_seq TO authenticated;

-- Anon can read but NOT write (except audit log for logging)
GRANT SELECT ON studio_users, studio_projects, studio_notifications, studio_integrations TO anon;
GRANT INSERT ON studio_audit_log TO anon;
CREATE POLICY IF NOT EXISTS "anon_insert_audit" ON studio_audit_log FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY IF NOT EXISTS "auth_all_audit" ON studio_audit_log FOR ALL TO authenticated USING (true);`.trim();
    try{
      const r=await fetch(this._url+'/rest/v1/rpc/exec_sql',{
        method:'POST',headers:{...this.headers(),'Content-Type':'application/json'},
        body:JSON.stringify({sql})
      });
      // RPC may not exist — show SQL for manual run instead
      return{ok:false,showSql:true,sql};
    }catch(e){return{ok:false,showSql:true,sql};}
  }
};

// ══════════════════════════════════════
// PERSISTENT IMAGE STORAGE — imgbb.com
// Audit logging — fire-and-forget to server
function auditLog(event_type,detail,target_id){
  try{fetch('/api/log',{method:'POST',headers:_authHeaders(),body:JSON.stringify({event_type,detail,target_id})}).catch(()=>{});}catch(e){}
}

// Session token header helper — include in all API calls for server-side auth
function _authHeaders(extra){
  const h={'Content-Type':'application/json',...(extra||{})};
  const tk=_sessionToken||localStorage.getItem('sv2_token')||'';
  if(tk)h['x-session-token']=tk;
  return h;
}

// Persistent image storage via server-side proxy (API key kept server-side)
// ══════════════════════════════════════
async function persistImage(url){
  // Uploads image to imgbb via server proxy, returns permanent URL
  // Falls back to original URL if upload fails
  try{
    const r=await fetch('/api/supabase-upload',{
      method:'POST',
      headers:_authHeaders(),
      body:JSON.stringify({url,type:'image'})
    });
    if(!r.ok)return url;
    const d=await r.json();
    return d.url||url;
  }catch(e){
    console.warn('Image persist failed:',e.message,'— using original URL');
    return url;
  }
}

async function persistVideo(url){try{const r=await fetch('/api/supabase-upload',{method:'POST',headers:_authHeaders(),body:JSON.stringify({url,type:'video'})});if(!r.ok)return url;const d=await r.json();return d.url||url;}catch(e){console.warn('Video persist failed:',e.message,'— using original URL');return url;}}

SB.init();

const DB={
  getUsers:()=>_users,
  saveUsers:u=>{_users=u;_tryLS(()=>localStorage.setItem('sv2_users',JSON.stringify(u)));},
  getUser:id=>_users.find(u=>u.id===id)||null,
  saveUser:user=>{
    const i=_users.findIndex(u=>u.id===user.id);
    if(i>=0)_users[i]=user;else _users.unshift(user);
    _tryLS(()=>localStorage.setItem('sv2_users',JSON.stringify(_users)));
    SB.push('studio_users',user.id,user);
  },
  getProjects:()=>_projects,
  saveProjects:ps=>{_projects=ps;_tryLS(()=>localStorage.setItem('sv2_projects',JSON.stringify(ps)));},
  getProject:id=>_projects.find(p=>p.id===id)||null,
  saveProject:p=>{
    p.updatedAt=new Date().toISOString();
    const i=_projects.findIndex(x=>x.id===p.id);
    if(i>=0)_projects[i]=p;else _projects.unshift(p);
    _tryLS(()=>localStorage.setItem('sv2_projects',JSON.stringify(_projects)));
    SB.push('studio_projects',p.id,p);
  },
  deleteProject:id=>{
    DB.saveProjects(_projects.filter(p=>p.id!==id));
    SB.del('studio_projects',id);
  },
  getSession:()=>_session,
  setSession:s=>{_session={...s,exp:new Date(Date.now()+8*36e5).toISOString()};_tryLS(()=>localStorage.setItem('sv2_session',JSON.stringify(_session)));},
  clearSession:()=>{_session=null;_tryLS(()=>localStorage.removeItem('sv2_session'));},
  getNotifs:(uid)=>_notifs.filter(n=>n.userId===uid),
  addNotif:(n)=>{
    n.id=gid('n');n.ts=new Date().toISOString();n.read=false;
    _notifs.unshift(n);if(_notifs.length>200)_notifs=_notifs.slice(0,200);
    _tryLS(()=>localStorage.setItem('sv2_notifs',JSON.stringify(_notifs)));
    SB.push('studio_notifications',n.id,n);
  },
  markNotifRead:(id)=>{
    const n=_notifs.find(x=>x.id===id);
    if(n){n.read=true;_tryLS(()=>localStorage.setItem('sv2_notifs',JSON.stringify(_notifs)));SB.push('studio_notifications',n.id,n);}
  },
  markAllRead:(uid)=>{
    _notifs.filter(n=>n.userId===uid).forEach(n=>{n.read=true;SB.push('studio_notifications',n.id,n);});
    _tryLS(()=>localStorage.setItem('sv2_notifs',JSON.stringify(_notifs)));
  },
  getIntegrations:()=>_integrations,
  saveIntegration:(intg)=>{
    const i=_integrations.findIndex(x=>x.id===intg.id);
    if(i>=0)_integrations[i]=intg;else _integrations.unshift(intg);
    _tryLS(()=>localStorage.setItem('sv2_integrations',JSON.stringify(_integrations)));
    SB.push('studio_integrations',intg.id,intg);
  },
  deleteIntegration:(id)=>{
    _integrations=_integrations.filter(x=>x.id!==id);
    _tryLS(()=>localStorage.setItem('sv2_integrations',JSON.stringify(_integrations)));
    SB.del('studio_integrations',id);
  },
  // L&D Knowledge Base
  getPMs:()=>_pms,
  getPM:(id)=>_pms.find(x=>x.id===id)||null,
  savePM:(pm)=>{const i=_pms.findIndex(x=>x.id===pm.id);if(i>=0)_pms[i]=pm;else _pms.unshift(pm);_tryLS(()=>localStorage.setItem('sv2_pms',JSON.stringify(_pms)));SB.push('studio_pms',pm.id,pm);return pm;},
  deletePM:(id)=>{_pms=_pms.filter(x=>x.id!==id);_tryLS(()=>localStorage.setItem('sv2_pms',JSON.stringify(_pms)));SB.del('studio_pms',id);},
  getLDEntries:()=>_ldEntries,
  getLDEntry:(id)=>_ldEntries.find(x=>x.id===id)||null,
  saveLDEntry:(entry)=>{
    entry.updated_at=new Date().toISOString();
    if(!entry.created_at)entry.created_at=new Date().toISOString();
    const i=_ldEntries.findIndex(x=>x.id===entry.id);
    if(i>=0)_ldEntries[i]=entry;else _ldEntries.unshift(entry);
    _tryLS(()=>localStorage.setItem('sv2_ld',JSON.stringify(_ldEntries)));
    SB.pushLD(entry);
  },
  deleteLDEntry:(id)=>{
    _ldEntries=_ldEntries.filter(x=>x.id!==id);
    _tryLS(()=>localStorage.setItem('sv2_ld',JSON.stringify(_ldEntries)));
    SB.delLD(id);
  },
  getPMChats:(clientId)=>_pmChats.filter(m=>m.clientId===clientId),
  getPMChatsByPM:(pmId)=>_pmChats.filter(m=>m.pmId===pmId),
  savePMChat:(msg)=>{
    const i=_pmChats.findIndex(x=>x.id===msg.id);
    if(i>=0)_pmChats[i]=msg;else _pmChats.push(msg);
    _tryLS(()=>localStorage.setItem('sv2_pmchats',JSON.stringify(_pmChats)));
    SB.push('studio_pmchats',msg.id,msg);
  },
  deletePMChat:(id)=>{
    _pmChats=_pmChats.filter(x=>x.id!==id);
    _tryLS(()=>localStorage.setItem('sv2_pmchats',JSON.stringify(_pmChats)));
  },
  getPMMemory:(pmId,clientId)=>{
    const key=pmId+'_'+clientId;
    return _pmMemory[key]||{learnings:[],projects:[],brandNotes:'',uploadedSkills:[]};
  },
  savePMMemory:(pmId,clientId,mem)=>{
    const key=pmId+'_'+clientId;
    _pmMemory[key]=mem;
    _tryLS(()=>localStorage.setItem('sv2_pmmem',JSON.stringify(_pmMemory)));
  },
};

function seedAdmin(){if(!DB.getUsers().find(u=>u.role==='admin'))DB.saveUser({id:'u_admin',role:'admin',name:'Admin',email:'admin',password:'admin123',active:true,brandAssets:[],assignedClients:[],apiKeys:{},integrations:[],createdAt:new Date().toISOString()});}
seedAdmin();

function gid(pfx){return pfx+Date.now().toString(36)+Math.random().toString(36).slice(2,5)}
function gcid(){let id;do{id='CLI'+String(Math.floor(Math.random()*9000)+1000)}while(DB.getUsers().find(u=>u.clientId===id));return id}

// Human-readable sequential project ID: STU-YYMMDD-NNNN
function genProjectId(){
  const d=new Date();const ymd=String(d.getFullYear()).slice(2)+String(d.getMonth()+1).padStart(2,'0')+String(d.getDate()).padStart(2,'0');
  const existing=DB.getProjects().map(p=>p.projectId||'').filter(x=>x.startsWith('STU-'+ymd));
  const nums=existing.map(x=>parseInt(x.slice(-4),10)||0);
  const next=nums.length?Math.max(...nums)+1:1;
  return 'STU-'+ymd+'-'+String(next).padStart(4,'0');
}

// Always read API keys from admin — shared across all roles
function getAdminUser(){return DB.getUsers().find(u=>u.role==='admin')||null;}
function kC(){const admin=getAdminUser();return admin?.apiKeys?.claude||document.getElementById('k-c')?.value||'';}
function kF(){const admin=getAdminUser();return admin?.apiKeys?.fal||document.getElementById('k-f')?.value||'';}
function kE(){const admin=getAdminUser();return admin?.apiKeys?.el||document.getElementById('k-e')?.value||'';}
function getIntegrationKey(id){const intg=DB.getIntegrations().find(x=>x.id===id);return intg?.key||'';}

// Notification helpers
function pushNotif(userId,type,title,body,projectId){
  if(!userId)return;
  DB.addNotif({userId,type,title,body,projectId:projectId||null});
  if(S.session?.userId===userId){const b=document.getElementById('notif-badge');if(b){const cnt=DB.getNotifs(userId).filter(n=>!n.read).length;b.textContent=cnt;b.style.display=cnt?'flex':'none';}}
}
function pushToRole(role,type,title,body,projectId){
  DB.getUsers().filter(u=>u.role===role&&u.active!==false).forEach(u=>pushNotif(u.id,type,title,body,projectId));
}
function pushToCreatorOfProject(pid,type,title,body){
  const p=DB.getProject(pid);if(!p||!p.assignedCreatorId)return;pushNotif(p.assignedCreatorId,type,title,body,pid);
}
function gpw(){return Math.random().toString(36).slice(2,8).toUpperCase()}

// ══════════════════════════════════════
// APP STATE
// ══════════════════════════════════════
const S={
  view:'login',tab:'dashboard',
  session:null,
  pid:null,
  stage:1,step:1,
  sbState:{},vidState:{},audioState:{},
  rules:{},vidModel:null,
  stopSb:false,stopVid:false,
  bType:null,bStep:0,bAnswers:{},
  // Generation history — loaded from localStorage
  sgResults: (()=>{try{return JSON.parse(localStorage.getItem('sv2_sg_history')||'[]');}catch(e){return [];}})(),
  // Persisted prompts — survive render() cycles and page refresh
  sgPrompt: (()=>{try{return localStorage.getItem('sv2_sg_prompt')||'';}catch(e){return '';}})(),
  vqgPrompt: (()=>{try{return localStorage.getItem('sv2_vid_prompt')||'';}catch(e){return '';}})(),
  vqgResults: (()=>{try{return JSON.parse(localStorage.getItem('sv2_vqg_history')||'[]');}catch(e){return [];}})(),
  sqgResults: (()=>{try{return JSON.parse(localStorage.getItem('sv2_sqg_history')||'[]');}catch(e){return [];}})(),
  mqgResults: (()=>{try{return JSON.parse(localStorage.getItem('sv2_mqg_history')||'[]');}catch(e){return [];}})(),
  tdResults: (()=>{try{return JSON.parse(localStorage.getItem('sv2_td_history')||'[]');}catch(e){return [];}})(),
};

// ══════════════════════════════════════
// RENDER
// ══════════════════════════════════════
function render(){
  const app=document.getElementById('app');
  const sb=document.getElementById('sbar');
  // Save unsaved prompt text before re-render wipes the textarea
  const sgEl=document.getElementById('sg-prompt');
  if(sgEl&&sgEl.value)S.sgPrompt=sgEl.value;
  const vidEl=document.getElementById('vid-prompt');
  if(vidEl&&vidEl.value)S.vqgPrompt=vidEl.value;
  const sqEl=document.getElementById('sq-text');
  if(sqEl&&sqEl.value)S.sqgText=sqEl.value;
  // Persist current tab position so page refresh restores it
  if(S.view!=='login')_tryLS(()=>{
    localStorage.setItem('sv2_last_tab',JSON.stringify({tab:S.tab,qgMode:S.qgMode||'txt2img',pid:S.pid||null}));
  });
  if(S.view==='login'){sb.style.display='none';app.innerHTML=loginHTML();return}
  sb.style.display='flex';
  app.innerHTML=appBarHTML()+mainHTML();

  document.getElementById('st-r').textContent=(S.session?.name||'')+'  ('+S.session?.role+')';
  VEO_RULES.forEach(r=>{if(S.rules[r.id]===undefined)S.rules[r.id]=true});
  setTimeout(updateNotifBadge,50);
  setTimeout(()=>SB._updateDot(),60);
  setTimeout(bindInboxNotifs,70);
  setTimeout(initDashCharts,120);
}
// Bind inbox notification click events (safe from XSS — uses data attributes not inline onclick)
function bindInboxNotifs(){
  document.querySelectorAll('.inbox-notif').forEach(el=>el.addEventListener('click',()=>{clickNotif(el.dataset.nid,el.dataset.pid,el.dataset.ntype);render();}));
  document.querySelectorAll('.inbox-notif-open').forEach(el=>el.addEventListener('click',(e)=>{e.stopPropagation();clickNotif(el.dataset.nid,el.dataset.pid);render();}));
}

function mainHTML(){
  if(S.view==='admin')return adminMain();
  if(S.view==='creator')return creatorMain();
  if(S.view==='client')return clientMain();
  return '';
}

// ══════════════════════════════════════
// LOGIN
// ══════════════════════════════════════
function loginHTML(){
  return`<div class="login-wrap">
<div class="login-hero">
  <div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div>
  <div class="login-hero-content">
    <div class="login-hero-logo"><img src="/Logo.svg" alt="CinexAI" style="height:56px;width:auto"></div>
    <div class="login-hero-tagline">AI-powered media production.<br>From brief to final cut.</div>
    <div class="login-hero-features">
      <div class="login-hero-feature"><div class="login-hero-feature-icon orange">◈</div>Produce</div>
      <div class="login-hero-feature"><div class="login-hero-feature-icon violet">✦</div>AI-Powered</div>
      <div class="login-hero-feature"><div class="login-hero-feature-icon cyan">▶</div>Deliver</div>
    </div>
  </div>
</div>
<div class="login-form-panel"><div class="login-box">
<div class="login-logo"><img src="/Logo.svg" alt="CinexAI" style="height:44px;width:auto"></div>
<div class="login-sub">Sign in to your production workspace</div>
<div class="login-err" id="lerr"></div>
<div class="fg"><label>Username or Client ID</label><input type="text" id="lid" placeholder="admin  /  EMP-username  /  CLI1234" onkeydown="if(event.key==='Enter')doLogin()"/></div>
<div class="fg"><label>Password</label><input type="password" id="lpw" placeholder="Enter password" onkeydown="if(event.key==='Enter')doLogin()"/></div>
<button id="signin-btn" class="btn btn-gold" style="width:100%;justify-content:center;margin-top:4px;transition:transform 0.1s,opacity 0.1s" onclick="doLogin()">Sign In →</button>
<div style="margin-top:10px;text-align:center"><span style="font-size:10px;color:var(--t4);cursor:pointer;text-decoration:underline;opacity:0.7" onclick="showForgotModal()">Forgot password?</span></div>
<div style="margin-top:6px;text-align:center;font-size:9px;color:var(--t4)">Secure workspace — contact your admin for credentials</div>
</div></div>
</div>`;
}

// Brute force protection
let _loginAttempts=0,_loginLockUntil=0;
let _sessionToken=null;
function _flashSignInBtn(){var b=document.getElementById('signin-btn');if(b){b.style.transform='scale(0.95)';b.style.opacity='0.7';setTimeout(function(){b.style.transform='';b.style.opacity='';},150);}}
function _showLoginErr(msg){const el=document.getElementById('lerr');if(el){el.style.display='block';el.textContent=msg;}}

async function doLogin(){
  _flashSignInBtn();
  const now=Date.now();
  if(now<_loginLockUntil){_showLoginErr(`Too many attempts. Try again in ${Math.ceil((_loginLockUntil-now)/1000)}s.`);return;}
  const id=document.getElementById('lid').value.trim();
  const pw=document.getElementById('lpw').value.trim();
  if(!id||!pw){_showLoginErr('Enter both username and password.');return;}

  // Try server-side auth first (PBKDF2 hashed, signed session)
  try{
    const r=await fetch('/api/auth',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'login',identifier:id,password:pw})});
    const d=await r.json();
    if(d.ok&&d.token){
      // Server auth succeeded
      _loginAttempts=0;_loginLockUntil=0;
      _sessionToken=d.token;
      _tryLS(()=>localStorage.setItem('sv2_token',d.token));
      S.session={userId:d.user.id,role:d.user.role,name:d.user.name};DB.setSession(S.session);
      S.view=d.user.role;S.tab='dashboard';
      if(d.forcePasswordChange){
        render();showForceChangePwModal();return;
      }
      render();
      const freshUser=DB.getUser(d.user.id);
      if(freshUser&&freshUser.firstLogin&&freshUser.role==='creator'){
        setTimeout(()=>showCreatorOnboarding(),300);return;
      }
      toast('Welcome back, '+d.user.name+'!','ok');return;
    }
    if(d.fallback){
      // Server auth not configured — fall through to client-side
    }else{
      // Server auth rejected
      _loginAttempts++;
      if(_loginAttempts>=10){_loginLockUntil=now+300000;_showLoginErr('Account locked for 5 minutes.');}
      else if(_loginAttempts>=5){_loginLockUntil=now+30000;_showLoginErr('Too many attempts. Locked for 30 seconds.');}
      else{_showLoginErr('Invalid credentials. ('+_loginAttempts+'/5)');}
      return;
    }
  }catch(e){/* Server auth unavailable — fall through to client-side */}

  // Fallback: client-side auth (for local development or when server auth not configured)
  const u=DB.getUsers().find(u=>u.active!==false&&(u.password===pw||(u.passwordHash&&u.passwordSalt))&&(u.email===id||u.clientId===id||u.username===id||u.name.toLowerCase()===id.toLowerCase()));
  if(!u||u.password!==pw){
    _loginAttempts++;
    if(_loginAttempts>=10){_loginLockUntil=now+300000;_showLoginErr('Account locked for 5 minutes.');}
    else if(_loginAttempts>=5){_loginLockUntil=now+30000;_showLoginErr('Too many attempts. Locked for 30 seconds.');}
    else{_showLoginErr('Invalid credentials. ('+_loginAttempts+'/5)');}
    return;
  }
  if(u.active===false){_showLoginErr('Account is suspended. Contact your admin.');return;}
  _loginAttempts=0;_loginLockUntil=0;
  S.session={userId:u.id,role:u.role,name:u.name};DB.setSession(S.session);S.view=u.role;S.tab='dashboard';
  if(u.password==='admin123'&&u.role==='admin'){render();showForceChangePwModal();return;}
  render();
  if(u.firstLogin&&u.role==='creator'){setTimeout(()=>showCreatorOnboarding(),300);return;}
  toast('Welcome back, '+u.name+'!','ok');
}

function showForceChangePwModal(){
  openModal(`<div class="modal-title">Change Default Password</div>
<div class="ib ib-red"><strong>Security:</strong> You are using the default admin password. Please change it now.</div>
<div class="fg"><label>New Password (min 8 characters)</label><input type="password" id="new-pw1" placeholder="Enter new password"/></div>
<div class="fg"><label>Confirm Password</label><input type="password" id="new-pw2" placeholder="Confirm password"/></div>
<div class="btn-row"><button class="btn btn-gold" onclick="forceChangePw()">Change Password</button></div>`);
}

async function forceChangePw(){
  const p1=document.getElementById('new-pw1')?.value||'';const p2=document.getElementById('new-pw2')?.value||'';
  if(p1.length<8){toast('Password must be at least 8 characters','err');return;}
  if(p1!==p2){toast('Passwords do not match','err');return;}
  // Try server-side password change
  if(_sessionToken){
    try{
      const r=await fetch('/api/auth',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'change-password',token:_sessionToken,newPassword:p1})});
      const d=await r.json();if(d.ok){closeModal();toast('Password changed securely!','ok');return;}
    }catch(e){}
  }
  // Fallback: client-side
  const u=DB.getUser(S.session?.userId);if(!u)return;
  u.password=p1;DB.saveUser(u);closeModal();toast('Password changed!','ok');
}

function doLogout(){
  auditLog('logout','User signed out');
  _sessionToken=null;_tryLS(()=>localStorage.removeItem('sv2_token'));
  DB.clearSession();S.session=null;S.view='login';S.tab='dashboard';S.pid=null;render();
}

// ══════════════════════════════════════
// APP BAR
// ══════════════════════════════════════
function appBarHTML(){
  const r=S.session?.role;
  const _i=(d,s=16)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const NAV_ICONS={
    dashboard:_i('<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',14),
    projects:_i('<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',14),
    timeline:_i('<line x1="2" y1="12" x2="22" y2="12"/><polyline points="16 6 22 12 16 18"/>',14),
    clients:_i('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',14),
    creators:_i('<circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>',14),
    integrations:_i('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',14),
    ld:_i('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',14),
    leads:_i('<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',14),
    settings:_i('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',14),
    inbox:_i('<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',14),
    new:_i('<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>',14),
    assets:_i('<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',14),
  };
  const adminNav=[{k:'dashboard',l:'Dashboard'},{k:'projects',l:'All Projects'},{k:'quickgen',l:'❆ Quick Generate'},{k:'timeline',l:'Timeline'},{k:'clients',l:'Clients'},{k:'creators',l:'Creators'},{k:'integrations',l:'Integrations'},{k:'pms',l:'AI PMs'},{k:'ld',l:'L&D'},{k:'leads',l:'Leads'},{k:'settings',l:'Settings'}];
  const creatorNav=[{k:'dashboard',l:'My Projects'},{k:'quickgen',l:'❆ Quick Generate'},{k:'clients',l:'My Clients'},{k:'inbox',l:'Inbox'}];
  const clientNav=[{k:'dashboard',l:'My Projects'},{k:'pm',l:'My PM'},{k:'quickgen',l:'✦ Quick Generate'},{k:'new',l:'+ New Request'},{k:'assets',l:'Brand Folder'}];
  const nav=r==='admin'?adminNav:r==='creator'?creatorNav:clientNav;
  const roleLabel=r==='admin'?'Admin':r==='creator'?'AI PM':'Client';
  return`<div class="app-bar">
<div class="logo"><img src="/Logo.svg" alt="CinexAI" style="height:34px;width:auto"></div>
<div id="sb-dot" class="sb-status-dot" title="Supabase: unconfigured" onclick="goTab('settings')"></div>
<span class="rb-${r}">${roleLabel}</span>
${S.session?.role==='client'&&DB.getUser(S.session?.userId)?.logoUrl?`<div style="width:26px;height:26px;border-radius:6px;overflow:hidden;background:var(--bg3);flex-shrink:0"><img src="${DB.getUser(S.session.userId).logoUrl}" style="width:100%;height:100%;object-fit:contain"></div>`:''}<span class="app-bar-name">${S.session?.name}</span>
<nav class="app-bar-nav">
${nav.map(t=>`<button class="nav-btn${S.tab===t.k?' active':''}" onclick="goTab('${t.k}')">${NAV_ICONS[t.k]||''} ${t.l}${t.k==='inbox'&&getUnreadCount()>0?`<span class="nav-badge">${getUnreadCount()}</span>`:''}  </button>`).join('')}
${(r==='admin'||r==='creator')&&S.pid?`<button class="nav-btn studio-btn${S.tab==='studio'?' active':''}" onclick="goTab('studio')">◈ Studio</button>`:''}
</nav>
<div class="app-bar-right">
<div id="ai-engine-dot" class="ai-indicator" title="AI Engine: ready" style="cursor:help"></div>
${r==='admin'?`<button class="app-bar-keys-btn btn btn-ghost btn-sm" onclick="goTab('settings')" title="API Keys: ${getKey('claude')?'✓ Claude':'✗ Claude'} · ${getKey('fal')?'✓ fal.ai':'✗ fal.ai'} · ${getKey('el')?'✓ ElevenLabs':'✗ ElevenLabs'}">
  <div style="display:flex;gap:4px;align-items:center">
    <span style="font-size:9px;color:var(--t3)">API Keys</span>
    <div style="display:flex;gap:3px"><div class="kdot${getKey('claude')?' ok':''}" title="Claude"></div><div class="kdot${getKey('fal')?' ok':''}" title="fal.ai"></div><div class="kdot${getKey('el')?' ok':''}" title="ElevenLabs"></div></div>
  </div>
</button>`:''}
<div style="position:relative;display:inline-flex;align-items:center">
<button onclick="toggleNotifPanel()" class="notif-btn" title="Notifications">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
  <div id="notif-badge" class="notif-count" style="display:none"></div>
</button>
</div>
${S.session?._impersonating?'<button class="btn btn-gold btn-sm" onclick="returnToAdmin()">&#8592; Admin</button>':''}
<button class="btn btn-ghost btn-sm" onclick="doLogout()">Sign Out</button>
</div>
</div>
<div id="notif-panel" style="display:none;position:fixed;top:46px;right:10px;width:320px;max-height:440px;background:var(--bg3);border:1px solid var(--b2);border-radius:9px;z-index:300;overflow:hidden;box-shadow:0 8px 24px #000a">
<div style="padding:9px 13px;background:var(--bg4);border-bottom:1px solid var(--b1);display:flex;justify-content:space-between;align-items:center">
<span style="font-size:11px;font-weight:700;color:var(--gold)">Notifications</span>
<div style="display:flex;gap:6px"><button onclick="markAllNotifsRead()" style="background:none;border:none;color:var(--t4);font-size:9px;cursor:pointer">Mark all read</button><button onclick="toggleNotifPanel()" style="background:none;border:none;color:var(--t4);font-size:14px;cursor:pointer">✕</button></div>
</div>
<div id="notif-list" style="overflow-y:auto;max-height:380px"></div>
</div>`;
}

function getKey(k){const u=DB.getUser(S.session?.userId);return u?.apiKeys?.[k]||''}
function saveKeys(){const u=getAdminUser();if(!u)return;u.apiKeys={claude:document.getElementById('k-c')?.value||'',fal:document.getElementById('k-f')?.value||'',el:document.getElementById('k-e')?.value||''};auditLog('api_keys_updated','Admin updated API keys');DB.saveUser(u);['c','f','e'].forEach((x,i)=>{const d=document.getElementById('kd'+x);const inp=document.getElementById('k-'+x);if(d)d.className='kdot'+(inp?.value?' ok':'');})}
// kC / kF / kE defined above near genProjectId
function hasNotifs(){const uid=S.session?.userId;if(!uid)return false;return DB.getNotifs(uid).some(n=>!n.read);}
function getUnreadCount(){const uid=S.session?.userId;if(!uid)return 0;return DB.getNotifs(uid).filter(n=>!n.read).length;}
function toggleNotifPanel(){const p=document.getElementById('notif-panel');const uid=S.session?.userId;if(!p||!uid)return;const isOpen=p.style.display!=='none';p.style.display=isOpen?'none':'block';if(!isOpen){renderNotifList(uid);}}
function renderNotifList(uid){const list=document.getElementById('notif-list');if(!list)return;const ns=DB.getNotifs(uid).slice(0,40);if(!ns.length){list.innerHTML='<div style="padding:20px;text-align:center;color:var(--t4);font-size:10px">No notifications</div>';return;}list.innerHTML=ns.map(n=>`<div class="notif-item" data-nid="${esc(n.id)}" data-pid="${esc(n.projectId||'')}" data-ntype="${esc(n.type||'')}" style="padding:9px 13px;border-bottom:1px solid var(--b1);cursor:pointer;background:${n.read?'transparent':'#0d0a14'}"><div style="display:flex;align-items:flex-start;gap:8px"><div style="width:7px;height:7px;border-radius:50%;background:${n.read?'var(--b3)':'var(--gold)'};flex-shrink:0;margin-top:3px"></div><div style="flex:1"><div style="font-size:10px;font-weight:700;color:${n.read?'var(--t3)':'var(--t1)'}">${esc(n.title)}</div><div style="font-size:9px;color:var(--t4);margin-top:2px;line-height:1.4">${esc(n.body)}</div><div style="font-size:8px;color:var(--t4);margin-top:3px">${n.ts?new Date(n.ts).toLocaleString():''}</div></div></div></div>`).join('');
  // Event delegation — safe from XSS (no inline onclick with unescaped IDs)
  list.querySelectorAll('.notif-item').forEach(el=>el.addEventListener('click',()=>clickNotif(el.dataset.nid,el.dataset.pid,el.dataset.ntype)));}
function clickNotif(nid,pid,type){
  DB.markNotifRead(nid);
  if(pid){
    S.pid=pid;S.tab='studio';
    // Open directly to comments for comment notifications
    if(type==='comment'){S.stage=98;markCommentsRead(pid,S.session?.userId);}
    else{S.stage=1;}
    render();
  }
  document.getElementById('notif-panel').style.display='none';
  updateNotifBadge();
}
function markAllNotifsRead(){const uid=S.session?.userId;if(!uid)return;DB.markAllRead(uid);renderNotifList(uid);updateNotifBadge();}
function updateNotifBadge(){const b=document.getElementById('notif-badge');if(!b)return;const cnt=getUnreadCount();b.textContent=cnt;b.style.display=cnt?'flex':'none';}
function goTab(t){saveInputs();S.tab=t;if(t!=='studio')S.pid=null;render()}

// ══════════════════════════════════════
// ADMIN MAIN
// ══════════════════════════════════════
function adminMain(){
  if(S.tab==='studio'&&S.pid)return studioWrap();
  if(S.tab==='quickgen')return singleImageGen();
  if(S.tab==='projects')return adminProjects();
  if(S.tab==='clients')return adminClients();
  if(S.tab==='creators')return adminCreators();
  if(S.tab==='timeline')return adminTimeline();
  if(S.tab==='integrations')return adminIntegrations();
  if(S.tab==='pms')return adminPMs();
  if(S.tab==='ld')return adminLD();
  if(S.tab==='leads')return adminLeads();
  if(S.tab==='settings')return adminSettings();
  return adminDashboard();
}


// ── DASHBOARD CHARTS ─────────────────────────────────────
function initDashCharts(){
  const canvas=document.getElementById('chart-status');
  if(!canvas)return;
  if(!window.Chart){
    const s=document.createElement('script');
    s.src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js';
    s.onload=()=>initDashCharts();
    document.head.appendChild(s);
    return;
  }
  // Destroy existing chart instance if any
  const existing=Chart.getChart(canvas);
  if(existing)existing.destroy();
  const ps=DB.getProjects();
  const complete=ps.filter(p=>p.workflowStatus==='complete').length;
  const inProd=ps.filter(p=>['storyboard_in_progress','storyboard_review'].includes(p.workflowStatus)).length;
  const inReview=ps.filter(p=>p.workflowStatus?.includes('review')).length;
  const brief=ps.filter(p=>['brief_submitted','new'].includes(p.workflowStatus)).length;
  const total=ps.length;
  if(!total){canvas.parentNode.innerHTML='<div style="height:140px;display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--t4)">No projects yet</div>';return;}
  new Chart(canvas,{
    type:'doughnut',
    data:{
      labels:['In Review','In Production','Complete','Brief Stage'],
      datasets:[{
        data:[inReview,inProd,complete,brief],
        backgroundColor:['#F59E0B','#06B6D4','#10B981','#8B5CF6'],
        borderWidth:0,
        hoverOffset:4
      }]
    },
    options:{
      responsive:false,
      cutout:'72%',
      plugins:{
        legend:{display:false},
        tooltip:{
          backgroundColor:'rgba(0,0,0,0.8)',
          titleFont:{size:10},
          bodyFont:{size:10},
          callbacks:{label:ctx=>' '+ctx.label+': '+ctx.raw}
        }
      }
    }
  });
}

function adminDashboard(){
  const ps=DB.getProjects();const us=DB.getUsers();
  const clients=us.filter(u=>u.role==='client');const creators=us.filter(u=>u.role==='creator');
  const needs=ps.filter(p=>p.pendingFeedback||p.newBrief||p.workflowStatus?.includes('review'));
  // Filter state
  const df=S.dashF||{q:'',creator:'',client:'',type:'',status:'',from:'',to:''};
  let flt=ps.filter(p=>{
    if(df.q&&!p.name.toLowerCase().includes(df.q.toLowerCase()))return false;
    if(df.creator&&p.assignedPmId!==df.creator)return false;
    if(df.client&&p.clientId!==df.client)return false;
    if(df.type&&p.type!==df.type)return false;
    if(df.status&&p.workflowStatus!==df.status)return false;
    if(df.from&&p.createdAt&&new Date(p.createdAt)<new Date(df.from))return false;
    if(df.to&&p.createdAt&&new Date(p.createdAt)>new Date(df.to+'T23:59:59'))return false;
    return true;
  });
  // Stats for filtered period
  const complete=flt.filter(p=>p.workflowStatus==='complete').length;
  const inProd=flt.filter(p=>['storyboard_in_progress','storyboard_review'].includes(p.workflowStatus)).length;
  const inSyn=flt.filter(p=>['brief_submitted','synopsis_review','synopsis_locked'].includes(p.workflowStatus)).length;
  const hour=new Date().getHours();
  const greeting=hour<12?'Good morning':hour<17?'Good afternoon':'Good evening';
  return`<div class="page">
<div class="dash-hero">
  <div class="dash-hero-bg"></div>
  <div class="dash-hero-content">
    <div class="dash-hero-text">
      <div class="dash-hero-greeting">${greeting}, ${esc(S.session?.name||'Admin')}</div>
      <div class="dash-hero-sub">${needs.length?`<span style="color:var(--gold)">${needs.length}</span> project${needs.length!==1?'s':''} need${needs.length===1?'s':''} your attention`:'All projects on track — looking great'}</div>
    </div>
    <div class="btn-row" style="margin-top:0">
      <button class="btn btn-gold" onclick="showRegModal('client')">+ Client</button>
      <button class="btn btn-ai" onclick="showNewProjModal()">✦ New Project</button>
      <button class="btn btn-ghost" onclick="showRegModal('creator')">+ Creator</button>
      <button class="btn btn-ghost" onclick="syncToSheets()">↑ Sync</button>
    </div>
  </div>
</div>
<div class="dash-tiles">
${(()=>{
  // Calculate week-over-week deltas
  const weekAgo=new Date(Date.now()-7*864e5);
  const newThisWeek=ps.filter(p=>p.createdAt&&new Date(p.createdAt)>weekAgo).length;
  const completedThisWeek=ps.filter(p=>p.workflowStatus==='complete'&&p.updatedAt&&new Date(p.updatedAt)>weekAgo).length;
  const newClientsThisWeek=clients.filter(c=>c.createdAt&&new Date(c.createdAt)>weekAgo).length;
  function delta(n){return n>0?`<span style="color:var(--green);font-size:8px">+${n} this week</span>`:n<0?`<span style="color:var(--red);font-size:8px">${n} this week</span>`:''}
  return[
  {n:ps.length,d:delta(newThisWeek),l:'Total Projects',icon:'◈',grad:'var(--grad-hero)',f:{},tab:'projects'},
  {n:clients.length,d:delta(newClientsThisWeek),l:'Clients',icon:'◉',grad:'var(--grad-ai)',f:{},tab:'clients'},
  {n:creators.length,d:'',l:'Creators',icon:'✦',grad:'linear-gradient(135deg,#3B82F6,#06B6D4)',f:{},tab:'creators'},
  {n:needs.length,d:needs.length?`<span style="color:var(--warning);font-size:8px">action needed</span>`:'',l:'Need Attention',icon:'⚡',grad:'linear-gradient(135deg,#EF4444,#FF6B35)',f:{},tab:'projects',glow:needs.length>0},
  {n:complete,d:delta(completedThisWeek),l:'Complete',icon:'✓',grad:'linear-gradient(135deg,#10B981,#06B6D4)',f:{status:'complete'},tab:'projects'},
  {n:inProd,d:'',l:'In Production',icon:'▶',grad:'linear-gradient(135deg,#06B6D4,#8B5CF6)',f:{status:'storyboard_in_progress'},tab:'projects'},
  {n:inSyn,d:'',l:'In Review',icon:'◎',grad:'linear-gradient(135deg,#F59E0B,#FF6B35)',f:{status:'synopsis_review'},tab:'projects'}
].map(s=>`<div class="dash-tile${s.glow?' dash-tile-glow':''}" onclick="S.projF={...S.projF||{},...${JSON.stringify(s.f||{})}};S.dashF={...S.dashF||{},...${JSON.stringify(s.f||{})}};goTab('${s.tab}')">
  <div class="dash-tile-icon" style="background:${s.grad}">${s.icon}</div>
  <div class="dash-tile-num" style="background:${s.grad};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">${s.n}</div>
  <div class="dash-tile-label">${s.l}</div>
  ${s.d?`<div style="margin-top:4px">${s.d}</div>`:''}
</div>`).join('');})()}
</div>

<!-- ── VISUAL ANALYTICS SECTION ─────────────────────────── -->
<div id="dash-analytics" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-bottom:14px">

  <!-- PIE: Project Status -->
  <div style="background:var(--bg2);border:1px solid var(--b1);border-radius:12px;padding:18px">
    <div style="font-size:11px;font-weight:700;color:var(--t1);margin-bottom:4px">Project Status</div>
    <div style="font-size:9px;color:var(--t4);margin-bottom:14px">Distribution across pipeline stages</div>
    <div style="position:relative;display:flex;align-items:center;justify-content:center;margin-bottom:14px">
      <canvas id="chart-status" width="140" height="140"></canvas>
      <div style="position:absolute;text-align:center">
        <div style="font-size:22px;font-weight:800;color:var(--t1)">${ps.length}</div>
        <div style="font-size:9px;color:var(--t4)">total</div>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:5px">
      ${[
        {label:'In Review',count:flt.filter(p=>p.workflowStatus?.includes('review')).length,color:'#F59E0B'},
        {label:'In Production',count:inProd,color:'#06B6D4'},
        {label:'Complete',count:complete,color:'#10B981'},
        {label:'Brief Stage',count:flt.filter(p=>['brief_submitted','new'].includes(p.workflowStatus)).length,color:'#8B5CF6'},
      ].map(s=>`<div style="display:flex;align-items:center;justify-content:space-between">
        <div style="display:flex;align-items:center;gap:6px">
          <div style="width:8px;height:8px;border-radius:2px;background:${s.color};flex-shrink:0"></div>
          <div style="font-size:9px;color:var(--t3)">${s.label}</div>
        </div>
        <div style="font-size:10px;font-weight:700;color:var(--t1)">${s.count}</div>
      </div>`).join('')}
    </div>
  </div>

  <!-- BAR: Project Types -->
  <div style="background:var(--bg2);border:1px solid var(--b1);border-radius:12px;padding:18px">
    <div style="font-size:11px;font-weight:700;color:var(--t1);margin-bottom:4px">Project Types</div>
    <div style="font-size:9px;color:var(--t4);margin-bottom:14px">Breakdown by media category</div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${(()=>{
        const types={};
        ps.forEach(p=>{const t=MT[p.type]?.label||p.type||'Unknown';types[t]=(types[t]||0)+1;});
        const sorted=Object.entries(types).sort((a,b)=>b[1]-a[1]).slice(0,6);
        const max=sorted[0]?.[1]||1;
        const colors=['#FF6B35','#8B5CF6','#06B6D4','#10B981','#F59E0B','#EC4899'];
        return sorted.map(([label,count],i)=>`
          <div>
            <div style="display:flex;justify-content:space-between;margin-bottom:3px">
              <div style="font-size:9px;color:var(--t3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:120px">${label}</div>
              <div style="font-size:9px;font-weight:700;color:var(--t1)">${count}</div>
            </div>
            <div style="background:var(--bg3);border-radius:3px;height:6px;overflow:hidden">
              <div style="height:100%;width:${Math.round((count/max)*100)}%;background:${colors[i%colors.length]};border-radius:3px;transition:width 0.6s ease"></div>
            </div>
          </div>`).join('') || '<div style="font-size:10px;color:var(--t4);text-align:center;padding:20px 0">No projects yet</div>';
      })()}
    </div>
  </div>

  <!-- PIPELINE HEALTH + CLIENT ACTIVITY -->
  <div style="display:flex;flex-direction:column;gap:10px">

    <!-- Pipeline Health -->
    <div style="background:var(--bg2);border:1px solid var(--b1);border-radius:12px;padding:16px;flex:1">
      <div style="font-size:11px;font-weight:700;color:var(--t1);margin-bottom:4px">Pipeline Health</div>
      <div style="font-size:9px;color:var(--t4);margin-bottom:12px">Completion & attention rate</div>
      ${(()=>{
        const total=ps.length||1;
        const completePct=Math.round((complete/total)*100);
        const attentionPct=Math.round((needs.length/total)*100);
        const prodPct=Math.round((inProd/total)*100);
        return`
        <div style="margin-bottom:10px">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px">
            <div style="font-size:9px;color:var(--t3)">✓ Completed</div>
            <div style="font-size:9px;font-weight:700;color:var(--green)">${completePct}%</div>
          </div>
          <div style="background:var(--bg3);border-radius:4px;height:8px;overflow:hidden">
            <div style="height:100%;width:${completePct}%;background:linear-gradient(90deg,#10B981,#06B6D4);border-radius:4px"></div>
          </div>
        </div>
        <div style="margin-bottom:10px">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px">
            <div style="font-size:9px;color:var(--t3)">▶ In Production</div>
            <div style="font-size:9px;font-weight:700;color:var(--cyan)">${prodPct}%</div>
          </div>
          <div style="background:var(--bg3);border-radius:4px;height:8px;overflow:hidden">
            <div style="height:100%;width:${prodPct}%;background:linear-gradient(90deg,#06B6D4,#8B5CF6);border-radius:4px"></div>
          </div>
        </div>
        <div>
          <div style="display:flex;justify-content:space-between;margin-bottom:4px">
            <div style="font-size:9px;color:var(--t3)">⚡ Need Attention</div>
            <div style="font-size:9px;font-weight:700;color:${attentionPct>30?'var(--red)':'var(--gold)'}">${attentionPct}%</div>
          </div>
          <div style="background:var(--bg3);border-radius:4px;height:8px;overflow:hidden">
            <div style="height:100%;width:${attentionPct}%;background:linear-gradient(90deg,#EF4444,#FF6B35);border-radius:4px"></div>
          </div>
        </div>`;
      })()}
    </div>

    <!-- Client Activity -->
    <div style="background:var(--bg2);border:1px solid var(--b1);border-radius:12px;padding:16px;flex:1">
      <div style="font-size:11px;font-weight:700;color:var(--t1);margin-bottom:4px">Client Activity</div>
      <div style="font-size:9px;color:var(--t4);margin-bottom:10px">Projects per client</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${(()=>{
          const clientData=clients.map(c=>({
            name:c.name,
            count:ps.filter(p=>p.clientId===c.id).length,
            logo:c.logoUrl
          })).sort((a,b)=>b.count-a.count).slice(0,4);
          const max=clientData[0]?.count||1;
          return clientData.map(c=>`
            <div style="display:flex;align-items:center;gap:8px">
              ${c.logo?`<img src="${c.logo}" style="width:20px;height:20px;border-radius:4px;object-fit:contain;flex-shrink:0">`:`<div style="width:20px;height:20px;border-radius:4px;background:var(--bg3);display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:700;color:var(--t3);flex-shrink:0">${(c.name[0]||'?').toUpperCase()}</div>`}
              <div style="flex:1;min-width:0">
                <div style="font-size:9px;color:var(--t2);margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(c.name)}</div>
                <div style="background:var(--bg3);border-radius:3px;height:4px;overflow:hidden">
                  <div style="height:100%;width:${Math.round((c.count/max)*100)}%;background:var(--gold);border-radius:3px"></div>
                </div>
              </div>
              <div style="font-size:10px;font-weight:700;color:var(--t1);flex-shrink:0">${c.count}</div>
            </div>`).join('') || '<div style="font-size:10px;color:var(--t4);text-align:center;padding:10px 0">No clients yet</div>';
        })()}
      </div>
    </div>

  </div>

</div>
<!-- ── END ANALYTICS ─────────────────────────────────────── -->

<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:8px;padding:11px 13px;margin-bottom:12px">
<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end">
<div style="flex:1;min-width:140px"><div style="font-size:8px;color:var(--t4);text-transform:uppercase;margin-bottom:3px">Search</div>
<input type="text" placeholder="Project name..." value="${esc(df.q)}" oninput="S.dashF={...S.dashF||{},q:this.value};debounceRender('dash')" style="width:100%;background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:5px 8px;border-radius:4px;font-size:10px"/></div>
<div><div style="font-size:8px;color:var(--t4);text-transform:uppercase;margin-bottom:3px">AI PM</div>
<select onchange="S.dashF={...S.dashF||{},creator:this.value};render()" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:5px 8px;border-radius:4px;font-size:10px">
<option value="">All Creators</option>${creators.map(c=>`<option value="${c.id}"${df.creator===c.id?' selected':''}>${esc(c.name)}</option>`).join('')}</select></div>
<div><div style="font-size:8px;color:var(--t4);text-transform:uppercase;margin-bottom:3px">Client</div>
<select onchange="S.dashF={...S.dashF||{},client:this.value};render()" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:5px 8px;border-radius:4px;font-size:10px">
<option value="">All Clients</option>${clients.map(c=>`<option value="${c.id}"${df.client===c.id?' selected':''}>${esc(c.name)}</option>`).join('')}</select></div>
<div><div style="font-size:8px;color:var(--t4);text-transform:uppercase;margin-bottom:3px">Type</div>
<select onchange="S.dashF={...S.dashF||{},type:this.value};render()" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:5px 8px;border-radius:4px;font-size:10px">
<option value="">All Types</option>${Object.entries(MT).map(([k,m])=>`<option value="${k}"${df.type===k?' selected':''}>${m.label}</option>`).join('')}</select></div>
<div><div style="font-size:8px;color:var(--t4);text-transform:uppercase;margin-bottom:3px">Status</div>
<select onchange="S.dashF={...S.dashF||{},status:this.value};render()" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:5px 8px;border-radius:4px;font-size:10px">
<option value="">All Statuses</option>${['brief_submitted','synopsis_review','synopsis_locked','storyboard_in_progress','storyboard_review','complete'].map(s=>`<option value="${s}"${df.status===s?' selected':''}>${s.replace(/_/g,' ')}</option>`).join('')}</select></div>
<div><div style="font-size:8px;color:var(--t4);text-transform:uppercase;margin-bottom:3px">From</div>
<input type="date" value="${df.from||''}" onchange="S.dashF={...S.dashF||{},from:this.value};render()" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:5px 8px;border-radius:4px;font-size:10px"/></div>
<div><div style="font-size:8px;color:var(--t4);text-transform:uppercase;margin-bottom:3px">To</div>
<input type="date" value="${df.to||''}" onchange="S.dashF={...S.dashF||{},to:this.value};render()" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:5px 8px;border-radius:4px;font-size:10px"/></div>
<button class="btn btn-ghost btn-sm" onclick="S.dashF={};render()">Clear</button>
</div></div>
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
<div class="section-lbl" style="margin:0">${flt.length} project${flt.length!==1?'s':''} found</div>
<div style="display:flex;gap:5px"><button class="btn btn-ghost btn-sm" onclick="exportDashboardCSV()">Export CSV</button></div>
</div>
<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:8px;overflow:hidden">
<table class="tbl"><thead><tr><th>Project</th><th>Project ID</th><th>Client</th><th>Type</th><th>Workflow</th><th>AI PM</th><th>Created</th><th>Actions</th></tr></thead>
<tbody>${flt.length?flt.map(p=>adminProjRow(p)).join(''):'<tr><td colspan="7" style="text-align:center;color:var(--t4);padding:24px">No projects match filters</td></tr>'}</tbody></table>
</div></div>`;
}

function exportDashboardCSV(){
  const df=S.dashF||{};const ps=DB.getProjects();
  let flt=ps.filter(p=>{
    if(df.q&&!p.name.toLowerCase().includes(df.q.toLowerCase()))return false;
    if(df.creator&&p.assignedPmId!==df.creator)return false;
    if(df.client&&p.clientId!==df.client)return false;
    if(df.type&&p.type!==df.type)return false;
    if(df.status&&p.workflowStatus!==df.status)return false;
    if(df.from&&p.createdAt&&new Date(p.createdAt)<new Date(df.from))return false;
    if(df.to&&p.createdAt&&new Date(p.createdAt)>new Date(df.to+'T23:59:59'))return false;
    return true;
  });
  const rows=[['Project','Client','Client ID','Type','Workflow','AI PM','Created','Updated']];
  flt.forEach(p=>{const cl=DB.getUser(p.clientId);const cr=DB.getPM(p.assignedPmId);rows.push([p.name,cl?.name||'',cl?.clientId||'',MT[p.type]?.label||p.type,p.workflowStatus||'',cr?.name||'',p.createdAt?new Date(p.createdAt).toLocaleDateString():'',p.updatedAt?new Date(p.updatedAt).toLocaleDateString():'']);});
  const csv=rows.map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\n');
  dlTxt(csv,'studio_dashboard_'+new Date().toISOString().slice(0,10)+'.csv');
}

function syncToSheets(){
  const u=DB.getUser(S.session?.userId);const url=u?.sheetsUrl;
  if(!url){toast('Set Google Sheets URL in Settings first','err');goTab('settings');return;}
  const ps=DB.getProjects();const us=DB.getUsers();
  const payload={projects:ps.map(p=>{const cl=DB.getUser(p.clientId);const cr=DB.getPM(p.assignedPmId);return{id:p.id,name:p.name,type:MT[p.type]?.label||p.type,client:cl?.name||'',clientId:cl?.clientId||'',aiPm:cr?.name||'',status:p.workflowStatus||'',synopsisRevisions:p.synopsisRevisionCount||0,synopsisLocked:p.synopsisLocked||false,storyboardReleased:p.storyboardReleased||false,createdAt:p.createdAt,updatedAt:p.updatedAt};}),clients:us.filter(u=>u.role==='client').map(u=>({id:u.clientId,name:u.name,email:u.email||'',projects:ps.filter(p=>p.clientId===u.id).length,active:u.active!==false})),creators:us.filter(u=>u.role==='creator').map(u=>({name:u.name,username:u.username||'',clients:(u.assignedClients||[]).length,active:u.active!==false})),syncedAt:new Date().toISOString()};
  // Route through Supabase Edge Function proxy to avoid CORS issues
  // Use SB object directly (already loaded in memory) — more reliable than localStorage
  const sbUrl=SB._url||localStorage.getItem('sb_url')||'';
  const sbKey=SB._key||localStorage.getItem('sb_key')||'';
  const proxyUrl=sbUrl?sbUrl.replace(/\/+$/,'')+'/functions/v1/sheets-proxy':'';
  if(!proxyUrl||!sbKey){
    // Fallback: no Supabase configured — show error
    toast('Supabase not connected. Go to Settings → save your Supabase URL and key first, then try again.','err');
    return;
  }
  toast('Syncing to Google Sheets...','info');
  fetch(proxyUrl,{
    method:'POST',
    headers:{'Content-Type':'application/json','apikey':sbKey,'Authorization':'Bearer '+sbKey},
    body:JSON.stringify({sheetsUrl:url,payload})
  })
  .then(r=>r.json())
  .then(d=>{
    if(d.error)toast('Sync error: '+d.error,'err');
    else toast('Synced to Google Sheets ✓','ok');
  })
  .catch(e=>toast('Sync error: '+e.message,'err'));
}

function adminProjRow(p){
  const mt=MT[p.type];const client=DB.getUser(p.clientId);const emp=p.assignedCreatorId?DB.getUser(p.assignedCreatorId):null;
  const wf=p.workflowStatus||'new';const alert=p.pendingFeedback||p.newBrief;
  return`<tr style="cursor:pointer" onclick="S.detailPid='${p.id}';render()">
<td><div style="font-size:11px;font-weight:700;color:#fff">${esc(p.name)}</div><div style="font-size:9px;color:var(--t4)">${mt?.icon} ${mt?.label||p.type}</div></td>
<td><code style="font-size:9px;color:var(--gold);font-family:monospace">${p.projectId||'—'}</code></td>
<td>${client?`<span style="font-size:10px">${esc(client.name)}</span><div style="font-size:8px;color:var(--t4)">${client.clientId||''}</div>`:'<span style="color:var(--t4)">—</span>'}</td>
<td><span class="badge badge-gray">${mt?.label||p.type}</span></td>
<td><span class="badge badge-${alert?'red':wf==='complete'?'green':'gold'}">${wf.replace(/_/g,' ')}</span></td>
<td><span style="font-size:10px;color:var(--t3)">${emp?esc(emp.name):'Unassigned'}</span></td>
<td style="font-size:9px;color:var(--t4)">${p.updatedAt?new Date(p.updatedAt).toLocaleDateString():''}${(p.comments||[]).length?`<div style="font-size:8px;color:var(--blue);margin-top:1px">💬 ${p.comments.length}</div>`:''}</td>
<td><div style="display:flex;gap:4px">
<button class="btn btn-ghost btn-sm" onclick="openStudio('${p.id}')">Open</button>
<button class="btn btn-ghost btn-sm" onclick="showAssignModal('${p.id}')">Assign</button>
<button class="btn btn-red btn-sm" onclick="if(confirm('Delete?')){auditLog('project_deleted','Project deleted','${p.id}');DB.deleteProject('${p.id}');render()}">Del</button>
</div></td></tr>`;
}

function adminProjects(){
  // Project detail panel (inline)
  if(S.detailPid){
    const p=DB.getProject(S.detailPid);
    if(p)return projDetailPage(p);
  }
  const ps=DB.getProjects();const us=DB.getUsers();
  const creators=us.filter(u=>u.role==='creator');const clients=us.filter(u=>u.role==='client');
  const df=S.projF||{q:'',creator:'',client:'',type:'',status:'',from:'',to:'',priority:''};
  const viewMode=S.projView||'kanban'; // kanban | table | cards
  let flt=ps.filter(p=>{
    if(df.q&&!p.name.toLowerCase().includes(df.q.toLowerCase())&&!(p.projectId||'').includes(df.q)&&!(DB.getUser(p.clientId)?.name||'').toLowerCase().includes(df.q.toLowerCase()))return false;
    if(df.creator&&p.assignedPmId!==df.creator)return false;
    if(df.client&&p.clientId!==df.client)return false;
    if(df.type&&p.type!==df.type)return false;
    if(df.status&&p.workflowStatus!==df.status)return false;
    if(df.priority&&p.priority!==df.priority)return false;
    if(df.from&&p.createdAt&&new Date(p.createdAt)<new Date(df.from))return false;
    if(df.to&&p.createdAt&&new Date(p.createdAt)>new Date(df.to+'T23:59:59'))return false;
    return true;
  });
  // Sort
  const sort=S.projSort||'updated';
  flt.sort((a,b)=>{
    if(sort==='updated')return new Date(b.updatedAt)-new Date(a.updatedAt);
    if(sort==='created')return new Date(b.createdAt)-new Date(a.createdAt);
    if(sort==='deadline'){if(!a.deadline&&!b.deadline)return 0;if(!a.deadline)return 1;if(!b.deadline)return-1;return new Date(a.deadline)-new Date(b.deadline);}
    if(sort==='priority'){const o={high:0,medium:1,low:2};return(o[a.priority]||1)-(o[b.priority]||1);}
    if(sort==='name')return a.name.localeCompare(b.name);
    return 0;
  });

  const filterBar=`<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:8px;padding:10px 12px;margin-bottom:12px">
<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
<input type="text" placeholder="Search name, ID, client…" value="${esc(df.q)}" oninput="S.projF={...S.projF||{},q:this.value};debounceRender('proj')" style="flex:1;min-width:140px;background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:5px 8px;border-radius:4px;font-size:10px"/>
<select onchange="S.projF={...S.projF||{},creator:this.value};render()" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:5px 8px;border-radius:4px;font-size:10px">
<option value="">All Creators</option>${creators.map(cr=>`<option value="${cr.id}"${df.creator===cr.id?' selected':''}>${esc(cr.name)}</option>`).join('')}</select>
<select onchange="S.projF={...S.projF||{},client:this.value};render()" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:5px 8px;border-radius:4px;font-size:10px">
<option value="">All Clients</option>${clients.map(cl=>`<option value="${cl.id}"${df.client===cl.id?' selected':''}>${esc(cl.name)}</option>`).join('')}</select>
<select onchange="S.projF={...S.projF||{},type:this.value};render()" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:5px 8px;border-radius:4px;font-size:10px">
<option value="">All Types</option>${Object.entries(MT).map(([k,m])=>`<option value="${k}"${df.type===k?' selected':''}>${m.label}</option>`).join('')}</select>
<select onchange="S.projF={...S.projF||{},status:this.value};render()" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:5px 8px;border-radius:4px;font-size:10px">
<option value="">All Statuses</option>${['brief_submitted','synopsis_review','synopsis_locked','storyboard_in_progress','storyboard_review','complete'].map(s=>`<option value="${s}"${df.status===s?' selected':''}>${s.replace(/_/g,' ')}</option>`).join('')}</select>
<select onchange="S.projF={...S.projF||{},priority:this.value};render()" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:5px 8px;border-radius:4px;font-size:10px">
<option value="">All Priorities</option><option value="high"${df.priority==='high'?' selected':''}>🔴 High</option><option value="medium"${df.priority==='medium'?' selected':''}>● Medium</option><option value="low"${df.priority==='low'?' selected':''}>○ Low</option></select>
<select onchange="S.projSort=this.value;render()" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:5px 8px;border-radius:4px;font-size:10px">
<option value="updated"${(S.projSort||'updated')==='updated'?' selected':''}>Sort: Updated</option>
<option value="created"${S.projSort==='created'?' selected':''}>Sort: Created</option>
<option value="deadline"${S.projSort==='deadline'?' selected':''}>Sort: Deadline</option>
<option value="priority"${S.projSort==='priority'?' selected':''}>Sort: Priority</option>
<option value="name"${S.projSort==='name'?' selected':''}>Sort: Name</option></select>
<button class="btn btn-ghost btn-sm" onclick="S.projF={};render()">Clear</button>
</div></div>`;

  const viewToggle=`<div style="display:flex;gap:3px;background:var(--bg3);border:1px solid var(--b1);border-radius:6px;padding:3px">
${[{k:'kanban',i:'⊞'},{k:'cards',i:'▦'},{k:'table',i:'≡'}].map(v=>`<button onclick="S.projView='${v.k}';render()" style="background:${viewMode===v.k?'var(--bg2)':'transparent'};border:${viewMode===v.k?'1px solid var(--b2)':'1px solid transparent'};color:${viewMode===v.k?'var(--gold)':'var(--t4)'};padding:4px 8px;border-radius:4px;cursor:pointer;font-size:12px">${v.i}</button>`).join('')}
</div>`;

  return`<div class="page">
<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:12px">
<div><div class="page-title">All Projects</div><div class="page-sub">${ps.length} total · ${flt.length} shown</div></div>
<div class="btn-row" style="margin-top:0">
${viewToggle}
<button class="btn btn-gold" onclick="showNewProjModal()">+ New Project</button>
<button class="btn btn-ghost btn-sm" onclick="exportDashboardCSV()">Export CSV</button>
</div></div>
${filterBar}
${viewMode==='kanban'?projKanban(flt):viewMode==='cards'?projCards(flt):projTable(flt)}
</div>`;
}

// ── Kanban Board ──
function projKanban(projects){
  const cols=[
    {id:'new',label:'New',color:'#555',icon:'○'},
    {id:'brief_submitted',label:'Brief Received',color:'var(--gold)',icon:'📋'},
    {id:'synopsis_review',label:'Synopsis Review',color:'var(--blue)',icon:'📝'},
    {id:'synopsis_locked',label:'Synopsis Approved',color:'var(--green)',icon:'✓'},
    {id:'storyboard_in_progress',label:'Storyboard',color:'var(--purple)',icon:'🎨'},
    {id:'storyboard_review',label:'Client Review',color:'var(--gold)',icon:'👁'},
    {id:'complete',label:'Complete',color:'var(--green)',icon:'✓✓'},
  ];
  const hideCols=S.kanbanHide||{};
  const allProjects=DB.getProjects(); // total counts ignore filters
  return`<div>
<!-- Kanban stats strip -->
<div style="display:flex;gap:6px;margin-bottom:12px;overflow-x:auto;padding-bottom:2px">
${cols.map(col=>{
  const total=allProjects.filter(p=>(p.workflowStatus||'new')===col.id).length;
  const shown=projects.filter(p=>(p.workflowStatus||'new')===col.id).length;
  return`<div style="flex-shrink:0;background:var(--bg2);border:1px solid var(--b1);border-radius:6px;padding:5px 10px;text-align:center;cursor:pointer;opacity:${hideCols[col.id]?'.5':'1'}"
  onclick="S.kanbanHide={...S.kanbanHide||{},'${col.id}':!S.kanbanHide?.['${col.id}']};render()">
<div style="font-size:13px;font-weight:700;color:${col.color}">${total}</div>
<div style="font-size:8px;color:var(--t4);white-space:nowrap">${col.label}</div>
</div>`;}).join('')}
</div>
<!-- Board -->
<div style="display:flex;gap:10px;overflow-x:auto;padding-bottom:16px;align-items:flex-start">
${cols.filter(col=>!hideCols[col.id]).map(col=>{
  const colPs=projects.filter(p=>(p.workflowStatus||'new')===col.id);
  const overdue=colPs.filter(p=>p.deadline&&new Date(p.deadline)<new Date()&&col.id!=='complete').length;
  return`<div style="flex:0 0 235px;background:var(--bg2);border:1px solid var(--b1);border-top:2px solid ${col.color};border-radius:9px;overflow:hidden">
<!-- Column header -->
<div style="padding:9px 12px;border-bottom:1px solid var(--b1);display:flex;align-items:center;gap:7px">
<span style="font-size:10px">${col.icon}</span>
<span style="font-size:10px;font-weight:700;color:var(--t1);flex:1">${col.label}</span>
<div style="display:flex;align-items:center;gap:4px">
${overdue?`<span style="font-size:8px;color:var(--red);font-weight:700" title="${overdue} overdue">⚠${overdue}</span>`:''}
<span style="font-size:9px;background:${col.color}22;color:${col.color};padding:1px 7px;border-radius:8px;font-weight:700">${colPs.length}</span>
</div>
</div>
<!-- Cards -->
<div style="padding:8px;display:flex;flex-direction:column;gap:7px;min-height:80px;max-height:calc(100vh - 320px);overflow-y:auto">
${colPs.length?colPs.map(p=>kanbanCard(p)).join(''):`<div style="color:var(--t4);font-size:9px;text-align:center;padding:16px 8px;border:1px dashed var(--b2);border-radius:6px">No projects</div>`}
</div>
<!-- Add project to this column -->
<div style="padding:6px 8px;border-top:1px solid var(--b1)">
<button onclick="showNewProjModal({workflowStatus:'${col.id}'})" style="width:100%;background:transparent;border:1px dashed var(--b2);color:var(--t4);font-size:9px;padding:5px;border-radius:5px;cursor:pointer;transition:all .15s"
onmouseover="this.style.borderColor='${col.color}';this.style.color='${col.color}'"
onmouseout="this.style.borderColor='var(--b2)';this.style.color='var(--t4)'">+ Add to ${col.label}</button>
</div>
</div>`;}).join('')}
</div></div>`;
}

function kanbanCard(p){
  const mt=MT[p.type];const cl=DB.getUser(p.clientId);const cr=DB.getPM(p.assignedPmId);
  const now=new Date();const isOverdue=p.deadline&&new Date(p.deadline)<now&&p.workflowStatus!=='complete';
  const isAtRisk=p.deadline&&!isOverdue&&new Date(p.deadline)<new Date(Date.now()+7*864e5);
  const priColors={high:'var(--red)',medium:'#FF6B35',low:'#3a3a3a'};
  const priLabels={high:'HIGH',medium:'MED',low:'LOW'};
  const typeAccents={gold:'#FF6B35',purple:'var(--purple)',red:'var(--red)',blue:'var(--blue)',teal:'var(--green)',green:'var(--green)',pink:'#EC4899',coral:'var(--gold)'};
  const accent=typeAccents[mt?.color||'gold']||'#FF6B35';
  const unread=getUnreadCommentCount(p,S.session?.userId);
  const alert=p.pendingFeedback||p.newBrief;
  const progress=Math.round((['brief_submitted','synopsis_review','synopsis_locked','storyboard_in_progress','storyboard_review','complete'].indexOf(p.workflowStatus||'new')+1)/6*100);
  return`<div style="background:var(--bg3);border:1px solid ${isOverdue?'var(--red)55':isAtRisk?'var(--warning)33':alert?'rgba(255,107,53,0.18)':'var(--b1)'};border-radius:8px;overflow:hidden;cursor:pointer;transition:all .15s"
  onmouseover="this.style.borderColor='${accent}44';this.style.transform='translateY(-1px)'"
  onmouseout="this.style.borderColor='${isOverdue?'var(--red)55':isAtRisk?'var(--warning)33':alert?'rgba(255,107,53,0.18)':'var(--b1)'}';this.style.transform=''"
  onclick="S.detailPid='${p.id}';S.tab='projects';render()">
<!-- Type accent bar -->
<div style="height:3px;background:${accent};opacity:0.8"></div>
<div style="padding:9px 10px">
<!-- Header row: icon + name + priority -->
<div style="display:flex;align-items:flex-start;gap:6px;margin-bottom:6px">
<span style="font-size:14px;flex-shrink:0;line-height:1.2">${mt?.icon||'?'}</span>
<div style="flex:1;min-width:0">
<div style="font-size:10px;font-weight:700;color:#fff;line-height:1.4;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical">${esc(p.name)}</div>
</div>
<span style="flex-shrink:0;font-size:7px;font-weight:700;padding:2px 5px;border-radius:3px;background:${priColors[p.priority||'medium']}22;color:${priColors[p.priority||'medium']};border:1px solid ${priColors[p.priority||'medium']}44">${priLabels[p.priority||'medium']}</span>
</div>
<!-- Project ID -->
<div style="font-size:8px;color:var(--gold);font-family:monospace;margin-bottom:6px;opacity:.8">${p.projectId||'—'}</div>
<!-- Client + Creator -->
${cl?`<div style="font-size:9px;color:var(--t3);margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">👤 ${esc(cl.name)}</div>`:''}
${cr?`<div style="font-size:9px;color:var(--blue);margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">✏ ${esc(cr.name)}</div>`:''}
<!-- Tags -->
${(p.tags||[]).length?`<div style="display:flex;gap:3px;flex-wrap:wrap;margin:4px 0">${p.tags.slice(0,2).map(t=>`<span style="font-size:7px;background:var(--bg4);color:var(--t4);padding:1px 5px;border-radius:8px;border:1px solid var(--b2)">#${esc(t)}</span>`).join('')}${p.tags.length>2?`<span style="font-size:7px;color:var(--t4)">+${p.tags.length-2}</span>`:''}</div>`:''}
<!-- Progress bar -->
<div style="height:2px;background:var(--bg4);border-radius:1px;overflow:hidden;margin:6px 0 5px">
<div style="height:100%;width:${progress}%;background:${p.workflowStatus==='complete'?'var(--green)':accent};border-radius:1px;transition:width .3s"></div>
</div>
<!-- Footer: deadline + badges + actions -->
<div style="display:flex;justify-content:space-between;align-items:center">
<span style="font-size:8px;color:${isOverdue?'var(--red)':isAtRisk?'#FF8A5C':'var(--t4)'}">${
  isOverdue?'⚠ Overdue':
  isAtRisk?'⚡ '+daysBetween(new Date().toISOString(),p.deadline)+'d left':
  p.deadline?'📅 '+new Date(p.deadline).toLocaleDateString():''
}</span>
<div style="display:flex;gap:4px;align-items:center">
${alert?`<span style="background:var(--red)22;color:var(--red);font-size:7px;font-weight:700;padding:1px 4px;border-radius:3px">!</span>`:''}
${unread?`<span style="background:var(--red);color:#fff;font-size:7px;font-weight:700;border-radius:8px;padding:1px 4px">💬${unread}</span>`:''}

<button onclick="event.stopPropagation();openStudio('${p.id}')" style="background:${accent}22;border:1px solid ${accent}44;color:${accent};font-size:7px;font-weight:700;padding:2px 5px;border-radius:3px;cursor:pointer">OPEN</button>
</div>
</div>
</div>
</div>`;
}

// ── Card Grid view ──
function projCards(projects){
  if(!projects.length)return`<div style="text-align:center;color:var(--t4);padding:40px">No projects match filters.</div>`;
  return`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:11px">
${projects.map(p=>{
  const mt=MT[p.type];const cl=DB.getUser(p.clientId);const cr=DB.getPM(p.assignedPmId);
  const wf=p.workflowStatus||'new';const now=new Date();
  const isOverdue=p.deadline&&new Date(p.deadline)<now&&wf!=='complete';
  const alert=p.pendingFeedback||p.newBrief;
  const progress=Math.round((['brief_submitted','synopsis_review','synopsis_locked','storyboard_in_progress','storyboard_review','complete'].indexOf(wf)+1)/6*100);
  return`<div style="background:var(--bg2);border:1px solid ${isOverdue?'var(--red)33':alert?'rgba(255,107,53,0.18)':'var(--b1)'};border-radius:10px;overflow:hidden;cursor:pointer;transition:all .15s" onclick="S.detailPid='${p.id}';render()" onmouseover="this.style.transform='translateY(-1px)'" onmouseout="this.style.transform=''">
<div style="padding:12px 14px;border-bottom:1px solid var(--b1)">
<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:7px">
<div style="font-size:16px">${mt?.icon||'?'}</div>
<div style="display:flex;gap:4px;flex-wrap:wrap">
${{high:'<span style="font-size:8px;color:var(--red);font-weight:700">🔴 HIGH</span>',low:'<span style="font-size:8px;color:var(--t4)">○ LOW</span>'}[p.priority||'']||''}
${alert?'<span class="badge badge-red" style="font-size:7px">Action needed</span>':''}
<span class="badge badge-${wf==='complete'?'green':wf.includes('review')?'gold':'gray'}" style="font-size:7px">${wf.replace(/_/g,' ')}</span>
</div></div>
<div style="font-size:12px;font-weight:700;color:#fff;margin-bottom:3px;line-height:1.3">${esc(p.name)}</div>
<div style="font-size:8px;color:var(--gold);font-family:monospace;margin-bottom:5px">${p.projectId||'—'}</div>
${cl?`<div style="font-size:9px;color:var(--t3);margin-bottom:2px">👤 ${esc(cl.name)}</div>`:''}
${cr?`<div style="font-size:9px;color:var(--blue);margin-bottom:2px">✏ ${esc(cr.name)}</div>`:''}
${p.tags?.length?`<div style="display:flex;gap:3px;flex-wrap:wrap;margin-top:5px">${p.tags.slice(0,3).map(t=>`<span style="font-size:8px;background:var(--bg4);color:var(--t4);padding:1px 5px;border-radius:8px">#${esc(t)}</span>`).join('')}</div>`:''}
</div>
<div style="padding:8px 14px">
<div style="display:flex;justify-content:space-between;font-size:8px;color:var(--t4);margin-bottom:3px"><span>${progress}%</span>${p.deadline?`<span style="color:${isOverdue?'var(--red)':'var(--t4)'}">${isOverdue?'⚠ Overdue':'📅 '+new Date(p.deadline).toLocaleDateString()}</span>`:''}</div>
<div style="height:3px;background:var(--bg4);border-radius:2px;overflow:hidden"><div style="height:100%;width:${progress}%;background:${wf==='complete'?'var(--green)':'var(--gold)'};border-radius:2px"></div></div>
${wfMiniDots(p)}
<div style="display:flex;justify-content:space-between;align-items:center;margin-top:7px">
<span></span>
<div style="display:flex;gap:4px">
${(p.comments||[]).length?`<span style="font-size:9px;color:var(--blue)">💬${p.comments.length}</span>`:''}
<button class="btn btn-ghost btn-sm" style="padding:2px 7px;font-size:9px" onclick="event.stopPropagation();openStudio('${p.id}')">Studio →</button>
</div></div></div></div>`;}).join('')}
</div>`;
}

// ── Table view (existing but improved) ──
function projTable(projects){
  if(!projects.length)return`<div style="text-align:center;color:var(--t4);padding:40px">No projects match filters.</div>`;
  return`<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:8px;overflow:hidden">
<table class="tbl"><thead><tr><th>Project</th><th>ID</th><th>Client</th><th>AI PM</th><th>Status</th><th>Priority</th><th>Deadline</th><th>Updated</th><th></th></tr></thead>
<tbody>${projects.map(p=>{
  const mt=MT[p.type];const cl=DB.getUser(p.clientId);const cr=DB.getPM(p.assignedPmId);
  const wf=p.workflowStatus||'new';const now=new Date();
  const isOverdue=p.deadline&&new Date(p.deadline)<now&&wf!=='complete';
  const alert=p.pendingFeedback||p.newBrief;
  const priIcon={high:'🔴',medium:'🟡',low:'⚪'}[p.priority||'medium'];
  return`<tr style="cursor:pointer" onclick="S.detailPid='${p.id}';render()">
<td><div style="font-size:11px;font-weight:700;color:#fff">${esc(p.name.substring(0,32)+(p.name.length>32?'…':''))}</div>
<div style="font-size:8px;color:var(--t4)">${mt?.icon} ${mt?.label}</div>
${(p.tags||[]).length?`<div style="display:flex;gap:2px;margin-top:2px">${p.tags.slice(0,2).map(t=>`<span style="font-size:7px;background:var(--bg4);color:var(--t4);padding:1px 4px;border-radius:5px">#${esc(t)}</span>`).join('')}</div>`:''}
</td>
<td><code style="font-size:9px;color:var(--gold)">${p.projectId||'—'}</code></td>
<td>${cl?`<div style="font-size:10px;color:var(--t2)">${esc(cl.name)}</div><div style="font-size:8px;color:var(--t4)">${cl.clientId||''}</div>`:'<span style="color:var(--t4)">—</span>'}</td>
<td><span style="font-size:10px;color:var(--blue)">${cr?esc(cr.name):'<span style="color:var(--t4)">—</span>'}</span></td>
<td><span class="badge badge-${alert?'red':wf==='complete'?'green':'gold'}">${wf.replace(/_/g,' ')}</span></td>
<td>${priIcon} <span style="font-size:9px;color:var(--t4)">${p.priority||'medium'}</span></td>
<td><span style="font-size:9px;color:${isOverdue?'var(--red)':'var(--t4)'}">${p.deadline?new Date(p.deadline).toLocaleDateString():'—'}</span>${isOverdue?'<div style="font-size:8px;color:var(--red)">overdue</div>':''}</td>
<td style="font-size:9px;color:var(--t4)">${p.updatedAt?new Date(p.updatedAt).toLocaleDateString():''}
${(p.comments||[]).length?`<div style="font-size:8px;color:var(--blue)">💬${p.comments.length}</div>`:''}</td>
<td onclick="event.stopPropagation()"><div style="display:flex;gap:3px">
<button class="btn btn-ghost btn-sm" onclick="openStudio('${p.id}')">Open</button>
<button class="btn btn-ghost btn-sm" onclick="showAssignModal('${p.id}')">Assign</button>
<button class="btn btn-red btn-sm" onclick="if(confirm('Delete?')){auditLog('project_deleted','Project deleted','${p.id}');DB.deleteProject('${p.id}');render()}">Del</button>
</div></td></tr>`;}).join('')}
</tbody></table></div>`;
}

// ── Project Detail Page (inline, replaces old modal) ──
function projDetailPage(p){
  const mt=MT[p.type];const cl=DB.getUser(p.clientId);const cr=DB.getPM(p.assignedPmId);
  const creators=DB.getUsers().filter(u=>u.role==='creator');
  const clients=DB.getUsers().filter(u=>u.role==='client');
  const wf=p.workflowStatus||'new';const now=new Date();
  const isOverdue=p.deadline&&new Date(p.deadline)<now&&wf!=='complete';
  const atRisk=p.deadline&&!isOverdue&&new Date(p.deadline)<new Date(Date.now()+7*864e5);
  const progress=Math.round((['brief_submitted','synopsis_review','synopsis_locked','storyboard_in_progress','storyboard_review','complete'].indexOf(wf)+1)/6*100);
  const priColor={high:'var(--red)',medium:'var(--gold)',low:'var(--t4)'};
  return`<div class="page">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:18px;flex-wrap:wrap">
<button class="btn btn-ghost btn-sm" onclick="S.detailPid=null;render()">← All Projects</button>
<div style="flex:1;min-width:0">
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
<span style="font-size:18px">${mt?.icon||'?'}</span>
<div style="font-size:17px;font-weight:700;color:#fff">${esc(p.name)}</div>
<code style="font-size:10px;color:var(--gold);background:#1a0f1e;border:1px solid rgba(255,107,53,0.18);padding:2px 8px;border-radius:10px">${p.projectId||'—'}</code>
${{high:'<span style="font-size:9px;color:var(--red);font-weight:700">🔴 HIGH</span>',low:'<span style="font-size:9px;color:var(--t4)">○ LOW</span>'}[p.priority||'']||''}
</div>
</div>
<div class="btn-row" style="margin-top:0">
<button class="btn btn-gold" onclick="openStudio('${p.id}')">Open Studio →</button>
<button class="btn btn-outline btn-sm" onclick="showEditProjModal('${p.id}')">Edit</button>
<button class="btn btn-ghost btn-sm" onclick="showAssignModal('${p.id}')">Assign</button>
<button class="btn btn-red btn-sm" onclick="if(confirm('Delete this project?')){auditLog('project_deleted','Project deleted','${p.id}');DB.deleteProject('${p.id}');S.detailPid=null;render()}">Delete</button>
</div></div>

${isOverdue?`<div style="background:#100404;border:1px solid var(--red)44;border-radius:7px;padding:10px 14px;margin-bottom:14px;font-size:10px;color:var(--red)">⚠ This project is <strong>${daysFrom(p.deadline)} days overdue.</strong> Deadline was ${new Date(p.deadline).toLocaleDateString()}.</div>`:''}
${atRisk?`<div style="background:#120d00;border:1px solid var(--warning)44;border-radius:7px;padding:10px 14px;margin-bottom:14px;font-size:10px;color:#FF8A5C">⚡ Deadline in <strong>${daysBetween(now.toISOString(),p.deadline)} days</strong> — ${new Date(p.deadline).toLocaleDateString()}</div>`:''}

<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:18px">
${[
  {l:'Status',v:wf.replace(/_/g,' '),c:wf==='complete'?'var(--green)':wf.includes('review')?'var(--gold)':'var(--t2)'},
  {l:'Progress',v:progress+'%',c:'var(--green)'},
  {l:'Priority',v:(p.priority||'medium').toUpperCase(),c:{high:'var(--red)',medium:'var(--gold)',low:'var(--t4)'}[p.priority||'medium']},
  {l:'Deadline',v:p.deadline?new Date(p.deadline).toLocaleDateString():'Not set',c:isOverdue?'var(--red)':atRisk?'#FF8A5C':'var(--t3)'},
].map(s=>`<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:8px;padding:12px;text-align:center">
<div style="font-size:15px;font-weight:700;color:${s.c}">${s.v}</div>
<div style="font-size:8px;color:var(--t4);text-transform:uppercase;margin-top:3px">${s.l}</div></div>`).join('')}
</div>
<!-- Progress bar -->
<div style="margin-bottom:18px">
<div style="display:flex;justify-content:space-between;font-size:9px;color:var(--t4);margin-bottom:4px"><span>Workflow Progress</span><span>${progress}%</span></div>
<div style="height:5px;background:var(--bg4);border-radius:3px;overflow:hidden">
<div style="height:100%;width:${progress}%;background:${wf==='complete'?'var(--green)':'var(--gold)'};border-radius:3px;transition:width .4s"></div>
</div>
${wfMiniDots(p)}
</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
<div>

<div class="section-lbl">Project Info</div>
<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:8px;padding:13px;font-size:10px;line-height:2.1;color:var(--t3)">
<div style="display:flex;justify-content:space-between"><span><strong style="color:var(--t4)">Type</strong></span><span>${mt?.icon} ${mt?.label||p.type}</span></div>
<div style="display:flex;justify-content:space-between;border-top:1px solid var(--b1);padding-top:4px"><span><strong style="color:var(--t4)">Client</strong></span><span style="color:var(--t2)">${cl?esc(cl.name)+' · '+cl.clientId:'Not assigned'}</span></div>
<div style="display:flex;justify-content:space-between;border-top:1px solid var(--b1);padding-top:4px"><span><strong style="color:var(--t4)">AI PM</strong></span><span style="color:var(--blue)">${cr?esc(cr.name):'Unassigned'}</span></div>
<div style="display:flex;justify-content:space-between;border-top:1px solid var(--b1);padding-top:4px"><span><strong style="color:var(--t4)">Created</strong></span><span>${p.createdAt?new Date(p.createdAt).toLocaleDateString():''}</span></div>
<div style="display:flex;justify-content:space-between;border-top:1px solid var(--b1);padding-top:4px"><span><strong style="color:var(--t4)">Last Updated</strong></span><span>${p.updatedAt?new Date(p.updatedAt).toLocaleDateString():''}</span></div>
<div style="display:flex;justify-content:space-between;border-top:1px solid var(--b1);padding-top:4px"><span><strong style="color:var(--t4)">Comments</strong></span><span style="color:var(--blue)">${(p.comments||[]).length}</span></div>
</div>

${p.tags?.length?`<div style="margin-top:12px">
<div class="section-lbl">Tags</div>
<div style="display:flex;gap:5px;flex-wrap:wrap">${p.tags.map(t=>`<span style="background:var(--bg4);color:var(--t3);border:1px solid var(--b2);padding:3px 10px;border-radius:10px;font-size:10px">#${esc(t)}</span>`).join('')}</div>
</div>`:''}

${p.notes?`<div style="margin-top:12px">
<div class="section-lbl">Notes / Brief</div>
<div style="background:var(--bg2);border:1px solid var(--b1);border-left:3px solid var(--gold);border-radius:0 6px 6px 0;padding:10px 12px;font-size:10px;color:var(--t3);line-height:1.7;white-space:pre-wrap">${esc(p.notes)}</div>
</div>`:''}

<div style="margin-top:14px">
<div class="section-lbl">Workflow Progress</div>
${wfBar(p)}
</div>

<div style="margin-top:14px">
<div class="section-lbl">Quick Actions</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
<button class="btn btn-gold" onclick="openStudio('${p.id}')">◈ Open Studio</button>
<button class="btn btn-ghost btn-sm" onclick="openStudio('${p.id}');setTimeout(()=>{S.stage=98;render()},100)">💬 Comments${(p.comments||[]).length?' ('+p.comments.length+')':''}</button>
${wf==='brief_submitted'?`<button class="btn btn-outline" onclick="openStudio('${p.id}');setTimeout(()=>{S.step=2;render()},100)">✦ Synopsis</button>`:''}
${wf==='synopsis_locked'?`<button class="btn btn-blue" onclick="openStudio('${p.id}');setTimeout(()=>{S.stage=2;S.step=2;render()},100)">✦ Storyboard</button>`:''}
${wf==='storyboard_in_progress'?`<button class="btn btn-green" style="grid-column:1/-1" onclick="releaseStoryboard('${p.id}')">↑ Release Storyboard to Client</button>`:''}
${wf==='storyboard_review'&&p.pendingFeedback?`<button class="btn btn-red btn-sm" style="grid-column:1/-1" onclick="openStudio('${p.id}');setTimeout(()=>{S.stage=2;S.step=2;render()},100)">⚠ View Client Feedback</button>`:''}
<button class="btn btn-ghost btn-sm" onclick="showEditProjModal('${p.id}')">✏ Edit Details</button>
<button class="btn btn-ghost btn-sm" onclick="showAssignModal('${p.id}')">👤 Assign</button>
${p.assignedPmId?`<button class="btn btn-outline btn-sm" style="grid-column:1/-1;background:linear-gradient(135deg,rgba(139,92,246,0.15),rgba(6,182,212,0.08));border-color:rgba(139,92,246,0.4);color:#a78bfa" onclick="runAIPMBriefing('${p.id}')">🤖 Run AI PM Briefing</button>`:`<button class="btn btn-ghost btn-sm" style="grid-column:1/-1;opacity:0.5;font-size:10px" onclick="showAssignModal('${p.id}')">Assign an AI PM to run briefing</button>`}
${wf!=='complete'?`<button class="btn btn-green btn-sm" style="grid-column:1/-1" onclick="markProjComplete('${p.id}')">✓ Mark Complete</button>`:`
<div style="grid-column:1/-1">
  <div style="display:flex;align-items:center;justify-content:space-between;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;padding:10px 12px;margin-bottom:6px">
    <span style="font-size:11px;color:#10B981;font-weight:600">✓✓ Project Complete · ${(p.deliveryFiles||[]).length} file(s) delivered</span>
    <button class="btn btn-ghost btn-sm" style="font-size:10px" onclick="addDeliveryFiles('${p.id}')">+ Add Files</button>
  </div>
</div>`}
</div>
</div>

</div>

<div>
<div class="section-lbl">Activity Feed</div>
<div style="display:flex;flex-direction:column;gap:6px;max-height:380px;overflow-y:auto;margin-bottom:14px">
${(()=>{
  const cms=(p.comments||[]).slice().reverse().slice(0,8).map(cm=>({ts:cm.ts,icon:'💬',label:'<strong style="color:var(--blue)">'+esc(cm.authorName)+'</strong>: '+esc(cm.text.substring(0,80)+(cm.text.length>80?'…':'')),color:'var(--blue)'}));
  const hist=(p.stageHistory||[]).slice().reverse().slice(0,5).map(h=>({ts:h.enteredAt,icon:'→',label:'Stage changed to <strong style="color:var(--gold)">'+h.stage.replace(/_/g,' ')+'</strong>',color:'var(--gold)'}));
  const items=[...cms,...hist].sort((a,b)=>new Date(b.ts)-new Date(a.ts)).slice(0,10);
  if(!items.length)return'<div style="color:var(--t4);font-size:10px;padding:14px;text-align:center;border:1px dashed var(--b2);border-radius:6px">No activity yet</div>';
  return items.map(it=>`<div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:var(--bg2);border:1px solid var(--b1);border-radius:6px">
<span style="font-size:11px;flex-shrink:0;margin-top:1px">${it.icon}</span>
<div style="flex:1;min-width:0">
<div style="font-size:10px;color:var(--t2);line-height:1.5">${it.label}</div>
<div style="font-size:8px;color:var(--t4);margin-top:2px">${it.ts?new Date(it.ts).toLocaleString():''}</div>
</div></div>`).join('');
})()}
</div>

<div class="section-lbl">Project Timeline</div>
${sProjectTimeline(p)}
</div>
</div>
</div>`;
}

function showEditProjModal(pid){
  const p=DB.getProject(pid);if(!p)return;
  const clients=DB.getUsers().filter(u=>u.role==='client');
  const creators=DB.getUsers().filter(u=>u.role==='creator');
  openModal(`<div class="modal-title">Edit Project</div>
<div class="fg"><label>Name</label><input type="text" id="ep-n" value="${esc(p.name)}"/></div>
<div class="form2">
<div class="fg"><label>Priority</label><select id="ep-pri">
<option value="high"${p.priority==='high'?' selected':''}>🔴 High</option>
<option value="medium"${(p.priority||'medium')==='medium'?' selected':''}>● Medium</option>
<option value="low"${p.priority==='low'?' selected':''}>○ Low</option>
</select></div>
<div class="fg"><label>Deadline</label><input type="date" id="ep-dl" value="${p.deadline||''}"/></div>
<div class="fg"><label>Tags</label><input type="text" id="ep-tags" value="${esc((p.tags||[]).join(', '))}"/></div>
<div class="fg"><label>Client</label><select id="ep-cl"><option value="">None</option>${clients.map(c=>`<option value="${c.id}"${p.clientId===c.id?' selected':''}>${esc(c.name)}</option>`).join('')}</select></div>
<div class="fg"><label>AI PM</label><select id="ep-cr"><option value="">None</option>${DB.getPMs().map(pm=>`<option value="${pm.id}"${p.assignedPmId===pm.id?' selected':''}}>${esc(pm.name)}</option>`).join('')}</select></div>
</div>
<div class="fg full"><label>Notes</label><textarea id="ep-notes" rows="2">${esc(p.notes||'')}</textarea></div>
<div class="btn-row"><button class="btn btn-gold" onclick="doEditProj('${pid}')">Save</button><button class="btn btn-ghost" onclick="closeModal()">Cancel</button></div>`);
}
function doEditProj(pid){
  const p=DB.getProject(pid);if(!p)return;
  p.name=document.getElementById('ep-n')?.value.trim()||p.name;
  p.priority=document.getElementById('ep-pri')?.value||'medium';
  p.deadline=document.getElementById('ep-dl')?.value||null;
  p.tags=(document.getElementById('ep-tags')?.value||'').split(',').map(t=>t.trim()).filter(Boolean);
  p.clientId=document.getElementById('ep-cl')?.value||null;
  p.assignedPmId=document.getElementById('ep-cr')?.value||null;
  p.notes=document.getElementById('ep-notes')?.value.trim()||'';
  DB.saveProject(p);closeModal();render();toast('Project updated!','ok');
}
function markProjComplete(pid){
  if(!confirm('Mark this project as complete?'))return;
  const p=DB.getProject(pid);if(!p)return;
  if(!p.stageHistory)p.stageHistory=[];
  p.stageHistory.push({stage:'complete',enteredAt:new Date().toISOString()});
  p.workflowStatus='complete';
  DB.saveProject(p);render();toast('Project marked complete!','ok');
  pushToRole('admin','complete','Project complete',p.name+' has been marked complete',p.id);
  if(p.clientId)pushNotif(p.clientId,'complete','Project complete!',p.name+' has been finalised and is ready for download.',p.id);
  // Prompt to upload delivery files
  setTimeout(()=>showDeliveryUploadModal(pid),300);
}

function showDeliveryUploadModal(pid){
  const p=DB.getProject(pid);if(!p)return;
  openModal(`
<div style="padding:4px">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:18px">
  <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#10B981,#06B6D4);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0">📦</div>
  <div>
    <div style="font-size:15px;font-weight:700;color:var(--t1)">Upload Final Deliverables</div>
    <div style="font-size:11px;color:var(--t4)">${esc(p.name)} — upload files for the client to download</div>
  </div>
</div>
<div class="ib ib-blue" style="margin-bottom:14px;font-size:11px">Files uploaded here will appear in the client's portal under "Final Deliverables" — they can download them directly.</div>
<div style="border:2px dashed var(--b2);border-radius:10px;padding:24px;text-align:center;margin-bottom:14px;cursor:pointer;transition:all 0.2s" onclick="document.getElementById('del-upload').click()" id="del-drop-zone">
  <div style="font-size:28px;margin-bottom:8px">📁</div>
  <div style="font-size:12px;font-weight:600;color:var(--t2)">Click to upload files</div>
  <div style="font-size:10px;color:var(--t4);margin-top:4px">MP4, MOV, PNG, JPG, PDF, ZIP — any format</div>
</div>
<input type="file" id="del-upload" multiple style="display:none" onchange="uploadDeliveryFiles(event,'${pid}')"/>
<div id="del-file-list" style="display:flex;flex-direction:column;gap:6px;margin-bottom:14px;max-height:160px;overflow-y:auto"></div>
<div class="btn-row" style="margin-top:0">
  <button class="btn btn-gold" onclick="closeModal();S.detailPid='${pid}';render()">Done</button>
  <button class="btn btn-ghost" onclick="closeModal();S.detailPid='${pid}';render()">Skip for now</button>
</div>
</div>`);
}

async function uploadDeliveryFiles(e, pid){
  const p=DB.getProject(pid);if(!p)return;
  if(!p.deliveryFiles)p.deliveryFiles=[];
  const listEl=document.getElementById('del-file-list');

  for(const f of Array.from(e.target.files)){
    const itemId='df_'+Date.now()+'_'+Math.random().toString(36).slice(2,6);
    // Show uploading state
    if(listEl){
      const div=document.createElement('div');
      div.id=itemId;
      div.style.cssText='display:flex;align-items:center;gap:10px;background:var(--bg2);border:1px solid var(--b1);border-radius:7px;padding:10px;font-size:11px';
      div.innerHTML=`<span style="font-size:16px">${f.type.startsWith('video/')?'🎬':f.type.startsWith('image/')?'🖼':'📄'}</span><div style="flex:1"><div style="color:var(--t1);font-weight:600">${esc(f.name)}</div><div style="color:var(--t4);font-size:9px">${(f.size/1024/1024).toFixed(1)} MB · Uploading...</div></div><div style="width:14px;height:14px;border:2px solid var(--gold);border-top-color:transparent;border-radius:50%;animation:spin 0.8s linear infinite"></div>`;
      listEl.appendChild(div);
    }

    const r=new FileReader();
    await new Promise(res=>{
      r.onload=async ev=>{
        const b64=ev.target.result;
        const isImg=f.type.startsWith('image/');
        let fileUrl=b64; // fallback to base64
        // Try to upload image to Supabase for permanent URL
        if(isImg){
          try{
            const pUrl=await persistImage(b64);
            fileUrl=pUrl;
          }catch(e){}
        }
        const df={id:gid('df'),name:f.name,type:f.type,size:f.size,url:fileUrl,uploadedAt:new Date().toISOString(),uploadedBy:S.session?.name||'Admin'};
        p.deliveryFiles.push(df);
        DB.saveProject(p);
        // Update list item
        const itemEl=document.getElementById(itemId);
        if(itemEl) itemEl.innerHTML=`<span style="font-size:16px">${f.type.startsWith('video/')?'🎬':f.type.startsWith('image/')?'🖼':'📄'}</span><div style="flex:1"><div style="color:var(--t1);font-weight:600">${esc(f.name)}</div><div style="color:var(--t4);font-size:9px">${(f.size/1024/1024).toFixed(1)} MB · <span style="color:var(--green)">✓ Ready</span></div></div>`;
        res();
      };
      r.readAsDataURL(f);
    });
  }
  toast(e.target.files.length+' file(s) ready for delivery!','ok');
}

function addDeliveryFiles(pid){
  const p=DB.getProject(pid);if(!p)return;
  showDeliveryUploadModal(pid);
}

function adminClients(){
  const clients=DB.getUsers().filter(u=>u.role==='client');
  const emps=DB.getUsers().filter(u=>u.role==='creator');
  return`<div class="page">
<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:16px">
<div><div class="page-title">Clients</div><div class="page-sub">${clients.length} registered</div></div>
<button class="btn btn-gold" onclick="showRegModal('client')">+ Register Client</button>
</div>
<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:8px;overflow:hidden">
<table class="tbl" style="table-layout:fixed;width:100%"><thead><tr>
<th style="width:22%">Client</th>
<th style="width:10%">Client ID</th>
<th style="width:11%">Password</th>
<th style="width:8%">Projects</th>
<th style="width:16%">AI PM</th>
<th style="width:8%">Status</th>
<th style="width:25%">Actions</th>
</tr></thead>
<tbody>${clients.length?clients.map(c=>{
  const pcount=DB.getProjects().filter(p=>p.clientId===c.id).length;
  const emp=emps.find(e=>e.assignedClients?.includes(c.id));
  return`<tr>
<td style="overflow:hidden"><div class="urow" style="min-width:0">${clientAvatar(c,36,8)}<div class="uinfo" style="min-width:0;overflow:hidden"><div class="name" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(c.name)}</div><div class="sub" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(c.email||'')}</div></div></div></td>
<td><code style="color:var(--purple);font-size:10px">${c.clientId||'—'}</code></td>
<td><div style="display:flex;align-items:center;gap:4px"><code class="pw-masked" style="color:var(--t4);font-size:10px" data-pw="${esc(c.password)}">••••••••</code><button onclick="togglePwVis(this)" style="background:none;border:none;cursor:pointer;font-size:11px;padding:2px">👁</button></div></td>
<td><span style="font-size:10px;color:var(--t3)">${pcount}</span></td>
<td><span style="font-size:10px;color:${c.assignedPmId?'var(--gold)':'var(--t4)'}">${c.assignedPmId?esc(DB.getPM(c.assignedPmId)?.name||'Unknown PM'):'— No PM'}</span></td>
<td><span class="badge badge-${c.active!==false?'green':'red'}">${c.active!==false?'Active':'Inactive'}</span></td>
<td><div style="display:flex;gap:4px;flex-wrap:wrap;align-items:center">
<button class="btn btn-ghost btn-sm" style="font-size:9px" onclick="showEditUserModal('${c.id}')">Edit</button>
<button class="btn btn-blue btn-sm" style="font-size:9px" onclick="viewAsClient('${c.id}')">View Portal</button>
<button class="btn btn-ghost btn-sm" style="font-size:9px" onclick="adminViewClientChat('${c.id}')">💬 Chat</button>
<button class="btn btn-${c.active!==false?'red':'green'} btn-sm" style="font-size:9px" onclick="toggleActive('${c.id}')">${c.active!==false?'Deactivate':'Activate'}</button>
</div></td></tr>`;}).join(''):'<tr><td colspan="7" style="text-align:center;color:var(--t4);padding:20px">No clients yet</td></tr>'}</tbody></table>
</div></div>`;
}


// ══════════════════════════════════════════════════════════════════
// CREATOR ONBOARDING SYSTEM
// ══════════════════════════════════════════════════════════════════

const CREATOR_SKILLS = [
  'Video Production','Photography','Motion Graphics','3D Modelling',
  'Animation','Copywriting','Social Media','Brand Design',
  'Audio Production','Post Production','AI Generation','Illustration'
];
const CREATOR_TOOLS = [
  'Premiere Pro','After Effects','DaVinci Resolve','Final Cut Pro',
  'Blender','Cinema 4D','Figma','Photoshop','Lightroom',
  'Midjourney','Runway','fal.ai','ElevenLabs'
];

// ── Credential Modal (shown after admin creates a creator) ────────
function showCreatorCredentialsModal(u, username, pw){
  const name = u?.name || username || 'Creator';
  const user = u?.id ? DB.getUser(u.id) : null;
  const finalPw = pw || user?.password || 'temp123';
  const finalUser = username || u?.username || name.toLowerCase().replace(/\s+/g,'.');
  const loginUrl = window.location.origin;
  const credText = `Your CinexAI Creator account is ready!\n\nLogin URL: ${loginUrl}\nUsername: ${finalUser}\nPassword: ${finalPw}\n\nYou'll be prompted to set a new password on first login.\nKeep this message safe — your admin won't be able to resend it.`;
  openModal(`<div class="modal-title">🎉 Creator Account Created</div>
<div style="background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:10px;padding:16px;margin-bottom:16px">
  <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
    <div style="width:36px;height:36px;border-radius:50%;background:rgba(16,185,129,0.15);display:flex;align-items:center;justify-content:center;font-size:16px">✦</div>
    <div><div style="font-size:13px;font-weight:700;color:#F0F0FF">${esc(name)}</div>
    <div style="font-size:10px;color:#6B6B8A">Creator account ready to share</div></div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
    <div style="background:rgba(255,255,255,0.04);border-radius:8px;padding:10px">
      <div style="font-size:9px;color:#6B6B8A;text-transform:uppercase;font-weight:700;margin-bottom:4px">Username</div>
      <div style="font-size:12px;font-weight:700;color:#06B6D4;font-family:monospace">${esc(finalUser)}</div>
    </div>
    <div style="background:rgba(255,255,255,0.04);border-radius:8px;padding:10px">
      <div style="font-size:9px;color:#6B6B8A;text-transform:uppercase;font-weight:700;margin-bottom:4px">Temp Password</div>
      <div style="font-size:12px;font-weight:700;color:#FF6B35;font-family:monospace">${esc(finalPw)}</div>
    </div>
  </div>
  <div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:10px;font-size:10px;color:#C8C8E0;font-family:monospace;line-height:1.7;white-space:pre-wrap;margin-bottom:10px">${esc(credText)}</div>
  <div style="display:flex;gap:8px">
    <button onclick="navigator.clipboard.writeText(${JSON.stringify(credText)}).then(()=>toast('Credentials copied!','ok'))" 
      class="btn btn-gold btn-sm" style="flex:1;justify-content:center">📋 Copy Credentials</button>
    <button onclick="navigator.clipboard.writeText('${loginUrl}')" 
      class="btn btn-ghost btn-sm">🔗 Copy Link</button>
  </div>
</div>
<div style="font-size:9px;color:#6B6B8A;background:rgba(245,158,11,0.06);border-radius:6px;padding:8px">
  ⚠️ Share these credentials securely — via WhatsApp, email, or in person. The creator will be prompted to set their own password on first login.
</div>
<div class="btn-row" style="margin-top:12px">
  <button class="btn btn-ghost" onclick="closeModal()">Done</button>
</div>`);
}

// ── Onboarding Checklist Widget (shown on creator dashboard until complete) ──
function creatorOnboardChecklist(u){
  if(!u||u.onboarded)return '';
  const steps = [
    {id:'pw', label:'Change your password', done: u.password_changed===true, action:"showCreatorOnboarding(1)"},
    {id:'profile', label:'Add your bio & photo', done: !!(u.bio&&u.bio.length>5), action:"showCreatorOnboarding(2)"},
    {id:'skills', label:'Select your skills', done: !!(u.skills&&u.skills.length>0), action:"showCreatorOnboarding(3)"},
    {id:'tools', label:'Choose your tools', done: !!(u.tools&&u.tools.length>0), action:"showCreatorOnboarding(4)"},
  ];
  const done = steps.filter(s=>s.done).length;
  const pct = Math.round((done/steps.length)*100);
  if(done===steps.length){
    // Auto-mark onboarded
    const usr=DB.getUser(S.session.userId);
    if(usr){usr.onboarded=true;usr.firstLogin=false;DB.saveUser(usr);}
    return '';
  }
  return`<div style="background:linear-gradient(135deg,rgba(255,107,53,0.08),rgba(139,92,246,0.06));
    border:1px solid rgba(255,107,53,0.2);border-radius:14px;padding:20px;margin-bottom:20px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:8px">
      <div>
        <div style="font-size:13px;font-weight:700;color:#F0F0FF">✦ Complete your profile</div>
        <div style="font-size:10px;color:#6B6B8A;margin-top:2px">${done}/${steps.length} steps done</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <div style="width:80px;height:4px;background:rgba(255,255,255,0.08);border-radius:2px;overflow:hidden">
          <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,#FF6B35,#8B5CF6);border-radius:2px;transition:width 0.4s"></div>
        </div>
        <span style="font-size:10px;font-weight:700;color:#FF6B35">${pct}%</span>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px">
      ${steps.map(s=>`<button onclick="${s.action}" style="display:flex;align-items:center;gap:8px;padding:10px 12px;
        border-radius:8px;border:1px solid ${s.done?'rgba(16,185,129,0.3)':'rgba(255,255,255,0.08)'};
        background:${s.done?'rgba(16,185,129,0.08)':'rgba(255,255,255,0.02)'};
        cursor:${s.done?'default':'pointer'};text-align:left;transition:all 0.15s"
        ${s.done?'disabled':''}>
        <div style="width:18px;height:18px;border-radius:50%;
          background:${s.done?'#10B981':'transparent'};
          border:2px solid ${s.done?'#10B981':'rgba(255,255,255,0.2)'};
          display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:10px">
          ${s.done?'✓':''}
        </div>
        <span style="font-size:11px;font-weight:${s.done?'400':'600'};color:${s.done?'#6B6B8A':'#C8C8E0'}">${s.label}</span>
      </button>`).join('')}
    </div>
  </div>`;
}

// ── Main Onboarding Wizard Modal ──────────────────────────────────
function showCreatorOnboarding(startStep){
  S._obStep = startStep||0;
  renderOnboardingStep();
}

function renderOnboardingStep(){
  const step = S._obStep||0;
  const u = DB.getUser(S.session.userId);
  if(!u)return;

  const steps = ['Welcome','Password','Profile','Skills & Tools','You\'re Ready'];
  const stepBar = `<div style="display:flex;gap:4px;margin-bottom:20px">
    ${steps.map((s,i)=>`<div style="flex:1;text-align:center">
      <div style="height:3px;border-radius:2px;background:${i<=step?'linear-gradient(90deg,#FF6B35,#8B5CF6)':'rgba(255,255,255,0.08)'};margin-bottom:5px;transition:all 0.3s"></div>
      <div style="font-size:8px;color:${i===step?'#FF6B35':i<step?'#10B981':'#3a3a55'};font-weight:${i===step?'700':'400'}">${s}</div>
    </div>`).join('')}
  </div>`;

  let body = '';

  if(step===0){
    body = `<div style="text-align:center;padding:10px 0 20px">
      <div style="font-size:40px;margin-bottom:12px">🎬</div>
      <div style="font-size:20px;font-weight:800;color:#F0F0FF;margin-bottom:8px">Welcome to CinexAI, ${esc(u.name.split(' ')[0])}!</div>
      <div style="font-size:13px;color:#6B6B8A;line-height:1.6;max-width:360px;margin:0 auto">
        You've been added as a Creator. Let's take 2 minutes to set up your profile so clients and your PM know exactly who they're working with.
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:20px;text-align:left">
        ${[['🔐','Secure Password','Your own credentials, your privacy'],
           ['👤','Your Profile','Bio, photo, specialisations'],
           ['🛠','Your Tools','So your PM knows your stack']].map(([ico,t,d])=>`
          <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:12px">
            <div style="font-size:18px;margin-bottom:6px">${ico}</div>
            <div style="font-size:11px;font-weight:700;color:#C8C8E0;margin-bottom:3px">${t}</div>
            <div style="font-size:9px;color:#6B6B8A">${d}</div>
          </div>`).join('')}
      </div>
    </div>
    <button onclick="S._obStep=1;renderOnboardingStep()" 
      style="width:100%;padding:13px;border-radius:10px;border:none;
      background:linear-gradient(135deg,#FF6B35,#8B5CF6);color:#fff;font-size:14px;font-weight:700;cursor:pointer">
      Let's Get Started →
    </button>`;
  }

  else if(step===1){
    body = `<div style="margin-bottom:6px">
      <div style="font-size:16px;font-weight:700;color:#F0F0FF;margin-bottom:4px">🔐 Set your password</div>
      <div style="font-size:11px;color:#6B6B8A;margin-bottom:16px">Choose something strong that you'll remember. You'll use this every time you log in.</div>
      <div class="fg" style="margin-bottom:10px">
        <label>New Password</label>
        <input type="password" id="ob-pw1" placeholder="Min 8 characters" 
          style="background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.1)"
          oninput="document.getElementById('ob-pw-strength').textContent=obPwStrength(this.value)"/>
        <div id="ob-pw-strength" style="font-size:9px;margin-top:4px;color:#6B6B8A"></div>
      </div>
      <div class="fg" style="margin-bottom:16px">
        <label>Confirm Password</label>
        <input type="password" id="ob-pw2" placeholder="Repeat your new password"
          style="background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.1)"/>
      </div>
    </div>
    <div style="display:flex;gap:8px">
      <button onclick="S._obStep=0;renderOnboardingStep()" class="btn btn-ghost" style="padding:11px 20px">← Back</button>
      <button onclick="obSavePassword()" 
        style="flex:1;padding:12px;border-radius:10px;border:none;
        background:linear-gradient(135deg,#FF6B35,#8B5CF6);color:#fff;font-size:13px;font-weight:700;cursor:pointer">
        Save Password & Continue →
      </button>
    </div>`;
  }

  else if(step===2){
    body = `<div>
      <div style="font-size:16px;font-weight:700;color:#F0F0FF;margin-bottom:4px">👤 Your profile</div>
      <div style="font-size:11px;color:#6B6B8A;margin-bottom:16px">Clients and your AI PM use this to understand your working style.</div>
      <div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:14px">
        <div onclick="document.getElementById('ob-photo').click()" id="ob-photo-preview"
          style="width:56px;height:56px;border-radius:50%;background:rgba(255,107,53,0.1);
          border:2px dashed rgba(255,107,53,0.3);display:flex;align-items:center;justify-content:center;
          font-size:22px;cursor:pointer;flex-shrink:0;overflow:hidden">
          ${u.photoUrl?`<img src="${esc(u.photoUrl)}" style="width:100%;height:100%;object-fit:cover">`:'📷'}
        </div>
        <div style="flex:1">
          <div style="font-size:10px;font-weight:700;color:#C8C8E0;margin-bottom:4px">Profile Photo</div>
          <div style="font-size:9px;color:#6B6B8A;margin-bottom:6px">Shown on project cards and your PM's view</div>
          <button onclick="document.getElementById('ob-photo').click()" 
            class="btn btn-ghost btn-sm" style="font-size:9px">Upload Photo</button>
        </div>
      </div>
      <input type="file" id="ob-photo" accept="image/*" style="display:none" onchange="obLoadPhoto(this)">
      <div class="fg" style="margin-bottom:10px">
        <label>Bio <span style="font-size:9px;color:#6B6B8A;font-weight:400">— 1-2 sentences about your work</span></label>
        <textarea id="ob-bio" rows="3" placeholder="e.g. I'm a cinematographer and editor specialising in brand films and social content. Based in Mumbai."
          style="width:100%;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:8px;
          color:#C8C8E0;padding:10px;font-size:11px;resize:none;box-sizing:border-box;font-family:inherit">${u.bio||''}</textarea>
      </div>
      <div class="fg" style="margin-bottom:16px">
        <label>Phone / WhatsApp</label>
        <input type="text" id="ob-phone" value="${u.phone||''}" placeholder="+91 98765 43210"
          style="background:rgba(255,255,255,0.03);border-color:rgba(255,255,255,0.08)"/>
      </div>
    </div>
    <div style="display:flex;gap:8px">
      <button onclick="S._obStep=1;renderOnboardingStep()" class="btn btn-ghost" style="padding:11px 20px">← Back</button>
      <button onclick="obSaveProfile()" 
        style="flex:1;padding:12px;border-radius:10px;border:none;
        background:linear-gradient(135deg,#FF6B35,#8B5CF6);color:#fff;font-size:13px;font-weight:700;cursor:pointer">
        Save & Continue →
      </button>
    </div>`;
  }

  else if(step===3){
    const selSkills = u.skills||[];
    const selTools = u.tools||[];
    body = `<div>
      <div style="font-size:16px;font-weight:700;color:#F0F0FF;margin-bottom:4px">🛠 Skills & Tools</div>
      <div style="font-size:11px;color:#6B6B8A;margin-bottom:14px">Your PM uses this to match you with the right projects.</div>
      <label style="font-size:10px;font-weight:700;color:#6B6B8A;letter-spacing:0.06em;text-transform:uppercase;display:block;margin-bottom:8px">Skills</label>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px" id="ob-skills-wrap">
        ${CREATOR_SKILLS.map(s=>`<button onclick="obToggleTag(this,'ob-skills-wrap')"
          data-val="${s}"
          style="font-size:10px;padding:5px 12px;border-radius:16px;cursor:pointer;transition:all 0.15s;
          border:1px solid ${selSkills.includes(s)?'#FF6B35':'rgba(255,255,255,0.1)'};
          background:${selSkills.includes(s)?'rgba(255,107,53,0.15)':'rgba(255,255,255,0.02)'};
          color:${selSkills.includes(s)?'#FF6B35':'#6B6B8A'}">${s}</button>`).join('')}
      </div>
      <label style="font-size:10px;font-weight:700;color:#6B6B8A;letter-spacing:0.06em;text-transform:uppercase;display:block;margin-bottom:8px">Tools</label>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px" id="ob-tools-wrap">
        ${CREATOR_TOOLS.map(t=>`<button onclick="obToggleTag(this,'ob-tools-wrap')"
          data-val="${t}"
          style="font-size:10px;padding:5px 12px;border-radius:16px;cursor:pointer;transition:all 0.15s;
          border:1px solid ${selTools.includes(t)?'#8B5CF6':'rgba(255,255,255,0.1)'};
          background:${selTools.includes(t)?'rgba(139,92,246,0.15)':'rgba(255,255,255,0.02)'};
          color:${selTools.includes(t)?'#8B5CF6':'#6B6B8A'}">${t}</button>`).join('')}
      </div>
      <div class="fg" style="margin-bottom:16px">
        <label>Availability</label>
        <select id="ob-avail" style="background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.08)">
          <option value="full-time" ${u.availability==='full-time'?'selected':''}>Full-time available</option>
          <option value="part-time" ${u.availability==='part-time'?'selected':''}>Part-time / freelance</option>
          <option value="project-basis" ${u.availability==='project-basis'?'selected':''}>Project basis only</option>
          <option value="on-leave" ${u.availability==='on-leave'?'selected':''}>Currently on leave</option>
        </select>
      </div>
    </div>
    <div style="display:flex;gap:8px">
      <button onclick="S._obStep=2;renderOnboardingStep()" class="btn btn-ghost" style="padding:11px 20px">← Back</button>
      <button onclick="obSaveSkills()" 
        style="flex:1;padding:12px;border-radius:10px;border:none;
        background:linear-gradient(135deg,#FF6B35,#8B5CF6);color:#fff;font-size:13px;font-weight:700;cursor:pointer">
        Save & Continue →
      </button>
    </div>`;
  }

  else if(step===4){
    const u2 = DB.getUser(S.session.userId);
    body = `<div style="text-align:center;padding:10px 0 20px">
      <div style="font-size:48px;margin-bottom:12px">🎉</div>
      <div style="font-size:20px;font-weight:800;color:#F0F0FF;margin-bottom:8px">You're all set, ${esc((u2?.name||u.name).split(' ')[0])}!</div>
      <div style="font-size:12px;color:#6B6B8A;line-height:1.6;margin-bottom:20px">
        Your profile is complete. Your AI PM now has everything it needs to guide you through projects.
      </div>
      <div style="background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:10px;padding:16px;text-align:left;margin-bottom:20px">
        <div style="font-size:11px;font-weight:700;color:#10B981;margin-bottom:10px">✓ Profile Complete</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:10px;color:#C8C8E0">
          <div>👤 Bio added</div>
          <div>🔐 Password secured</div>
          <div>🛠 ${(u2?.skills||[]).length} skills selected</div>
          <div>⚡ ${(u2?.tools||[]).length} tools listed</div>
        </div>
      </div>
      <div style="font-size:11px;color:#6B6B8A;margin-bottom:16px">
        Your AI PM will brief you on your first project. Check your dashboard for any pending tasks.
      </div>
    </div>
    <button onclick="obComplete()" 
      style="width:100%;padding:13px;border-radius:10px;border:none;
      background:linear-gradient(135deg,#10B981,#06B6D4);color:#fff;font-size:14px;font-weight:700;cursor:pointer">
      Go to Dashboard →
    </button>`;
  }

  openModal(`<div style="max-width:480px">
    <div style="font-size:11px;font-weight:700;color:#FF6B35;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:4px">Getting Started</div>
    ${stepBar}
    ${body}
  </div>`, true);
}

// ── Onboarding helper functions ───────────────────────────────────
function obPwStrength(pw){
  if(!pw)return '';
  if(pw.length<6)return '⚠️ Too short';
  if(pw.length<8)return '🔶 Weak';
  const has = [/[A-Z]/, /[0-9]/, /[^A-Za-z0-9]/].filter(r=>r.test(pw)).length;
  if(has===0)return '🔶 Add numbers or symbols';
  if(has===1)return '🟡 Fair';
  if(has===2)return '🟢 Good';
  return '✅ Strong';
}

function obLoadPhoto(input){
  const f=input.files[0];if(!f)return;
  const r=new FileReader();
  r.onload=e=>{
    const prev=document.getElementById('ob-photo-preview');
    if(prev)prev.innerHTML=`<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover">`;
    window._obPhotoData=e.target.result;
  };
  r.readAsDataURL(f);
}

function obToggleTag(btn, wrapId){
  const isOn = btn.style.color !== 'rgb(107, 107, 138)' && btn.style.background !== 'rgba(255, 255, 255, 0.02)';
  const accent = wrapId.includes('skills') ? '#FF6B35' : '#8B5CF6';
  const accentBg = wrapId.includes('skills') ? 'rgba(255,107,53,0.15)' : 'rgba(139,92,246,0.15)';
  if(isOn){
    btn.style.color='#6B6B8A';btn.style.background='rgba(255,255,255,0.02)';btn.style.borderColor='rgba(255,255,255,0.1)';
  } else {
    btn.style.color=accent;btn.style.background=accentBg;btn.style.borderColor=accent;
  }
}

function _obGetSelected(wrapId){
  return [...(document.getElementById(wrapId)?.querySelectorAll('button')||[])]
    .filter(b=>b.style.color!=='rgb(107, 107, 138)'&&b.style.background!=='rgba(255, 255, 255, 0.02)')
    .map(b=>b.dataset.val).filter(Boolean);
}

function obSavePassword(){
  const pw1=document.getElementById('ob-pw1')?.value;
  const pw2=document.getElementById('ob-pw2')?.value;
  if(!pw1||pw1.length<6){toast('Password must be at least 6 characters','err');return;}
  if(pw1!==pw2){toast('Passwords do not match','err');return;}
  const u=DB.getUser(S.session.userId);if(!u)return;
  u.password=pw1;u.password_changed=true;u.firstLogin=false;
  DB.saveUser(u);
  toast('Password saved','ok');
  S._obStep=2;renderOnboardingStep();
}

function obSaveProfile(){
  const bio=document.getElementById('ob-bio')?.value?.trim()||'';
  const phone=document.getElementById('ob-phone')?.value?.trim()||'';
  const u=DB.getUser(S.session.userId);if(!u)return;
  u.bio=bio;u.phone=phone;
  if(window._obPhotoData){u.photoUrl=window._obPhotoData;window._obPhotoData=null;}
  DB.saveUser(u);toast('Profile saved','ok');
  S._obStep=3;renderOnboardingStep();
}

function obSaveSkills(){
  const skills=_obGetSelected('ob-skills-wrap');
  const tools=_obGetSelected('ob-tools-wrap');
  const avail=document.getElementById('ob-avail')?.value||'full-time';
  const u=DB.getUser(S.session.userId);if(!u)return;
  u.skills=skills;u.tools=tools;u.availability=avail;
  DB.saveUser(u);toast('Skills saved','ok');
  S._obStep=4;renderOnboardingStep();
}

function obComplete(){
  const u=DB.getUser(S.session.userId);if(!u)return;
  u.onboarded=true;u.firstLogin=false;
  DB.saveUser(u);closeModal();render();
  toast('Welcome to CinexAI! 🎬','ok');
}

function toggleSpecTag(skill, btn){
  const isOn = btn.style.background === 'rgba(255, 107, 53, 0.15)';
  if(isOn){
    btn.style.background='transparent';btn.style.color='var(--t4)';btn.style.borderColor='rgba(255,255,255,0.12)';
  } else {
    btn.style.background='rgba(255,107,53,0.15)';btn.style.color='#FF6B35';btn.style.borderColor='#FF6B3566';
  }
}

// ══ END CREATOR ONBOARDING ════════════════════════════════════════

function adminCreators(){
  const emps=DB.getUsers().filter(u=>u.role==='creator');
  const ps=DB.getProjects();
  const typeColors={commercial_ad:'#FF6B35',short_film:'#8B5CF6',youtube_explainer:'#EF4444',podcast:'#3B82F6',product_video:'#06B6D4',testimonial:'#10B981',influencer_ugc:'#EC4899',music_video:'#F59E0B',design:'#06B6D4'};
  const maxProjects=5; // capacity bar max
  return`<div class="page">
<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:16px">
<div><div class="page-title">Creators</div><div class="page-sub">${emps.length} registered</div></div>
<button class="btn btn-gold" onclick="showRegModal('creator')">+ Add Creator</button>
</div>
${emps.length?`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:12px">
${emps.map(e=>{
  const activeProjects=ps.filter(p=>p.assignedCreatorId===e.id&&p.workflowStatus!=='complete');
  const completedProjects=ps.filter(p=>p.assignedCreatorId===e.id&&p.workflowStatus==='complete');
  const assignedClients=(e.assignedClients||[]).map(cid=>DB.getUser(cid)).filter(Boolean);
  const workload=activeProjects.length;
  const pct=Math.min(100,Math.round((workload/maxProjects)*100));
  const wColor=pct>=80?'var(--red)':pct>=50?'var(--gold)':'var(--green)';
  // Detect specialities from project types
  const specialities=[...new Set(ps.filter(p=>p.assignedCreatorId===e.id).map(p=>p.type).filter(Boolean))];
  return`<div style="background:var(--glass-bg);backdrop-filter:var(--glass-blur);border:1px solid var(--glass-border);border-radius:var(--r2);overflow:hidden;transition:border-color .2s,transform .2s" onmouseover="this.style.borderColor='rgba(255,255,255,0.15)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='var(--glass-border)';this.style.transform=''">
<div style="padding:16px 18px;display:flex;align-items:center;gap:12px;border-bottom:1px solid var(--b1)">
  <div class="uav uav-creator" style="width:40px;height:40px;font-size:14px">${(e.name[0]||'?').toUpperCase()}</div>
  <div style="flex:1;min-width:0">
    <div style="font-size:14px;font-weight:700;color:var(--t1)">${esc(e.name)}</div>
    <div style="font-size:10px;color:var(--t4)">${esc(e.username||e.name)} · ${esc(e.email||'')}</div>
  </div>
  <span class="badge badge-${e.active!==false?'green':'red'}">${e.active!==false?'Active':'Inactive'}</span>
  ${e.firstLogin?'<span style="font-size:8px;background:rgba(245,158,11,0.15);color:#F59E0B;border:1px solid rgba(245,158,11,0.3);border-radius:4px;padding:2px 7px;font-weight:700;margin-left:4px">⏳ Pending Setup</span>':''}
</div>
<div style="padding:14px 18px">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
    <span style="font-size:9px;color:var(--t4);text-transform:uppercase;font-weight:700;letter-spacing:.06em">Workload</span>
    <span style="font-size:10px;color:${wColor};font-weight:700">${workload}/${maxProjects} active</span>
  </div>
  <div style="height:4px;background:var(--bg);border-radius:2px;overflow:hidden;margin-bottom:12px">
    <div style="height:100%;width:${pct}%;background:${wColor};border-radius:2px;transition:width .3s"></div>
  </div>
  ${specialities.length?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:10px">${specialities.slice(0,4).map(t=>`<span style="font-size:8px;padding:2px 7px;border-radius:8px;background:${(typeColors[t]||'var(--t4)')}18;color:${typeColors[t]||'var(--t4)'};border:1px solid ${(typeColors[t]||'var(--t4)')}33;font-weight:600">${MT[t]?.label||t}</span>`).join('')}</div>`:''}
  <div style="display:flex;gap:8px;font-size:10px;color:var(--t3);margin-bottom:12px">
    <span>${assignedClients.length} client${assignedClients.length!==1?'s':''}</span>
    <span>·</span>
    <span>${completedProjects.length} completed</span>
  </div>
  <div style="display:flex;gap:4px">
    ${e.firstLogin?`<button class="btn btn-outline btn-sm" style="width:100%;justify-content:center;margin-bottom:6px;color:#F59E0B;border-color:#F59E0B44" onclick="showCreatorCredentialsModal(${JSON.stringify({id:e.id,name:e.name,username:e.username||e.name.toLowerCase().replace(/\\s+/g,'.')}),e.username||e.name.toLowerCase().replace(/\s+/g,'.'),e.password)">📋 Copy Credentials</button>`:''}
<div style="display:flex;gap:4px">
<button class="btn btn-gold btn-sm" onclick="showAssignClientsModal('${e.id}')" style="flex:1;justify-content:center">Assign Clients</button>
    <button class="btn btn-ghost btn-sm" onclick="showEditUserModal('${e.id}')">Edit</button>
    <button class="btn btn-${e.active!==false?'red':'green'} btn-sm" onclick="toggleActive('${e.id}')">${e.active!==false?'Off':'On'}</button>
</div>
  </div>
</div></div>`;}).join('')}
</div>`:`<div style="text-align:center;padding:48px"><div style="font-size:28px;margin-bottom:12px;opacity:0.15">✦</div><div style="font-size:12px;color:var(--t3);margin-bottom:4px">No creators yet</div><div style="font-size:10px;color:var(--t4)">Add your first creator to start assigning projects</div></div>`}
</div>`;
}

const INTEGRATION_PRESETS=[
  {cat:'Image',name:'FLUX 1.1 Ultra (fal.ai)',url:'https://queue.fal.run/fal-ai/flux-pro/v1.1-ultra',keyHint:'fal-key-...'},
  {cat:'Image',name:'FLUX Dev (fal.ai)',url:'https://queue.fal.run/fal-ai/flux/dev',keyHint:'fal-key-...'},
  {cat:'Image',name:'Recraft V3 (fal.ai)',url:'https://queue.fal.run/fal-ai/recraft-v3',keyHint:'fal-key-...'},
  {cat:'Image',name:'Ideogram V2 (fal.ai)',url:'https://queue.fal.run/fal-ai/ideogram/v2',keyHint:'fal-key-...'},
  {cat:'Image',name:'ComfyUI (fal.ai)',url:'https://queue.fal.run/fal-ai/comfyui',keyHint:'fal-key-...'},
  {cat:'Video',name:'Google Veo 3 (fal.ai)',url:'https://queue.fal.run/fal-ai/veo3',keyHint:'fal-key-...'},
  {cat:'Video',name:'Kling 2.1 Master (fal.ai)',url:'https://queue.fal.run/fal-ai/kling-video/v2.1/master/image-to-video',keyHint:'fal-key-...'},
  {cat:'Video',name:'Minimax Hailuo (fal.ai)',url:'https://queue.fal.run/fal-ai/minimax/video-01-live',keyHint:'fal-key-...'},
  {cat:'Video',name:'Runway Gen-4 (fal.ai)',url:'https://queue.fal.run/fal-ai/runway-gen4/image-to-video',keyHint:'fal-key-...'},
  {cat:'Video',name:'Wan 2.1 (fal.ai)',url:'https://queue.fal.run/fal-ai/wan-2.1/image-to-video',keyHint:'fal-key-...'},
  {cat:'Video',name:'Luma Dream Machine',url:'https://api.lumalabs.ai/dream-machine/v1',keyHint:'luma-key-...'},
  {cat:'Video',name:'Nano Banana',url:'https://api.nanobanana.ai/v1',keyHint:'nb-key-...'},
  {cat:'Audio',name:'ElevenLabs TTS',url:'https://api.elevenlabs.io/v1/text-to-speech',keyHint:'el-api-key...'},
  {cat:'Audio',name:'ElevenLabs SFX',url:'https://api.elevenlabs.io/v1/sound-generation',keyHint:'el-api-key...'},
  {cat:'AI',name:'Anthropic Claude',url:'https://api.anthropic.com/v1/messages',keyHint:'sk-ant-...'},
  {cat:'AI',name:'OpenAI GPT-4o',url:'https://api.openai.com/v1/chat/completions',keyHint:'sk-...'},
  {cat:'AI',name:'Gemini 1.5 Pro',url:'https://generativelanguage.googleapis.com/v1beta',keyHint:'AIza...'},
  {cat:'Automation',name:'N8N Webhook',url:'https://your-n8n-instance.com/webhook',keyHint:'basic-auth-or-api-key'},
  {cat:'Automation',name:'Make (Integromat)',url:'https://hook.eu1.make.com/',keyHint:'webhook-url'},
  {cat:'Automation',name:'Zapier Webhook',url:'https://hooks.zapier.com/hooks/catch/',keyHint:'webhook-url'},
  {cat:'Render',name:'ComfyUI (self-hosted)',url:'http://localhost:8188/api/prompt',keyHint:'optional'},
  {cat:'3D',name:'Stable Diffusion (API)',url:'https://stablediffusionapi.com/api/v3',keyHint:'sd-key-...'},
];

function adminIntegrations(){
  const intgs=DB.getIntegrations();
  const cats=[...new Set(INTEGRATION_PRESETS.map(p=>p.cat))];
  const selCat=S.intCat||'all';
  return`<div class="page">
<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:16px">
<div><div class="page-title">API Integrations</div><div class="page-sub">Manage all external APIs and services — admin only. Add any platform to the Studio pipeline.</div></div>
<button class="btn btn-gold" onclick="showAddIntegrationModal()">+ Add Custom Integration</button>
</div>
<div class="ib ib-blue"><strong>How it works:</strong> Activate integrations below to make them available in the Studio pipeline. Each integration stores its own API key. Creators can use activated integrations but never see the keys.</div>
${intgs.length?`<div class="section-lbl">Active Integrations (${intgs.length})</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:9px;margin-bottom:16px">
${intgs.map(intg=>`<div style="background:var(--bg2);border:1px solid ${intg.active?'#4ac04a33':'var(--b1)'};border-radius:8px;padding:12px">
<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:6px">
<div><div style="font-size:11px;font-weight:700;color:#fff">${esc(intg.name)}</div>
<span style="font-size:8px;background:var(--bg4);color:var(--t4);padding:1px 5px;border-radius:3px">${esc(intg.category||'Custom')}</span></div>
<span class="badge badge-${intg.active?'green':'gray'}">${intg.active?'Active':'Inactive'}</span></div>
<div style="font-size:9px;color:var(--t4);margin-bottom:6px;word-break:break-all">${esc(intg.url||'')}</div>
${intg.notes?`<div style="font-size:9px;color:var(--t3);margin-bottom:6px">${esc(intg.notes)}</div>`:''}
<div style="display:flex;gap:4px;flex-wrap:wrap">
<button class="btn btn-ghost btn-sm" onclick="showEditIntegrationModal('${intg.id}')">Edit</button>
<button class="btn btn-${intg.active?'red':'green'} btn-sm" onclick="toggleIntegration('${intg.id}')">${intg.active?'Deactivate':'Activate'}</button>
<button class="btn btn-red btn-sm" onclick="if(confirm('Remove?')){DB.deleteIntegration('${intg.id}');render()}">Remove</button>
</div></div>`).join('')}
</div>`:''}
<div class="section-lbl">Add from Presets</div>
<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px">
<div style="padding:3px 9px;border-radius:10px;font-size:9px;font-weight:700;cursor:pointer;background:${selCat==='all'?'#1a0f1e':'var(--bg3)'};color:${selCat==='all'?'var(--gold)':'var(--t4)'};border:1px solid ${selCat==='all'?'rgba(255,107,53,0.25)':'var(--b1)'}" onclick="S.intCat='all';render()">All</div>
${cats.map(cat=>`<div style="padding:3px 9px;border-radius:10px;font-size:9px;font-weight:700;cursor:pointer;background:${selCat===cat?'#1a0f1e':'var(--bg3)'};color:${selCat===cat?'var(--gold)':'var(--t4)'};border:1px solid ${selCat===cat?'rgba(255,107,53,0.25)':'var(--b1)'}" onclick="S.intCat='${cat}';render()">${cat}</div>`).join('')}
</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:8px">
${INTEGRATION_PRESETS.filter(p=>selCat==='all'||p.cat===selCat).map(preset=>{const already=intgs.find(x=>x.name===preset.name);return`<div style="background:var(--bg2);border:1px solid ${already?'#4ac04a22':'var(--b1)'};border-radius:7px;padding:10px">
<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:5px">
<div><div style="font-size:10px;font-weight:700;color:${already?'var(--green)':'#fff'}">${esc(preset.name)}</div>
<span style="font-size:8px;background:var(--bg4);color:var(--t4);padding:1px 5px;border-radius:3px">${preset.cat}</span></div>
${already?`<span class="badge badge-green">Added</span>`:``}</div>
<div style="font-size:8px;color:var(--t4);margin-bottom:7px;word-break:break-all">${esc(preset.url)}</div>
${already?'':`<button class="btn btn-outline btn-sm" style="width:100%" onclick="addPresetIntegration(${JSON.stringify(preset).replace(/"/g,'&quot;')})">+ Add to Studio</button>`}
</div>`;}).join('')}
</div></div>`;
}

function addPresetIntegration(preset){
  const intg={id:gid('i'),name:preset.name,category:preset.cat,url:preset.url,key:'',notes:'',active:false,keyHint:preset.keyHint||'',createdAt:new Date().toISOString()};
  showEditIntegrationModal(null,intg);
}
function showAddIntegrationModal(intg){showEditIntegrationModal(null,{id:gid('i'),name:'',category:'Custom',url:'',key:'',notes:'',active:false,keyHint:'',createdAt:new Date().toISOString()});}
function showEditIntegrationModal(id,preset){
  const intg=id?DB.getIntegrations().find(x=>x.id===id)||(preset||{}):preset||{};
  const cats=['Image','Video','Audio','AI','Automation','Render','3D','Custom'];
  openModal(`<div class="modal-title">${id?'Edit':'Add'} Integration${intg.name?' — '+intg.name:''}</div>
<div class="fg"><label>Name</label><input type="text" id="intg-name" value="${esc(intg.name||'')}" placeholder="e.g. Luma Dream Machine"/></div>
<div class="fg"><label>Category</label><select id="intg-cat">${cats.map(c=>`<option${(intg.category||'Custom')===c?' selected':''}>${c}</option>`).join('')}</select></div>
<div class="fg"><label>API Base URL</label><input type="text" id="intg-url" value="${esc(intg.url||'')}" placeholder="https://api.example.com/v1"/></div>
<div class="fg"><label>API Key</label><input type="text" id="intg-key" value="${esc(intg.key||'')}" placeholder="${esc(intg.keyHint||'API key...')}"/></div>
<div class="fg"><label>Notes (optional)</label><textarea id="intg-notes" rows="2">${esc(intg.notes||'')}</textarea></div>
<div style="display:flex;align-items:center;gap:6px;margin-bottom:12px"><button class="toggle${intg.active?' on':''}" id="intg-active-tog" onclick="this.classList.toggle('on')"></button><span style="font-size:10px;color:var(--t3)">Active (available in Studio pipeline)</span></div>
<div class="btn-row"><button class="btn btn-gold" onclick="saveIntegration('${intg.id||gid('i')}','${id||''}')">Save Integration</button><button class="btn btn-ghost" onclick="closeModal()">Cancel</button></div>`);
}
function saveIntegration(newId,existingId){
  const id=existingId||newId;
  const existing=DB.getIntegrations().find(x=>x.id===id)||{};
  const intg={...existing,id,name:document.getElementById('intg-name')?.value.trim()||'',category:document.getElementById('intg-cat')?.value||'Custom',url:document.getElementById('intg-url')?.value.trim()||'',key:document.getElementById('intg-key')?.value.trim()||'',notes:document.getElementById('intg-notes')?.value.trim()||'',active:document.getElementById('intg-active-tog')?.classList.contains('on')||false,createdAt:existing.createdAt||new Date().toISOString()};
  if(!intg.name){toast('Name required','err');return;}
  DB.saveIntegration(intg);closeModal();render();toast('Integration saved!','ok');
}
function toggleIntegration(id){const intg=DB.getIntegrations().find(x=>x.id===id);if(!intg)return;intg.active=!intg.active;DB.saveIntegration(intg);render();toast(intg.active?'Integration activated!':'Deactivated','ok');}

// ══════════════════════════════════════
// COMMENT THREADS
// ══════════════════════════════════════
function sComments(p){
  const uid=S.session?.userId;
  const role=S.session?.role;
  const comments=p.comments||[];
  const now=new Date();

  // Time-ago helper
  function timeAgo(ts){
    const d=now-new Date(ts);
    const min=Math.floor(d/60000);
    if(min<1)return'just now';
    if(min<60)return min+'m ago';
    const hr=Math.floor(min/60);
    if(hr<24)return hr+'h ago';
    const dy=Math.floor(hr/24);
    if(dy<7)return dy+'d ago';
    return new Date(ts).toLocaleDateString();
  }

  // Build threaded structure: top-level + replies
  const topLevel=comments.filter(cm=>!cm.replyTo);
  const repliesFor=id=>comments.filter(cm=>cm.replyTo===id);
  const roleColor={admin:'var(--gold)',creator:'var(--blue)'};
  const avatarBg={admin:'#1a0f1e',creator:'#0a0a18'};

  function renderComment(cm,isReply){
    const isOwn=cm.authorId===uid;
    const canDelete=role==='admin'||isOwn;
    const canEdit=isOwn;
    const replies=repliesFor(cm.id);
    const replyParent=cm.replyTo?comments.find(x=>x.id===cm.replyTo):null;
    return`<div id="cm-${cm.id}" style="margin-bottom:${isReply?'8':'14'}px;${isReply?'margin-left:32px;':''}">
<div style="display:flex;align-items:flex-start;gap:8px">
<div style="width:26px;height:26px;border-radius:50%;background:${avatarBg[cm.role]||'var(--bg4)'};border:1px solid ${roleColor[cm.role]||'var(--b2)'}44;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:${roleColor[cm.role]||'var(--t3)'};flex-shrink:0">${(cm.authorName||'?')[0].toUpperCase()}</div>
<div style="flex:1;min-width:0">
<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:3px">
<span style="font-size:10px;font-weight:700;color:${roleColor[cm.role]||'var(--t2)'}">${esc(cm.authorName||'Unknown')}</span>
<span style="font-size:8px;background:${avatarBg[cm.role]||'var(--bg4)'};color:${roleColor[cm.role]||'var(--t4)'};padding:1px 5px;border-radius:8px;text-transform:uppercase">${cm.role||'?'}</span>
<span style="font-size:8px;color:var(--t4)">${timeAgo(cm.ts)}</span>
${cm.edited?'<span style="font-size:8px;color:var(--t4);font-style:italic">edited</span>':''}
</div>
${replyParent?`<div style="background:var(--bg4);border-left:2px solid var(--b3);border-radius:0 4px 4px 0;padding:4px 8px;margin-bottom:5px;font-size:9px;color:var(--t4);line-height:1.4"><strong style="color:var(--t3)">${esc(replyParent.authorName)}: </strong>${esc(replyParent.text.substring(0,80)+(replyParent.text.length>80?'…':''))}</div>`:''}
<div id="cmtxt-${cm.id}" style="font-size:11px;color:var(--t2);line-height:1.7;white-space:pre-wrap;word-break:break-word">${esc(cm.text)}</div>
<div id="cmedit-${cm.id}" style="display:none;margin-top:5px">
<textarea id="cmta-${cm.id}" rows="2" style="width:100%;background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:5px 8px;border-radius:5px;font-size:11px;font-family:Arial,sans-serif;resize:vertical;line-height:1.5">${esc(cm.text)}</textarea>
<div style="display:flex;gap:5px;margin-top:4px">
<button class="btn btn-gold btn-sm" onclick="saveCommentEdit('${p.id}','${cm.id}')">Save</button>
<button class="btn btn-ghost btn-sm" onclick="cancelCommentEdit('${cm.id}')">Cancel</button>
</div></div>
<div style="display:flex;gap:8px;margin-top:4px;align-items:center">
<button onclick="setReplyTarget('${cm.id}','${esc(cm.authorName)}')" style="background:none;border:none;color:var(--t4);font-size:9px;cursor:pointer;padding:0">↩ Reply</button>
${canEdit?`<button onclick="startEditComment('${cm.id}')" style="background:none;border:none;color:var(--t4);font-size:9px;cursor:pointer;padding:0">Edit</button>`:''}
${canDelete?`<button onclick="deleteComment('${p.id}','${cm.id}')" style="background:none;border:none;color:var(--red)88;font-size:9px;cursor:pointer;padding:0">Delete</button>`:''}
<button onclick="copyCommentLink('${cm.id}')" style="background:none;border:none;color:var(--t4);font-size:9px;cursor:pointer;padding:0">🔗</button>
</div></div></div>
${replies.length?`<div style="margin-top:5px">${replies.map(r=>renderComment(r,true)).join('')}</div>`:''}
</div>`;
  }

  const inputId='cm-new-text';
  const replyState=S.cmReply||null;

  return`<div class="ptitle">Internal Comments</div>
<div class="psub">Private thread between Admin and Creator — not visible to the client.</div>
${comments.length===0?`<div style="background:var(--bg3);border:1px dashed var(--b2);border-radius:8px;padding:30px;text-align:center;margin-bottom:16px"><div style="font-size:18px;color:var(--b3);margin-bottom:8px">💬</div><div style="font-size:11px;color:var(--t4)">No comments yet. Start the conversation below.</div></div>`:`
<div id="cm-list" style="margin-bottom:20px;max-height:520px;overflow-y:auto;padding-right:4px">
${topLevel.map(cm=>renderComment(cm,false)).join('')}
</div>`}
<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:8px;overflow:hidden">
${replyState?`<div style="padding:7px 11px;background:var(--bg3);border-bottom:1px solid var(--b1);display:flex;align-items:center;justify-content:space-between;gap:8px">
<div style="font-size:9px;color:var(--t3)">↩ Replying to <strong style="color:var(--t1)">${esc(replyState.name)}</strong> — "${esc(replyState.preview)}"</div>
<button onclick="S.cmReply=null;render()" style="background:none;border:none;color:var(--t4);font-size:13px;cursor:pointer">✕</button>
</div>`:''}
<div style="padding:10px">
<textarea id="${inputId}" rows="3" placeholder="Write a comment… (Shift+Enter for new line, Enter to send)" style="width:100%;background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:8px 10px;border-radius:6px;font-size:11px;font-family:Arial,sans-serif;resize:vertical;line-height:1.6;margin-bottom:8px" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();submitComment('${p.id}')}"></textarea>
<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:7px">
<div style="display:flex;gap:5px">
<button class="btn btn-gold" onclick="submitComment('${p.id}')">Send</button>
${replyState?`<button class="btn btn-ghost btn-sm" onclick="S.cmReply=null;render()">Cancel Reply</button>`:''}
</div>
<div style="font-size:9px;color:var(--t4)">Enter to send · Shift+Enter for new line</div>
</div></div></div>`;
}

// ── Comment actions ──
function submitComment(pid){
  const ta=document.getElementById('cm-new-text');if(!ta)return;
  const text=ta.value.trim();if(!text){toast('Write something first','err');return;}
  const p=DB.getProject(pid);if(!p)return;
  const uid=S.session?.userId;const u=DB.getUser(uid);if(!u)return;
  const cm={
    id:gid('c'),
    authorId:uid,
    authorName:u.name,
    role:S.session?.role||'unknown',
    text,
    ts:new Date().toISOString(),
    edited:false,
    replyTo:S.cmReply?.id||null,
  };
  if(!p.comments)p.comments=[];
  p.comments.push(cm);
  DB.saveProject(p);
  // Mark as read for self immediately
  if(!u.lastReadComments)u.lastReadComments={};
  u.lastReadComments[pid]=new Date().toISOString();
  DB.saveUser(u);
  // Notify the other party
  const role=S.session?.role;
  if(role==='admin'&&p.assignedCreatorId){
    pushNotif(p.assignedCreatorId,'comment','New comment from Admin',
      p.name+' — '+text.substring(0,60)+(text.length>60?'…':''),pid);
  }else if(role==='creator'){
    pushToRole('admin','comment','New comment from '+u.name,
      p.name+' ('+( p.projectId||'')+') — '+text.substring(0,60)+(text.length>60?'…':''),pid);
  }
  S.cmReply=null;
  ta.value='';
  render();
  // Scroll to bottom of comment list
  setTimeout(()=>{const list=document.getElementById('cm-list');if(list)list.scrollTop=list.scrollHeight;},50);
}

function setReplyTarget(cmId,authorName){
  const p=DB.getProject(S.pid);if(!p)return;
  const cm=(p.comments||[]).find(x=>x.id===cmId);if(!cm)return;
  S.cmReply={id:cmId,name:authorName,preview:cm.text.substring(0,60)+(cm.text.length>60?'…':'')};
  render();
  setTimeout(()=>{const ta=document.getElementById('cm-new-text');if(ta){ta.focus();}},50);
}

function startEditComment(cmId){
  document.getElementById('cmtxt-'+cmId)?.style&&(document.getElementById('cmtxt-'+cmId).style.display='none');
  const ed=document.getElementById('cmedit-'+cmId);if(ed)ed.style.display='block';
  document.getElementById('cmta-'+cmId)?.focus();
}

function cancelCommentEdit(cmId){
  document.getElementById('cmtxt-'+cmId)?.style&&(document.getElementById('cmtxt-'+cmId).style.display='');
  const ed=document.getElementById('cmedit-'+cmId);if(ed)ed.style.display='none';
}

function saveCommentEdit(pid,cmId){
  const ta=document.getElementById('cmta-'+cmId);if(!ta)return;
  const text=ta.value.trim();if(!text){toast('Cannot save empty comment','err');return;}
  const p=DB.getProject(pid);if(!p)return;
  const cm=(p.comments||[]).find(x=>x.id===cmId);if(!cm)return;
  cm.text=text;cm.edited=true;cm.editedAt=new Date().toISOString();
  DB.saveProject(p);render();toast('Comment updated','ok');
}

function deleteComment(pid,cmId){
  if(!confirm('Delete this comment?'))return;
  const p=DB.getProject(pid);if(!p)return;
  // Remove comment and all its replies
  p.comments=(p.comments||[]).filter(cm=>cm.id!==cmId&&cm.replyTo!==cmId);
  DB.saveProject(p);render();toast('Deleted','ok');
}

function copyCommentLink(cmId){
  navigator.clipboard.writeText('#cm-'+cmId).then(()=>toast('Link copied (scroll to #cm-'+cmId+')','ok'));
}

// ══════════════════════════════════════
// TIMELINE — stage config
// ══════════════════════════════════════
const WF_STAGES=[
  {id:'new',label:'Created',color:'#3a3a3a',short:'New'},
  {id:'brief_submitted',label:'Brief',color:'#FF6B35',short:'Brief'},
  {id:'synopsis_review',label:'Synopsis',color:'var(--blue)',short:'Synopsis'},
  {id:'synopsis_locked',label:'Approved',color:'var(--green)',short:'Approved'},
  {id:'storyboard_in_progress',label:'Storyboard',color:'var(--purple)',short:'Board'},
  {id:'storyboard_review',label:'Review',color:'var(--gold)',short:'Review'},
  {id:'complete',label:'Complete',color:'var(--green)',short:'Done'},
];
function stageColor(id){return WF_STAGES.find(s=>s.id===id)?.color||'#555';}
function stageLabel(id){return WF_STAGES.find(s=>s.id===id)?.label||id.replace(/_/g,' ');}
function daysBetween(a,b){return Math.round((new Date(b)-new Date(a))/(1000*60*60*24));}
function daysFrom(d){return daysBetween(d,new Date().toISOString());}
function addDays(d,n){const dt=new Date(d);dt.setDate(dt.getDate()+n);return dt.toISOString().slice(0,10);}

// ── PER-PROJECT TIMELINE (in Studio, stage 99) ──
function sProjectTimeline(p){
  const history=p.stageHistory||[];
  const now=new Date().toISOString();
  const createdAt=p.createdAt||now;
  const deadline=p.deadline;
  const totalDays=daysFrom(createdAt);
  const deadlineDays=deadline?daysBetween(createdAt,deadline):null;
  const overdue=deadline&&new Date(deadline)<new Date();
  const atRisk=deadline&&!overdue&&new Date(deadline)<new Date(Date.now()+7*864e5);

  // Build stage segments from history
  const segments=[];
  const orderedStages=['brief_submitted','synopsis_review','synopsis_locked','storyboard_in_progress','storyboard_review','complete'];
  const histMap={};
  (history||[]).forEach(h=>{if(!histMap[h.stage])histMap[h.stage]=h.enteredAt;});
  if(!histMap['brief_submitted']&&!histMap['new'])histMap['brief_submitted']=createdAt;

  for(let i=0;i<orderedStages.length;i++){
    const stage=orderedStages[i];
    const entered=histMap[stage];
    if(!entered)continue;
    const nextStage=orderedStages[i+1];
    const exited=nextStage&&histMap[nextStage]?histMap[nextStage]:null;
    const isActive=p.workflowStatus===stage;
    const endTime=exited||(isActive?now:null);
    const days=endTime?daysBetween(entered,endTime):0;
    segments.push({stage,entered,exited,isActive,days,color:stageColor(stage),label:stageLabel(stage)});
  }

  // Progress bar calculation
  const stageIdx=orderedStages.indexOf(p.workflowStatus);
  const progress=Math.round(((stageIdx+1)/orderedStages.length)*100);

  return`<div class="ptitle">Project Timeline</div>
<div class="psub">Stage history, days elapsed, and deadline tracking for ${esc(p.name)}.</div>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:18px">
${[
  {l:'Days Active',v:totalDays+'d',c:'var(--gold)'},
  {l:'Current Stage',v:stageLabel(p.workflowStatus||'new'),c:stageColor(p.workflowStatus||'new')},
  {l:'Deadline',v:deadline?new Date(deadline).toLocaleDateString():'Not set',c:overdue?'var(--red)':atRisk?'#FF8A5C':'var(--t3)'},
  {l:'Progress',v:progress+'%',c:'var(--green)'},
].map(s=>`<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:8px;padding:12px;text-align:center">
<div style="font-size:20px;font-weight:700;color:${s.c}">${s.v}</div>
<div style="font-size:9px;color:var(--t4);text-transform:uppercase;margin-top:3px">${s.l}</div></div>`).join('')}
</div>

${overdue?`<div style="background:#100404;border:1px solid var(--red)44;border-radius:7px;padding:10px 13px;margin-bottom:12px;font-size:10px;color:var(--red)">⚠ This project is <strong>${daysFrom(deadline)} days overdue.</strong> Deadline was ${new Date(deadline).toLocaleDateString()}.</div>`:''}
${atRisk&&!overdue?`<div style="background:#120d00;border:1px solid var(--warning)44;border-radius:7px;padding:10px 13px;margin-bottom:12px;font-size:10px;color:#FF8A5C">⚡ Deadline approaching — <strong>${daysBetween(now,deadline)} days remaining.</strong></div>`:''}

<div style="margin-bottom:18px">
<div style="display:flex;justify-content:space-between;font-size:9px;color:var(--t4);margin-bottom:5px">
<span>Progress</span><span>${progress}%</span></div>
<div style="height:6px;background:var(--bg4);border-radius:3px;overflow:hidden">
<div style="height:100%;width:${progress}%;background:linear-gradient(90deg,var(--gold),var(--green));border-radius:3px;transition:width .5s"></div>
</div></div>

<div class="section-lbl">Stage History</div>
<div style="position:relative;padding-left:28px;margin-bottom:20px">
<div style="position:absolute;left:10px;top:8px;bottom:8px;width:2px;background:var(--b2);border-radius:1px"></div>
${segments.length?segments.map(seg=>`
<div style="position:relative;margin-bottom:14px">
<div style="position:absolute;left:-22px;width:12px;height:12px;border-radius:50%;background:${seg.color};border:2px solid var(--bg);top:3px;${seg.isActive?'box-shadow:0 0 0 3px '+seg.color+'44':''};flex-shrink:0"></div>
<div style="background:var(--bg2);border:1px solid ${seg.isActive?seg.color+'44':'var(--b1)'};border-radius:7px;padding:10px 12px">
<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px">
<div style="display:flex;align-items:center;gap:7px">
<span style="font-size:11px;font-weight:700;color:${seg.isActive?seg.color:'var(--t1)'}">${seg.label}</span>
${seg.isActive?`<span style="font-size:8px;background:${seg.color}22;color:${seg.color};border:1px solid ${seg.color}44;padding:1px 6px;border-radius:8px;font-weight:700">ACTIVE</span>`:'<span style="font-size:8px;background:var(--bg4);color:var(--green);border:1px solid #4ac04a22;padding:1px 6px;border-radius:8px">DONE</span>'}
</div>
<div style="text-align:right">
<div style="font-size:10px;font-weight:700;color:var(--gold)">${seg.days}d ${seg.isActive?'(ongoing)':'spent'}</div>
<div style="font-size:8px;color:var(--t4)">${new Date(seg.entered).toLocaleDateString()}${seg.exited?' → '+new Date(seg.exited).toLocaleDateString():' → now'}</div>
</div></div></div></div>`).join(''):`<div style="color:var(--t4);font-size:10px;padding:12px">No stage history recorded yet. History is recorded automatically as the project progresses.</div>`}
</div>

<div class="section-lbl">Edit Deadline</div>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
<input type="date" id="ph-deadline" value="${p.deadline||''}" style="background:var(--bg3);border:1px solid var(--b2);color:var(--t1);padding:7px 10px;border-radius:5px;font-size:11px" onchange="saveInputs()"/>
<button class="btn btn-ghost btn-sm" onclick="document.getElementById('ph-deadline').value='';saveInputs()">Clear</button>
${deadline?`<span style="font-size:10px;color:${overdue?'var(--red)':atRisk?'#FF8A5C':'var(--green)'}">${overdue?'⚠ Overdue by '+daysFrom(deadline)+'d':atRisk?'⚡ '+daysBetween(now,deadline)+'d remaining':'✓ '+daysBetween(now,deadline)+'d remaining'}</span>`:''}
</div>`;
}

// ── DASHBOARD GANTT VIEW ──
function adminTimeline(){
  const ps=DB.getProjects();
  const now=new Date();
  const today=now.toISOString().slice(0,10);

  // View controls
  const range=S.tlRange||60; // days to show
  const offset=S.tlOffset||0; // days to shift left

  // Calculate date window
  const viewStart=new Date(now);viewStart.setDate(viewStart.getDate()-range*0.8+offset);
  const viewEnd=new Date(viewStart);viewEnd.setDate(viewStart.getDate()+range);
  const vsStr=viewStart.toISOString().slice(0,10);
  const veStr=viewEnd.toISOString().slice(0,10);

  // Filter
  const gf=S.tlFilter||{q:'',creator:'',status:''};
  const creators=DB.getUsers().filter(u=>u.role==='creator');
  let filtered=ps.filter(p=>{
    if(gf.q&&!p.name.toLowerCase().includes(gf.q.toLowerCase()))return false;
    if(gf.creator&&p.assignedPmId!==gf.creator)return false;
    if(gf.status&&p.workflowStatus!==gf.status)return false;
    return true;
  });

  // Sort: overdue first, then by deadline, then by created
  filtered.sort((a,b)=>{
    const ao=a.deadline&&new Date(a.deadline)<now;
    const bo=b.deadline&&new Date(b.deadline)<now;
    if(ao&&!bo)return -1;if(!ao&&bo)return 1;
    if(a.deadline&&b.deadline)return new Date(a.deadline)-new Date(b.deadline);
    if(a.deadline)return -1;if(b.deadline)return 1;
    return new Date(b.createdAt)-new Date(a.createdAt);
  });

  const ROW_H=42;const LABEL_W=220;const CHART_W=700;const PAD=8;
  const totalH=Math.max(filtered.length*ROW_H+60, 120);
  const totalDays=(viewEnd-viewStart)/(1000*60*60*24);

  // Helper: date → x position in chart
  function dateToX(dateStr){
    const d=new Date(dateStr);
    const frac=(d-viewStart)/((viewEnd-viewStart));
    return LABEL_W+PAD+Math.max(0,Math.min(1,frac))*(CHART_W-PAD*2);
  }
  function clampX(x){return Math.max(LABEL_W+PAD,Math.min(LABEL_W+CHART_W-PAD,x));}

  // Build month tick labels
  const ticks=[];
  const tickDate=new Date(viewStart);tickDate.setDate(1);tickDate.setMonth(tickDate.getMonth()+1);
  while(tickDate<viewEnd){
    ticks.push({x:dateToX(tickDate.toISOString()),label:tickDate.toLocaleDateString('en',{month:'short',day:'numeric'})});
    tickDate.setMonth(tickDate.getMonth()+1);
  }
  // Add week ticks
  const weekTicks=[];
  const wd=new Date(viewStart);
  while(wd<=viewEnd){const x=dateToX(wd.toISOString());if(x>LABEL_W+PAD&&x<LABEL_W+CHART_W-PAD)weekTicks.push({x,label:wd.getDate()===1?'':wd.toLocaleDateString('en',{month:'short',day:'numeric'})});wd.setDate(wd.getDate()+7);}

  const todayX=clampX(dateToX(today));

  // Build SVG rows
  let rows='';
  filtered.forEach((p,i)=>{
    const y=60+i*ROW_H;
    const created=p.createdAt||today;
    const history=p.stageHistory||[{stage:p.workflowStatus||'new',enteredAt:created}];
    const isOverdue=p.deadline&&new Date(p.deadline)<now;
    const isAtRisk=p.deadline&&!isOverdue&&new Date(p.deadline)<new Date(Date.now()+7*864e5);
    const rowBg=isOverdue?'rgba(239,68,68,0.04)':i%2===0?'#0A0A12':'#12121E';
    const cl=DB.getUser(p.clientId);
    const cr=DB.getUser(p.assignedCreatorId);

    rows+=`<rect x="0" y="${y}" width="${LABEL_W+CHART_W}" height="${ROW_H}" fill="${rowBg}"/>`;
    // Overdue left border indicator
    if(isOverdue)rows+=`<rect x="0" y="${y}" width="3" height="${ROW_H}" fill="#EF4444" opacity="0.8"/>`;
    else if(isAtRisk)rows+=`<rect x="0" y="${y}" width="3" height="${ROW_H}" fill="#FF6B35" opacity="0.5"/>`;

    // Label area
    rows+=`<text x="8" y="${y+14}" fill="${isOverdue?'#F87171':'#F0F0FF'}" font-size="10" font-weight="700" font-family="Arial,sans-serif" style="cursor:pointer" onclick="openStudio('${p.id}')">${esc(p.name.substring(0,26)+(p.name.length>26?'…':''))}</text>`;
    rows+=`<text x="8" y="${y+26}" fill="${isOverdue?'var(--red)':'#666'}" font-size="8" font-family="Arial,sans-serif">${p.projectId||'—'} · ${cl?esc(cl.name.substring(0,14)):'No client'}</text>`;
    rows+=`<text x="8" y="${y+36}" fill="${stageColor(p.workflowStatus||'new')}" font-size="8" font-family="Arial,sans-serif" font-weight="700">${stageLabel(p.workflowStatus||'new').toUpperCase()}</text>`;

    // Separator
    rows+=`<line x1="${LABEL_W}" y1="${y}" x2="${LABEL_W}" y2="${y+ROW_H}" stroke="#1e1e1e" stroke-width="1"/>`;

    // Stage bar — draw each segment
    const orderedStages=['brief_submitted','synopsis_review','synopsis_locked','storyboard_in_progress','storyboard_review','complete'];
    const histMap={};
    history.forEach(h=>{if(!histMap[h.stage])histMap[h.stage]=h.enteredAt;});
    if(!histMap['brief_submitted']&&!histMap['new'])histMap['brief_submitted']=created;

    let drewBar=false;
    for(let si=0;si<orderedStages.length;si++){
      const stage=orderedStages[si];
      const entered=histMap[stage];if(!entered)continue;
      const nextStage=orderedStages[si+1];
      const exited=nextStage&&histMap[nextStage]?histMap[nextStage]:null;
      const endTime=exited||(p.workflowStatus===stage?today:null);
      if(!endTime)continue;
      const x1=clampX(dateToX(entered));
      const x2=clampX(dateToX(endTime));
      if(x2<=x1+1)continue;
      const barY=y+8;const barH=ROW_H-18;
      rows+=`<rect x="${x1}" y="${barY}" width="${x2-x1}" height="${barH}" rx="${barH/2}" fill="${stageColor(stage)}" opacity="${p.workflowStatus===stage?'0.9':'0.45'}" onclick="openStudio('${p.id}')" style="cursor:pointer"/>`;
      if(p.workflowStatus===stage)rows+=`<rect x="${x1}" y="${barY}" width="${x2-x1}" height="${barH}" rx="${barH/2}" fill="${stageColor(stage)}" opacity="0.15" filter="blur(4px)" style="pointer-events:none"/>`;  // active glow
      if(x2-x1>30){rows+=`<text x="${(x1+x2)/2}" y="${barY+barH/2+4}" text-anchor="middle" fill="#fff" font-size="7" font-family="Arial,sans-serif" opacity="0.9" style="pointer-events:none">${WF_STAGES.find(s=>s.id===stage)?.short||''}</text>`;}
      drewBar=true;
    }

    // If no history bars drawn, draw a single bar from created to now for current stage
    if(!drewBar){
      const x1=clampX(dateToX(created));const x2=clampX(dateToX(today));
      if(x2>x1+1){
        rows+=`<rect x="${x1}" y="${y+8}" width="${x2-x1}" height="${ROW_H-18}" rx="3" fill="${stageColor(p.workflowStatus||'new')}" opacity="0.7" onclick="openStudio('${p.id}')" style="cursor:pointer"/>`;
      }
    }

    // Deadline diamond
    if(p.deadline){
      const dx=dateToX(p.deadline);
      if(dx>LABEL_W+PAD&&dx<LABEL_W+CHART_W-PAD){
        const dy=y+ROW_H/2;const ds=7;
        const col=isOverdue?'#EF4444':isAtRisk?'#F59E0B':'#10B981';
        rows+=`<polygon points="${dx},${dy-ds} ${dx+ds},${dy} ${dx},${dy+ds} ${dx-ds},${dy}" fill="${col}" opacity="0.9" onclick="openStudio('${p.id}')" style="cursor:pointer"/>`;
      }
    }
  });

  return`<div class="page" style="padding-bottom:30px">
<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;margin-bottom:14px">
<div><div class="page-title">Project Timeline</div><div class="page-sub">${filtered.length} projects · Gantt view · Click any bar or project to open in Studio</div></div>
<div class="btn-row" style="margin-top:0">
<button class="btn btn-ghost btn-sm" onclick="showSetDeadlinesModal()">Set Deadlines</button>
<button class="btn btn-ghost btn-sm" onclick="exportTimelineCSV()">Export CSV</button>
<button class="btn btn-gold" onclick="showNewProjModal()">+ New Project</button>
</div></div>

<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:8px;padding:9px 12px;margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap;align-items:center">
<input type="text" placeholder="Search..." value="${esc(gf.q)}" oninput="S.tlFilter={...S.tlFilter||{},q:this.value};debounceRender('tl')" style="flex:1;min-width:120px;background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:5px 8px;border-radius:4px;font-size:10px"/>
<select onchange="S.tlFilter={...S.tlFilter||{},creator:this.value};render()" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:5px 8px;border-radius:4px;font-size:10px">
<option value="">All Creators</option>${creators.map(cr=>`<option value="${cr.id}"${gf.creator===cr.id?' selected':''}>${esc(cr.name)}</option>`).join('')}</select>
<select onchange="S.tlFilter={...S.tlFilter||{},status:this.value};render()" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:5px 8px;border-radius:4px;font-size:10px">
<option value="">All Stages</option>${WF_STAGES.map(s=>`<option value="${s.id}"${gf.status===s.id?' selected':''}>${s.label}</option>`).join('')}</select>
<span style="font-size:9px;color:var(--t4)">View:</span>
${[14,30,60,90].map(d=>`<div style="padding:3px 8px;border-radius:8px;font-size:9px;font-weight:700;cursor:pointer;background:${(S.tlRange||60)===d?'#1a0f1e':'var(--bg3)'};color:${(S.tlRange||60)===d?'var(--gold)':'var(--t4)'};border:1px solid ${(S.tlRange||60)===d?'rgba(255,107,53,0.25)':'var(--b1)'}" onclick="S.tlRange=${d};S.tlOffset=0;render()">${d}d</div>`).join('')}
<button class="btn btn-ghost btn-sm" onclick="S.tlOffset=(S.tlOffset||0)-(S.tlRange||60)*0.4;render()">‹ Earlier</button>
<button class="btn btn-ghost btn-sm" onclick="S.tlOffset=Math.min(0,(S.tlOffset||0)+(S.tlRange||60)*0.4);render()">Later ›</button>
<button class="btn btn-ghost btn-sm" onclick="S.tlOffset=0;render()">Today</button>
</div>

<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;align-items:center">
${WF_STAGES.map(s=>`<div style="display:flex;align-items:center;gap:4px;font-size:9px;color:var(--t3)"><div style="width:10px;height:10px;border-radius:2px;background:${s.color}"></div>${s.label}</div>`).join('')}
<div style="display:flex;align-items:center;gap:4px;font-size:9px;color:var(--t3);margin-left:8px"><div style="width:10px;height:10px;background:#4ac04a;clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%)"></div>Deadline</div>
<div style="display:flex;align-items:center;gap:4px;font-size:9px;color:var(--t3)"><div style="width:1px;height:12px;background:var(--red)"></div>Today</div>
${ps.filter(p=>p.deadline&&new Date(p.deadline)<now).length?`<span style="margin-left:8px;font-size:9px;color:var(--red);font-weight:700">⚠ ${ps.filter(p=>p.deadline&&new Date(p.deadline)<now).length} overdue</span>`:''}
${ps.filter(p=>p.deadline&&new Date(p.deadline)>=now&&new Date(p.deadline)<new Date(Date.now()+7*864e5)).length?`<span style="font-size:9px;color:#FF8A5C;font-weight:700">⚡ ${ps.filter(p=>p.deadline&&new Date(p.deadline)>=now&&new Date(p.deadline)<new Date(Date.now()+7*864e5)).length} due this week</span>`:''}
</div>

${filtered.length===0?`<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:8px;padding:40px;text-align:center;color:var(--t4)">No projects match the filter.</div>`:`
<div style="overflow-x:auto;border:1px solid var(--b1);border-radius:8px;background:var(--bg2)">
<svg width="${LABEL_W+CHART_W}" height="${totalH}" xmlns="http://www.w3.org/2000/svg" style="display:block;min-width:${LABEL_W+CHART_W}px">
<!-- Header bg -->
<rect x="0" y="0" width="${LABEL_W+CHART_W}" height="50" fill="#0d0d0d"/>
<rect x="${LABEL_W}" y="0" width="${CHART_W}" height="50" fill="#0a0a0a"/>
<text x="8" y="20" fill="#555" font-size="9" font-family="Arial,sans-serif" font-weight="700" text-transform="uppercase">PROJECT</text>
<!-- Week tick lines -->
${weekTicks.map(t=>`<line x1="${t.x}" y1="0" x2="${t.x}" y2="${totalH}" stroke="#1a1a1a" stroke-width="1"/>`).join('')}
<!-- Month ticks -->
${ticks.map(t=>`<line x1="${t.x}" y1="0" x2="${t.x}" y2="${totalH}" stroke="#2a2a2a" stroke-width="1"/>
<text x="${t.x+3}" y="18" fill="#555" font-size="8" font-family="Arial,sans-serif">${t.label}</text>`).join('')}
<!-- Week date labels -->
${weekTicks.filter(t=>t.label).map(t=>`<text x="${t.x+3}" y="32" fill="#333" font-size="7" font-family="Arial,sans-serif">${t.label}</text>`).join('')}
<!-- Label/chart separator -->
<line x1="${LABEL_W}" y1="0" x2="${LABEL_W}" y2="${totalH}" stroke="#2a2a2a" stroke-width="1"/>
<!-- Rows -->
${rows}
<!-- Today line (on top) -->
<line x1="${todayX}" y1="40" x2="${todayX}" y2="${totalH}" stroke="#06B6D4" stroke-width="2.5" opacity="0.9"/>
<line x1="${todayX}" y1="40" x2="${todayX}" y2="${totalH}" stroke="#06B6D4" stroke-width="8" opacity="0.12"/>
<rect x="${todayX-14}" y="38" width="28" height="13" rx="3" fill="#06B6D4" opacity="0.9"/>
<text x="${todayX}" y="48" text-anchor="middle" fill="#000" font-size="7" font-family="Arial,sans-serif" font-weight="800">TODAY</text>
<!-- Bottom border -->
<line x1="0" y1="${totalH-1}" x2="${LABEL_W+CHART_W}" y2="${totalH-1}" stroke="#1e1e1e" stroke-width="1"/>
</svg>
</div>`}
</div>`;
}

function showSetDeadlinesModal(){
  const ps=DB.getProjects().filter(p=>p.workflowStatus!=='complete');
  openModal(`<div class="modal-title">Set / Edit Deadlines</div>
<div style="max-height:460px;overflow-y:auto">
${ps.map(p=>`<div style="display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid var(--b1)">
<div style="flex:1;min-width:0"><div style="font-size:10px;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(p.name)}</div>
<div style="font-size:8px;color:var(--t4)">${p.projectId||'—'} · ${stageLabel(p.workflowStatus||'new')}</div></div>
<input type="date" value="${p.deadline||''}" onchange="setProjectDeadline('${p.id}',this.value)" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:4px 7px;border-radius:4px;font-size:9px;width:130px"/>
<button onclick="setProjectDeadline('${p.id}','')" style="background:none;border:none;color:var(--t4);cursor:pointer;font-size:12px">✕</button>
</div>`).join('')}
${!ps.length?'<div style="color:var(--t4);font-size:10px;padding:12px">No active projects.</div>':''}
</div>
<div class="btn-row" style="margin-top:12px"><button class="btn btn-gold" onclick="closeModal();render()">Done</button></div>`);
}
function setProjectDeadline(pid,val){const p=DB.getProject(pid);if(!p)return;p.deadline=val||null;DB.saveProject(p);}

function exportTimelineCSV(){
  const ps=DB.getProjects();const now=new Date();
  const rows=[['Project ID','Project Name','Type','Client','AI PM','Status','Created','Deadline','Days Active','Overdue','Stage History']];
  ps.forEach(p=>{
    const cl=DB.getUser(p.clientId);const cr=DB.getPM(p.assignedPmId);
    const days=p.createdAt?daysBetween(p.createdAt,now.toISOString()):0;
    const overdue=p.deadline&&new Date(p.deadline)<now?'Yes':'No';
    const hist=(p.stageHistory||[]).map(h=>h.stage+'@'+new Date(h.enteredAt).toLocaleDateString()).join(' | ');
    rows.push([p.projectId||'',p.name,MT[p.type]?.label||p.type,cl?.name||'',cr?.name||'',stageLabel(p.workflowStatus||'new'),p.createdAt?new Date(p.createdAt).toLocaleDateString():'',p.deadline?new Date(p.deadline).toLocaleDateString():'',days,overdue,hist]);
  });
  dlTxt(rows.map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\n'),'studio_timeline_'+new Date().toISOString().slice(0,10)+'.csv');
}

// ══════════════════════════════════════
// L&D — RAG + Trend Matching
// ══════════════════════════════════════

function matchLDToProject(p){
  // Returns top relevant L&D entries for this project
  const all=DB.getLDEntries().filter(e=>e.active!==false);
  const type=p.type||'';
  const brief=JSON.stringify({...p.clientBrief,...p.brief}).toLowerCase();
  const scored=all.map(e=>{
    let score=0;
    // Type match
    if(!e.media_types?.length||e.media_types.includes(type))score+=2;
    // Tag keyword match in brief
    (e.tags||[]).forEach(tag=>{if(brief.includes(tag.toLowerCase()))score+=1;});
    // Title/description match
    if(brief.includes((e.title||'').toLowerCase().split(' ')[0]))score+=1;
    return{...e,_score:score};
  });
  return scored.filter(e=>e._score>0).sort((a,b)=>b._score-a._score).slice(0,5);
}

function buildRAGContext(selectedIds,p){
  // Build the injection string from selected trend/skill IDs
  const entries=selectedIds.map(id=>DB.getLDEntry(id)).filter(Boolean);
  if(!entries.length)return'';
  const parts=entries.map(e=>{
    const tmpl=e.extracted_style?.inject_template||'';
    if(tmpl)return tmpl.replace('{product}',Object.values({...p.clientBrief,...p.brief})[0]||'product');
    return`APPLY ${e.type.toUpperCase()}: ${e.title}. ${e.description||''}`;
  });
  return'\n\n--- ACTIVE STYLES & TRENDS ---\n'+parts.join('\n')+('\n--- END STYLES ---');
}

function applyRAGToPrompt(basePrompt,pid){
  // Inject selected trends into any generation prompt
  const p=DB.getProject(pid||S.pid);if(!p)return basePrompt;
  const ids=S.selectedTrends||[];
  if(!ids.length)return basePrompt;
  return basePrompt+buildRAGContext(ids,p);
}

// Trending styles panel shown before storyboard/video gen
function trendingStylesPanel(p){
  const matches=matchLDToProject(p);
  if(!matches.length)return'';
  const selected=S.selectedTrends||[];
  const typeColors={trend:'var(--gold)',skill:'var(--blue)',creator:'var(--purple)',workflow:'var(--green)'};
  const typeIcons={trend:'📈',skill:'🎯',creator:'👁',workflow:'⚙'};
  return`<div style="background:#0e0a18;border:1px solid rgba(255,107,53,0.25);border-radius:9px;padding:13px;margin-bottom:14px">
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
<div style="display:flex;align-items:center;gap:7px">
<span style="font-size:14px">✦</span>
<span style="font-size:11px;font-weight:700;color:var(--gold)">Trending Styles</span>
<span style="font-size:9px;color:var(--t4)">${matches.length} relevant to this project</span>
</div>
<div style="display:flex;gap:5px">
${selected.length?`<span style="font-size:9px;color:var(--green);font-weight:700">${selected.length} active</span>`:''}
<button onclick="S.selectedTrends=[];render()" style="background:none;border:none;color:var(--t4);font-size:9px;cursor:pointer">Clear all</button>
</div>
</div>
<div style="display:flex;gap:7px;flex-wrap:wrap">
${matches.map(e=>{
  const sel=selected.includes(e.id);
  const col=typeColors[e.type]||'var(--t4)';
  const icon=typeIcons[e.type]||'';
  const hasLora=e.lora_status==='ready';
  return`<div style="background:${sel?col+'22':'var(--bg3)'};border:1px solid ${sel?col+'88':'var(--b2)'};border-radius:7px;padding:8px 11px;cursor:pointer;transition:all .15s;max-width:200px"
  onclick="const t=S.selectedTrends||[];const i=t.indexOf('${e.id}');if(i>=0)t.splice(i,1);else t.push('${e.id}');S.selectedTrends=[...t];render()">
<div style="display:flex;align-items:center;gap:5px;margin-bottom:3px">
<span style="font-size:10px">${icon}</span>
<span style="font-size:9px;font-weight:700;color:${sel?col:'var(--t2)'}">${esc(e.title)}</span>
${sel?`<span style="font-size:7px;background:${col};color:#000;padding:1px 4px;border-radius:3px;font-weight:700">ON</span>`:''}
</div>
<div style="font-size:8px;color:var(--t4);line-height:1.4;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical">${esc((e.description||'').substring(0,80))}</div>
${hasLora?`<div style="font-size:7px;color:var(--green);margin-top:3px">✓ LoRA trained</div>`:''}
</div>`;}).join('')}
</div>
${selected.length?`<div style="margin-top:9px;padding:8px 10px;background:var(--bg4);border-radius:5px;font-size:9px;color:var(--t3);line-height:1.6">
<strong style="color:var(--t2)">Injecting into generation:</strong> ${selected.map(id=>{const e=DB.getLDEntry(id);return e?`<span style="color:var(--gold)">${e.title}</span>`:''}).filter(Boolean).join(', ')}
</div>`:''}
</div>`;
}

// ── Admin L&D Panel ──


// ═══════════════════════════════════════════════════════════
// AI PM MARKETPLACE
// ═══════════════════════════════════════════════════════════

const PM_DOMAINS = [
  'FMCG','Retail','Finance','SaaS','Manufacturing',
  'Healthcare','Real Estate','Education','Automotive','Media & Entertainment',
  'Travel & Hospitality','E-Commerce','Fashion','Food & Beverage','Technology'
];

function adminPMs(){
  const pms=DB.getPMs();
  const filter=S.pmFilter||{domain:'',q:''};
  const filtered=pms.filter(p=>{
    if(filter.domain&&p.domain!==filter.domain)return false;
    if(filter.q&&!p.name.toLowerCase().includes(filter.q.toLowerCase())&&!p.skills?.join(' ').toLowerCase().includes(filter.q.toLowerCase()))return false;
    return true;
  }).sort((a,b)=>(b.avgRating||0)-(a.avgRating||0));

  return`<div style="padding:20px 28px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:10px">
      <div>
        <div style="font-size:20px;font-weight:800;font-family:var(--font-h);color:var(--t1)">AI Project Managers</div>
        <div style="font-size:10px;color:var(--t4);margin-top:2px">${pms.length} PMs · domain-trained · client-rated</div>
      </div>
      <button class="btn btn-gold" onclick="openPMModal()">+ Create PM</button>
    </div>

    <div style="display:flex;gap:10px;margin-bottom:20px;flex-wrap:wrap">
      <input type="text" placeholder="Search PMs or skills…" value="${filter.q||''}" oninput="S.pmFilter={...S.pmFilter||{},q:this.value};debounceRender('pms')" style="background:var(--bg3);border:1px solid var(--b2);color:var(--t1);padding:7px 11px;border-radius:6px;font-size:10px;min-width:200px">
      <select onchange="S.pmFilter={...S.pmFilter||{},domain:this.value};render()" style="background:var(--bg3);border:1px solid var(--b2);color:var(--t1);padding:7px 11px;border-radius:6px;font-size:10px">
        <option value="">All Domains</option>
        ${PM_DOMAINS.map(d=>`<option value="${d}"${filter.domain===d?' selected':''}>${d}</option>`).join('')}
      </select>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px">
      ${filtered.length?filtered.map(pm=>pmAdminCard(pm)).join(''):`<div style="grid-column:1/-1;color:var(--t4);font-size:11px;padding:32px;text-align:center;border:1px dashed var(--b1);border-radius:8px">No PMs yet — click "Create PM" to add your first AI Project Manager.</div>`}
    </div>
  </div>`;
}

function pmAdminCard(pm){
  const stars=pm.avgRating||0;
  const ratings=pm.ratings?.length||0;
  const starHtml=Array.from({length:5},(_,i)=>`<span style="color:${i<Math.round(stars)?'#F59E0B':'var(--b2)'};font-size:13px">★</span>`).join('');
  return`<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:12px;padding:20px;display:flex;flex-direction:column;gap:12px;transition:border-color 0.2s" onmouseenter="this.style.borderColor='var(--gold)'" onmouseleave="this.style.borderColor='var(--b1)'">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px">
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,var(--gold),var(--orange));display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#000;flex-shrink:0">${(pm.name||'P')[0].toUpperCase()}</div>
        <div>
          <div style="font-weight:700;font-size:13px;color:var(--t1)">${esc(pm.name)}</div>
          <div style="font-size:10px;color:var(--cyan);font-weight:600;margin-top:1px">${esc(pm.domain||'General')}</div>
        </div>
      </div>
      <div style="display:flex;gap:6px">
        <button class="btn btn-ghost btn-sm" style="padding:3px 8px;font-size:9px" onclick="openPMModal('${pm.id}')">Edit</button>
        <button class="btn btn-ghost btn-sm" style="padding:3px 8px;font-size:9px;color:var(--red)" onclick="deletePM('${pm.id}')">Del</button>
      </div>
    </div>
    <div style="font-size:11px;color:var(--t3);line-height:1.5">${esc(pm.bio||'No bio added.')}</div>
    <div style="display:flex;flex-wrap:wrap;gap:5px">
      ${(pm.skills||[]).map(s=>`<span style="background:rgba(79,195,247,0.1);color:var(--cyan);border:1px solid rgba(79,195,247,0.2);border-radius:4px;font-size:9px;padding:2px 8px;font-weight:600">${esc(s)}</span>`).join('')}
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--b1);padding-top:10px;margin-top:2px">
      <div style="display:flex;align-items:center;gap:6px">
        <div>${starHtml}</div>
        <div style="font-size:10px;color:var(--t3)">${stars.toFixed(1)} <span style="color:var(--t4)">(${ratings} reviews)</span></div>
      </div>
      <div style="font-size:9px;color:var(--t4)">
        ${DB.getUsers().filter(u=>u.role==='client'&&u.assignedPmId===pm.id).length} clients assigned
      </div>
    </div>
  </div>`;
}

function openPMModal(pmId){
  const pm=pmId?DB.getPM(pmId):{};
  const skillsStr=(pm.skills||[]).join(', ');
  openModal(`<div style="min-width:420px">
    <div style="font-size:16px;font-weight:800;margin-bottom:16px;color:var(--t1)">${pmId?'Edit PM':'Create AI Project Manager'}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
      <div class="fg"><label>PM Name</label><input id="pm-name" value="${esc(pm.name||'')}" placeholder="e.g. Aryan — FMCG Specialist"></div>
      <div class="fg"><label>Domain / Industry</label>
        <select id="pm-domain">
          <option value="">Select domain…</option>
          ${PM_DOMAINS.map(d=>`<option value="${d}"${pm.domain===d?' selected':''}>${d}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="fg" style="margin-top:10px"><label>Bio</label><textarea id="pm-bio" rows="3" placeholder="Describe this PM's expertise and approach…" style="width:100%;background:var(--bg3);border:1px solid var(--b2);color:var(--t1);padding:8px;border-radius:5px;font-size:11px;resize:vertical">${esc(pm.bio||'')}</textarea></div>
    <div class="fg" style="margin-top:10px"><label>Skills (comma separated)</label><input id="pm-skills" value="${skillsStr}" placeholder="e.g. Brand Strategy, TVC, Social Media, LoRA Training"></div>
    <div class="fg" style="margin-top:10px"><label>Experience Level</label>
      <select id="pm-level">
        ${['Entry','Mid','Senior','Expert'].map(l=>`<option value="${l}"${pm.level===l?' selected':''}>${l}</option>`).join('')}
      </select>
    </div>
    <div class="fg" style="margin-top:10px">
      <label style="display:flex;justify-content:space-between;align-items:center">Skill Instructions <span style="font-size:9px;color:var(--t4);font-weight:400">Full system prompt this PM uses — admin only</span></label>
      <textarea id="pm-skill-doc" rows="6" placeholder="Describe how this PM should behave, what tone to use, what to avoid, domain expertise, style guidelines..." style="width:100%;background:var(--bg3);border:1px solid var(--b2);color:var(--t1);padding:8px;border-radius:5px;font-size:10px;resize:vertical;font-family:monospace;box-sizing:border-box">${esc(pm.skillDoc||pm.bio||'')}\</textarea>
      <div style="display:flex;gap:6px;margin-top:5px;align-items:center">
        <input type="file" id="pm-skill-upload" accept=".txt,.md" style="display:none" onchange="loadPMSkillDoc(this)">
        <button class="btn btn-ghost btn-sm" style="font-size:9px" onclick="document.getElementById('pm-skill-upload').click()">Upload .txt/.md</button>
        <span style="font-size:9px;color:var(--t4)" id="pm-skill-upload-name"></span>
      </div>
    </div>
    <div style="display:flex;gap:8px;margin-top:16px">
      <button class="btn btn-gold" style="flex:1" onclick="savePMModal('${pmId||''}')">Save PM</button>
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
    </div>
  </div>`);
}

function savePMModal(existingId){
  const name=document.getElementById('pm-name')?.value?.trim();
  const domain=document.getElementById('pm-domain')?.value;
  const bio=document.getElementById('pm-bio')?.value?.trim();
  const skillsRaw=document.getElementById('pm-skills')?.value||'';
  const skills=skillsRaw.split(',').map(s=>s.trim()).filter(Boolean);
  const level=document.getElementById('pm-level')?.value||'Senior';
  const skillDoc=document.getElementById('pm-skill-doc')?.value?.trim()||'';
  if(!name)return toast('PM name required','err');
  if(!domain)return toast('Select a domain','err');
  const pm={
    id:existingId||gid('pm'),
    name,domain,bio,skills,level,skillDoc,
    ratings:existingId?DB.getPM(existingId)?.ratings||[]:[],
    avgRating:existingId?DB.getPM(existingId)?.avgRating||0:0,
    createdAt:existingId?DB.getPM(existingId)?.createdAt:new Date().toISOString(),
    updatedAt:new Date().toISOString()
  };
  DB.savePM(pm);
  closeModal();render();
  toast(existingId?'PM updated!':'PM created!','ok');
}

function loadPMSkillDoc(input){
  const file=input.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=function(e){
    const ta=document.getElementById('pm-skill-doc');
    if(ta)ta.value=e.target.result;
    const nm=document.getElementById('pm-skill-upload-name');
    if(nm)nm.textContent=file.name+' loaded';
  };
  reader.readAsText(file);
}
function deletePM(id){
  if(!confirm('Delete this PM? This cannot be undone.'))return;
  DB.deletePM(id);render();toast('PM deleted','ok');
}

function assignPMToClient(clientId){
  const pms=DB.getPMs().sort((a,b)=>(b.avgRating||0)-(a.avgRating||0));
  const client=DB.getUser(clientId);
  openModal(`<div style="min-width:400px">
    <div style="font-size:15px;font-weight:800;margin-bottom:14px;color:var(--t1)">Assign AI PM to ${esc(client?.name||'Client')}</div>
    <div style="display:flex;flex-direction:column;gap:8px;max-height:360px;overflow-y:auto">
      ${pms.length?pms.map(pm=>{
        const stars=pm.avgRating||0;
        const isAssigned=client?.assignedPmId===pm.id;
        return`<div style="background:${isAssigned?'rgba(196,157,58,0.1)':'var(--bg3)'};border:1px solid ${isAssigned?'var(--gold)':'var(--b2)'};border-radius:8px;padding:12px 14px;cursor:pointer;transition:all 0.15s" onclick="confirmAssignPM('${clientId}','${pm.id}')">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:36px;height:36px;border-radius:8px;background:linear-gradient(135deg,var(--gold),var(--orange));display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;color:#000;flex-shrink:0">${pm.name[0].toUpperCase()}</div>
            <div style="flex:1">
              <div style="font-weight:700;font-size:12px;color:var(--t1)">${esc(pm.name)} ${isAssigned?'<span style="color:var(--gold);font-size:9px">● CURRENT</span>':''}</div>
              <div style="font-size:10px;color:var(--cyan)">${esc(pm.domain)}</div>
            </div>
            <div style="text-align:right">
              <div style="color:#F59E0B;font-size:11px">${'★'.repeat(Math.round(stars))}${'☆'.repeat(5-Math.round(stars))}</div>
              <div style="font-size:9px;color:var(--t4)">${stars.toFixed(1)}</div>
            </div>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:8px">
            ${(pm.skills||[]).slice(0,4).map(s=>`<span style="background:rgba(79,195,247,0.08);color:var(--cyan);border:1px solid rgba(79,195,247,0.15);border-radius:3px;font-size:8px;padding:1px 6px">${esc(s)}</span>`).join('')}
          </div>
        </div>`;
      }).join(''):`<div style="color:var(--t4);font-size:11px;text-align:center;padding:24px">No PMs available. Create PMs from the AI PMs tab.</div>`}
    </div>
    <button class="btn btn-ghost" style="width:100%;margin-top:12px" onclick="closeModal()">Cancel</button>
  </div>`);
}

function confirmAssignPM(clientId,pmId){
  const client=DB.getUser(clientId);
  const pm=DB.getPM(pmId);
  if(!client||!pm)return;
  client.assignedPmId=pmId;
  DB.saveUser(client);
  closeModal();render();
  toast(`${pm.name} assigned to ${client.name}!`,'ok');
  pushNotif(clientId,'system','Your AI Project Manager is ready',`${pm.name} (${pm.domain} specialist) has been assigned to your account.`,null);
}

// ── CLIENT PM PAGE ──────────────────────────────────────────────────────────
function clientPMPage(){
  const user=DB.getUser(S.session.userId);
  // Validate PM exists — stale IDs can cause crash
  const assignedPm=user?.assignedPmId?DB.getPM(user.assignedPmId):null;
  // Clear stale PM reference
  if(user?.assignedPmId&&!assignedPm){user.assignedPmId=null;DB.saveUser(user);}
  // Client only ever sees their dedicated PM — no directory browsing
  if(assignedPm) return clientPMChatFull(assignedPm,user);
  // No PM assigned yet — show waiting state
  return`<div class="page" style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:400px;text-align:center">
    <div style="font-size:48px;margin-bottom:16px">🤖</div>
    <div style="font-size:18px;font-weight:800;color:var(--t1);font-family:var(--font-h);margin-bottom:8px">No AI PM Assigned Yet</div>
    <div style="font-size:12px;color:var(--t4);max-width:340px;line-height:1.7;margin-bottom:20px">Your dedicated AI Project Manager will be assigned by your CinexAI account manager. They'll be tailored to your brand and domain.</div>
    <div style="background:rgba(196,157,58,0.08);border:1px solid rgba(196,157,58,0.2);border-radius:10px;padding:14px 20px;font-size:11px;color:var(--t3)">💬 Contact your account manager to get your PM assigned</div>
  </div>`;
}

function clientPMProfile(pm,user){
  const stars=pm.avgRating||0;
  const myRating=pm.ratings?.find(r=>r.clientId===user.id);
  const starHtml=(n,interactive,pmId)=>Array.from({length:5},(_,i)=>`<span style="color:${i<n?'#F59E0B':'var(--b2)'};font-size:${interactive?'22px':'16px'};cursor:${interactive?'pointer':'default'}" ${interactive?`onclick="rateMyPM('${pmId}',${i+1})"`:''}>${i<n?'★':'☆'}</span>`).join('');

  return`<div style="padding:20px 24px;max-width:700px;margin:0 auto">
    <div style="background:var(--bg2);border:1px solid var(--b1);border-radius:16px;padding:28px;margin-bottom:20px">
      <div style="display:flex;align-items:flex-start;gap:20px;margin-bottom:20px">
        <div style="width:72px;height:72px;border-radius:16px;background:linear-gradient(135deg,var(--gold),var(--orange));display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:800;color:#000;flex-shrink:0;box-shadow:0 0 30px rgba(196,157,58,0.3)">${pm.name[0].toUpperCase()}</div>
        <div style="flex:1">
          <div style="font-size:20px;font-weight:800;color:var(--t1);font-family:var(--font-h)">${esc(pm.name)}</div>
          <div style="font-size:12px;color:var(--cyan);font-weight:600;margin:3px 0">AI Project Manager · ${esc(pm.domain)}</div>
          <div style="font-size:11px;color:var(--t4)">${esc(pm.level||'Senior')} · Dedicated to your brand</div>
        </div>
        <div style="text-align:center">
          <div style="font-size:28px;font-weight:800;color:#F59E0B">${stars.toFixed(1)}</div>
          <div style="color:#F59E0B;font-size:14px">${'★'.repeat(Math.round(stars))}${'☆'.repeat(5-Math.round(stars))}</div>
          <div style="font-size:9px;color:var(--t4);margin-top:2px">${pm.ratings?.length||0} reviews</div>
        </div>
      </div>
      <div style="font-size:12px;color:var(--t2);line-height:1.7;margin-bottom:16px">${esc(pm.bio||'Your dedicated AI Project Manager, trained for your domain and brand.')}</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px">
        ${(pm.skills||[]).map(s=>`<span style="background:rgba(79,195,247,0.1);color:var(--cyan);border:1px solid rgba(79,195,247,0.2);border-radius:5px;font-size:10px;padding:3px 10px;font-weight:600">${esc(s)}</span>`).join('')}
      </div>
      <div style="border-top:1px solid var(--b1);padding-top:16px">
        <div style="font-size:11px;color:var(--t4);margin-bottom:8px;font-weight:600">YOUR RATING</div>
        <div style="display:flex;align-items:center;gap:12px">
          <div id="pm-star-rate">${starHtml(myRating?.stars||0,true,pm.id)}</div>
          <div style="font-size:10px;color:var(--t4)">${myRating?`You rated ${myRating.stars} star${myRating.stars>1?'s':''}. Click to update.`:'Rate your PM experience'}</div>
        </div>
      </div>
    </div>
    <div style="background:var(--bg2);border:1px solid var(--b1);border-radius:12px;padding:20px">
      <div style="font-size:12px;font-weight:700;color:var(--t1);margin-bottom:12px">Message Your PM</div>
      <textarea id="pm-msg" rows="3" placeholder="Ask your PM anything about your project, brand strategy, or production timeline…" style="width:100%;background:var(--bg3);border:1px solid var(--b2);color:var(--t1);padding:10px;border-radius:6px;font-size:11px;resize:vertical;box-sizing:border-box"></textarea>
      <button class="btn btn-gold" style="margin-top:8px" onclick="sendPMMessage()">Send Message</button>
    </div>
  </div>`;
}

function clientPMDirectory(pms){
  return`<div style="padding:20px 24px">
    <div style="text-align:center;margin-bottom:28px">
      <div style="font-size:20px;font-weight:800;color:var(--t1);font-family:var(--font-h)">Choose Your AI Project Manager</div>
      <div style="font-size:12px;color:var(--t4);margin-top:6px">Each PM is domain-trained and client-rated. Select the one that fits your brand.</div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px">
      ${pms.length?pms.map(pm=>{
        const stars=pm.avgRating||0;
        return`<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:12px;padding:20px;cursor:pointer;transition:all 0.2s" onmouseenter="this.style.borderColor='var(--gold)';this.style.transform='translateY(-2px)'" onmouseleave="this.style.borderColor='var(--b1)';this.style.transform='none'" onclick="requestPMAssignment('${pm.id}')">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
            <div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,var(--gold),var(--orange));display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#000;flex-shrink:0">${pm.name[0].toUpperCase()}</div>
            <div>
              <div style="font-weight:700;font-size:13px;color:var(--t1)">${esc(pm.name)}</div>
              <div style="font-size:10px;color:var(--cyan);font-weight:600">${esc(pm.domain)}</div>
            </div>
          </div>
          <div style="font-size:11px;color:var(--t3);line-height:1.5;margin-bottom:10px">${esc((pm.bio||'').substring(0,100))}${(pm.bio||'').length>100?'…':''}</div>
          <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:12px">
            ${(pm.skills||[]).slice(0,3).map(s=>`<span style="background:rgba(79,195,247,0.08);color:var(--cyan);border:1px solid rgba(79,195,247,0.15);border-radius:3px;font-size:8px;padding:2px 7px">${esc(s)}</span>`).join('')}
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--b1);padding-top:10px">
            <div style="display:flex;align-items:center;gap:4px">
              <span style="color:#F59E0B;font-size:12px">${'★'.repeat(Math.round(stars))}${'☆'.repeat(5-Math.round(stars))}</span>
              <span style="font-size:10px;color:var(--t4)">${stars.toFixed(1)} (${pm.ratings?.length||0})</span>
            </div>
            <span style="font-size:9px;color:var(--gold);font-weight:700">Select →</span>
          </div>
        </div>`;
      }).join(''):`<div style="grid-column:1/-1;color:var(--t4);font-size:11px;text-align:center;padding:32px">No Project Managers available yet. Please contact your admin.</div>`}
    </div>
  </div>`;
}

function requestPMAssignment(pmId){
  const pm=DB.getPM(pmId);
  if(!pm)return;
  const user=DB.getUser(S.session.userId);
  if(!user)return;
  user.assignedPmId=pmId;
  DB.saveUser(user);
  render();
  toast(`${pm.name} is now your dedicated AI PM!`,'ok');
}

function rateMyPM(pmId,stars){
  const pm=DB.getPM(pmId);
  const user=DB.getUser(S.session.userId);
  if(!pm||!user)return;
  if(!pm.ratings)pm.ratings=[];
  const existing=pm.ratings.findIndex(r=>r.clientId===user.id);
  const rating={clientId:user.id,clientName:user.name,stars,ratedAt:new Date().toISOString()};
  if(existing>=0)pm.ratings[existing]=rating;
  else pm.ratings.push(rating);
  pm.avgRating=pm.ratings.reduce((s,r)=>s+r.stars,0)/pm.ratings.length;
  DB.savePM(pm);
  render();
  toast(`Rated ${stars} star${stars>1?'s':''}! Thank you.`,'ok');
}

function sendPMMessage(){
  const msg=document.getElementById('pm-msg')?.value?.trim();
  if(!msg)return toast('Please type a message','err');
  toast('Message sent to your PM!','ok');
  document.getElementById('pm-msg').value='';
}



// ── CREATOR CONTROL PANEL ────────────────────────────────────────
function getCreatorControls(pid){
  const p=DB.getProject(pid||S.pid);
  if(!p.creatorControls)p.creatorControls={
    promptWriting:false,   // false = PM handles, true = creator handles
    cameraSelection:false,
    lensFocal:false,
    colorGrading:false,
    modelSelection:false
  };
  return p.creatorControls;
}

function renderCreatorControlPanel(pid){
  const p=DB.getProject(pid||S.pid);
  const cc=getCreatorControls(pid);
  const items=[
    {k:'promptWriting',l:'Prompt Writing',icon:'✍️',desc:'Write generation prompts manually'},
    {k:'cameraSelection',l:'Camera Selection',icon:'📷',desc:'Choose camera type and motion'},
    {k:'lensFocal',l:'Lens & Focal Length',icon:'🔭',desc:'Set lens type, mm, sensor size'},
    {k:'colorGrading',l:'Color Grading',icon:'🎨',desc:'Control grade, tone, grain manually'},
    {k:'modelSelection',l:'Model Selection',icon:'🤖',desc:'Choose image/video models per shot'},
  ];
  return`<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:10px;padding:16px;margin-bottom:16px">
    <div style="font-size:11px;font-weight:700;color:var(--t2);letter-spacing:0.06em;margin-bottom:12px">CREATOR CONTROL — What do you want to control vs hand to the AI PM?</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:8px">
      ${items.map(item=>`<div style="background:${cc[item.k]?'rgba(196,157,58,0.12)':'var(--bg3)'};border:1px solid ${cc[item.k]?'var(--gold)':'var(--b2)'};border-radius:7px;padding:10px 12px;cursor:pointer;transition:all 0.2s" onclick="toggleCreatorControl('${pid||S.pid}','${item.k}')">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
          <span style="font-size:14px">${item.icon}</span>
          <div style="width:28px;height:16px;border-radius:8px;background:${cc[item.k]?'var(--gold)':'var(--b2)'};position:relative;transition:background 0.2s">
            <div style="width:12px;height:12px;border-radius:50%;background:#fff;position:absolute;top:2px;${cc[item.k]?'right:2px':'left:2px'};transition:all 0.2s"></div>
          </div>
        </div>
        <div style="font-size:10px;font-weight:700;color:${cc[item.k]?'var(--gold)':'var(--t2)'}">${item.l}</div>
        <div style="font-size:9px;color:var(--t4);margin-top:2px">${cc[item.k]?'You control this':'AI PM handles this'}</div>
      </div>`).join('')}
    </div>
  </div>`;
}

function toggleCreatorControl(pid,key){
  const p=DB.getProject(pid);
  if(!p)return;
  const cc=getCreatorControls(pid);
  cc[key]=!cc[key];
  p.creatorControls=cc;
  DB.saveProject(p);
  render();
  toast(`${cc[key]?'You now control':'AI PM now handles'} ${key.replace(/([A-Z])/g,' $1').toLowerCase()}`, 'ok');
}

// ── CAMERA CONTROL UI ────────────────────────────────────────────
function renderCameraControl(pid){
  const p=DB.getProject(pid||S.pid);
  const cc=getCreatorControls(pid);
  if(!cc.cameraSelection&&!cc.lensFocal)return'';
  const cam=p.cameraSettings||{};
  const lenses=['35mm','50mm','85mm','24mm','70-200mm','Anamorphic 2.39:1','Macro','Wide 16mm'];
  const sensors=['Full Frame','Super 35','ARRI Large Format','Micro 4/3','APS-C'];
  const motions=['Static','Dolly In','Dolly Out','Pan Left','Pan Right','Tilt Up','Tilt Down','Tracking Shot','Crane Up','Handheld','Orbit','Zoom In'];
  return`<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:10px;padding:16px;margin-bottom:16px">
    <div style="font-size:11px;font-weight:700;color:var(--gold);letter-spacing:0.06em;margin-bottom:12px">📷 CAMERA CONTROL</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px">
      ${cc.cameraSelection?`
      <div class="fg"><label>Camera Motion</label>
        <select onchange="updateCameraSettings('${pid||S.pid}','motion',this.value)">
          ${motions.map(m=>`<option value="${m}"${cam.motion===m?' selected':''}>${m}</option>`).join('')}
        </select>
      </div>
      <div class="fg"><label>Sensor</label>
        <select onchange="updateCameraSettings('${pid||S.pid}','sensor',this.value)">
          ${sensors.map(s=>`<option value="${s}"${cam.sensor===s?' selected':''}>${s}</option>`).join('')}
        </select>
      </div>`:''}
      ${cc.lensFocal?`
      <div class="fg"><label>Lens Type</label>
        <select onchange="updateCameraSettings('${pid||S.pid}','lens',this.value)">
          ${lenses.map(l=>`<option value="${l}"${cam.lens===l?' selected':''}>${l}</option>`).join('')}
        </select>
      </div>
      <div class="fg"><label>Aperture</label>
        <select onchange="updateCameraSettings('${pid||S.pid}','aperture',this.value)">
          ${['f/1.4','f/1.8','f/2.8','f/4','f/5.6','f/8'].map(a=>`<option value="${a}"${cam.aperture===a?' selected':''}>${a}</option>`).join('')}
        </select>
      </div>`:''}
    </div>
  </div>`;
}

function updateCameraSettings(pid,key,val){
  const p=DB.getProject(pid);if(!p)return;
  if(!p.cameraSettings)p.cameraSettings={};
  p.cameraSettings[key]=val;
  DB.saveProject(p);
}

// ── SOUL CAST ────────────────────────────────────────────────────
function renderSoulCast(pid){
  const p=DB.getProject(pid||S.pid);
  const client=DB.getUser(p?.clientId);
  const cast=client?.soulCast||[];
  return`<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:10px;padding:16px;margin-bottom:16px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
      <div style="font-size:11px;font-weight:700;color:var(--cyan);letter-spacing:0.06em">🎭 SOUL CAST — Brand Characters</div>
      <button class="btn btn-ghost btn-sm" style="font-size:9px" onclick="addSoulCastCharacter('${p?.clientId}')">+ Add Character</button>
    </div>
    ${cast.length?`<div style="display:flex;gap:10px;flex-wrap:wrap">
      ${cast.map((c,i)=>`<div style="background:var(--bg3);border:1px solid var(--b2);border-radius:8px;padding:10px 12px;min-width:120px;cursor:pointer;transition:border-color 0.2s" onmouseenter="this.style.borderColor='var(--cyan)'" onmouseleave="this.style.borderColor='var(--b2)'">
        <div style="font-size:18px;margin-bottom:4px">${c.emoji||'🧑'}</div>
        <div style="font-size:10px;font-weight:700;color:var(--t1)">${c.name}</div>
        <div style="font-size:9px;color:var(--t4);margin-top:2px">${c.role||'Brand Character'}</div>
        <div style="font-size:9px;color:var(--cyan);margin-top:4px">${c.style||''}</div>
      </div>`).join('')}
    </div>`:`<div style="color:var(--t4);font-size:10px;text-align:center;padding:12px;border:1px dashed var(--b1);border-radius:6px">No brand characters yet. Add consistent AI actors for this brand.</div>`}
  </div>`;
}

function addSoulCastCharacter(clientId){
  openModal(`<div style="min-width:360px">
    <div style="font-size:14px;font-weight:800;margin-bottom:14px;color:var(--t1)">Add Brand Character (Soul Cast)</div>
    <div class="fg"><label>Character Name</label><input id="sc-name" placeholder="e.g. Priya — Brand Spokesperson"></div>
    <div class="fg" style="margin-top:10px"><label>Role</label><input id="sc-role" placeholder="e.g. Product Demo Lead, Narrator"></div>
    <div class="fg" style="margin-top:10px"><label>Visual Style</label><input id="sc-style" placeholder="e.g. 28yr Indian woman, confident, minimal makeup, clean backdrop"></div>
    <div class="fg" style="margin-top:10px"><label>Emoji Icon</label><input id="sc-emoji" value="🧑" style="width:60px"></div>
    <div style="display:flex;gap:8px;margin-top:16px">
      <button class="btn btn-blue" style="flex:1" onclick="saveSoulCastCharacter('${clientId}')">Save Character</button>
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
    </div>
  </div>`);
}

function saveSoulCastCharacter(clientId){
  const client=DB.getUser(clientId);if(!client)return;
  if(!client.soulCast)client.soulCast=[];
  client.soulCast.push({
    id:gid('sc'),
    name:document.getElementById('sc-name')?.value?.trim()||'Character',
    role:document.getElementById('sc-role')?.value?.trim()||'',
    style:document.getElementById('sc-style')?.value?.trim()||'',
    emoji:document.getElementById('sc-emoji')?.value?.trim()||'🧑',
    createdAt:new Date().toISOString()
  });
  DB.saveUser(client);
  closeModal();render();
  toast('Character saved to Soul Cast!','ok');
}


// ── PM-CLIENT CHAT + CHANGE PM + PM PROJECT CREATION ────────────
function clientPMChatFull(pm, user){
  const chats=DB.getPMChats(user.id).sort((a,b)=>new Date(a.ts)-new Date(b.ts));
  const mem=DB.getPMMemory(pm.id,user.id);
  const stars=pm.avgRating||0;
  const myRating=pm.ratings?.find(r=>r.clientId===user.id);

  return`<div style="padding:16px 20px;max-width:760px;margin:0 auto">

    <!-- PM Profile Card -->
    <div style="background:var(--bg2);border:1px solid var(--b1);border-radius:14px;padding:20px;margin-bottom:16px">
      <div style="display:flex;align-items:center;gap:16px">
        <div style="width:56px;height:56px;border-radius:14px;background:linear-gradient(135deg,var(--gold),var(--orange));display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:800;color:#000;flex-shrink:0;box-shadow:0 0 20px rgba(196,157,58,0.25)">${pm.name[0].toUpperCase()}</div>
        <div style="flex:1">
          <div style="font-size:16px;font-weight:800;color:var(--t1);font-family:var(--font-h)">${esc(pm.name)}</div>
          <div style="font-size:11px;color:var(--cyan);font-weight:600">${esc(pm.domain)} · ${esc(pm.level||'Senior')} PM</div>
          <div style="font-size:10px;color:var(--t4);margin-top:2px">${mem.projects?.length||0} projects together · ${mem.learnings?.length||0} brand learnings recorded</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
          <div style="color:#F59E0B;font-size:13px">${'★'.repeat(Math.round(stars))}${'☆'.repeat(5-Math.round(stars))}</div>
          <div style="font-size:10px;color:var(--t4)">${stars.toFixed(1)}</div>
          <div style="display:flex;gap:4px;margin-top:2px">
            ${Array.from({length:5},(_,i)=>`<span style="cursor:pointer;font-size:16px;color:${i<(myRating?.stars||0)?'#F59E0B':'var(--b2)'}" onclick="rateMyPM('${pm.id}',${i+1})">★</span>`).join('')}
          </div>
        </div>
      </div>
      <div style="display:flex;gap:8px;margin-top:14px;padding-top:14px;border-top:1px solid var(--b1)">
        <button class="btn btn-ghost btn-sm" style="font-size:9px" onclick="changePMConfirm('${user.id}')">↔ Change PM</button>
        <button class="btn btn-ghost btn-sm" style="font-size:9px" onclick="viewPMMemory('${pm.id}','${user.id}')">🧠 PM Memory</button>
        <button class="btn btn-gold btn-sm" style="font-size:9px" onclick="openImprovePMModal('${pm.id}','${user.id}')">✦ Improve My PM</button>
      </div>
    </div>

    <!-- Chat Thread -->
    <div style="background:var(--bg2);border:1px solid var(--b1);border-radius:14px;overflow:hidden;margin-bottom:16px">
      <div style="padding:12px 16px;border-bottom:1px solid var(--b1);display:flex;align-items:center;justify-content:space-between">
        <div style="font-size:11px;font-weight:700;color:var(--t2)">💬 CHAT WITH ${esc(pm.name.split(' ')[0].toUpperCase())}</div>
        <div style="font-size:9px;color:var(--t4)">Messages are recorded for your protection</div>
      </div>
      <div id="pm-chat-thread" style="height:300px;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px">
        ${chats.length?chats.map(m=>{
          const isMe=m.role==='client';
          return`<div style="display:flex;${isMe?'justify-content:flex-end':'justify-content:flex-start'}">
            <div style="max-width:72%;background:${isMe?'rgba(196,157,58,0.15)':'var(--bg3)'};border:1px solid ${isMe?'rgba(196,157,58,0.3)':'var(--b2)'};border-radius:${isMe?'12px 12px 2px 12px':'12px 12px 12px 2px'};padding:10px 14px">
              ${m.type==='project_request'?`<div style="background:rgba(79,195,247,0.1);border:1px solid rgba(79,195,247,0.2);border-radius:6px;padding:8px;margin-bottom:6px;font-size:9px;color:var(--cyan);font-weight:700">📋 PROJECT REQUEST</div>`:''}
              <div style="font-size:11px;color:var(--t1);line-height:1.6">${esc(m.text)}</div>
              ${m.projectDraft?`<div style="margin-top:8px;background:var(--bg2);border:1px solid var(--b2);border-radius:6px;padding:8px">
                <div style="font-size:9px;font-weight:700;color:var(--gold);margin-bottom:4px">✦ PROJECT DRAFT CREATED</div>
                <div style="font-size:10px;color:var(--t2)">${esc(m.projectDraft.name)}</div>
                <div style="font-size:9px;color:var(--t4);margin-top:2px">${esc(m.projectDraft.type||'')} · ${esc(m.projectDraft.brief?.substring(0,60)||'')}…</div>
                ${!m.approved?`<div style="display:flex;gap:6px;margin-top:8px">
                  <button class="btn btn-gold btn-sm" style="font-size:9px" onclick="approveProjectFromChat('${m.id}')">✓ Approve & Create Project</button>
                  <button class="btn btn-ghost btn-sm" style="font-size:9px;color:var(--red)" onclick="rejectProjectFromChat('${m.id}')">✗ Reject</button>
                </div>`:`<div style="font-size:9px;color:var(--green);margin-top:6px;font-weight:700">✓ Approved & Project Created</div>`}
              </div>`:''}
              <div style="font-size:8px;color:var(--t4);margin-top:4px;text-align:${isMe?'right':'left'}">${new Date(m.ts).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})} · ${isMe?'You':pm.name.split(' ')[0]}</div>
            </div>
          </div>`;
        }).join(''):`<div style="text-align:center;color:var(--t4);font-size:11px;padding:40px 0">Start a conversation with ${esc(pm.name.split(' ')[0])}.<br><span style="font-size:10px">You can ask questions, share feedback, or request a new project.</span></div>`}
      </div>
      <div style="padding:12px 16px;border-top:1px solid var(--b1)">
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <button class="btn btn-ghost btn-sm" style="font-size:9px" onclick="setPMChatMode('message')">💬 Message</button>
          <button class="btn btn-gold btn-sm" style="font-size:9px" onclick="setPMChatMode('project')">✦ Request Project</button>
        </div>
        <div id="pm-chat-project-hint" style="display:none;background:rgba(196,157,58,0.08);border:1px solid rgba(196,157,58,0.2);border-radius:6px;padding:8px;margin-bottom:8px;font-size:10px;color:var(--t3)">
          💡 Describe your project idea and the PM will create a project draft for your approval.
        </div>
        <div style="display:flex;gap:8px">
          <textarea id="pm-chat-input" rows="2" placeholder="Type a message or describe your project idea…" style="flex:1;background:var(--bg3);border:1px solid var(--b2);color:var(--t1);padding:8px 12px;border-radius:6px;font-size:11px;resize:none"></textarea>
          <button class="btn btn-gold" style="align-self:flex-end;padding:8px 16px" onclick="sendPMChatMessage('${pm.id}','${user.id}')">Send</button>
        </div>
      </div>
    </div>

  </div>`;
}


// ── TRAIN MY PM ────────────────────────────────────────────────
function openTrainPMModal(pmId, clientId){
  const mem=DB.getPMMemory(pmId,clientId);
  const pm=DB.getPM(pmId);
  openModal(`
    <div class="modal-title">📚 Train ${esc(pm?.name||'Your PM')}</div>
    <div style="font-size:11px;color:var(--t4);margin-bottom:16px">Upload skills and brand knowledge to make your PM more personalized. Everything is saved to your PM's memory.</div>
    <div style="display:flex;flex-direction:column;gap:12px">
      <div class="fg"><label>Brand Voice & Tone</label>
        <textarea id="train-voice" rows="2" placeholder="e.g. Professional but warm, avoids jargon…" style="width:100%;background:var(--bg3);border:1px solid var(--b2);color:var(--t1);padding:9px;border-radius:6px;font-size:11px;resize:vertical;box-sizing:border-box">${esc(mem.brandVoice||'')}</textarea></div>
      <div class="fg"><label>Visual Style Preferences</label>
        <textarea id="train-visual" rows="2" placeholder="Cinematic dark tones, minimal design, bold typography…" style="width:100%;background:var(--bg3);border:1px solid var(--b2);color:var(--t1);padding:9px;border-radius:6px;font-size:11px;resize:vertical;box-sizing:border-box">${esc(mem.visualStyle||'')}</textarea></div>
      <div class="fg"><label>Target Audience</label>
        <textarea id="train-audience" rows="2" placeholder="Urban professionals 25-40, tech-savvy…" style="width:100%;background:var(--bg3);border:1px solid var(--b2);color:var(--t1);padding:9px;border-radius:6px;font-size:11px;resize:vertical;box-sizing:border-box">${esc(mem.targetAudience||'')}</textarea></div>
      <div class="fg"><label>Things to Avoid</label>
        <textarea id="train-avoid" rows="2" placeholder="Never use the word 'cheap', avoid aggressive sales tone…" style="width:100%;background:var(--bg3);border:1px solid var(--b2);color:var(--t1);padding:9px;border-radius:6px;font-size:11px;resize:vertical;box-sizing:border-box">${esc(mem.avoidList||'')}</textarea></div>
      <div>
        <label style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.06em;display:block;margin-bottom:6px">UPLOAD SKILL / KNOWLEDGE FILE</label>
        <div onclick="document.getElementById('pm-skill-file').click()" style="border:2px dashed var(--b2);border-radius:10px;padding:16px;text-align:center;cursor:pointer" onmouseenter="this.style.borderColor='var(--gold)'" onmouseleave="this.style.borderColor='var(--b2)'">
          <div style="font-size:18px;margin-bottom:4px">📄</div>
          <div style="font-size:11px;color:var(--t3);font-weight:600">Click to upload .txt, .md, or PDF</div>
        </div>
        <input type="file" id="pm-skill-file" accept=".txt,.md,.pdf" style="display:none" onchange="loadPMSkillFile(this,'${pmId}','${clientId}')">
        <div id="skill-file-status" style="font-size:10px;color:var(--green);margin-top:5px;display:none"></div>
        ${mem.uploadedSkills?.length?`<div style="margin-top:7px;display:flex;flex-wrap:wrap;gap:4px">${mem.uploadedSkills.map(s=>`<span style="background:rgba(16,185,129,0.1);color:var(--green);border:1px solid rgba(16,185,129,0.2);border-radius:4px;font-size:9px;padding:2px 8px">✓ ${esc(s.name)}</span>`).join('')}</div>`:''}
      </div>
    </div>
    <div style="display:flex;gap:8px;margin-top:16px">
      <button class="btn btn-gold" style="flex:1" onclick="saveTrainPM('${pmId}','${clientId}')">💾 Save to PM Memory</button>
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
    </div>
  `);
}

function loadPMSkillFile(input, pmId, clientId){
  const file=input.files[0];if(!file)return;
  const status=document.getElementById('skill-file-status');
  if(status){status.style.display='block';status.textContent='Reading file…';}
  const reader=new FileReader();
  reader.onload=async e=>{
    const text=e.target.result;
    const mem=DB.getPMMemory(pmId,clientId);
    if(!mem.uploadedSkills)mem.uploadedSkills=[];
    if(status)status.textContent='✦ PM is learning from this file…';
    try{
      const summary=await callClaude('Extract key brand/skill knowledge from this document. Be concise and structured.',`File: "${file.name}"

${text.substring(0,4000)}`,400);
      mem.uploadedSkills.push({name:file.name,summary,addedAt:new Date().toISOString()});
      if(!mem.learnings)mem.learnings=[];
      mem.learnings.push('[From '+file.name+']: '+summary.substring(0,200));
      DB.savePMMemory(pmId,clientId,mem);
      if(status){status.textContent='✓ "'+file.name+'" learned by PM';status.style.color='var(--green)';}
      toast('PM learned from '+file.name,'ok');
    }catch(e){
      mem.uploadedSkills.push({name:file.name,summary:text.substring(0,500),addedAt:new Date().toISOString()});
      DB.savePMMemory(pmId,clientId,mem);
      if(status){status.textContent='✓ "'+file.name+'" saved to PM memory';status.style.color='var(--green)';}
    }
  };
  reader.readAsText(file);
}

function saveTrainPM(pmId, clientId){
  const mem=DB.getPMMemory(pmId,clientId);
  const voice=document.getElementById('train-voice')?.value?.trim();
  const visual=document.getElementById('train-visual')?.value?.trim();
  const audience=document.getElementById('train-audience')?.value?.trim();
  const avoid=document.getElementById('train-avoid')?.value?.trim();
  if(voice)mem.brandVoice=voice;
  if(visual)mem.visualStyle=visual;
  if(audience)mem.targetAudience=audience;
  if(avoid)mem.avoidList=avoid;
  const summary=[];
  if(voice)summary.push('Brand voice: '+voice.substring(0,80));
  if(audience)summary.push('Audience: '+audience.substring(0,80));
  if(avoid)summary.push('Avoid: '+avoid.substring(0,80));
  if(summary.length){if(!mem.learnings)mem.learnings=[];mem.learnings.push('[Brand Training] '+summary.join(' | '));}
  DB.savePMMemory(pmId,clientId,mem);
  closeModal();toast('PM memory updated ✦','ok');render();
}

// ── IMPROVE MY PM — Rich knowledge input ───────────────────────────────────
function openImprovePMModal(pmId, clientId){
  const pm=DB.getPM(pmId);
  const mem=DB.getPMMemory(pmId,clientId);
  const uploadedCount=(mem.uploadedSkills||[]).length;
  openModal(`
    <div class="modal-title">✦ Improve ${esc(pm?.name||'Your PM')}</div>
    <div style="font-size:11px;color:var(--t4);margin-bottom:16px">Share brand knowledge, market updates, competitor insights, or any context. Your PM learns from everything you share.</div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
      <div style="background:rgba(196,157,58,0.06);border:1px solid rgba(196,157,58,0.15);border-radius:8px;padding:10px;text-align:center">
        <div style="font-size:20px;margin-bottom:4px">🧠</div>
        <div style="font-size:10px;font-weight:700;color:var(--gold)">${mem.learnings?.length||0} Learnings</div>
        <div style="font-size:9px;color:var(--t4)">recorded so far</div>
      </div>
      <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.15);border-radius:8px;padding:10px;text-align:center">
        <div style="font-size:20px;margin-bottom:4px">📄</div>
        <div style="font-size:10px;font-weight:700;color:var(--green)">${uploadedCount} Files</div>
        <div style="font-size:9px;color:var(--t4)">uploaded</div>
      </div>
    </div>

    <div style="display:flex;flex-direction:column;gap:10px">

      <!-- Free text knowledge -->
      <div class="fg">
        <label>Share Knowledge <span style="font-size:9px;font-weight:400;color:var(--t4)">Brand updates, market insights, tone changes, news…</span></label>
        <textarea id="improve-text" rows="4" placeholder="e.g. We just launched a new product line targeting Gen Z. Our tone should be more playful and less corporate. Our main competitor Nykaa just ran a campaign around sustainability — we should differentiate by focusing on science-backed formulations..." style="width:100%;background:var(--bg3);border:1px solid var(--b2);color:var(--t1);padding:9px;border-radius:6px;font-size:11px;resize:vertical;box-sizing:border-box"></textarea>
      </div>

      <!-- Reference Links -->
      <div class="fg">
        <label>Reference Links <span style="font-size:9px;font-weight:400;color:var(--t4)">Articles, competitor pages, campaigns, trends</span></label>
        <textarea id="improve-links" rows="2" placeholder="https://competitor.com/campaign" style="width:100%;background:var(--bg3);border:1px solid var(--b2);color:var(--t1);padding:9px;border-radius:6px;font-size:11px;resize:vertical;box-sizing:border-box;font-family:monospace"></textarea>
        <div style="font-size:9px;color:var(--t4);margin-top:3px">One URL per line. Your PM will reference these for context.</div>
      </div>

      <!-- Doc / File Upload -->
      <div>
        <label style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.06em;display:block;margin-bottom:5px">UPLOAD DOCUMENT</label>
        <div onclick="document.getElementById('improve-file').click()" id="improve-drop" style="border:2px dashed var(--b2);border-radius:8px;padding:14px;text-align:center;cursor:pointer;transition:border-color 0.2s" onmouseenter="this.style.borderColor='var(--gold)'" onmouseleave="this.style.borderColor='var(--b2)'">
          <div id="improve-file-label">
            <span style="font-size:18px">📄</span>
            <div style="font-size:11px;color:var(--t3);font-weight:600;margin-top:4px">Click to upload .txt, .md, .pdf or .docx</div>
            <div style="font-size:9px;color:var(--t4);margin-top:2px">Brand guidelines, competitor reports, trend docs, scripts</div>
          </div>
        </div>
        <input type="file" id="improve-file" accept=".txt,.md,.pdf,.doc,.docx" style="display:none" onchange="previewImproveFile(this)">
        <div id="improve-file-status" style="font-size:10px;color:var(--t3);margin-top:5px;display:none"></div>
      </div>

      <!-- Quick tags -->
      <div>
        <label style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.06em;display:block;margin-bottom:5px">WHAT TYPE OF UPDATE IS THIS?</label>
        <div style="display:flex;flex-wrap:wrap;gap:5px" id="improve-tags">
          ${['Brand Voice','Visual Style','Target Audience','Competitor Intel','Market Trend','Product Update','Campaign Reference','Tone Change'].map(t=>`<button type="button" onclick="toggleImproveTag(this)" style="padding:4px 10px;border-radius:5px;font-size:9px;font-weight:600;cursor:pointer;border:1px solid var(--b2);background:transparent;color:var(--t3);font-family:inherit;transition:all 0.15s">${t}</button>`).join('')}
        </div>
      </div>

    </div>

    <div style="display:flex;gap:8px;margin-top:16px">
      <button class="btn btn-gold" style="flex:1" onclick="saveImprovePM('${pmId}','${clientId}')">✦ Update PM Knowledge</button>
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
    </div>
  `);
}

function toggleImproveTag(btn){
  const active=btn.style.background!=='transparent'&&btn.style.background!=='';
  btn.style.background=active?'transparent':'rgba(196,157,58,0.15)';
  btn.style.borderColor=active?'var(--b2)':'var(--gold)';
  btn.style.color=active?'var(--t3)':'var(--gold)';
}

function previewImproveFile(input){
  const file=input.files[0];if(!file)return;
  const label=document.getElementById('improve-file-label');
  const status=document.getElementById('improve-file-status');
  if(label)label.innerHTML=`<span style="font-size:18px">📎</span><div style="font-size:11px;color:var(--green);font-weight:600;margin-top:4px">${esc(file.name)}</div><div style="font-size:9px;color:var(--t4)">${Math.round(file.size/1024)}KB · Click to change</div>`;
  if(status){status.style.display='block';status.textContent='File ready to upload';}
}

async function saveImprovePM(pmId, clientId){
  const text=document.getElementById('improve-text')?.value?.trim();
  const links=document.getElementById('improve-links')?.value?.trim();
  const fileInput=document.getElementById('improve-file');
  const file=fileInput?.files?.[0];
  const tags=[...document.querySelectorAll('#improve-tags button')].filter(b=>b.style.background&&b.style.background!=='transparent').map(b=>b.textContent);

  if(!text&&!links&&!file){toast('Please add some knowledge first','err');return;}

  const mem=DB.getPMMemory(pmId,clientId);
  if(!mem.learnings)mem.learnings=[];
  if(!mem.uploadedSkills)mem.uploadedSkills=[];

  const btn=document.querySelector('.btn-gold');
  if(btn){btn.textContent='Saving…';btn.disabled=true;}

  try{
    // Process text knowledge
    if(text){
      const tagLabel=tags.length?'['+tags.join(', ')+'] ':'';
      mem.learnings.push(tagLabel+text.substring(0,500));
      // Update specific memory fields based on tags
      if(tags.includes('Brand Voice'))mem.brandVoice=text.substring(0,300);
      if(tags.includes('Target Audience'))mem.targetAudience=text.substring(0,300);
      if(tags.includes('Visual Style'))mem.visualStyle=text.substring(0,300);
    }

    // Process links
    if(links){
      const urls=links.split('\n').map(l=>l.trim()).filter(l=>l.startsWith('http'));
      if(urls.length)mem.learnings.push('[Reference Links] '+urls.join(' | '));
      if(!mem.referenceLinks)mem.referenceLinks=[];
      mem.referenceLinks.push(...urls);
    }

    // Process file
    if(file){
      const fileText=await new Promise((res,rej)=>{const r=new FileReader();r.onload=e=>res(e.target.result);r.onerror=rej;r.readAsText(file);});
      const tagLabel=tags.length?'['+tags.join(', ')+'] ':'';
      try{
        const summary=await callClaude('Extract key brand/market knowledge from this document. Be concise.','File: "'+file.name+'"\n\n'+fileText.substring(0,4000),400);
        mem.uploadedSkills.push({name:file.name,summary,tags,addedAt:new Date().toISOString()});
        mem.learnings.push(tagLabel+'[From '+file.name+'] '+summary.substring(0,300));
      }catch(e){
        mem.uploadedSkills.push({name:file.name,summary:fileText.substring(0,300),tags,addedAt:new Date().toISOString()});
        mem.learnings.push(tagLabel+'[From '+file.name+'] '+fileText.substring(0,200));
      }
    }

    DB.savePMMemory(pmId,clientId,mem);
    closeModal();
    toast('✦ PM knowledge updated — your PM is now smarter!','ok');
    render();
  }catch(e){
    toast('Error saving: '+e.message,'err');
    if(btn){btn.textContent='✦ Update PM Knowledge';btn.disabled=false;}
  }
}


// ── ADMIN PM CHAT VIEW ─────────────────────────────────────────
function adminChangePM(clientId){
  const client=DB.getUser(clientId);
  if(!client)return;
  const pms=DB.getPMs();
  openModal(`
    <div class="modal-title">↔ Change AI PM — ${esc(client.name)}</div>
    <div style="font-size:11px;color:var(--t4);margin-bottom:14px">Select a new AI PM for this client. Their chat history will be preserved.</div>
    <div style="display:flex;flex-direction:column;gap:8px;max-height:340px;overflow-y:auto;margin-bottom:16px">
      ${pms.map(pm=>`<div onclick="document.querySelectorAll('.pm-select-card').forEach(c=>{c.style.borderColor='var(--b1)';c.style.background='var(--bg2)'});this.style.borderColor='var(--gold)';this.style.background='rgba(196,157,58,0.08)';document.getElementById('admin-pm-select').value='${pm.id}'" class="pm-select-card" style="display:flex;align-items:center;gap:12px;background:var(--bg2);border:1px solid ${client.assignedPmId===pm.id?'var(--gold)':'var(--b1)'};border-radius:8px;padding:12px;cursor:pointer;transition:all 0.15s">
        <div style="width:40px;height:40px;border-radius:10px;background:linear-gradient(135deg,var(--gold),var(--orange));display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;color:#000;flex-shrink:0">${pm.name[0].toUpperCase()}</div>
        <div style="flex:1">
          <div style="font-size:12px;font-weight:700;color:var(--t1)">${esc(pm.name)}</div>
          <div style="font-size:10px;color:var(--cyan)">${esc(pm.domain)}</div>
          <div style="font-size:9px;color:var(--t4);margin-top:2px">${esc(pm.bio?.substring(0,60)||'')}${pm.bio?.length>60?'…':''}</div>
        </div>
        ${client.assignedPmId===pm.id?'<span style="font-size:9px;color:var(--gold);font-weight:700">Current</span>':''}
      </div>`).join('')}
      ${!pms.length?'<div style="color:var(--t4);font-size:11px;text-align:center;padding:20px">No PMs available</div>':''}
    </div>
    <input type="hidden" id="admin-pm-select" value="${client.assignedPmId||''}">
    <div class="btn-row">
      <button class="btn btn-gold" onclick="saveAdminPMChange('${clientId}')">Save Change</button>
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
    </div>
  `);
}

function saveAdminPMChange(clientId){
  const pmId=document.getElementById('admin-pm-select')?.value;
  if(!pmId){toast('Select a PM first','err');return;}
  const client=DB.getUser(clientId);
  const pm=DB.getPM(pmId);
  if(!client||!pm)return;
  client.assignedPmId=pmId;
  DB.saveUser(client);
  // Notify client
  pushNotif(clientId,'system','Your AI PM has been updated',pm.name+' is now your dedicated AI Project Manager.');
  closeModal();render();
  toast(pm.name+' assigned to '+client.name,'ok');
}


function adminViewClientChat(clientId){
  S.adminChatClientId=clientId;
  if(!S.adminChatTarget)S.adminChatTarget='pm';
  const user=DB.getUser(clientId);
  const pm=user&&user.assignedPmId?DB.getPM(user.assignedPmId):null;
  const clientProjs=DB.getProjects().filter(function(p){return p.clientId===clientId&&p.assignedCreatorId;});
  const creatorIds=[...new Set(clientProjs.map(function(p){return p.assignedCreatorId;}))]
  const creators=creatorIds.map(function(id){return DB.getUser(id);}).filter(Boolean);
  const isPM=S.adminChatTarget==='pm';
  openModal(
    '<div style="min-width:500px;max-width:620px">'
    +'<div style="font-size:14px;font-weight:800;margin-bottom:10px;color:var(--t1)">Communication Hub &mdash; '+esc(user&&user.name?user.name:'Client')+'</div>'
    +'<div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap">'
    +(pm?'<button onclick="S.adminChatTarget=\'pm\';closeModal();adminViewClientChat(\''+clientId+'\')" class="btn btn-sm '+(isPM?'btn-gold':'btn-ghost')+'">PM Chat</button>':'')
    +creators.map(function(cr){var isActive=S.adminChatTarget==='creator_'+cr.id;return '<button onclick="S.adminChatTarget=\'creator_'+cr.id+'\';closeModal();adminViewClientChat(\''+clientId+'\')" class="btn btn-sm '+(isActive?'btn-gold':'btn-ghost')+'">'+esc(cr.name)+'</button>';}).join('')
    +'</div>'
    +(isPM&&pm?adminChatThreadHTML(clientId,pm):'<div style="color:var(--t4);font-size:11px;padding:12px">Select a channel above to view messages.</div>')
    +(isPM&&pm?'<div style="display:flex;gap:8px;margin-top:10px"><textarea id="admin-chat-input" rows="2" placeholder="Send as '+esc(pm.name)+'..." style="flex:1;background:var(--bg3);border:1px solid var(--b2);color:var(--t1);padding:8px 12px;border-radius:6px;font-size:11px;resize:none"></textarea><button class="btn btn-gold" onclick="adminSendAsPM(\''+clientId+'\',\''+pm.id+'\')" >Send</button></div>':'')
    +'<button class="btn btn-ghost" style="width:100%;margin-top:10px" onclick="closeModal()">Close</button>'
    +'</div>'
  );
}
function adminChatThreadHTML(clientId,pm){
  const chats=DB.getPMChats(clientId).sort((a,b)=>new Date(a.ts)-new Date(b.ts));
  if(!chats.length)return`<div style="text-align:center;color:var(--t4);font-size:11px;padding:24px">No messages yet.</div>`;
  return`<div style="height:260px;overflow-y:auto;background:var(--bg3);border:1px solid var(--b1);border-radius:10px;padding:12px;display:flex;flex-direction:column;gap:7px">
    ${chats.map(m=>{const isClient=m.role==='client';return`<div style="display:flex;${isClient?'justify-content:flex-end':''}">
      <div style="max-width:75%;background:${isClient?'rgba(196,157,58,0.12)':'var(--bg2)'};border:1px solid ${isClient?'rgba(196,157,58,0.25)':'var(--b2)'};border-radius:${isClient?'12px 12px 2px 12px':'12px 12px 12px 2px'};padding:8px 12px">
        <div style="font-size:9px;font-weight:700;color:${isClient?'var(--gold)':'var(--cyan)'};margin-bottom:2px">${isClient?'CLIENT':'PM'}</div>
        <div style="font-size:11px;color:var(--t1);line-height:1.5">${esc(m.text)}</div>
        <div style="font-size:8px;color:var(--t4);margin-top:3px;text-align:right">${new Date(m.ts).toLocaleString([],{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'})}</div>
      </div></div>`;}).join('')}
  </div>`;
}

async function adminSendAsPM(clientId,pmId){
  const input=document.getElementById('admin-chat-input');
  const text=input?.value?.trim();if(!text)return;
  const pm=DB.getPM(pmId);
  DB.savePMChat({id:gid('msg'),clientId,pmId,role:'pm',text,ts:new Date().toISOString(),sentByAdmin:true});
  pushNotif(clientId,'pm_message','Message from '+(pm?.name||'PM'),'Your PM sent you a message.');
  input.value='';toast('Sent as '+(pm?.name||'PM'),'ok');
  closeModal();adminViewClientChat(clientId);
}


let _pmChatMode='message';
function setPMChatMode(mode){
  _pmChatMode=mode;
  const hint=document.getElementById('pm-chat-project-hint');
  if(hint)hint.style.display=mode==='project'?'block':'none';
  const input=document.getElementById('pm-chat-input');
  if(input)input.placeholder=mode==='project'?'Describe your project idea — the PM will create a draft for your approval…':'Type a message…';
}

async function sendPMChatMessage(pmId,clientId){
  const input=document.getElementById('pm-chat-input');
  const text=input?.value?.trim();
  if(!text)return;
  const pm=DB.getPM(pmId);
  const user=DB.getUser(clientId);
  if(!pm||!user)return;
  input.value='';

  // Save client message
  DB.savePMChat({id:gid('msg'),clientId,pmId,role:'client',text,ts:new Date().toISOString(),type:_pmChatMode==='project'?'project_request':'message'});
  // Notify admin
  pushToRole('admin','chat','Client messaged PM: '+(user.name||'')+' → '+(pm.name||''),text.substring(0,120),null);

  if(_pmChatMode==='project'){
    // PM creates project draft
    render();
    try{
      const r=await callClaude(
        `You are ${pm.name}, an AI Project Manager specialising in ${pm.domain}. A client has described a project idea in chat. Create a project draft.`,
        `Client message: "${text}"

Client: ${user.name}
Brand: ${user.name}

Return ONLY valid JSON:
{"name":"Project name","type":"commercial_ad|social_media|brand_film|testimonial|live_action","brief":"2-3 sentence brief","tone":"mood/tone","duration":"e.g. 30 seconds","platform":"where it runs"}`,
        800
      );
      let draft=null;
      try{const clean=r.replace(/\`\`\`json|\`\`\`/g,'').trim();draft=JSON.parse(clean);}catch(e){draft={name:text.substring(0,50),type:'commercial_ad',brief:text};}
      const msgId=gid('msg');
      DB.savePMChat({id:msgId,clientId,pmId,role:'pm',text:`I've created a project draft based on your idea. Please review and approve it to get started.`,ts:new Date().toISOString(),type:'project_draft',projectDraft:draft,approved:false});
      // Update PM memory
      const mem=DB.getPMMemory(pmId,clientId);
      if(!mem.projects)mem.projects=[];
      mem.projects.push({request:text,draftName:draft?.name,ts:new Date().toISOString(),status:'pending_approval'});
      DB.savePMMemory(pmId,clientId,mem);
    }catch(e){
      DB.savePMChat({id:gid('msg'),clientId,pmId,role:'pm',text:`I'd be happy to help with that project. Could you share a few more details — target audience, key message, and where it will run?`,ts:new Date().toISOString()});
    }
  } else {
    // Regular PM response
    try{
      const mem=DB.getPMMemory(pmId,clientId);
      const recentChats=DB.getPMChats(clientId).slice(-6).map(c=>`${c.role==='client'?'Client':'PM'}: ${c.text}`).join('\n');
      const clientProjects=DB.getProjects().filter(p=>p.clientId===clientId);
      const projList=clientProjects.map(p=>p.name+' ['+p.workflowStatus+']').join(', ');
      const clarityRule=clientProjects.length>1?'\n\nIf the client mentions a project without naming it clearly, ask which project they mean before proceeding.':'';

      const r=await callClaude(
        `${pm.skillDoc||('You are '+pm.name+', an AI Project Manager specialising in '+pm.domain+'. You know this brand well. Keep responses concise, professional, and helpful.')}${mem.brandNotes?'\n\nBrand notes: '+mem.brandNotes:''}`,
        `Recent conversation:\n${recentChats}\n\nClient: ${text}`,
        300
      );
      DB.savePMChat({id:gid('msg'),clientId,pmId,role:'pm',text:r.trim(),ts:new Date().toISOString()});
    }catch(e){
      DB.savePMChat({id:gid('msg'),clientId,pmId,role:'pm',text:`Thanks for your message. I'll look into this and get back to you shortly.`,ts:new Date().toISOString()});
    }
  }
  // Notify creator on urgent client messages
  const _cProjs=DB.getProjects().filter(pp=>pp.clientId===clientId&&pp.assignedCreatorId);
  const _urgentWords=['urgent','asap','deadline','change','feedback','problem','issue','delay','stuck','blocked','cancel','approve'];
  const _isUrgent=_urgentWords.some(function(w){return text.toLowerCase().includes(w);});
  if(_isUrgent&&_cProjs.length===1){
    pushNotif(_cProjs[0].assignedCreatorId,'chat','PM Alert: '+esc(user.name)+' re: '+esc(_cProjs[0].name),text.substring(0,100),_cProjs[0].id);
  } else if(_isUrgent&&_cProjs.length>1){
    _cProjs.forEach(function(pp){if(pp.assignedCreatorId)pushNotif(pp.assignedCreatorId,'chat','Client via PM: '+esc(user.name),text.substring(0,80),pp.id);});
  }
  render();
  // Scroll chat to bottom
  setTimeout(()=>{const el=document.getElementById('pm-chat-thread');if(el)el.scrollTop=el.scrollHeight;},100);
}

function approveProjectFromChat(msgId){
  const msg=_pmChats.find(m=>m.id===msgId);
  if(!msg||!msg.projectDraft)return;
  msg.approved=true;
  _tryLS(()=>localStorage.setItem('sv2_pmchats',JSON.stringify(_pmChats)));
  // Create actual project
  const user=DB.getUser(msg.clientId);
  const draft=msg.projectDraft;
  const p={
    id:gid('p'),
    name:draft.name||'New Project',
    type:draft.type||'commercial_ad',
    clientId:msg.clientId,
    workflowStatus:'new',
    createdAt:new Date().toISOString(),
    updatedAt:new Date().toISOString(),
    createdViaChat:true,
    approvedByChatMsg:msgId
  };
  if(draft.brief)p.brief_summary=draft.brief;
  DB.saveProject(p);
  // Update PM memory
  const mem=DB.getPMMemory(msg.pmId,msg.clientId);
  const proj=mem.projects?.find(x=>x.draftName===draft.name);
  if(proj)proj.status='approved';
  DB.savePMMemory(msg.pmId,msg.clientId,mem);
  render();
  toast('Project approved and created! ✓','ok');
}

function rejectProjectFromChat(msgId){
  const msg=_pmChats.find(m=>m.id===msgId);
  if(!msg)return;
  msg.approved='rejected';
  _tryLS(()=>localStorage.setItem('sv2_pmchats',JSON.stringify(_pmChats)));
  DB.savePMChat({id:gid('msg'),clientId:msg.clientId,pmId:msg.pmId,role:'pm',text:`No problem — let me know how you'd like to adjust the project idea and I'll create a new draft.`,ts:new Date().toISOString()});
  render();
  toast('Project rejected. PM notified.','ok');
}

function changePMConfirm(clientId){
  openModal(`<div style="max-width:360px;text-align:center;padding:8px">
    <div style="font-size:32px;margin-bottom:12px">⇔</div>
    <div style="font-size:15px;font-weight:800;color:var(--t1);margin-bottom:8px">Change AI PM?</div>
    <div style="font-size:12px;color:var(--t3);line-height:1.6;margin-bottom:20px">The new PM takes over from the <strong style="color:var(--gold)">next project</strong> onwards. Chat history and brand notes are preserved.</div>
    <div style="display:flex;gap:8px;justify-content:center">
      <button class="btn btn-gold" onclick="closeModal();assignPMToClient('${clientId}')">Select New PM</button>
      <button class="btn btn-ghost" onclick="closeModal()">Keep Current PM</button>
    </div>
  </div>`);
}
function viewPMMemory(pmId,clientId){
  const mem=DB.getPMMemory(pmId,clientId);
  openModal(`<div style="min-width:380px">
    <div style="font-size:14px;font-weight:800;margin-bottom:14px;color:var(--t1)">🧠 PM Brand Memory</div>
    <div style="font-size:10px;font-weight:700;color:var(--t4);letter-spacing:0.06em;margin-bottom:6px">PROJECTS TOGETHER</div>
    ${mem.projects?.length?mem.projects.map(p=>`<div style="background:var(--bg3);border:1px solid var(--b2);border-radius:5px;padding:7px 10px;margin-bottom:5px;font-size:10px;color:var(--t2)">${esc(p.draftName||p.request||'Project')} <span style="color:var(--t4);float:right">${p.status||''}</span></div>`).join(''):`<div style="color:var(--t4);font-size:10px;padding:8px">No projects yet</div>`}
    <div style="font-size:10px;font-weight:700;color:var(--t4);letter-spacing:0.06em;margin-top:12px;margin-bottom:6px">LEARNINGS & BRAND NOTES</div>
    <textarea id="pm-brand-notes" rows="4" placeholder="PM's notes about this brand, preferences, challenges overcome…" style="width:100%;background:var(--bg3);border:1px solid var(--b2);color:var(--t1);padding:8px;border-radius:5px;font-size:10px;resize:vertical;box-sizing:border-box">${esc(mem.brandNotes||'')}</textarea>
    <div style="display:flex;gap:8px;margin-top:12px">
      <button class="btn btn-gold" style="flex:1" onclick="savePMBrandNotes('${pmId}','${clientId}')">Save Notes</button>
      <button class="btn btn-ghost" onclick="closeModal()">Close</button>
    </div>
  </div>`);
}

function savePMBrandNotes(pmId,clientId){
  const notes=document.getElementById('pm-brand-notes')?.value||'';
  const mem=DB.getPMMemory(pmId,clientId);
  mem.brandNotes=notes;
  DB.savePMMemory(pmId,clientId,mem);
  closeModal();
  toast('Brand notes saved to PM memory','ok');
}


// ── QUICK GENERATE — MULTI-MODE ────────────────────────────────
function studioShell(content, activeSection){
  const tabs=[
    {k:'image',lbl:'Image',ico:'&#9672;',desc:'Generate & Edit',accent:'#FF6B35'},
    {k:'video',lbl:'Video',ico:'&#127916;',desc:'T2V & I2V',accent:'#8B5CF6'},
    {k:'motion',lbl:'Motion',ico:'&#9889;',desc:'Effects & Animate',accent:'#F59E0B'},
    {k:'threed',lbl:'3D',ico:'&#11096;',desc:'Models & Texture',accent:'#06B6D4'},
    {k:'sound',lbl:'Sound',ico:'&#127925;',desc:'Voice, SFX, Music',accent:'#10B981'},
  ];
  const mode=S.qgMode||'txt2img';
  const activeSect=activeSection||(mode==='video'?'video':mode==='sound'?'sound':mode==='motion'?'motion':mode==='threed'?'threed':'image');
  return`<div style="padding:0;max-width:100%">
<div style="background:rgba(10,10,18,0.95);border-bottom:1px solid rgba(255,255,255,0.06);padding:16px 24px 0;position:sticky;top:0;z-index:10;backdrop-filter:blur(12px)">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
    <div style="display:flex;align-items:center;gap:10px">
      <div style="font-size:16px;font-weight:800;background:linear-gradient(135deg,#FF6B35,#8B5CF6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:-0.02em">✦ AI Studio</div>
      <div style="width:6px;height:6px;border-radius:50%;background:#10B981;box-shadow:0 0 8px #10B981;animation:pulse 2s ease-in-out infinite"></div>
      <span style="font-size:10px;color:#6B6B8A">Ready</span>
    </div>
    <div style="font-size:9px;color:#3a3a55">fal.ai · ElevenLabs · Claude</div>
  </div>
  <div style="display:flex;gap:2px;overflow-x:auto;padding-bottom:0">
    ${tabs.map(t=>{
      const isAct=activeSect===t.k;
      const bg=isAct?t.accent+'18':'transparent';
      return`<button onclick="S.qgMode='${t.k==='image'?'txt2img':t.k}';render()" onmouseenter="if(!${isAct})this.style.background='rgba(255,255,255,0.04)'" onmouseleave="this.style.background='${bg}'" style="display:flex;align-items:center;gap:7px;padding:10px 18px;border:none;border-bottom:2px solid ${isAct?t.accent:'transparent'};background:${bg};cursor:pointer;white-space:nowrap;transition:all 0.15s;border-radius:0">
        <span style="font-size:15px">${t.ico}</span>
        <div style="text-align:left">
          <div style="font-size:11px;font-weight:700;color:${isAct?t.accent:'#6B6B8A'};transition:color 0.15s">${t.lbl}</div>
          <div style="font-size:9px;color:${isAct?t.accent+'99':'#3a3a55'}">${t.desc}</div>
        </div>
      </button>`;
    }).join('')}
  </div>
</div>
<div style="padding:20px 24px">${content}</div>
</div>`;
}

function singleImageGen(){
  const mode=S.qgMode||'txt2img';
  const models=IMG_MODELS.filter(m=>!m.tags.includes('img2img'));
  const i2iModels=IMG_MODELS.filter(m=>m.tags.includes('img2img'));
  const selModel=S.singleGenModel||models[0].id;
  const selI2IModel=S.i2iModel||i2iModels[0]?.id||'fal-ai/flux-pro/kontext';
  if(mode==='video')return studioShell(videoGenPage(),'video');
  if(mode==='sound')return studioShell(soundGenPage(),'sound');
  if(mode==='motion')return studioShell(motionGenPage(),'motion');
  if(mode==='threed')return studioShell(threeDGenPage(),'threed');
  // Image sub-nav
  const imgSubTab=(k,lbl,ico)=>`<button onclick="S.qgMode='${k}';render()" style="display:flex;align-items:center;gap:5px;padding:6px 14px;border-radius:8px;font-size:11px;font-weight:600;cursor:pointer;border:1px solid ${mode===k?'rgba(255,107,53,0.4)':'rgba(255,255,255,0.06)'};background:${mode===k?'rgba(255,107,53,0.1)':'rgba(255,255,255,0.02)'};color:${mode===k?'#FF6B35':'#6B6B8A'};transition:all 0.15s">${ico} ${lbl}</button>`;
  const imgContent=`<div>
<div style="display:flex;gap:6px;margin-bottom:20px">
  ${imgSubTab('txt2img','Text to Image','&#128196;')}
  ${imgSubTab('img2img','Image to Image','&#128247;')}
  ${imgSubTab('styleref','Style Reference','&#127912;')}
</div>
<div style="display:grid;grid-template-columns:1fr 320px;gap:20px;align-items:start">
<div>
<div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:20px;margin-bottom:14px">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
<label style="font-size:10px;font-weight:700;color:#6B6B8A;letter-spacing:0.08em;text-transform:uppercase">Prompt</label>
<button onclick="enhancePromptQG()" id="enhance-btn" style="background:rgba(139,92,246,0.12);border:1px solid rgba(139,92,246,0.3);border-radius:6px;color:#8B5CF6;font-size:9px;font-weight:700;padding:3px 10px;cursor:pointer;letter-spacing:0.04em">✦ Enhance</button>
</div>
<textarea id="sg-prompt" rows="4" placeholder="Describe what you want to generate — subject, lighting, mood, camera angle, style..." oninput="S.sgPrompt=this.value;_tryLS(()=>localStorage.setItem('sv2_sg_prompt',this.value))" onkeydown="if((event.metaKey||event.ctrlKey)&&event.key==='Enter'){event.preventDefault();runSingleGen();}" style="width:100%;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:8px;color:#C8C8E0;padding:10px;font-size:12px;resize:vertical;box-sizing:border-box;font-family:inherit;line-height:1.5">${S.sgPrompt||''}</textarea>
<div style="font-size:9px;color:#3a3a55;margin-top:4px;text-align:right">&#8984;+Enter to generate</div>
<div id="enhance-status" style="font-size:9px;color:#8B5CF6;margin-top:4px;display:none">✦ Enhancing with AI...</div>
</div>
${mode==='img2img'?`<div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:16px;margin-bottom:14px">
<label style="font-size:10px;font-weight:700;color:#6B6B8A;letter-spacing:0.08em;text-transform:uppercase;display:block;margin-bottom:10px">Source Image</label>
<div onclick="document.getElementById('i2i-file').click()" style="border:2px dashed rgba(255,255,255,0.08);border-radius:10px;padding:${S.i2iPreview?'10px':'24px'};text-align:center;cursor:pointer;transition:all 0.15s" onmouseenter="this.style.borderColor='rgba(255,107,53,0.4)'" onmouseleave="this.style.borderColor='rgba(255,255,255,0.08)'">
  ${S.i2iPreview?`<img src="${S.i2iPreview}" style="max-height:120px;max-width:100%;border-radius:6px;margin-bottom:6px"><div style="font-size:9px;color:#6B6B8A">Click to change</div>`:`<div style="font-size:28px;margin-bottom:8px;opacity:0.4">&#128247;</div><div style="font-size:11px;color:#6B6B8A;font-weight:600">Drop or click to upload</div>`}
</div>
<input type="file" id="i2i-file" accept="image/*" style="display:none" onchange="loadI2IImage(this)">
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px">
<div class="fg"><label>Model</label><select id="sg-model" style="background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.08)">${i2iModels.map(m=>`<option value="${m.id}"${selI2IModel===m.id?' selected':''}>${m.n}</option>`).join('')}</select></div>
<div class="fg"><label>Strength</label><select id="i2i-strength" style="background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.08)"><option value="0.3">0.3 — Subtle</option><option value="0.5" selected>0.5 — Balanced</option><option value="0.7">0.7 — Strong</option><option value="0.9">0.9 — Major</option></select></div>
</div></div>`:''}
${mode==='styleref'?`<div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:16px;margin-bottom:14px">
<label style="font-size:10px;font-weight:700;color:#6B6B8A;letter-spacing:0.08em;text-transform:uppercase;display:block;margin-bottom:10px">Style Reference</label>
<div onclick="document.getElementById('ref-style-file').click()" style="border:2px dashed rgba(255,255,255,0.08);border-radius:10px;padding:${S.styleRefPreview?'10px':'24px'};text-align:center;cursor:pointer;transition:all 0.15s" onmouseenter="this.style.borderColor='rgba(6,182,212,0.4)'" onmouseleave="this.style.borderColor='rgba(255,255,255,0.08)'">
  ${S.styleRefPreview?`<img src="${S.styleRefPreview}" style="max-height:120px;max-width:100%;border-radius:6px;margin-bottom:6px"><div style="font-size:9px;color:#6B6B8A">Click to change</div>`:`<div style="font-size:28px;margin-bottom:8px;opacity:0.4">&#127912;</div><div style="font-size:11px;color:#6B6B8A;font-weight:600">Upload style reference image</div>`}
</div>
<input type="file" id="ref-style-file" accept="image/*" style="display:none" onchange="loadStyleRef(this)">
</div>`:''}
<div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:16px;margin-bottom:14px">
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
${mode!=='img2img'?`<div class="fg"><label>Model</label><select id="sg-model" onchange="S.singleGenModel=this.value" style="background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.08)">${models.map(m=>`<option value="${m.id}"${selModel===m.id?' selected':''}>${m.n}</option>`).join('')}</select></div>`:''}
<div class="fg"><label>Aspect Ratio</label><select id="sg-ratio" style="background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.08)"><option value="1:1">1:1 Square</option><option value="9:16">9:16 Portrait</option><option value="16:9" selected>16:9 Landscape</option><option value="4:5">4:5 Instagram</option><option value="21:9">21:9 Cinematic</option><option value="3:2">3:2 Photo</option><option value="21:9">21:9 Cinematic</option></select></div>
<div class="fg"><label>Style</label><select id="sg-style" style="background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.08)">${IMG_TONES.map(t=>`<option value="${t}">${t}</option>`).join('')}</select></div>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">
<div class="fg"><label>Quality</label><select id="sg-quality" style="background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.08)"><option value="standard">Standard</option><option value="hd" selected>HD</option><option value="ultra">Ultra HD</option></select></div>
<div class="fg"><label>Output Count</label><select id="sg-count" style="background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.08)"><option value="1" selected>1 image</option><option value="2">2 images</option><option value="4">4 images</option></select></div>
</div
>
</div>
</div>
<div style="margin-bottom:10px">
<label style="font-size:9px;font-weight:700;color:#6B6B8A;letter-spacing:0.08em;text-transform:uppercase;display:block;margin-bottom:5px">Negative Prompt <span style="font-weight:400;color:#3a3a55">— what to avoid</span></label>
<input type="text" id="sg-neg-prompt" placeholder="blur, watermark, distorted, overexposed..." style="width:100%;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:7px;color:#C8C8E0;padding:7px 10px;font-size:11px;box-sizing:border-box">
</div>
<div style="display:flex;gap:8px">
<button style="flex:1;padding:12px;border-radius:10px;border:none;background:linear-gradient(135deg,#FF6B35,#8B5CF6);color:#fff;font-size:14px;font-weight:700;cursor:pointer;letter-spacing:0.02em;transition:opacity 0.2s" id="sg-btn" onclick="runSingleGen()" onmouseenter="this.style.opacity='0.85'" onmouseleave="this.style.opacity='1'">✦ Generate</button>
<button style="padding:12px 16px;border-radius:10px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.03);color:#6B6B8A;font-size:12px;font-weight:700;cursor:pointer" onclick="runSingleGen(4)">4×</button>
</div>
</div>
<!-- Results panel -->
<div>
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
<div style="font-size:10px;font-weight:700;color:#6B6B8A;text-transform:uppercase;letter-spacing:0.08em">Generated ${(S.sgResults&&S.sgResults.length)?'<span style="color:#FF6B35;font-weight:600;text-transform:none">'+S.sgResults.length+'</span>':''}</div>
${(S.sgResults&&S.sgResults.length)?`<button onclick="S.sgResults=[];_tryLS(()=>localStorage.removeItem('sv2_sg_history'));render()" style="font-size:9px;color:#3a3a55;background:none;border:none;cursor:pointer;padding:2px 6px;border-radius:4px" onmouseenter="this.style.color='#EF4444'" onmouseleave="this.style.color='#3a3a55'">Clear all</button>`:''}
</div>
<div style="display:flex;flex-direction:column;gap:10px">
${(S.sgResults||[]).map(r=>`<div draggable="true" ondragstart="event.dataTransfer.setData('text/plain','${r.id}');this.style.opacity='0.5'" ondragend="this.style.opacity='1'" ondragover="event.preventDefault();this.style.borderColor='#FF6B35'" ondragleave="this.style.borderColor='rgba(255,255,255,0.06)'" ondrop="event.preventDefault();reorderSgResult('${r.id}',event.dataTransfer.getData('text/plain'));this.style.borderColor='rgba(255,255,255,0.06)'" style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:10px;overflow:hidden;transition:border-color 0.15s,opacity 0.15s;cursor:grab" onmouseenter="this.style.borderColor='rgba(255,107,53,0.3)'" onmouseleave="this.style.borderColor='rgba(255,255,255,0.06)'">
<img src="${r.url}" onclick="openImgModal('Generated','${r.url}','${r.prompt||''}'.substring(0,120))" style="width:100%;display:block;border-radius:8px 8px 0 0;cursor:zoom-in" onerror="this.style.display='none'" title="Click to view full size">
<div style="padding:8px 10px;display:flex;gap:6px">
<div style="font-size:8px;color:#3a3a55;padding:4px 10px 0">${r.model||''} · ${r.ts?new Date(r.ts).toLocaleTimeString():''}</div>
<a href="${r.url}" download style="flex:1;text-align:center;font-size:10px;padding:6px;border-radius:6px;border:1px solid rgba(255,255,255,0.08);color:#6B6B8A;text-decoration:none;background:transparent">↓ Download</a>
<button style="font-size:10px;padding:6px 10px;border-radius:6px;border:1px solid rgba(255,255,255,0.08);color:#6B6B8A;background:transparent;cursor:pointer" onclick="openInCanva('${r.url}')">Canva →</button>
<button style="font-size:10px;padding:6px 10px;border-radius:6px;border:1px solid rgba(139,92,246,0.3);color:#8B5CF6;background:rgba(139,92,246,0.06);cursor:pointer" onclick="S.vqgSrcUrl='${r.url}';S.vqgSrcPreview='${r.url}';S.qgMode='video';render()">→ Video</button>
</div>
</div>`).join('')}
${!(S.sgResults&&S.sgResults.length)?`<div style="border:1px dashed rgba(255,255,255,0.06);border-radius:10px;padding:32px;text-align:center;color:#3a3a55"><div style="font-size:28px;margin-bottom:8px;opacity:0.3">&#9672;</div>Images appear here</div>`:''}
</div>
</div>
</div>
</div>`;
  return studioShell(imgContent, 'image');
}
function loadI2IImage(input){const file=input.files[0];if(!file)return;const reader=new FileReader();reader.onload=e=>{S.i2iPreview=e.target.result;S.i2iImageData=e.target.result;render();};reader.readAsDataURL(file);}
function loadStyleRef(input){const file=input.files[0];if(!file)return;const reader=new FileReader();reader.onload=e=>{S.styleRefPreview=e.target.result;S.styleRefData=e.target.result;render();};reader.readAsDataURL(file);}

// ════════════════════════════════════════════════════════════
// VIDEO GENERATION PAGE — Auto / Cinema Mode
// ════════════════════════════════════════════════════════════
const QG_VID_MODELS=[
  {id:'fal-ai/kling-video/v2.1/master/text-to-video',n:'Kling 2.1 Master',mode:['t2v'],dur:[5,10],ratio:['16:9','9:16','1:1'],desc:'Premium cinematic T2V',cost:'~₹10 credits/5s'},
  {id:'fal-ai/kling-video/v2.1/master/image-to-video',n:'Kling 2.1 Master (I2V)',mode:['i2v'],dur:[5,10],ratio:['16:9','9:16','1:1'],desc:'Image to cinematic video',cost:'~₹10 credits/5s'},
  {id:'fal-ai/minimax/video-01-live',n:'Minimax Hailuo',mode:['t2v','i2v'],dur:[6],ratio:['16:9','9:16','1:1'],desc:'Fast, high quality',cost:'~$0.49/gen'},
  {id:'fal-ai/runway-gen4/turbo/image-to-video',n:'Runway Gen-4 Turbo',mode:['i2v'],dur:[5,10],ratio:['16:9','9:16'],desc:'Hollywood-grade I2V',cost:'~$0.05/s'},
  {id:'fal-ai/wan-2.1/text-to-video',n:'Wan 2.1 T2V',mode:['t2v'],dur:[5],ratio:['16:9','9:16','1:1'],desc:'Open source powerhouse',cost:'~$0.20/5s'},
  {id:'fal-ai/wan-2.1/image-to-video',n:'Wan 2.1 I2V',mode:['i2v'],dur:[5],ratio:['16:9','9:16','1:1'],desc:'Open source I2V',cost:'~$0.20/5s'},
  {id:'fal-ai/luma-dream-machine/ray-2-flash',n:'Luma Ray 2 Flash',mode:['t2v','i2v'],dur:[5,9],ratio:['16:9','9:16','1:1'],desc:'Fast, creative motion',cost:'~$0.30/5s'},
  {id:'fal-ai/veo3',n:'Google Veo 3',mode:['t2v'],dur:[8],ratio:['16:9'],desc:'State-of-art + native audio',cost:'~$0.75/gen'},
  {id:'fal-ai/cogvideox-5b',n:'CogVideoX 5B',mode:['t2v'],dur:[6],ratio:['16:9'],desc:'Open source quality',cost:'~$0.10/gen'},
];

const CIN={
  lens:['Auto','Anamorphic (2.39:1)','16mm Film','35mm Cine','50mm Standard','85mm Portrait','135mm Telephoto','Macro'],
  shot:['Auto','Wide Shot (WS)','Medium Shot (MS)','Close-Up (CU)','Extreme Close-Up (ECU)','Over-the-Shoulder','Point of View (POV)',"Bird's Eye View","Worm's Eye View",'Dutch Angle','Aerial/Drone'],
  angle:['Auto','Eye Level','Low Angle','High Angle','Dutch Tilt','Overhead','Ground Level'],
  move:['Static','Dolly In','Dolly Out','Dolly Left','Dolly Right','Pan Left','Pan Right','Tilt Up','Tilt Down','Crane Up','Crane Down','Orbit Left','Orbit Right','FPV Drone','Crash Zoom In','Crash Zoom Out','Whip Pan','Handheld','Bullet Time','Hyperlapse','Snorricam'],
  dof:['Auto','Deep Focus (everything sharp)','Shallow Depth (bokeh)','Rack Focus (shift)','Tilt-Shift'],
  style:['Cinematic','Anamorphic','VHS Tape','Super 8mm Film','Film Noir','IMAX','Handheld Documentary','Drone Aerial','Commercial Glossy'],
  light:['Auto','Golden Hour','Blue Hour/Dusk','Night / Neon','Natural Daylight','Studio Lit','Dramatic Chiaroscuro','Overcast','Candlelit'],
  fps:['24fps (Cinematic)','30fps (Standard)','48fps (HFR)','60fps (Smooth)'],
  time:['Normal','Ease In (slow start)','Ease Out (slow end)','Slow Motion 0.5×','Ultra Slow 0.25×','Hyperlapse 4×','Timelapse 10×'],
};

function assembleCinemaPrompt(basePrompt){
  const g=id=>document.getElementById(id)?.value||'';
  const parts=[basePrompt.trim()];
  const lens=g('cin-lens');if(lens&&lens!=='Auto')parts.push('Lens: '+lens);
  const shot=g('cin-shot');if(shot&&shot!=='Auto')parts.push(shot);
  const angle=g('cin-angle');if(angle&&angle!=='Auto')parts.push(angle);
  const m1=g('cin-move1'),m2=g('cin-move2'),m3=g('cin-move3');
  const moves=[m1,m2,m3].filter(m=>m&&m!=='Static'&&m!=='');
  if(moves.length)parts.push('Camera: '+moves.join(' + '));
  const dof=g('cin-dof');if(dof&&dof!=='Auto')parts.push(dof);
  const style=g('cin-style');if(style&&style!=='Cinematic')parts.push(style+' aesthetic');
  const light=g('cin-light');if(light&&light!=='Auto')parts.push('Lighting: '+light);
  const fps=g('cin-fps');if(fps&&fps!=='30fps (Standard)')parts.push(fps);
  const time=g('cin-time');if(time&&time!=='Normal')parts.push('Speed: '+time);
  return parts.join('. ').replace(/\.\./g,'.')+'.';
}

function updateCinemaPreview(){
  const base=document.getElementById('vid-prompt')?.value?.trim()||'';
  const preview=document.getElementById('cin-preview');
  if(preview)preview.value=assembleCinemaPrompt(base);
}

function videoGenPage(){
  const vMode=S.vqgMode||'t2v';
  const cinMode=S.vqgCinMode!==false; // true = Cinema, false = Auto
  const selModelId=S.vqgModel||(vMode==='i2v'?QG_VID_MODELS.find(m=>m.mode.includes('i2v'))?.id:QG_VID_MODELS[0].id);
  const selModel=QG_VID_MODELS.find(m=>m.id===selModelId)||QG_VID_MODELS[0];
  const availModels=QG_VID_MODELS.filter(m=>m.mode.includes(vMode));
  const results=S.vqgResults||[];

  const subTab=(k,lbl)=>`<button onclick="S.vqgMode='${k}';S.vqgModel=null;render()" style="padding:5px 14px;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;border:1px solid ${vMode===k?'rgba(139,92,246,0.5)':'rgba(255,255,255,0.07)'};background:${vMode===k?'rgba(139,92,246,0.1)':'transparent'};color:${vMode===k?'#8B5CF6':'#6B6B8A'};transition:all 0.15s">${lbl}</button>`;

  // Build cinema selectors
  const sel=(id,opts,onchange)=>`<select id="${id}" onchange="${onchange||'updateCinemaPreview()'}" style="width:100%;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:7px;color:#C8C8E0;padding:7px 10px;font-size:11px;cursor:pointer">${opts.map(o=>`<option value="${o}">${o}</option>`).join('')}</select>`;

  return`<div style="max-width:1000px">
<!-- Sub mode tabs -->
<div style="display:flex;gap:6px;margin-bottom:20px;align-items:center;flex-wrap:wrap">
  <div style="display:flex;gap:5px">${subTab('t2v','Text \u2192 Video')}${subTab('i2v','Image \u2192 Video')}</div>
  <div style="flex:1"></div>
  <!-- Auto / Cinema toggle -->
  <div style="display:flex;align-items:center;gap:8px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:4px">
    <button onclick="S.vqgCinMode=false;render()" style="padding:5px 14px;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;border:none;background:${!cinMode?'rgba(255,107,53,0.15)':'transparent'};color:${!cinMode?'#FF6B35':'#6B6B8A'};transition:all 0.15s">Auto</button>
    <button onclick="S.vqgCinMode=true;render()" style="padding:5px 14px;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;border:none;background:${cinMode?'rgba(139,92,246,0.15)':'transparent'};color:${cinMode?'#8B5CF6':'#6B6B8A'};transition:all 0.15s">&#127916; Cinema</button>
  </div>
</div>

<div style="display:grid;grid-template-columns:1fr 320px;gap:18px;align-items:start">
<!-- LEFT: Controls -->
<div>
<!-- Scene prompt -->
<div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:18px;margin-bottom:14px">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
    <label style="font-size:10px;font-weight:700;color:#6B6B8A;letter-spacing:0.08em;text-transform:uppercase">Scene Description</label>
    ${!cinMode?`<button onclick="enhanceVidPrompt()" id="vid-enhance-btn" style="background:rgba(139,92,246,0.12);border:1px solid rgba(139,92,246,0.3);border-radius:6px;color:#8B5CF6;font-size:9px;font-weight:700;padding:3px 10px;cursor:pointer">&#10022; Enhance</button>`:`<span style="font-size:9px;color:#6B6B8A44;font-style:italic">Enhance disabled in Cinema mode</span>`}
  </div>
  <textarea id="vid-prompt" rows="3" placeholder="${cinMode?'Describe the subject, scene, action, environment...':'Describe the scene fully — subject, action, mood, lighting, environment...'}" oninput="S.vqgPrompt=this.value;_tryLS(()=>localStorage.setItem('sv2_vid_prompt',this.value));${cinMode?'updateCinemaPreview()':''}" style="width:100%;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:8px;color:#C8C8E0;padding:10px;font-size:12px;resize:vertical;box-sizing:border-box;font-family:inherit;line-height:1.5">${S.vqgPrompt||''}</textarea>
  ${!cinMode?`<div style="margin-top:8px;font-size:9px;color:#3a3a55">In Auto mode, AI freely interprets your prompt for the best cinematic result.</div>`:''}
</div>

<!-- I2V source image -->
${vMode==='i2v'?`<div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:16px;margin-bottom:14px">
  <label style="font-size:10px;font-weight:700;color:#6B6B8A;letter-spacing:0.08em;text-transform:uppercase;display:block;margin-bottom:10px">First Frame</label>
  <div onclick="document.getElementById('vid-src-file').click()" style="border:2px dashed rgba(255,255,255,0.08);border-radius:10px;padding:${S.vqgSrcPreview?'8px':'22px'};text-align:center;cursor:pointer;transition:border-color 0.15s" onmouseenter="this.style.borderColor='rgba(139,92,246,0.4)'" onmouseleave="this.style.borderColor='rgba(255,255,255,0.08)'">
    ${S.vqgSrcPreview?`<img src="${S.vqgSrcPreview}" style="max-height:120px;max-width:100%;border-radius:6px;margin-bottom:4px"><div style="font-size:9px;color:#6B6B8A">Click to change</div>`:`<div style="font-size:28px;margin-bottom:8px;opacity:0.3">&#127916;</div><div style="font-size:11px;color:#6B6B8A;font-weight:600">Upload first frame image</div>`}
  </div>
  <input type="file" id="vid-src-file" accept="image/*" style="display:none" onchange="loadVidSrcImage(this)">
  ${S.sgResults&&S.sgResults.length?`<div style="font-size:9px;color:#3a3a55;margin-top:8px;margin-bottom:5px">Or use generated image:</div><div style="display:flex;gap:5px;flex-wrap:wrap">${S.sgResults.slice(0,4).map(r=>`<img src="${r.url}" onclick="S.vqgSrcPreview='${r.url}';S.vqgSrcUrl='${r.url}';render()" style="width:50px;height:50px;object-fit:cover;border-radius:5px;cursor:pointer;border:2px solid ${S.vqgSrcUrl===r.url?'#8B5CF6':'rgba(255,255,255,0.08)'}">`).join('')}</div>`:''}
</div>`:''}

<!-- CINEMA MODE CONTROLS -->
${cinMode?`<div style="background:linear-gradient(135deg,rgba(139,92,246,0.06),rgba(6,182,212,0.04));border:1px solid rgba(139,92,246,0.2);border-radius:12px;padding:18px;margin-bottom:14px">
  <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px">
    <div style="width:6px;height:6px;border-radius:50%;background:#8B5CF6;box-shadow:0 0 8px #8B5CF6"></div>
    <span style="font-size:11px;font-weight:700;color:#8B5CF6;letter-spacing:0.08em;text-transform:uppercase">Cinema Controls</span>
    <span style="font-size:9px;color:#3a3a55;margin-left:4px">Director mode — set the virtual camera rig</span>
  </div>

  <!-- Row 1: Lens + Shot type + Angle -->
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:12px">
    <div><label style="font-size:9px;font-weight:700;color:#6B6B8A;letter-spacing:0.06em;text-transform:uppercase;display:block;margin-bottom:5px">Lens</label>${sel('cin-lens',CIN.lens)}</div>
    <div><label style="font-size:9px;font-weight:700;color:#6B6B8A;letter-spacing:0.06em;text-transform:uppercase;display:block;margin-bottom:5px" title="Framing — Wide for context, CU for emotion, ECU for extreme detail, OTS for dialogue">Shot Type &#9432;</label>${sel('cin-shot',CIN.shot)}</div>
    <div><label style="font-size:9px;font-weight:700;color:#6B6B8A;letter-spacing:0.06em;text-transform:uppercase;display:block;margin-bottom:5px" title="Camera angle — Low Angle = power, High Angle = vulnerability, Dutch = tension">Angle &#9432;</label>${sel('cin-angle',CIN.angle)}</div>
  </div>

  <!-- Row 2: Camera movements (stack up to 3) -->
  <div style="margin-bottom:12px">
    <label title="Stack up to 3 moves simultaneously — Dolly In + Orbit + FPV creates complex compound camera paths" style="font-size:9px;font-weight:700;color:#6B6B8A;letter-spacing:0.06em;text-transform:uppercase;display:block;margin-bottom:5px;cursor:help">Camera Movement &#9432; <span style="color:#3a3a55;font-weight:400">— stack up to 3 moves</span></label>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
      ${sel('cin-move1',CIN.move)}${sel('cin-move2',['—',...CIN.move])}${sel('cin-move3',['—',...CIN.move])}
    </div>
  </div>

  <!-- Row 3: DOF + Film style + Lighting -->
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:12px">
    <div><label style="font-size:9px;font-weight:700;color:#6B6B8A;letter-spacing:0.06em;text-transform:uppercase;display:block;margin-bottom:5px" title="Shallow = blurry background bokeh, Deep = everything sharp, Rack = focus shifts mid-shot">Depth of Field &#9432;</label>${sel('cin-dof',CIN.dof)}</div>
    <div><label style="font-size:9px;font-weight:700;color:#6B6B8A;letter-spacing:0.06em;text-transform:uppercase;display:block;margin-bottom:5px" title="Visual aesthetic — Anamorphic = cinematic widescreen, VHS = retro grain, Film Noir = high contrast">Film Style &#9432;</label>${sel('cin-style',CIN.style)}</div>
    <div><label style="font-size:9px;font-weight:700;color:#6B6B8A;letter-spacing:0.06em;text-transform:uppercase;display:block;margin-bottom:5px" title="Scene lighting — Golden Hour = warm, Blue Hour = cool/moody, Chiaroscuro = dramatic shadows">Lighting Mood &#9432;</label>${sel('cin-light',CIN.light)}</div>
  </div>

  <!-- Row 4: FPS + Time remapping -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">
    <div><label style="font-size:9px;font-weight:700;color:#6B6B8A;letter-spacing:0.06em;text-transform:uppercase;display:block;margin-bottom:5px" title="24fps = cinematic natural, 48fps = HFR crisp, 60fps = hyper-smooth sports/action">Frame Rate Feel &#9432;</label>${sel('cin-fps',CIN.fps)}</div>
    <div><label style="font-size:9px;font-weight:700;color:#6B6B8A;letter-spacing:0.06em;text-transform:uppercase;display:block;margin-bottom:5px" title="Speed: 0.5x = slow-mo, 0.25x = ultra slow, 4x = hyperlapse, 10x = timelapse">Time Remapping &#9432;</label>${sel('cin-time',CIN.time)}</div>
  </div>

  <!-- Assembled cinematic prompt (live preview) -->
  <div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
      <label style="font-size:9px;font-weight:700;color:#06B6D4;letter-spacing:0.06em;text-transform:uppercase">Assembled Cinematic Prompt <span style="color:#3a3a55;font-weight:400">— editable before generate</span></label>
      <button onclick="updateCinemaPreview()" style="background:rgba(6,182,212,0.1);border:1px solid rgba(6,182,212,0.3);border-radius:5px;color:#06B6D4;font-size:9px;padding:2px 8px;cursor:pointer">&#8635; Refresh</button>
    </div>
    <textarea id="cin-preview" rows="4" placeholder="Select controls above to build your cinematic prompt..." style="width:100%;background:rgba(6,182,212,0.04);border:1px solid rgba(6,182,212,0.2);border-radius:8px;color:#C8C8E0;padding:10px;font-size:11px;resize:vertical;box-sizing:border-box;font-family:monospace;line-height:1.5"></textarea>
    <div style="font-size:9px;color:#3a3a55;margin-top:4px">This exact text is sent to the model. You can edit it directly.</div>
  </div>
</div>`:''}

<!-- Negative prompt (both modes) -->
<div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:14px;margin-bottom:14px">
  <label style="font-size:9px;font-weight:700;color:#6B6B8A;letter-spacing:0.06em;text-transform:uppercase;display:block;margin-bottom:6px">Negative Prompt</label>
  <input type="text" id="vid-neg-prompt" value="${S.vqgNeg||'blur, distortion, watermark, bad quality'}" style="width:100%;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:7px;color:#C8C8E0;padding:7px 10px;font-size:11px;box-sizing:border-box">
</div>

<!-- Model + Duration + Ratio -->
<div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:14px;margin-bottom:14px">
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
    <div><label style="font-size:9px;font-weight:700;color:#6B6B8A;letter-spacing:0.06em;text-transform:uppercase;display:block;margin-bottom:5px">Model</label>
      <select id="vid-model" onchange="S.vqgModel=this.value;render()" style="width:100%;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:7px;color:#C8C8E0;padding:7px 10px;font-size:11px">
        ${availModels.map(m=>`<option value="${m.id}"${selModelId===m.id?' selected':''}>${m.n}</option>`).join('')}
      </select>
      <div style="display:flex;gap:6px;margin-top:3px;align-items:center"><span style="font-size:8px;color:#3a3a55">${selModel.desc||''}</span>${selModel.cost?`<span style="font-size:8px;color:#F59E0B;font-weight:600;background:rgba(245,158,11,0.1);padding:1px 5px;border-radius:3px">${selModel.cost}</span>`:''}</div>
    </div>
    <div><label style="font-size:9px;font-weight:700;color:#6B6B8A;letter-spacing:0.06em;text-transform:uppercase;display:block;margin-bottom:5px">Duration</label>
      <select id="vid-dur" style="width:100%;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:7px;color:#C8C8E0;padding:7px 10px;font-size:11px">
        ${(selModel.dur||[5]).map(d=>`<option value="${d}">${d}s</option>`).join('')}
      </select>
    </div>
    <div><label style="font-size:9px;font-weight:700;color:#6B6B8A;letter-spacing:0.06em;text-transform:uppercase;display:block;margin-bottom:5px">Aspect Ratio</label>
      <select id="vid-ratio" style="width:100%;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:7px;color:#C8C8E0;padding:7px 10px;font-size:11px">
        ${(selModel.ratio||['16:9']).map(r=>`<option value="${r}">${r}</option>`).join('')}
      </select>
    </div>
  </div>
</div>

<!-- Generate button -->
<button id="vid-gen-btn" onclick="runVideoGen()" style="width:100%;padding:14px;border-radius:10px;border:none;background:${cinMode?'linear-gradient(135deg,#8B5CF6,#06B6D4)':'linear-gradient(135deg,#FF6B35,#8B5CF6)'};color:#fff;font-size:14px;font-weight:700;cursor:pointer;letter-spacing:0.02em;transition:opacity 0.2s" onmouseenter="this.style.opacity='0.85'" onmouseleave="this.style.opacity='1'">
  ${cinMode?'&#127916; Direct &amp; Generate':'&#10022; Generate Video'}
</button>
<div id="vid-gen-status" style="font-size:9px;color:#6B6B8A;text-align:center;margin-top:8px;display:none">Generating... 30-120s depending on model</div>
</div>

<!-- RIGHT: Results -->
<div>
  <div style="font-size:10px;font-weight:700;color:#6B6B8A;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:12px">Generated Videos</div>
  <div style="display:flex;flex-direction:column;gap:10px">
    ${results.map(v=>`<div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:10px;overflow:hidden;transition:border-color 0.15s" onmouseenter="this.style.borderColor='rgba(139,92,246,0.3)'" onmouseleave="this.style.borderColor='rgba(255,255,255,0.07)'">
      <video src="${v.url}" controls style="width:100%;display:block;border-radius:8px 8px 0 0"></video>
      <div style="padding:8px 10px">
        <div style="font-size:9px;color:#6B6B8A;margin-bottom:6px">${v.model||''} &middot; ${v.dur||''}s &middot; ${v.mode||''} &middot; ${new Date(v.ts).toLocaleTimeString()}</div>
        ${v.cinPrompt?`<div style="font-size:9px;color:#8B5CF644;margin-bottom:6px;font-style:italic">${v.cinPrompt.substring(0,80)}...</div>`:''}
        <div style="display:flex;gap:6px">
          <a href="${v.url}" download style="flex:1;text-align:center;font-size:10px;padding:6px;border-radius:6px;border:1px solid rgba(255,255,255,0.08);color:#6B6B8A;text-decoration:none">&#8595; Download</a>
          <button style="font-size:10px;padding:6px 10px;border-radius:6px;border:1px solid rgba(139,92,246,0.3);color:#8B5CF6;background:rgba(139,92,246,0.06);cursor:pointer" onclick="S.vqgSrcUrl='${v.url}';S.vqgSrcPreview='${v.url}';S.vqgMode='i2v';render()">Extend &#8594;</button>
        </div>
      </div>
    </div>`).join('')}
    ${!results.length?`<div style="border:1px dashed rgba(255,255,255,0.06);border-radius:10px;padding:32px;text-align:center;color:#3a3a55"><div style="font-size:32px;margin-bottom:10px;opacity:0.4">&#127916;</div><div style="font-size:11px">Generated videos appear here</div>${cinMode?`<div style="font-size:9px;color:#8B5CF644;margin-top:6px">Cinema mode active &mdash; controls will be compiled into prompt</div>`:''}  </div>`:''}
  </div>
</div>
</div>
</div>`;
}

function loadVidSrcImage(input){const f=input.files[0];if(!f)return;const r=new FileReader();r.onload=e=>{S.vqgSrcPreview=e.target.result;S.vqgSrcUrl=e.target.result;render();};r.readAsDataURL(f);}
function loadVidLastFrame(input){const f=input.files[0];if(!f)return;const r=new FileReader();r.onload=e=>{S.vqgLastPreview=e.target.result;render();};r.readAsDataURL(f);}

async function enhanceVidPrompt(){
  const el=document.getElementById('vid-prompt');const cur=el?.value?.trim();
  if(!cur)return toast('Enter a prompt first','err');
  const btn=document.getElementById('vid-enhance-btn');if(btn){btn.textContent='Enhancing...';btn.disabled=true;}
  try{
    const r=await callClaude('You are a cinematic video prompt expert. Enhance the prompt for AI video generation — add scene energy, subject detail, environmental context, mood, atmosphere. Return ONLY the enhanced prompt under 120 words.','Enhance: "'+cur+'"',200);
    if(el&&r){el.value=r.trim();S.vqgPrompt=r.trim();}toast('Enhanced','ok');
  }catch(e){toast('Enhancement failed','err');}
  if(btn){btn.textContent='\u2726 Enhance';btn.disabled=false;}
}

async function runVideoGen(){
  const cinMode=S.vqgCinMode!==false;
  let prompt;
  if(cinMode){
    // Use assembled cinema prompt
    prompt=document.getElementById('cin-preview')?.value?.trim();
    if(!prompt){
      // Auto-assemble if preview is empty
      const base=document.getElementById('vid-prompt')?.value?.trim();
      if(!base)return toast('Enter a scene description','err');
      prompt=assembleCinemaPrompt(base);
    }
  } else {
    prompt=document.getElementById('vid-prompt')?.value?.trim();
  }
  if(!prompt)return toast('Enter a scene description','err');
  const falKey=kF();if(!falKey)return toast('Enter fal.ai key in Settings','err');

  const modelId=document.getElementById('vid-model')?.value||QG_VID_MODELS[0].id;
  const dur=parseInt(document.getElementById('vid-dur')?.value||'5');
  const ratio=document.getElementById('vid-ratio')?.value||'16:9';
  const neg=document.getElementById('vid-neg-prompt')?.value||'';
  const vMode=S.vqgMode||'t2v';

  S.vqgPrompt=document.getElementById('vid-prompt')?.value?.trim()||'';
  S.vqgNeg=neg;

  const btn=document.getElementById('vid-gen-btn');
  const status=document.getElementById('vid-gen-status');
  if(btn){btn.textContent='Generating...';btn.disabled=true;}
  if(status)status.style.display='block';
  aiStart();

  try{
    let body={prompt,duration:dur,aspect_ratio:ratio};
    if(neg)body.negative_prompt=neg;
    if(vMode==='i2v'){
      const imgUrl=S.vqgSrcUrl||S.vqgSrcPreview;
      if(!imgUrl)throw new Error('Upload a first frame image for I2V mode');
      body.image_url=imgUrl;
    }
    // Model-specific adjustments
    if(modelId.includes('minimax'))body={prompt,image_url:vMode==='i2v'?(S.vqgSrcUrl||''):'',negative_prompt:neg||undefined};
    if(modelId.includes('runway'))body={prompt_text:prompt,image_url:S.vqgSrcUrl||'',duration:dur,ratio};
    if(modelId.includes('luma')){body={prompt,aspect_ratio:ratio,duration:dur+'s'};if(vMode==='i2v')body.keyframes={frame0:{type:'image',url:S.vqgSrcUrl||''}};}

    const r=await falFetch('https://queue.fal.run/'+modelId,{method:'POST',headers:{'Authorization':'Key '+falKey,'Content-Type':'application/json'},body:JSON.stringify(body)});
    if(!r.ok){const t=await r.text();throw new Error('fal '+r.status+': '+t.substring(0,120));}
    const d=await r.json();if(!d.request_id)throw new Error('No request_id');

    const statusUrl=d.status_url||'https://queue.fal.run/'+modelId+'/requests/'+d.request_id+'/status';
    const responseUrl=d.response_url||'https://queue.fal.run/'+modelId+'/requests/'+d.request_id;
    for(let i=0;i<180;i++){
      await sleep(3000);
      if(status)status.textContent='Generating... '+Math.round(i*3)+'s elapsed';
      const rs=await falFetch(statusUrl,{headers:{'Authorization':'Key '+falKey}});
      const ds=await rs.json();
      if(ds.status==='COMPLETED'){
        const rr=await falFetch(responseUrl,{headers:{'Authorization':'Key '+falKey}});
        const rd=await rr.json();
        const videoUrl=rd.video?.url||rd.videos?.[0]?.url||rd.url||'';
        if(!videoUrl)throw new Error('No video URL. Response: '+JSON.stringify(rd).substring(0,100));
        if(!S.vqgResults)S.vqgResults=[];
        S.vqgResults.unshift({id:gid('v'),url:videoUrl,prompt,cinPrompt:cinMode?prompt:null,model:modelId.split('/').pop(),dur,mode:vMode,ts:new Date().toISOString()});
        if(S.vqgResults.length>20)S.vqgResults=S.vqgResults.slice(0,20);
        _tryLS(()=>localStorage.setItem('sv2_vqg_history',JSON.stringify(S.vqgResults)));
        render();toast('Video ready!','ok');return;
      }
      if(ds.status==='FAILED')throw new Error('Generation failed: '+(ds.error||''));
    }
    throw new Error('Timeout');
  }catch(e){toast('Video failed: '+e.message,'err');console.error('[vid]',e);}
  finally{aiEnd();if(btn){btn.textContent=cinMode?'\u{1F3AC} Direct & Generate':'\u2606 Generate Video';btn.disabled=false;}if(status)status.style.display='none';}
}

// ════════════════════════════════════════════════════════════
// SOUND STUDIO PAGE
// ════════════════════════════════════════════════════════════
const QG_TTS_MODELS=[
  {id:'fal-ai/elevenlabs/tts/multilingual-v2',n:'ElevenLabs Multilingual v2',desc:'29 languages, ultra-natural',feature:'voice_id'},
  {id:'fal-ai/elevenlabs/tts/turbo-v2.5',n:'ElevenLabs Turbo v2.5',desc:'32 languages, low-latency',feature:'voice_id'},
  {id:'fal-ai/minimax/speech-02-hd',n:'MiniMax Speech-02 HD',desc:'300+ voices, 30+ languages',feature:'minimax'},
  {id:'fal-ai/kokoro',n:'Kokoro TTS',desc:'Fast, cost-efficient',feature:'voice'},
  {id:'fal-ai/f5-tts',n:'F5-TTS Voice Clone',desc:'Clone any voice from audio',feature:'clone'},
  {id:'fal-ai/resemble-ai/chatterbox',n:'Chatterbox',desc:'Expressive, personality-driven',feature:'clone'},
];
const EL_VOICES=[{id:'21m00Tcm4TlvDq8ikWAM',n:'Rachel — Calm, narrative'},{id:'9BWtsMINqrJLrRacOk9x',n:'Aria — Warm, conversational'},{id:'EXAVITQu4vr4xnSDxMaL',n:'Sarah — Soft, expressive'},{id:'TxGEqnHWrfWFTfGW9XjX',n:'Josh — Deep, authoritative'},{id:'ErXwobaYiN019PkySvjV',n:'Antoni — Warm, friendly'},{id:'pNInz6obpgDQGcFmaJgB',n:'Adam — Authoritative M'},{id:'onwK4e9ZLuTAKqWW03F9',n:'Daniel — British M'}];

function soundGenPage(){
  const sMode=S.sqgMode||'tts';
  const selModelId=S.sqgModel||QG_TTS_MODELS[0].id;
  const selModel=QG_TTS_MODELS.find(m=>m.id===selModelId)||QG_TTS_MODELS[0];
  const results=S.sqgResults||[];
  const subTab=(k,lbl,ico)=>`<button onclick="S.sqgMode='${k}';render()" style="padding:5px 14px;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;border:1px solid ${sMode===k?'rgba(16,185,129,0.5)':'rgba(255,255,255,0.07)'};background:${sMode===k?'rgba(16,185,129,0.1)':'transparent'};color:${sMode===k?'#10B981':'#6B6B8A'};transition:all 0.15s">${ico} ${lbl}</button>`;
  return`<div style="max-width:900px">
<div style="display:flex;gap:5px;margin-bottom:20px;flex-wrap:wrap">${subTab('tts','Voiceover','&#127908;')}${subTab('sfx','SFX','&#9889;')}${subTab('music','Music','&#127911;')}${subTab('isolate','Voice Isolate','&#127911;')}</div>
<div style="display:grid;grid-template-columns:1fr 300px;gap:16px">
<div>
${sMode==='tts'?`<div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:18px">
  <div class="fg" style="margin-bottom:12px"><label>Script</label><textarea id="sq-text" rows="5" placeholder="Type your voiceover script..." oninput="S.sqgText=this.value" style="width:100%;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;color:#C8C8E0;padding:10px;font-size:12px;resize:vertical;box-sizing:border-box;font-family:inherit">${S.sqgText||''}</textarea></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
    <div class="fg"><label>Model</label><select id="sq-model" onchange="S.sqgModel=this.value;render()">${QG_TTS_MODELS.map(m=>`<option value="${m.id}"${selModelId===m.id?' selected':''}>${m.n}</option>`).join('')}</select></div>
    <div class="fg"><label>Voice</label>${selModel.feature==='voice_id'?`<select id="sq-voice">${EL_VOICES.map(v=>`<option value="${v.id}">${v.n}</option>`).join('')}</select>`:selModel.feature==='voice'?`<select id="sq-voice"><option value="af_sarah">Sarah F (US)</option><option value="am_adam">Adam M (US)</option><option value="bf_emma">Emma F (UK)</option></select>`:`<div style="font-size:10px;color:#6B6B8A;padding:8px;background:rgba(255,255,255,0.03);border-radius:6px">Uses reference audio below</div>`}</div>
  </div>
  ${selModel.feature==='clone'?`<div class="fg" style="margin-bottom:12px"><label>Reference Audio (for cloning)</label><div onclick="document.getElementById('sq-ref-audio').click()" style="border:2px dashed rgba(255,255,255,0.08);border-radius:8px;padding:14px;text-align:center;cursor:pointer"><div style="font-size:9px;color:#6B6B8A">${S.sqgRefAudioName||'Upload 10+ second audio sample'}</div></div><input type="file" id="sq-ref-audio" accept="audio/*" style="display:none" onchange="loadSqRefAudio(this)"></div>`:''}
  <button id="sq-gen-btn" onclick="runTTSGen()" style="width:100%;padding:12px;border-radius:10px;border:none;background:linear-gradient(135deg,#10B981,#06B6D4);color:#fff;font-size:13px;font-weight:700;cursor:pointer">&#127908; Generate Voiceover</button>
</div>`:
sMode==='sfx'?`<div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:18px">
  <div class="fg" style="margin-bottom:12px"><label>Sound Effect Description</label><textarea id="sq-sfx-prompt" rows="3" placeholder="e.g. Thunderstorm with heavy rain, distant lightning..." style="width:100%;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;color:#C8C8E0;padding:10px;font-size:12px;resize:none;box-sizing:border-box;font-family:inherit"></textarea></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">
    <div class="fg"><label>Duration</label><select id="sq-sfx-dur"><option value="2">2s</option><option value="5" selected>5s</option><option value="10">10s</option><option value="22">22s</option></select></div>
    <div class="fg"><label>Category</label><select id="sq-sfx-cat"><option>Nature</option><option>Urban</option><option>Sci-fi</option><option>Fantasy</option><option>Weapons</option><option>Cinematic</option><option>UI/Interface</option></select></div>
  </div>
  <button onclick="runSFXGen()" style="width:100%;padding:12px;border-radius:10px;border:none;background:linear-gradient(135deg,#10B981,#06B6D4);color:#fff;font-size:13px;font-weight:700;cursor:pointer">&#9889; Generate SFX</button>
</div>`:
sMode==='music'?`<div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:18px">
  <div class="fg" style="margin-bottom:12px"><label>Music Description</label><textarea id="sq-music-prompt" rows="3" placeholder="e.g. Uplifting cinematic orchestral score, brass and strings, epic build-up..." style="width:100%;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;color:#C8C8E0;padding:10px;font-size:12px;resize:none;box-sizing:border-box;font-family:inherit"></textarea></div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:14px">
    <div class="fg"><label>Genre</label><select id="sq-music-genre"><option>Cinematic</option><option>Electronic</option><option>Hip-Hop</option><option>Ambient</option><option>Classical</option><option>Jazz</option></select></div>
    <div class="fg"><label>Mood</label><select id="sq-music-mood"><option>Uplifting</option><option>Dramatic</option><option>Melancholic</option><option>Tense</option><option>Energetic</option></select></div>
    <div class="fg"><label>Duration</label><select id="sq-music-dur"><option value="15">15s</option><option value="30" selected>30s</option><option value="60">60s</option></select></div>
  </div>
  <button onclick="runMusicGen()" style="width:100%;padding:12px;border-radius:10px;border:none;background:linear-gradient(135deg,#10B981,#06B6D4);color:#fff;font-size:13px;font-weight:700;cursor:pointer">&#127911; Generate Music</button>
</div>`:
`<div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:18px">
  <div class="fg" style="margin-bottom:14px"><label>Audio to Isolate</label><div onclick="document.getElementById('sq-isolate-file').click()" style="border:2px dashed rgba(255,255,255,0.08);border-radius:8px;padding:20px;text-align:center;cursor:pointer"><div style="font-size:9px;color:#6B6B8A">${S.sqgIsolateName||'Upload audio with voice + background noise'}</div></div><input type="file" id="sq-isolate-file" accept="audio/*" style="display:none" onchange="loadSqIsolateFile(this)"></div>
  <button onclick="runVoiceIsolate()" style="width:100%;padding:12px;border-radius:10px;border:none;background:linear-gradient(135deg,#10B981,#06B6D4);color:#fff;font-size:13px;font-weight:700;cursor:pointer">&#127908; Isolate Voice</button>
</div>`}
</div>
<div>
  <div style="font-size:10px;font-weight:700;color:#6B6B8A;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:10px">Generated</div>
  ${results.map(a=>`<div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:12px;margin-bottom:8px"><div style="font-size:10px;font-weight:700;color:#C8C8E0;margin-bottom:4px">${esc(a.type||'Audio')}</div><div style="font-size:9px;color:#6B6B8A;margin-bottom:8px">${new Date(a.ts).toLocaleTimeString()}</div><div style="position:relative;margin-bottom:8px"><canvas id="waveform_${a.id}" width="280" height="48" style="width:100%;height:48px;border-radius:6px;background:rgba(16,185,129,0.06);display:block;cursor:pointer" onclick="playAudioWithWaveform('${a.url}','${a.id}')"></canvas><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none" id="wplay_${a.id}"><div style="width:32px;height:32px;border-radius:50%;background:rgba(16,185,129,0.85);display:flex;align-items:center;justify-content:center;font-size:11px;color:#fff">&#9654;</div></div></div><a href="${a.url}" download style="display:block;text-align:center;font-size:10px;padding:6px;border-radius:6px;border:1px solid rgba(255,255,255,0.08);color:#6B6B8A;text-decoration:none">&#8595; Download</a></div>`).join('')}
  ${!results.length?`<div style="border:1px dashed rgba(255,255,255,0.06);border-radius:10px;padding:28px;text-align:center;color:#3a3a55"><div style="font-size:28px;opacity:0.3;margin-bottom:8px">&#127925;</div><div style="font-size:11px;margin-bottom:4px">Generated audio appears here</div><div style="font-size:9px;color:#3a3a55">Supports: MP3, WAV download</div></div>`:''}
</div>
</div></div>`;
}

function loadSqRefAudio(input){const f=input.files[0];if(!f)return;S.sqgRefAudioName=f.name;const r=new FileReader();r.onload=e=>{S.sqgRefAudioData=e.target.result;render();};r.readAsDataURL(f);}
function loadSqIsolateFile(input){const f=input.files[0];if(!f)return;S.sqgIsolateName=f.name;const r=new FileReader();r.onload=e=>{S.sqgIsolateData=e.target.result;render();};r.readAsDataURL(f);}

async function runTTSGen(){
  const text=document.getElementById('sq-text')?.value?.trim();if(!text)return toast('Enter a script','err');
  const modelId=document.getElementById('sq-model')?.value||QG_TTS_MODELS[0].id;
  const voice=document.getElementById('sq-voice')?.value||'21m00Tcm4TlvDq8ikWAM';
  const k=kF();if(!k)return toast('Enter fal.ai key','err');
  S.sqgText=text;const btn=document.getElementById('sq-gen-btn');if(btn){btn.textContent='Generating...';btn.disabled=true;}aiStart();
  try{
    let body={};
    if(modelId.includes('eleven'))body={text,voice_id:voice};
    else if(modelId.includes('minimax'))body={text,voice_id:voice||'male-qn-qingse'};
    else if(modelId.includes('kokoro'))body={text,voice:voice||'af_sarah'};
    else if(modelId.includes('f5'))body={gen_text:text,ref_audio_url:S.sqgRefAudioData||'https://storage.googleapis.com/falserverless/example_inputs/reference_audio.wav',model_type:'F5-TTS'};
    else body={text,exaggeration:0.5};
    const r=await falFetch('https://queue.fal.run/'+modelId,{method:'POST',headers:{'Authorization':'Key '+k,'Content-Type':'application/json'},body:JSON.stringify(body)});
    if(!r.ok){const t=await r.text();throw new Error('fal '+r.status+': '+t.substring(0,100));}
    const d=await r.json();if(!d.request_id)throw new Error('No request_id');
    const statusUrl=d.status_url||'https://queue.fal.run/'+modelId+'/requests/'+d.request_id+'/status';
    const responseUrl=d.response_url||'https://queue.fal.run/'+modelId+'/requests/'+d.request_id;
    for(let i=0;i<60;i++){await sleep(2500);const rs=await falFetch(statusUrl,{headers:{'Authorization':'Key '+k}});const ds=await rs.json();if(ds.status==='COMPLETED'){const rr=await falFetch(responseUrl,{headers:{'Authorization':'Key '+k}});const rd=await rr.json();const url=rd.audio?.url||rd.audio_url||rd.url||'';if(!url)throw new Error('No audio URL');if(!S.sqgResults)S.sqgResults=[];S.sqgResults.unshift({id:gid('sq'),url,type:'Voiceover',ts:new Date().toISOString()});
      if(S.sqgResults.length>30)S.sqgResults=S.sqgResults.slice(0,30);
      _tryLS(()=>localStorage.setItem('sv2_sqg_history',JSON.stringify(S.sqgResults)));render();toast('Voiceover ready!','ok');return;}if(ds.status==='FAILED')throw new Error('TTS failed');}throw new Error('Timeout');
  }catch(e){toast('TTS failed: '+e.message,'err');}finally{aiEnd();if(btn){btn.textContent='\u{1F3A8} Generate Voiceover';btn.disabled=false;}}
}

async function runSFXGen(){
  const prompt=document.getElementById('sq-sfx-prompt')?.value?.trim();if(!prompt)return toast('Describe the sound','err');
  const dur=parseInt(document.getElementById('sq-sfx-dur')?.value||'5');
  const k=kF();if(!k)return toast('Enter fal.ai key','err');aiStart();
  try{
    const r=await falFetch('https://queue.fal.run/fal-ai/elevenlabs/sound-effects',{method:'POST',headers:{'Authorization':'Key '+k,'Content-Type':'application/json'},body:JSON.stringify({text:prompt,duration_seconds:dur})});
    if(!r.ok){const t=await r.text();throw new Error('fal '+r.status+': '+t.substring(0,100));}
    const d=await r.json();if(!d.request_id)throw new Error('No request_id');
    const statusUrl=d.status_url||'https://queue.fal.run/fal-ai/elevenlabs/sound-effects/requests/'+d.request_id+'/status';
    const responseUrl=d.response_url||'https://queue.fal.run/fal-ai/elevenlabs/sound-effects/requests/'+d.request_id;
    for(let i=0;i<40;i++){await sleep(2500);const rs=await falFetch(statusUrl,{headers:{'Authorization':'Key '+k}});const ds=await rs.json();if(ds.status==='COMPLETED'){const rr=await falFetch(responseUrl,{headers:{'Authorization':'Key '+k}});const rd=await rr.json();const url=rd.audio?.url||rd.url||'';if(!url)throw new Error('No audio URL');if(!S.sqgResults)S.sqgResults=[];S.sqgResults.unshift({id:gid('sq'),url,type:'SFX',ts:new Date().toISOString()});
      if(S.sqgResults.length>30)S.sqgResults=S.sqgResults.slice(0,30);
      _tryLS(()=>localStorage.setItem('sv2_sqg_history',JSON.stringify(S.sqgResults)));render();toast('SFX ready!','ok');return;}if(ds.status==='FAILED')throw new Error('SFX failed');}throw new Error('Timeout');
  }catch(e){toast('SFX failed: '+e.message,'err');}finally{aiEnd();}
}

async function runMusicGen(){
  const genre=document.getElementById('sq-music-genre')?.value||'Cinematic';
  const mood=document.getElementById('sq-music-mood')?.value||'Uplifting';
  const dur=parseInt(document.getElementById('sq-music-dur')?.value||'30');
  const desc=document.getElementById('sq-music-prompt')?.value?.trim()||'';
  const prompt=(desc||'')+'. Genre: '+genre+'. Mood: '+mood+'.';
  const k=kF();if(!k)return toast('Enter fal.ai key','err');aiStart();
  try{
    const r=await falFetch('https://queue.fal.run/fal-ai/ace-step',{method:'POST',headers:{'Authorization':'Key '+k,'Content-Type':'application/json'},body:JSON.stringify({prompt,duration:dur,instrumental:true})});
    if(!r.ok){const t=await r.text();throw new Error('fal '+r.status+': '+t.substring(0,100));}
    const d=await r.json();if(!d.request_id)throw new Error('No request_id');
    const statusUrl=d.status_url||'https://queue.fal.run/fal-ai/ace-step/requests/'+d.request_id+'/status';
    const responseUrl=d.response_url||'https://queue.fal.run/fal-ai/ace-step/requests/'+d.request_id;
    for(let i=0;i<80;i++){await sleep(3000);const rs=await falFetch(statusUrl,{headers:{'Authorization':'Key '+k}});const ds=await rs.json();if(ds.status==='COMPLETED'){const rr=await falFetch(responseUrl,{headers:{'Authorization':'Key '+k}});const rd=await rr.json();const url=rd.audio?.url||rd.audio_url||rd.url||'';if(!url)throw new Error('No audio URL');if(!S.sqgResults)S.sqgResults=[];S.sqgResults.unshift({id:gid('sq'),url,type:'Music',ts:new Date().toISOString()});
      if(S.sqgResults.length>30)S.sqgResults=S.sqgResults.slice(0,30);
      _tryLS(()=>localStorage.setItem('sv2_sqg_history',JSON.stringify(S.sqgResults)));render();toast('Music ready!','ok');return;}if(ds.status==='FAILED')throw new Error('Music failed');}throw new Error('Timeout');
  }catch(e){toast('Music failed: '+e.message,'err');}finally{aiEnd();}
}

async function runVoiceIsolate(){
  if(!S.sqgIsolateData)return toast('Upload audio file first','err');
  const k=kF();if(!k)return toast('Enter fal.ai key','err');aiStart();
  try{
    const r=await falFetch('https://queue.fal.run/fal-ai/elevenlabs/audio-isolation',{method:'POST',headers:{'Authorization':'Key '+k,'Content-Type':'application/json'},body:JSON.stringify({audio_url:S.sqgIsolateData})});
    if(!r.ok){const t=await r.text();throw new Error('fal '+r.status+': '+t.substring(0,100));}
    const d=await r.json();if(!d.request_id)throw new Error('No request_id');
    const statusUrl=d.status_url||'https://queue.fal.run/fal-ai/elevenlabs/audio-isolation/requests/'+d.request_id+'/status';
    const responseUrl=d.response_url||'https://queue.fal.run/fal-ai/elevenlabs/audio-isolation/requests/'+d.request_id;
    for(let i=0;i<40;i++){await sleep(2500);const rs=await falFetch(statusUrl,{headers:{'Authorization':'Key '+k}});const ds=await rs.json();if(ds.status==='COMPLETED'){const rr=await falFetch(responseUrl,{headers:{'Authorization':'Key '+k}});const rd=await rr.json();const url=rd.audio?.url||rd.url||'';if(!url)throw new Error('No audio URL');if(!S.sqgResults)S.sqgResults=[];S.sqgResults.unshift({id:gid('sq'),url,type:'Voice Isolated',ts:new Date().toISOString()});
      if(S.sqgResults.length>30)S.sqgResults=S.sqgResults.slice(0,30);
      _tryLS(()=>localStorage.setItem('sv2_sqg_history',JSON.stringify(S.sqgResults)));render();toast('Voice isolated!','ok');return;}if(ds.status==='FAILED')throw new Error('Isolation failed');}throw new Error('Timeout');
  }catch(e){toast('Isolation failed: '+e.message,'err');}finally{aiEnd();}
}

// ════════════════════════════════════════════════════════════
// MOTION GRAPHICS PAGE
// ════════════════════════════════════════════════════════════
function motionGenPage(){
  const mMode=S.mqgMode||'effect';
  const results=S.mqgResults||[];
  const subTab=(k,lbl)=>`<button onclick="S.mqgMode='${k}';render()" style="padding:5px 14px;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;border:1px solid ${mMode===k?'rgba(245,158,11,0.5)':'rgba(255,255,255,0.07)'};background:${mMode===k?'rgba(245,158,11,0.1)':'transparent'};color:${mMode===k?'#F59E0B':'#6B6B8A'};transition:all 0.15s">${lbl}</button>`;
  return`<div style="max-width:900px">
<div style="display:flex;gap:5px;margin-bottom:20px;flex-wrap:wrap">${subTab('effect','&#10024; Effects')}${subTab('transition','&#8614; Transitions')}${subTab('animate','&#127916; Animate Image')}${subTab('t2v','&#128196; Text Motion')}</div>
<div style="display:grid;grid-template-columns:1fr 300px;gap:16px">
<div>
<div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:18px">
  <div class="fg" style="margin-bottom:12px"><label>${mMode==='t2v'?'Motion Prompt':'Motion Description (optional)'}</label><textarea id="mq-prompt" rows="2" placeholder="${mMode==='effect'?'Optional: describe the effect...':mMode==='t2v'?'Describe the motion graphic...':'Describe the motion, camera movement...'}" style="width:100%;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;color:#C8C8E0;padding:8px;font-size:11px;resize:none;box-sizing:border-box;font-family:inherit"></textarea></div>
  ${mMode!=='t2v'?`<div class="fg" style="margin-bottom:12px"><label>${mMode==='transition'?'Image 1 (Start Frame)':'Source Image'}</label><div onclick="document.getElementById('mq-img1').click()" style="border:2px dashed rgba(255,255,255,0.08);border-radius:8px;padding:${S.mqgImg1?'8px':'18px'};text-align:center;cursor:pointer">${S.mqgImg1?`<img src="${S.mqgImg1}" style="max-height:80px;border-radius:4px">`:`<div style="font-size:9px;color:#6B6B8A">Upload source image</div>`}</div><input type="file" id="mq-img1" accept="image/*" style="display:none" onchange="loadMqImg1(this)"></div>`:''}
  ${mMode==='transition'?`<div class="fg" style="margin-bottom:12px"><label>Image 2 (End Frame)</label><div onclick="document.getElementById('mq-img2').click()" style="border:2px dashed rgba(255,255,255,0.08);border-radius:8px;padding:${S.mqgImg2?'8px':'18px'};text-align:center;cursor:pointer">${S.mqgImg2?`<img src="${S.mqgImg2}" style="max-height:80px;border-radius:4px">`:`<div style="font-size:9px;color:#6B6B8A">Upload end frame image</div>`}</div><input type="file" id="mq-img2" accept="image/*" style="display:none" onchange="loadMqImg2(this)"></div>`:''}
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">
    <div class="fg"><label>Duration</label><select id="mq-dur"><option value="3">3s</option><option value="5" selected>5s</option><option value="8">8s</option><option value="10">10s</option></select></div>
    ${mMode==='effect'?`<div class="fg"><label>Effect Type</label><select id="mq-effect"><option value="zoom_in">Zoom In</option><option value="zoom_out">Zoom Out</option><option value="rotate">Rotate</option><option value="glitch">Glitch</option><option value="cinematic">Cinematic</option><option value="slow_motion">Slow Motion</option><option value="explosion">Explosion</option></select></div>`:`<div class="fg"><label>Model</label><select id="mq-model"><option value="fal-ai/kling-video/v2.1/master/image-to-video">Kling 2.1</option><option value="fal-ai/luma-dream-machine/ray-2-flash">Luma Ray 2</option><option value="fal-ai/wan-2.1/image-to-video">Wan 2.1</option></select></div>`}
  </div>
  <button id="mq-gen-btn" onclick="runMotionGen()" style="width:100%;padding:12px;border-radius:10px;border:none;background:linear-gradient(135deg,#F59E0B,#FF6B35);color:#fff;font-size:13px;font-weight:700;cursor:pointer">&#9889; Generate Motion</button>
</div>
</div>
<div>
  <div style="font-size:10px;font-weight:700;color:#6B6B8A;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:10px">Generated</div>
  ${results.map(v=>`<div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:10px;overflow:hidden;margin-bottom:8px"><video src="${v.url}" controls style="width:100%;display:block"></video><div style="padding:8px;display:flex;gap:6px"><a href="${v.url}" download style="flex:1;text-align:center;font-size:10px;padding:6px;border-radius:6px;border:1px solid rgba(255,255,255,0.08);color:#6B6B8A;text-decoration:none">&#8595; Download</a></div></div>`).join('')}
  ${!results.length?`<div style="border:1px dashed rgba(255,255,255,0.06);border-radius:10px;padding:28px;text-align:center;color:#3a3a55"><div style="font-size:28px;opacity:0.3;margin-bottom:8px">&#9889;</div>Motion appears here</div>`:''}
</div>
</div></div>`;
}

function loadMqImg1(input){const f=input.files[0];if(!f)return;const r=new FileReader();r.onload=e=>{S.mqgImg1=e.target.result;render();};r.readAsDataURL(f);}
function loadMqImg2(input){const f=input.files[0];if(!f)return;const r=new FileReader();r.onload=e=>{S.mqgImg2=e.target.result;render();};r.readAsDataURL(f);}

async function runMotionGen(){
  const k=kF();if(!k)return toast('Enter fal.ai key','err');
  const modelId=document.getElementById('mq-model')?.value||'fal-ai/kling-video/v2.1/master/image-to-video';
  const prompt=document.getElementById('mq-prompt')?.value?.trim()||'Dynamic motion';
  const dur=parseInt(document.getElementById('mq-dur')?.value||'5');
  const effect=document.getElementById('mq-effect')?.value||'zoom_in';
  const mMode=S.mqgMode||'effect';
  const btn=document.getElementById('mq-gen-btn');if(btn){btn.textContent='Generating...';btn.disabled=true;}aiStart();
  try{
    let body={},finalModel=modelId;
    if(mMode==='effect'){finalModel='fal-ai/pixverse/v4.5/effects';body={image_url:S.mqgImg1||'',effect_type:effect,prompt};}
    else if(mMode==='transition'){finalModel='fal-ai/pixverse/v4.5/transitions';body={start_image_url:S.mqgImg1||'',end_image_url:S.mqgImg2||'',prompt,duration:dur};}
    else if(mMode==='animate')body={image_url:S.mqgImg1||'',prompt,duration:dur,aspect_ratio:'16:9'};
    else body={prompt,duration:dur,aspect_ratio:'16:9'};
    const r=await falFetch('https://queue.fal.run/'+finalModel,{method:'POST',headers:{'Authorization':'Key '+k,'Content-Type':'application/json'},body:JSON.stringify(body)});
    if(!r.ok){const t=await r.text();throw new Error('fal '+r.status+': '+t.substring(0,100));}
    const d=await r.json();if(!d.request_id)throw new Error('No request_id');
    const statusUrl=d.status_url||'https://queue.fal.run/'+finalModel+'/requests/'+d.request_id+'/status';
    const responseUrl=d.response_url||'https://queue.fal.run/'+finalModel+'/requests/'+d.request_id;
    for(let i=0;i<120;i++){await sleep(3000);const rs=await falFetch(statusUrl,{headers:{'Authorization':'Key '+k}});const ds=await rs.json();if(ds.status==='COMPLETED'){const rr=await falFetch(responseUrl,{headers:{'Authorization':'Key '+k}});const rd=await rr.json();const url=rd.video?.url||rd.videos?.[0]?.url||rd.url||'';if(!url)throw new Error('No video URL');if(!S.mqgResults)S.mqgResults=[];S.mqgResults.unshift({id:gid('mq'),url,ts:new Date().toISOString()});
      if(S.mqgResults.length>20)S.mqgResults=S.mqgResults.slice(0,20);
      _tryLS(()=>localStorage.setItem('sv2_mqg_history',JSON.stringify(S.mqgResults)));render();toast('Motion ready!','ok');return;}if(ds.status==='FAILED')throw new Error('Motion failed');}throw new Error('Timeout');
  }catch(e){toast('Motion failed: '+e.message,'err');}finally{aiEnd();if(btn){btn.textContent='\u26A1 Generate Motion';btn.disabled=false;}}
}

// ════════════════════════════════════════════════════════════
// 3D GENERATION PAGE
// ════════════════════════════════════════════════════════════
function threeDGenPage(){
  const tMode=S.tdMode||'t2t';
  const results=S.tdResults||[];
  const subTab=(k,lbl)=>`<button onclick="S.tdMode='${k}';render()" style="padding:5px 14px;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;border:1px solid ${tMode===k?'rgba(6,182,212,0.5)':'rgba(255,255,255,0.07)'};background:${tMode===k?'rgba(6,182,212,0.1)':'transparent'};color:${tMode===k?'#06B6D4':'#6B6B8A'};transition:all 0.15s">${lbl}</button>`;
  const modelsByMode={t2t:[{id:'fal-ai/meshy/v6/text-to-3d',n:'Meshy v6'},{id:'fal-ai/meshy/v6-preview/text-to-3d',n:'Meshy v6 Preview'}],i2t:[{id:'tripo3d/tripo/v2.5/image-to-3d',n:'Tripo3D v2.5'},{id:'fal-ai/meshy/v5/image-to-3d',n:'Meshy v5'}],multi:[{id:'fal-ai/meshy/v5/multi-image-to-3d',n:'Meshy v5 Multi'}],retex:[{id:'fal-ai/meshy/v5/retexture',n:'Meshy v5 Retexture'}]};
  const models=modelsByMode[tMode]||modelsByMode.t2t;
  const selId=S.tdModel||models[0]?.id;
  return`<div style="max-width:1000px">
<div style="display:flex;gap:5px;margin-bottom:20px;flex-wrap:wrap">${subTab('t2t','&#128196; Text \u2192 3D')}${subTab('i2t','&#128247; Image \u2192 3D')}${subTab('multi','&#128195; Multi-Image')}${subTab('retex','&#127912; Retexture')}</div>
<div style="display:grid;grid-template-columns:1fr 340px;gap:16px">
<div>
<div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:18px">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">
    <div class="fg"><label>Model</label><select id="td-model" onchange="S.tdModel=this.value">${models.map(m=>`<option value="${m.id}"${selId===m.id?' selected':''}>${m.n}</option>`).join('')}</select></div>
    <div class="fg"><label>Output Format</label><select id="td-fmt"><option value="glb">GLB (web/AR)</option><option value="fbx">FBX (game)</option><option value="obj">OBJ (general)</option></select></div>
  </div>
  ${tMode==='t2t'?`<div class="fg" style="margin-bottom:12px"><label>Describe the 3D object</label><textarea id="td-prompt" rows="3" placeholder="e.g. A medieval iron helmet with visor, battle-worn, detailed engravings, metallic surface..." style="width:100%;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;color:#C8C8E0;padding:10px;font-size:12px;resize:vertical;box-sizing:border-box;font-family:inherit"></textarea></div><div style="display:flex;gap:12px;margin-bottom:14px"><label style="display:flex;align-items:center;gap:6px;font-size:10px;color:#C8C8E0;cursor:pointer"><input type="checkbox" id="td-pbr" checked> PBR Maps</label><label style="display:flex;align-items:center;gap:6px;font-size:10px;color:#C8C8E0;cursor:pointer"><input type="checkbox" id="td-rig"> Auto-rig humanoid</label></div>`:''}
  ${tMode==='i2t'||tMode==='multi'?`<div class="fg" style="margin-bottom:12px"><label>${tMode==='multi'?'Reference Images (up to 4 angles)':'Source Image'}</label><div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">${(S.tdImages||[]).map((img,i)=>`<div style="position:relative"><img src="${img}" style="width:72px;height:72px;object-fit:cover;border-radius:6px;border:1px solid rgba(255,255,255,0.08)"><button onclick="S.tdImages.splice(${i},1);render()" style="position:absolute;top:-6px;right:-6px;width:16px;height:16px;border-radius:50%;background:#EF4444;color:#fff;border:none;cursor:pointer;font-size:10px">x</button></div>`).join('')}${(!S.tdImages||S.tdImages.length<(tMode==='multi'?4:1))?`<div onclick="document.getElementById('td-img-upload').click()" style="width:72px;height:72px;border:2px dashed rgba(255,255,255,0.08);border-radius:6px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:24px;color:#3a3a55">+</div>`:''}</div><input type="file" id="td-img-upload" accept="image/*" multiple style="display:none" onchange="loadTdImages(this)"></div><div class="fg" style="margin-bottom:14px"><label>Optional description</label><input type="text" id="td-prompt" placeholder="e.g. a ceramic vase..." style="width:100%;box-sizing:border-box"></div>`:''}
  ${tMode==='retex'?`<div class="fg" style="margin-bottom:12px"><label>GLB Model URL</label><input type="text" id="td-glb-url" placeholder="https://...model.glb" style="width:100%;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;color:#C8C8E0;padding:8px;font-size:11px;box-sizing:border-box"></div><div class="fg" style="margin-bottom:14px"><label>Texture Style</label><input type="text" id="td-prompt" placeholder="e.g. worn medieval iron, rustic wood..." style="width:100%;box-sizing:border-box"></div>`:''}
  <button id="td-gen-btn" onclick="run3DGen()" style="width:100%;padding:12px;border-radius:10px;border:none;background:linear-gradient(135deg,#06B6D4,#8B5CF6);color:#fff;font-size:13px;font-weight:700;cursor:pointer">&#11096; Generate 3D Model</button>
  <div id="td-status" style="font-size:9px;color:#6B6B8A;text-align:center;margin-top:6px;display:none">Generating 3D... 1-5 minutes</div>
</div>
</div>
<div>
  <div style="font-size:10px;font-weight:700;color:#6B6B8A;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:10px">3D Results</div>
  ${results.map(m3=>`<div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:12px;margin-bottom:8px">${m3.preview?`<img src="${m3.preview}" style="width:100%;border-radius:6px;margin-bottom:8px">`:`<div style="width:100%;height:120px;background:rgba(6,182,212,0.05);border-radius:6px;margin-bottom:8px;display:flex;align-items:center;justify-content:center;font-size:32px;color:#06B6D466">&#11096;</div>`}<div style="font-size:10px;font-weight:700;color:#C8C8E0;margin-bottom:6px">${esc(m3.name||'3D Model')}</div><div style="display:flex;gap:6px"><a href="${m3.glb}" download style="flex:1;text-align:center;font-size:10px;padding:6px;border-radius:6px;border:1px solid rgba(255,255,255,0.08);color:#6B6B8A;text-decoration:none">&#8595; GLB</a>${m3.fbx?`<a href="${m3.fbx}" download style="font-size:10px;padding:6px 10px;border-radius:6px;border:1px solid rgba(255,255,255,0.08);color:#6B6B8A;text-decoration:none">FBX</a>`:''}</div></div>`).join('')}
  ${!results.length?`<div style="border:1px dashed rgba(255,255,255,0.06);border-radius:10px;padding:28px;text-align:center;color:#3a3a55"><div style="font-size:28px;opacity:0.3;margin-bottom:8px">&#11096;</div><div style="font-size:11px">3D models appear here</div><div style="font-size:9px;margin-top:4px">Downloads as GLB / FBX / OBJ</div></div>`:''}
</div>
</div></div>`;
}

function loadTdImages(input){if(!S.tdImages)S.tdImages=[];Array.from(input.files).slice(0,4-S.tdImages.length).forEach(file=>{const r=new FileReader();r.onload=e=>{if(S.tdImages.length<4){S.tdImages.push(e.target.result);render();}};r.readAsDataURL(file);});}

async function run3DGen(){
  const k=kF();if(!k)return toast('Enter fal.ai key','err');
  const modelId=document.getElementById('td-model')?.value||'fal-ai/meshy/v6/text-to-3d';
  const prompt=document.getElementById('td-prompt')?.value?.trim()||'';
  const tMode=S.tdMode||'t2t';
  const btn=document.getElementById('td-gen-btn');const status=document.getElementById('td-status');
  if(btn){btn.textContent='Generating...';btn.disabled=true;}if(status)status.style.display='block';aiStart();
  try{
    let body={};
    const pbr=document.getElementById('td-pbr')?.checked!==false;
    const rig=document.getElementById('td-rig')?.checked||false;
    if(tMode==='t2t'){if(!prompt)throw new Error('Enter a prompt');body={prompt,enable_pbr:pbr,topology:'triangle',should_remesh:true,enable_rigging:rig};}
    else if(tMode==='i2t'){const imgs=S.tdImages||[];if(!imgs.length)throw new Error('Upload an image');body={image_url:imgs[0],should_texture:true,enable_pbr:pbr};}
    else if(tMode==='multi'){const imgs=S.tdImages||[];if(!imgs.length)throw new Error('Upload images');body={image_urls:imgs,should_texture:true,enable_pbr:pbr};}
    else{const glbUrl=document.getElementById('td-glb-url')?.value?.trim();if(!glbUrl)throw new Error('Enter GLB URL');body={model_url:glbUrl,prompt};}
    const r=await falFetch('https://queue.fal.run/'+modelId,{method:'POST',headers:{'Authorization':'Key '+k,'Content-Type':'application/json'},body:JSON.stringify(body)});
    if(!r.ok){const t=await r.text();throw new Error('fal '+r.status+': '+t.substring(0,120));}
    const d=await r.json();if(!d.request_id)throw new Error('No request_id');
    const statusUrl=d.status_url||'https://queue.fal.run/'+modelId+'/requests/'+d.request_id+'/status';
    const responseUrl=d.response_url||'https://queue.fal.run/'+modelId+'/requests/'+d.request_id;
    for(let i=0;i<200;i++){
      await sleep(4000);if(status)status.textContent='Generating 3D... '+Math.round(i*4/60)+'min';
      const rs=await falFetch(statusUrl,{headers:{'Authorization':'Key '+k}});const ds=await rs.json();
      if(ds.status==='COMPLETED'){const rr=await falFetch(responseUrl,{headers:{'Authorization':'Key '+k}});const rd=await rr.json();
        const glb=rd.model_mesh?.url||rd.model?.url||rd.url||'';const fbx=rd.rigged_model_fbx?.url||'';const preview=rd.thumbnail_url||rd.rendered_image?.url||'';
        if(!glb)throw new Error('No GLB URL');if(!S.tdResults)S.tdResults=[];
        S.tdResults.unshift({id:gid('td'),glb,fbx,preview,name:prompt.substring(0,40)||'3D Model',ts:new Date().toISOString()});
        if(S.tdResults.length>20)S.tdResults=S.tdResults.slice(0,20);
        _tryLS(()=>localStorage.setItem('sv2_td_history',JSON.stringify(S.tdResults)));
        render();toast('3D model ready!','ok');return;}
      if(ds.status==='FAILED')throw new Error('3D failed: '+(ds.error||''));
    }
    throw new Error('Timeout');
  }catch(e){toast('3D failed: '+e.message,'err');}finally{aiEnd();if(btn){btn.textContent='\u2BC8 Generate 3D Model';btn.disabled=false;}if(status)status.style.display='none';}
}

async function enhancePromptQG(){
  const el=document.getElementById('sg-prompt');const current=el?.value?.trim();
  if(!current)return toast('Enter a prompt first','err');
  const btn=document.getElementById('enhance-btn');const status=document.getElementById('enhance-status');
  if(btn){btn.textContent='Enhancing…';btn.disabled=true;}
  if(status)status.style.display='block';
  try{
    const r=await callClaude(
      'You are an expert AI image prompt engineer. Transform the user prompt into a rich, detailed, visually specific prompt. Add: lighting details, composition, atmosphere, texture, color palette, technical quality markers. Keep under 150 words. Return ONLY the enhanced prompt.',
      `Enhance: "${current}"`,300
    );
    if(el){el.value=r.trim();S.sgPrompt=r.trim();}
    toast('Prompt enhanced ✦','ok');
  }catch(e){toast('Could not enhance prompt','err');}
  if(btn){btn.textContent='✦ Enhance Prompt';btn.disabled=false;}
  if(status)status.style.display='none';
}


async function runSingleGen(count=1){
  const prompt=document.getElementById('sg-prompt')?.value?.trim();
  if(!prompt)return toast('Please enter a prompt','err');
  const falKey=kF();
  if(!falKey)return toast('Enter fal.ai key in Settings → API Keys','err');
  S.sgPrompt=prompt;
  const model=document.getElementById('sg-model')?.value||IMG_MODELS[0].id;
  const ratio=document.getElementById('sg-ratio')?.value||'1:1';
  const style=document.getElementById('sg-style')?.value||'photorealistic';
  const quality=document.getElementById('sg-quality')?.value||'hd';
  const outputCount=parseInt(document.getElementById('sg-count')?.value||'1');
  const finalCount=count>1?count:outputCount;
  const btn=document.getElementById('sg-btn');
  if(btn){btn.textContent='Generating…';btn.disabled=true;}
  S.sgResults=S.sgResults||[];
  for(let i=0;i<finalCount;i++){
    try{
      // Improve prompt via /api/claude proxy (no direct browser CORS)
      let improvedPrompt=prompt;
      try{
        improvedPrompt=await callClaude(
          'You are an expert AI image prompt engineer. Return ONLY the improved prompt, no explanation.',
          'Improve this prompt for model '+model+'. Style: '+style+'. Ratio: '+ratio+'.\n\nOriginal: "'+prompt+'"',
          200
        );
        improvedPrompt=(improvedPrompt||'').trim()||prompt;
      }catch(e){improvedPrompt=prompt;}
      // Set state so falImg picks up correct model/ratio/tone
      S.imgModel=model;S.imgAspect=ratio;S.imgTone=style;S.imgQuality='hd';
      const url=await falImg(improvedPrompt);
      S.sgResults.unshift({id:gid('sg'),url,prompt:improvedPrompt,model,ts:new Date().toISOString()});
      if(S.sgResults.length>50)S.sgResults=S.sgResults.slice(0,50);
      _tryLS(()=>localStorage.setItem('sv2_sg_history',JSON.stringify(S.sgResults.map(r=>({...r,url:r.url.startsWith('data:')?'':r.url})).filter(r=>r.url))));
      render();
      toast('Image ready!','ok');
    }catch(e){toast('Generation failed: '+e.message,'err');}
  }
  if(btn){btn.textContent='❆ Generate';btn.disabled=false;}
}
async function improvePromptAI(){
  const el=document.getElementById('ref-prompt');
  const current=el?.value?.trim();
  if(!current)return toast('Enter a prompt first','err');
  const p=DB.getProject(S.pid);
  const brief=p?`Brand: ${p.name}, Type: ${p.type}, Tone: ${p.mood||'cinematic'}`:'';
  toast('Improving prompt with AI…','info');
  try{
    const r=await callClaude(
      'You are a world-class AI image prompt engineer. Improve the prompt for maximum visual quality and cinematic impact. Return ONLY the improved prompt.',
      `${brief?'Brief context: '+brief+'\n\n':''}Original prompt: "${current}"`,300
    );
    if(el)el.value=r.trim();
    S.refPrompt=r.trim();
    toast('Prompt improved!','ok');
  }catch(e){toast('Could not improve prompt','err');}
}

async function generateFromPrompt(multi){
  const prompt=document.getElementById('ref-prompt')?.value?.trim()||S.refPrompt;
  if(!prompt)return toast('Enter a prompt first','err');
  S.refPrompt=prompt;
  const count=multi===true?4:1;
  toast(`Generating ${count} image${count>1?'s':''}…`,'info');
  // Trigger existing image generation with this prompt
  for(let i=0;i<count;i++){
    const ref={id:gid('ref'),label:'Prompt Gen '+(i+1),prompt,type:'text2img',status:'pending'};
    const p=DB.getProject(S.pid);
    if(!p)return;
    if(!p.refs)p.refs=[];
    p.refs.push(ref);
    DB.saveProject(p);
  }
  render();
  toast('Generation queued!','ok');
}

function adminLD(){
  const ldFilter=S.ldFilter||{type:'',q:''};
  const all=DB.getLDEntries();
  const filtered=all.filter(e=>{
    if(ldFilter.type&&e.type!==ldFilter.type)return false;
    if(ldFilter.q&&!e.title.toLowerCase().includes(ldFilter.q.toLowerCase())&&!(e.description||'').toLowerCase().includes(ldFilter.q.toLowerCase()))return false;
    return true;
  });
  const counts={trend:all.filter(e=>e.type==='trend').length,skill:all.filter(e=>e.type==='skill').length,creator:all.filter(e=>e.type==='creator').length,workflow:all.filter(e=>e.type==='workflow').length};
  const typeColors={trend:'var(--gold)',skill:'var(--blue)',creator:'var(--purple)',workflow:'var(--green)'};
  const typeIcons={trend:'📈',skill:'🎯',creator:'👁',workflow:'⚙'};
  return`<div class="page">
<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;margin-bottom:14px">
<div>
<div class="page-title">L&D Knowledge Base</div>
<div class="page-sub">Skills, Workflows, Trends, and Creator profiles powering your AI generation</div>
</div>
<div class="btn-row" style="margin-top:0">
<button class="btn btn-gold" onclick="showAddLDModal()">+ Add Entry</button>
<button class="btn btn-outline" onclick="runTrendAgent()">✦ Run Trend Agent</button>
<button class="btn btn-ghost btn-sm" onclick="sbPullLD()">↓ Sync from Supabase</button>
</div>
</div>

<!-- Stats -->
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px">
${['trend','skill','creator','workflow'].map(t=>`<div style="background:var(--bg2);border:1px solid var(--b1);border-left:3px solid ${typeColors[t]};border-radius:7px;padding:10px 12px;cursor:pointer;${ldFilter.type===t?'background:'+typeColors[t]+'11':''}" onclick="S.ldFilter={...S.ldFilter,type:S.ldFilter?.type===\'${t}\'?'':'${t}'};render()">
<div style="font-size:18px;font-weight:700;color:${typeColors[t]}">${counts[t]||0}</div>
<div style="font-size:9px;color:var(--t4);text-transform:uppercase;margin-top:2px">${typeIcons[t]} ${t}s</div>
</div>`).join('')}
</div>

<!-- Filter -->
<div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:12px">
<input type="text" placeholder="Search…" value="${esc(ldFilter.q)}" oninput="S.ldFilter={...S.ldFilter,q:this.value};debounceRender('ld')" style="flex:1;min-width:150px;background:var(--bg3);border:1px solid var(--b2);color:var(--t1);padding:6px 9px;border-radius:5px;font-size:10px"/>
${['','trend','skill','creator','workflow'].map(t=>`<button onclick="S.ldFilter={...S.ldFilter,type:'${t}'};render()" style="background:${ldFilter.type===t?'var(--bg2)':'var(--bg3)'};border:1px solid ${ldFilter.type===t?'var(--gold)':'var(--b2)'};color:${ldFilter.type===t?'var(--gold)':'var(--t4)'};padding:4px 10px;border-radius:5px;cursor:pointer;font-size:9px">${t||'All'}</button>`).join('')}
</div>

<!-- Trend Agent status -->
<div id="ld-agent-status" style="display:none;background:#0e0a18;border:1px solid rgba(255,107,53,0.18);border-radius:7px;padding:10px 13px;margin-bottom:12px;font-size:10px;color:var(--gold)"></div>

<!-- Entries grid -->
${filtered.length?`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:10px">
${filtered.map(e=>{
  const col=typeColors[e.type]||'var(--t4)';
  const icon=typeIcons[e.type]||'?';
  const hasStyle=e.extracted_style&&Object.keys(e.extracted_style).length>0;
  const hasLora=e.lora_status&&e.lora_status!=='none';
  const hasModel=!!(e.fal_file_url||e.lora_model_id);
  const hasFile=!!(e.file_url);
  const hasRefs=(e.reference_image_urls||[]).length>0;
  return`<div style="background:var(--bg2);border:1px solid var(--b1);border-top:2px solid ${col};border-radius:8px;overflow:hidden">
<div style="padding:11px 13px;border-bottom:1px solid var(--b1)">
<div style="display:flex;align-items:flex-start;gap:8px">
<span style="font-size:16px;flex-shrink:0">${icon}</span>
<div style="flex:1;min-width:0">
<div style="font-size:11px;font-weight:700;color:#fff;margin-bottom:2px">${esc(e.title)}</div>
<div style="display:flex;gap:4px;flex-wrap:wrap">
<span style="font-size:8px;background:${col}22;color:${col};border:1px solid ${col}33;padding:1px 6px;border-radius:8px;text-transform:uppercase;font-weight:700">${e.type}</span>
${(e.media_types||[]).length?`<span style="font-size:8px;color:var(--t4)">${e.media_types.slice(0,2).join(', ')}</span>`:'<span style="font-size:8px;color:var(--t4)">all types</span>'}
${!e.active?'<span style="font-size:8px;color:var(--red)">inactive</span>':''}
</div>
</div>
<div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px">
${hasStyle?`<span style="font-size:8px;color:var(--green)">✓ style</span>`:''}
${hasLora?`<span style="font-size:8px;color:${e.lora_status==='ready'?'var(--green)':e.lora_status==='training'?'var(--gold)':'var(--red)'}">LoRA: ${e.lora_status}</span>`:''}
${hasModel?`<span style="font-size:8px;color:var(--purple)">🧠 model</span>`:''}
${hasFile?`<span style="font-size:8px;color:var(--blue)">📄 ${esc(e.file_type||'file')}</span>`:''}
${hasRefs?`<span style="font-size:8px;color:var(--gold)">🖼 ${e.reference_image_urls.length} refs</span>`:''}
</div>
</div>
</div>
<div style="padding:9px 13px;font-size:10px;color:var(--t3);line-height:1.6;border-bottom:1px solid var(--b1)">${esc((e.description||'').substring(0,120)+(e.description?.length>120?'…':''))}</div>
${(e.tags||[]).length?`<div style="padding:6px 13px;display:flex;gap:4px;flex-wrap:wrap;border-bottom:1px solid var(--b1)">${e.tags.slice(0,5).map(t=>`<span style="font-size:8px;background:var(--bg4);color:var(--t4);padding:1px 6px;border-radius:8px">#${esc(t)}</span>`).join('')}</div>`:''}
<div style="padding:7px 11px;display:flex;gap:5px;flex-wrap:wrap">
<button class="btn btn-ghost btn-sm" style="font-size:9px" onclick="showEditLDModal('${e.id}')">Edit</button>
${!hasStyle?`<button class="btn btn-outline btn-sm" style="font-size:9px" onclick="extractLDStyle('${e.id}')">✦ Extract Style</button>`:''}
${e.type==='trend'&&!hasLora?`<button class="btn btn-outline btn-sm" style="font-size:9px;color:var(--purple)" onclick="showLoRATrainModal('${e.id}')">Train LoRA</button>`:''}
${hasLora&&e.lora_status==='training'?`<button class="btn btn-ghost btn-sm" style="font-size:9px" onclick="checkLoRAStatus('${e.id}')">Check Training</button>`:''}
<button class="btn btn-ghost btn-sm" style="font-size:9px;color:var(--t4)" onclick="if(confirm('Delete?')){DB.deleteLDEntry('${e.id}');render()}">Del</button>
</div>
</div>`;}).join('')}
</div>`:`<div style="background:var(--bg2);border:1px dashed var(--b2);border-radius:8px;padding:40px;text-align:center;color:var(--t4)">
<div style="font-size:20px;margin-bottom:8px">✦</div>
<div style="font-size:11px">No L&D entries yet. Add Skills, Workflows, Trends, or Creator links to power your AI generation.</div>
<button class="btn btn-gold" style="margin-top:14px" onclick="showAddLDModal()">+ Add First Entry</button>
</div>`}
</div>`;
}

async function sbPullLD(){
  const rows=await SB._getLD();
  if(!rows){toast('Pull failed','err');return;}
  _ldEntries=rows;
  _tryLS(()=>localStorage.setItem('sv2_ld',JSON.stringify(_ldEntries)));
  render();toast('L&D synced from Supabase ('+rows.length+' entries)','ok');
}

function showAddLDModal(prefill){
  const pf=prefill||{};
  const typeHints={
    trend:'Upload reference images (.jpg/.png) for LoRA training, or a style guide (.txt/.md)',
    skill:'Upload a skill document (.txt, .md, .pdf) — Claude will extract structured steps and style rules',
    workflow:'Upload a ComfyUI workflow (.json) — it will be parsed and stored as a reusable workflow template',
    creator:'Upload reference images or a creator analysis document'
  };
  openModal(`<div class="modal-title">${pf.id?'Edit':'Add'} L&D Entry</div>
<div class="form2">
<div class="fg full"><label>Title</label><input type="text" id="ld-title" value="${esc(pf.title||'')}"/></div>
<div class="fg"><label>Type</label>
<select id="ld-type" onchange="document.getElementById('ld-type-hint').textContent=({trend:'Reference images (.jpg/.png) or style guide (.txt/.md)',skill:'Skill document (.txt, .md, .pdf)',workflow:'ComfyUI workflow (.json)',creator:'Reference images or analysis document'})[this.value]||''">
${['trend','skill','creator','workflow'].map(t=>`<option value="${t}"${(pf.type||'trend')===t?' selected':''}>${t}</option>`).join('')}
</select>
<div id="ld-type-hint" style="font-size:9px;color:var(--t4);margin-top:4px">${typeHints[pf.type||'trend']}</div>
</div>
<div class="fg"><label>Source URL (Instagram / YouTube / blog)</label><input type="text" id="ld-url" value="${esc(pf.source_url||'')}" placeholder="https://instagram.com/reel/... or https://youtube.com/..."/></div>
<div class="fg full"><label>Description</label><textarea id="ld-desc" rows="2">${esc(pf.description||'')}</textarea></div>
<div class="fg full"><label>Tags (comma separated)</label><input type="text" id="ld-tags" value="${esc((pf.tags||[]).join(', '))}"/></div>
<div class="fg full"><label>Applicable project types (blank = all)</label>
<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px" id="ld-mts">
${Object.entries(MT).map(([k,m])=>`<label style="display:flex;align-items:center;gap:3px;font-size:9px;color:var(--t3);cursor:pointer"><input type="checkbox" value="${k}" ${(pf.media_types||[]).includes(k)?'checked':''}/> ${m.icon} ${m.label}</label>`).join('')}
</div></div>
<div class="fg full"><label>Notes / Workflow Steps / Style Notes</label><textarea id="ld-content" rows="3" placeholder="Describe the skill steps, or paste creator analysis…">${esc(typeof pf.content==='string'?pf.content:JSON.stringify(pf.content||{},null,2))}</textarea></div>
</div>
<hr style="border-color:var(--b1);margin:12px 0"/>
<div style="margin-bottom:8px">
<div style="font-size:10px;font-weight:700;color:var(--t2);margin-bottom:6px">Upload Resource Files</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
<!-- Model file upload -->
<div style="background:var(--bg3);border:1px solid var(--b2);border-radius:7px;padding:10px">
<div style="font-size:9px;font-weight:700;color:var(--purple);margin-bottom:4px">🧠 Model Weights</div>
<div style="font-size:8px;color:var(--t4);margin-bottom:7px">.safetensors · .ckpt · .bin · .pt — uploaded to fal.ai storage → used as LoRA in generation</div>
<button onclick="document.getElementById('ld-model-file').click()" class="btn btn-outline btn-sm" style="width:100%;font-size:9px">Choose model file</button>
<input type="file" id="ld-model-file" accept=".safetensors,.ckpt,.bin,.pt" style="display:none" onchange="ldFileSelected(this,'model')"/>
<div id="ld-model-status" style="font-size:9px;color:var(--t4);margin-top:5px">${pf.fal_file_url?'✓ Model uploaded: '+esc(pf.file_name||''):'No file selected'}</div>
</div>
<!-- Skill / workflow file upload -->
<div style="background:var(--bg3);border:1px solid var(--b2);border-radius:7px;padding:10px">
<div style="font-size:9px;font-weight:700;color:var(--blue);margin-bottom:4px">📄 Knowledge File</div>
<div style="font-size:8px;color:var(--t4);margin-bottom:7px">.txt · .md · .pdf · .json — Claude extracts skills/workflows · ComfyUI .json parsed automatically</div>
<button onclick="document.getElementById('ld-skill-file').click()" class="btn btn-outline btn-sm" style="width:100%;font-size:9px">Choose knowledge file</button>
<input type="file" id="ld-skill-file" accept=".txt,.md,.pdf,.json,.yaml" style="display:none" onchange="ldFileSelected(this,'skill')"/>
<div id="ld-skill-status" style="font-size:9px;color:var(--t4);margin-top:5px">${pf.file_url&&pf.file_type!=='model'?'✓ File: '+esc(pf.file_name||''):'No file selected'}</div>
</div>
<!-- Reference images upload -->
<div style="background:var(--bg3);border:1px solid var(--b2);border-radius:7px;padding:10px;grid-column:1/-1">
<div style="font-size:9px;font-weight:700;color:var(--gold);margin-bottom:4px">🖼 Reference Images</div>
<div style="font-size:8px;color:var(--t4);margin-bottom:7px">.jpg · .png · .webp — upload 15–20 frames → used directly for LoRA training on fal.ai</div>
<button onclick="document.getElementById('ld-ref-files').click()" class="btn btn-outline btn-sm" style="font-size:9px">Add images</button>
<input type="file" id="ld-ref-files" accept="image/*" multiple style="display:none" onchange="ldRefImagesSelected(this)"/>
<div id="ld-ref-preview" style="display:flex;gap:5px;flex-wrap:wrap;margin-top:7px">
${(pf.reference_image_urls||[]).map(u=>`<img src="${u}" style="width:36px;height:36px;object-fit:cover;border-radius:3px;border:1px solid var(--b2)"/>`).join('')}
${(pf.reference_image_urls||[]).length?`<span style="font-size:9px;color:var(--green);align-self:center">${pf.reference_image_urls.length} images</span>`:''}
</div>
<div id="ld-ref-status" style="font-size:9px;color:var(--t4);margin-top:3px">${(pf.reference_image_urls||[]).length?'':'No images yet'}</div>
</div>
</div>
</div>
<div id="ld-upload-progress" style="display:none;background:var(--bg4);border:1px solid var(--b2);border-radius:5px;padding:8px 10px;font-size:10px;color:var(--gold);margin-top:8px"></div>
<div class="btn-row"><button class="btn btn-gold" onclick="saveLDEntry('${pf.id||''}')">Save</button><button class="btn btn-ghost" onclick="closeModal()">Cancel</button></div>`);
}

function showEditLDModal(id){
  const e=DB.getLDEntry(id);if(!e)return;
  showAddLDModal(e);
}

function saveLDEntry(existingId){
  const title=document.getElementById('ld-title')?.value.trim();if(!title){toast('Title required','err');return;}
  const mts=Array.from(document.querySelectorAll('#ld-mts input:checked')).map(cb=>cb.value);
  let content={};
  try{const raw=document.getElementById('ld-content')?.value.trim();content=raw?JSON.parse(raw):{};}catch(e){content={notes:document.getElementById('ld-content')?.value||''};}
  const existing=existingId?DB.getLDEntry(existingId):{};
  // Merge file data from pending upload state
  const entry={
    id:existingId||gid('ld'),
    type:document.getElementById('ld-type')?.value,
    title,
    description:document.getElementById('ld-desc')?.value.trim()||'',
    source_url:document.getElementById('ld-url')?.value.trim()||null,
    tags:(document.getElementById('ld-tags')?.value||'').split(',').map(t=>t.trim()).filter(Boolean),
    media_types:mts,
    content,
    extracted_style:existing?.extracted_style||{},
    lora_status:window._ldPendingModel?'ready':existing?.lora_status||'none',
    lora_model_id:window._ldPendingModel||existing?.lora_model_id||null,
    fal_file_url:window._ldPendingModel||existing?.fal_file_url||null,
    file_url:window._ldPendingFileUrl||existing?.file_url||null,
    file_name:window._ldPendingFileName||existing?.file_name||null,
    file_type:window._ldPendingFileType||existing?.file_type||null,
    file_size_bytes:window._ldPendingFileSize||existing?.file_size_bytes||null,
    file_processed:window._ldPendingProcessed||existing?.file_processed||false,
    reference_image_urls:window._ldPendingRefs||existing?.reference_image_urls||[],
    active:true,
  };
  // Clear pending state
  window._ldPendingModel=null;window._ldPendingFileUrl=null;window._ldPendingFileName=null;
  window._ldPendingFileType=null;window._ldPendingFileSize=null;window._ldPendingProcessed=false;
  window._ldPendingRefs=null;
  DB.saveLDEntry(entry);closeModal();render();toast('Saved!','ok');
}


// ── L&D File Upload Handlers ──

async function ldFileSelected(input, fileType){
  const file=input.files?.[0];if(!file)return;
  const ext=file.name.split('.').pop().toLowerCase();
  const statusEl=document.getElementById(fileType==='model'?'ld-model-status':'ld-skill-status');
  const progressEl=document.getElementById('ld-upload-progress');
  if(statusEl)statusEl.textContent='Reading file…';
  if(progressEl){progressEl.style.display='block';progressEl.textContent='Processing '+file.name+'…';}

  if(fileType==='model'){
    // Model weights: upload to fal.ai file storage
    if(!kF()){
      if(statusEl)statusEl.textContent='✗ Add fal.ai key in Settings first';
      if(progressEl)progressEl.style.display='none';
      return;
    }
    if(statusEl)statusEl.textContent='Uploading to fal.ai storage (may take a minute for large files)…';
    try{
      const falUrl=await uploadFileToFal(file);
      window._ldPendingModel=falUrl;
      window._ldPendingFileName=file.name;
      window._ldPendingFileType='model';
      window._ldPendingFileSize=file.size;
      if(statusEl)statusEl.innerHTML='<span style="color:var(--green)">✓ Uploaded: '+esc(file.name)+' ('+Math.round(file.size/1024)+'KB)<br>fal.ai URL: '+esc(falUrl.substring(0,60))+'…</span>';
      if(progressEl)progressEl.textContent='✓ Model ready — will be set as LoRA on save.';
      setTimeout(()=>{if(progressEl)progressEl.style.display='none';},3000);
      toast('Model uploaded to fal.ai!','ok');
    }catch(e){
      if(statusEl)statusEl.innerHTML='<span style="color:var(--red)">✗ Upload failed: '+esc(e.message)+'</span>';
      if(progressEl)progressEl.style.display='none';
    }

  } else if(ext==='json'){
    // ComfyUI workflow JSON
    const text=await file.text();
    try{
      const parsed=JSON.parse(text);
      const isComfy=parsed.nodes||parsed['extra_pnginfo']||Object.values(parsed).some(v=>v?.class_type);
      window._ldPendingFileUrl='data:application/json;base64,'+btoa(unescape(encodeURIComponent(text)));
      window._ldPendingFileName=file.name;
      window._ldPendingFileType='workflow';
      window._ldPendingFileSize=file.size;
      // Store parsed workflow in content field directly
      const contentTA=document.getElementById('ld-content');
      if(contentTA){
        const wfSummary={
          type:'comfyui_workflow',
          filename:file.name,
          node_count:isComfy?(parsed.nodes?.length||Object.keys(parsed).length):0,
          raw:isComfy?parsed:parsed,
          parsed_at:new Date().toISOString()
        };
        contentTA.value=JSON.stringify(wfSummary,null,2);
      }
      window._ldPendingProcessed=true;
      if(statusEl)statusEl.innerHTML='<span style="color:var(--green)">✓ ComfyUI workflow parsed: '+esc(file.name)+'</span>';
      if(progressEl)progressEl.textContent='✓ Workflow parsed and ready. Saved to content field.';
      setTimeout(()=>{if(progressEl)progressEl.style.display='none';},3000);
      toast('Workflow parsed!','ok');
    }catch(e){
      if(statusEl)statusEl.innerHTML='<span style="color:var(--red)">✗ JSON parse failed: '+esc(e.message)+'</span>';
      if(progressEl)progressEl.style.display='none';
    }

  } else if(['txt','md','markdown'].includes(ext)){
    // Plain text / markdown skill file
    const text=await file.text();
    window._ldPendingFileUrl='data:text/plain;base64,'+btoa(unescape(encodeURIComponent(text)));
    window._ldPendingFileName=file.name;
    window._ldPendingFileType='skill';
    window._ldPendingFileSize=file.size;
    // Pre-fill content and description
    const contentTA=document.getElementById('ld-content');
    const descTA=document.getElementById('ld-desc');
    if(contentTA&&!contentTA.value)contentTA.value=text.substring(0,2000)+(text.length>2000?'\n\n[truncated — full content stored]':'');
    if(descTA&&!descTA.value)descTA.value=text.split('\n').find(l=>l.trim().length>20)||'';
    if(statusEl)statusEl.innerHTML='<span style="color:var(--green)">✓ Text file loaded: '+esc(file.name)+' ('+text.length+' chars)</span>';
    if(progressEl)progressEl.textContent='✓ Text loaded. Click Save, then use Extract Style to have Claude process it.';
    setTimeout(()=>{if(progressEl)progressEl.style.display='none';},4000);
    toast('Skill file loaded!','ok');

  } else if(ext==='pdf'){
    // PDF: read as binary, store as base64, Claude will handle text extraction at process time
    const reader=new FileReader();
    reader.onload=function(e){
      const b64=e.target.result.split(',')[1];
      window._ldPendingFileUrl='data:application/pdf;base64,'+b64;
      window._ldPendingFileName=file.name;
      window._ldPendingFileType='skill';
      window._ldPendingFileSize=file.size;
      if(statusEl)statusEl.innerHTML='<span style="color:var(--green)">✓ PDF loaded: '+esc(file.name)+'<br>Save entry, then click Extract Style to process with Claude.</span>';
      if(progressEl)progressEl.style.display='none';
      toast('PDF loaded!','ok');
    };
    reader.readAsDataURL(file);

  } else {
    if(statusEl)statusEl.innerHTML='<span style="color:var(--t4)">Unsupported format. Use .safetensors/.ckpt/.bin for models, .json for workflows, .txt/.md/.pdf for skills.</span>';
    if(progressEl)progressEl.style.display='none';
  }
}

async function ldRefImagesSelected(input){
  const files=Array.from(input.files||[]);if(!files.length)return;
  const statusEl=document.getElementById('ld-ref-status');
  const previewEl=document.getElementById('ld-ref-preview');
  const progressEl=document.getElementById('ld-upload-progress');
  if(statusEl)statusEl.textContent='Processing '+files.length+' images…';
  if(progressEl){progressEl.style.display='block';progressEl.textContent='Loading reference images…';}
  const existing=window._ldPendingRefs||[];
  const urls=[];
  for(const file of files){
    const url=await new Promise(res=>{const r=new FileReader();r.onload=e=>res(e.target.result);r.readAsDataURL(file);});
    urls.push(url);
    existing.push(url);
  }
  window._ldPendingRefs=[...existing];
  if(previewEl){
    previewEl.innerHTML=existing.map(u=>`<img src="${u}" style="width:36px;height:36px;object-fit:cover;border-radius:3px;border:1px solid var(--b2)"/>`).join('')+
    `<span style="font-size:9px;color:var(--green);align-self:center">${existing.length} images</span>`;
  }
  if(statusEl)statusEl.textContent='✓ '+existing.length+' reference images ready for LoRA training';
  if(progressEl)progressEl.textContent='✓ '+existing.length+' images loaded. Save entry, then click Train LoRA.';
  setTimeout(()=>{if(progressEl)progressEl.style.display='none';},3000);
  toast(existing.length+' images ready','ok');
}

// Upload file to fal.ai storage and return CDN URL
async function uploadFileToFal(file){
  const k=kF(); // may be empty — server proxy has FAL_KEY
  // Step 1: get upload URL from fal.ai
  const initResp=await falFetch('https://rest.fal.run/storage/upload/initiate',{
    method:'POST',
    headers:{'Authorization':'Key '+k,'Content-Type':'application/json'},
    body:JSON.stringify({file_name:file.name,content_type:file.type||'application/octet-stream'})
  });
  if(!initResp.ok){
    // Fallback: try direct upload to fal storage
    const formData=new FormData();
    formData.append('file',file);
    const directResp=await falFetch('https://rest.fal.run/storage/upload',{
      method:'POST',
      headers:{'Authorization':'Key '+k},
      body:formData
    });
    if(!directResp.ok){const t=await directResp.text();throw new Error('fal storage '+directResp.status+': '+t.substring(0,80));}
    const d=await directResp.json();
    return d.url||d.file_url||d.cdn_url;
  }
  const initData=await initResp.json();
  // Step 2: upload to the presigned URL
  const uploadResp=await fetch(initData.upload_url,{
    method:'PUT',
    headers:{'Content-Type':file.type||'application/octet-stream'},
    body:file
  });
  if(!uploadResp.ok)throw new Error('Upload to CDN failed: '+uploadResp.status);
  return initData.file_url||initData.cdn_url;
}

// Override extractLDStyle to handle file content
async function extractLDStyle(id){
  const e=DB.getLDEntry(id);if(!e)return;
  if(!kC()){toast('Enter Claude API key in Settings','err');return;}
  toast('Extracting style…','info');
  const url=e.source_url;
  let pageContent='';
  // If entry has a text/skill file, extract its content for Claude
  if(e.file_url&&(e.file_type==='skill'||e.file_type==='workflow')){
    try{
      if(e.file_url.startsWith('data:text/')){
        pageContent='FILE CONTENT:\n'+decodeURIComponent(escape(atob(e.file_url.split(',')[1]))).substring(0,2000);
      }else if(e.file_url.startsWith('data:application/pdf')){
        pageContent='[PDF file attached — '+e.file_name+'. Extract style from title and description.]';
      }else if(e.file_url.startsWith('data:application/json')){
        const wf=JSON.parse(decodeURIComponent(escape(atob(e.file_url.split(',')[1]))));
        pageContent='WORKFLOW JSON:\n'+JSON.stringify(wf).substring(0,1000);
      }
    }catch(er){}
  }
  if(url){
    try{
      const _ck=kC();const _ch=_authHeaders({'anthropic-version':'2023-06-01'});if(_ck)_ch['x-api-key']=_ck;
      const resp=await fetch('/api/claude',{
        method:'POST',
        headers:_ch,
        body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:400,messages:[{role:'user',content:'Fetch and summarise this URL content for visual style extraction: '+url+'. If you cannot access it, describe the expected content style based on the URL.'}]})
      });
      const d=await resp.json();
      pageContent=d.content?.[0]?.text||'';
    }catch(er){}
  }
  try{
    const r=await callClaude(
      'You are a visual style analyst. Extract actionable style patterns from content descriptions. Return ONLY valid JSON.',
      'Extract the visual and creative style from this L&D entry for AI prompt injection.\n\nENTRY:\nTitle: '+e.title+'\nDescription: '+e.description+'\nContent: '+JSON.stringify(e.content)+(pageContent?'\nSource analysis: '+pageContent.substring(0,500):'')+'\n\nReturn JSON:\n{"visual_style":"","motion_style":"","camera":"","lighting":"","color_grade":"","narrative_pattern":"","prompt_keywords":["","",""],"inject_template":"STYLE: [title]. [2-sentence style instruction for AI generation using {product} as placeholder if needed]."}',
      800
    );
    const parsed=JSON.parse(r.replace(/```json|```/g,'').trim());
    const updated={...e,extracted_style:parsed};
    DB.saveLDEntry(updated);render();toast('Style extracted!','ok');
  }catch(er){toast('Extraction failed: '+er.message,'err');}
}

async function runTrendAgent(){
  if(!kC()){toast('Enter Claude API key in Settings','err');return;}
  const statusEl=document.getElementById('ld-agent-status');
  if(statusEl){statusEl.style.display='block';statusEl.textContent='✦ Trend Agent starting…';}
  // Get all creator entries + any trend entries with source URLs
  const entries=DB.getLDEntries().filter(e=>e.source_url&&(e.type==='creator'||e.type==='trend')&&e.active!==false);
  if(!entries.length){
    if(statusEl)statusEl.textContent='No creator or trend entries with source URLs found. Add some entries first.';
    return;
  }
  let processed=0;
  for(const e of entries){
    if(statusEl)statusEl.textContent=`✦ Trend Agent: Analysing "${e.title}" (${processed+1}/${entries.length})…`;
    await extractLDStyle(e.id);
    processed++;
    await new Promise(r=>setTimeout(r,500));
  }
  if(statusEl)statusEl.textContent=`✦ Trend Agent complete — ${processed} entries updated.`;
  setTimeout(()=>{if(statusEl)statusEl.style.display='none';},4000);
  toast('Trend Agent done! '+processed+' entries updated','ok');
}

// ── LoRA Training ──
function showLoRATrainModal(id){
  const e=DB.getLDEntry(id);if(!e)return;
  const existingRefs=(e.reference_image_urls||[]).filter(u=>u.startsWith('http')).join('\n');
  openModal(`<div class="modal-title">Train LoRA — ${esc(e.title)}</div>
<div class="ib ib-blue" style="margin-bottom:12px">Training a LoRA fine-tunes the FLUX image model on reference images. Use 15–20 images. You can upload images in the entry editor, or paste CDN URLs below.</div>
${(e.reference_image_urls||[]).length?`<div class="ib ib-gold" style="margin-bottom:10px"><strong>${e.reference_image_urls.length} reference images</strong> attached to this entry. ${e.reference_image_urls.filter(u=>u.startsWith('http')).length} are hosted URLs usable for training. Base64 images must be hosted first.</div>`:''}
<div class="fg"><label>Image URLs (one per line — minimum 5, ideally 15–20)</label>
<textarea id="lora-urls" rows="6" placeholder="https://...image1.jpg&#10;https://...image2.jpg&#10;…" style="font-family:monospace;font-size:10px">${esc(existingRefs)}</textarea>
</div>
<div class="fg"><label>Trigger word (used in prompts to activate this style)</label>
<input type="text" id="lora-trigger" value="${esc(e.title.toLowerCase().replace(/[^a-z0-9]/g,'_').substring(0,20))}" placeholder="e.g. talking_objects_style"/></div>
<div class="fg"><label>Training steps</label>
<select id="lora-steps"><option value="500">500 (fast, ~10min)</option><option value="1000" selected>1000 (balanced, ~20min)</option><option value="1500">1500 (quality, ~30min)</option></select></div>
<div id="lora-status" style="display:none;font-size:10px;color:var(--gold);margin-top:8px"></div>
<div class="btn-row"><button class="btn btn-gold" onclick="startLoRATraining('${id}')">Start Training</button><button class="btn btn-ghost" onclick="closeModal()">Cancel</button></div>`);
}

async function startLoRATraining(id){
  const e=DB.getLDEntry(id);if(!e)return;
  const k=kF();if(!k){toast('Enter fal.ai key in Settings','err');return;}
  const urls=document.getElementById('lora-urls')?.value.trim().split('\n').map(u=>u.trim()).filter(u=>u.startsWith('http'));
  if(urls.length<3){toast('Add at least 3 image URLs','err');return;}
  const trigger=document.getElementById('lora-trigger')?.value.trim()||'custom_style';
  const steps=parseInt(document.getElementById('lora-steps')?.value,10)||1000;
  const statusEl=document.getElementById('lora-status');
  if(statusEl){statusEl.style.display='block';statusEl.textContent='Submitting training job to fal.ai…';}
  try{
    const images_data_url=urls;
    const r=await falFetch('https://queue.fal.run/fal-ai/flux-lora-fast-training',{
      method:'POST',
      headers:{'Authorization':'Key '+k,'Content-Type':'application/json'},
      body:JSON.stringify({images_data_url,trigger_word:trigger,steps,create_masks:true,is_style:true,is_input_format_already_preprocessed:false})
    });
    if(!r.ok){const t=await r.text();throw new Error('fal '+r.status+': '+t.substring(0,80));}
    const d=await r.json();
    const updated={...e,lora_status:'training',lora_training_job:d.request_id};
    DB.saveLDEntry(updated);
    if(statusEl)statusEl.textContent='Training job submitted! ID: '+d.request_id+'. Check status in ~20 minutes.';
    toast('LoRA training started!','ok');
  }catch(er){
    if(statusEl)statusEl.textContent='Error: '+er.message;
    toast(er.message,'err');
  }
}

async function checkLoRAStatus(id){
  const e=DB.getLDEntry(id);if(!e||!e.lora_training_job)return;
  const k=kF();if(!k)return;
  try{
    const r=await falFetch('https://queue.fal.run/fal-ai/flux-lora-fast-training/requests/'+e.lora_training_job+'/status',{headers:{'Authorization':'Key '+k}});
    const d=await r.json();
    if(d.status==='COMPLETED'){
      const rr=await falFetch('https://queue.fal.run/fal-ai/flux-lora-fast-training/requests/'+e.lora_training_job,{headers:{'Authorization':'Key '+k}});
      const rd=await rr.json();
      const loraPath=rd.diffusers_lora_file?.url||rd.lora_file?.url||'';
      const updated={...e,lora_status:'ready',lora_model_id:loraPath};
      DB.saveLDEntry(updated);render();toast('LoRA training complete!','ok');
    }else if(d.status==='FAILED'){
      const updated={...e,lora_status:'failed'};
      DB.saveLDEntry(updated);render();toast('LoRA training failed','err');
    }else{
      toast('Still training: '+d.status,'info');
    }
  }catch(er){toast('Check failed: '+er.message,'err');}
}

function adminSettings(){
  const u=DB.getUser(S.session?.userId)||{};
  const sheetsUrl=u.sheetsUrl||'';
  const sbUrl=localStorage.getItem('sb_url')||'';
  const sbKey=localStorage.getItem('sb_key')||'';
  const sbStatus=SB._status;
  const sbStatusColor={ok:'var(--green)',error:'var(--red)',syncing:'#FF8A5C',unconfigured:'var(--t4)',saved:'var(--gold)'}[sbStatus]||'var(--t4)';
  const sbStatusLabel={ok:'Connected ✓',error:'Error — check URL/key',syncing:'Syncing…',unconfigured:'Not configured',saved:'Saved — click Test Connection'}[sbStatus]||sbStatus;
  return`<div class="page"><div class="page-title">Settings</div><div class="page-sub">API keys, database, and account management — admin only</div>
${(()=>{
  const projs=DB.getProjects();
  const users=DB.getUsers();
  // Count persisted vs base64 assets
  let totalAssets=0,persistedAssets=0,b64Assets=0;
  users.forEach(u=>(u.brandAssets||[]).forEach(a=>{totalAssets++;if(a.persisted||( a.preview&&!a.preview.startsWith('data:')))persistedAssets++;else if(a.preview?.startsWith('data:'))b64Assets++;}));
  let sbFrames=0;
  projs.forEach(p=>{Object.values(p.sbState||{}).forEach(s=>{if(s.img)sbFrames++;});});
  if(totalAssets===0&&sbFrames===0)return'';
  return`<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:7px;padding:10px 14px;margin-bottom:14px;font-size:10px;color:var(--t3);display:flex;gap:16px;flex-wrap:wrap">
<span style="font-size:9px;font-weight:700;color:var(--t4);text-transform:uppercase;align-self:center">Storage</span>
<span>🖼 ${sbFrames} storyboard frames</span>
<span>📁 ${totalAssets} brand assets (${persistedAssets} on imgbb · ${b64Assets} in DB)</span>
${b64Assets>0?`<button onclick="persistAllBase64Assets()" class="btn btn-ghost btn-sm" style="font-size:8px">Upload ${b64Assets} to imgbb →</button>`:''}
</div>`;
})()}
${location.protocol==='file:'?`<div style="background:#100800;border:1px solid var(--gold);border-radius:7px;padding:10px 14px;margin-bottom:14px;font-size:10px;line-height:1.7;display:flex;gap:10px;align-items:flex-start"><div style="font-size:16px;flex-shrink:0">⚠</div><div><strong style="color:var(--gold);font-size:11px">Supabase won't work from file:// protocol.</strong><br>You're opening this file directly — browsers block external API calls from local files.<br><strong>Fix:</strong> run <code>python3 -m http.server 8080</code> in your terminal in the same folder, then open <a href="http://localhost:8080/the_studio_v2.html" target="_blank" style="color:var(--blue)">http://localhost:8080/the_studio_v2.html</a> instead. API keys and all other features still work fine from file://.</div></div>`:''}

<div class="card" style="margin-bottom:14px"><div class="card-head"><span class="card-title">🗄 SUPABASE DATABASE</span><span style="font-size:9px;color:${sbStatusColor};font-weight:700">● ${sbStatusLabel}</span></div><div class="card-body">
<div class="ib ib-blue" style="margin-bottom:12px"><strong>Persistent storage across all devices and refreshes.</strong> Once configured, all data (users, projects, notifications, integrations) is stored in your Supabase project. In-memory and localStorage remain as a fast cache.</div>
${location.protocol==='file:'?`<div style="background:#100800;border:1px solid #B8960C55;border-radius:7px;padding:10px 13px;margin-bottom:12px;font-size:10px;line-height:1.7"><strong style="color:var(--gold)">⚠ File:// detected — Supabase will fail from here.</strong> Browsers block cross-origin requests when opening HTML files directly. Serve over HTTP first:<br><code style="color:var(--t2)">python3 -m http.server 8080</code> → open <code style="color:var(--t2)">http://localhost:8080/the_studio_v2.html</code></div>`:''}
<div class="form2">
<div class="fg"><label>Supabase Project URL</label><input type="text" id="sb-url-inp" value="${esc(sbUrl)}" placeholder="https://xxxx.supabase.co"/></div>
<div class="fg"><label>Supabase Anon Key <span style="font-size:8px;color:var(--t4);font-weight:400">(Settings → API → anon public — starts with eyJ, ~200 chars)</span></label>
<div style="display:flex;gap:4px;align-items:center"><input type="password" id="sb-key-inp" value="${esc(sbKey)}" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." oninput="sbKeyHint(this)" style="flex:1"/><button onclick="const i=document.getElementById('sb-key-inp');i.type=i.type==='password'?'text':'password';this.textContent=i.type==='password'?'👁':'👁‍🗨'" style="background:none;border:1px solid var(--b2);border-radius:var(--r);cursor:pointer;font-size:13px;padding:6px 8px;color:var(--t3)">👁</button></div>
<div id="sb-key-hint" style="font-size:9px;margin-top:3px;color:${sbKey.startsWith('eyJ')&&sbKey.length>100?'var(--green)':'var(--t4)'}">${sbKey?sbKey.startsWith('eyJ')&&sbKey.length>100?'✓ Key format looks correct ('+sbKey.length+' chars)':'⚠ Should start with eyJ and be ~200+ chars (currently '+sbKey.length+')':'Paste from Supabase Dashboard → Settings → API → Project API keys → anon public'}</div>
</div>
</div>
<div class="btn-row" style="margin-top:0">
<button class="btn btn-gold" onclick="sbSaveConfig()">Save & Connect</button>
<button class="btn btn-outline" onclick="sbTest()">Test Connection</button>
<button class="btn btn-blue" onclick="sbInitTables()">Initialize Tables</button>
<button class="btn btn-ghost btn-sm" onclick="sbPullAll()">↓ Pull from Supabase</button>
<button class="btn btn-ghost btn-sm" onclick="sbPushAll()">↑ Push all to Supabase</button>
</div>
<div id="sb-result" style="margin-top:8px;font-size:10px;color:var(--t4)"></div>
<div class="section-lbl">How to set up</div>
<div style="font-size:10px;color:var(--t3);line-height:1.9">
<strong style="color:var(--t1)">1.</strong> Go to <a href="https://supabase.com" target="_blank" style="color:var(--blue)">supabase.com</a> and create a free project.<br>
<strong style="color:var(--t1)">2.</strong> In your project, go to <strong>Settings → API</strong> and copy the Project URL and the <code style="color:var(--gold)">anon public</code> key.<br>
<strong style="color:var(--t1)">3.</strong> Paste both above and click <strong>Save & Connect</strong>, then <strong>Test Connection</strong>.<br>
<strong style="color:var(--t1)">4.</strong> Click <strong>Initialize Tables</strong> — this gives you the SQL to run in the Supabase SQL editor.<br>
<strong style="color:var(--t1)">5.</strong> Click <strong>Push all to Supabase</strong> to upload your current data.<br>
<strong style="color:var(--t1)">6.</strong> Going forward, all saves are automatic and real-time.
</div>
</div></div>

<div class="card" style="margin-bottom:14px"><div class="card-head"><span class="card-title">🔑 API KEYS</span></div><div class="card-body">
<div class="ib ib-red" style="margin-bottom:10px"><strong>Admin-only.</strong> These keys power all AI generation for every user.</div>
<div class="form3">
<div class="fg"><label>Anthropic (Claude)</label><input type="password" id="k-c" value="${kC()}" placeholder="sk-ant-..." oninput="saveKeys()"/></div>
<div class="fg"><label>fal.ai</label><input type="password" id="k-f" value="${kF()}" placeholder="fal-key-..." oninput="saveKeys()"/></div>
<div class="fg"><label>ElevenLabs</label><input type="password" id="k-e" value="${kE()}" placeholder="el-api-key..." oninput="saveKeys()"/></div>
</div>
<div style="margin-bottom:8px"><button onclick="['k-c','k-f','k-e'].forEach(id=>{const i=document.getElementById(id);if(i)i.type=i.type==='password'?'text':'password'});this.textContent=document.getElementById('k-c')?.type==='password'?'👁 Show keys':'👁‍🗨 Hide keys'" style="background:none;border:none;cursor:pointer;font-size:10px;color:var(--t4)">👁 Show keys</button></div>
<button class="btn btn-green" onclick="saveKeys();toast('Keys saved!','ok')">✓ Save API Keys</button>
<div style="display:flex;gap:6px;margin-top:8px"><button class="btn btn-outline btn-sm" style="font-size:9px" onclick="testFalKey()">Test fal.ai</button><button class="btn btn-outline btn-sm" style="font-size:9px" onclick="testClaudeKey()">Test Claude</button></div><div id="api-test-result" style="font-size:9px;margin-top:6px;color:var(--t3)"></div>
</div></div>

<div class="card" style="margin-bottom:14px"><div class="card-head"><span class="card-title">AI MODEL USAGE</span><span style="font-size:9px;color:var(--t4);font-weight:400">Last 50 queries</span></div><div class="card-body"><button class="btn btn-ghost btn-sm" style="font-size:9px;margin-bottom:8px" onclick="renderModelLog()">Refresh</button><div id="model-log-rows" style="max-height:200px;overflow-y:auto;display:flex;flex-direction:column;gap:4px"><div style="color:var(--t4);font-size:10px">No queries yet this session.</div></div></div></div><div class="card" style="margin-bottom:14px"><div class="card-head"><span class="card-title">📊 GOOGLE SHEETS SYNC</span></div><div class="card-body">
<div class="fg"><label>Apps Script Web App URL</label>
<input type="text" id="sheets-url" value="${esc(sheetsUrl)}" placeholder="https://script.google.com/macros/s/.../exec" oninput="saveSheetUrl()"/>
<div style="font-size:9px;color:var(--t4);margin-top:4px">For reporting exports. <span style="color:var(--gold);cursor:pointer" onclick="showSheetsSetupModal()">Setup guide →</span></div>
</div>
<div class="btn-row" style="margin-top:0">
<button class="btn btn-blue" onclick="syncToSheets()">↑ Sync to Sheets</button>
<button class="btn btn-ghost btn-sm" onclick="exportDashboardCSV()">Export CSV</button>
</div>
</div></div>

<div class="card" style="margin-bottom:14px"><div class="card-head"><span class="card-title">🌐 GLOBAL & NEGATIVE PROMPTS</span><span style="font-size:9px;color:var(--t4);font-weight:400">Injected into every AI call — admin only</span></div><div class="card-body"><div class="ib ib-blue" style="margin-bottom:10px">These apply to <strong>every query</strong> across the platform. Global prompt sets tone/rules. Negative prompt tells the AI what to avoid.</div><div class="fg" style="margin-bottom:10px"><label>Global / Universal Prompt <span style="font-size:8px;color:var(--t4);font-weight:400">(prepended to every AI system prompt)</span></label><textarea id="global-prompt" rows="4" placeholder="e.g. You are part of CinexAI, a premium AI media production studio. Always be professional, brand-first, and results-driven. Never break character..." style="width:100%;background:var(--bg3);border:1px solid var(--b2);color:var(--t1);padding:8px;border-radius:5px;font-size:11px;resize:vertical;box-sizing:border-box">${esc(u.globalPrompt||'')}</textarea></div><div class="fg" style="margin-bottom:12px"><label>Negative Prompt <span style="font-size:8px;color:var(--red);font-weight:400">(appended as DO NOT rules)</span></label><textarea id="negative-prompt" rows="3" placeholder="e.g. Never suggest competitors. Avoid informal language. Do not make promises about pricing or timelines..." style="width:100%;background:var(--bg3);border:1px solid rgba(239,68,68,0.2);color:var(--t1);padding:8px;border-radius:5px;font-size:11px;resize:vertical;box-sizing:border-box">${esc(u.negativePrompt||'')}</textarea></div><button class="btn btn-gold" onclick="saveGlobalPrompts()">Save Prompts</button></div></div><div class="card"><div class="card-head"><span class="card-title">👤 ADMIN ACCOUNT</span></div><div class="card-body">
<div class="form2">
<div class="fg"><label>Admin Name</label><input type="text" id="admin-name" value="${esc(u.name||'Admin')}"/></div>
<div class="fg"><label>Admin Password</label><input type="password" id="admin-pw" value="${esc(u.password||'')}"/></div>
</div>
<button class="btn btn-gold" onclick="saveAdminAccount()">Save Account</button>
</div></div>
</div>`;
}

function sbSaveConfig(){
  const url=(document.getElementById('sb-url-inp')?.value||'').trim();
  const key=(document.getElementById('sb-key-inp')?.value||'').trim();
  if(!url||!key){toast('Both URL and key required','err');return;}
  // Validate format
  const urlOk=url.startsWith('https://')&&url.includes('.supabase.co');
  const keyOk=key.startsWith('eyJ')&&key.length>100;
  const el=document.getElementById('sb-result');
  if(!urlOk){if(el)el.innerHTML='<span style="color:var(--red)">✗ URL must be <code>https://xxxx.supabase.co</code></span>';toast('Invalid URL format','err');return;}
  if(!keyOk){if(el)el.innerHTML='<span style="color:var(--red)">✗ Anon key looks wrong — it should start with <code>eyJ</code> and be ~200 characters long. Find it in Supabase Dashboard → Settings → API → Project API keys → <strong>anon public</strong>.</span>';toast('Invalid anon key format','err');return;}
  SB.setConfig(url,key);
  if(el)el.innerHTML='<span style="color:var(--gold)">✓ Saved — now click <strong>Test Connection</strong> to verify.</span>';
  render();
}
function sbKeyHint(inp){
  const v=inp.value.trim();const el=document.getElementById('sb-key-hint');if(!el)return;
  if(!v){el.style.color='var(--t4)';el.textContent='Paste from Supabase Dashboard → Settings → API → anon public';return;}
  if(!v.startsWith('eyJ')){el.style.color='var(--red)';el.textContent='✗ Should start with eyJ — this looks like the wrong value';return;}
  if(v.length<100){el.style.color='#FF8A5C';el.textContent='⚠ Key seems short ('+v.length+' chars) — the real anon key is ~200 chars';return;}
  el.style.color='var(--green)';el.textContent='✓ Key format looks correct ('+v.length+' chars)';
}
async function sbTest(){
  const el=document.getElementById('sb-result');
  if(el)el.innerHTML='<span style="color:var(--t4)">Testing…</span>';
  const url=(document.getElementById('sb-url-inp')?.value||'').trim();
  const key=(document.getElementById('sb-key-inp')?.value||'').trim();
  if(url&&key)SB.setConfig(url,key);
  const res=await SB.testConnection();
  if(!el)return;
  if(res.ok){
    el.innerHTML=`<span style="color:var(--green);font-weight:700">✓ ${esc(res.msg)}</span>
<div style="font-size:9px;color:var(--t4);margin-top:4px">Tables are ready. Click <strong>Push all to Supabase</strong> to upload your data.</div>`;
    toast('Connected!','ok');
    return;
  }
  if(res.msg==='FILE_PROTOCOL'){
    el.innerHTML=`<div style="background:#100800;border:1px solid var(--gold);border-radius:7px;padding:12px 14px;line-height:1.8">
<div style="font-size:11px;font-weight:700;color:var(--gold);margin-bottom:6px">⚠ Open via localhost — not file://</div>
<div style="font-size:10px;color:var(--t2)">Your browser blocks network requests from files opened directly. You need to serve it over HTTP.</div>
<div style="margin-top:10px;font-size:10px;color:var(--t3)"><strong style="color:var(--t1)">Step 1</strong> — Open Terminal and run:</div>
<div style="background:#050505;border-radius:5px;padding:7px 10px;margin:5px 0;font-family:monospace;font-size:11px;color:var(--green)">cd ~/Downloads && python3 -m http.server 8080</div>
<div style="font-size:10px;color:var(--t3)"><strong style="color:var(--t1)">Step 2</strong> — Open a new browser tab and go to:</div>
<div style="background:#050505;border-radius:5px;padding:7px 10px;margin:5px 0;font-family:monospace;font-size:11px;color:var(--blue);cursor:pointer" onclick="window.open('http://localhost:8080/the_studio_v2.html','_blank')">http://localhost:8080/the_studio_v2.html</div>
<div style="font-size:9px;color:var(--t4);margin-top:8px">✓ All your in-memory data is preserved — just open the localhost URL and your data will be there. Click the link above to open it directly.</div>
</div>`;
    return;
  }
  // Other errors
  const errLower=res.msg.toLowerCase();
  let hint='';
  if(errLower.includes('401')||errLower.includes('unauthorized'))hint='<div style="margin-top:6px;font-size:9px;color:var(--t4)">→ Your anon key is wrong. Go to Supabase Dashboard → Settings → API → copy <strong>anon public</strong> key (the long one starting with eyJ).</div>';
  else if(errLower.includes('404'))hint='<div style="margin-top:6px;font-size:9px;color:var(--t4)">→ URL not found. Make sure it is exactly <code>https://xxxx.supabase.co</code> with nothing after .co</div>';
  else if(errLower.includes('failed to fetch')||errLower.includes('network'))hint='<div style="margin-top:6px;font-size:9px;color:var(--t4)">→ Are you on <code>http://localhost:8080</code>? Check the address bar. If still file://, the python server step did not work — try: <code>python3 -m http.server 8080</code> then open the localhost URL in a new tab.</div>';
  el.innerHTML=`<span style="color:var(--red);font-weight:700">✗ ${esc(res.msg)}</span>${hint}`;
  toast('Connection failed','err');
}
async function sbInitTables(){
  const res=await SB.initTables();
  const sql=`-- Run this in your Supabase SQL Editor (supabase.com → SQL Editor → New Query)

CREATE TABLE IF NOT EXISTS studio_users (
  id text PRIMARY KEY,
  data jsonb NOT NULL,
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS studio_projects (
  id text PRIMARY KEY,
  data jsonb NOT NULL,
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS studio_notifications (
  id text PRIMARY KEY,
  user_id text GENERATED ALWAYS AS ((data->>'userId')::text) STORED,
  data jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS studio_integrations (
  id text PRIMARY KEY,
  data jsonb NOT NULL,
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_notifs_user ON studio_notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_projects_updated ON studio_projects(updated_at DESC);

-- Disable RLS (the app manages its own auth)
ALTER TABLE studio_users DISABLE ROW LEVEL SECURITY;
ALTER TABLE studio_projects DISABLE ROW LEVEL SECURITY;
ALTER TABLE studio_notifications DISABLE ROW LEVEL SECURITY;
ALTER TABLE studio_integrations DISABLE ROW LEVEL SECURITY;

-- Grant access to anon role
GRANT ALL ON studio_users, studio_projects, studio_notifications, studio_integrations TO anon, authenticated;`;
  openModal(`<div class="modal-title">Initialize Supabase Tables</div>
<div class="ib ib-gold">Copy this SQL and run it in your <strong>Supabase SQL Editor</strong> (Dashboard → SQL Editor → New query). Then come back and click <strong>Push all to Supabase</strong>.</div>
<div style="position:relative;margin-bottom:12px">
<div style="background:#050505;border:1px solid var(--b2);border-radius:6px;padding:11px 13px;max-height:340px;overflow-y:auto">
<pre id="sb-sql-pre" style="font-size:9px;color:var(--t3);line-height:1.6;white-space:pre;font-family:monospace;margin:0">${esc(sql)}</pre>
</div>
<button class="btn btn-gold btn-sm" style="position:absolute;top:8px;right:8px" onclick="navigator.clipboard.writeText(document.getElementById('sb-sql-pre').textContent).then(()=>toast('SQL copied!','ok'))">Copy SQL</button>
</div>
<div class="btn-row"><button class="btn btn-green" onclick="closeModal();sbPushAll()">Done — Push Data Now</button><button class="btn btn-ghost" onclick="closeModal()">Close</button></div>`);
}
async function sbPullAll(){
  const el=document.getElementById('sb-result');
  if(el)el.innerHTML='<span style="color:var(--t4)">Pulling data from Supabase…</span>';
  const ok=await SB.pullAll();
  if(ok){
    seedAdmin();render();
    toast('Data pulled from Supabase!','ok');
    if(el)el.innerHTML='<span style="color:var(--green)">✓ Data pulled successfully — '+_users.length+' users, '+_projects.length+' projects</span>';
  }else{
    toast('Pull failed — run Test Connection to diagnose','err');
    if(el)el.innerHTML='<span style="color:var(--red)">✗ Pull failed. Check connection, or run Initialize Tables first if this is a new project.</span>';
  }
}
async function sbPushAll(){
  toast('Pushing to Supabase…','info');
  await SB.pushAll();
}

async function persistAllBase64Assets(){
  const users=DB.getUsers();
  let count=0;
  for(const u of users){
    let changed=false;
    for(const a of (u.brandAssets||[])){
      if(a.preview&&a.preview.startsWith('data:')&&!a.persisted){
        try{
          const pUrl=await persistImage(a.preview);
          a.preview=pUrl;a.persisted=true;changed=true;count++;
          toast('Uploaded: '+a.name,'ok');
        }catch(e){}
      }
    }
    if(changed)DB.saveUser(u);
  }
  toast(count+' assets uploaded to imgbb!','ok');
  render();
}
// ══ ADMIN LEADS ══
function adminLeads(){
  const ltab=S.leadsTab||'demo';
  const demos=S.leadsData?.demos||null;
  const enqs=S.leadsData?.enquiries||null;
  const loading=S.leadsLoading;
  function statusBadge(s){const map={pending:'var(--gold)',contacted:'var(--blue)',converted:'var(--green)',closed:'var(--t4)'};return`<span style="font-size:8px;background:${(map[s]||'var(--t4)')}22;color:${map[s]||'var(--t4)'};border:1px solid ${(map[s]||'var(--t4)')}44;padding:2px 7px;border-radius:8px;text-transform:uppercase;font-weight:700">${s||'pending'}</span>`;}
  function fmtDate(d){if(!d)return'—';const dt=new Date(d);return isNaN(dt)?d:dt.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});}
  function demoRows(){
    if(!demos)return`<tr><td colspan="8" style="text-align:center;padding:48px"><div style="font-size:28px;margin-bottom:12px;opacity:0.15">◈</div><div style="font-size:12px;color:var(--t3);margin-bottom:4px">No demo data loaded yet</div><div style="font-size:10px;color:var(--t4);margin-bottom:14px">Click <strong style="color:var(--gold)">Refresh</strong> to pull the latest leads from your website</div><button class="btn btn-outline btn-sm" onclick="leadsRefresh()">↓ Load Demos</button></td></tr>`;
    if(!demos.length)return`<tr><td colspan="8" style="text-align:center;padding:48px"><div style="font-size:28px;margin-bottom:12px;opacity:0.15">✦</div><div style="font-size:12px;color:var(--t3);margin-bottom:4px">No demo requests yet</div><div style="font-size:10px;color:var(--t4)">Your next client is on their way — demos will appear here automatically</div></td></tr>`;
    return demos.map((d,i)=>`<tr>
<td style="font-size:10px;color:#fff;font-weight:600">${esc(d.name||'—')}</td>
<td style="font-size:9px;color:var(--t3)">${esc(d.email||'—')}</td>
<td style="font-size:9px;color:var(--t4)">${esc(d.company||'—')}</td>
<td style="font-size:9px;color:var(--t3)">${esc(d.role||'—')}</td>
<td style="font-size:9px;color:var(--t4)">${Array.isArray(d.project_types)?d.project_types.join(', '):(d.project_types||'—')}</td>
<td style="font-size:9px;color:var(--gold);font-family:monospace">${fmtDate(d.demo_date)}${d.demo_time?'<br><span style=\'color:var(--t4)\'>'+esc(d.demo_time)+'</span>':''}</td>
<td>${statusBadge(d.status||'pending')}</td>
<td><div style="display:flex;gap:3px;flex-wrap:wrap">
<button class="btn btn-ghost btn-sm" style="font-size:8px" onclick="leadsSetStatus('demo',${i},'contacted')">Contacted</button>
<button class="btn btn-ghost btn-sm" style="font-size:8px;color:var(--green)" onclick="leadsSetStatus('demo',${i},'converted')">Converted</button>
<button class="btn btn-ghost btn-sm" style="font-size:8px;color:var(--t4)" onclick="leadsAddNote('demo',${i})">Note</button>
</div>${d.admin_notes?`<div style="font-size:8px;color:var(--gold);margin-top:3px;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${esc(d.admin_notes)}">📝 ${esc(d.admin_notes)}</div>`:''}</td>
</tr>`).join('');
  }
  function enqRows(){
    if(!enqs)return`<tr><td colspan="7" style="text-align:center;padding:48px"><div style="font-size:28px;margin-bottom:12px;opacity:0.15">◈</div><div style="font-size:12px;color:var(--t3);margin-bottom:4px">No enquiry data loaded yet</div><div style="font-size:10px;color:var(--t4);margin-bottom:14px">Click <strong style="color:var(--gold)">Refresh</strong> to pull the latest enquiries</div><button class="btn btn-outline btn-sm" onclick="leadsRefresh()">↓ Load Enquiries</button></td></tr>`;
    if(!enqs.length)return`<tr><td colspan="7" style="text-align:center;padding:48px"><div style="font-size:28px;margin-bottom:12px;opacity:0.15">✦</div><div style="font-size:12px;color:var(--t3);margin-bottom:4px">No enquiries yet</div><div style="font-size:10px;color:var(--t4)">Enquiries from your website will appear here when they come in</div></td></tr>`;
    return enqs.map((e,i)=>`<tr>
<td style="font-size:10px;color:#fff;font-weight:600">${esc(e.name||'—')}</td>
<td style="font-size:9px;color:var(--t3)">${esc(e.email||'—')}</td>
<td style="font-size:9px;color:var(--t4)">${esc(e.company||'—')}</td>
<td style="font-size:9px;color:var(--gold)">${esc(e.budget_range||'—')}</td>
<td style="font-size:9px;color:var(--t3)">${esc(e.timeline||'—')}</td>
<td style="font-size:9px;color:var(--t4);max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${esc(e.message||'')}">${esc((e.message||'—').substring(0,80)+(e.message?.length>80?'…':''))}</td>
<td>${statusBadge(e.status||'pending')}</td>
<td><div style="display:flex;gap:3px;flex-wrap:wrap">
<button class="btn btn-ghost btn-sm" style="font-size:8px" onclick="leadsSetStatus('enq',${i},'contacted')">Contacted</button>
<button class="btn btn-ghost btn-sm" style="font-size:8px;color:var(--green)" onclick="leadsSetStatus('enq',${i},'converted')">Converted</button>
<button class="btn btn-ghost btn-sm" style="font-size:8px;color:var(--t4)" onclick="leadsAddNote('enq',${i})">Note</button>
</div>${e.admin_notes?`<div style="font-size:8px;color:var(--gold);margin-top:3px;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${esc(e.admin_notes)}">📝 ${esc(e.admin_notes)}</div>`:''}</td>
</tr>`).join('');
  }
  return`<div class="page">
<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:14px">
<div><div class="page-title">Leads</div><div class="page-sub">Demo bookings and enquiries from the website</div></div>
<button class="btn btn-outline btn-sm" onclick="leadsRefresh()" ${loading?'disabled':''}>↓ ${loading?'Loading…':'Refresh'}</button>
</div>
<div style="display:flex;gap:6px;margin-bottom:14px">
<button onclick="S.leadsTab='demo';render()" style="padding:5px 14px;border-radius:5px;border:1px solid ${ltab==='demo'?'var(--gold)':'var(--b2)'};background:${ltab==='demo'?'var(--bg2)':'var(--bg3)'};color:${ltab==='demo'?'var(--gold)':'var(--t4)'};cursor:pointer;font-size:10px;font-weight:${ltab==='demo'?'700':'400'}">Demo Requests ${demos?`(${demos.length})`:''}  </button>
<button onclick="S.leadsTab='enq';render()" style="padding:5px 14px;border-radius:5px;border:1px solid ${ltab==='enq'?'var(--gold)':'var(--b2)'};background:${ltab==='enq'?'var(--bg2)':'var(--bg3)'};color:${ltab==='enq'?'var(--gold)':'var(--t4)'};cursor:pointer;font-size:10px;font-weight:${ltab==='enq'?'700':'400'}">Enquiries ${enqs?`(${enqs.length})`:''}  </button>
</div>
${ltab==='demo'?`<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:8px;overflow:auto">
<table class="tbl"><thead><tr><th>Name</th><th>Email</th><th>Company</th><th>Role</th><th>Project Types</th><th>Demo Time</th><th>Status</th><th>Actions</th></tr></thead>
<tbody>${demoRows()}</tbody></table></div>`
:`<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:8px;overflow:auto">
<table class="tbl"><thead><tr><th>Name</th><th>Email</th><th>Company</th><th>Budget</th><th>Timeline</th><th>Message</th><th>Status</th><th>Actions</th></tr></thead>
<tbody>${enqRows()}</tbody></table></div>`}
</div>`;
}
async function leadsRefresh(){
  if(!SB.ready()){toast('Configure Supabase first','err');return;}
  S.leadsLoading=true;render();
  try{
    const [dr,eq]=await Promise.all([
      fetch(SB._url+'/rest/v1/studio_demo_requests?order=created_at.desc&limit=200',{headers:SB._rh()}).then(r=>r.json()),
      fetch(SB._url+'/rest/v1/studio_enquiries?order=created_at.desc&limit=200',{headers:SB._rh()}).then(r=>r.json())
    ]);
    S.leadsData={demos:Array.isArray(dr)?dr:[],enquiries:Array.isArray(eq)?eq:[]};
    toast('Leads loaded','ok');
  }catch(e){toast('Load failed: '+e.message,'err');}
  S.leadsLoading=false;render();
}
async function leadsSetStatus(type,idx,status){
  if(!SB.ready()){toast('Configure Supabase first','err');return;}
  const key=type==='demo'?'demos':'enquiries';
  const table=type==='demo'?'studio_demo_requests':'studio_enquiries';
  const row=(S.leadsData?.[key]||[])[idx];
  if(!row)return;
  row.status=status;
  render();
  try{
    await fetch(SB._url+'/rest/v1/'+table+'?id=eq.'+row.id,{method:'PATCH',headers:SB._wh(),body:JSON.stringify({status})});
    toast('Status updated','ok');
  }catch(e){toast('Update failed','err');}
}
async function leadsAddNote(type,idx){
  const key=type==='demo'?'demos':'enquiries';
  const table=type==='demo'?'studio_demo_requests':'studio_enquiries';
  const row=(S.leadsData?.[key]||[])[idx];if(!row)return;
  const note=prompt('Add note for '+row.name+':',row.admin_notes||'');
  if(note===null)return;
  row.admin_notes=note;render();
  if(!SB.ready())return;
  try{
    await fetch(SB._url+'/rest/v1/'+table+'?id=eq.'+row.id,{method:'PATCH',headers:SB._wh(),body:JSON.stringify({admin_notes:note})});
    toast('Note saved','ok');
  }catch(e){toast('Note save failed','err');}
}

function saveSheetUrl(){const u=DB.getUser(S.session?.userId);if(!u)return;u.sheetsUrl=document.getElementById('sheets-url')?.value.trim()||'';DB.saveUser(u);}
// Audio playback with canvas waveform
const _audioPlayers={};
function playAudioWithWaveform(url,id){
  // Stop any existing
  if(_audioPlayers[id]){
    _audioPlayers[id].pause();
    delete _audioPlayers[id];
    const btn=document.getElementById('wplay_'+id);
    if(btn)btn.innerHTML='<div style="width:32px;height:32px;border-radius:50%;background:rgba(16,185,129,0.8);display:flex;align-items:center;justify-content:center;font-size:12px;color:#fff">&#9654;</div>';
    return;
  }
  const audio=new Audio(url);
  _audioPlayers[id]=audio;
  const canvas=document.getElementById('waveform_'+id);
  const btn=document.getElementById('wplay_'+id);
  if(btn)btn.innerHTML='<div style="width:32px;height:32px;border-radius:50%;background:rgba(239,68,68,0.8);display:flex;align-items:center;justify-content:center;font-size:12px;color:#fff">&#9646;&#9646;</div>';
  // Draw animated waveform bars
  if(canvas){
    const ctx=canvas.getContext('2d');
    const W=canvas.width,H=canvas.height;
    const bars=40;
    let frame=0;
    const animate=()=>{
      if(!_audioPlayers[id])return;
      ctx.clearRect(0,0,W,H);
      for(let i=0;i<bars;i++){
        const x=i*(W/bars);const bw=(W/bars)-2;
        const h=8+Math.sin((frame*0.1)+i*0.5)*12+Math.random()*8;
        ctx.fillStyle='rgba(16,185,129,'+(0.4+Math.sin((frame*0.08)+i*0.3)*0.3)+')';
        ctx.fillRect(x,H/2-h/2,bw,h);
      }
      frame++;
      requestAnimationFrame(animate);
    };
    animate();
  }
  audio.play().catch(()=>{});
  audio.onended=()=>{
    delete _audioPlayers[id];
    if(btn)btn.innerHTML='<div style="width:32px;height:32px;border-radius:50%;background:rgba(16,185,129,0.8);display:flex;align-items:center;justify-content:center;font-size:12px;color:#fff">&#9654;</div>';
    if(canvas){
      const ctx=canvas.getContext('2d');ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle='rgba(16,185,129,0.15)';
      ctx.fillRect(0,canvas.height/2-2,canvas.width,4);
    }
  };
}

function reorderSgResult(targetId, draggedId){
  if(!S.sgResults||targetId===draggedId)return;
  const dragIdx=S.sgResults.findIndex(r=>r.id===draggedId);
  const targetIdx=S.sgResults.findIndex(r=>r.id===targetId);
  if(dragIdx<0||targetIdx<0)return;
  const [dragged]=S.sgResults.splice(dragIdx,1);
  S.sgResults.splice(targetIdx,0,dragged);
  _tryLS(()=>localStorage.setItem('sv2_sg_history',JSON.stringify(S.sgResults)));
  render();
}

function renderModelLog(){
  var el=document.getElementById('model-log-rows');if(!el)return;
  var log=window._modelLog||[];
  if(!log.length){el.innerHTML='<div style="color:var(--t4);font-size:10px">No queries yet.</div>';return;}
  el.innerHTML=log.map(function(e){
    return '<div style="background:var(--bg3);border:1px solid var(--b1);border-radius:5px;padding:6px 10px;display:flex;gap:10px;align-items:center">'
      +'<span style="font-size:9px;font-weight:700;color:var(--gold);min-width:160px;flex-shrink:0">'+e.model+'</span>'
      +'<span style="font-size:9px;color:var(--t4)">in: '+e.in+' out: '+e.out+'</span>'
      +'<span style="font-size:8px;color:var(--t4);margin-left:auto">'+new Date(e.ts).toLocaleTimeString()+'</span>'
      +'</div>';
  }).join('');
}
async function testFalKey(){
  var el=document.getElementById("api-test-result");
  if(el)el.textContent="Testing fal.ai key...";
  var k=kF();
  if(!k){if(el)el.style.color="var(--red)",el.textContent="No fal.ai key saved in Settings";return;}
  try{
    var payload={url:"https://queue.fal.run/fal-ai/flux-pro/v1.1-ultra",method:"POST",body:{prompt:"test",aspect_ratio:"1:1"},authorization:"Key "+k};
    var r=await fetch("/api/fal",{method:"POST",headers:_authHeaders(),body:JSON.stringify(payload)});
    var txt=await r.text();
    var msg;
    try{
      var d=JSON.parse(txt);
      if(d.request_id)msg="fal.ai WORKING - queued: "+d.request_id.substring(0,12);
      else if(d.error)msg="fal.ai error: "+d.error;
      else msg=txt.substring(0,100);
    }catch(pe){msg="raw: "+txt.substring(0,100);}
    if(el){el.style.color=r.ok?"var(--green)":"var(--gold)";el.textContent="["+r.status+"] "+msg;}
  }catch(e){
    if(el){el.style.color="var(--red)";el.textContent="Network error: "+e.message;}
  }
}
async function testClaudeKey(){
  var el=document.getElementById("api-test-result");
  if(el)el.textContent="Testing Claude key...";
  try{
    var r=await callClaude("You are a test.","Respond: OK",50);
    if(el){el.style.color="var(--green)";el.textContent="Claude WORKING: "+r.substring(0,40);}
  }catch(e){
    if(el){el.style.color="var(--red)";el.textContent="Claude error: "+e.message;}
  }
}
function saveGlobalPrompts(){
  const u=getAdminUser();if(!u)return;
  u.globalPrompt=document.getElementById('global-prompt')?.value||'';
  u.negativePrompt=document.getElementById('negative-prompt')?.value||'';
  DB.saveUser(u);
  toast('Prompts saved and active on all AI calls','ok');
}
function saveAdminAccount(){const u=DB.getUser(S.session?.userId);if(!u)return;const n=document.getElementById('admin-name')?.value.trim();const p=document.getElementById('admin-pw')?.value.trim();if(n)u.name=n;if(p)u.password=p;DB.saveUser(u);S.session.name=u.name;DB.setSession(S.session);render();toast('Account saved!','ok');}

function showSheetsSetupModal(){
  const script=`// Paste this into Google Apps Script (script.google.com)
// Deploy as Web App: Execute as Me, Anyone can access

const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';

// Handle CORS preflight
function doGet(e) {
  return ContentService.createTextOutput('OK').setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    // Handle both application/json and text/plain (no-cors mode sends text/plain)
    const raw = e.postData.contents;
    const data = JSON.parse(raw);
    const ss = SpreadsheetApp.openById(SHEET_ID);
    
    // Projects sheet
    let sheet = ss.getSheetByName('Projects') || ss.insertSheet('Projects');
    if(sheet.getLastRow()===0) sheet.appendRow(['ID','Project ID','Name','Type','Client','Client ID','AI PM','Status','Priority','Deadline','Synopsis Revisions','Storyboard Released','Created','Updated']);
    const existingIds = sheet.getRange(2,1,Math.max(1,sheet.getLastRow()-1),1).getValues().flat();
    data.projects.forEach(p => {
      const row = [p.id,p.projectId||'',p.name,p.type,p.client,p.clientId,p.creator,p.status,p.priority||'',p.deadline||'',p.synopsisRevisions,p.storyboardReleased,p.createdAt,p.updatedAt];
      const idx = existingIds.indexOf(p.id);
      if(idx>=0) sheet.getRange(idx+2,1,1,row.length).setValues([row]);
      else sheet.appendRow(row);
    });

    // Clients sheet  
    let cs = ss.getSheetByName('Clients') || ss.insertSheet('Clients');
    cs.clearContents(); cs.appendRow(['Client ID','Name','Email','Projects','Active']);
    data.clients.forEach(c => cs.appendRow([c.id,c.name,c.email,c.projects,c.active]));

    // Creators sheet
    let crs = ss.getSheetByName('Creators') || ss.insertSheet('Creators');
    crs.clearContents(); crs.appendRow(['Name','Username','Assigned Clients','Active']);
    data.creators.forEach(c => crs.appendRow([c.name,c.username,c.clients,c.active]));

    return ContentService.createTextOutput(JSON.stringify({status:'ok',synced:data.projects.length+' projects'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({status:'error',message:err.message}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;
  openModal(`<div class="modal-title">Google Sheets Setup</div>
<div class="ib ib-gold" style="margin-bottom:12px"><strong>3 steps to connect your Google Sheet:</strong></div>
<div style="font-size:10px;color:var(--t3);line-height:1.9;margin-bottom:12px">
<strong style="color:var(--t1)">Step 1:</strong> Open <a href="https://script.google.com" target="_blank" style="color:var(--blue)">script.google.com</a> and create a new project.<br>
<strong style="color:var(--t1)">Step 2:</strong> Paste the script below into the editor. Replace <code style="color:var(--gold)">YOUR_GOOGLE_SHEET_ID_HERE</code> with your Sheet ID (found in the Sheet URL).<br>
<strong style="color:var(--t1)">Step 3:</strong> Click <strong>Deploy → New Deployment → Web App</strong>. Set <em>Execute as: Me</em>, <em>Who has access: Anyone</em>. Copy the URL and paste it in Settings.
</div>
<div style="background:#050505;border:1px solid var(--b2);border-radius:5px;padding:10px;max-height:260px;overflow-y:auto;margin-bottom:12px">
<pre style="font-size:8px;color:var(--t3);line-height:1.5;white-space:pre-wrap;font-family:monospace">${esc(script)}</pre></div>
<button class="btn btn-gold" onclick="navigator.clipboard.writeText(document.querySelector('#modal-root pre').textContent).then(()=>toast('Script copied!','ok'))">Copy Script</button>
<button class="btn btn-ghost" style="margin-left:8px" onclick="closeModal()">Close</button>`);
}

function exportUsersCSV(role){
  const us=DB.getUsers().filter(u=>u.role===role);
  const rows=role==='client'?[['Client ID','Name','Email','Projects','Status']]:
    [['Username','Name','Email','Assigned Clients','Status']];
  us.forEach(u=>{
    const px=DB.getProjects().filter(p=>p.clientId===u.id).length;
    if(role==='client')rows.push([u.clientId||'',u.name,u.email||'',px,u.active!==false?'Active':'Inactive']);
    else rows.push([u.username||u.name,u.name,u.email||'',(u.assignedClients||[]).length,u.active!==false?'Active':'Inactive']);
  });
  dlTxt(rows.map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\n'),role+'s_export_'+new Date().toISOString().slice(0,10)+'.csv');
}

function togglePw(uid,pw){const el=document.getElementById('pw-'+uid);if(el)el.textContent=el.textContent.includes('•')?pw:'••••••';}
function copyCode(el){navigator.clipboard.writeText(el.textContent).then(()=>toast('Copied!','ok'));}
function showResetPwModal(uid){const u=DB.getUser(uid);if(!u)return;const np=gpw();openModal(`<div class="modal-title">Reset Password — ${esc(u.name)}</div>
<div class="ib ib-gold">New password: <strong style="font-size:13px;letter-spacing:1px">${np}</strong></div>
<div class="btn-row"><button class="btn btn-gold" onclick="doResetPw('${uid}','${np}')">Confirm Reset</button><button class="btn btn-ghost" onclick="closeModal()">Cancel</button></div>`);}
function doResetPw(uid,pw){const u=DB.getUser(uid);if(!u)return;u.password=pw;DB.saveUser(u);closeModal();toast('Password reset to: '+pw,'ok');}

// ══════════════════════════════════════
// EMPLOYEE MAIN
// ══════════════════════════════════════
function creatorMain(){
  if(S.tab==='studio'&&S.pid)return studioWrap();
  if(S.tab==='clients')return creatorClients();
  if(S.tab==='inbox')return creatorInbox();
  return creatorDashboard();
}

function creatorDashboard(){
  const u=DB.getUser(S.session.userId);
  const cids=u&&u.assignedClients?u.assignedClients:[];
  const ps=DB.getProjects().filter(function(p){return cids.includes(p.clientId)||p.assignedCreatorId===S.session.userId;});
  if(S.creatorDetailPid){var dp=DB.getProject(S.creatorDetailPid);if(dp)return creatorProjectDetail(dp);}
  const attn=ps.filter(function(p){return p.newBrief||p.pendingFeedback;});
  const priorityScore=function(p){
    if(p.newBrief||p.pendingFeedback)return 0;
    var wo={'brief_submitted':1,'synopsis_review':2,'synopsis_locked':3,'storyboard_in_progress':4,'storyboard_review':5,'complete':6,'new':7};
    return wo[p.workflowStatus||'new']||7;
  };
  const sorted=[...ps].sort(function(a,b){return priorityScore(a)-priorityScore(b)||(new Date(b.updatedAt)-new Date(a.updatedAt));});
  const filter=S.creatorFilter||'all';
  const wfCounts={};
  ps.forEach(function(p){var wf=p.workflowStatus||'new';wfCounts[wf]=(wfCounts[wf]||0)+1;});
  const filtered=filter==='all'?sorted:filter==='action'?sorted.filter(function(p){return p.newBrief||p.pendingFeedback;}):sorted.filter(function(p){return p.workflowStatus===filter;});
  const filterBtns=[
    {k:'all',l:'All',cnt:ps.length},
    {k:'action',l:'Needs Action',cnt:attn.length},
    {k:'brief_submitted',l:'Brief In',cnt:wfCounts['brief_submitted']||0},
    {k:'storyboard_in_progress',l:'In Production',cnt:wfCounts['storyboard_in_progress']||0},
    {k:'complete',l:'Complete',cnt:wfCounts['complete']||0}
  ].filter(function(b){return b.k==='all'||b.cnt>0;});
  const onboardChecklist=creatorOnboardChecklist(u);
  return`<div class="page">
${onboardChecklist}
<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;margin-bottom:16px">
<div><div class="page-title">My Projects</div><div class="page-sub">${ps.length} assigned &middot; ${attn.length} need action</div></div>
<div style="display:flex;gap:5px;flex-wrap:wrap">
${filterBtns.map(function(b){return `<button onclick="S.creatorFilter='${b.k}';render()" class="btn btn-sm ${filter===b.k?'btn-gold':'btn-ghost'}" style="font-size:9px">${b.l}${b.cnt?' ('+b.cnt+')':''}</button>`;}).join('')}
</div></div>
${attn.length?`<div class="ib ib-red" style="margin-bottom:12px"><strong>${attn.length} project(s) need attention</strong> &mdash; client brief or feedback waiting.</div>`:''}
<div style="display:flex;flex-direction:column;gap:9px">
${filtered.length?filtered.map(function(p){return creatorProjCard(p);}).join(''):'<div style="color:var(--t4);font-size:11px;padding:24px;text-align:center;background:var(--bg2);border:1px dashed var(--b2);border-radius:8px">No projects match this filter.</div>'}
</div></div>`;
}

function creatorProjCard(p){
  const mt=MT[p.type];const cl=DB.getUser(p.clientId);const wf=p.workflowStatus||'new';const alert=p.newBrief||p.pendingFeedback;
  const typeAccents={gold:'#FF6B35',purple:'var(--purple)',red:'var(--red)',blue:'var(--blue)',teal:'var(--green)',green:'var(--green)',pink:'#EC4899',coral:'var(--gold)'};
  const accent=typeAccents[mt?.color||'gold']||'#FF6B35';
  const revs=p.synopsisRevisions||[];const hasSyn=revs.length>0;
  const brief={...p.clientBrief,...p.brief};const briefKeys=Object.keys(brief).filter(k=>brief[k]&&k!=='videoRefUrl'&&k!=='additionalNotes');
  const unread=getUnreadCommentCount(p,S.session?.userId);
  const clAssets=cl?.brandAssets||[];
  return`<div style="background:var(--bg2);border:1px solid ${alert?'var(--red)44':'var(--b1)'};border-top:2px solid ${alert?'var(--red)':accent};border-radius:9px;overflow:hidden">
<!-- Header -->
<div style="padding:11px 14px;display:flex;align-items:flex-start;gap:10px;border-bottom:1px solid var(--b1)">
<div style="font-size:20px;flex-shrink:0;line-height:1.2">${mt?.icon||'?'}</div>
<div style="flex:1;min-width:0">
<div style="font-size:12px;font-weight:700;color:#fff;margin-bottom:2px">${esc(p.name)}</div>
<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
<code style="font-size:8px;color:${accent};font-family:monospace">${p.projectId||'—'}</code>
<span style="font-size:9px;color:var(--t4)">${mt?.label}</span>
${cl?`<span style="font-size:9px;color:var(--t3)">· 👤 ${esc(cl.name)}</span>`:''}
</div>
</div>
<div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
${alert?'<span class="badge badge-red">Action needed</span>':''}
<span class="badge badge-${wf==='complete'?'green':wf.includes('review')?'gold':'gray'}">${wf.replace(/_/g,' ')}</span>
${unread?`<span class="badge badge-blue" style="cursor:pointer" onclick="event.stopPropagation();openStudio('${p.id}');setTimeout(()=>{S.stage=98;render()},50)">💬 ${unread} new</span>`:''}
</div>
</div>
<!-- Brief preview -->
${briefKeys.length?`<div style="padding:9px 14px;border-bottom:1px solid var(--b1);background:var(--bg3)">
<div style="font-size:8px;color:var(--t4);text-transform:uppercase;font-weight:700;margin-bottom:6px">Client Brief</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:3px 10px">
${briefKeys.slice(0,6).map(k=>`<div style="font-size:9px;color:var(--t3);overflow:hidden;text-overflow:ellipsis;white-space:nowrap"><strong style="color:var(--t4)">${k.replace(/_/g,' ')}: </strong>${esc(String(brief[k]).substring(0,40))}</div>`).join('')}
${briefKeys.length>6?`<div style="font-size:9px;color:var(--t4)">+${briefKeys.length-6} more fields</div>`:''}
</div>
<button class="btn btn-ghost btn-sm" style="margin-top:6px;font-size:8px;padding:2px 7px" onclick="S.creatorDetailPid='${p.id}';render()">View full brief →</button>
</div>`:''}
<!-- Synopsis status -->
${hasSyn?`<div style="padding:8px 14px;border-bottom:1px solid var(--b1);display:flex;align-items:center;gap:8px">
<div style="font-size:9px;color:var(--t3);flex:1">
<strong style="color:${p.synopsisLocked?'var(--green)':'var(--gold)'}">${p.synopsisLocked?'✓ Synopsis approved':'📝 Synopsis in review'}</strong>
· ${revs.length} version${revs.length!==1?'s':''} · Rev ${p.synopsisRevisionCount||0}/3 used
</div>
<button class="btn btn-ghost btn-sm" style="font-size:8px;padding:2px 7px" onclick="S.creatorDetailPid='${p.id}';render()">View all →</button>
</div>`:''}
<!-- Brand assets -->
${clAssets.length?`<div style="padding:7px 14px;border-bottom:1px solid var(--b1);display:flex;align-items:center;gap:6px">
<span style="font-size:9px;color:var(--t4)">Brand assets: </span>
${clAssets.slice(0,4).map(a=>a.preview?`<img src="${a.preview}" style="width:22px;height:22px;border-radius:3px;object-fit:cover;border:1px solid var(--b2)"/>`:'<span style="font-size:16px">📄</span>').join('')}
${clAssets.length>4?`<span style="font-size:9px;color:var(--t4)">+${clAssets.length-4} more</span>`:''}
<button class="btn btn-ghost btn-sm" style="margin-left:auto;font-size:8px;padding:2px 7px" onclick="viewClientAssets('${p.clientId}')">View all</button>
</div>`:''}
<!-- Footer actions -->
<div style="padding:9px 14px;display:flex;gap:7px;flex-wrap:wrap;align-items:center">
${wfMiniDots(p)}
<div style="margin-left:auto;display:flex;gap:5px;flex-wrap:wrap">
${p.workflowStatus==='brief_submitted'||p.newBrief?`<button class="btn btn-gold btn-sm" onclick="openStudio('${p.id}');setTimeout(()=>{S.step=2;render()},100)">✦ Generate Synopsis</button>`:''}
${p.workflowStatus==='synopsis_locked'?`<button class="btn btn-blue btn-sm" onclick="openStudio('${p.id}');setTimeout(()=>{S.stage=2;S.step=2;render()},100)">✦ Generate Storyboard</button>`:''}
${p.workflowStatus==='storyboard_in_progress'?`<button class="btn btn-green btn-sm" onclick="releaseStoryboard('${p.id}')">↑ Release to Client</button>`:''}
${p.pendingFeedback==='storyboard'?`<button class="btn btn-red btn-sm" onclick="openStudio('${p.id}');setTimeout(()=>{S.stage=2;S.step=2;render()},100)">⚠ Storyboard Feedback</button>`:''}
<button class="btn btn-outline btn-sm" onclick="S.creatorDetailPid='${p.id}';render()">Details</button>
<button class="btn btn-ghost btn-sm" onclick="openStudio('${p.id}')">Studio →</button>
</div></div></div>`;
}


// ── Creator Project Detail ──
function creatorProjectDetail(p){
  var mt=MT[p.type];var cl=DB.getUser(p.clientId);var wf=p.workflowStatus||'new';
  var brief=Object.assign({},p.clientBrief,p.brief);
  var revs=p.synopsisRevisions||[];
  var clAssets=cl&&cl.brandAssets?cl.brandAssets:[];
  var accent=({gold:'#FF6B35',purple:'var(--purple)',red:'var(--red)',blue:'var(--blue)',teal:'var(--green)',green:'var(--green)',pink:'#EC4899',coral:'var(--gold)'})[mt&&mt.color?mt.color:'gold']||'#FF6B35';
  var activeTab=S.creatorDetailTab||'brief';
  var wfSteps=[
    {k:'new',l:'Project Created'},
    {k:'brief_submitted',l:'Brief Received'},
    {k:'synopsis_review',l:'Synopsis in Review'},
    {k:'synopsis_locked',l:'Synopsis Approved'},
    {k:'storyboard_in_progress',l:'Storyboard in Production'},
    {k:'storyboard_review',l:'Storyboard with Client'},
    {k:'complete',l:'Delivered'}
  ];
  var curIdx=wfSteps.map(function(s){return s.k;}).indexOf(wf);
  var tabDefs=[{k:'brief',l:'Brief'},{k:'timeline',l:'Timeline'},{k:'brand',l:'Brand Folder'},{k:'resources',l:'Resources'},{k:'synopsis',l:'Synopsis'}];
  var briefEntries=Object.entries(brief).filter(function(e){return e[1]&&e[0]!=='videoRefUrl'&&e[0]!=='additionalNotes';});

  // Build tab content
  var tabContent='';
  if(activeTab==='brief'){
    tabContent='<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:8px;overflow:hidden;margin-bottom:14px">';
    if(briefEntries.length){
      tabContent+=briefEntries.map(function(e){return '<div style="padding:9px 13px;border-bottom:1px solid var(--b1);display:flex;gap:10px"><div style="font-size:9px;font-weight:700;color:var(--t4);text-transform:uppercase;min-width:110px;flex-shrink:0">'+e[0].replace(/_/g,' ')+'</div><div style="font-size:10px;color:var(--t2);line-height:1.6;flex:1">'+esc(String(e[1]))+'</div></div>';}).join('');
    } else {
      tabContent+='<div style="padding:13px;color:var(--t4);font-size:10px">No brief submitted yet.</div>';
    }
    tabContent+='</div>';
    if(p.clientRefs&&p.clientRefs.length){
      tabContent+='<div style="font-size:9px;font-weight:700;color:var(--t4);text-transform:uppercase;margin-bottom:6px">Reference Files</div><div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">';
      tabContent+=p.clientRefs.map(function(r){return r.preview?'<img src="'+r.preview+'" style="width:64px;height:64px;object-fit:cover;border-radius:5px;border:1px solid var(--b1);cursor:pointer" onclick="openImgModal(\''+esc(r.name)+'\',\''+r.preview+'\')">':
        '<div style="background:var(--bg3);border:1px solid var(--b1);border-radius:5px;padding:8px 10px;font-size:9px;color:var(--t3)">File: '+esc(r.name)+'</div>';}).join('');
      tabContent+='</div>';
    }
  } else if(activeTab==='timeline'){
    tabContent='<div style="display:flex;flex-direction:column;gap:0;margin-bottom:20px">';
    tabContent+=wfSteps.map(function(step,i){
      var done=i<curIdx;var active=i===curIdx;
      return '<div style="display:flex;gap:12px;align-items:flex-start">'
        +'<div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">'
        +'<div style="width:28px;height:28px;border-radius:50%;border:2px solid '+(done?'var(--green)':active?accent:'var(--b2)')+';background:'+(done?'var(--green)':active?accent+'33':'var(--bg3)')+';display:flex;align-items:center;justify-content:center;font-size:11px;color:'+(done?'#fff':active?accent:'var(--t4)')+';font-weight:700">'+(done?'&check;':i+1)+'</div>'
        +(i<wfSteps.length-1?'<div style="width:2px;height:28px;background:'+(done?'var(--green)':'var(--b2)')+';margin:3px 0"></div>':'')
        +'</div>'
        +'<div style="padding-bottom:20px;flex:1">'
        +'<div style="font-size:12px;font-weight:700;color:'+(done?'var(--green)':active?accent:'var(--t3)')+';margin-bottom:2px">'+step.l+(active?' <span style="font-size:9px;background:'+accent+'22;color:'+accent+';border-radius:3px;padding:1px 6px">CURRENT</span>':'')+'</div>'
        +'</div>'
        +'</div>';
    }).join('');
    tabContent+='</div>';
    // Actions
    tabContent+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">';
    if(wf==='brief_submitted'||p.newBrief) tabContent+='<button class="btn btn-gold" style="grid-column:1/-1" onclick="openStudio(\''+p.id+'\');setTimeout(()=>{S.step=2;render()},100)">Generate Synopsis</button>';
    if(wf==='synopsis_locked') tabContent+='<button class="btn btn-blue" style="grid-column:1/-1" onclick="openStudio(\''+p.id+'\');setTimeout(()=>{S.stage=2;S.step=2;render()},100)">Generate Storyboard</button>';
    if(wf==='storyboard_in_progress') tabContent+='<button class="btn btn-green" style="grid-column:1/-1" onclick="releaseStoryboard(\''+p.id+'\')">&uarr; Release to Client</button>';
    if(p.pendingFeedback==='storyboard') tabContent+='<button class="btn btn-red" style="grid-column:1/-1" onclick="openStudio(\''+p.id+'\');setTimeout(()=>{S.stage=2;S.step=2;render()},100)">Address Feedback</button>';
    tabContent+='<button class="btn btn-outline" onclick="openStudio(\''+p.id+'\')">&loz; Studio</button>';
    tabContent+='<button class="btn btn-ghost btn-sm" onclick="openStudio(\''+p.id+'\');setTimeout(()=>{S.stage=98;render()},50)">Comments</button>';
    tabContent+='</div>';
  } else if(activeTab==='brand'){
    if(clAssets.length){
      tabContent='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:10px;margin-bottom:14px">';
      tabContent+=clAssets.map(function(a){
        return '<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:7px;overflow:hidden;cursor:pointer" onclick="openImgModal(\''+esc(a.name)+'\',\''+a.preview+'\')">'
          +(a.preview?'<img src="'+a.preview+'" style="width:100%;aspect-ratio:1;object-fit:cover">':
            '<div style="aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:24px">File</div>')
          +'<div style="padding:5px 7px;font-size:8px;color:var(--t4);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(a.name)+'</div>'
          +'</div>';
      }).join('');
      tabContent+='</div>';
      if(cl&&cl.brandNotes) tabContent+='<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:7px;padding:12px"><div style="font-size:9px;font-weight:700;color:var(--t4);text-transform:uppercase;margin-bottom:6px">Brand Notes</div><div style="font-size:10px;color:var(--t2);line-height:1.7">'+esc(cl.brandNotes)+'</div></div>';
    } else {
      tabContent='<div style="color:var(--t4);font-size:11px;padding:20px;text-align:center;background:var(--bg2);border:1px dashed var(--b2);border-radius:8px">No brand assets uploaded yet.</div>';
    }
  } else if(activeTab==='resources'){
    var files=p.deliveryFiles||[];
    tabContent='<div style="margin-bottom:14px">';
    if(files.length){
      tabContent+=files.map(function(f){return '<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:6px;padding:10px 13px;display:flex;align-items:center;gap:10px;margin-bottom:6px"><div style="font-size:16px">File</div><div style="flex:1"><div style="font-size:11px;color:var(--t1);font-weight:600">'+esc(f.name||'File')+'</div><div style="font-size:9px;color:var(--t4)">'+esc(f.size||'')+'</div></div>'+(f.url?'<a href="'+f.url+'" target="_blank" class="btn btn-ghost btn-sm" style="font-size:9px">&darr; Download</a>':'')+'</div>';}).join('');
    } else {
      tabContent+='<div style="color:var(--t4);font-size:11px;padding:20px;text-align:center;background:var(--bg2);border:1px dashed var(--b2);border-radius:8px">No resource files yet. Admin uploads production assets here.</div>';
    }
    tabContent+='</div>';
  } else if(activeTab==='synopsis'){
    if(revs.length){
      tabContent='<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><span style="font-size:11px;color:var(--t3)">'+revs.length+' version(s)</span>'+(p.synopsisLocked?'<span class="badge badge-green">Approved</span>':'')+'</div>';
      tabContent+='<div style="display:flex;flex-direction:column;gap:10px">';
      tabContent+=revs.map(function(r,i){
        var isLatest=i===revs.length-1;
        return '<div style="background:'+(isLatest?'#0e0a18':'var(--bg2)')+';border:1px solid '+(isLatest?accent+'44':'var(--b1)')+';border-radius:8px;padding:14px">'
          +'<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><span style="font-size:10px;font-weight:700;color:'+(isLatest?accent:'var(--t4)')+'">v'+r.version+(isLatest?' (latest)':'')+'</span><span style="font-size:8px;color:var(--t4)">'+(r.timestamp?new Date(r.timestamp).toLocaleDateString():'')+'</span></div>'
          +(r.feedback?'<div style="font-size:9px;color:var(--t4);margin-bottom:7px;padding:5px 8px;background:var(--bg4);border-radius:4px">Client: "'+esc(r.feedback.substring(0,100))+'"</div>':'')
          +'<div style="font-size:10px;color:var(--t2);line-height:1.8;white-space:pre-wrap">'+esc(r.text)+'</div>'
          +'</div>';
      }).join('');
      tabContent+='</div>';
    } else {
      tabContent='<div style="color:var(--t4);font-size:11px;padding:20px;text-align:center;background:var(--bg2);border:1px dashed var(--b2);border-radius:8px">No synopsis yet. Open Studio to generate one.</div>';
    }
  }

  return`<div class="page">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;flex-wrap:wrap">
<button class="btn btn-ghost btn-sm" onclick="S.creatorDetailPid=null;S.creatorDetailTab=null;render()">&larr; My Projects</button>
<div style="flex:1;min-width:0">
<div style="font-size:16px;font-weight:700;color:#fff">${mt&&mt.icon?mt.icon:''} ${esc(p.name)}</div>
<code style="font-size:9px;color:${accent}">${p.projectId||'&mdash;'}</code>
<span style="font-size:9px;color:var(--t4);margin-left:6px">${cl?'Client: '+esc(cl.name):''}</span>
</div>
<div class="btn-row" style="margin-top:0">
<button class="btn btn-gold" onclick="openStudio('${p.id}')">Open Studio</button>
</div>
</div>
${wfBar(p)}
<div style="display:flex;gap:0;margin-bottom:16px;border-bottom:1px solid var(--b1)">
${tabDefs.map(function(t){return '<button onclick="S.creatorDetailTab=\''+t.k+'\';render()" style="padding:8px 14px;font-size:11px;font-weight:700;cursor:pointer;border:none;background:transparent;color:'+(activeTab===t.k?'var(--gold)':'var(--t4)')+';border-bottom:2px solid '+(activeTab===t.k?'var(--gold)':'transparent')+';margin-bottom:-1px">'+t.l+'</button>';}).join('')}
</div>
${tabContent}
</div>`;
}

function creatorClients(){
  const u=DB.getUser(S.session.userId);
  const clients=(u?.assignedClients||[]).map(id=>DB.getUser(id)).filter(Boolean);
  return`<div class="page"><div class="page-title">My Clients</div><div class="page-sub">${clients.length} assigned</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:11px;margin-top:16px">
${clients.length?clients.map(c=>{
  const ps=DB.getProjects().filter(p=>p.clientId===c.id);
  return`<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:9px;padding:14px">
<div class="urow" style="margin-bottom:10px">${clientAvatar(c,36,8)}
<div class="uinfo"><div class="name">${esc(c.name)}</div><div class="sub">${esc(c.email||'')} · ${c.clientId||'—'}</div></div></div>
<div style="font-size:10px;color:var(--t3);margin-bottom:9px">${ps.length} project(s) · ${(c.brandAssets||[]).length} brand assets</div>
<div class="btn-row" style="margin-top:0">
<button class="btn btn-outline btn-sm" onclick="viewClientBriefs('${c.id}')">View Projects</button>
<button class="btn btn-ghost btn-sm" onclick="viewClientAssets('${c.id}')">Brand Assets</button>
</div></div>`;}).join(''):'<div style="color:var(--t4);font-size:11px;padding:20px">No clients assigned.</div>'}
</div></div>`;
}

function creatorInbox(){
  const uid=S.session?.userId;
  const notifs=DB.getNotifs(uid);
  const unread=notifs.filter(n=>!n.read).length;
  return`<div class="page">
<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:16px">
<div><div class="page-title">Inbox</div><div class="page-sub">${notifs.length} notifications · ${unread} unread</div></div>
${unread?`<button class="btn btn-ghost btn-sm" onclick="DB.markAllRead('${uid}');render()">Mark all read</button>`:''}
</div>
${notifs.length?notifs.map(n=>{const typeColors={brief:'rgba(255,107,53,0.25)',synopsis:'var(--blue)33',approval:'#4ac04a33',storyboard:'var(--purple)33',feedback:'var(--red)44',revision:'var(--red)44',project:'rgba(255,107,53,0.12)'};const col=typeColors[n.type]||'var(--b1)';
return`<div class="inbox-notif" data-nid="${esc(n.id)}" data-pid="${esc(n.projectId||'')}" data-ntype="${esc(n.type||'')}" style="background:var(--bg2);border:1px solid ${col};border-radius:8px;padding:12px 14px;margin-bottom:8px;display:flex;align-items:flex-start;gap:10px;cursor:pointer;opacity:${n.read?.7:1}">
<div style="width:8px;height:8px;border-radius:50%;background:${n.read?'var(--b3)':'var(--gold)'};flex-shrink:0;margin-top:4px"></div>
<div style="flex:1"><div style="font-size:11px;font-weight:700;color:${n.read?'var(--t2)':'#fff'}">${esc(n.title)}</div>
<div style="font-size:10px;color:var(--t3);margin-top:2px;line-height:1.4">${esc(n.body)}</div>
<div style="font-size:8px;color:var(--t4);margin-top:4px">${n.ts?new Date(n.ts).toLocaleString():''}</div></div>
${n.projectId?`<button class="btn btn-outline btn-sm inbox-notif-open" data-nid="${esc(n.id)}" data-pid="${esc(n.projectId)}">Open →</button>`:''}
</div>`;}).join(''):'<div style="padding:40px;text-align:center;color:var(--t4);font-size:11px">No notifications yet</div>'}
</div>`;
}

// ══════════════════════════════════════
// CLIENT MAIN
// ══════════════════════════════════════
function clientMain(){
  if(S.tab==='new')return clientBriefForm();
  if(S.tab==='assets')return clientAssets();
  if(S.tab==='pm')return clientPMPage();
  if(S.tab==='quickgen')return singleImageGen();
  if(S.pid)return clientProjectDetail();
  return clientDashboard();
}

function clientDashboard(){
  const u=DB.getUser(S.session.userId);
  const ps=DB.getProjects().filter(p=>p.clientId===S.session.userId);
  return`<div class="page">
<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;margin-bottom:16px">
<div style="display:flex;align-items:center;gap:12px">${u?.logoUrl?`<div style="width:48px;height:48px;border-radius:10px;overflow:hidden;background:var(--bg3);border:1px solid var(--b1)"><img src="${u.logoUrl}" style="width:100%;height:100%;object-fit:contain"></div>`:''}<div><div class="page-title">My Projects</div><div class="page-sub">Client ID: <strong style="color:var(--purple)">${u?.clientId||'—'}</strong></div></div></div>
<button class="btn btn-gold" onclick="goTab('new')">+ New Project Request</button>
</div>
${ps.length?ps.map(p=>clientProjCard(p)).join(''):`<div style="background:var(--bg2);border:1px dashed var(--b2);border-radius:12px;padding:50px;text-align:center">
<div style="font-size:28px;color:var(--b3);margin-bottom:10px">+</div>
<div style="font-size:13px;font-weight:700;color:var(--t3)">No projects yet</div>
<div style="font-size:10px;color:var(--t4);margin:6px 0 18px">Submit your first request to get started</div>
<button class="btn btn-gold" onclick="goTab('new')">Start a Project Request</button>
</div>`}
</div>`;
}

function clientProjCard(p){
  const mt=MT[p.type];const wf=p.workflowStatus||'new';
  const hasNewSyn=wf==='synopsis_review'&&!p.clientViewedSyn;
  const hasSb=p.storyboardReleased&&!p.clientViewedSb;
  const needsFb=wf==='synopsis_review'&&!p.synopsisLocked;
  return`<div class="pp" onclick="S.pid='${p.id}';render()">
<div class="pp-top">
<div style="font-size:18px;flex-shrink:0">${mt?.icon||'?'}</div>
<div class="pp-info"><div class="pp-name">${esc(p.name)}</div>
<div class="pp-meta">${mt?.label}${p.projectId?' · <span style="color:var(--gold);font-family:monospace">'+p.projectId+'</span>':''} · Updated ${p.updatedAt?new Date(p.updatedAt).toLocaleDateString():''}</div></div>
<div style="display:flex;gap:5px;flex-wrap:wrap;align-items:center">
${hasNewSyn?'<span class="badge badge-gold">Synopsis ready ✦</span>':''}
${hasSb?'<span class="badge badge-blue">Storyboard ready ✦</span>':''}
${needsFb?'<span class="badge badge-red">Feedback needed</span>':''}
<span class="badge badge-${wf==='complete'?'green':wf.includes('review')?'gold':'gray'}">${wf.replace(/_/g,' ')}</span>
</div></div>
<div class="pp-btm">${wfMiniDots(p)}<div style="margin-left:auto;font-size:10px;color:var(--t4)">${p.synopsisRevisionCount||0}/3 revisions used</div></div>
</div>`;
}

function clientProjectDetail(){
  const p=DB.getProject(S.pid);if(!p)return clientDashboard();
  const mt=MT[p.type];const wf=p.workflowStatus||'new';
  if(wf==='synopsis_review'&&!p.clientViewedSyn){const p2=DB.getProject(S.pid);p2.clientViewedSyn=true;DB.saveProject(p2);}
  if(p.storyboardReleased&&!p.clientViewedSb){const p2=DB.getProject(S.pid);p2.clientViewedSb=true;DB.saveProject(p2);}
  return`<div class="page">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;flex-wrap:wrap">
<button class="btn btn-ghost btn-sm" onclick="S.pid=null;render()">← Back</button>
<div><div style="font-size:16px;font-weight:700;color:#fff">${mt?.icon} ${esc(p.name)}</div>
<div style="font-size:9px;color:var(--t4);margin-top:2px">${mt?.label} · ${wf.replace(/_/g,' ')}</div></div>
</div>
${wfBar(p)}
${clientProjContent(p,wf)}
</div>`;
}

function wfBar(p){
  const steps=[{k:'brief_submitted',l:'Brief'},{k:'synopsis_review',l:'Synopsis'},{k:'synopsis_locked',l:'Approved'},{k:'storyboard_in_progress',l:'Storyboard'},{k:'storyboard_review',l:'Review'},{k:'complete',l:'Complete'}];
  const wf=p.workflowStatus||'new';const order=steps.map(s=>s.k);const ci=order.indexOf(wf);
  return`<div class="wf-bar">${steps.map((s,i)=>`<div class="wf-step ${i<ci?'done':i===ci?'active':''}">
<span class="wn">${i<ci?'✓':String(i+1)}</span><span class="wl">${s.l}</span></div>`).join('')}</div>`;
}

function clientProjContent(p,wf){
  let html='';
  // Brief summary
  const brief={...p.clientBrief,...p.brief};
  html+=`<div class="section-lbl">Your Brief</div>
<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:7px;padding:12px;margin-bottom:12px;font-size:10px;color:var(--t3);line-height:2">
${Object.entries(brief).filter(([,v])=>v).map(([k,v])=>`<div><strong style="color:var(--t4);font-size:8px;text-transform:uppercase">${k}: </strong>${esc(String(v).substring(0,80))}</div>`).join('')}
</div>`;

  // Synopsis
  if(['synopsis_review','synopsis_locked','storyboard_in_progress','storyboard_review','complete'].includes(wf)){
    const revs=p.synopsisRevisions||[];const latest=revs[revs.length-1];const rc=p.synopsisRevisionCount||0;const canRev=!p.synopsisLocked&&rc<3&&wf==='synopsis_review';
    html+=`<div class="section-lbl">Creative Synopsis ${p.synopsisLocked?'<span class="badge badge-green">Approved ✓</span>':''}</div>`;
    if(latest){
      html+=`<div class="syn-block">
<div class="syn-ver">Version ${revs.length} of 3<span class="badge badge-${p.synopsisLocked?'green':'gold'}">${p.synopsisLocked?'Locked':'Pending your approval'}</span></div>
<div class="syn-text">${esc(latest.text)}</div>
</div>`;
      if(canRev){
        html+=`<div style="background:var(--bg3);border:1px solid var(--b2);border-radius:8px;padding:14px;margin-bottom:12px">
<div style="font-size:10px;font-weight:700;color:var(--t3);margin-bottom:8px">Revision request (${3-rc} remaining)</div>
<div class="fg" style="margin-bottom:7px"><textarea id="syn-fb-ta" rows="3" placeholder="Describe what you'd like changed..."></textarea></div>
<div class="btn-row" style="margin-top:0">
<button class="btn btn-outline" onclick="submitSynopsisFeedback()">Request Revision</button>
<button class="btn btn-gold" onclick="approveSynopsis()">Approve & Proceed →</button>
</div></div>`;
      }else if(p.synopsisLocked){
        html+=`<div class="ib ib-green"><strong>Synopsis approved!</strong> We're building your storyboard. You'll be notified when it's ready for review.</div>`;
      }else{
        html+=`<div class="ib ib-red"><strong>Max revisions reached.</strong> This synopsis is now final and proceeding to production. Contact your account manager for further changes.</div>`;
      }
    }else{
      html+=`<div style="background:var(--bg3);border:1px solid var(--b1);border-radius:7px;padding:20px;text-align:center;color:var(--t4);font-size:11px">Your synopsis is being prepared. Please check back soon.</div>`;
    }
  }

  // Storyboard
  if(p.storyboardReleased&&(wf==='storyboard_review'||wf==='complete')){
    const shots=p.shots||[];const sbState=p.sbState||{};
    const readyShots=shots.filter(s=>sbState[s.num]?.img);
    html+=`<div class="section-lbl">Storyboard Preview</div>
<div class="ib ib-blue"><strong>Your storyboard is ready.</strong> Review each frame below and leave feedback on shots you'd like adjusted. Our team will refine based on your notes.</div>
<div class="sbc-grid">
${readyShots.map(s=>{const sd=sbState[s.num]||{};const ef=(p.storyboardFeedback||[]).find(f=>f.num===s.num);
return`<div class="sbc-card">
<div class="sbc-top"><span style="background:var(--gold);color:#000;font-size:8px;font-weight:700;padding:2px 6px;border-radius:3px">S${s.num}</span><span style="font-size:9px;color:var(--t4)">${esc(s.scene||'')}</span></div>
<div class="sbc-img">${sd.img?`<img src="${sd.img}" onclick="openImgModal('S${s.num}','${sd.img}')" loading="lazy"/>`:'<div class="sbc-ph">◇</div>'}</div>
<div class="sbc-fb">
${ef?`<div style="font-size:9px;color:var(--green);padding:4px 0">✓ Feedback submitted</div>`:
`<textarea placeholder="Feedback on this shot..." id="sfb-${s.num}"></textarea>`}
</div></div>`;}).join('')}
${!readyShots.length?'<div style="color:var(--t4);font-size:10px;padding:12px;grid-column:1/-1">Storyboard images generating — check back soon.</div>':''}
</div>
<div class="card" style="margin-top:12px"><div class="card-head"><span class="card-title">OVERALL NOTES</span></div>
<div class="card-body">
<div class="fg"><textarea id="sb-overall-fb" rows="3" placeholder="Overall feedback on the storyboard...">${esc(p.overallStoryboardFeedback||'')}</textarea></div>
<div class="btn-row" style="margin-top:0"><button class="btn btn-gold" onclick="submitStoryboardFeedback()">Submit Feedback</button></div>
</div></div>`;
  }

  if(wf==='complete'){
    const deliveryFiles=p.deliveryFiles||[];
    html+=`<div style="margin-top:16px;background:linear-gradient(135deg,rgba(16,185,129,0.08),rgba(6,182,212,0.04));border:1px solid rgba(16,185,129,0.25);border-radius:12px;padding:18px;">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
  <div style="width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,#10B981,#06B6D4);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">🎉</div>
  <div>
    <div style="font-size:14px;font-weight:700;color:#10B981">Project Complete!</div>
    <div style="font-size:11px;color:var(--t4)">Your final deliverables are ready to download below.</div>
  </div>
</div>
${deliveryFiles.length?`
<div style="font-size:10px;font-weight:700;color:var(--t4);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:10px">📦 Final Deliverables (${deliveryFiles.length} file${deliveryFiles.length>1?'s':''})</div>
<div style="display:flex;flex-direction:column;gap:8px;">
${deliveryFiles.map(df=>`<div style="display:flex;align-items:center;gap:12px;background:var(--bg2);border:1px solid var(--b1);border-radius:8px;padding:12px;">
  <span style="font-size:22px;flex-shrink:0">${df.type?.startsWith('video/')?'🎬':df.type?.startsWith('image/')?'🖼️':df.name?.endsWith('.pdf')?'📄':'📁'}</span>
  <div style="flex:1;min-width:0">
    <div style="font-size:12px;font-weight:600;color:var(--t1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(df.name)}</div>
    <div style="font-size:9px;color:var(--t4);margin-top:2px">${df.size?(df.size/1024/1024).toFixed(1)+' MB · ':''} Uploaded ${df.uploadedAt?new Date(df.uploadedAt).toLocaleDateString():''}</div>
  </div>
  <a href="${df.url}" download="${esc(df.name)}" class="btn btn-green btn-sm" style="flex-shrink:0;text-decoration:none">⬇ Download</a>
</div>`).join('')}
</div>`:`<div style="text-align:center;padding:16px;border:1px dashed rgba(16,185,129,0.3);border-radius:8px;font-size:11px;color:var(--t4)">Files are being prepared — you'll be notified when they're ready to download.</div>`}
</div>`;
  }
  return html;
}

async function submitSynopsisFeedback(){
  const fb=document.getElementById('syn-fb-ta')?.value.trim();if(!fb){toast('Enter your feedback first','err');return}
  const p=DB.getProject(S.pid);if(!p)return;
  if((p.synopsisRevisionCount||0)>=3||p.synopsisLocked){toast('No revisions remaining','err');return}
  const btn=event.target;btn.disabled=true;btn.textContent='Generating revision...';
  try{
    const latest=p.synopsisRevisions?.slice(-1)[0]?.text||'';
    if(!kC()){p.synopsisRevisions.push({version:(p.synopsisRevisions||[]).length+1,text:latest+'[Feedback: '+fb+']',feedback:fb,timestamp:new Date().toISOString()});p.synopsisRevisionCount=(p.synopsisRevisionCount||0)+1;if(p.synopsisRevisionCount>=3){toast('Maximum 3 revision rounds reached. Synopsis is now locked for quality.','info');p.synopsisLocked=true;}p.pendingFeedback='synopsis';DB.saveProject(p);render();toast('Feedback saved — awaiting team revision','info');return}
    const r=await callClaude('You are a creative director. Revise a project synopsis based on client feedback. Keep story format — engaging narrative paragraphs, non-technical, vivid. Client does not understand filmmaking jargon.',`CURRENT SYNOPSIS:\n${latest}\n\nCLIENT FEEDBACK:\n${fb}\n\nRevise the synopsis to address the feedback while maintaining the creative vision. Return ONLY the revised synopsis text.`,2000);
    if(!p.synopsisRevisions)p.synopsisRevisions=[];
    p.synopsisRevisions.push({version:p.synopsisRevisions.length+1,text:r,feedback:fb,timestamp:new Date().toISOString()});
    p.synopsisRevisionCount=(p.synopsisRevisionCount||0)+1;if(p.synopsisRevisionCount>=3){toast('Maximum 3 revision rounds reached. Synopsis is now locked for quality.','info');p.synopsisLocked=true;}p.pendingFeedback='synopsis';
    if(p.synopsisRevisionCount>=3){p.synopsisLocked=true;p.workflowStatus='synopsis_locked';}
    DB.saveProject(p);render();toast('Synopsis updated!','ok');
    if(p.assignedCreatorId)pushNotif(p.assignedCreatorId,'revision','Synopsis revision request',p.name+' — client has requested a revision',p.id);
    pushToRole('admin','revision','Synopsis revision',p.name+' — revision #'+p.synopsisRevisionCount+' requested',p.id);
  }catch(e){toast(e.message,'err');}
  btn.disabled=false;
}

function approveSynopsis(){
  if(!confirm('Approve this synopsis? The project will proceed to storyboard creation.'))return;
  const p=DB.getProject(S.pid);if(!p)return;
  p.synopsisLocked=true;if(!p.stageHistory)p.stageHistory=[];p.stageHistory.push({stage:'synopsis_locked',enteredAt:new Date().toISOString()});p.workflowStatus='synopsis_locked';p.pendingFeedback=null;
  DB.saveProject(p);render();toast('Synopsis approved!','ok');
  pushToRole('admin','approval','Synopsis approved',p.name+' synopsis approved by client',p.id);
  if(p.assignedCreatorId)pushNotif(p.assignedCreatorId,'approval','Synopsis approved!',p.name+' — client has approved the synopsis. Proceed to storyboard.',p.id);
}

function submitStoryboardFeedback(){
  const p=DB.getProject(S.pid);if(!p)return;
  const fbs=[];
  (p.shots||[]).forEach(s=>{const el=document.getElementById('sfb-'+s.num);if(el?.value.trim())fbs.push({num:s.num,feedback:el.value.trim(),timestamp:new Date().toISOString()});});
  const overall=document.getElementById('sb-overall-fb')?.value.trim();
  p.storyboardFeedback=fbs;p.overallStoryboardFeedback=overall||'';p.pendingFeedback='storyboard';
  DB.saveProject(p);render();toast('Feedback submitted! Our team will review and refine.','ok');
  if(p.assignedCreatorId)pushNotif(p.assignedCreatorId,'feedback','Storyboard feedback received',p.name+' — client has submitted storyboard notes',p.id);
  pushToRole('admin','feedback','Storyboard feedback',p.name+' — client feedback received',p.id);
}

// ══════════════════════════════════════
// CLIENT BRIEF FORM
// ══════════════════════════════════════
function clientBriefForm(){
  if(!S.bType){
    return`<div class="page">
<div class="page-title">New Project Request</div>
<div class="page-sub" style="margin-bottom:20px">What type of project do you need?</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(195px,1fr));gap:11px">
${Object.entries(MT).map(([k,mt])=>`<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:10px;padding:16px;cursor:pointer;transition:border-color .2s" onmouseover="this.style.borderColor='var(--b3)'" onmouseout="this.style.borderColor='var(--b1)'" onclick="startBrief('${k}')">
<div style="font-size:22px;margin-bottom:8px">${mt.icon}</div>
<div style="font-size:12px;font-weight:700;color:#fff;margin-bottom:4px">${mt.label}</div>
<div style="font-size:10px;color:var(--t4);line-height:1.4">${mtDesc(k)}</div>
</div>`).join('')}
</div></div>`;
  }
  const mt=MT[S.bType];const qs=mt.clientQs;const step=S.bStep||0;
  if(step>=qs.length){
    return`<div class="page">
<button class="btn btn-ghost btn-sm" style="margin-bottom:14px" onclick="S.bStep=qs.length-1;render()">← Back</button>
<div class="page-title">References & Uploads</div>
<div class="page-sub">Upload any material to help us understand your vision.</div>
<div class="upload-zone" onclick="document.getElementById('bu').click()">
<div style="font-size:24px;color:var(--b3);margin-bottom:6px">⬆</div>
<div style="font-size:11px;font-weight:700">Upload references</div>
<div style="font-size:9px;color:var(--t4);margin-top:3px">Brand guidelines, logos, mood boards, reference images (JPG, PNG, PDF)</div>
<input type="file" id="bu" multiple accept="image/*,.pdf" style="display:none" onchange="handleBriefUploads(event)"/>
</div>
<div id="brief-up-preview" style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"></div>
<div class="fg"><label>Video reference URL (YouTube or Instagram)</label><input type="text" id="bvurl" placeholder="https://youtube.com/watch?v=... or https://instagram.com/reel/..."/></div>
<div class="fg"><label>Additional context (optional)</label><textarea id="bnotes" rows="3" placeholder="Anything else we should know..."></textarea></div>
<div class="btn-row">
<button class="btn btn-gold" id="brief-submit-btn" onclick="submitBrief()">Submit Project Request →</button>
<button class="btn btn-ghost btn-sm" onclick="S.bType=null;S.bStep=0;S.bAnswers={};render()">Cancel</button>
</div></div>`;
  }
  const q=qs[step];
  return`<div class="page">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;flex-wrap:wrap">
<button class="btn btn-ghost btn-sm" onclick="${step>0?'S.bStep--;render()':'S.bType=null;render()'}">← ${step>0?'Back':'Change type'}</button>
<span style="font-size:12px;color:var(--gold);font-weight:700">${mt.icon} ${mt.label}</span>
<span style="font-size:9px;color:var(--t4);margin-left:auto">Question ${step+1} of ${qs.length}</span>
</div>
<div style="display:flex;gap:4px;margin-bottom:22px">${qs.map((_,i)=>`<div class="bsi ${i<step?'done':i===step?'active':''}"></div>`).join('')}</div>
<div style="font-size:14px;font-weight:700;color:var(--t1);margin-bottom:4px;line-height:1.4">${q.q}</div>
${q.hint?`<div style="font-size:10px;color:var(--t4);margin-bottom:14px;line-height:1.5">${q.hint}</div>`:'<div style="margin-bottom:14px"></div>'}
${q.t==='select'?`<select id="bans" style="width:100%;max-width:380px;font-size:13px;padding:10px 12px;background:var(--bg3);border:1px solid var(--b2);color:var(--t1);border-radius:7px">${(q.opts||[]).map(o=>`<option${(S.bAnswers||{})[q.id]===o?' selected':''}>${o}</option>`).join('')}</select>`:
q.t==='textarea'?`<textarea id="bans" rows="4" style="width:100%;font-size:12px;padding:10px;background:var(--bg3);border:1px solid var(--b2);color:var(--t1);border-radius:7px;font-family:Arial,sans-serif;resize:vertical" placeholder="${q.hint||''}">${esc((S.bAnswers||{})[q.id]||'')}</textarea>`:
`<input type="text" id="bans" value="${esc((S.bAnswers||{})[q.id]||'')}" placeholder="${q.hint||q.q}" style="width:100%;max-width:480px;font-size:13px;padding:10px 12px;background:var(--bg3);border:1px solid var(--b2);color:var(--t1);border-radius:7px" onkeydown="if(event.key==='Enter')advanceBrief()"/>`}
<!-- AI Assistant panel -->
<div id="ai-help-panel" style="display:none;margin-top:14px;background:#0e0a18;border:1px solid rgba(255,107,53,0.18);border-radius:8px;padding:13px">
<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px">
<span style="font-size:12px">✦</span><span style="font-size:10px;font-weight:700;color:var(--gold)">Claude Assistant</span>
<button onclick="document.getElementById('ai-help-panel').style.display='none'" style="background:none;border:none;color:var(--t4);cursor:pointer;margin-left:auto;font-size:13px">✕</button>
</div>
<div id="ai-help-text" style="font-size:11px;color:var(--t2);line-height:1.8;min-height:40px"></div>
<div id="ai-help-loading" style="display:none;font-size:10px;color:var(--t4)">Thinking…</div>
<div class="btn-row" style="margin-top:8px">
<button class="btn btn-outline btn-sm" onclick="briefAiUseSuggestion()">Use this answer →</button>
</div>
</div>
<div class="btn-row" style="margin-top:18px">
<button class="btn btn-gold" onclick="advanceBrief()">Continue →</button>
<button class="btn btn-outline btn-sm" onclick="briefAiHelp()" id="ai-help-btn">✦ I need help</button>
<button class="btn btn-ghost btn-sm" onclick="if(!S.bAnswers)S.bAnswers={};S.bAnswers['${q.id}']='';S.bStep++;render()">Skip</button>
</div></div>`;
}

function startBrief(type){S.bType=type;S.bStep=0;S.bAnswers={};_briefRefs=[];S.briefAiSuggestion='';render()}
function advanceBrief(){const ans=document.getElementById('bans')?.value||'';const q=MT[S.bType]?.clientQs?.[S.bStep||0];if(q){if(!S.bAnswers)S.bAnswers={};S.bAnswers[q.id]=ans;}S.bStep=(S.bStep||0)+1;S.briefAiSuggestion='';render()}

async function briefAiHelp(){
  const panel=document.getElementById('ai-help-panel');
  const textEl=document.getElementById('ai-help-text');
  const loadEl=document.getElementById('ai-help-loading');
  const btn=document.getElementById('ai-help-btn');
  if(!panel||!textEl)return;
  panel.style.display='block';
  textEl.textContent='';
  loadEl.style.display='block';
  btn.disabled=true;
  const mt=MT[S.bType];const q=mt?.clientQs?.[S.bStep||0];if(!q)return;
  const soFar=Object.entries(S.bAnswers||{}).filter(([,v])=>v).map(([k,v])=>`${k}: ${v}`).join('\n');
  const currentAns=document.getElementById('bans')?.value.trim();
  try{
    const resp=await callClaude(
      'You are a friendly creative project assistant helping a client fill out a project brief. Be warm, clear, and conversational. Speak directly to the client as "you". Keep responses under 100 words unless explaining something complex.',
      `The client is filling out a brief for: ${mt?.label}\n\nQuestion being asked: "${q.q}"${q.hint?'\nHint: '+q.hint:''}\n${soFar?'\nAnswers so far:\n'+soFar:''}${currentAns?'\nTheir current answer: "'+currentAns+'"':''}\n\nTask: ${currentAns?'Help them improve or expand their answer. Suggest a better version they can use.':'Explain what this question is asking in simple terms, and suggest a good example answer they can use for their project.'}\n\nEnd with: "Suggested answer: [your specific suggestion for their project]"`,
      400
    );
    loadEl.style.display='none';
    // Extract suggestion
    const parts=resp.split('Suggested answer:');
    textEl.innerHTML=esc(parts[0].trim()).replace(/\n/g,'<br>');
    if(parts[1]){
      S.briefAiSuggestion=parts[1].trim();
      textEl.innerHTML+=`<div style="margin-top:10px;padding:8px 10px;background:#1a0f1e;border:1px solid rgba(255,107,53,0.18);border-radius:5px;font-size:10px;color:var(--gold)"><strong>Suggested answer:</strong> ${esc(S.briefAiSuggestion)}</div>`;
    }
  }catch(e){
    loadEl.style.display='none';
    textEl.innerHTML=`<span style="color:var(--t4)">Enter your Claude API key in Settings for AI assistance, or just type your answer and continue.</span>`;
  }
  btn.disabled=false;
}

function briefAiUseSuggestion(){
  if(!S.briefAiSuggestion)return;
  const el=document.getElementById('bans');
  if(el)el.value=S.briefAiSuggestion;
  document.getElementById('ai-help-panel').style.display='none';
  toast('Answer filled in — review and click Continue','ok');
}
function mtDesc(k){const m={commercial_ad:'TV, digital, or social ad',short_film:'5–30 minute narrative film',youtube_explainer:'Educational YouTube video',podcast:'Audio podcast episode',product_video:'Product demo or launch video',testimonial:'Customer success story',influencer_ugc:'Social media creator content',music_video:'Lyric-synced visual video',design:'Posters, thumbnails, carousels, billboards & more — created in Canva'};return m[k]||''}
let _briefRefs=[];
function handleBriefUploads(e){
  Array.from(e.target.files).forEach(f=>{const r=new FileReader();r.onload=ev=>{_briefRefs.push({name:f.name,type:f.type,data:ev.target.result.split(',')[1],preview:f.type.startsWith('image/')?ev.target.result:null});updateBriefUpPreview();};r.readAsDataURL(f);});
}
function updateBriefUpPreview(){const el=document.getElementById('brief-up-preview');if(!el)return;el.innerHTML=_briefRefs.map((f,i)=>`<div style="background:var(--bg3);border:1px solid var(--b1);border-radius:5px;padding:6px 9px;display:flex;align-items:center;gap:6px">${f.preview?`<img src="${f.preview}" style="width:28px;height:28px;object-fit:cover;border-radius:3px"/>`:''}<span style="font-size:9px;color:var(--t2)">${f.name}</span><button onclick="_briefRefs.splice(${i},1);updateBriefUpPreview()" style="background:none;border:none;color:var(--t4);cursor:pointer">✕</button></div>`).join('');}

async function submitBrief(){
  const type=S.bType;if(!type)return;
  const mt=MT[type];const answers=S.bAnswers||{};
  const refUrl=document.getElementById('bvurl')?.value.trim();
  const notes=document.getElementById('bnotes')?.value.trim();
  const btn=document.getElementById('brief-submit-btn');btn.disabled=true;btn.textContent='Submitting...';
  const p={
    id:gid('p'),projectId:genProjectId(),type,
    name:(answers.brand||answers.title||answers.show||answers.artist||answers.topic||'New '+mt.label)+' — '+mt.label,
    deadline:null,stageHistory:[{stage:'brief_submitted',enteredAt:new Date().toISOString()}],
    clientId:S.session.userId,assignedCreatorId:null,assignedPmId:null,
    clientBrief:{...answers,videoRefUrl:refUrl||'',additionalNotes:notes||''},
    clientRefs:_briefRefs.slice(),
    workflowStatus:'brief_submitted',newBrief:true,
    brief:{...answers},script:'',bible:{},shots:[],sbState:{},refs:[],
    vidPrompts:[],vidState:{},audioState:{},
    modules:{visuals:true,video:false,audio:false},
    synopsisRevisions:[],synopsisRevisionCount:0,synopsisLocked:false,
    storyboardReleased:false,storyboardFeedback:[],overallStoryboardFeedback:'',
    clientViewedSyn:false,clientViewedSb:false,
    pendingFeedback:null,
    status:'Briefing',notes:'',createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),
  };
  if(kC()){
    try{
      btn.textContent='Generating synopsis...';
      const briefText=mt.clientQs.map(q=>`${q.q}: ${answers[q.id]||'Not specified'}`).join('\n');
      const syn=await callClaude(
        'You are a creative director at a top media production agency. You write compelling creative synopses for clients — people who are not filmmakers. Write in engaging story format: vivid narrative paragraphs that paint a picture of what the final production will look and feel like. Non-technical, exciting, and easy to approve.',
        `Create a creative synopsis for this ${mt.label} project.\n\nCLIENT BRIEF:\n${briefText}\n${notes?'\nAdditional context: '+notes:''}\n\nWrite 2–3 engaging narrative paragraphs describing: the creative concept, the story/structure, the mood and visual direction, and the intended emotion the audience will feel. Make it exciting and vivid. End with a line about the ultimate impact.\n\nReturn ONLY the synopsis text, no headings.`,
        1800
      );
      p.synopsisRevisions=[{version:1,text:syn,feedback:null,timestamp:new Date().toISOString()}];
      p.workflowStatus='synopsis_review';p.newBrief=false;
    }catch(e){console.warn('Auto-synopsis failed:',e.message);}
  }
  DB.saveProject(p);
  _briefRefs=[];S.bType=null;S.bStep=0;S.bAnswers={};S.tab='dashboard';S.pid=p.id;render();
  toast('Project submitted!','ok');
  pushToRole('admin','brief','New brief submitted',p.name+' ('+p.projectId+')',p.id);
  // Notify assigned creator if any
  if(p.assignedCreatorId)pushNotif(p.assignedCreatorId,'brief','New brief: '+p.name,'Client has submitted a project brief',p.id);
}

// ══════════════════════════════════════
// CLIENT ASSETS
// ══════════════════════════════════════
function clientAssets(){
  const u=DB.getUser(S.session.userId);const assets=u?.brandAssets||[];
  const bf=u?.brandFolder||{};
  const byType=(t)=>assets.filter(a=>a.assetType===t);
  const pm=u?.assignedPmId?DB.getPM(u.assignedPmId):null;

  // LEFT: file section helper
  const secHTML=(label,icon,type,hint)=>{
    const items=byType(type);
    return`<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:10px;padding:12px;margin-bottom:10px">
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
  <div style="display:flex;align-items:center;gap:7px"><span style="font-size:14px">${icon}</span>
    <div><div style="font-size:11px;font-weight:700;color:var(--t1)">${label}</div>
    <div style="font-size:9px;color:var(--t4)">${hint}</div></div>
  </div>
  <button class="btn btn-ghost btn-sm" style="font-size:9px;padding:2px 9px" onclick="triggerBFUpload('${type}')">+ Add</button>
</div>
${items.length?`<div style="display:flex;flex-direction:column;gap:4px">${items.map((a,i)=>`<div style="display:flex;align-items:center;gap:8px;background:var(--bg3);border:1px solid var(--b1);border-radius:6px;padding:6px 8px">
  <span style="font-size:14px">${a.type?.startsWith('image/')?'🖼':'📄'}</span>
  <div style="flex:1;min-width:0"><div style="font-size:10px;color:var(--t1);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(a.name)}</div>
  <div style="font-size:9px;color:var(--t4)">${a.size?Math.round(a.size/1024)+'KB':''}</div></div>
  <div style="display:flex;gap:4px;flex-shrink:0">
    ${a.preview?`<button onclick="openImgModal('${esc(a.name)}','${a.preview}')" class="btn btn-ghost btn-sm" style="font-size:9px;padding:2px 6px" title="View">👁</button>`:''}
    ${a.preview||a.pdfData?`<a href="${a.preview||a.pdfData}" download="${esc(a.name)}" class="btn btn-ghost btn-sm" style="font-size:9px;padding:2px 6px" title="Download">↓</a>`:''}
    <button onclick="deleteBFAsset('${a.id}')" class="btn btn-ghost btn-sm" style="font-size:9px;padding:2px 6px;color:var(--red)" title="Delete">✕</button>
  </div>
</div>`).join('')}</div>`
:`<div style="color:var(--t4);font-size:10px;text-align:center;padding:12px;border:1px dashed var(--b2);border-radius:6px">No files yet — click + Add</div>`}
</div>`;
  };

  // Brand Book content for right panel
  const brandBook=assets.find(a=>a.assetType==='Brand Book');

  return`<div class="page">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
  <div><div class="page-title">Brand Folder</div><div class="page-sub">Your brand knowledge base — used by your AI PM for every project</div></div>
</div>
<div class="ib ib-blue" style="margin-bottom:16px"><strong>How it works:</strong> Everything here is read by your AI PM before every project. The richer your folder, the more on-brand your output.</div>

<input type="file" id="bf-upload" multiple accept="image/*,.pdf,.doc,.docx,.pptx" style="display:none" onchange="uploadBFAsset(event,window._bfUploadType)"/>

<div style="display:grid;grid-template-columns:340px 1fr;gap:16px;align-items:start">

  <!-- LEFT: Upload sections -->
  <div>
    <div style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.07em;margin-bottom:8px">BRAND FILES</div>
    ${secHTML('Logo & Visual Identity','🎨','Logo','PNG, SVG, or AI formats')}
    ${secHTML('Brand Guidelines','📘','Brand Guide','PDF with brand rules, fonts, colours')}
    ${secHTML('Tone of Voice','✍️','Tone of Voice','How your brand speaks and writes')}
    ${secHTML('Competitor References','🔍','Competitor','Screenshots or competitor content')}
    ${secHTML('Market Positioning','📊','Positioning','Slides or docs on your market position')}
    ${secHTML('Mood Board','🎬','Mood Board','Visual references you love')}
    ${secHTML('Previous Campaigns','📁','Campaign','Past ads, videos, posts')}

    <!-- Brand Notes -->
    <div style="background:var(--bg2);border:1px solid var(--b1);border-radius:10px;padding:12px;margin-bottom:10px">
      <div style="font-size:11px;font-weight:700;color:var(--t1);margin-bottom:6px">📝 Brand Notes</div>
      <textarea id="bf-notes" rows="3" placeholder="Describe your brand, target audience, tone, competitors…" style="width:100%;background:var(--bg3);border:1px solid var(--b2);border-radius:6px;padding:8px;font-size:10px;color:var(--t1);resize:vertical;box-sizing:border-box">${esc(bf.notes||'')}</textarea>
      <div style="display:flex;align-items:center;gap:8px;margin-top:7px">
        <button class="btn btn-gold btn-sm" onclick="saveBFNotes()" style="font-size:9px">Save Notes</button>
        <span id="bf-notes-saved" style="font-size:9px;color:var(--green);display:none">✓ Saved</span>
      </div>
    </div>

    <!-- PM status -->
    ${pm?`<div style="background:rgba(196,157,58,0.06);border:1px solid rgba(196,157,58,0.2);border-radius:10px;padding:10px 12px">
      <div style="font-size:10px;font-weight:700;color:var(--gold);margin-bottom:4px">🤖 ${esc(pm.name)}</div>
      <div style="font-size:9px;color:var(--t4);margin-bottom:8px">Your dedicated AI PM reads this folder for every project.</div>
      <div style="display:flex;flex-wrap:wrap;gap:4px">
        ${['Logo','Brand Guide','Tone of Voice','Competitor','Positioning'].map(t=>`<span style="font-size:9px;padding:2px 8px;border-radius:12px;background:var(--bg3);color:${byType(t).length?'var(--green)':'var(--t4)'}">${t} ${byType(t).length?'✓':'✗'}</span>`).join('')}
        <span style="font-size:9px;padding:2px 8px;border-radius:12px;background:var(--bg3);color:${bf.notes?'var(--green)':'var(--t4)'}">Notes ${bf.notes?'✓':'✗'}</span>
      </div>
    </div>`:''}
  </div>

  <!-- RIGHT: Brand Book viewer -->
  <div>
    <div style="font-size:10px;font-weight:700;color:var(--t3);letter-spacing:.07em;margin-bottom:8px">BRAND BOOK</div>
    ${brandBook?.pdfData?`
    <div style="background:var(--bg2);border:1px solid var(--b1);border-radius:12px;overflow:hidden">
      <div style="padding:12px 14px;border-bottom:1px solid var(--b1);display:flex;align-items:center;justify-content:space-between">
        <div>
          <div style="font-size:12px;font-weight:700;color:var(--t1)">📗 ${esc(brandBook.name)}</div>
          <div style="font-size:9px;color:var(--t4)">Generated by ${esc(brandBook.generatedBy||'AI PM')} · ${brandBook.uploadedAt?new Date(brandBook.uploadedAt).toLocaleDateString():''}</div>
        </div>
        <div style="display:flex;gap:6px">
          <a href="${brandBook.pdfData}" download="${esc(brandBook.name)}" class="btn btn-ghost btn-sm" style="font-size:9px">↓ Download</a>
          <button onclick="deleteBFAsset('${brandBook.id}')" class="btn btn-ghost btn-sm" style="font-size:9px;color:var(--red)">✕</button>
        </div>
      </div>
      <iframe src="${brandBook.pdfData}" style="width:100%;height:600px;border:none" title="Brand Book"></iframe>
    </div>`:`
    <div style="background:var(--bg2);border:1px solid var(--b1);border-radius:12px;overflow:hidden">
      <div style="padding:12px 14px;border-bottom:1px solid var(--b1)">
        <div style="font-size:12px;font-weight:700;color:var(--t1)">📗 AI Brand Book</div>
        <div style="font-size:9px;color:var(--t4)">Generated by your AI PM — a comprehensive brand reference document</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:500px;gap:12px;background:repeating-linear-gradient(45deg,var(--bg3),var(--bg3) 10px,var(--bg2) 10px,var(--bg2) 20px)">
        <div style="background:var(--bg2);border:1px solid var(--b1);border-radius:12px;padding:28px 32px;text-align:center;max-width:300px">
          <div style="font-size:36px;margin-bottom:10px">📗</div>
          <div style="font-size:13px;font-weight:700;color:var(--t1);margin-bottom:6px">No Brand Book yet</div>
          <div style="font-size:10px;color:var(--t4);line-height:1.6;margin-bottom:14px">Ask your AI PM to generate a Brand Book from your uploaded files and notes. It will appear here as a viewable PDF.</div>
          <div style="font-size:9px;color:var(--t4);padding:6px 10px;background:var(--bg3);border-radius:6px">Go to My PM → Ask your PM to generate a Brand Book</div>
        </div>
      </div>
    </div>`}
  </div>

</div>
</div>`;
}

// ── AI PM BRIEFING MODULE ──
async function runAIPMBriefing(pid){
  const p=DB.getProject(pid);if(!p)return;
  const cl=DB.getUser(p.clientId);
  const pm=DB.getPM(p.assignedPmId);
  if(!pm){toast('No AI PM assigned to this project','err');return;}

  // Build brand folder context
  const bf=cl?.brandFolder||{};
  const assets=cl?.brandAssets||[];
  const assetSummary=assets.length?assets.map(a=>`• ${a.assetType}: ${a.name}`).join('\n'):'No assets uploaded yet';
  const brandNotes=bf.notes||'No brand notes provided';

  // Build creator bandwidth context
  const creators=DB.getUsers().filter(u=>u.role==='creator'&&u.active!==false);
  const allProjects=DB.getProjects();
  const creatorBandwidth=creators.map(c=>{
    const active=allProjects.filter(proj=>proj.assignedCreatorId===c.id&&proj.workflowStatus!=='complete').length;
    return{name:c.name,id:c.id,active,available:active<3};
  });

  // Build available models context
  const imgModels=IMAGE_MODELS?IMAGE_MODELS.slice(0,5).map(m=>m.n).join(', '):'FLUX 1.1 Ultra, FLUX Dev, Recraft V3';
  const vidModels=VIDEO_MODELS?VIDEO_MODELS.slice(0,5).map(m=>m.n).join(', '):'Google Veo 3, Kling 2.1, Runway Gen-4';

  // Show loading modal
  openModal(`<div style="padding:8px">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
  <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#8B5CF6,#06B6D4);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">🤖</div>
  <div>
    <div style="font-size:16px;font-weight:700;color:var(--t1)">${esc(pm.name)} — AI PM Briefing</div>
    <div style="font-size:11px;color:var(--t4)">Analysing brand folder and preparing recommendations...</div>
  </div>
</div>
<div id="pm-briefing-body">
  <div style="display:flex;flex-direction:column;gap:10px;padding:20px;align-items:center">
    <div style="font-size:24px;animation:spin 1s linear infinite">⚙️</div>
    <div style="font-size:12px;color:var(--t3)">AI PM is reading your brand folder...</div>
    <div style="font-size:10px;color:var(--t4);margin-top:4px" id="pm-status">Gathering brand data...</div>
  </div>
</div>
</div>`);

  const setStatus=s=>{const el=document.getElementById('pm-status');if(el)el.textContent=s;};

  try{
    setStatus('Reading brand folder and project brief...');
    const prompt=`You are ${pm.name}, an expert AI Project Manager at CinexAI, specialised in ${pm.domain||'media production'}.

PROJECT BRIEF:
- Project: ${p.name}
- Type: ${p.type}
- Client: ${cl?.name||'Unknown'}
- Brief: ${p.notes||'No brief provided'}
- Priority: ${p.priority||'Medium'}

CLIENT BRAND FOLDER:
Brand Notes: ${brandNotes}

Uploaded Assets:
${assetSummary}

AVAILABLE CREATORS AND BANDWIDTH:
${creatorBandwidth.map(c=>`- ${c.name}: ${c.active} active projects, ${c.available?'AVAILABLE':'AT CAPACITY'}`).join('\n')}

AVAILABLE IMAGE MODELS: ${imgModels}
AVAILABLE VIDEO MODELS: ${vidModels}

Your task: Analyse all available information and produce a comprehensive Brand Book and project recommendations.

Return ONLY valid JSON in this exact structure:
{
  "brandBook": {
    "brandOverview": "2-3 sentences describing the brand based on available info",
    "visualIdentity": "Description of visual identity, colours, style based on assets and notes",
    "toneOfVoice": "How this brand communicates — formal/casual, aspirational/practical, etc",
    "targetAudience": "Inferred target audience based on brand and project type",
    "competitorLandscape": "Competitor insights based on any information provided",
    "marketPositioning": "Where this brand sits in the market",
    "creativeApproach": "Recommended creative direction for this project type",
    "doList": ["3-5 things the creative team should always do for this brand"],
    "dontList": ["3-5 things to always avoid for this brand"],
    "keyMessages": ["3-4 key messages this brand wants to communicate"]
  },
  "projectRecommendations": {
    "recommendedCreatorId": "${creatorBandwidth.find(c=>c.available)?.id||creators[0]?.id||''}",
    "recommendedCreatorName": "${creatorBandwidth.find(c=>c.available)?.name||creators[0]?.name||''}",
    "creatorReason": "Why this creator is the best fit",
    "imageModel": "Best image generation model for this project and why",
    "videoModel": "Best video generation model for this project and why",
    "estimatedShots": 8,
    "productionNotes": "Any specific production considerations for this project"
  },
  "researchInsights": {
    "marketTrends": "Current trends relevant to this brand and project type",
    "competitorActivity": "What competitors are typically doing in this space",
    "opportunities": "Creative opportunities to differentiate"
  }
}`;

    setStatus('AI PM is analysing and generating Brand Book...');

    const k=kC();
    const headers=_authHeaders({'anthropic-version':'2023-06-01','content-type':'application/json'});
    if(k)headers['x-api-key']=k;

    const resp=await fetch('/api/claude',{
      method:'POST',
      headers,
      body:JSON.stringify({
        model:'claude-opus-4-20250514',
        max_tokens:4000,
        messages:[{role:'user',content:prompt}]
      })
    });

    if(!resp.ok){
      const err=await resp.json();
      throw new Error(err.error||'API call failed');
    }

    setStatus('Processing recommendations...');
    const data=await resp.json();
    const raw=data.content?.[0]?.text||'';

    let result;
    try{
      const jsonStr=raw.replace(/```json|```/g,'').trim();
      result=JSON.parse(jsonStr);
    }catch(e){throw new Error('Could not parse AI response. Please try again.');}

    showAIPMBriefingResult(pid,pm,result);

  }catch(e){
    const body=document.getElementById('pm-briefing-body');
    if(body)body.innerHTML=`<div style="color:var(--red);padding:20px;text-align:center;font-size:12px">
      <div style="font-size:24px;margin-bottom:10px">⚠️</div>
      <strong>Briefing failed</strong><br><br>${esc(e.message)}<br><br>
      ${!kC()?'<div style="background:rgba(255,107,53,0.1);border:1px solid rgba(255,107,53,0.3);border-radius:8px;padding:12px;margin-top:12px;font-size:11px;color:var(--gold)">💡 Add your Claude API key in Settings → API Keys to enable AI PM briefings</div>':''}
      <button class="btn btn-ghost btn-sm" style="margin-top:14px" onclick="closeModal()">Close</button>
    </div>`;
  }
}

function showAIPMBriefingResult(pid,pm,result){
  const p=DB.getProject(pid);
  const bb=result.brandBook||{};
  const rec=result.projectRecommendations||{};
  const ri=result.researchInsights||{};

  const section=(title,content)=>`
<div style="margin-bottom:14px">
  <div style="font-size:10px;font-weight:700;color:var(--gold);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:6px">${title}</div>
  <div style="font-size:11px;color:var(--t2);line-height:1.7;background:var(--bg2);border:1px solid var(--b1);border-radius:6px;padding:10px">${esc(content)}</div>
</div>`;

  const listSection=(title,items)=>items?.length?`
<div style="margin-bottom:14px">
  <div style="font-size:10px;font-weight:700;color:var(--gold);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:6px">${title}</div>
  <div style="background:var(--bg2);border:1px solid var(--b1);border-radius:6px;padding:10px">
    ${items.map(i=>`<div style="font-size:11px;color:var(--t2);padding:3px 0;border-bottom:1px solid var(--b1);display:flex;gap:8px"><span style="color:var(--gold);flex-shrink:0">•</span>${esc(i)}</div>`).join('')}
  </div>
</div>`:'';

  const body=document.getElementById('pm-briefing-body');
  if(!body)return;

  body.innerHTML=`
<div style="max-height:65vh;overflow-y:auto;padding-right:4px">

  <!-- TABS -->
  <div style="display:flex;gap:6px;margin-bottom:16px;border-bottom:1px solid var(--b1);padding-bottom:10px">
    <button onclick="pmTab('brand',this)" id="pmt-brand" class="btn btn-gold btn-sm">📘 Brand Book</button>
    <button onclick="pmTab('project',this)" id="pmt-project" class="btn btn-ghost btn-sm">🎬 Project Recs</button>
    <button onclick="pmTab('research',this)" id="pmt-research" class="btn btn-ghost btn-sm">🔍 Research</button>
  </div>

  <!-- BRAND BOOK TAB -->
  <div id="pmtab-brand">
    ${section('Brand Overview',bb.brandOverview||'—')}
    ${section('Visual Identity',bb.visualIdentity||'—')}
    ${section('Tone of Voice',bb.toneOfVoice||'—')}
    ${section('Target Audience',bb.targetAudience||'—')}
    ${section('Market Positioning',bb.marketPositioning||'—')}
    ${section('Creative Approach for This Project',bb.creativeApproach||'—')}
    ${listSection('✅ Always Do',bb.doList)}
    ${listSection('❌ Always Avoid',bb.dontList)}
    ${listSection('💬 Key Messages',bb.keyMessages)}
  </div>

  <!-- PROJECT RECS TAB (hidden) -->
  <div id="pmtab-project" style="display:none">
    <div style="background:linear-gradient(135deg,rgba(139,92,246,0.1),rgba(6,182,212,0.05));border:1px solid rgba(139,92,246,0.2);border-radius:8px;padding:14px;margin-bottom:14px">
      <div style="font-size:12px;font-weight:700;color:#a78bfa;margin-bottom:8px">👤 Recommended Creator</div>
      <div style="font-size:14px;font-weight:700;color:var(--t1);margin-bottom:4px">${esc(rec.recommendedCreatorName||'None available')}</div>
      <div style="font-size:11px;color:var(--t3)">${esc(rec.creatorReason||'')}</div>
      ${rec.recommendedCreatorId?`<button class="btn btn-gold btn-sm" style="margin-top:10px" onclick="approvePMCreator('${pid}','${rec.recommendedCreatorId}','${esc(rec.recommendedCreatorName||'')}')">✓ Assign This Creator</button>`:''}
    </div>
    ${section('🖼 Recommended Image Model',rec.imageModel||'—')}
    ${section('🎬 Recommended Video Model',rec.videoModel||'—')}
    ${section('📋 Production Notes',rec.productionNotes||'—')}
    <div style="background:var(--bg2);border:1px solid var(--b1);border-radius:8px;padding:12px;font-size:11px;color:var(--t3)">
      Estimated shots: <strong style="color:var(--t1)">${rec.estimatedShots||8}</strong>
    </div>
  </div>

  <!-- RESEARCH TAB (hidden) -->
  <div id="pmtab-research" style="display:none">
    ${section('📈 Market Trends',ri.marketTrends||'—')}
    ${section('🏢 Competitor Activity',ri.competitorActivity||'—')}
    ${section('💡 Creative Opportunities',ri.opportunities||'—')}
  </div>

</div>

<!-- ACTIONS -->
<div style="display:flex;gap:8px;margin-top:16px;padding-top:14px;border-top:1px solid var(--b1);flex-wrap:wrap">
  <button class="btn btn-gold" onclick="generateBrandBook('${pid}')
  <button class="btn btn-ghost btn-sm" onclick="closeModal()">Close</button>
</div>`;

  // Store result for later use
  window._pmBriefingResult={pid,pm,result};
}

function pmTab(tab,btn){
  ['brand','project','research'].forEach(t=>{
    const el=document.getElementById('pmtab-'+t);
    const b=document.getElementById('pmt-'+t);
    if(el)el.style.display=t===tab?'block':'none';
    if(b){b.className=t===tab?'btn btn-gold btn-sm':'btn btn-ghost btn-sm';}
  });
}

function approvePMCreator(pid, creatorId, creatorName){
  const p=DB.getProject(pid);if(!p)return;
  p.assignedCreatorId=creatorId;
  DB.saveProject(p);
  toast(creatorName+' assigned to project!','ok');
  closeModal();
  S.detailPid=pid;
  render();
}

async function generateBrandBook(pid){
  const result=window._pmBriefingResult?.result;
  const p=DB.getProject(pid);
  const cl=DB.getUser(p?.clientId);
  const pm=DB.getPM(p?.assignedPmId);
  const bb=result?.brandBook||{};
  const rec=result?.projectRecommendations||{};
  const ri=result?.researchInsights||{};

  toast('Generating Brand Book PDF...','info');

  // Load jsPDF dynamically
  if(!window.jspdf){
    await new Promise((res,rej)=>{
      const s=document.createElement('script');
      s.src='https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
      s.onload=res;s.onerror=rej;
      document.head.appendChild(s);
    });
  }

  const {jsPDF}=window.jspdf;
  const doc=new jsPDF({orientation:'portrait',unit:'mm',format:'a4'});
  const W=210;const H=297;const M=20;const TW=W-M*2;
  let y=M;

  const addPage=()=>{doc.addPage();y=M;};
  const checkPage=(h=20)=>{if(y+h>H-M)addPage();};

  const drawRect=(x,fy,w,h,r,fill)=>{
    if(fill)doc.setFillColor(...fill);
    if(r){doc.roundedRect(x,fy,w,h,r,r,fill?'F':'S');}
    else{doc.rect(x,fy,w,h,fill?'F':'S');}
  };

  const addText=(text,x,fy,opts={})=>{
    doc.setFont(opts.font||'helvetica',opts.style||'normal');
    doc.setFontSize(opts.size||10);
    doc.setTextColor(...(opts.color||[30,30,30]));
    const lines=doc.splitTextToSize(text||'—',opts.maxW||TW);
    doc.text(lines,x,fy,{align:opts.align||'left'});
    return lines.length*(opts.size||10)*0.4+2;
  };

  // ─── COVER PAGE ───
  drawRect(0,0,W,H,0,[10,10,20]);
  drawRect(0,H-60,W,60,0,[139,92,246]);
  doc.setFillColor(139,92,246);
  doc.circle(W/2,H/2-20,60,'F');
  doc.setFillColor(20,20,40);
  doc.circle(W/2,H/2-20,55,'F');

  addText('BRAND BOOK',W/2,H/2-35,{size:28,style:'bold',color:[255,255,255],align:'center'});
  addText(cl?.name||'Client Brand',W/2,H/2-18,{size:14,color:[167,139,250],align:'center'});
  addText(`Prepared by ${pm?.name||'AI PM'} · CinexAI`,W/2,H/2+5,{size:10,color:[100,100,140],align:'center'});
  addText(new Date().toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'}),W/2,H/2+14,{size:9,color:[80,80,120],align:'center'});
  addText('CONFIDENTIAL — FOR INTERNAL USE ONLY',W/2,H-30,{size:8,color:[100,100,140],align:'center'});

  // ─── PAGE 2: BRAND OVERVIEW ───
  addPage();
  doc.setFillColor(139,92,246);
  doc.rect(M,y,TW,1,'F');
  y+=5;
  addText('1. BRAND OVERVIEW',M,y,{size:16,style:'bold',color:[139,92,246]});y+=10;

  const sections=[
    ['Brand Overview',bb.brandOverview],
    ['Visual Identity',bb.visualIdentity],
    ['Tone of Voice',bb.toneOfVoice],
    ['Target Audience',bb.targetAudience],
  ];

  for(const [title,text] of sections){
    checkPage(30);
    addText(title.toUpperCase(),M,y,{size:8,style:'bold',color:[139,92,246]});y+=5;
    const h=addText(text||'—',M,y,{size:10,color:[50,50,60]});
    y+=h+8;
    doc.setDrawColor(230,230,240);
    doc.line(M,y,M+TW,y);y+=6;
  }

  // ─── PAGE 3: MARKET & POSITIONING ───
  addPage();
  doc.setFillColor(6,182,212);
  doc.rect(M,y,TW,1,'F');y+=5;
  addText('2. MARKET POSITIONING & RESEARCH',M,y,{size:16,style:'bold',color:[6,182,212]});y+=10;

  const mSections=[
    ['Market Positioning',bb.marketPositioning],
    ['Competitor Landscape',bb.competitorLandscape],
    ['Market Trends',ri.marketTrends],
    ['Competitor Activity',ri.competitorActivity],
    ['Creative Opportunities',ri.opportunities],
  ];

  for(const [title,text] of mSections){
    checkPage(30);
    addText(title.toUpperCase(),M,y,{size:8,style:'bold',color:[6,182,212]});y+=5;
    const h=addText(text||'—',M,y,{size:10,color:[50,50,60]});
    y+=h+8;
    doc.setDrawColor(230,230,240);
    doc.line(M,y,M+TW,y);y+=6;
  }

  // ─── PAGE 4: CREATIVE GUIDELINES ───
  addPage();
  doc.setFillColor(245,158,11);
  doc.rect(M,y,TW,1,'F');y+=5;
  addText('3. CREATIVE GUIDELINES',M,y,{size:16,style:'bold',color:[180,120,10]});y+=10;

  addText('CREATIVE APPROACH',M,y,{size:8,style:'bold',color:[180,120,10]});y+=5;
  const ch=addText(bb.creativeApproach||'—',M,y,{size:10,color:[50,50,60]});y+=ch+10;

  // Do list
  if(bb.doList?.length){
    checkPage(20);
    addText('✅ ALWAYS DO',M,y,{size:9,style:'bold',color:[16,185,129]});y+=6;
    for(const item of bb.doList){
      checkPage(10);
      const h2=addText('• '+item,M+3,y,{size:10,color:[50,50,60]});
      y+=h2+2;
    }
    y+=6;
  }

  // Don't list
  if(bb.dontList?.length){
    checkPage(20);
    addText('❌ ALWAYS AVOID',M,y,{size:9,style:'bold',color:[239,68,68]});y+=6;
    for(const item of bb.dontList){
      checkPage(10);
      const h2=addText('• '+item,M+3,y,{size:10,color:[50,50,60]});
      y+=h2+2;
    }
    y+=6;
  }

  // Key messages
  if(bb.keyMessages?.length){
    checkPage(20);
    addText('💬 KEY MESSAGES',M,y,{size:9,style:'bold',color:[139,92,246]});y+=6;
    bb.keyMessages.forEach((msg,i)=>{
      checkPage(14);
      drawRect(M,y,TW,12,3,[245,243,255]);
      addText(`${i+1}. ${msg}`,M+4,y+8,{size:10,color:[80,60,140],maxW:TW-8});
      y+=15;
    });
  }

  // ─── PAGE 5: PRODUCTION RECOMMENDATIONS ───
  addPage();
  doc.setFillColor(139,92,246);
  doc.rect(M,y,TW,1,'F');y+=5;
  addText('4. PRODUCTION RECOMMENDATIONS',M,y,{size:16,style:'bold',color:[139,92,246]});y+=12;

  // Creator rec box
  drawRect(M,y,TW,30,4,[245,243,255]);
  addText('RECOMMENDED CREATOR',M+5,y+7,{size:8,style:'bold',color:[139,92,246]});
  addText(rec.recommendedCreatorName||'TBD',M+5,y+15,{size:14,style:'bold',color:[70,50,130]});
  addText(rec.creatorReason||'',M+5,y+22,{size:9,color:[100,80,160],maxW:TW-10});
  y+=36;

  // Models
  const modelSections=[
    ['IMAGE GENERATION MODEL',rec.imageModel,'#E0F2FE'],
    ['VIDEO GENERATION MODEL',rec.videoModel,'#F0FDF4'],
  ];
  for(const [title,text,bg] of modelSections){
    drawRect(M,y,TW,22,3,bg.match(/[\da-f]{2}/gi).map(v=>parseInt(v,16)));
    addText(title,M+5,y+7,{size:8,style:'bold',color:[60,60,80]});
    const h2=addText(text||'—',M+5,y+13,{size:10,color:[40,40,60],maxW:TW-10});
    y+=27;
  }

  y+=4;
  addText('PRODUCTION NOTES',M,y,{size:9,style:'bold',color:[60,60,80]});y+=6;
  addText(rec.productionNotes||'—',M,y,{size:10,color:[50,50,60]});

  // ─── FOOTER on each page ───
  const totalPages=doc.getNumberOfPages();
  for(let i=1;i<=totalPages;i++){
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150,150,170);
    doc.text(`CinexAI Brand Book — ${cl?.name||'Client'} — Confidential`,M,H-8);
    doc.text(`Page ${i} of ${totalPages}`,W-M,H-8,{align:'right'});
  }

  // Save and store in brand folder
  const pdfBase64=doc.output('datauristring');
  const fileName=`Brand_Book_${(cl?.name||'Brand').replace(/\s+/g,'_')}_${Date.now()}.pdf`;

  // Store in brand folder
  const u=DB.getUser(p.clientId);
  if(u){
    if(!u.brandAssets)u.brandAssets=[];
    // Remove old brand books
    u.brandAssets=u.brandAssets.filter(a=>a.assetType!=='Brand Book');
    u.brandAssets.unshift({
      id:gid('bb'),
      name:fileName,
      type:'application/pdf',
      preview:null,
      pdfData:pdfBase64,
      assetType:'Brand Book',
      generatedBy:pm?.name||'AI PM',
      uploadedAt:new Date().toISOString(),
      persisted:false
    });
    DB.saveUser(u);
  }

  // Download
  doc.save(fileName);
  toast('Brand Book PDF generated and saved to Brand Folder!','ok');
  closeModal();
}

// ── BRAND FOLDER ──
function triggerBFUpload(type){
  window._bfUploadType=type;
  const el=document.getElementById('bf-upload');
  if(el){el.value='';el.click();}
}

function uploadBFAsset(e, type){
  const u=DB.getUser(S.session.userId);if(!u)return;
  if(!u.brandAssets)u.brandAssets=[];
  Array.from(e.target.files).forEach(f=>{
    const r=new FileReader();
    r.onload=async ev=>{
      const b64=ev.target.result;
      const isImg=f.type.startsWith('image/');
      const asset={id:gid('a'),name:f.name,type:f.type,preview:isImg?b64:null,assetType:type||guessAssetType(f.name),uploadedAt:new Date().toISOString(),persisted:false};
      u.brandAssets.push(asset);DB.saveUser(u);render();
      if(isImg){
        try{
          const pUrl=await persistImage(b64);
          const a2=u.brandAssets.find(x=>x.id===asset.id);
          if(a2){a2.preview=pUrl;a2.persisted=true;}
          DB.saveUser(u);
          toast(f.name+' uploaded!','ok');
        }catch(er){toast(f.name+' saved locally','info');}
      } else {
        toast(f.name+' added to brand folder','ok');
      }
    };
    r.readAsDataURL(f);
  });
}

function deleteBFAsset(assetId){
  const u=DB.getUser(S.session.userId);if(!u||!u.brandAssets)return;
  if(!confirm('Remove this asset from your brand folder?'))return;
  u.brandAssets=u.brandAssets.filter(a=>a.id!==assetId);
  DB.saveUser(u);render();
}

function saveBFNotes(){
  const u=DB.getUser(S.session.userId);if(!u)return;
  if(!u.brandFolder)u.brandFolder={};
  u.brandFolder.notes=document.getElementById('bf-notes')?.value||'';
  DB.saveUser(u);
  const saved=document.getElementById('bf-notes-saved');
  if(saved){saved.style.display='inline';setTimeout(()=>saved.style.display='none',2000);}
  toast('Brand notes saved!','ok');
}

function uploadClientAssets(e){
  const u=DB.getUser(S.session.userId);if(!u)return;
  if(!u.brandAssets)u.brandAssets=[];
  Array.from(e.target.files).forEach(f=>{
    const r=new FileReader();
    r.onload=async ev=>{
      const b64=ev.target.result;
      const isImg=f.type.startsWith('image/');
      // Add immediately with base64 so UI shows it right away
      const asset={id:gid('a'),name:f.name,type:f.type,preview:isImg?b64:null,assetType:guessAssetType(f.name),uploadedAt:new Date().toISOString(),persisted:false};
      u.brandAssets.push(asset);DB.saveUser(u);render();
      // Upload to imgbb for permanent URL (removes base64 from DB)
      if(isImg){
        try{
          const pUrl=await persistImage(b64);
          asset.preview=pUrl;asset.persisted=true;
          DB.saveUser(u);render();
          toast(f.name+' uploaded permanently','ok');
        }catch(er){
          asset.persisted=false;// keep base64 as fallback
          DB.saveUser(u);
        }
      }
    };
    r.readAsDataURL(f);
  });
}
function deleteClientAsset(i){const u=DB.getUser(S.session.userId);if(!u||!u.brandAssets)return;if(!confirm('Delete this asset?'))return;u.brandAssets.splice(i,1);DB.saveUser(u);render();}
function guessAssetType(n){const nl=n.toLowerCase();if(nl.includes('logo'))return'Logo';if(nl.includes('guide')||nl.includes('brand'))return'Brand Guide';if(nl.includes('ref')||nl.includes('mood'))return'Reference';return'Asset';}

// ══════════════════════════════════════
// MODALS
// ══════════════════════════════════════
// Client avatar helper — shows logo if available, else initial
function clientAvatar(u, size=36, radius=8){
  if(!u)return'<div class="uav uav-client">?</div>';
  var initial=(u.name[0]||'?').toUpperCase();
  var sz=size!==36?'width:'+size+'px;height:'+size+'px;font-size:'+Math.round(size*0.38)+'px;border-radius:'+radius+'px;':'';
  if(u.logoUrl){
    return'<div style="width:'+size+'px;height:'+size+'px;border-radius:'+radius+'px;overflow:hidden;background:var(--bg3);flex-shrink:0"><img src="'+esc(u.logoUrl)+'" style="width:100%;height:100%;object-fit:contain" /></div>';
  }
  return'<div class="uav uav-client" style="'+sz+'">'+initial+'</div>';
}

function showRegModal(role){
  const ic=role==='client';
  const pms=DB.getPMs();
  openModal(`<div class="modal-title">${ic?'Register New Client':'Add Creator'}</div>
${ic?`<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
  <div id="reg-logo-preview" style="width:60px;height:60px;border-radius:12px;background:var(--bg3);border:2px dashed var(--b2);display:flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;flex-shrink:0" onclick="document.getElementById('reg-logo-file').click()" title="Upload client logo">
    <span style="font-size:22px">🏢</span>
  </div>
  <div style="flex:1">
    <div style="font-size:11px;font-weight:700;color:var(--t1);margin-bottom:3px">Client Logo</div>
    <div style="font-size:9px;color:var(--t4);margin-bottom:6px">Shows as avatar across the platform</div>
    <button class="btn btn-ghost btn-sm" style="font-size:9px" onclick="document.getElementById('reg-logo-file').click()">+ Upload Logo</button>
  </div>
  <input type="file" id="reg-logo-file" accept="image/*" style="display:none" onchange="previewRegLogo(this)">
</div>`:''}
<div class="fg"><label>Full Name</label><input type="text" id="rn" placeholder="e.g. Priya Sharma"/></div>
<div class="fg"><label>Email</label><input type="text" id="re" placeholder="email@company.com"/></div>
${!ic?`<div class="fg"><label>Username (for login)</label><input type="text" id="ru" placeholder="e.g. priya.sharma" oninput="document.getElementById('ru-preview').textContent=this.value||'username'"/></div>`:''}
<div class="fg"><label>Temporary Password</label><div style="display:flex;gap:6px"><input type="text" id="rp" value="${ic?gpw():gpw()}" style="flex:1"/><button class="btn btn-ghost btn-sm" onclick="document.getElementById('rp').value=gpw()" style="white-space:nowrap;font-size:9px">↺ New</button></div><div style="font-size:9px;color:#F59E0B;margin-top:4px">Creator must change this on first login</div></div>${!ic?`<div class="fg"><label>Specialisations <span style="font-size:9px;color:var(--t4);font-weight:400">optional</span></label><div style="display:flex;gap:5px;flex-wrap:wrap" id="spec-tags">${['Video Production','Photography','Motion Graphics','3D','Animation','Copywriting','Social Media','Brand Design','Audio','Post Production'].map(s=>`<button onclick="toggleSpecTag('${s}',this)" style="font-size:9px;padding:3px 9px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);background:transparent;color:var(--t4);cursor:pointer">${s}</button>`).join('')}</div></div>`:''}
${ic?`<div class="fg"><label>Assign AI PM <span style="font-size:9px;color:var(--red);font-weight:600">* Required</span></label><select id="rpm" style="border-color:var(--b2)"><option value="">— Select a PM —</option>${pms.map(pm=>`<option value="${pm.id}">${esc(pm.name)} · ${esc(pm.domain)}</option>`).join('')}</select>${!pms.length?`<div style="font-size:9px;color:var(--red);margin-top:3px">No PMs available — create PMs from the AI PMs tab first.</div>`:''}</div>`:''}
<div class="btn-row"><button class="btn btn-gold" onclick="doRegister('${role}')">Register ${ic?'Client':'AI PM'}</button><button class="btn btn-ghost" onclick="closeModal()">Cancel</button></div>`);
}
function doRegister(role){
  const name=document.getElementById('rn')?.value.trim();if(!name){toast('Name required','err');return}
  const email=document.getElementById('re')?.value.trim()||'';
  const pw=document.getElementById('rp')?.value.trim()||gpw();
  const username=document.getElementById('ru')?.value.trim()||name.toLowerCase().replace(/\s+/g,'.');
  const ic=role==='client';
  const u={id:gid('u'),role,name,email,password:pw,active:true,brandAssets:[],assignedClients:[],apiKeys:{},createdAt:new Date().toISOString(),firstLogin:true,onboarded:false,bio:'',skills:[],specialisations:[],availability:'full-time',tools:[]};
  if(ic){const pmId=document.getElementById('rpm')?.value||null;if(!pmId){toast('Please select an AI PM — it is required','err');return;}u.clientId=gcid();u.assignedPmId=pmId;const logo=window._regLogoData;if(logo){u.logoUrl=logo;window._regLogoData=null;}}else u.username=username;
  DB.saveUser(u);closeModal();render();
  toast(`${ic?'Client':'Creator'} registered! Login: ${ic?u.clientId:username} / ${pw}`,'ok');
  if(!ic)setTimeout(()=>showCreatorCredentialsModal(u,username,pw),400);
  pushToRole('admin','account',`New ${ic?'client':'creator'} registered`,`${name} (${ic?u.clientId:username}) has been added`,null);
}

function showEditUserModal(uid){
  const u=DB.getUser(uid);if(!u)return;
  const pms=DB.getPMs();
  openModal(`<div class="modal-title">Edit ${u.role==='client'?'Client':'Creator'} — ${esc(u.name)}</div>
<div class="fg"><label>Full Name</label><input type="text" id="eu-n" value="${esc(u.name)}"/></div>
<div class="fg"><label>Email</label><input type="text" id="eu-e" value="${esc(u.email||'')}"/></div>
<div class="fg"><label>Password</label><input type="password" id="eu-p" value="${esc(u.password||'')}"/></div>
${u.role==='client'?`
<div class="fg"><label>Assign AI PM <span style="font-size:9px;color:var(--t4);font-weight:400">Change or assign dedicated PM</span></label>
<select id="eu-pm">
  <option value="">— No PM —</option>
  ${pms.map(pm=>`<option value="${pm.id}"${u.assignedPmId===pm.id?' selected':''}>${esc(pm.name)} · ${esc(pm.domain)}</option>`).join('')}
</select></div>
<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
  <div style="font-size:10px;color:var(--t4)">Client ID:</div>
  <code style="color:var(--purple);font-size:11px">${u.clientId}</code>
</div>`:''}
<div class="btn-row"><button class="btn btn-gold" onclick="doEditUser('${uid}')">Save</button><button class="btn btn-ghost" onclick="closeModal()">Cancel</button></div>`);
}
function previewRegLogo(input){
  const file=input.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>{
    window._regLogoData=e.target.result;
    const preview=document.getElementById('reg-logo-preview');
    if(preview)preview.innerHTML=`<img src="${e.target.result}" style="width:100%;height:100%;object-fit:contain;border-radius:10px">`;
  };
  reader.readAsDataURL(file);
}
function doEditUser(uid){
  const u=DB.getUser(uid);if(!u)return;
  u.name=document.getElementById('eu-n')?.value.trim()||u.name;
  u.email=document.getElementById('eu-e')?.value.trim()||u.email;
  u.password=document.getElementById('eu-p')?.value.trim()||u.password;
  if(u.role==='client'){
    const pmId=document.getElementById('eu-pm')?.value||null;
    const oldPmId=u.assignedPmId;
    u.assignedPmId=pmId||null;
    if(pmId&&pmId!==oldPmId){
      const pm=DB.getPM(pmId);
      pushNotif(u.id,'system','Your AI PM has been updated',pm?.name+' is now your dedicated AI Project Manager.');
    }
  }
  DB.saveUser(u);closeModal();render();toast('Updated!','ok');
}
function toggleActive(uid){const u=DB.getUser(uid);if(!u)return;u.active=!(u.active!==false);DB.saveUser(u);auditLog('user_status_changed',u.active?'Activated':'Deactivated',uid);render();toast(u.active?'Activated':'Deactivated',u.active?'ok':'info');}

function showAssignClientsModal(empId){
  const emp=DB.getUser(empId);if(!emp)return;
  const clients=DB.getUsers().filter(u=>u.role==='client');
  const assigned=new Set(emp.assignedClients||[]);
  openModal(`<div class="modal-title">Assign Clients — ${esc(emp.name)}</div>
<div style="display:flex;flex-direction:column;gap:6px;max-height:340px;overflow-y:auto;margin-bottom:12px">
${clients.map(c=>`<label style="display:flex;align-items:center;gap:8px;padding:8px 10px;background:var(--bg4);border:1px solid ${assigned.has(c.id)?'rgba(255,107,53,0.25)':'var(--b1)'};border-radius:6px;cursor:pointer">
<input type="checkbox" id="ac-${c.id}" ${assigned.has(c.id)?'checked':''} style="accent-color:var(--gold)"/>
<div><div style="font-size:11px;color:#fff">${esc(c.name)}</div><div style="font-size:9px;color:var(--t4)">${c.clientId||''}</div></div>
</label>`).join('')}
${!clients.length?'<div style="color:var(--t4);font-size:10px">No clients registered.</div>':''}
</div>
<div class="btn-row"><button class="btn btn-gold" onclick="saveClientAssignments('${empId}')">Save</button><button class="btn btn-ghost" onclick="closeModal()">Cancel</button></div>`);
}
function saveClientAssignments(empId){const emp=DB.getUser(empId);if(!emp)return;emp.assignedClients=DB.getUsers().filter(u=>u.role==='client'&&document.getElementById('ac-'+u.id)?.checked).map(u=>u.id);DB.saveUser(emp);closeModal();render();toast('Saved!','ok');}

function showAssignModal(pid){
  const p=DB.getProject(pid);if(!p)return;
  const emps=DB.getUsers().filter(u=>u.role==='creator');
  const clients=DB.getUsers().filter(u=>u.role==='client');
  openModal(`<div class="modal-title">Assign — ${esc(p.name)}</div>
<div class="fg"><label>AI PM</label><select id="ae"><option value="">Unassigned</option>${DB.getPMs().map(pm=>`<option value="${pm.id}"${p.assignedPmId===pm.id?' selected':''}}>${esc(pm.name)}</option>`).join('')}</select></div>
<div class="fg"><label>Client</label><select id="ac"><option value="">No client</option>${clients.map(c=>`<option value="${c.id}"${p.clientId===c.id?' selected':''}>${esc(c.name)} (${c.clientId||'—'})</option>`).join('')}</select></div>
<div class="btn-row"><button class="btn btn-gold" onclick="saveAssignment('${pid}')">Save</button><button class="btn btn-ghost" onclick="closeModal()">Cancel</button></div>`);
}
function saveAssignment(pid){const p=DB.getProject(pid);if(!p)return;p.assignedPmId=document.getElementById('ae')?.value||null;p.clientId=document.getElementById('ac')?.value||null;DB.saveProject(p);closeModal();render();toast('Saved!','ok');}

function showNewProjModal(prefill){
  const clients=DB.getUsers().filter(u=>u.role==='client');
  const emps=DB.getUsers().filter(u=>u.role==='creator');
  const pf=prefill||{};
  const mtColors={commercial_ad:'#FF6B35',short_film:'#8B5CF6',youtube_explainer:'#EF4444',podcast:'#3B82F6',product_video:'#06B6D4',testimonial:'#10B981',influencer_ugc:'#EC4899',music_video:'#F59E0B',design:'#06B6D4'};
  openModal(`<div class="modal-title">Launch New Project</div>

<div class="fg"><label>Project Name</label><input type="text" id="np-n" value="${esc(pf.name||'')}" placeholder="e.g. Q4 Social Campaign — Brand Awareness"/></div>

<div class="section-lbl" style="margin-top:12px">Media Type</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:16px">
${Object.entries(MT).map(([k,m])=>`<div onclick="document.querySelectorAll('.mt-card').forEach(c=>c.style.borderColor='var(--b2)');this.style.borderColor='${mtColors[k]||'var(--gold)'}';document.getElementById('np-t').value='${k}'" class="mt-card" style="background:var(--bg3);border:2px solid ${(pf.type||'commercial_ad')===k?(mtColors[k]||'var(--gold)'):'var(--b2)'};border-radius:var(--r);padding:10px;cursor:pointer;text-align:center;transition:border-color .15s">
<div style="font-size:18px;margin-bottom:4px">${m.icon}</div>
<div style="font-size:9px;font-weight:700;color:var(--t2)">${m.label}</div>
</div>`).join('')}
</div>
<select id="np-t" style="display:none">${Object.entries(MT).map(([k,m])=>`<option value="${k}"${(pf.type||'commercial_ad')===k?' selected':''}>${m.label}</option>`).join('')}</select>

<div class="section-lbl">Priority</div>
<div style="display:flex;gap:6px;margin-bottom:16px">
${[{v:'low',l:'Low',c:'var(--t4)',bg:'var(--bg3)'},{v:'medium',l:'Medium',c:'#F59E0B',bg:'rgba(245,158,11,0.08)'},{v:'high',l:'High',c:'var(--red)',bg:'rgba(239,68,68,0.08)'}].map(p=>`<button type="button" onclick="document.querySelectorAll('.pri-btn').forEach(b=>{b.style.borderColor='var(--b2)';b.style.background='var(--bg3)'});this.style.borderColor='${p.c}';this.style.background='${p.bg}';document.getElementById('np-pri').value='${p.v}'" class="pri-btn" style="flex:1;padding:8px;border-radius:var(--r);border:2px solid ${(pf.priority||'medium')===p.v?p.c:'var(--b2)'};background:${(pf.priority||'medium')===p.v?p.bg:'var(--bg3)'};color:${p.c};cursor:pointer;font-size:10px;font-weight:700;font-family:inherit;text-align:center">${p.l}</button>`).join('')}
</div>
<select id="np-pri" style="display:none"><option value="low">Low</option><option value="medium" selected>Medium</option><option value="high">High</option></select>

<div class="section-lbl">Assignment & Timeline</div>
<div class="form2">
<div class="fg"><label>Link Client</label><select id="np-c"><option value="">No client</option>${clients.map(c=>`<option value="${c.id}"${pf.clientId===c.id?' selected':''}>${esc(c.name)} (${c.clientId||'—'})</option>`).join('')}</select></div>
<div class="fg"><label>Assign AI PM</label><select id="np-e"><option value="">Unassigned</option>${DB.getPMs().map(pm=>`<option value="${pm.id}">${esc(pm.name)}</option>`).join('')}</select></div>
<div class="fg"><label>Deadline</label><input type="date" id="np-dl" value="${pf.deadline||''}"/></div>
<div class="fg"><label>Tags</label><input type="text" id="np-tags" value="${esc((pf.tags||[]).join(', '))}" placeholder="e.g. urgent, brand, social"/></div>
</div>
<div class="fg"><label>Brief / Notes</label><textarea id="np-notes" rows="2" placeholder="Any initial notes or brief details...">${esc(pf.notes||'')}</textarea></div>

<input type="hidden" id="np-wfinit" value="${esc(pf.workflowStatus||'')}"/>
<div class="btn-row"><button class="btn btn-gold" onclick="doNewProject()" style="flex:1;justify-content:center">✦ Launch Project</button><button class="btn btn-ghost" onclick="closeModal()">Cancel</button></div>`);
}
function doNewProject(){
  const name=document.getElementById('np-n')?.value.trim();if(!name){toast('Name required','err');return}
  const type=document.getElementById('np-t')?.value;
  const clientId=document.getElementById('np-c')?.value||null;
  const pmId=document.getElementById('np-e')?.value||null;
  const deadline=document.getElementById('np-dl')?.value||null;
  const notes=document.getElementById('np-notes')?.value.trim()||'';
  const tagsRaw=document.getElementById('np-tags')?.value||'';
  const tags=tagsRaw.split(',').map(t=>t.trim()).filter(Boolean);
  const priority=document.getElementById('np-pri')?.value||'medium';
  const mt=MT[type];
  const initWf=document.getElementById('np-wfinit')?.value||null;
  // Auto-assign client's dedicated PM if none explicitly chosen
  const clientUser=clientId?DB.getUser(clientId):null;
  const finalPmId=pmId||(clientUser?.assignedPmId)||null;
  const p={id:gid('p'),projectId:genProjectId(),type,name,clientId,assignedCreatorId:null,assignedPmId:finalPmId,
    workflowStatus:initWf||(clientId?'brief_submitted':'new'),
    priority,tags,
    clientBrief:{},clientRefs:[],brief:{},script:'',bible:{},shots:[],refs:[],sbState:{},
    vidPrompts:[],vidState:{},audioState:{},
    synopsisRevisions:[],synopsisRevisionCount:0,synopsisLocked:false,
    storyboardReleased:false,storyboardFeedback:[],overallStoryboardFeedback:'',
    clientViewedSyn:false,clientViewedSb:false,pendingFeedback:null,
    modules:{visuals:true,video:false,audio:false},
    deadline,stageHistory:[{stage:clientId?'brief_submitted':'new',enteredAt:new Date().toISOString()}],
    status:'Briefing',notes,comments:[],
    createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};
  DB.saveProject(p);closeModal();
  toast('Project '+p.projectId+' created!','ok');
  // Open detail view instead of jumping straight to Studio
  S.tab='projects';S.detailPid=p.id;render();
  pushToRole('admin','project','New project created',p.name+' ('+p.projectId+')',p.id);
  if(pmId){const pm=DB.getPM(pmId);if(pm)toast('Project assigned to '+pm.name+' (AI PM)','ok');}
  if(clientId)pushNotif(clientId,'project','Project started',p.name+' has been set up for you',p.id);
}

function viewClientBriefs(cid){
  const ps=DB.getProjects().filter(p=>p.clientId===cid);const c=DB.getUser(cid);
  openModal(`<div class="modal-title">Projects — ${esc(c?.name||cid)}</div>
${ps.map(p=>`<div style="background:var(--bg4);border:1px solid var(--b1);border-radius:6px;padding:10px;margin-bottom:7px;display:flex;align-items:center;gap:9px">
<div style="font-size:15px">${MT[p.type]?.icon||'?'}</div>
<div style="flex:1"><div style="font-size:11px;font-weight:700;color:#fff">${esc(p.name)}</div>
<div style="font-size:9px;color:var(--t4)">${(p.workflowStatus||'new').replace(/_/g,' ')}</div></div>
<button class="btn btn-outline btn-sm" onclick="closeModal();openStudio('${p.id}')">Open Studio</button>
</div>`).join('')}
${!ps.length?'<div style="color:var(--t4);font-size:10px;padding:10px">No projects.</div>':''}
<button class="btn btn-ghost" onclick="closeModal()">Close</button>`);
}

function viewClientAssets(cid){
  const c=DB.getUser(cid);const assets=c?.brandAssets||[];
  openModal(`<div class="modal-title">Brand Folder — ${esc(c?.name||cid)}</div>
<div class="ag" style="max-height:400px;overflow-y:auto">${assets.map(a=>`<div class="ac2">
<div class="at">${a.preview?`<img src="${a.preview}"/>`:'<div class="at-ph">📄</div>'}</div>
<div class="ai2"><div class="an">${esc(a.name)}</div><div class="atp">${a.assetType||'file'}</div></div>
</div>`).join('')}
${!assets.length?'<div style="color:var(--t4);font-size:10px;padding:12px;grid-column:1/-1">No assets.</div>':''}
</div><div class="btn-row" style="margin-top:10px"><button class="btn btn-ghost" onclick="closeModal()">Close</button></div>`);
}

function openModal(html){document.getElementById('modal-root').innerHTML=`<div class="modal-wrap" onclick="if(event.target===this)closeModal()"><div class="modal-box"><button class="modal-close" onclick="closeModal()">✕</button>${html}</div></div>`;}
function closeModal(){document.getElementById('modal-root').innerHTML='';}
function goBack(){
  if(S.creatorDetailPid){S.creatorDetailPid=null;render();return;}
  if(S.detailPid){S.detailPid=null;render();return;}
  if(S.pmView&&S.pmView!=='profile'){S.pmView='profile';render();return;}
  if(S.tab!=='dashboard'){S.tab='dashboard';render();return;}
}
function backBtn(label){
  return '<button class="btn btn-ghost btn-sm" style="margin-bottom:14px;font-size:11px;display:inline-flex;align-items:center;gap:5px" onclick="goBack()">← '+(label||'Back')+'</button>';
}
function showForgotModal(){
  openModal(
    '<div style="max-width:340px;text-align:center;padding:8px">'
    +'<div style="font-size:28px;margin-bottom:12px">&#128272;</div>'
    +'<div style="font-size:15px;font-weight:800;color:var(--t1);margin-bottom:8px">Forgot Password?</div>'
    +'<div style="font-size:12px;color:var(--t3);line-height:1.7;margin-bottom:16px">Passwords are managed by your CinexAI admin.<br>Contact your admin to have your password reset.</div>'
    +'<div style="background:rgba(196,157,58,0.08);border:1px solid rgba(196,157,58,0.2);border-radius:8px;padding:12px;font-size:11px;color:var(--t3);margin-bottom:16px">Reach out to your account manager or CinexAI admin directly.</div>'
    +'<button class="btn btn-ghost" style="width:100%" onclick="closeModal()">Close</button>'
    +'</div>'
  );
}

function openImgModal(title,url,prompt){if(!url)return;openModal(`<div class="modal-title" style="display:flex;align-items:center;justify-content:space-between">${esc(title)}<div style="display:flex;gap:5px"><button class="btn btn-ghost btn-sm" onclick="toggleImgFullscreen()" title="Fullscreen">⛶ Fullscreen</button><button class="btn btn-ghost btn-sm" onclick="dlImg('${url}','${esc(title||'image')}.jpg')" title="Download">↓</button></div></div><img src="${url}" id="modal-img-fs" style="width:100%;border-radius:6px;margin-bottom:10px;cursor:pointer" onclick="toggleImgFullscreen()"/>${prompt?`<div style="background:var(--bg3);border:1px solid var(--b1);border-radius:6px;padding:8px 10px;margin-bottom:10px;max-height:80px;overflow-y:auto"><div style="font-size:8px;color:var(--t4);text-transform:uppercase;margin-bottom:3px">Prompt</div><div style="font-size:10px;color:var(--t3);line-height:1.4;word-break:break-word">${esc(prompt)}</div></div>`:''}<button class="btn btn-ghost" onclick="closeModal()">Close</button>`);}
function toggleImgFullscreen(){const img=document.getElementById('modal-img-fs');if(!img)return;if(!document.fullscreenElement){img.requestFullscreen?.().catch(()=>{img.style.position='fixed';img.style.top='0';img.style.left='0';img.style.width='100vw';img.style.height='100vh';img.style.objectFit='contain';img.style.zIndex='99999';img.style.background='#000';img.style.borderRadius='0';img.dataset.fsFallback='1';});}else{document.exitFullscreen?.();}}
function viewAsClient(cid){const og=S.session.userId;const ogName=S.session.name;auditLog('admin_impersonation','Admin viewing as client',cid);S.session={...S.session,_og:og,_ogName:ogName,_impersonating:true,userId:cid,role:'client',name:DB.getUser(cid)?.name||'Client'};S.view='client';S.tab='dashboard';render();}
function returnToAdmin(){if(!S.session._og)return;S.session={...S.session,userId:S.session._og,name:S.session._ogName||'Admin',role:'admin',_og:null,_ogName:null,_impersonating:false};S.view='admin';S.tab='dashboard';render();}

// ══════════════════════════════════════
// STUDIO
// ══════════════════════════════════════
function openStudio(pid){
  saveInputs();S.pid=pid;S.tab='studio';S.stage=1;S.step=1;S.detailPid=null;
  const p=DB.getProject(pid);if(p){S.sbState=p.sbState||{};S.vidState=p.vidState||{};S.audioState=p.audioState||{};}
  VEO_RULES.forEach(r=>{if(S.rules[r.id]===undefined)S.rules[r.id]=true});
  render();
}
function getUnreadCommentCount(p,uid){
  if(!uid||!p)return 0;
  const comments=p.comments||[];if(!comments.length)return 0;
  const u=DB.getUser(uid);const lastRead=(u?.lastReadComments||{})[p.id]||'1970-01-01';
  return comments.filter(cm=>cm.ts>lastRead&&cm.authorId!==uid).length;
}
function markCommentsRead(pid,uid){
  const u=DB.getUser(uid);if(!u)return;
  if(!u.lastReadComments)u.lastReadComments={};
  u.lastReadComments[pid]=new Date().toISOString();
  DB.saveUser(u);
}

function studioWrap(){
  // Inject Creator Control Panel and Soul Cast if at stage 1 (Brief/References)
  const p=DB.getProject(S.pid);if(!p)return'<div style="padding:20px;color:var(--t3)">Project not found.</div>';
  const mt=MT[p.type];const cl=p.clientId?DB.getUser(p.clientId):null;
  const clAssets=cl?.brandAssets||[];
  const wf=p.workflowStatus||'new';
  return`<div style="background:#0a0a0a;border-bottom:1px solid var(--b1);padding:9px 18px;display:flex;align-items:center;gap:10px;flex-wrap:wrap">
<button class="btn btn-ghost btn-sm" onclick="S.tab='${S.view==='admin'?'projects':'dashboard'}';S.pid=null;render()">← Back</button>
<div style="flex:1;min-width:120px;display:flex;align-items:baseline;gap:7px">
<input id="ph-n" value="${esc(p.name)}" style="background:transparent;border:none;color:#fff;font-size:13px;font-weight:700" onblur="saveInputs()"/>
${p.projectId?`<span style="font-size:9px;font-weight:700;color:var(--gold);font-family:monospace;background:#1a0f1e;border:1px solid rgba(255,107,53,0.18);padding:2px 7px;border-radius:11px">${p.projectId}</span>`:''}
</div>
${cl?`<span class="badge badge-purple">${esc(cl.clientId||'')}</span><span style="font-size:10px;color:var(--t3)">${esc(cl.name)}</span>`:''}
<select id="ph-wf" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:4px 7px;border-radius:4px;font-size:9px" onchange="saveInputs()">
${['new','brief_submitted','synopsis_review','synopsis_locked','storyboard_in_progress','storyboard_review','complete'].map(s=>`<option value="${s}"${p.workflowStatus===s?' selected':''}>${s.replace(/_/g,' ')}</option>`).join('')}
</select>
<div style="display:flex;align-items:center;gap:4px">
<span style="font-size:8px;color:var(--t4);text-transform:uppercase">Deadline</span>
<input type="date" id="ph-deadline" value="${p.deadline||''}" onchange="saveInputs()" style="background:var(--bg4);border:1px solid ${p.deadline&&new Date(p.deadline)<new Date()?'var(--red)':p.deadline&&new Date(p.deadline)<new Date(Date.now()+7*864e5)?'var(--warning)44':'var(--b2)'};color:${p.deadline&&new Date(p.deadline)<new Date()?'var(--red)':p.deadline&&new Date(p.deadline)<new Date(Date.now()+7*864e5)?'#FF8A5C':'var(--t1)'};padding:3px 7px;border-radius:4px;font-size:9px"/>
</div>
${wf==='brief_submitted'||p.newBrief?`<button class="btn btn-gold btn-sm" onclick="genSynopsis()">✦ Generate Synopsis</button>`:''}
${p.type==='design'?`<button class="btn btn-purple btn-sm" onclick="openCanvaForDesign('${p.id}')">🎨 Open in Canva</button>`:'' }
${wf==='storyboard_in_progress'?`<button class="btn btn-green btn-sm" onclick="releaseStoryboard('${p.id}')">Release to Client</button>`:''}
${clAssets.length?`<button class="btn btn-purple btn-sm" onclick="viewClientAssets('${p.clientId}')">Assets (${clAssets.length})</button>`:''}
</div>
<div style="background:var(--bg4);border-bottom:1px solid var(--b1);padding:5px 18px;display:flex;gap:14px;align-items:center;flex-wrap:wrap">
<span style="font-size:9px;color:var(--t4)">Modules:</span>
${['visuals','video','audio','post_production'].map(m=>`<label style="display:flex;align-items:center;gap:4px;font-size:10px;color:var(--t3);cursor:pointer" onclick="toggleModule('${m}')"><button class="toggle ${p.modules?.[m]?'on':''}"></button>${m==='post_production'?'post pro':m}</label>`).join('')}
<span style="font-size:9px;color:var(--t4);margin-left:8px">Synopsis: <span style="color:${p.synopsisLocked?'var(--green)':'var(--gold)'}">${p.synopsisLocked?'Locked ✓':'Pending'}</span></span>
<span style="font-size:9px;color:var(--t4)">Storyboard: <span style="color:${p.storyboardReleased?'var(--green)':'var(--t4)'}">${p.storyboardReleased?'Released ✓':'Not released'}</span></span>
${p.pendingFeedback?`<span class="badge badge-red">Client feedback: ${p.pendingFeedback}</span>`:''}
</div>
${stageTabs(p)}${stepNav(p)}
<div>${stepContent(p,mt)}</div>`;
}

function toggleModule(m){const p=DB.getProject(S.pid);if(!p)return;if(!p.modules)p.modules={};p.modules[m]=!p.modules[m];DB.saveProject(p);render();}
function stageTabs(p){
  const stages=[{n:1,l:'✍ Writing',on:true},{n:2,l:'🖼 Visuals',m:'visuals',ml:'visuals'},{n:3,l:'🎬 Production',m:'video',ml:'video'},{n:4,l:'⚙ Post Pro',m:'post_production',ml:'post pro'}];
  const uid=S.session?.userId;const role=S.session?.role;
  const unread=getUnreadCommentCount(p,uid);
  const isInternal=role==='admin'||role==='creator';
  return`<div class="studio-stages">${stages.map(st=>{const on=st.on||(p.modules?.[st.m]);return`<div class="sst${S.stage===st.n?' active':''}${!on?' off':''}" onclick="${on?`goStage(${st.n})`:`toast('Enable ${st.ml||st.m} module first','err')`}">${st.l}</div>`;}).join('')}
${isInternal?`<div class="sst${S.stage===98?' active':''}" onclick="goStage(98);markCommentsRead('${p.id}','${uid}')" style="margin-left:auto;display:flex;align-items:center;gap:4px">💬 Comments${unread?`<span style="background:var(--red);color:#fff;font-size:7px;font-weight:700;border-radius:8px;padding:1px 5px;min-width:14px;text-align:center">${unread}</span>`:'('+((p.comments||[]).length)+')'}</div>`:`<div style="flex:1"></div>`}
<div class="sst${S.stage===99?' active':''}" onclick="goStage(99)" style="${isInternal?'':'margin-left:auto;'}color:var(--t4)">📅 Timeline</div></div>`;
}
function goStage(n){saveInputs();S.stage=n;S.step=1;render();}
function goStep(n){saveInputs();S.step=n;render();}

function stepNav(p){
  let steps;
  if(S.stage===1)steps=[{n:1,l:'Brief'},{n:2,l:'Synopsis'},{n:3,l:'Script'},{n:4,l:'Bible'},{n:5,l:'Shots'}];
  else if(S.stage===2)steps=[{n:1,l:'References'},{n:2,l:'Multi-Angle'},{n:3,l:'Storyboard'}];
  else if(S.stage===4)steps=[{n:1,l:'Tools'},{n:2,l:'Scripts'},{n:3,l:'Export'}];
  else steps=[{n:1,l:'Model'},{n:2,l:'Lock'},{n:3,l:'Prompts'},{n:4,l:'Video'},{n:5,l:'Audio'},{n:6,l:'Assembly'}];
  return`<div class="step-nav">${steps.map(s=>`<div class="sn${S.step===s.n?' active':''}" onclick="goStep(${s.n})"><div class="snum">${s.n}</div>${s.l}</div>`).join('')}</div>`;
}

function stepContent(p,mt){
  const w='<div class="sc">';
  if(S.stage===98)return w+sComments(p)+'</div>';
  if(S.stage===99)return w+sProjectTimeline(p)+'</div>';
  if(S.stage===1){
    if(S.step===1)return w+sBrief(p,mt)+'</div>';
    if(S.step===2)return w+sSynopsis(p)+'</div>';
    if(S.step===3)return w+sScript(p)+'</div>';
    if(S.step===4)return w+sBible(p)+'</div>';
    if(S.step===5)return w+sShots(p,mt)+'</div>';
  }else if(S.stage===2){
    if(S.step===1)return w+sRefs(p)+'</div>';
    if(S.step===2)return w+sMultiAngle(p)+'</div>';
    if(S.step===3)return w+sStoryboard(p)+'</div>';
  }else if(S.stage===4){
    if(S.step===1)return w+sPostToolSelection(p)+'</div>';
    if(S.step===2)return w+sPostProcessing(p)+'</div>';
    if(S.step===3)return w+sPostExport(p)+'</div>';
  }else{
    if(S.step===1)return w+sModel(p)+'</div>';
    if(S.step===2)return w+sLock(p)+'</div>';
    if(S.step===3)return w+sVidPrompts(p)+'</div>';
    if(S.step===4)return w+sVidGen(p)+'</div>';
    if(S.step===5)return w+sAudio(p)+'</div>';
    if(S.step===6)return w+sAssembly(p)+'</div>';
  }
  return w+'</div>';
}

// ── STEP 1: BRIEF ──
function sBrief(p,mt){
  const b={...p.brief,...p.clientBrief};
  const hasCB=p.clientBrief&&Object.values(p.clientBrief).some(v=>v);
  return`<div class="ptitle">Brief</div><div class="psub">Edit brief or use client-submitted data.</div>
${hasCB?`<div class="ib ib-blue"><strong>Client brief received.</strong> Fields pre-filled from their submission.</div>`:''}
${p.clientRefs?.length?`<div class="ib ib-gold"><strong>Client uploaded ${p.clientRefs.length} reference file(s).</strong> <button class="btn btn-ghost btn-sm" onclick="showClientRefsModal()">View</button></div>`:''}
<div class="form2">
${(mt?.clientQs||[]).map(q=>`<div class="fg"><label>${q.q}</label>${
q.t==='select'?`<select data-bf="${q.id}">${(q.opts||[]).map(o=>`<option${(b[q.id]===o)?' selected':''}>${o}</option>`).join('')}</select>`:
q.t==='textarea'?`<textarea data-bf="${q.id}" rows="3">${esc(b[q.id]||'')}</textarea>`:
`<input type="text" data-bf="${q.id}" value="${esc(b[q.id]||'')}" placeholder="${q.hint||''}"/>`
}</div>`).join('')}
</div>
<div class="btn-row">
<button class="btn btn-gold" onclick="genSynopsis()">✦ Generate Synopsis</button>
<button class="btn btn-outline" onclick="goStep(3)">Skip to Script →</button>
</div>`;
}

function showClientRefsModal(){
  const p=DB.getProject(S.pid);if(!p)return;
  const refs=p.clientRefs||[];
  openModal(`<div class="modal-title">Client Reference Files (${refs.length})</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:9px;max-height:400px;overflow-y:auto">
${refs.map(r=>`<div style="background:var(--bg4);border:1px solid var(--b1);border-radius:6px;overflow:hidden">
${r.preview?`<img src="${r.preview}" style="width:100%;aspect-ratio:4/3;object-fit:cover;cursor:pointer" onclick="openImgModal('${esc(r.name)}','${r.preview}')"/>`:'<div style="aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;font-size:20px;color:var(--b3)">📄</div>'}
<div style="padding:5px 7px;font-size:9px;color:var(--t2)">${esc(r.name)}</div>
</div>`).join('')}
</div>
<div class="btn-row" style="margin-top:10px"><button class="btn btn-ghost" onclick="closeModal()">Close</button></div>`);
}

// ── STEP 2: SYNOPSIS (EMPLOYEE/ADMIN) ──
function getActiveWriter(p){
  const wid=p.writerId||S.writerId||'auto';
  if(wid==='auto'){
    const autoMap={commercial_ad:'commercial',short_form:'social_short',social_media:'social_short',youtube:'youtube_long',documentary:'film',music_video:'film',brand:'brand_copy'};
    const matched=autoMap[p.type]||'film';
    return WRITER_TYPES.find(w=>w.id===matched)||WRITER_TYPES[0];
  }
  return WRITER_TYPES.find(w=>w.id===wid)||WRITER_TYPES[0];
}
function writerSelector(p){
  const current=p.writerId||S.writerId||'auto';
  const active=getActiveWriter(p);
  return`<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:8px;padding:10px 14px;margin-bottom:12px">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
<span style="font-size:9px;color:var(--t3);font-weight:700;text-transform:uppercase">Writer Personality</span>
<span style="font-size:8px;color:var(--gold);margin-left:auto">Active: ${active.icon} ${active.n}</span>
</div>
<div style="display:flex;gap:6px;flex-wrap:wrap">
${WRITER_TYPES.map(w=>`<button onclick="S.writerId='${w.id}';const pp=DB.getProject(S.pid);if(pp){pp.writerId='${w.id}';DB.saveProject(pp);}render()" style="background:${current===w.id?'#1a0f1e':'var(--bg3)'};border:1px solid ${current===w.id?'var(--gold)':'var(--b2)'};color:${current===w.id?'var(--gold)':'var(--t3)'};padding:5px 10px;border-radius:6px;cursor:pointer;font-size:9px;display:flex;align-items:center;gap:4px;transition:all 0.15s" title="${esc(w.desc)}"><span>${w.icon}</span><span style="font-weight:${current===w.id?'700':'400'}">${w.n}</span></button>`).join('')}
</div>
<div style="font-size:8px;color:var(--t4);margin-top:6px;line-height:1.4">${active.icon} <strong>${active.n}</strong> — ${active.desc}${current==='auto'?` (auto-selected for ${MT[p.type]?.label||'this project'})`:''}</div>
</div>`;
}
function sSynopsis(p){
  const revs=p.synopsisRevisions||[];const latest=revs[revs.length-1];
  return`<div class="ptitle">Synopsis</div><div class="psub">Story-format synopsis for client review. Max 3 revisions.</div>
${writerSelector(p)}
<div class="btn-row" style="margin-bottom:12px">
<button class="btn btn-outline btn-sm" onclick="genSynopsis()" id="btn-gen-syn">✦ (Re)generate</button>
<span style="font-size:9px;color:var(--t4)">${revs.length} revision(s) · ${p.synopsisLocked?'<span style=\'color:var(--green)\'>Locked ✓</span>':'Pending client approval'}</span>
</div>
${latest?voiceReaderBar('synopsis',latest.text):''}
<div class="ai-load" id="syn-load"><div class="spinner"></div>Generating synopsis...</div>
${revs.map((r,i)=>`<div style="background:${i===revs.length-1?'#0e0a18':'var(--bg3)'};border:1px solid ${i===revs.length-1?'rgba(255,107,53,0.12)':'var(--b1)'};border-radius:7px;padding:13px;margin-bottom:8px">
<div style="font-size:9px;color:var(--t4);margin-bottom:6px;display:flex;justify-content:space-between">
<span>Version ${r.version}${r.timestamp?' — '+new Date(r.timestamp).toLocaleDateString():''}</span>
${r.feedback?`<span style="color:rgba(255,107,53,0.5)">FB: "${esc(r.feedback.substring(0,40))}"</span>`:'<span style="color:var(--t4)">Original</span>'}
</div>
<div style="font-size:11px;color:var(--t2);line-height:1.9;white-space:pre-wrap">${esc(r.text)}</div>
</div>`).join('')}
${!latest?'<div style="color:var(--t4);font-size:10px;padding:12px;text-align:center">Generate synopsis using the brief.</div>':''}
${!p.synopsisLocked&&latest?`<div class="card" style="margin-top:10px"><div class="card-head"><span class="card-title">EDIT / OVERRIDE</span></div><div class="card-body">
<div class="fg"><label>Edit synopsis directly</label><textarea id="syn-edit" rows="6">${esc(latest.text)}</textarea></div>
<div class="btn-row"><button class="btn btn-outline" onclick="saveSynEdit()">Save Edit</button><button class="btn btn-green" onclick="lockSynopsis()">Lock & Proceed →</button></div>
</div></div>`:''}
<div class="btn-row" style="margin-top:12px"><button class="btn btn-ghost btn-sm" onclick="goStep(1)">← Brief</button><button class="btn btn-gold" onclick="goStep(3)">→ Script</button></div>`;
}

async function genSynopsis(){
  saveInputs();const p=DB.getProject(S.pid);if(!p)return;
  if(!kC()){toast('Enter Claude API key','err');return}
  if(S.stage===1&&S.step!==2){goStep(2);}
  document.getElementById('syn-load')?.classList.add('show');
  const brief=Object.entries({...p.clientBrief,...p.brief}).filter(([,v])=>v).map(([k,v])=>`${k}: ${v}`).join('\n');
  const writer=getActiveWriter(p);
  const writerSys=writer.sys||'You are a creative director at a top media production agency. Write compelling creative synopses in vivid story format. No technical jargon.';
  // Merge L&D skill training if writer has trained skills
  const ldSkills=DB.getLDEntries().filter(e=>e.type==='skill'&&e.active&&(e.tags||[]).some(t=>t.includes(writer.id)||t.includes('writer')));
  const skillContext=ldSkills.length?'\n\nTRAINED SKILLS:\n'+ldSkills.map(s=>s.title+': '+(s.description||'')).join('\n'):'';
  try{
    const r=await callClaude(
      writerSys+' Write creative synopses for clients. Use vivid story format. Make the client excited to greenlight this.'+skillContext,
      p.type==='commercial_ad'
        ?`Write a creative synopsis for this Commercial Ad.\n\nCLIENT BRIEF:\n${brief}\n\nStructure as 4 vivid paragraphs:\n1. OPENING (0-3 sec): What does the viewer see and feel immediately?\n2. STORY ARC: How does the story unfold? What is the emotional journey?\n3. PRODUCT HERO MOMENT: How and when does the product/brand appear?\n4. CLOSING: The tagline, CTA, final image, and the feeling left with the viewer.\n\nWrite like a mini-film pitch. End with one sentence on the emotional impact.\n\nReturn ONLY the synopsis text.`
        :`Write a creative synopsis for this ${MT[p.type]?.label} project.\n\nBRIEF:\n${brief}\n\nWrite 2-3 engaging narrative paragraphs: the creative concept, story/structure, mood, visual direction, and the emotion the audience will feel. Make it exciting. End with the intended impact.\n\nReturn ONLY the synopsis text.`,
      2000
    );
    const p2=DB.getProject(S.pid);if(!p2.synopsisRevisions)p2.synopsisRevisions=[];
    p2.synopsisRevisions.push({version:p2.synopsisRevisions.length+1,text:r,feedback:null,timestamp:new Date().toISOString()});
    if(p2.workflowStatus!=='synopsis_review'){if(!p2.stageHistory)p2.stageHistory=[];p2.stageHistory.push({stage:'synopsis_review',enteredAt:new Date().toISOString()});}p2.workflowStatus='synopsis_review';p2.newBrief=false;DB.saveProject(p2);
    if(S.stage===1&&S.step!==2){S.step=2;}render();toast('Synopsis ready!','ok');
    if(p2.clientId)pushNotif(p2.clientId,'synopsis','Synopsis ready for review!',p2.name+' — your creative synopsis is ready. Please review and approve.',p2.id);
  }catch(e){toast(e.message,'err');}
  document.getElementById('syn-load')?.classList.remove('show');
}
function saveSynEdit(){const p=DB.getProject(S.pid);if(!p)return;const t=document.getElementById('syn-edit')?.value.trim();if(!t)return;if(!p.synopsisRevisions)p.synopsisRevisions=[];p.synopsisRevisions.push({version:p.synopsisRevisions.length+1,text:t,feedback:'manual edit',timestamp:new Date().toISOString()});DB.saveProject(p);render();toast('Saved!','ok');}
function lockSynopsis(){if(!confirm('Lock synopsis and proceed to production?'))return;const p=DB.getProject(S.pid);if(!p)return;p.synopsisLocked=true;p.workflowStatus='synopsis_locked';DB.saveProject(p);render();toast('Synopsis locked!','ok');}
function releaseStoryboard(pid){const p=DB.getProject(pid||S.pid);if(!p)return;if(!confirm('Release storyboard to client?'))return;p.storyboardReleased=true;p.workflowStatus='storyboard_review';DB.saveProject(p);render();toast('Storyboard released to client!','ok');
  if(p.clientId)pushNotif(p.clientId,'storyboard','Storyboard ready to review!',p.name+' ('+( p.projectId||'')+') — your storyboard frames are ready. Please review and leave feedback.',p.id);
  pushToRole('admin','storyboard','Storyboard released to client',p.name+' sent to client',p.id);}

// ── STEP 3: SCRIPT ──
function sScript(p){
  const isAd=p.type==='commercial_ad';
  const hasCompliance=!!(p.complianceCheck);
  const hasScript=!!(p.script);
  const viewMode=p._scriptView||'formatted'; // 'formatted' | 'raw'
  return`<div class="ptitle">Script</div>
<div class="psub">${isAd?'Time-coded commercial script — VISUAL | VO | SFX | SUPER format.':'Full production script.'}</div>
${writerSelector(p)}
${isAd?`<div class="ib ib-gold" style="font-size:10px;line-height:1.7;margin-bottom:10px"><strong>Commercial Script Format:</strong> Each row = one timed beat. <code>[0:00–0:05] VISUAL | VO/DIALOGUE | SFX | SUPER</code></div>`:''}
<!-- Action buttons -->
<div class="btn-row" style="margin-bottom:10px">
<button class="btn btn-gold" onclick="genScript()" id="btn-gen-sc">✦ Generate Script</button>
<button class="btn btn-ghost btn-sm" onclick="goStep(2)">← Synopsis</button>
${isAd&&hasScript?`<button class="btn btn-outline btn-sm" onclick="checkBrandCompliance()" id="btn-compliance">✓ Brand Check</button>`:''}
<button class="btn btn-ghost btn-sm" onclick="showUploadScriptModal()" title="Upload your own script">↑ Upload Script</button>
${hasScript?`<button class="btn btn-ghost btn-sm" onclick="toggleScriptView()" id="btn-sv">${viewMode==='formatted'?'Raw':'Formatted'}</button>`:''}
${hasScript?`<button class="btn btn-ghost btn-sm" onclick="showAnnotationsPanel()" title="View/add notes for script regeneration">📝 Notes${(p.scriptAnnotations||[]).length?' ('+p.scriptAnnotations.length+')':''}</button>`:''}
<span id="sc-wc" style="font-size:9px;color:var(--t4);margin-left:auto">${hasScript?(p.script.split(/\s+/).filter(Boolean).length+' words'):''}</span>
</div>
<div class="ai-load" id="sc-load"><div class="spinner"></div>${isAd?'Writing commercial script...':'Writing script...'}</div>
${hasScript?voiceReaderBar('script',p.script):''}
<!-- Brand Compliance Panel -->
${isAd?`<div id="compliance-panel" style="display:${hasCompliance?'block':'none'};background:#050d08;border:1px solid #4ac04a33;border-radius:8px;padding:12px 14px;margin-bottom:12px">
<div style="display:flex;align-items:center;gap:7px;margin-bottom:8px">
<span style="font-size:10px;font-weight:700;color:var(--green)">✓ Brand Compliance Check</span>
<button onclick="document.getElementById('compliance-panel').style.display='none'" style="background:none;border:none;color:var(--t4);cursor:pointer;font-size:13px;margin-left:auto">✕</button>
</div>
<div id="compliance-text" style="font-size:10px;color:var(--t2);line-height:1.9">${renderComplianceResult(p.complianceCheck?.result||'')}</div>
<div id="compliance-load" style="display:none;font-size:10px;color:var(--t4)">Checking script against brief…</div>
${p.complianceCheck?.result?.includes('NEEDS REVISION')?`<div style="margin-top:10px;padding-top:9px;border-top:1px solid #4ac04a22">
<button class="btn btn-gold btn-sm" onclick="fixScriptCompliance()">✦ Auto-fix Failing Points</button>
<span style="font-size:9px;color:var(--t4);margin-left:8px">Claude will rewrite the script to address the flagged issues</span>
</div>`:''}
</div>`:''}
<!-- Script Display -->
<div class="card"><div class="card-head"><span class="card-title">${isAd?'COMMERCIAL SCRIPT':'SCRIPT'}</span>
<div style="display:flex;gap:5px">
${hasScript?`<button class="btn btn-ghost btn-sm" onclick="toggleScriptBook()" id="btn-book">${S.scriptViewMode==='book'?'Editor':'📖 Book View'}</button>`:''}
${hasScript?`<button class="btn btn-ghost btn-sm" onclick="openScriptFullscreen()">⛶ Fullscreen</button>`:''}
<button class="btn btn-ghost btn-sm" onclick="copyText('script-ta')">Copy</button>
<button class="btn btn-ghost btn-sm" onclick="expScript()">↓ Download</button>
</div></div>
<div class="card-body" style="padding:${isAd&&viewMode==='formatted'&&hasScript?'0':'13px'}">
<!-- Book view -->
${S.scriptViewMode==='book'&&hasScript?renderScriptBook(p.script):''}
<!-- Formatted view for commercial ad -->
${S.scriptViewMode!=='book'?(isAd&&viewMode==='formatted'&&hasScript?`<div id="script-formatted">${renderScriptTable(p.script)}</div><textarea id="script-ta" style="display:none" oninput="document.getElementById('sc-wc').textContent=this.value.split(/\\s+/).filter(Boolean).length+' words'">${esc(p.script||'')}</textarea>`:
`<textarea id="script-ta" rows="28" style="font-family:${isAd?'monospace':'Arial,sans-serif'};font-size:${isAd?'10':'11'}px;line-height:1.7" oninput="document.getElementById('sc-wc').textContent=this.value.split(/\\s+/).filter(Boolean).length+' words'">${esc(p.script||'')}</textarea>`):'<textarea id="script-ta" style="display:none">${esc(p.script||"")}</textarea>'}
</div></div>
<div class="btn-row"><button class="btn btn-ghost btn-sm" onclick="goStep(2)">←</button><button class="btn btn-gold" onclick="genBible()">✦ Bible →</button></div>`;
}

// Render compliance result with colored rows
function renderComplianceResult(text){
  if(!text)return'';
  return text.split('\n').map(line=>{
    if(!line.trim())return'';
    const pass=line.includes('✅');const fail=line.includes('❌');const verdict=line.toUpperCase().includes('VERDICT');
    const col=pass?'var(--green)':fail?'var(--red)':verdict?'var(--gold)':'var(--t2)';
    const bg=fail?'#1a0000':verdict?'#0e0a18':'transparent';
    const hasFixBtn=fail?`<button onclick="fixComplianceLine('${esc(line.replace(/'/g,"\'"))}')" style="margin-left:8px;background:none;border:1px solid var(--red);color:var(--red);font-size:7px;padding:1px 5px;border-radius:3px;cursor:pointer;flex-shrink:0">Fix</button>`:'';
    return`<div style="padding:4px 6px;color:${col};font-weight:${verdict?'700':'400'};background:${bg};border-radius:3px;display:flex;align-items:flex-start;gap:4px">${esc(line)}${hasFixBtn}</div>`;
  }).join('');
}

// Render script as formatted table for commercial ads
function renderScriptTable(script){
  if(!script)return'';
  const lines=script.split('\n');
  let html='<div style="font-family:Arial,sans-serif;font-size:10px">';
  let inTable=false;
  for(const line of lines){
    const trimmed=line.trim();
    if(!trimmed){if(inTable){html+='</tbody></table></div>';inTable=false;}html+='<div style="height:6px"></div>';continue;}
    // Time-coded beat: [0:00-0:05] ...
    const timeMatch=trimmed.match(/^\*?\*?\[(\d+:\d+[–\-]\d+:\d+)\]\*?\*?/);
    if(timeMatch){
      if(!inTable){
        html+=`<div style="overflow-x:auto;margin-bottom:2px"><table style="width:100%;border-collapse:collapse;font-size:10px">
<thead><tr>
<th style="background:#1a0f1e;color:var(--gold);padding:5px 8px;border:1px solid #2A2A40;font-size:8px;text-transform:uppercase;white-space:nowrap;width:70px">Time</th>
<th style="background:#1a0f1e;color:var(--gold);padding:5px 8px;border:1px solid #2A2A40;font-size:8px;text-transform:uppercase">Visual</th>
<th style="background:#1a0f1e;color:var(--gold);padding:5px 8px;border:1px solid #2A2A40;font-size:8px;text-transform:uppercase">VO / Dialogue</th>
<th style="background:#1a0f1e;color:var(--gold);padding:5px 8px;border:1px solid #2A2A40;font-size:8px;text-transform:uppercase">SFX / Music</th>
<th style="background:#1a0f1e;color:var(--gold);padding:5px 8px;border:1px solid #2A2A40;font-size:8px;text-transform:uppercase">Super</th>
</tr></thead><tbody>`;
        inTable=true;
      }
      // Parse the beat into columns
      const rest=trimmed.replace(/^\*?\*?\[[\d:–\-]+\]\*?\*?\s*/,'');
      const parts=rest.split(/\s*\|\s*/);
      const tc=timeMatch[1];
      const visual=parts[0]||'';const vo=parts[1]||'—';const sfx=parts[2]||'—';const sup=parts[3]||'—';
      const isPack=trimmed.toUpperCase().includes('PACK SHOT')||trimmed.toUpperCase().includes('LOGO CARD');
      const bg=isPack?'#0e0a18':'var(--bg2)';
      html+=`<tr style="background:${bg}">
<td style="padding:6px 8px;border:1px solid #222;color:var(--gold);font-weight:700;white-space:nowrap;vertical-align:top">[${esc(tc)}]</td>
<td style="padding:6px 8px;border:1px solid #222;color:var(--t1);vertical-align:top;line-height:1.5">${esc(visual)}</td>
<td style="padding:6px 8px;border:1px solid #222;color:${vo==='—'||vo==='none'||vo.toLowerCase()==='none'?'var(--t4)':'#7ab4e0'};vertical-align:top;line-height:1.5;font-style:${vo==='—'?'normal':'italic'}">${esc(vo)}</td>
<td style="padding:6px 8px;border:1px solid #222;color:var(--t4);vertical-align:top;line-height:1.5">${esc(sfx)}</td>
<td style="padding:6px 8px;border:1px solid #222;color:${sup==='—'?'var(--t4)':'var(--green)'};vertical-align:top;line-height:1.5">${esc(sup)}</td>
</tr>`;
    } else {
      if(inTable){html+='</tbody></table></div>';inTable=false;}
      // Section headers / concept notes
      const isHeader=trimmed.startsWith('**')||trimmed.startsWith('#')||trimmed.toUpperCase()===trimmed&&trimmed.length<60;
      html+=`<div style="padding:${isHeader?'8px 6px':'4px 6px'};color:${isHeader?'var(--gold)':'var(--t2)'};font-weight:${isHeader?'700':'400'};font-size:${isHeader?'11':'10'}px;line-height:1.6">${esc(trimmed.replace(/\*\*/g,''))}</div>`;
    }
  }
  if(inTable)html+='</tbody></table></div>';
  html+='</div>';
  return html;
}

// ── VOICE READER ──
function voiceReaderBar(id,text){
  if(!text||!window.speechSynthesis)return'';
  const isPlaying=S._voicePlaying===id;
  const isMuted=S._voiceMuted;
  return`<div class="voice-bar">
<button class="voice-btn${isPlaying?' active':''}" onclick="toggleVoiceRead('${id}')">
${isPlaying?'⏸ Pause':'▶ Listen'}
</button>
<button class="voice-btn" onclick="stopVoiceRead()">⏹ Stop</button>
<button class="voice-btn${isMuted?' active':''}" onclick="toggleVoiceMute()" title="${isMuted?'Unmute':'Mute'}">
${isMuted?'🔇 Muted':'🔊 Sound'}
</button>
<div style="flex:1"></div>
<select onchange="S._voiceRate=parseFloat(this.value)" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t2);padding:3px 6px;border-radius:4px;font-size:9px">
<option value="0.8" ${S._voiceRate===0.8?'selected':''}>0.8x</option>
<option value="1" ${!S._voiceRate||S._voiceRate===1?'selected':''}>1x</option>
<option value="1.2" ${S._voiceRate===1.2?'selected':''}>1.2x</option>
<option value="1.5" ${S._voiceRate===1.5?'selected':''}>1.5x</option>
</select>
<span style="font-size:8px;color:var(--t4)">Voice Reader</span>
</div>`;
}
function toggleVoiceRead(id){
  const synth=window.speechSynthesis;if(!synth)return;
  if(synth.speaking&&S._voicePlaying===id){
    if(synth.paused){synth.resume();S._voicePlaying=id;}
    else{synth.pause();S._voicePlaying=null;}
    render();return;
  }
  synth.cancel();
  const p=DB.getProject(S.pid);if(!p)return;
  let text='';
  if(id==='synopsis'){const rev=p.synopsisRevisions?.slice(-1)[0];text=rev?.text||'';}
  else if(id==='script'){text=p.script||'';}
  if(!text){toast('Nothing to read','err');return;}
  // Clean script markers for natural reading
  text=text.replace(/\[[\d:–\-]+\]/g,'').replace(/\*\*/g,'').replace(/\|/g,',').substring(0,5000);
  const utter=new SpeechSynthesisUtterance(text);
  utter.rate=S._voiceRate||1;
  utter.volume=S._voiceMuted?0:1;
  utter.onend=()=>{S._voicePlaying=null;render();};
  utter.onerror=()=>{S._voicePlaying=null;render();};
  synth.speak(utter);
  S._voicePlaying=id;render();
}
function stopVoiceRead(){window.speechSynthesis?.cancel();S._voicePlaying=null;render();}
// ── SCRIPT ANNOTATIONS ──
function showAnnotationsPanel(){
  const p=DB.getProject(S.pid);if(!p)return;
  const annotations=p.scriptAnnotations||[];
  openModal(`<div class="modal-title">Script Notes & Annotations</div>
<div style="font-size:10px;color:var(--t3);margin-bottom:12px;line-height:1.5">Add notes to specific parts of the script. These notes will be automatically included when regenerating the script (v2). Select text in the script, then add your note below.</div>
<!-- Add new annotation -->
<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:8px;padding:12px;margin-bottom:14px">
<div style="font-size:9px;color:var(--gold);font-weight:700;text-transform:uppercase;margin-bottom:8px">Add New Note</div>
<div class="fg"><label>Script text this note refers to (copy-paste or describe the section)</label>
<textarea id="ann-text" rows="2" placeholder="e.g. The opening scene where the hero enters..." style="font-size:10px"></textarea></div>
<div class="fg"><label>Your note / feedback</label>
<textarea id="ann-note" rows="3" placeholder="e.g. Make this more dramatic, add a pause before the reveal..." style="font-size:10px"></textarea></div>
<button class="btn btn-gold btn-sm" onclick="addAnnotation()">+ Add Note</button>
</div>
<!-- Existing annotations -->
${annotations.length?`<div style="font-size:9px;color:var(--t3);font-weight:700;text-transform:uppercase;margin-bottom:8px">Existing Notes (${annotations.length})</div>
${annotations.map((a,i)=>`<div style="background:var(--bg2);border:1px solid var(--b1);border-left:3px solid var(--gold);border-radius:6px;padding:10px 12px;margin-bottom:6px">
<div style="font-size:9px;color:var(--t4);margin-bottom:4px;display:flex;justify-content:space-between;align-items:center">
<span>"${esc(a.text.substring(0,60))}${a.text.length>60?'…':''}"</span>
<button onclick="removeAnnotation(${i})" style="background:none;border:none;color:var(--red);cursor:pointer;font-size:10px">✕</button>
</div>
<div style="font-size:10px;color:var(--t2);line-height:1.5">${esc(a.note)}</div>
</div>`).join('')}`:'<div style="font-size:10px;color:var(--t4);text-align:center;padding:12px">No annotations yet. Add notes above to guide script regeneration.</div>'}
<div class="btn-row" style="margin-top:12px">
${annotations.length?`<button class="btn btn-outline btn-sm" onclick="clearAnnotations()">Clear All Notes</button>`:''}
<button class="btn btn-ghost" onclick="closeModal()">Close</button>
</div>`);
}
function addAnnotation(){
  const text=document.getElementById('ann-text')?.value.trim();
  const note=document.getElementById('ann-note')?.value.trim();
  if(!text||!note){toast('Both fields required','err');return;}
  const p=DB.getProject(S.pid);if(!p)return;
  if(!p.scriptAnnotations)p.scriptAnnotations=[];
  p.scriptAnnotations.push({text,note,ts:new Date().toISOString()});
  DB.saveProject(p);closeModal();showAnnotationsPanel();toast('Note added!','ok');
}
function removeAnnotation(i){
  const p=DB.getProject(S.pid);if(!p)return;
  (p.scriptAnnotations||[]).splice(i,1);
  DB.saveProject(p);closeModal();showAnnotationsPanel();
}
function clearAnnotations(){
  if(!confirm('Clear all script notes?'))return;
  const p=DB.getProject(S.pid);if(!p)return;
  p.scriptAnnotations=[];DB.saveProject(p);closeModal();render();toast('Notes cleared','ok');
}

function toggleVoiceMute(){
  S._voiceMuted=!S._voiceMuted;
  if(window.speechSynthesis?.speaking){
    // Can't change volume mid-utterance, so restart
    const id=S._voicePlaying;stopVoiceRead();
    if(id)setTimeout(()=>toggleVoiceRead(id),100);
  }
  render();
}

function toggleScriptBook(){S.scriptViewMode=S.scriptViewMode==='book'?'editor':'book';render();}
function renderScriptBook(script){
  if(!script)return'';
  const CHARS_PER_PAGE=1200;
  const paragraphs=script.split('\n\n');
  const pages=[];let current='';
  for(const para of paragraphs){
    if((current+'\n\n'+para).length>CHARS_PER_PAGE&&current){pages.push(current.trim());current=para;}
    else{current+=(current?'\n\n':'')+para;}
  }
  if(current.trim())pages.push(current.trim());
  if(!pages.length)pages.push(script);
  S._bookPages=pages.length;S._bookPage=S._bookPage||0;
  if(S._bookPage>=pages.length)S._bookPage=pages.length-1;
  return`<div class="book-view"><div class="book-pages" style="min-height:480px">
${pages.map((pg,i)=>`<div class="book-page${i<S._bookPage?' flipped':''}${i>S._bookPage?' hidden':''}" id="bkp-${i}">
<div style="white-space:pre-wrap;word-break:break-word">${esc(pg)}</div>
<div class="page-num">${i+1} / ${pages.length}</div>
</div>`).join('')}
</div></div>
<div class="book-nav">
<button onclick="flipBookPage(-1)" ${S._bookPage<=0?'disabled':''}>← Previous</button>
<span>Page ${(S._bookPage||0)+1} of ${pages.length}</span>
<button onclick="flipBookPage(1)" ${S._bookPage>=pages.length-1?'disabled':''}>Next →</button>
</div>`;
}
function flipBookPage(dir){
  const newPage=(S._bookPage||0)+dir;
  if(newPage<0||newPage>=(S._bookPages||1))return;
  S._bookPage=newPage;render();
}
function openScriptFullscreen(){
  const p=DB.getProject(S.pid);if(!p?.script)return;
  const el=document.createElement('div');el.className='script-fullscreen';el.id='script-fs-overlay';
  el.innerHTML=`<button class="close-fs" onclick="document.getElementById('script-fs-overlay').remove()">✕ Close</button>
${renderScriptBook(p.script)}`;
  document.body.appendChild(el);
}
function toggleScriptView(){
  const p=DB.getProject(S.pid);if(!p)return;
  p._scriptView=p._scriptView==='formatted'?'raw':'formatted';
  DB.saveProject(p);render();
}

function showUploadScriptModal(){
  openModal(`<div class="modal-title">Upload Script</div>
<div style="font-size:10px;color:var(--t3);margin-bottom:12px">Upload a .txt or .docx script file, or paste your script directly below.</div>
<div class="upload-zone" onclick="document.getElementById('script-up-inp').click()" style="margin-bottom:10px">
<div style="font-size:18px;color:var(--b3);margin-bottom:5px">⬆</div>
<div style="font-size:11px;font-weight:700">Click to upload script file</div>
<div style="font-size:9px;color:var(--t4);margin-top:3px">.txt · .md · .doc · .docx · .pdf</div>
<input type="file" id="script-up-inp" accept=".txt,.md,.text,.doc,.docx,.pdf" style="display:none" onchange="handleScriptUpload(this)"/>
</div>
<div style="font-size:9px;color:var(--t4);margin-bottom:5px">OR paste script manually:</div>
<textarea id="script-paste-ta" rows="10" placeholder="Paste your script here..." style="width:100%;background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:8px;border-radius:5px;font-size:10px;font-family:monospace;line-height:1.6;resize:vertical"></textarea>
<div class="btn-row"><button class="btn btn-gold" onclick="saveUploadedScript()">Save Script</button><button class="btn btn-ghost" onclick="closeModal()">Cancel</button></div>`);
}

function handleScriptUpload(inp){
  const file=inp.files?.[0];if(!file)return;
  const ext=file.name.split('.').pop().toLowerCase();
  const ta=document.getElementById('script-paste-ta');

  if(ext==='pdf'){
    // PDF: read as base64 and extract text via Claude proxy
    const reader=new FileReader();
    reader.onload=async e=>{
      const b64=e.target.result.split(',')[1];
      if(!kC()){toast('Enter Claude key to extract PDF text','err');return;}
      toast('Extracting text from PDF...','info');
      try{
        const r=await callClaude(
          'You are a script formatter. Extract and clean the full script text from this PDF document. Preserve all formatting, scene headings, dialogue, and stage directions exactly as written. Return ONLY the script text.',
          'Extract the complete script from this PDF.',
          4000, b64, 'application/pdf'
        );
        if(ta)ta.value=r;
        toast('PDF extracted — review and click Save Script','ok');
      }catch(e){
        // Fallback: store as note
        if(ta)ta.value='[PDF: '+file.name+'] Could not extract — paste manually.';
        toast('Could not auto-extract PDF text. Please paste manually.','err');
      }
    };
    reader.readAsDataURL(file);

  }else if(ext==='docx'||ext==='doc'){
    // DOCX: use mammoth.js via CDN to extract text
    const reader=new FileReader();
    reader.onload=async e=>{
      toast('Extracting text from Word doc...','info');
      try{
        // Dynamically load mammoth if not already loaded
        if(!window.mammoth){
          await new Promise((res,rej)=>{
            const s=document.createElement('script');
            s.src='https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js';
            s.onload=res;s.onerror=rej;
            document.head.appendChild(s);
          });
        }
        const arrayBuffer=e.target.result;
        const result=await window.mammoth.extractRawText({arrayBuffer});
        if(ta)ta.value=result.value;
        toast('Word doc extracted — review and click Save Script','ok');
      }catch(err){
        if(ta)ta.value='[DOCX: '+file.name+'] Could not extract — paste manually.';
        toast('Could not auto-extract .docx text. Please paste manually.','err');
      }
    };
    reader.readAsArrayBuffer(file);

  }else{
    // Plain text / markdown
    const reader=new FileReader();
    reader.onload=e=>{
      if(ta)ta.value=e.target.result;
      toast('File loaded — click Save Script','ok');
    };
    reader.readAsText(file);
  }
}

function saveUploadedScript(){
  const text=document.getElementById('script-paste-ta')?.value.trim();
  if(!text){toast('No script content','err');return;}
  const p=DB.getProject(S.pid);if(!p)return;
  p.script=text;p._scriptView='formatted';
  DB.saveProject(p);closeModal();render();toast('Script saved!','ok');
}

async function fixScriptCompliance(){
  if(!kC()){toast('Enter Claude key','err');return;}
  const p=DB.getProject(S.pid);if(!p||!p.script)return;
  const btn=document.querySelector('[onclick="fixScriptCompliance()"]');
  if(btn){btn.disabled=true;btn.textContent='Fixing...';}
  const brief=Object.entries({...p.clientBrief,...p.brief}).filter(([,v])=>v).map(([k,v])=>k+': '+v).join('\n');
  const issues=p.complianceCheck?.result||'';
  try{
    const r=await callClaude(
      'You are a senior commercial scriptwriter. Rewrite scripts to fix specific compliance issues while keeping the creative vision intact.',
      'Rewrite this commercial script to fix the failing compliance points.\n\nBRIEF:\n'+brief+'\n\nCURRENT SCRIPT:\n'+p.script+'\n\nCOMPLIANCE ISSUES TO FIX (❌ items only):\n'+issues+'\n\nRewrite the full script fixing only the failing points. Keep passing points unchanged. Maintain the same format: time-coded beats with VISUAL | VO | SFX | SUPER columns.\n\nReturn ONLY the revised script.',
      4000
    );
    const ta=document.getElementById('script-ta');if(ta)ta.value=r;
    p.script=r;p.complianceCheck=null;
    DB.saveProject(p);render();toast('Script revised! Run Brand Check again to verify.','ok');
  }catch(e){toast(e.message,'err');}
  if(btn){btn.disabled=false;btn.textContent='✦ Auto-fix Failing Points';}
}

async function fixComplianceLine(line){
  if(!kC()){toast('Enter Claude key','err');return;}
  const p=DB.getProject(S.pid);if(!p||!p.script)return;
  const brief=Object.entries({...p.clientBrief,...p.brief}).filter(([,v])=>v).map(([k,v])=>k+': '+v).join('\n');
  toast('Fixing: '+line.substring(0,40)+'...','info');
  try{
    const r=await callClaude(
      'You are a senior commercial scriptwriter. Make targeted script fixes.',
      'Fix this specific issue in the script.\n\nISSUE: '+line+'\n\nBRIEF:\n'+brief+'\n\nSCRIPT:\n'+p.script+'\n\nMake the minimal change needed to fix this specific issue. Keep everything else identical. Return ONLY the full revised script.',
      4000
    );
    const ta=document.getElementById('script-ta');if(ta)ta.value=r;
    p.script=r;p.complianceCheck=null;
    DB.saveProject(p);render();toast('Fixed! Run Brand Check again to verify.','ok');
  }catch(e){toast(e.message,'err');}
}


async function checkBrandCompliance(){
  const p=DB.getProject(S.pid);if(!p||!p.script){toast('Generate a script first','err');return;}
  if(!kC()){toast('Enter Claude API key in Settings','err');return;}
  const panel=document.getElementById('compliance-panel');
  const textEl=document.getElementById('compliance-text');
  const loadEl=document.getElementById('compliance-load');
  if(panel)panel.style.display='block';
  if(textEl)textEl.innerHTML='';
  if(loadEl)loadEl.style.display='block';
  const btn=document.getElementById('btn-compliance');
  if(btn){btn.disabled=true;btn.textContent='Checking...';}
  const brief=Object.entries({...p.clientBrief,...p.brief}).filter(([,v])=>v).map(([k,v])=>k+': '+v).join('\n');
  try{
    const r=await callClaude(
      'You are a brand strategist reviewing a commercial script before production. Be specific and constructive. Format your response with emoji checkmarks.',
      'Review this script against the brief. Check each point and give a short verdict.\n\nBRIEF:\n'+brief+'\n\nSCRIPT:\n'+p.script.substring(0,3000)+'\n\nCheck these 5 things:\n1. Core message - Does the script communicate the brief tagline/message?\n2. CTA - Is the call to action present and clear?\n3. Tone - Does the tone match what was requested?\n4. Duration fit - Does the content fit the specified duration?\n5. Avoid list - Does the script avoid what the client flagged?\n\nFor each: start with tick or cross emoji, then the point name, then a one-line verdict.\nEnd with: VERDICT: APPROVED or NEEDS REVISION + one summary sentence.',
      800
    );
    if(loadEl)loadEl.style.display='none';
    if(textEl){
      textEl.innerHTML=r.split('\n').map(line=>{
        const ok=line.includes('\u2705');const fail=line.includes('\u274c');const verdict=line.toUpperCase().includes('VERDICT');
        return'<div style="padding:3px 0;color:'+(ok?'var(--green)':fail?'var(--red)':verdict?'var(--gold)':'var(--t2)')+';font-weight:'+(verdict?'700':'400')+'">'+esc(line)+'</div>';
      }).join('');
    }
    const p2=DB.getProject(S.pid);
    p2.complianceCheck={result:r,ts:new Date().toISOString()};
    DB.saveProject(p2);
    toast('Brand check complete','ok');
  }catch(e){
    if(loadEl)loadEl.style.display='none';
    if(textEl)textEl.textContent='Error: '+e.message;
  }
  if(btn){btn.disabled=false;btn.textContent='\u2713 Brand Check';}
}
async function genScript(){saveInputs();const p=DB.getProject(S.pid);if(!p)return;if(!kC()){toast('Enter API key','err');return}document.getElementById('sc-load')?.classList.add('show');const mt=MT[p.type];const brief=Object.entries({...p.clientBrief,...p.brief}).filter(([,v])=>v).map(([k,v])=>`${k}: ${v}`).join('\n');const syn=p.synopsisRevisions?.slice(-1)[0]?.text||'';
  const writer=getActiveWriter(p);
  const ldSkills=DB.getLDEntries().filter(e=>e.type==='skill'&&e.active&&(e.tags||[]).some(t=>t.includes(writer.id)||t.includes('writer')));
  const skillCtx=ldSkills.length?'\n\nTRAINED SKILLS:\n'+ldSkills.map(s=>s.title+': '+(s.description||'')).join('\n'):'';
  // Include script annotations/notes from previous version
  const annotations=(p.scriptAnnotations||[]).map(a=>`[Note at "${a.text.substring(0,30)}..."]: ${a.note}`).join('\n');
  const annotCtx=annotations?'\n\nUSER NOTES FROM PREVIOUS VERSION (address these):\n'+annotations:'';
try{
    let sysP,usrP;
    if(p.type==='commercial_ad'){
      sysP=writer.sys||'You are a senior TVC and digital ad scriptwriter. Write time-coded commercial scripts in industry format. Every second counts. Be precise, cinematic, punchy.';
      usrP='Write a complete production-ready script for this commercial.\n\nPROJECT: '+p.name+'\nBRIEF:\n'+brief+(syn?'\nAPPROVED SYNOPSIS:\n'+syn:'')+annotCtx+'\n\nFORMAT: Use time codes [0:00-0:03]. Four columns per beat: VISUAL | VO/DIALOGUE | SFX/MUSIC | SUPER\nVISUAL = one-line shot description. VO = exact words or none. SFX = music/sound descriptor. SUPER = on-screen text or none.\nEnd with PACK SHOT / LOGO CARD beat. Total must match specified duration.\nStart with one-line concept note, then the full timed script.\n\nReturn ONLY the script text.';
    } else {
      sysP=(writer.sys||'You are a professional '+( mt?.label||'media')+' scriptwriter.')+' Write complete, production-ready scripts.'+skillCtx;
      usrP='Project: '+p.name+' ('+( mt?.label||'')+')\nBRIEF:\n'+brief+(syn?'\nSYNOPSIS:\n'+syn:'')+annotCtx+'\n\nWrite the complete script with all scenes, dialogue, VO, and visual cues. Include proper formatting.';
    }
    const r=await callClaude(sysP,usrP,4000);
    document.getElementById('script-ta').value=r;
    const p2=DB.getProject(S.pid);p2.script=r;DB.saveProject(p2);
    toast('Script generated!','ok');
    if(p.type==='commercial_ad')setTimeout(()=>checkBrandCompliance(),600);
  }catch(e){toast(e.message,'err');}document.getElementById('sc-load')?.classList.remove('show');}

// ── STEP 4: BIBLE ──
function sBible(p){
  const bible=p.bible||{};
  const secIcons={cast:'🎭',characters:'👤',locations:'📍',product_hero:'📦',props:'🎬',brand_elements:'✦'};
  const sections=p.type==='commercial_ad'?['cast','locations','product_hero','props','brand_elements']:['characters','locations','props'];
  const hasBible=sections.some(sec=>Array.isArray(bible[sec])&&bible[sec].length);
  return`<div class="ptitle">Production Bible</div><div class="psub">Visual anchors for consistency — characters, locations, props.</div>
<div class="btn-row" style="margin-bottom:10px"><button class="btn btn-gold" onclick="genBible()" id="btn-gen-bi">✦ Generate</button><button class="btn btn-ghost btn-sm" onclick="goStep(3)">← Script</button></div>
<div class="ai-load" id="bi-load"><div class="spinner"></div>Building bible...</div>
${sections.map(sec=>{
  const items=Array.isArray(bible[sec])?bible[sec]:[];
  if(!items.length)return`<div class="section-lbl">${secIcons[sec]||'?'} ${sec.replace(/_/g,' ')}</div><div style="color:var(--t4);font-size:9px;padding:6px 0 12px">Not generated yet.</div>`;
  const carId='bc-'+sec;
  return`<div class="section-lbl" style="display:flex;align-items:center;gap:6px">${secIcons[sec]||'?'} ${sec.replace(/_/g,' ')} <span style="font-size:8px;color:var(--t4);font-weight:400">(${items.length})</span></div>
<div class="bible-carousel" id="${carId}">
<button class="carousel-nav prev" onclick="scrollCarousel('${carId}',-1)">‹</button>
<button class="carousel-nav next" onclick="scrollCarousel('${carId}',1)">›</button>
<div class="bible-track" id="${carId}-track">
${items.map((item,i)=>{
  const keys=Object.keys(item).filter(k=>k!=='name');
  return`<div class="bible-card">
<div class="bible-card-head">
<div class="card-icon">${secIcons[sec]||'?'}</div>
<h4>${esc(item.name||item.feature||item.location||item.element||sec+'_'+i)}</h4>
</div>
<div class="bible-card-body">
${keys.map(k=>`<div class="field">
<div class="field-label">${k.replace(/_/g,' ')}</div>
<textarea data-bible="${sec}.${i}.${k}" rows="${k==='ai_prompt_anchor'||k==='description'?3:2}">${esc(typeof item[k]==='string'?item[k]:JSON.stringify(item[k]))}</textarea>
</div>`).join('')}
</div>
</div>`;}).join('')}
</div>
<div class="carousel-dots" id="${carId}-dots">
${items.map((_,i)=>`<div class="dot${i===0?' active':''}" onclick="scrollCarouselTo('${carId}',${i})"></div>`).join('')}
</div>
</div>`;}).join('')}
${!hasBible?`<div style="background:var(--bg2);border:1px dashed var(--b2);border-radius:8px;padding:30px;text-align:center;color:var(--t4)">
<div style="font-size:18px;margin-bottom:8px">📖</div>
<div style="font-size:11px">No production bible yet. Generate from your script above.</div>
</div>`:''}
<div class="btn-row"><button class="btn btn-ghost btn-sm" onclick="goStep(3)">←</button><button class="btn btn-gold" onclick="genShots()">✦ Generate Shots →</button></div>`;
}
function scrollCarousel(carId,dir){
  const track=document.getElementById(carId+'-track');if(!track)return;
  const cardW=294;// 280 + 14 gap
  const current=track.scrollLeft||0;
  const newPos=current+(dir*cardW);
  track.style.overflow='auto';
  track.scrollTo({left:Math.max(0,newPos),behavior:'smooth'});
  // Update dots
  setTimeout(()=>{
    const idx=Math.round(track.scrollLeft/cardW);
    const dots=document.getElementById(carId+'-dots');
    if(dots)dots.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===idx));
  },450);
}
function scrollCarouselTo(carId,idx){
  const track=document.getElementById(carId+'-track');if(!track)return;
  track.style.overflow='auto';
  track.scrollTo({left:idx*294,behavior:'smooth'});
  const dots=document.getElementById(carId+'-dots');
  if(dots)dots.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===idx));
}
async function genBible(){saveInputs();const p=DB.getProject(S.pid);if(!p)return;if(!kC()){toast('Enter API key','err');return}goStep(4);document.getElementById('bi-load')?.classList.add('show');const mt=MT[p.type];const brief=Object.entries({...p.clientBrief,...p.brief}).filter(([,v])=>v).map(([k,v])=>`${k}: ${v}`).join('\n');
try{
    let bP;
    if(p.type==='commercial_ad'){
      bP='Commercial Ad Bible for: '+p.name+'\nBRIEF:\n'+brief+'\nSCRIPT:\n'+(p.script||'').substring(0,2000)+'\n\nCreate a detailed production bible. Return ONLY valid JSON with these exact keys:\n{"cast":[{"name":"Role name","description":"Age range, appearance, energy","wardrobe":"Exact outfit - color, fabric, style","ai_prompt_anchor":"60-word photorealistic prompt"}],"locations":[{"name":"Location name","description":"Detailed visual description","time_of_day":"Exact lighting","mood":"Atmosphere","ai_prompt_anchor":"60-word environment prompt"}],"product_hero":[{"name":"Product element","description":"How it looks on screen","presentation":"Angle, lighting style","ai_prompt_anchor":"60-word product shot prompt"}],"props":[{"name":"Prop","description":"Appearance","ai_prompt_anchor":"Brief prompt"}],"brand_elements":[{"element":"Logo/tagline/color","usage":"When and how it appears","specification":"Exact placement and treatment"}]}';
    } else {
      bP='Project: '+p.name+' ('+( mt?.label||'')+')\nBRIEF:\n'+brief+'\nSCRIPT:\n'+(p.script||'').substring(0,2000)+'\n\nReturn JSON: {"characters":[{"name":"","description":"","wardrobe":"","ai_prompt_anchor":""}],"locations":[{"name":"","description":"","time_of_day":"","ai_prompt_anchor":""}],"props":[{"name":"","description":"","ai_prompt_anchor":""}]}';
    }
    const r=await callClaude('Create production bibles as JSON. RESPOND ONLY AS VALID JSON.',bP,2500);
    const parsed=JSON.parse(r.replace(/```json|```/g,'').trim());
    const p2=DB.getProject(S.pid);p2.bible=parsed;DB.saveProject(p2);render();toast('Bible generated!','ok');
  }catch(e){toast(e.message,'err');}document.getElementById('bi-load')?.classList.remove('show');}

// ── STEP 5: SHOTS ──
function sShots(p,mt){
  const shots=p.shots||[];
  return`<div class="ptitle">Shot List</div><div class="psub">${shots.length} shots</div>
<div class="btn-row" style="margin-bottom:10px"><button class="btn btn-gold" onclick="genShots()" id="btn-gen-sh">✦ Generate</button><button class="btn btn-ghost btn-sm" onclick="addShot()">+ Add</button><button class="btn btn-ghost btn-sm" onclick="goStep(4)">←</button></div>
<div class="ai-load" id="sh-load"><div class="spinner"></div>Generating shots...</div>
${shots.map((s,i)=>`<div class="shot-row"><div class="shot-hd"><span class="sn2">S${s.num||String(i+1).padStart(2,'0')}</span><span style="font-size:9px;color:rgba(255,107,53,0.45);font-weight:700;text-transform:uppercase;flex:1">${esc(s.scene||'')}</span><span style="font-size:9px;color:var(--t4)">${esc(s.type||'')}</span><button onclick="rmShot(${i})" style="background:none;border:none;color:var(--b3);cursor:pointer;font-size:12px">✕</button></div>
<div class="shot-bd"><div class="sf"><label>Description</label><textarea data-shot="${i}.description" rows="3">${esc(s.description||'')}</textarea></div><div class="sf"><label>AI Image Prompt</label><textarea data-shot="${i}.prompt" rows="3">${esc(s.prompt||'')}</textarea></div></div></div>`).join('')}
<div class="btn-row" style="margin-top:12px"><button class="btn btn-ghost btn-sm" onclick="goStep(4)">←</button><button class="btn btn-gold" onclick="goStage(${p.modules?.visuals?2:3})">→ ${p.modules?.visuals?'Visuals':'Production'}</button></div>`;
}
async function genShots(){saveInputs();const p=DB.getProject(S.pid);if(!p)return;if(!kC()){toast('Enter API key','err');return}goStep(5);document.getElementById('sh-load')?.classList.add('show');const mt=MT[p.type];const brief=Object.entries({...p.clientBrief,...p.brief}).filter(([,v])=>v).map(([k,v])=>`${k}: ${v}`).join('\n');const bCtx=p.bible?(Object.values(p.bible).flat()||[]).map(c=>`${c.name||c.location||''}: ${(c.description||c.ai_prompt_anchor||'').substring(0,80)}`).filter(Boolean).join('\n').substring(0,500):'';
try{
    let shP;
    if(p.type==='commercial_ad'){
      shP='Commercial Ad shot list for: '+p.name+'\nBRIEF: '+brief+'\nKEY ELEMENTS: '+bCtx+'\nSCRIPT: '+(p.script||'').substring(0,2000)+'\n\nGenerate a complete commercial shot list including: product hero shots, talent/lifestyle shots, context/environment shots, insert shots (hands, details), reaction shots, and the mandatory logo/pack shot card.\n\nReturn JSON array:\n[{"num":"01","scene":"EXT. LOCATION - GOLDEN HOUR","type":"Hero shot","timing":"0:00-0:05","description":"One vivid sentence describing exactly what happens","prompt":"Hyper-realistic commercial photography. Camera: 85mm f/1.8 | Lighting: golden hour backlight | Shot: medium close-up | Subject: detailed description | Mood: cinematic warmth | Style: premium ad photography"}]';
    } else {
      shP=(mt?.label||'')+' project: '+p.name+'\nBRIEF: '+brief+'\nKEY ELEMENTS: '+bCtx+'\nSCRIPT: '+(p.script||'').substring(0,2000)+'\n\nReturn JSON array: [{"num":"01","scene":"INT. LOCATION - DAY","type":"Wide shot","description":"1 sentence","prompt":"Hyper-realistic cinematic. [60-word AI image prompt with lighting, camera angle, mood, actors appearance]."}]';
    }
    const r=await callClaude('Generate shot lists as JSON. RESPOND ONLY VALID JSON.',shP,4000);
    const shots=JSON.parse(r.replace(/```json|```/g,'').trim());const p2=DB.getProject(S.pid);p2.shots=shots;DB.saveProject(p2);render();toast(shots.length+' shots generated!','ok');
  }catch(e){toast(e.message,'err');}document.getElementById('sh-load')?.classList.remove('show');}
function addShot(){saveInputs();const p=DB.getProject(S.pid);if(!p)return;if(!p.shots)p.shots=[];p.shots.push({num:String(p.shots.length+1).padStart(2,'0'),scene:'NEW',type:'',description:'',prompt:''});DB.saveProject(p);render();}
function rmShot(i){saveInputs();const p=DB.getProject(S.pid);if(!p)return;p.shots.splice(i,1);DB.saveProject(p);render();}

// ── STAGE 2: REFS ──
function sRefs(p){
  const refs=p.refs||[];const cl=p.clientId?DB.getUser(p.clientId):null;const clA=cl?.brandAssets?.filter(a=>a.preview)||[];
  const REF_TYPES=['character','product','location','environment','prop','brand'];
  const REF_ICONS={character:'👤',product:'📦',location:'📍',environment:'🌄',prop:'🎭',brand:'✦',client_asset:'🎨'};
  const grouped={};REF_TYPES.forEach(t=>grouped[t]=[]);
  refs.forEach((r,i)=>{const t=r.type||'prop';if(!grouped[t])grouped[t]=[];grouped[t].push({...r,_i:i});});
  const anyDone=refs.some(r=>r.img||r.status==='done');
  if(!S.imgModel)S.imgModel='fal-ai/flux-pro/v1.1-ultra';
  if(!S.imgAspect)S.imgAspect='1:1';
  if(!S.imgQuality)S.imgQuality='hd';
  if(!S.imgTone)S.imgTone='photorealistic';
  return`<div class="ptitle">References</div>
<div class="psub">Build your visual consistency library — upload existing assets or AI-generate new ones.</div>
<!-- Image Generation Settings -->
<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:8px;padding:10px 14px;margin-bottom:14px">
<div style="font-size:9px;color:var(--t3);font-weight:700;text-transform:uppercase;margin-bottom:8px">Image Generation Settings</div>
<div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
<div style="display:flex;flex-direction:column;gap:3px">
<span style="font-size:8px;color:var(--t4);text-transform:uppercase">Model</span>
<select id="img-model-sel" onchange="S.imgModel=this.value" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:4px 7px;border-radius:4px;font-size:9px">
${IMG_MODELS.filter(m=>m.id!=='fal-ai/flux-pro/kontext').map(m=>`<option value="${m.id}" ${S.imgModel===m.id?'selected':''}>${m.n} — ${m.s} (${m.c})</option>`).join('')}
</select>
</div>
<div style="display:flex;flex-direction:column;gap:3px">
<span style="font-size:8px;color:var(--t4);text-transform:uppercase">Aspect Ratio</span>
<select id="img-aspect-sel" onchange="S.imgAspect=this.value" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:4px 7px;border-radius:4px;font-size:9px">
${['1:1','16:9','9:16','4:3','3:4','21:9'].map(r=>`<option value="${r}" ${S.imgAspect===r?'selected':''}>${r}</option>`).join('')}
</select>
</div>
<div style="display:flex;flex-direction:column;gap:3px">
<span style="font-size:8px;color:var(--t4);text-transform:uppercase">Quality</span>
<select id="img-quality-sel" onchange="S.imgQuality=this.value" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:4px 7px;border-radius:4px;font-size:9px">
${IMG_QUALITY.map(q=>`<option value="${q}" ${S.imgQuality===q?'selected':''}>${q}</option>`).join('')}
</select>
</div>
<div style="display:flex;flex-direction:column;gap:3px">
<span style="font-size:8px;color:var(--t4);text-transform:uppercase">Tone / Style</span>
<select id="img-tone-sel" onchange="S.imgTone=this.value" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:4px 7px;border-radius:4px;font-size:9px">
${IMG_TONES.map(t=>`<option value="${t}" ${S.imgTone===t?'selected':''}>${t}</option>`).join('')}
</select>
</div>
<div style="display:flex;flex-direction:column;gap:3px">
<span style="font-size:8px;color:var(--t4);text-transform:uppercase">Mode</span>
<select id="img-mode-sel" onchange="S.imgMode=this.value" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:4px 7px;border-radius:4px;font-size:9px">
<option value="t2i" ${S.imgMode!=='i2i'?'selected':''}>Text → Image</option>
<option value="i2i" ${S.imgMode==='i2i'?'selected':''}>Image → Image</option>
</select>
</div>
</div>
<div style="font-size:8px;color:var(--t4);margin-top:6px">Using: <strong style="color:var(--gold)">${IMG_MODELS.find(m=>m.id===S.imgModel)?.n||'FLUX 1.1 Ultra'}</strong> · ${S.imgAspect} · ${S.imgQuality} quality · ${S.imgTone} tone</div>
</div>
${trendingStylesPanel(p)}
<div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:12px;align-items:center">
<button class="btn btn-gold" onclick="genAllRefs()" id="btn-gen-refs">✦ Generate All Pending</button>
<button class="btn btn-red btn-sm" onclick="S.stopSb=true;toast('Stopping...','info')">■ Stop</button>
<button class="btn btn-outline btn-sm" onclick="showAddRefModal()">+ Add Reference</button>
<button class="btn btn-ghost btn-sm" onclick="rebuildRefs(DB.getProject(S.pid));render()">Rebuild from Bible</button>
${clA.length?`<button class="btn btn-blue btn-sm" onclick="importClientAssets()">↓ Import Brand Assets (${clA.length})</button>`:''}
<button class="btn btn-ghost btn-sm" onclick="goStep(1)">← Shots</button>
<span style="font-size:9px;color:var(--t4);margin-left:auto">${refs.filter(r=>r.img).length}/${refs.length} generated</span>
</div>
${REF_TYPES.filter(t=>(grouped[t]||[]).length>0).map(t=>`
<div style="margin-bottom:16px">
<div style="display:flex;align-items:center;gap:7px;margin-bottom:8px">
<span style="font-size:13px">${REF_ICONS[t]||'?'}</span>
<span style="font-size:10px;font-weight:700;color:var(--t2);text-transform:capitalize">${t}s</span>
<span style="font-size:8px;color:var(--t4)">${grouped[t].length}</span>
</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:8px">
${grouped[t].map(ref=>`<div style="background:var(--bg2);border:1px solid ${ref.img?'var(--b2)':'var(--b1)'};border-radius:8px;overflow:hidden" id="rc-${ref._i}">
<div style="padding:5px 8px;background:var(--bg3);display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--b1)">
<span style="font-size:9px;font-weight:700;color:var(--gold);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1">${esc(ref.label||'')}</span>
<div style="display:flex;gap:3px;align-items:center">
${ref.uploaded?'<span style="font-size:7px;color:var(--blue);background:#0a0a18;padding:1px 4px;border-radius:3px">upload</span>':''}
<span style="font-size:7px;padding:1px 5px;border-radius:4px;background:${ref.status==='done'?'#041004':ref.status==='gen'?'#1a0f00':'var(--bg4)'};color:${ref.status==='done'?'var(--green)':ref.status==='gen'?'var(--gold)':'var(--t4)'}" id="rst-${ref._i}">${ref.status||'idle'}</span>
</div>
</div>
<div style="aspect-ratio:1;background:var(--bg4);overflow:hidden;position:relative" id="ri-${ref._i}">
${ref.img?`<img src="${ref.img}" onclick="openImgModal('${esc(ref.label||'')}','${ref.img}','${esc(ref.prompt||ref._lastPrompt||'')}')" style="width:100%;height:100%;object-fit:cover;cursor:zoom-in"/>`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--b3);font-size:24px">◇</div>'}
</div>
<div style="padding:5px 7px;display:flex;gap:3px">
${ref.uploaded?'':`<button onclick="doRef(DB.getProject(S.pid),${ref._i})" style="flex:1;background:var(--bg4);border:1px solid var(--b2);color:var(--t3);font-size:8px;padding:3px;border-radius:3px;cursor:pointer">⟳ Gen</button>`}
<button onclick="showRefUploadModal(${ref._i})" style="flex:1;background:var(--bg4);border:1px solid var(--b2);color:var(--blue);font-size:8px;padding:3px;border-radius:3px;cursor:pointer">↑ Upload</button>
${ref.img?`<button onclick="dlImg('${ref.img}','${esc(ref.label||'ref')}_hires.jpg')" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t4);font-size:8px;padding:3px 5px;border-radius:3px;cursor:pointer">↓</button>`:''}
<button onclick="rmRef(${ref._i})" style="background:none;border:none;color:var(--b3);font-size:10px;cursor:pointer;padding:2px 4px">✕</button>
</div>
</div>`).join('')}
</div>
</div>`).join('')}
${!refs.length?`<div style="background:var(--bg2);border:1px dashed var(--b2);border-radius:8px;padding:30px;text-align:center;color:var(--t4)">
<div style="font-size:18px;margin-bottom:8px">◇</div>
<div style="font-size:11px">No references yet. Rebuild from your Production Bible, import client brand assets, or add manually.</div>
</div>`:''}
<div class="btn-row" style="margin-top:14px">
<button class="btn btn-gold" onclick="goStep(2)">→ Multi-Angle</button>
<span style="font-size:9px;color:var(--t4);margin-left:4px">${anyDone?'':'Generate at least some references first for best results'}</span>
</div>`;
}

function rebuildRefs(p){const refs=[];const b=p.bible||{};(b.characters||[]).forEach(c=>refs.push({label:c.name||'Character',type:'character',prompt:`Character reference: ${c.description||c.ai_prompt_anchor||c.name||''}. Front portrait, neutral background.`,img:null,status:'idle'}));(b.locations||[]).slice(0,2).forEach(l=>refs.push({label:l.name||l.location||'Location',type:'location',prompt:`Location reference: ${l.description||l.ai_prompt_anchor||''}. Wide establishing shot.`,img:null,status:'idle'}));(b.props||[]).slice(0,3).forEach(pr=>refs.push({label:pr.name||pr.feature||'Prop',type:'prop',prompt:`Prop reference: ${pr.description||pr.ai_prompt_anchor||''}. Clear view, neutral background.`,img:null,status:'idle'}));p.refs=refs;DB.saveProject(p);}
function rmRef(i){saveInputs();const p=DB.getProject(S.pid);if(!p)return;p.refs.splice(i,1);DB.saveProject(p);render();}
function showRefUploadModal(i){
  openModal(`<div class="modal-title">Upload Reference Image</div>
<div style="font-size:10px;color:var(--t3);margin-bottom:12px">Upload your own image for this reference. It will be used as-is, skipping AI generation.</div>
<div class="upload-zone" style="margin-bottom:12px" onclick="document.getElementById('ref-up-inp').click()">
<div style="font-size:20px;color:var(--b3);margin-bottom:6px">⬆</div>
<div style="font-size:11px;font-weight:700">Click to choose image</div>
<div style="font-size:9px;color:var(--t4);margin-top:3px">JPG, PNG, WEBP — will be resized to fit</div>
<input type="file" id="ref-up-inp" accept="image/*" style="display:none" onchange="handleRefUpload(this,${i})"/>
</div>
<div id="ref-up-preview"></div>
<div class="btn-row"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button></div>`);
}
function handleRefUpload(inp,i){
  const file=inp.files?.[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>{
    const p=DB.getProject(S.pid);if(!p||!p.refs[i])return;
    // Upload to imgbb for permanent storage instead of keeping base64
    persistImage(e.target.result).then(pUrl=>{
      p.refs[i].img=pUrl;
      p.refs[i].status='done';
      p.refs[i].uploaded=true;
      DB.saveProject(p);render();
    });
    // Show immediately with base64 while uploading
    p.refs[i].img=e.target.result;p.refs[i].status='done';p.refs[i].uploaded=true;
    DB.saveProject(p);closeModal();render();toast('Reference uploaded!','ok');
  };
  reader.readAsDataURL(file);
}
function showAddRefModal(){
  openModal(`<div class="modal-title">Add Reference</div>
<div class="form2">
<div class="fg"><label>Label</label><input type="text" id="ar-label" placeholder="e.g. Hero Character, Product Bottle"/></div>
<div class="fg"><label>Type</label><select id="ar-type">
${['character','product','location','environment','prop','brand'].map(t=>`<option value="${t}">${t}</option>`).join('')}
</select></div>
<div class="fg full"><label>AI Generation Prompt (or leave blank and upload instead)</label>
<textarea id="ar-prompt" rows="3" placeholder="Detailed visual description for AI generation. e.g. Young Indian woman, 28, confident expression, minimal makeup, plain white studio background, front-facing portrait."></textarea></div>
</div>
<div class="btn-row"><button class="btn btn-gold" onclick="doAddRef()">Add</button><button class="btn btn-ghost" onclick="closeModal()">Cancel</button></div>`);
}
function doAddRef(){
  const label=document.getElementById('ar-label')?.value.trim();if(!label){toast('Label required','err');return;}
  const type=document.getElementById('ar-type')?.value;
  const prompt=document.getElementById('ar-prompt')?.value.trim();
  const p=DB.getProject(S.pid);if(!p)return;
  if(!p.refs)p.refs=[];
  p.refs.push({label,type,prompt:prompt||label+' reference, neutral background',img:null,status:'idle'});
  DB.saveProject(p);closeModal();render();toast('Reference added!','ok');
}
function importClientAssets(){const p=DB.getProject(S.pid);if(!p||!p.clientId)return;const assets=DB.getUser(p.clientId)?.brandAssets?.filter(a=>a.preview)||[];if(!p.refs)p.refs=[];assets.forEach(a=>{if(!p.refs.find(r=>r.label===a.name))p.refs.push({label:a.name,type:'client_asset',prompt:a.name,img:a.preview,status:'done'});});DB.saveProject(p);render();toast(`${assets.length} client assets imported!`,'ok');}
async function genAllRefs(){
  const p=DB.getProject(S.pid);if(!p)return;if(!kF()){toast('Enter fal.ai key','err');return;}
  if(!p.refs?.length){rebuildRefs(p);}
  const pending=p.refs.filter(r=>!r.img&&r.status!=='done').length;
  const modelName=IMG_MODELS.find(m=>m.id===(S.imgModel||'fal-ai/flux-pro/v1.1-ultra'))?.n||'FLUX 1.1 Ultra';
  if(pending>3&&!confirm(`Generate ${pending} references using ${modelName}?\nEstimated cost: ~$${(pending*0.06).toFixed(2)}\n\nYou can stop anytime.`))return;
  document.getElementById('btn-gen-refs').disabled=true;S.stopSb=false;S._consecutiveErrors=0;
  for(let i=0;i<p.refs.length;i++){
    if(S.stopSb)break;
    if(p.refs[i].img&&p.refs[i].status==='done')continue;
    await doRef(p,i);
    if(p.refs[i].status==='error'){S._consecutiveErrors=(S._consecutiveErrors||0)+1;if(S._consecutiveErrors>=3){S.stopSb=true;toast('Auto-stopped: 3 consecutive errors','err');break;}}else{S._consecutiveErrors=0;}
  }
  document.getElementById('btn-gen-refs').disabled=false;if(!S.stopSb)toast('References done!','ok');
}
async function doRef(p,i){
  if(S.stopSb){return;}
  p.refs[i].status='gen';
  const imgModel=S.imgModel||'fal-ai/flux-pro/v1.1-ultra';
  const modelLabel=IMG_MODELS.find(m=>m.id===imgModel)?.n||'FLUX 1.1 Ultra';
  setRst(i,'gen',modelLabel);
  document.getElementById(`ri-${i}`).innerHTML='<div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px"><div class="spinner"></div><span style="font-size:7px;color:var(--t4)">'+esc(modelLabel)+'</span></div>';
  try{
    const prompt=applyRAGToPrompt(p.refs[i].prompt,p.id);
    p.refs[i]._lastPrompt=prompt;
    const url=await falImg(prompt);
    const pUrl=await persistImage(url);p.refs[i].img=pUrl;p.refs[i].status='done';
    document.getElementById(`ri-${i}`).innerHTML=`<img src="${url}" onclick="openImgModal('${esc(p.refs[i].label||'')}','${url}','${esc(p.refs[i]._lastPrompt||'')}')" style="width:100%;height:100%;object-fit:cover;cursor:zoom-in"/>`;
    setRst(i,'done','done');DB.saveProject(p);
  }catch(e){p.refs[i].status='error';setRst(i,'error',e.message||'error');toast('Image failed: '+(e.message||'unknown error'),'err');}
}
function setRst(i,st,txt){const el=document.getElementById(`rst-${i}`);if(el){el.style.background=st==='done'?'#041004':st==='gen'?'#1a0f00':'var(--bg4)';el.style.color=st==='done'?'var(--green)':st==='gen'?'var(--gold)':st==='error'?'var(--red)':'var(--t4)';el.textContent=txt;}}

// ── STAGE 2, STEP 2: MULTI-ANGLE ──
const ANGLES_3=['Front view, straight-on, eye-level','Three-quarter view from the left, 45-degree angle','Three-quarter view from the right, 45-degree angle'];
const ANGLES_6=[...ANGLES_3,'Side profile view from the left','Back three-quarter view from the right','Low angle looking up, slight upward tilt'];
const ANGLES_9=[...ANGLES_6,'Side profile from the right','Back view, straight-on','Top-down overhead view, birds eye angle'];
const ANGLE_NAMES_3=['Front','¾ Left','¾ Right'];
const ANGLE_NAMES_6=['Front','¾ Left','¾ Right','Side L','¾ Back R','Low Angle'];
const ANGLE_NAMES_9=['Front','¾ Left','¾ Right','Side L','¾ Back R','Low Angle','Side R','Back','Top Down'];

function getAngleSet(n){
  if(n<=3)return{prompts:ANGLES_3,names:ANGLE_NAMES_3};
  if(n<=6)return{prompts:ANGLES_6,names:ANGLE_NAMES_6};
  return{prompts:ANGLES_9,names:ANGLE_NAMES_9};
}

function sMultiAngle(p){
  const refs=(p.refs||[]).filter(r=>r.img);
  const gridSize=S.maGrid||6;
  if(!S.maSelectedAngles)S.maSelectedAngles={};
  const aSet=getAngleSet(gridSize);
  return`<div class="ptitle">Multi-Angle Grid <span style="font-size:10px;color:var(--t4);font-weight:400;margin-left:6px">(Optional)</span></div>
<div class="psub">Generate angles for each reference using img2img — builds visual consistency for storyboard. <strong>This step is optional</strong> — you can skip directly to Storyboard.</div>
${!refs.length?`<div class="ib ib-red">No reference images yet. Go back to References and generate or upload at least one reference first.</div>`:''}
<div style="display:flex;gap:7px;align-items:center;flex-wrap:wrap;margin-bottom:10px">
<span style="font-size:10px;color:var(--t3);font-weight:700">Grid size:</span>
${[3,6,9].map(n=>`<button onclick="S.maGrid=${n};S.maSelectedAngles={};render()" style="background:${gridSize===n?'#1a0f1e':'var(--bg3)'};border:1px solid ${gridSize===n?'var(--gold)':'var(--b2)'};color:${gridSize===n?'var(--gold)':'var(--t4)'};padding:4px 11px;border-radius:5px;cursor:pointer;font-size:10px;font-weight:700">${n} angles</button>`).join('')}
<button class="btn btn-gold" onclick="genAllAngles()" id="btn-ma-all" style="margin-left:8px">✦ Generate Selected</button>
<button class="btn btn-ghost btn-sm" onclick="S.stopSb=true">■ Stop</button>
<div style="display:flex;gap:5px;margin-left:auto">
<button class="btn btn-ghost btn-sm" onclick="goStep(1)">← Refs</button>
<button class="btn btn-gold" onclick="goStep(3)">Skip → Storyboard</button>
</div>
</div>
<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:8px;padding:8px 12px;margin-bottom:14px">
<div style="display:flex;align-items:center;gap:6px;margin-bottom:6px"><span style="font-size:9px;color:var(--t3);font-weight:700;text-transform:uppercase">Select angles to generate:</span>
<button onclick="toggleAllAngles(true)" style="font-size:8px;color:var(--blue);background:none;border:none;cursor:pointer;text-decoration:underline">All</button>
<button onclick="toggleAllAngles(false)" style="font-size:8px;color:var(--t4);background:none;border:none;cursor:pointer;text-decoration:underline">None</button>
</div>
<div style="display:flex;gap:8px;flex-wrap:wrap">
${aSet.names.map((name,ai)=>{const checked=S.maSelectedAngles[ai]!==false;return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:10px;color:${checked?'var(--t2)':'var(--t4)'}"><input type="checkbox" ${checked?'checked':''} onchange="S.maSelectedAngles[${ai}]=this.checked;render()" style="accent-color:var(--gold)"/>${name}</label>`;}).join('')}
</div>
</div>
${refs.length?refs.map((ref,ri)=>{
  const angles=(p.multiAngles||{})[ri]||{angles:[],heroAngle:null};
  const aSet=getAngleSet(gridSize);
  return`<div style="margin-bottom:22px;background:var(--bg2);border:1px solid var(--b1);border-radius:9px;overflow:hidden">
<div style="padding:9px 13px;border-bottom:1px solid var(--b1);display:flex;align-items:center;gap:10px">
<img src="${ref.img}" style="width:36px;height:36px;object-fit:cover;border-radius:4px;border:1px solid var(--b2)"/>
<div style="flex:1">
<div style="font-size:11px;font-weight:700;color:#fff">${esc(ref.label||'')}</div>
<div style="font-size:9px;color:var(--t4);text-transform:capitalize">${ref.type||'ref'}</div>
</div>
<div style="display:flex;gap:5px">
<button class="btn btn-outline btn-sm" onclick="genRefAngles(${ri})">✦ Generate</button>
<button class="btn btn-ghost btn-sm" onclick="dlImg('${ref.img}','${esc(ref.label||'ref')}_base.jpg')" title="Download base">↓ Base</button>
</div>
</div>
<div style="padding:10px;display:grid;grid-template-columns:repeat(3,1fr);gap:7px">
${aSet.prompts.slice(0,gridSize).map((angle,ai)=>{
  const ang=angles.angles?.[ai]||{};
  const isHero=angles.heroAngle===ai;
  return`<div style="background:var(--bg3);border:1px solid ${isHero?'var(--gold)':'var(--b1)'};border-radius:6px;overflow:hidden;position:relative" id="ma-${ri}-${ai}">
${isHero?`<div style="position:absolute;top:4px;left:4px;z-index:1;background:var(--gold);color:#000;font-size:7px;font-weight:700;padding:1px 5px;border-radius:3px">HERO</div>`:''}
<div style="aspect-ratio:1;background:var(--bg4);overflow:hidden">
${ang.img?`<img src="${ang.img}" style="width:100%;height:100%;object-fit:cover;cursor:zoom-in" onclick="openImgModal('${esc(aSet.names[ai]||'Angle')} — ${esc(ref.label||'')}','${ang.img}')" />`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:20px;color:var(--b3)">◇</div>'}
</div>
<div style="padding:4px 6px;display:flex;justify-content:space-between;align-items:center;gap:3px">
<span style="font-size:8px;color:${ang.img?'var(--t2)':'var(--t4)'};font-weight:${ang.img?'700':'400'}">${aSet.names[ai]||'Angle '+( ai+1)}</span>
<div style="display:flex;gap:2px">
<button onclick="setHeroAngle(${ri},${ai})" title="Set as hero angle" style="background:${isHero?'var(--gold)':'var(--bg4)'};border:1px solid ${isHero?'var(--gold)':'var(--b2)'};color:${isHero?'#000':'var(--t4)'};font-size:8px;padding:2px 5px;border-radius:3px;cursor:pointer">★</button>
${ang.img?`<button onclick="dlImg('${ang.img}','${esc(ref.label||'ref')}_${esc(aSet.names[ai]||'angle'+ai)}.jpg')" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t4);font-size:8px;padding:2px 4px;border-radius:3px;cursor:pointer">↓</button>`:''}
<button onclick="genSingleAngle(${ri},${ai})" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t4);font-size:8px;padding:2px 4px;border-radius:3px;cursor:pointer">⟳</button>
</div>
</div>
</div>`;}).join('')}
</div>
${angles.heroAngle!==null&&angles.heroAngle!==undefined?`<div style="padding:6px 12px;border-top:1px solid var(--b1);font-size:9px;color:var(--gold)">★ Hero angle set: <strong>${aSet.names[angles.heroAngle]||'Angle '+(angles.heroAngle+1)}</strong> — will be used as primary visual anchor in storyboard generation</div>`:'<div style="padding:6px 12px;border-top:1px solid var(--b1);font-size:9px;color:var(--t4)">Click ★ on any angle to set it as the hero angle for storyboard generation</div>'}
</div>`;}).join('')
:`<div style="background:var(--bg3);border:1px dashed var(--b2);border-radius:8px;padding:30px;text-align:center;color:var(--t4)">No reference images to work with. Generate or upload references in Step 1 first.</div>`}
<div class="btn-row" style="margin-top:14px">
<button class="btn btn-ghost btn-sm" onclick="goStep(1)">← References</button>
<button class="btn btn-gold" onclick="goStep(3)">→ Storyboard</button>
</div>`;
}

function toggleAllAngles(on){const aSet=getAngleSet(S.maGrid||6);if(!S.maSelectedAngles)S.maSelectedAngles={};aSet.names.forEach((_,i)=>{S.maSelectedAngles[i]=on;});render();}
function setHeroAngle(refIdx,angleIdx){
  const p=DB.getProject(S.pid);if(!p)return;
  if(!p.multiAngles)p.multiAngles={};
  if(!p.multiAngles[refIdx])p.multiAngles[refIdx]={angles:[],heroAngle:null};
  p.multiAngles[refIdx].heroAngle=angleIdx;
  DB.saveProject(p);render();toast('Hero angle set!','ok');
}

async function genRefAngles(refIdx){
  const p=DB.getProject(S.pid);if(!p)return;
  const ref=p.refs?.[refIdx];if(!ref?.img){toast('Generate or upload the base reference image first','err');return;}
  const gridSize=S.maGrid||6;const aSet=getAngleSet(gridSize);
  if(!p.multiAngles)p.multiAngles={};
  if(!p.multiAngles[refIdx])p.multiAngles[refIdx]={angles:[],heroAngle:null};
  S.stopSb=false;
  const selectedAngles=S.maSelectedAngles||{};
  for(let ai=0;ai<aSet.prompts.length;ai++){
    if(S.stopSb){toast('Generation stopped','info');break;}
    // Skip unselected angles
    if(selectedAngles[ai]===false)continue;
    const cell=document.getElementById(`ma-${refIdx}-${ai}`);
    if(cell)cell.querySelector('div[style*="aspect-ratio"]').innerHTML='<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center"><div class="spinner"></div></div>';
    try{
      const basePrompt=ref.prompt||ref.label||'subject reference';
      const anglePrompt=`${basePrompt}. ${aSet.prompts[ai]}. Consistent with base reference, same subject, same style, clean background, sharp focus, photorealistic.`;
      const useI2I=!ref.img.startsWith('data:');
      const modelName=useI2I?'FLUX Kontext (img2img)':'FLUX 1.1 Ultra (text2img)';
      if(cell){const stEl=cell.querySelector('span[style*="font-size:8px"]');if(stEl)stEl.textContent=modelName;}
      let url;
      if(!useI2I){
        url=await falImg(anglePrompt);
      }else{
        url=await falImgI2I(ref.img,anglePrompt,0.62);
      }
      if(!p.multiAngles[refIdx].angles)p.multiAngles[refIdx].angles=[];
      const pAngle=await persistImage(url);
      p.multiAngles[refIdx].angles[ai]={img:pAngle,name:aSet.names[ai],status:'done'};
      DB.saveProject(p);
      if(cell){cell.querySelector('div[style*="aspect-ratio"]').innerHTML=`<img src="${url}" style="width:100%;height:100%;object-fit:cover;cursor:zoom-in" onclick="openImgModal('${esc(aSet.names[ai])}','${url}')"/>`;}
      if(ai===0&&(p.multiAngles[refIdx].heroAngle===null||p.multiAngles[refIdx].heroAngle===undefined)){p.multiAngles[refIdx].heroAngle=0;DB.saveProject(p);}
    }catch(e){
      if(cell)cell.querySelector('div[style*="aspect-ratio"]').innerHTML=`<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:8px;color:var(--red)">err</div>`;
      console.warn('angle gen',refIdx,ai,e.message);
    }
    await sleep(400);
  }
  toast('Angles done for '+( ref.label||'ref'),'ok');
}

async function genSingleAngle(refIdx,angleIdx){
  const p=DB.getProject(S.pid);if(!p)return;
  const ref=p.refs?.[refIdx];if(!ref?.img){toast('Base reference needed first','err');return;}
  const aSet=getAngleSet(S.maGrid||6);
  if(!p.multiAngles)p.multiAngles={};
  if(!p.multiAngles[refIdx])p.multiAngles[refIdx]={angles:[],heroAngle:null};
  const cell=document.getElementById(`ma-${refIdx}-${angleIdx}`);
  if(cell)cell.querySelector('div[style*="aspect-ratio"]').innerHTML='<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center"><div class="spinner"></div></div>';
  try{
    const basePrompt=ref.prompt||ref.label||'subject';
    const anglePrompt=`${basePrompt}. ${aSet.prompts[angleIdx]}. Same subject, consistent, clean background, photorealistic.`;
    const url=ref.img.startsWith('data:')?await falImg(anglePrompt):await falImgI2I(ref.img,anglePrompt,0.62);
    if(!p.multiAngles[refIdx].angles)p.multiAngles[refIdx].angles=[];
    const pSA=await persistImage(url);
    p.multiAngles[refIdx].angles[angleIdx]={img:pSA,name:aSet.names[angleIdx],status:'done'};
    DB.saveProject(p);
    if(cell)cell.querySelector('div[style*="aspect-ratio"]').innerHTML=`<img src="${url}" style="width:100%;height:100%;object-fit:cover;cursor:zoom-in" onclick="openImgModal('${esc(aSet.names[angleIdx])}','${url}')"/>`;
    toast(aSet.names[angleIdx]+' done!','ok');
  }catch(e){toast(e.message,'err');}
}

async function genAllAngles(){
  const p=DB.getProject(S.pid);if(!p)return;
  const refs=(p.refs||[]).filter(r=>r.img);
  if(!refs.length){toast('Generate references in Step 1 first','err');return;}
  const btn=document.getElementById('btn-ma-all');if(btn)btn.disabled=true;
  S.stopSb=false;
  for(let ri=0;ri<p.refs.length;ri++){
    if(S.stopSb)break;
    if(!p.refs[ri].img)continue;
    await genRefAngles(ri);
  }
  if(btn)btn.disabled=false;
  toast('All angles generated!','ok');
}

// ── STAGE 2, STEP 3: STORYBOARD ──
function sStoryboard(p){
  const shots=p.shots||[];const hasFb=(p.storyboardFeedback||[]).length||p.overallStoryboardFeedback;
  return`<div class="ptitle">Storyboard Generation</div><div class="psub">Generate frames. Release to client when satisfied.</div>
<div class="stg-row">
<div class="si"><button class="toggle on" id="tog-rt" onclick="this.classList.toggle('on')"></button>Auto-retry</div>
<div class="si">Retries:<input type="number" id="s-rt" value="3" min="1" max="8"/></div>
<div class="si"><button class="toggle on" id="tog-qa" onclick="this.classList.toggle('on')"></button>QA</div>
<div class="si">Min score:<input type="range" id="s-th" min="1" max="10" value="7" style="width:56px;accent-color:var(--gold)" oninput="document.getElementById('s-tv').textContent=this.value"/><span id="s-tv">7</span>/10</div>
<div class="si"><button class="toggle" id="tog-bo3" onclick="this.classList.toggle('on')"></button>Best-of-3</div>
<div class="si"><select id="s-rat" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:3px 6px;border-radius:3px;font-size:10px"><option value="21:9">21:9</option><option value="16:9">16:9</option><option value="4:3">4:3</option><option value="1:1">1:1</option></select></div>
</div>
<div class="prog-wrap show" id="sb-prog"><div class="prog-info"><span id="sb-pt">0/0</span><span id="sb-pct">0%</span></div><div class="prog-track"><div class="prog-fill" id="sb-pf" style="width:0"></div></div></div>
<div class="btn-row" style="margin-bottom:10px">
<button class="btn btn-gold" onclick="genAllSb()" id="btn-sb">✦ Generate All</button>
<button class="btn btn-outline" onclick="resumeSb()">Resume</button>
<button class="btn btn-red btn-sm" onclick="S.stopSb=true">■ Stop</button>
<button class="btn btn-ghost btn-sm" onclick="goStep(1)">←</button>
<button class="btn btn-green" onclick="releaseStoryboard(S.pid)">Release to Client →</button>
<button class="btn btn-ghost btn-sm" onclick="dlAllSbHiRes()" title="Download all frames as high-res">↓ All HiRes</button>
</div>
${hasFb?`<div class="section-lbl">Client Feedback${p.storyboardFeedback?.length?' ('+p.storyboardFeedback.length+' shot notes)':''}</div>
${(p.storyboardFeedback||[]).map(f=>`<div style="background:var(--bg2);border:1px solid rgba(255,107,53,0.18);border-radius:5px;padding:8px 10px;margin-bottom:5px;font-size:10px"><strong style="color:var(--gold)">S${f.num}:</strong> ${esc(f.feedback)}</div>`).join('')}
${p.overallStoryboardFeedback?`<div style="background:var(--bg2);border:1px solid var(--b1);border-radius:5px;padding:8px 10px;margin-bottom:5px;font-size:10px"><strong style="color:var(--t3)">Overall: </strong>${esc(p.overallStoryboardFeedback)}</div>`:''}
<button class="btn btn-gold btn-sm" style="margin-bottom:12px" onclick="clearSbFeedback()">Mark Feedback as Addressed</button>`:''}
<div class="sb-grid">${shots.map(s=>sbCard(s,S.sbState[s.num])).join('')}${!shots.length?'<div style="color:var(--t4);font-size:10px;padding:10px;grid-column:1/-1">Generate shots in Writing → Step 5 first.</div>':''}</div>`;
}
function sbCard(s,sd){
  sd=sd||{};const st=sd.status||'idle';
  const cs={'idle':['sbst-idle','idle'],'gen':['sbst-gen','gen...'],'check':['sbst-gen','QA...'],'done':['sbst-done','done'],'error':['sbst-error','error']};
  const[bc,bt]=cs[st]||cs.idle;
  const p=DB.getProject(S.pid);
  const variants=(p?.sbVariants||{})[s.num]?.variants||[];
  const selIdx=(p?.sbVariants||{})[s.num]?.selectedIdx||0;
  const qaResult=sd.qaResult||null;
  const shotComment=(p?.sbComments||{})[s.num]||'';
  const shotPrompt=sd.prompt||s.prompt||'';
  const hasQaIssue=qaResult&&!qaResult.pass;
  return`<div class="sbc2" id="sbc-${s.num}" style="${hasQaIssue?'border:2px solid var(--red);':''}">
<div class="sbt">
<span class="sbnum">S${s.num}</span>
<span style="font-size:8px;color:rgba(255,107,53,0.45);flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(s.scene||'')}</span>
${qaResult?`<span style="font-size:7px;color:${qaResult.pass?'var(--green)':'var(--red)'};background:${qaResult.pass?'#041004':'#180404'};padding:1px 5px;border-radius:3px;font-weight:700" title="${esc(qaResult.feedback||'')}">QA:${qaResult.score||'?'}/10</span>`:''}
${variants.length?`<span style="font-size:7px;color:var(--blue);background:#0a0a18;padding:1px 4px;border-radius:3px">${variants.length}v</span>`:''}
<span class="sbst ${bc}" id="sbb-${s.num}">${bt}</span>
</div>
<div class="sb-iw" id="sbi-${s.num}" style="${hasQaIssue?'position:relative;':''}">
${sd.img?`<img src="${sd.img}" onclick="openImgModal('S${s.num}','${sd.img}','${esc(shotPrompt)}')" loading="lazy"/>`:'<div class="sb-ph">◇</div>'}
${hasQaIssue?`<div style="position:absolute;top:4px;right:4px;background:var(--red);color:#fff;font-size:7px;font-weight:700;padding:2px 6px;border-radius:3px">⚠ Issues Found</div>`:''}
</div>
${variants.length>1?`<div style="display:flex;gap:2px;padding:4px 5px 0;overflow-x:auto">
${variants.map((v,vi)=>`<img src="${v}" style="width:28px;height:28px;object-fit:cover;border-radius:2px;border:1px solid ${vi===selIdx?'var(--gold)':'var(--b2)'};cursor:pointer;flex-shrink:0" onclick="selectSbVariant('${s.num}',${vi})" title="Variant ${vi+1}"/>`).join('')}
</div>`:''}
${shotPrompt?`<div style="padding:3px 6px;max-height:32px;overflow:hidden"><div style="font-size:7px;color:var(--t4);line-height:1.3;word-break:break-word;cursor:pointer" onclick="this.style.maxHeight=this.style.maxHeight==='none'?'24px':'none'" title="Click to expand">${esc(shotPrompt).substring(0,120)}${shotPrompt.length>120?'…':''}</div></div>`:''}
<div style="padding:3px 6px"><input type="text" placeholder="Add comment for regeneration…" value="${esc(shotComment)}" onchange="saveSbComment('${s.num}',this.value)" style="width:100%;background:var(--bg4);border:1px solid var(--b1);color:var(--t2);font-size:8px;padding:3px 6px;border-radius:3px;box-sizing:border-box"/></div>
<div class="sb-btns">
<button onclick="singleSb('${s.num}')" title="${shotComment?'Will use your comment in regeneration':'Regenerate'}">⟳${shotComment?' 💬':''}</button>
<button onclick="openImgModal('S${s.num}',S.sbState['${s.num}']?.img,'${esc(shotPrompt)}')" ${sd.img?'':'disabled'}>View</button>
<button onclick="dlImg(S.sbState['${s.num}']?.img,'S${s.num}_hires.jpg')" ${sd.img?'':'disabled'} title="Download full res">↓ HiRes</button>
</div>
</div>`;
}
function saveSbComment(num,comment){const p=DB.getProject(S.pid);if(!p)return;if(!p.sbComments)p.sbComments={};p.sbComments[num]=comment;DB.saveProject(p);}
function selectSbVariant(num,idx){
  const p=DB.getProject(S.pid);if(!p||!p.sbVariants?.[num])return;
  p.sbVariants[num].selectedIdx=idx;
  const url=p.sbVariants[num].variants[idx];
  S.sbState[num]={img:url,status:'done'};p.sbState=S.sbState;
  DB.saveProject(p);setSbImg(num,url);
  // Update variant thumbnails border
  render();
}
async function genAllSb(){
  const p=DB.getProject(S.pid);if(!p)return;if(!kF()){toast('Enter fal.ai key','err');return;}
  const pending=(p.shots||[]).filter(s=>S.sbState[s.num]?.status!=='done').length;
  const modelName=IMG_MODELS.find(m=>m.id===(S.imgModel||'fal-ai/flux-pro/v1.1-ultra'))?.n||'FLUX 1.1 Ultra';
  const estCost=(pending*0.06).toFixed(2);
  if(pending>3&&!confirm(`Generate ${pending} shots using ${modelName}?\nEstimated cost: ~$${estCost}\n\nYou can stop anytime with the Stop button.`))return;
  S.stopSb=false;S._consecutiveErrors=0;
  document.getElementById('btn-sb').disabled=true;document.getElementById('sb-prog').classList.add('show');
  for(const s of p.shots){
    if(S.stopSb)break;
    if(S.sbState[s.num]?.status==='done')continue;
    await runSbShot(p,s);
    // Auto-stop after 3 consecutive errors to prevent cost waste
    if(S.sbState[s.num]?.status==='error'){
      S._consecutiveErrors=(S._consecutiveErrors||0)+1;
      if(S._consecutiveErrors>=3){S.stopSb=true;toast('Auto-stopped: 3 consecutive errors. Check your API key or connection.','err');break;}
    }else{S._consecutiveErrors=0;}
  }
  document.getElementById('btn-sb').disabled=false;if(!S.stopSb)toast('Storyboard done!','ok');
}
async function resumeSb(){S.stopSb=false;S._consecutiveErrors=0;const p=DB.getProject(S.pid);if(!p)return;for(const s of p.shots){if(S.stopSb)break;const st=S.sbState[s.num]?.status;if(!st||st==='idle'||st==='error'){await runSbShot(p,s);if(S.sbState[s.num]?.status==='error'){S._consecutiveErrors=(S._consecutiveErrors||0)+1;if(S._consecutiveErrors>=3){S.stopSb=true;toast('Auto-stopped: 3 consecutive errors','err');break;}}else{S._consecutiveErrors=0;}}}}
async function singleSb(num){S.stopSb=false;const p=DB.getProject(S.pid);if(!p)return;S.sbState[num]={status:'idle',img:null};const s=p.shots.find(x=>x.num===num);if(!s)return;await runSbShot(p,s);}
async function runSbShot(p,shot){
  if(S.stopSb)return;
  S.sbState[shot.num]={status:'gen',img:null,prompt:''};setSbSt(shot.num,'gen','gen...');
  const maxTries=parseInt(document.getElementById('s-rt')?.value,10)||3;
  const doQa=document.getElementById('tog-qa')?.classList.contains('on');
  const thresh=parseInt(document.getElementById('s-th')?.value,10)||7;
  const bestOf3=document.getElementById('tog-bo3')?.classList.contains('on');
  // Include user comment in prompt if available
  const userComment=(p.sbComments||{})[shot.num]||'';
  // Build rich anchor: use hero angle images from multi-angle step
  const heroAnchors=[];
  (p.refs||[]).forEach((ref,ri)=>{
    const ma=(p.multiAngles||{})[ri];
    if(ma&&ma.heroAngle!==null&&ma.heroAngle!==undefined&&ma.angles?.[ma.heroAngle]?.img){
      heroAnchors.push({type:ref.type||'ref',label:ref.label||'',img:ma.angles[ma.heroAngle].img,angleName:ma.angles[ma.heroAngle].name});
    }else if(ref.img){
      heroAnchors.push({type:ref.type||'ref',label:ref.label||'',img:ref.img,angleName:'front'});
    }
  });
  const anchor=heroAnchors.slice(0,3).map(r=>`[${(r.type||'REF').toUpperCase()} "${r.label}" — ${r.angleName}]`).join(' ');
  const heroImg=heroAnchors[0]?.img;// Primary hero reference image
  const basePrompt=shot.prompt;
  const commentAddendum=userComment?` CORRECTION: ${userComment}.`:'';
  const enrichedPrompt=(anchor?anchor+' ':'')+'SHOT: '+basePrompt+'. Maintain strict visual consistency with all referenced characters, products, and locations.'+commentAddendum;
  S.sbState[shot.num].prompt=enrichedPrompt;
  const p4=DB.getProject(S.pid);const ragPrompt=p4?applyRAGToPrompt(enrichedPrompt,p4.id):enrichedPrompt;
  try{
    let finalUrl;
    if(bestOf3){
      // Generate 3 variants, QA each, keep best
      setSbSt(shot.num,'gen','3 variants...');
      const variants=[];
      for(let v=0;v<3;v++){
        if(S.stopSb)throw new Error('Stopped');
        try{
          let url;
          if(heroImg&&!heroImg.startsWith('data:')&&v===1){
            // Second variant: use img2img from hero ref for extra consistency
            url=await falImgI2I(heroImg,basePrompt+'. '+shot.scene+'. Cinematic storyboard frame.',0.55);
          }else{url=await falImg(ragPrompt);}
          variants.push(url);
          setSbSt(shot.num,'gen',( v+1)+'/3 done');
        }catch(e){console.warn('variant',v,e.message);}
      }
      if(!variants.length)throw new Error('All variants failed');
      if(doQa&&kC()&&variants.length>1){
        // QA all variants, pick highest score
        setSbSt(shot.num,'check','QA '+variants.length+' variants...');
        let bestScore=0;finalUrl=variants[0];
        for(const vurl of variants){
          try{const qa=await checkQa(vurl,shot.prompt,0);if(qa.score>bestScore){bestScore=qa.score;finalUrl=vurl;}}catch(e){}
        }
      }else{finalUrl=variants[0];}
      // Store all variants for manual selection
      if(!p.sbVariants)p.sbVariants={};
      p.sbVariants[shot.num]={variants,selectedIdx:variants.indexOf(finalUrl)};
    }else{
      // Standard mode: single generation with retries
      let url;
      for(let t=0;t<maxTries;t++){
        if(S.stopSb)throw new Error('Stopped');
        try{
          if(heroImg&&!heroImg.startsWith('data:')&&t===maxTries-1){
            url=await falImgI2I(heroImg,basePrompt+'. Cinematic frame.',0.55);
          }else{url=await falImg(ragPrompt);}
          break;
        }catch(e){if(t>=maxTries-1)throw e;await sleep(1500);}
      }
      if(doQa&&kC()){
        setSbSt(shot.num,'check','QA...');
        const qa=await checkQa(url,shot.prompt,thresh);
        S.sbState[shot.num].qaResult=qa;
        if(!qa.pass){
          try{url=await falImg(ragPrompt);}catch(e){}
        }
      }
      finalUrl=url;
    }
    const finalPUrl=await persistImage(finalUrl);
    setSbImg(shot.num,finalPUrl);
    S.sbState[shot.num]={img:finalPUrl,status:'done'};setSbSt(shot.num,'done','done');
    p.sbState=S.sbState;DB.saveProject(p);
  }catch(e){S.sbState[shot.num]={status:'error',img:null};setSbSt(shot.num,'error',e.message||'err');console.error('runSbShot',shot.num,e);}
  const done=Object.values(S.sbState).filter(x=>x.status==='done').length;const tot=(p.shots||[]).length;const pct=tot?Math.round(done/tot*100):0;const pf=document.getElementById('sb-pf');const pt=document.getElementById('sb-pt');const pp=document.getElementById('sb-pct');if(pf)pf.style.width=pct+'%';if(pt)pt.textContent=done+'/'+tot;if(pp)pp.textContent=pct+'%';document.getElementById('st-i').textContent=done+' images';
}
function setSbSt(num,cls,txt){const b=document.getElementById('sbb-'+num);if(b){b.className='sbst sbst-'+cls;b.textContent=txt;}}
function setSbImg(num,url){const w=document.getElementById('sbi-'+num);if(w)w.innerHTML=`<img src="${url}" onclick="openImgModal('S${num}','${url}')" loading="lazy"/>`;}
function clearSbFeedback(){const p=DB.getProject(S.pid);if(!p)return;p.storyboardFeedback=[];p.overallStoryboardFeedback='';p.pendingFeedback=null;DB.saveProject(p);render();toast('Feedback cleared','ok');}

// ── STAGE 3: MODEL ──
function sModel(){
  return`<div class="ptitle">Model Selection</div><div class="psub">Choose video generation model.</div>
${trendingStylesPanel(DB.getProject(S.pid)||{})}
<div class="btn-row" style="margin-bottom:10px"><button class="btn btn-gold" onclick="analyseModel()">✦ Analyse & Recommend</button><span id="mod-st" style="font-size:9px;color:var(--t4)"></span></div>
<div class="ai-load" id="mod-load"><div class="spinner"></div>Analysing...</div>
<div id="mod-analysis" style="display:none;margin-bottom:10px"><div class="card"><div class="card-head"><span class="card-title">RECOMMENDATION</span></div><div class="card-body"><div id="mod-text" style="font-size:10px;color:var(--t3);line-height:1.6;white-space:pre-wrap"></div></div></div></div>
<div class="model-grid">${VIDEO_MODELS.map(m=>`<div class="mc${S.vidModel?.id===m.id?' sel':''}" id="mc-${m.id.replace(/[^\w]/g,'-')}" onclick="selectModel(${JSON.stringify(m).replace(/"/g,'&quot;')})">
<div class="mn">${m.n}</div><div class="ms">${m.s}</div>
<div style="display:flex;gap:3px;flex-wrap:wrap">${m.tags.map(t=>`<span class="mtag">${t}</span>`).join('')}</div>
<div class="mc-cost">${m.c}</div></div>`).join('')}</div>
<div class="btn-row"><button class="btn btn-gold" onclick="goStep(2)">→ Continuity Lock</button></div>`;
}
async function analyseModel(){if(!kC()){toast('Enter Claude key','err');return}document.getElementById('mod-load')?.classList.add('show');document.getElementById('mod-analysis').style.display='none';const p=DB.getProject(S.pid);if(!p)return;try{const r=await callClaude('Video model expert. JSON only.',`Project: ${p.name} | Type: ${MT[p.type]?.label} | Brief: ${Object.values({...p.clientBrief,...p.brief}).join(' ').substring(0,300)}\nModels: Veo3(dialogue/humans), Kling2.1(consistency), Minimax(fast/action), RunwayGen4(premium), Wan2.1(budget).\nReturn: {"analysis":"2-3 sentences","recommended_id":"fal model id","recommended":"model name","reasoning":"why"}`,900);const d=JSON.parse(r.replace(/```json|```/g,'').trim());document.getElementById('mod-text').textContent=d.analysis+'\n\nRecommendation: '+d.recommended+'\nReason: '+d.reasoning;document.getElementById('mod-analysis').style.display='block';const rec=VIDEO_MODELS.find(m=>m.id===d.recommended_id||m.n.toLowerCase().includes((d.recommended||'').toLowerCase().split(' ')[0]));if(rec){document.getElementById(`mc-${rec.id.replace(/[^\w]/g,'-')}`)?.classList.add('rec');selectModel(rec);}document.getElementById('mod-st').textContent='✓';}catch(e){toast(e.message,'err');}document.getElementById('mod-load')?.classList.remove('show');}
function selectModel(m){if(typeof m==='string')m=JSON.parse(m);S.vidModel=m;document.querySelectorAll('.mc').forEach(c=>c.classList.remove('sel'));document.getElementById('mc-'+m.id.replace(/[^\w]/g,'-'))?.classList.add('sel');document.getElementById('st-m').textContent='model: '+m.n;toast(m.n+' selected','ok');}

// ── STAGE 3, STEP 2: LOCK ──
function sLock(p){
  return`<div class="ptitle">Continuity Lock Block</div><div class="psub">Prepended to every video prompt to prevent visual drift.</div>
<div class="btn-row" style="margin-bottom:10px"><button class="btn btn-outline btn-sm" onclick="genLock()">✦ Auto-Generate</button><button class="btn btn-ghost btn-sm" onclick="goStep(1)">←</button><span id="lk-st" style="font-size:9px;color:var(--t4)"></span></div>
<div class="ai-load" id="lk-load"><div class="spinner"></div>Building lock...</div>
<div class="lock-block"><textarea id="lk-ta" rows="12" placeholder="Auto-generate or write the continuity lock block.">${esc(p.continuityLock||'')}</textarea></div>
<div class="section-lbl">Global Production Rules</div>
<div class="rules-grid">${VEO_RULES.map(r=>`<div class="rc2"><span style="font-size:8px;background:var(--bg4);color:var(--gold);padding:1px 5px;border-radius:2px;font-weight:700">RULE ${r.n}</span><div style="font-size:11px;font-weight:700;color:var(--t1);margin:4px 0 2px">${r.title}</div><div style="font-size:9px;color:var(--t4);line-height:1.4">${r.d}</div><div style="display:flex;align-items:center;gap:5px;margin-top:5px"><button class="toggle${S.rules[r.id]?' on':''}" id="rt-${r.id}" onclick="S.rules['${r.id}']=!S.rules['${r.id}'];this.classList.toggle('on',S.rules['${r.id}'])"></button><span style="font-size:9px;color:var(--t3)">Apply</span></div></div>`).join('')}</div>
<div class="btn-row" style="margin-top:10px"><button class="btn btn-ghost btn-sm" onclick="goStep(1)">←</button><button class="btn btn-gold" onclick="goStep(3)">→ Video Prompts</button></div>`;
}
async function genLock(){saveInputs();const p=DB.getProject(S.pid);if(!p)return;if(!kC()){toast('Enter API key','err');return}document.getElementById('lk-load')?.classList.add('show');document.getElementById('lk-st').textContent='Building...';const bCtx=p.bible?Object.entries(p.bible).map(([k,v])=>`${k}: ${JSON.stringify(v).substring(0,200)}`).join('\n'):'';try{const r=await callClaude('Create Scene Continuity Lock Blocks. Precise, prevents visual drift.',`Project: ${p.name} (${MT[p.type]?.label})\nBIBLE:\n${bCtx||Object.entries({...p.clientBrief,...p.brief}).filter(([,v])=>v).map(([k,v])=>`${k}: ${v}`).join('\n')}\n\nFormat: Location context, Lighting, Characters with full visual descriptions, Key props/vehicles, Visual style.\nEnd with: "Same characters, wardrobe, environment as established above."\nUnder 200 words.`,800);document.getElementById('lk-ta').value=r;const p2=DB.getProject(S.pid);p2.continuityLock=r;DB.saveProject(p2);document.getElementById('lk-st').textContent='✓ Ready';toast('Lock ready!','ok');}catch(e){toast(e.message,'err');}document.getElementById('lk-load')?.classList.remove('show');}

// ── STAGE 3, STEP 3: VIDEO PROMPTS ──
function sVidPrompts(p){
  const vps=p.vidPrompts||[];
  return`<div class="ptitle">Video Prompts</div><div class="psub">4-component packages per shot.</div>
<div class="btn-row" style="margin-bottom:10px"><button class="btn btn-gold" onclick="genVidPrompts()">✦ Generate All</button><button class="btn btn-ghost btn-sm" onclick="goStep(2)">←</button><span id="vp-st" style="font-size:9px;color:var(--t4)">${vps.length?vps.length+' packages':''}</span></div>
<div class="ai-load" id="vp-load"><div class="spinner"></div>Generating...</div>
${vps.map((vp,i)=>`<div class="vpc"><div class="vph"><span class="sn2">S${vp.num||String(i+1).padStart(2,'0')}</span><span style="font-size:9px;color:rgba(255,107,53,0.45);font-weight:700;flex:1">${esc(vp.scene||'')}</span></div>
<div style="display:grid;grid-template-columns:180px 1fr">
<div style="padding:8px;border-right:1px solid var(--b1)"><div class="vvid">${S.sbState[vp.num]?.img?`<img src="${S.sbState[vp.num].img}"/>`:'<div class="vvph">◇</div>'}</div></div>
<div style="padding:8px;display:flex;flex-direction:column;gap:4px">
<div class="pb"><div class="pbl sc">SCRIPT</div><textarea class="pb" data-vp="${i}.script" rows="2">${esc(vp.script||'')}</textarea></div>
<div class="pb"><div class="pbl">DESCRIPTION</div><textarea class="pb" data-vp="${i}.shot_description" rows="2">${esc(vp.shot_description||'')}</textarea></div>
<div class="pb"><div class="pbl vp">VIDEO PROMPT</div><textarea class="pb" data-vp="${i}.video_prompt" rows="5">${esc(vp.video_prompt||'')}</textarea></div>
<div class="pb"><div class="pbl jl">JSON</div><textarea class="pb" data-vp="${i}.json_str" rows="4">${esc(typeof vp.json==='object'?JSON.stringify(vp.json,null,2):vp.json_str||'')}</textarea></div>
</div></div></div>`).join('')}
${!vps.length?'<div style="color:var(--t4);font-size:10px;padding:10px">Generate after completing shots and continuity lock.</div>':''}
<div class="btn-row" style="margin-top:10px;${vps.length?'':'display:none'}" id="vp-nav"><button class="btn btn-ghost btn-sm" onclick="goStep(2)">←</button><button class="btn btn-gold" onclick="goStep(4)">→ Generate Videos</button></div>`;
}
async function genVidPrompts(){saveInputs();const p=DB.getProject(S.pid);if(!p)return;if(!kC()){toast('Enter API key','err');return}document.getElementById('vp-load')?.classList.add('show');document.getElementById('vp-st').textContent='Generating...';const lock=p.continuityLock||'';const rules=VEO_RULES.filter(r=>S.rules[r.id]).map(r=>`Rule ${r.n}: ${r.d}`).join('\n');const model=S.vidModel?.n||'video model';
try{const r=await callClaude(`Generate 4-component video packages for ${model}. Safety: visual prompt = physical action ONLY. RULES:\n${rules}\nLOCK:\n${lock}`,`Project: ${p.name}\nShots: ${JSON.stringify((p.shots||[]).map(s=>({num:s.num,scene:s.scene,type:s.type,desc:s.description}))).substring(0,2000)}\nReturn JSON: [{"num":"01","scene":"","type":"","script":"dialogue OR NARRATIVE NOTE: desc","shot_description":"1-2 sentences","video_prompt":"[LOCK] + physical action 80-120 words","json":{"prompt":"same","image_url":"{{URL}}","duration":8,"aspect_ratio":"16:9","audio":"dialogue OR none","camera_motion":"static","motion_intensity":"low"}}]`,4000);
const parsed=JSON.parse(r.replace(/```json|```/g,'').trim());const p2=DB.getProject(S.pid);p2.vidPrompts=parsed;DB.saveProject(p2);render();toast(`${parsed.length} packages ready!`,'ok');}catch(e){toast(e.message,'err');}document.getElementById('vp-load')?.classList.remove('show');}

// ── STAGE 3, STEP 4: VIDEO ──
function sVidGen(p){
  const vps=p.vidPrompts||[];
  const vidDone=Object.values(S.vidState).filter(s=>s.status==='done').length;
  const audDone=Object.values(S.audioState).filter(s=>s?.status==='done').length;
  return`<div class="ptitle">Animate</div>
<div class="psub">Animate each storyboard frame — per-card model, duration, prompt, and audio controls.</div>
<!-- Global controls row -->
<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;background:var(--bg2);border:1px solid var(--b1);border-radius:8px;padding:10px 12px;margin-bottom:14px">
<div style="display:flex;align-items:center;gap:6px">
<span style="font-size:9px;color:var(--t4);text-transform:uppercase">Global model</span>
<select id="v-model-global" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:4px 7px;border-radius:4px;font-size:9px">
${VIDEO_MODELS.map(m=>`<option value="${m.id}" ${S.vidModel?.id===m.id?'selected':''}>${m.n}</option>`).join('')}
</select>
</div>
<div style="display:flex;align-items:center;gap:6px">
<span style="font-size:9px;color:var(--t4);text-transform:uppercase">Default dur</span>
<select id="v-dur" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:4px 7px;border-radius:4px;font-size:9px">
<option value="5">5s</option><option value="8" selected>8s</option><option value="10">10s</option>
</select>
</div>
<div style="display:flex;align-items:center;gap:6px">
<span style="font-size:9px;color:var(--t4);text-transform:uppercase">Ratio</span>
<select id="v-rat" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:4px 7px;border-radius:4px;font-size:9px">
<option value="21:9">21:9</option><option value="16:9" selected>16:9</option><option value="9:16">9:16</option><option value="4:3">4:3</option>
</select>
</div>
<button class="btn btn-gold" onclick="genAllVids()" id="btn-vids" style="margin-left:auto">✦ Animate All</button>
<button class="btn btn-outline" onclick="resumeVids()">Resume</button>
<button class="btn btn-red btn-sm" onclick="S.stopVid=true">■ Stop</button>
<button class="btn btn-ghost btn-sm" onclick="goStep(3)">← Prompts</button>
</div>
<!-- Progress -->
<div class="prog-wrap show" id="vid-prog" style="margin-bottom:12px"><div class="prog-info"><span id="vid-pt">${vidDone}/${vps.length}</span><span id="vid-pct">${vps.length?Math.round(vidDone/vps.length*100):0}%</span></div><div class="prog-track"><div class="prog-fill" id="vid-pf" style="width:${vps.length?Math.round(vidDone/vps.length*100):0}%"></div></div></div>
<!-- Per-shot animate cards -->
<div style="display:flex;flex-direction:column;gap:12px">
${vps.map(vp=>{
  const vs=S.vidState[vp.num]||{};
  const as=S.audioState[vp.num]||{};
  const sbImg=S.sbState[vp.num]?.img||'';
  const hasVid=!!(vs.url);const hasAud=!!(as.url);
  const statusCol=vs.status==='done'?'var(--green)':vs.status==='gen'?'var(--gold)':vs.status==='error'?'var(--red)':'var(--b3)';
  const audCol=as.status==='done'?'var(--green)':as.status==='gen'?'var(--gold)':'var(--b3)';
  return`<div class="vpc" id="vvc-${vp.num}" style="border-radius:10px;overflow:visible">
<!-- Card header -->
<div class="vph" style="padding:9px 13px;display:flex;align-items:center;gap:8px">
<span class="sn2">S${vp.num}</span>
<span style="font-size:9px;color:var(--t4);flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(vp.scene||'')}</span>
<span style="font-size:8px;background:var(--bg4);color:${statusCol};padding:2px 6px;border-radius:3px;border:1px solid ${statusCol}44" id="vvb-${vp.num}">${vs.status||'idle'}</span>
<span style="font-size:8px;background:var(--bg4);color:${audCol};padding:2px 6px;border-radius:3px;border:1px solid ${audCol}44">♪ ${as.status||'idle'}</span>
</div>
<!-- Main card body: 3-column layout -->
<div style="display:grid;grid-template-columns:180px 1fr 1fr;gap:0;border-top:1px solid var(--b1)">
<!-- Col 1: Storyboard frame -->
<div style="border-right:1px solid var(--b1);padding:10px;display:flex;flex-direction:column;gap:7px">
<div style="font-size:8px;font-weight:700;color:var(--t4);text-transform:uppercase;margin-bottom:2px">Source Frame</div>
<div style="aspect-ratio:16/9;background:var(--bg4);border-radius:5px;overflow:hidden;cursor:zoom-in" onclick="openImgModal('S${vp.num}','${sbImg}')">
${sbImg?`<img src="${sbImg}" style="width:100%;height:100%;object-fit:cover;"/>`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--b3);font-size:18px">◇</div>'}
</div>
${sbImg?`<button onclick="dlImg('${sbImg}','S${vp.num}_frame.jpg')" class="btn btn-ghost btn-sm" style="font-size:8px;width:100%">↓ Frame HiRes</button>`:''}
<!-- Per-card model + settings -->
<div style="font-size:8px;font-weight:700;color:var(--t4);text-transform:uppercase;margin-top:4px">Model</div>
<select id="vm-${vp.num}" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:4px;border-radius:4px;font-size:8px;width:100%">
${VIDEO_MODELS.map(m=>`<option value="${m.id}" ${S.vidModel?.id===m.id?'selected':''}>${m.n.split(' ')[0]} ${m.n.split(' ')[1]||''}</option>`).join('')}
</select>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:5px">
<div><div style="font-size:8px;color:var(--t4);margin-bottom:2px">Secs</div>
<select id="vd-${vp.num}" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:3px;border-radius:4px;font-size:8px;width:100%">
<option ${(vp.json?.duration||8)===5?'selected':''}>5</option>
<option ${(vp.json?.duration||8)===8?'selected':'selected'}>8</option>
<option ${(vp.json?.duration||8)===10?'selected':''}>10</option>
</select></div>
<div><div style="font-size:8px;color:var(--t4);margin-bottom:2px">Ratio</div>
<select id="vr-${vp.num}" style="background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:3px;border-radius:4px;font-size:8px;width:100%">
<option ${(vp.json?.aspect_ratio||'16:9')==='21:9'?'selected':''}>21:9</option>
<option ${(vp.json?.aspect_ratio||'16:9')==='16:9'?'selected':'selected'}>16:9</option>
<option ${(vp.json?.aspect_ratio||'16:9')==='9:16'?'selected':''}>9:16</option>
</select></div>
</div>
</div>
<!-- Col 2: Video prompt + animate -->
<div style="border-right:1px solid var(--b1);padding:10px;display:flex;flex-direction:column;gap:7px">
<div style="display:flex;align-items:center;justify-content:space-between">
<div style="font-size:8px;font-weight:700;color:var(--t4);text-transform:uppercase">Video Prompt</div>
<button onclick="rewriteVidPrompt('${vp.num}')" style="background:none;border:none;color:var(--gold);font-size:8px;cursor:pointer;padding:0">✦ Rewrite</button>
</div>
<textarea id="vprt-${vp.num}" rows="6" data-vp="${vps.indexOf(vp)}.video_prompt" style="font-size:9px;line-height:1.6;flex:1;min-height:100px;font-family:Arial,sans-serif;resize:vertical">${esc(vp.video_prompt||'')}</textarea>
<div style="font-size:8px;color:var(--t4)">Script: <span style="color:var(--t3)">${esc((vp.script||'').substring(0,80)+(( vp.script||'').length>80?'…':''))}</span></div>
<!-- Animate controls -->
<div style="display:flex;gap:5px">
<button class="btn btn-gold" style="flex:1" onclick="singleVid('${vp.num}')">▶ Animate</button>
${hasVid?`<a href="${vs.url}" download="S${vp.num}.mp4" class="btn btn-ghost btn-sm">↓</a>`:''}
</div>
<!-- Video output -->
<div id="vvid-${vp.num}" style="border-radius:5px;overflow:hidden;background:var(--bg4);min-height:60px;display:flex;align-items:center;justify-content:center">
${vs.url?`<video src="${vs.url}" controls style="width:100%;border-radius:5px"></video>`:'<div style="font-size:10px;color:var(--b3)">◇ not generated</div>'}
</div>
</div>
<!-- Col 3: Audio -->
<div style="padding:10px;display:flex;flex-direction:column;gap:7px">
<div style="display:flex;align-items:center;justify-content:space-between">
<div style="font-size:8px;font-weight:700;color:var(--t4);text-transform:uppercase">Audio</div>
<button onclick="suggestAudio('${vp.num}')" style="background:none;border:none;color:var(--gold);font-size:8px;cursor:pointer;padding:0">✦ Suggest</button>
</div>
<!-- Audio type toggle -->
<div style="display:flex;gap:4px">
<button id="aty-${vp.num}" onclick="toggleAudioType('${vp.num}')" style="font-size:8px;padding:2px 8px;border-radius:12px;border:1px solid var(--b2);background:var(--bg4);color:var(--t3);cursor:pointer">${vp.json?.audio&&vp.json.audio!=='none'?'Dialogue':'SFX'}</button>
<span id="atyv-${vp.num}" style="font-size:8px;color:var(--t4);align-self:center">${vp.json?.audio&&vp.json.audio!=='none'?'voice acting':'sound effects'}</span>
</div>
<!-- Voice selector (shown for dialogue) -->
<div id="avoice-${vp.num}" style="display:${vp.json?.audio&&vp.json.audio!=='none'?'block':'none'}">
<div style="font-size:8px;color:var(--t4);margin-bottom:3px">Voice</div>
<select id="alv-${vp.num}" style="width:100%;background:var(--bg4);border:1px solid var(--b2);color:var(--t1);padding:4px;border-radius:4px;font-size:9px">
<option value="21m00Tcm4TlvDq8ikWAM">Rachel — warm, F</option>
<option value="9BWtsMINqrJLrRacOk9x">Aria — expressive, F</option>
<option value="EXAVITQu4vr4xnSDxMaL">Sarah — soft, F</option>
<option value="TxGEqnHWrfWFTfGW9XjX">Josh — deep, M</option>
<option value="ErXwobaYiN019PkySvjV">Antoni — warm, M</option>
<option value="pNInz6obpgDQGcFmaJgB">Adam — authoritative, M</option>
<option value="2EiwWnXFnvU5JabPnv8n">Clyde — dramatic, M</option>
<option value="onwK4e9ZLuTAKqWW03F9">Daniel — narrative, M</option>
</select>
</div>
<!-- Audio text -->
<textarea id="al-${vp.num}" rows="4" style="font-size:9px;line-height:1.5;font-family:Arial,sans-serif;resize:vertical" placeholder="${vp.json?.audio&&vp.json.audio!=='none'?'Dialogue text…':'Describe the sound: footsteps on gravel, traffic noise, engine hum…'}">${esc(vp.json?.audio&&vp.json.audio!=='none'?vp.json.audio:vp.shot_description?.substring(0,60)||'')}</textarea>
<!-- Suggest result -->
<div id="asuggest-${vp.num}" style="display:none;font-size:9px;color:var(--gold);background:#0e0a18;border:1px solid rgba(255,107,53,0.18);border-radius:5px;padding:6px 8px;line-height:1.6"></div>
<button class="btn btn-green" style="width:100%" onclick="genShotAudio('${vp.num}')">♪ Generate Audio</button>
<audio id="ala-${vp.num}" controls style="width:100%;display:${as.url?'block':'none'};margin-top:2px" ${as.url?`src="${as.url}"`:''}></audio>
${hasAud?`<button onclick="downloadAudio('${vp.num}')" class="btn btn-ghost btn-sm" style="font-size:8px;width:100%">↓ Audio</button>`:''}
</div>
</div>
</div>`;}).join('')}
${!vps.length?`<div style="background:var(--bg2);border:1px dashed var(--b2);border-radius:8px;padding:30px;text-align:center;color:var(--t4)">Generate video prompts in Step 3 first, then come back to animate.</div>`:''}
</div>
<div class="btn-row" style="margin-top:14px">
<button class="btn btn-ghost btn-sm" onclick="goStep(3)">← Prompts</button>
<button class="btn btn-gold" onclick="goStep(5)">Audio →</button>
<button class="btn btn-ghost btn-sm" onclick="dlAllVids()">↓ All Videos</button>
</div>`;
}

// ── Per-shot video + audio helpers ──

async function rewriteVidPrompt(num){
  if(!kC()){toast('Enter Claude key in Settings','err');return;}
  const p=DB.getProject(S.pid);if(!p)return;
  const vp=p.vidPrompts?.find(x=>x.num===num);if(!vp)return;
  const ta=document.getElementById(`vprt-${num}`);
  if(ta)ta.style.opacity='0.4';
  const lock=p.continuityLock||'';
  const model=VIDEO_MODELS.find(m=>m.id===document.getElementById(`vm-${num}`)?.value)||S.vidModel;
  const rules=VEO_RULES.filter(r=>S.rules[r.id]).map(r=>r.d).join(' ');
  try{
    const r=await callClaude(
      'You are a video prompt engineer. Write tight, action-only video generation prompts. Physical action, camera, lighting only — no dialogue, no audio cues.',
      `Rewrite this video prompt for ${model?.n||'video model'} model.\n\nSHOT: ${vp.scene}\nTYPE: ${vp.type}\nDESCRIPTION: ${vp.shot_description}\nSCRIPT: ${vp.script}\n${lock?'CONTINUITY LOCK: '+lock+'\n':''}ACTIVE RULES: ${rules}\n\nCurrent prompt: ${vp.video_prompt}\n\nRewrite as a single 80-120 word paragraph: physical action, camera motion, lighting, atmosphere. No dialogue. No audio cues. Start directly with the visual action.`,
      600
    );
    if(ta){ta.value=r;ta.style.opacity='1';}
    const idx=p.vidPrompts.findIndex(x=>x.num===num);
    if(idx>=0)p.vidPrompts[idx].video_prompt=r;
    DB.saveProject(p);toast('Prompt rewritten!','ok');
  }catch(e){if(ta)ta.style.opacity='1';toast(e.message,'err');}
}

async function suggestAudio(num){
  if(!kC()){toast('Enter Claude key in Settings','err');return;}
  const p=DB.getProject(S.pid);if(!p)return;
  const vp=p.vidPrompts?.find(x=>x.num===num);if(!vp)return;
  const suggEl=document.getElementById(`asuggest-${num}`);
  if(suggEl){suggEl.style.display='block';suggEl.textContent='Analysing shot…';}
  try{
    const r=await callClaude(
      'You are an audio director. Analyse shots and recommend precise audio for video production. Return ONLY valid JSON.',
      `Recommend audio for this shot.\n\nSHOT ${num}: ${vp.scene}\nSCRIPT LINE: ${vp.script}\nDESCRIPTION: ${vp.shot_description}\n\nReturn JSON:\n{\n  "type": "dialogue" or "sfx",\n  "text": "exact dialogue text if type=dialogue, OR detailed SFX description if type=sfx (e.g. \'city traffic, distant horns, wind through trees\')",\n  "voice_id": "one of: 21m00Tcm4TlvDq8ikWAM|9BWtsMINqrJLrRacOk9x|EXAVITQu4vr4xnSDxMaL|TxGEqnHWrfWFTfGW9XjX|ErXwobaYiN019PkySvjV|pNInz6obpgDQGcFmaJgB|2EiwWnXFnvU5JabPnv8n|onwK4e9ZLuTAKqWW03F9",\n  "voice_name": "Rachel|Aria|Sarah|Josh|Antoni|Adam|Clyde|Daniel",\n  "rationale": "one sentence why"\n}`,
      400
    );
    const d=JSON.parse(r.replace(/```json|```/g,'').trim());
    // Apply suggestion to UI
    const typeBtn=document.getElementById(`aty-${num}`);
    const typeLabel=document.getElementById(`atyv-${num}`);
    const voicePanel=document.getElementById(`avoice-${num}`);
    const voiceSel=document.getElementById(`alv-${num}`);
    const textTA=document.getElementById(`al-${num}`);
    if(typeBtn)typeBtn.textContent=d.type==='dialogue'?'Dialogue':'SFX';
    if(typeLabel)typeLabel.textContent=d.type==='dialogue'?'voice acting':'sound effects';
    if(voicePanel)voicePanel.style.display=d.type==='dialogue'?'block':'none';
    if(voiceSel&&d.voice_id)voiceSel.value=d.voice_id;
    if(textTA)textTA.value=d.text||'';
    if(suggEl)suggEl.innerHTML=`<strong style="color:var(--t1)">${d.type==='dialogue'?'💬 Dialogue':'♪ SFX'}</strong> · Voice: ${esc(d.voice_name||'—')}<br><span style="color:var(--t4)">${esc(d.rationale||'')}</span>`;
    // Store type hint on vp
    const idx=p.vidPrompts.findIndex(x=>x.num===num);
    if(idx>=0){if(!p.vidPrompts[idx].json)p.vidPrompts[idx].json={};p.vidPrompts[idx].json.audio=d.type==='dialogue'?d.text:'none';p.vidPrompts[idx]._audioSuggestion=d;}
    DB.saveProject(p);toast('Audio suggestion ready','ok');
  }catch(e){
    if(suggEl)suggEl.textContent='Suggestion failed: '+e.message;
    toast(e.message,'err');
  }
}

function toggleAudioType(num){
  const btn=document.getElementById(`aty-${num}`);
  const label=document.getElementById(`atyv-${num}`);
  const panel=document.getElementById(`avoice-${num}`);
  const ta=document.getElementById(`al-${num}`);
  const isNowSfx=btn&&btn.textContent==='Dialogue';
  if(btn)btn.textContent=isNowSfx?'SFX':'Dialogue';
  if(label)label.textContent=isNowSfx?'sound effects':'voice acting';
  if(panel)panel.style.display=isNowSfx?'none':'block';
  if(ta)ta.placeholder=isNowSfx?'Describe the sound: footsteps on gravel, engine hum, ambient crowd…':'Dialogue text…';
}

async function genShotAudio(num){
  const k=kE();if(!k){toast('Enter ElevenLabs key in Settings','err');return;}
  const typeBtn=document.getElementById(`aty-${num}`);
  const isDialogue=typeBtn?.textContent==='Dialogue';
  const txt=document.getElementById(`al-${num}`)?.value.trim();
  const voice=document.getElementById(`alv-${num}`)?.value||'21m00Tcm4TlvDq8ikWAM';
  if(!txt){toast('Enter audio text/description first','err');return;}
  const prevStatus=S.audioState[num]?.status;
  S.audioState[num]={status:'gen'};
  const statusEl=document.querySelector(`#vvc-${num} .vph span:last-child`);
  try{
    let blob;
    if(isDialogue){
      const r=await elFetch(`/v1/text-to-speech/${voice}`,{text:txt,model_id:'eleven_multilingual_v2',voice_settings:{stability:.5,similarity_boost:.8,style:0.3,use_speaker_boost:true}});
      blob=await r.blob();
    }else{
      const r=await elFetch('/v1/sound-generation',{text:txt,duration_seconds:parseFloat(document.getElementById(`vd-${num}`)?.value||8),prompt_influence:.4});
      blob=await r.blob();
    }
    // Convert blob to base64 for persistent storage (audio ~100-300KB, fine in DB)
    const b64Audio = await new Promise(res=>{const fr=new FileReader();fr.onload=e=>res(e.target.result);fr.readAsDataURL(blob);});
    S.audioState[num]={url:b64Audio,status:'done',type:isDialogue?'dialogue':'sfx',text:txt};
    const aud=document.getElementById(`ala-${num}`);
    if(aud){aud.src=b64Audio;aud.style.display='block';}
    toast('Audio ready S'+num,'ok');
    const p=DB.getProject(S.pid);if(p){p.audioState=S.audioState;DB.saveProject(p);}
    render();
  }catch(e){
    S.audioState[num]={status:'error'};
    toast(e.message,'err');
    render();
  }
}

function downloadAudio(num){
  const url=S.audioState[num]?.url;if(!url){toast('No audio generated','err');return;}
  const a=document.createElement('a');a.href=url;a.download='S'+num+'_audio.mp3';a.click();
}

async function genAllVids(){const p=DB.getProject(S.pid);if(!p)return;if(!S.vidModel){toast('Select model in Step 1','err');return}S.stopVid=false;document.getElementById('btn-vids').disabled=true;for(const vp of p.vidPrompts){if(S.stopVid)break;if(S.vidState[vp.num]?.status==='done')continue;await doVid(p,vp);}document.getElementById('btn-vids').disabled=false;if(!S.stopVid)toast('Videos done!','ok');}
async function resumeVids(){S.stopVid=false;const p=DB.getProject(S.pid);if(!p)return;for(const vp of p.vidPrompts){if(S.stopVid)break;const st=S.vidState[vp.num]?.status;if(!st||st==='idle'||st==='error')await doVid(p,vp);}}
async function singleVid(num){
  S.stopVid=false;const p=DB.getProject(S.pid);if(!p)return;
  // Save any prompt edits from the textarea before generating
  const ta=document.getElementById(`vprt-${num}`);
  const vp=p.vidPrompts.find(x=>x.num===num);if(!vp)return;
  if(ta)vp.video_prompt=ta.value;
  DB.saveProject(p);
  await doVid(p,vp);
}
async function doVid(p,vp){
  S.vidState[vp.num]={status:'gen'};setVb(vp.num,'gen','gen...');
  const imgUrl=S.sbState[vp.num]?.img||'';
  // Per-card overrides, fall back to global selectors
  const modelId=document.getElementById(`vm-${vp.num}`)?.value||S.vidModel?.id;
  const dur=document.getElementById(`vd-${vp.num}`)?.value||document.getElementById('v-dur')?.value||8;
  const rat=document.getElementById(`vr-${vp.num}`)?.value||document.getElementById('v-rat')?.value||'16:9';
  const prompt=document.getElementById(`vprt-${vp.num}`)?.value||vp.video_prompt;
  // Use per-card model
  const prevModel=S.vidModel;
  if(modelId){const m=VIDEO_MODELS.find(x=>x.id===modelId);if(m)S.vidModel=m;}
  try{
    for(let a=0;a<=2;a++){
      try{
        const rawUrl=await falVid(imgUrl,prompt,dur,rat);const url=await persistVideo(rawUrl);
        S.vidState[vp.num]={url,status:'done',frameUrl:imgUrl,modelId,dur,rat};
        setVb(vp.num,'done','done');setVv(vp.num,url);
        break;
      }catch(e){if(a>=2||S.stopVid)throw e;await sleep(2000);}
    }
  }catch(e){S.vidState[vp.num]={status:'error'};setVb(vp.num,'error','error');}
  S.vidModel=prevModel;
  const done=Object.values(S.vidState).filter(s=>s.status==='done').length;
  const tot=p.vidPrompts.length;const pct=tot?Math.round(done/tot*100):0;
  const pf=document.getElementById('vid-pf');const pt=document.getElementById('vid-pt');const pp=document.getElementById('vid-pct');
  if(pf)pf.style.width=pct+'%';if(pt)pt.textContent=done+'/'+tot;if(pp)pp.textContent=pct+'%';
  document.getElementById('st-v').textContent=done+' videos';
  p.vidState=S.vidState;DB.saveProject(p);
}
function setVb(num,cls,txt){const el=document.getElementById(`vvb-${num}`);if(el){el.style.background=cls==='done'?'#041004':cls==='gen'?'#1a0f00':'var(--bg4)';el.style.color=cls==='done'?'var(--green)':cls==='gen'?'var(--gold)':cls==='error'?'var(--red)':'var(--t4)';el.textContent=txt;}}
function setVv(num,url){const el=document.getElementById(`vvid-${num}`);if(el)el.innerHTML=`<video src="${url}" controls></video>`;}

// ── STAGE 3, STEP 5: AUDIO ──
function sAudio(p){
  const vps=p.vidPrompts||[];
  return`<div class="ptitle">Audio — ElevenLabs</div><div class="psub">Dialogue, SFX, background music, voice-over</div>
<div class="card" style="margin-bottom:10px"><div class="card-head"><span class="card-title">MASTER AUDIO</span></div><div class="card-body">
<div class="form2">
<div class="fg"><label>Music Style</label><select id="mus-st"><option value="cinematic orchestral strings build">Cinematic Orchestral</option><option value="dark comedy quirky pizzicato">Dark Comedy</option><option value="minimal atmospheric piano">Minimal Piano</option><option value="jazz sophisticated lounge">Jazz</option><option value="electronic ambient drone">Electronic</option></select></div>
<div class="fg"><label>VO Voice</label><select id="vo-v"><option value="21m00Tcm4TlvDq8ikWAM">Rachel (warm, F)</option><option value="TxGEqnHWrfWFTfGW9XjX">Josh (deep, M)</option></select></div>
</div>
<div class="fg"><label>Voice-Over Text</label><textarea id="vo-txt" rows="2" placeholder="Narrator text or tagline..."></textarea></div>
<div class="btn-row"><button class="btn btn-green" onclick="genAllAudio()">✦ All Audio</button><button class="btn btn-outline" onclick="genMusic()">♪ Music</button><button class="btn btn-outline" onclick="genVO()">♬ VO</button><span id="aud-st" style="font-size:9px;color:var(--t4)"></span></div>
<div class="form2" style="margin-top:10px">
<div><div style="font-size:8px;color:var(--t4);margin-bottom:2px">BACKGROUND MUSIC</div><audio id="mus-pl" controls></audio><div id="mus-st2" style="font-size:9px;color:var(--t4);margin-top:2px">Not generated</div></div>
<div><div style="font-size:8px;color:var(--t4);margin-bottom:2px">VOICE-OVER</div><audio id="vo-pl" controls></audio><div id="vo-st" style="font-size:9px;color:var(--t4);margin-top:2px">Not generated</div></div>
</div></div></div>
<div class="section-lbl">Per-Shot Audio</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:8px">
${vps.map(vp=>{const hasDial=vp.json?.audio&&vp.json.audio!=='none';const as=S.audioState[vp.num]||{};return`<div class="ac3"><div class="ach"><span style="font-size:10px;font-weight:700;color:${hasDial?'var(--green)':'var(--t4)'}">S${vp.num} · ${esc((vp.scene||'').substring(0,10))}</span><span class="ast ast-${as.status||'idle'}" id="ast-${vp.num}">${as.status||'idle'}</span></div>
<div class="acb">
${hasDial?`<span class="aclbl">Dialogue</span><textarea rows="2" id="al-${vp.num}">${esc(vp.json?.audio||'')}</textarea><select id="alv-${vp.num}"><option value="21m00Tcm4TlvDq8ikWAM">Rachel</option><option value="TxGEqnHWrfWFTfGW9XjX">Josh</option></select><button class="btn btn-green btn-sm" style="width:100%;margin-top:4px" onclick="genDialogue('${vp.num}')">♬ TTS</button>`:
`<span class="aclbl">SFX Prompt</span><textarea rows="2" id="al-${vp.num}">${esc(vp.shot_description?.substring(0,40)||'')}</textarea><button class="btn btn-outline btn-sm" style="width:100%;margin-top:4px" onclick="genSFX('${vp.num}')">♪ SFX</button>`}
<audio id="ala-${vp.num}" controls style="display:none;margin-top:4px"></audio>
</div></div>`;}).join('')}
${!vps.length?'<div style="color:var(--t4);font-size:10px;padding:8px;grid-column:1/-1">Generate video prompts first.</div>':''}
</div>
<div class="btn-row" style="margin-top:10px"><button class="btn btn-ghost btn-sm" onclick="goStep(4)">←</button><button class="btn btn-gold" onclick="goStep(6)">Assembly →</button></div>`;
}
async function genDialogue(num){const txt=document.getElementById(`al-${num}`)?.value.trim();const voice=document.getElementById(`alv-${num}`)?.value;if(!txt)return;setAst(num,'gen','gen...');try{const r=await elFetch(`/v1/text-to-speech/${voice}`,{text:txt,model_id:'eleven_multilingual_v2',voice_settings:{stability:.5,similarity_boost:.8}});const blob=await r.blob();const url=URL.createObjectURL(blob);const a=document.getElementById(`ala-${num}`);if(a){a.src=url;a.style.display='block';}S.audioState[num]={url,status:'done'};setAst(num,'done','done');}catch(e){setAst(num,'err','error');toast(e.message,'err');}}
async function genSFX(num){const txt=document.getElementById(`al-${num}`)?.value.trim();if(!txt)return;setAst(num,'gen','gen...');try{const r=await elFetch('/v1/sound-generation',{text:txt,duration_seconds:6,prompt_influence:.3});const blob=await r.blob();const url=URL.createObjectURL(blob);const a=document.getElementById(`ala-${num}`);if(a){a.src=url;a.style.display='block';}S.audioState[num]={url,status:'done'};setAst(num,'done','done');}catch(e){setAst(num,'err','error');toast(e.message,'err');}}
async function genAllAudio(){const p=DB.getProject(S.pid);if(!p)return;for(const vp of p.vidPrompts){const hd=vp.json?.audio&&vp.json.audio!=='none';if(hd)await genDialogue(vp.num);else await genSFX(vp.num);await sleep(200);}toast('Audio done!','ok');}
async function genMusic(){document.getElementById('mus-st2').textContent='Generating...';try{const style=document.getElementById('mus-st')?.value;const r=await elFetch('/v1/sound-generation',{text:`${style} music for professional media production`,duration_seconds:60,prompt_influence:.3});const blob=await r.blob();document.getElementById('mus-pl').src=URL.createObjectURL(blob);document.getElementById('mus-st2').textContent='✓ Ready';toast('Music ready!','ok');}catch(e){document.getElementById('mus-st2').textContent='Error';toast(e.message,'err');}}
async function genVO(){const txt=document.getElementById('vo-txt')?.value.trim();if(!txt){toast('Enter VO text first','err');return}document.getElementById('vo-st').textContent='Generating...';try{const voice=document.getElementById('vo-v')?.value;const r=await elFetch(`/v1/text-to-speech/${voice}`,{text:txt,model_id:'eleven_multilingual_v2',voice_settings:{stability:.6,similarity_boost:.75}});const blob=await r.blob();document.getElementById('vo-pl').src=URL.createObjectURL(blob);document.getElementById('vo-st').textContent='✓ Ready';toast('VO ready!','ok');}catch(e){document.getElementById('vo-st').textContent='Error';toast(e.message,'err');}}
function setAst(num,cls,txt){const el=document.getElementById(`ast-${num}`);if(el){el.className='ast ast-'+cls;el.textContent=txt;}}

// ── STAGE 3, STEP 6: ASSEMBLY ──
function sAssembly(p){
  const vps=p.vidPrompts||[];const sbDone=Object.values(S.sbState).filter(s=>s.status==='done').length;const vidDone=Object.values(S.vidState).filter(s=>s.status==='done').length;const audDone=Object.values(S.audioState).filter(s=>s?.status==='done').length;
  return`<div class="ptitle">Assembly & Export</div>
<div class="card" style="margin-bottom:10px"><div class="card-head"><span class="card-title">SUMMARY</span></div><div class="card-body">
<div style="font-size:10px;color:var(--t3);line-height:1.9">
<strong style="color:var(--gold)">${esc(p.name)}</strong> · ${MT[p.type]?.label}<br>
Shots: ${(p.shots||[]).length} · Storyboard: ${sbDone} frames · Videos: ${vidDone} clips · Audio: ${audDone} tracks<br>
Model: ${S.vidModel?.n||'none'} · Client: ${p.clientId?DB.getUser(p.clientId)?.name||'—':'—'}<br>
Workflow: <span style="color:${p.workflowStatus==='complete'?'var(--green)':'var(--gold)'}">${(p.workflowStatus||'—').replace(/_/g,' ')}</span>
${p.storyboardReleased?'<br><span style="color:var(--green)">✓ Storyboard released to client</span>':''}
</div></div></div>
<div class="section-lbl">Export</div>
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">
<button class="btn btn-outline" onclick="expScript()">Script .txt</button>
<button class="btn btn-outline" onclick="expVidPrompts()">Video Prompts .txt</button>
<button class="btn btn-green" onclick="dlAllVids()">Download All Videos</button>
<button class="btn btn-gold" onclick="expReport()">Full Report</button>
${!p.storyboardReleased?`<button class="btn btn-blue" onclick="releaseStoryboard(S.pid)">Release Storyboard to Client</button>`:`<span class="badge badge-green" style="align-self:center">Storyboard released ✓</span>`}
</div>
<div style="display:flex;flex-direction:column;gap:8px">
${vps.map(vp=>{const vs=S.vidState[vp.num]||{};const as=S.audioState[vp.num]||{};return`<div class="vpc"><div class="vph"><span class="sn2">S${vp.num}</span><span style="font-size:9px;color:var(--t4);flex:1">${esc(vp.scene||'')}</span>
<span style="font-size:8px;padding:2px 5px;border-radius:3px;background:${vs.url?'#041004':'var(--bg4)'};color:${vs.url?'var(--green)':'var(--t4)'}">video ${vs.url?'✓':'—'}</span>
<span style="font-size:8px;padding:2px 5px;border-radius:3px;background:${as.url?'#041004':'var(--bg4)'};color:${as.url?'var(--green)':'var(--t4)'}">audio ${as.url?'✓':'—'}</span></div>
<div style="display:grid;grid-template-columns:1fr 1fr;padding:8px;gap:9px">
<div>${vs.url?`<video src="${vs.url}" controls style="width:100%;border-radius:4px"></video>`:'<div style="aspect-ratio:16/9;background:var(--bg4);border-radius:4px;display:flex;align-items:center;justify-content:center;color:var(--b3)">◇</div>'}</div>
<div><div style="font-size:8px;color:var(--t4);margin-bottom:3px">SCRIPT</div><div style="font-size:10px;color:var(--t3);line-height:1.4;margin-bottom:6px">${esc(vp.script||'—')}</div>
${as.url?`<audio src="${as.url}" controls style="width:100%;height:20px"></audio>`:''}</div>
</div></div>`;}).join('')}
</div>`;
}

function openCanvaForDesign(pid){
  const p=DB.getProject(pid||S.pid);if(!p)return;
  const brief={...p.clientBrief,...p.brief};
  const designType=brief.design_type||'design';
  const size=brief.size||'';
  const query=`${designType} for ${brief.brand||p.name}${size?' ('+size+')':''}`;
  toast('Opening Canva…','info');
  // Use Canva MCP if available, otherwise open Canva with a pre-filled query
  try{
    // Trigger Canva design generation via the UI
    const evt=new CustomEvent('studio-open-canva',{detail:{pid,query,designType,brief}});
    document.dispatchEvent(evt);
  }catch(e){}
  // Fallback: open Canva in new tab with search
  window.open('https://www.canva.com/search?q='+encodeURIComponent(query),'_blank');
}
function expScript(){const p=DB.getProject(S.pid);if(!p)return;dlTxt(`${p.name} — SCRIPT\n\n${p.script||''}`,p.name.replace(/\s+/g,'_')+'_script.txt');}
function expVidPrompts(){const p=DB.getProject(S.pid);if(!p)return;dlTxt(`${p.name} — VIDEO PROMPTS\n\n`+(p.vidPrompts||[]).map(vp=>`S${vp.num}: ${vp.scene}\nSCRIPT: ${vp.script}\nVIDEO: ${vp.video_prompt}\n`).join('\n'),p.name.replace(/\s+/g,'_')+'_vid_prompts.txt');}
function expReport(){const p=DB.getProject(S.pid);if(!p)return;const cl=p.clientId?DB.getUser(p.clientId):null;dlTxt(`THE STUDIO — PROJECT REPORT\n${'='.repeat(60)}\n\nProject: ${p.name}\nProject ID: ${p.projectId||'—'}\nClient: ${cl?.name||'—'} (${cl?.clientId||'—'})\nType: ${MT[p.type]?.label}\nWorkflow: ${p.workflowStatus}\n\nSYNOPSIS:\n${p.synopsisRevisions?.slice(-1)[0]?.text||'Not generated'}\n\nSCRIPT:\n${p.script||'Not generated'}\n\nPRODUCTION:\nShots: ${(p.shots||[]).length} | Storyboard: ${Object.values(S.sbState).filter(s=>s.status==='done').length} | Videos: ${Object.values(S.vidState).filter(s=>s.status==='done').length}`,p.name.replace(/\s+/g,'_')+'_report.txt');}
function dlAllSbHiRes(){
  const p=DB.getProject(S.pid);if(!p)return;
  const done=Object.entries(S.sbState).filter(([,s])=>s.status==='done'&&s.img);
  if(!done.length){toast('No frames generated yet','err');return;}
  done.forEach(([num,s],i)=>setTimeout(()=>dlImg(s.img,'S'+num+'_hires.jpg'),i*500));
  toast('Downloading '+done.length+' frames…','info');
}
function dlAllVids(){const p=DB.getProject(S.pid);if(!p)return;(p.vidPrompts||[]).filter(vp=>S.vidState[vp.num]?.url).forEach((vp,i)=>setTimeout(()=>dlImg(S.vidState[vp.num].url,'S'+vp.num+'.mp4'),i*600));toast('Downloading...','info');}

// ══════════════════════════════════════
// API — ELEVENLABS (server-side proxy)
// ══════════════════════════════════════
async function elFetch(path,body){
  aiStart();
  try{
  const k=kE(); // client key as fallback if server has no env var
  const r=await fetch('/api/elevenlabs',{
    method:'POST',
    headers:_authHeaders(),
    body:JSON.stringify({path,body,clientKey:k||undefined})
  });
  if(!r.ok){const d=await r.json().catch(()=>({error:'EL error '+r.status}));throw new Error(d.error||'EL '+r.status);}
  return r;
  }finally{aiEnd();}
}

// ══════════════════════════════════════
// SAVE INPUTS
// ══════════════════════════════════════
function saveInputs(){
  const p=DB.getProject(S.pid);if(!p)return;
  document.querySelectorAll('[data-bf]').forEach(el=>{if(!p.brief)p.brief={};p.brief[el.dataset.bf]=el.value;});
  const sc=document.getElementById('script-ta');if(sc)p.script=sc.value;
  document.querySelectorAll('[data-bible]').forEach(el=>{const[sec,i,key]=el.dataset.bible.split('.');if(!p.bible[sec])p.bible[sec]=[];if(!p.bible[sec][i])p.bible[sec][i]={};p.bible[sec][i][key]=el.value;});
  document.querySelectorAll('[data-shot]').forEach(el=>{const[idx,key]=el.dataset.shot.split('.');if(p.shots[idx])p.shots[idx][key]=el.value;});
  const cl=document.getElementById('lk-ta');if(cl)p.continuityLock=cl.value;
  document.querySelectorAll('[data-vp]').forEach(el=>{const[idx,key]=el.dataset.vp.split('.');if(p.vidPrompts[idx])p.vidPrompts[idx][key]=el.value;});
  const pn=document.getElementById('ph-n');if(pn)p.name=pn.value;
  const pw=document.getElementById('ph-wf');if(pw){const newWf=pw.value;if(newWf!==p.workflowStatus){if(!p.stageHistory)p.stageHistory=[];p.stageHistory.push({stage:newWf,enteredAt:new Date().toISOString()});}p.workflowStatus=newWf;}
  const dl=document.getElementById('ph-deadline');if(dl)p.deadline=dl.value||null;
  DB.saveProject(p);
}

// ══════════════════════════════════════
// API — CLAUDE
// ══════════════════════════════════════
async function callClaude(sys,user,max=3000,imgB64=null,imgType=null){
  aiStart();
  try{
  // Inject global + negative prompts from admin settings
  const _admin=getAdminUser();
  const _gp=(_admin?.globalPrompt||'').trim();
  const _np=(_admin?.negativePrompt||'').trim();
  if(_gp) sys=_gp+'\n\n'+sys;
  if(_np) sys=sys+'\n\nDO NOT: '+_np;
  const k=kC(); // client-side key (may be empty if server has CLAUDE_API_KEY env var)
  const content=[];if(imgB64&&imgType)content.push({type:'image',source:{type:'base64',media_type:imgType,data:imgB64}});content.push({type:'text',text:user});
  const payload=JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:max,system:sys,messages:[{role:'user',content}]});
  // Always route through server-side proxy (/api/claude) — avoids CORS, supports both env key and client key
  const headers=_authHeaders({'anthropic-version':'2023-06-01','content-type':'application/json'});
  if(k)headers['x-api-key']=k;
  const r=await fetch('/api/claude',{method:'POST',headers,body:payload});
  const d=await r.json();if(d.error)throw new Error(d.error.message||JSON.stringify(d.error));
  var _usedModel=d.model||'claude-sonnet-4-20250514';
  if(!window._modelLog)window._modelLog=[];
  window._modelLog.unshift({model:_usedModel,ts:new Date().toISOString(),in:d.usage&&d.usage.input_tokens?d.usage.input_tokens:0,out:d.usage&&d.usage.output_tokens?d.usage.output_tokens:0});
  if(window._modelLog.length>50)window._modelLog=window._modelLog.slice(0,50);
  return d.content&&d.content[0]?d.content[0].text||'':'';
  }finally{aiEnd();}
}

// ══════════════════════════════════════
// API — FAL.AI
// ══════════════════════════════════════
function falFetch(url,init){
  // Route through /api/fal server proxy (avoids CORS + protects API key)
  const method=(init?.method||'GET');
  const authorization=init?.headers?.['Authorization']||('Key '+kF());
  const body=init?.body?JSON.parse(init.body):undefined;
  return fetch('/api/fal',{
    method:'POST',
    headers:_authHeaders({'content-type':'application/json'}),
    body:JSON.stringify({url,method,body,...(authorization?{authorization}:{})})
  }).catch(function(e){
    console.error('[fal] proxy error:',e.message,'url=',url);
    throw e;
  });
}
async function falImg(prompt){
  aiStart();
  const k=kF(); // may be empty — server proxy has FAL_KEY env var as fallback
  if(S.stopSb)throw new Error('Stopped');
  const rat=S.imgAspect||document.getElementById('s-rat')?.value||'16:9';
  // Apply tone/quality to prompt if set
  const tone=S.imgTone||'photorealistic';
  const quality=S.imgQuality||'hd';
  const enhancedPrompt=prompt+(tone!=='photorealistic'?`. Style: ${tone}`:'')+(quality==='hd'?'. Ultra high detail, sharp focus.':'');
  // Check for active LoRA from selected trends
  const activeLoras=(S.selectedTrends||[])
    .map(id=>DB.getLDEntry(id))
    .filter(e=>e?.lora_model_id&&e?.lora_status==='ready');
  let model=S.imgModel||'fal-ai/flux-pro/v1.1-ultra';
  let body={prompt:enhancedPrompt,aspect_ratio:rat,output_format:'jpeg',safety_tolerance:'6'};
  if(activeLoras.length){
    model='fal-ai/flux-lora';
    const sizeMap={'21:9':'landscape_16_9','16:9':'landscape_16_9','4:3':'landscape_4_3','1:1':'square_hd','9:16':'portrait_16_9','3:4':'portrait_4_3'};
    body={prompt:enhancedPrompt,image_size:sizeMap[rat]||'landscape_16_9',output_format:'jpeg',loras:activeLoras.map(e=>({path:e.lora_model_id,scale:0.85})),model_name:'dev'};
  }
  const r=await falFetch(`https://queue.fal.run/${model}`,{method:'POST',headers:{'Authorization':`Key ${k}`,'Content-Type':'application/json'},body:JSON.stringify(body)});
  if(!r.ok){const t=await r.text();throw new Error(`fal ${r.status}: ${t.substring(0,80)}`)}
  const d=await r.json();if(!d.request_id)throw new Error('No request_id');
  const statusUrl=d.status_url||`https://queue.fal.run/${model}/requests/${d.request_id}/status`;const responseUrl=d.response_url||`https://queue.fal.run/${model}/requests/${d.request_id}`;
  for(let i=0;i<120;i++){await sleep(2200);if(S.stopSb){aiEnd();throw new Error('Stopped');}const rs=await falFetch(statusUrl,{headers:{'Authorization':`Key ${k}`}});const ds=await rs.json();if(ds.status==='COMPLETED'){aiEnd();const rr=await falFetch(responseUrl,{headers:{'Authorization':`Key ${k}`}});const rd=await rr.json();const u=rd.images?.[0]?.url||rd.image?.url||rd.output?.[0]||rd.output||rd.url||'';
      if(!u)throw new Error('No image URL — response: '+JSON.stringify(rd).substring(0,120));
      return u}if(ds.status==='FAILED'){aiEnd();throw new Error('fal generation failed: '+(ds.error||''));}}aiEnd();throw new Error('Timeout');
}
async function falImgI2I(imgUrl,prompt,strength){
  // FLUX img2img for multi-angle generation — preserves identity, changes angle
  if(S.stopSb)throw new Error('Stopped');
  const k=kF(); // may be empty — server proxy has FAL_KEY env var as fallback
  const rat=document.getElementById('s-rat')?.value||'1:1';
  const model='fal-ai/flux-pro/kontext';
  const body={image_url:imgUrl,prompt,aspect_ratio:rat,output_format:'jpeg',safety_tolerance:'6'};
  const r=await falFetch(`https://queue.fal.run/${model}`,{method:'POST',headers:{'Authorization':`Key ${k}`,'Content-Type':'application/json'},body:JSON.stringify(body)});
  if(!r.ok){const t=await r.text();throw new Error(`fal i2i ${r.status}: ${t.substring(0,80)}`)}
  const d=await r.json();if(!d.request_id)throw new Error('No request_id');
  const statusUrl=d.status_url||`https://queue.fal.run/${model}/requests/${d.request_id}/status`;const responseUrl=d.response_url||`https://queue.fal.run/${model}/requests/${d.request_id}`;
  for(let i=0;i<120;i++){await sleep(2200);const rs=await falFetch(statusUrl,{headers:{'Authorization':`Key ${k}`}});const ds=await rs.json();if(ds.status==='COMPLETED'){const rr=await falFetch(responseUrl,{headers:{'Authorization':`Key ${k}`}});const rd=await rr.json();const u=rd.images?.[0]?.url;if(!u)throw new Error('No image URL');return u}if(ds.status==='FAILED')throw new Error('i2i failed');}throw new Error('Timeout');
}
async function falVid(imgUrl,prompt,dur,ratio){
  const k=kF();if(!S.vidModel)throw new Error('No model'); // k may be empty — server proxy has FAL_KEY
  const r=await falFetch(`https://queue.fal.run/${S.vidModel.id}`,{method:'POST',headers:{'Authorization':`Key ${k}`,'Content-Type':'application/json'},body:JSON.stringify({image_url:imgUrl,prompt,duration:parseInt(dur,10),aspect_ratio:ratio})});
  if(!r.ok){const t=await r.text();throw new Error(`fal ${r.status}: ${t.substring(0,80)}`)}
  const d=await r.json();if(!d.request_id)throw new Error('No request_id');
  const statusUrl=d.status_url||`https://queue.fal.run/${S.vidModel.id}/requests/${d.request_id}/status`;const responseUrl=d.response_url||`https://queue.fal.run/${S.vidModel.id}/requests/${d.request_id}`;
  for(let i=0;i<120;i++){if(S.stopVid)throw new Error('Stopped');await sleep(3000);const rs=await falFetch(statusUrl,{headers:{'Authorization':`Key ${k}`}});const ds=await rs.json();if(ds.status==='COMPLETED'){const rr=await falFetch(responseUrl,{headers:{'Authorization':`Key ${k}`}});const rd=await rr.json();const u=rd.video?.url||rd.videos?.[0]?.url;if(!u)throw new Error('No video URL');return u}if(ds.status==='FAILED')throw new Error('Video generation failed');}throw new Error('Timeout');
}
async function checkQa(url,prompt,thresh){try{const b64=await urlToB64(url);if(!b64)return{pass:true};const r=await callClaude('Evaluate images for quality and prompt accuracy. Return JSON only: {"score":1-10,"pass":true/false,"feedback":"brief description of any issues found","issues":["issue1","issue2"]}',`Score 1-10 (pass if >= ${thresh}). Check for: anatomical errors, text rendering issues, missing elements, wrong colors, inconsistencies. Prompt: ${prompt.substring(0,200)}`,400,b64,'image/jpeg');const d=JSON.parse(r.replace(/```json|```/g,'').trim());return{score:d.score||5,pass:d.pass!==undefined?d.pass:(d.score||5)>=thresh,feedback:d.feedback||'',issues:d.issues||[]};}catch(e){return{pass:true};}}

// ══════════════════════════════════════
// HELPERS
// ══════════════════════════════════════
function wfMiniDots(p){const steps=['Brief','Synopsis','Locked','Storyboard','Review','Done'];const wf=p.workflowStatus||'new';const idx=['brief_submitted','synopsis_review','synopsis_locked','storyboard_in_progress','storyboard_review','complete'].indexOf(wf);return`<div style="display:flex;gap:3px;align-items:center">${steps.map((s,i)=>`<div style="width:6px;height:6px;border-radius:50%;background:${i<idx?'var(--green)':i===idx?'var(--gold)':'var(--b3)'}" title="${s}"></div>${i<steps.length-1?'<div style="width:7px;height:1px;background:var(--b2)"></div>':''}`).join('')}</div>`;}
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')}

// AI Engine indicator — tracks active AI operations
let _aiOps=0;
function aiStart(){_aiOps++;const d=document.getElementById('ai-engine-dot');if(d){d.className='ai-indicator generating';d.title='AI Engine: processing ('+_aiOps+' active)';}}
function aiEnd(){_aiOps=Math.max(0,_aiOps-1);if(_aiOps===0){const d=document.getElementById('ai-engine-dot');if(d){d.className='ai-indicator';d.title='AI Engine: ready';}}}
function sleep(ms){return new Promise(r=>setTimeout(r,ms))}
function toast(msg,type=''){const t=document.createElement('div');t.className=`toast ${type}`;t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),3500)}
function copyText(id){const el=document.getElementById(id);if(!el)return;navigator.clipboard.writeText(el.value).then(()=>toast('Copied!','ok'))}
function dlImg(url,name){if(!url)return;const a=document.createElement('a');a.href=url;a.download=name;a.click()}
function dlTxt(content,name){const b=new Blob([content],{type:'text/plain'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;a.click();toast('Downloaded!','ok')}
async function urlToB64(url){try{const r=await fetch(url);const b=await r.blob();return new Promise(res=>{const rd=new FileReader();rd.onload=e=>res(e.target.result.split(',')[1]);rd.readAsDataURL(b)});}catch(e){return null}}

// ══════════════════════════════════════
// INIT
// ══════════════════════════════════════
(async function(){
  // Try to pull fresh data from Supabase (non-blocking if not configured)
  if(SB.ready()){
    const pulled=await SB.pullAll();
    if(pulled)seedAdmin();
  }
  seedAdmin();
  const s=DB.getSession();
  if(s&&s.userId&&DB.getUser(s.userId)){
    S.session=s;S.view=s.role;
    // Restore last tab position — user lands where they left off
    try{
      const lastPos=JSON.parse(localStorage.getItem('sv2_last_tab')||'null');
      if(lastPos){
        if(lastPos.tab)S.tab=lastPos.tab;
        if(lastPos.qgMode)S.qgMode=lastPos.qgMode;
        if(lastPos.pid)S.pid=lastPos.pid;
      }
    }catch(e){}
  }
  else{DB.clearSession();S.view='login';}
  render();
  // Poll Supabase every 45s for live updates from other users
  if(SB.ready()){
    setInterval(async()=>{
      if(document.hidden)return;
      // Save any in-progress prompts before pulling
      const sgEl=document.getElementById('sg-prompt');
      if(sgEl&&sgEl.value){S.sgPrompt=sgEl.value;_tryLS(()=>localStorage.setItem('sv2_sg_prompt',sgEl.value));}
      const vidEl=document.getElementById('vid-prompt');
      if(vidEl&&vidEl.value)S.vqgPrompt=vidEl.value;
      const sqEl=document.getElementById('sq-text');
      if(sqEl&&sqEl.value)S.sqgText=sqEl.value;
      // Don't render if user is actively focused on a textarea — defer 5s
      const focused=document.activeElement;
      if(focused&&(focused.tagName==='TEXTAREA'||focused.tagName==='INPUT')){
        setTimeout(async()=>{await SB.pullAll();render();},5000);
        return;
      }
      await SB.pullAll();
      render();
    },45000);
  }
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){closeModal();var p=document.getElementById('notif-panel');if(p)p.style.display='none';}
  });
  document.addEventListener('click',function(e){
    const panel=document.getElementById('notif-panel');
    if(panel&&panel.style.display!=='none'&&!panel.contains(e.target)&&!e.target.closest('[onclick*="toggleNotifPanel"]')){
      panel.style.display='none';
    }
  });
  // Update SB dot after render
  setTimeout(()=>SB._updateDot(),100);
})();

// ── SEED DEFAULT PMs if none exist ──────────────────────────────────────────
(function seedPMs(){
  if(_pms.length>0)return;
  const defaults=[
    {id:gid('pm'),name:'Aryan — FMCG Specialist',domain:'FMCG',level:'Expert',bio:'10 years of brand experience across mass-market consumer goods. Specialises in high-impact TVC campaigns, product launch strategies, and retail activation content. Understands the Indian consumer deeply.',skills:['TVC Production','Brand Strategy','Retail Activation','Social Media','Product Launches'],ratings:[],avgRating:4.8,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
    {id:gid('pm'),name:'Priya — SaaS & Tech',domain:'SaaS',level:'Expert',bio:'Specialises in B2B and B2C SaaS content — product demos, explainer videos, and performance marketing. Understands conversion-focused storytelling and technical brand communication.',skills:['Explainer Videos','Product Demos','Performance Marketing','LinkedIn Content','B2B Strategy'],ratings:[],avgRating:4.6,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
    {id:gid('pm'),name:'Vikram — Finance & Banking',domain:'Finance',level:'Senior',bio:'Deep expertise in regulated financial services content. Builds trust-first narratives for banks, insurance, and fintech brands. Experienced in compliance-aware storytelling.',skills:['Financial Brand Strategy','Trust-Building Content','Compliance Awareness','Testimonials','Insurance Campaigns'],ratings:[],avgRating:4.5,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
    {id:gid('pm'),name:'Meera — Retail & Fashion',domain:'Retail',level:'Expert',bio:'Fashion and lifestyle brand specialist with a sharp eye for visual storytelling. Drives brand identity through social-first, high-frequency content built for Instagram, YouTube, and OOH.',skills:['Fashion Campaigns','Instagram Reels','Brand Identity','Lookbooks','Seasonal Campaigns'],ratings:[],avgRating:4.7,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
    {id:gid('pm'),name:'Rohan — Automotive',domain:'Automotive',level:'Expert',bio:'Automotive content specialist focused on cinematic product films, launch campaigns, and dealership content. Has worked across luxury, mass, and EV segments with a strong understanding of aspirational storytelling.',skills:['Automotive TVC','Launch Campaigns','Cinematic Production','Test Drive Content','EV Branding'],ratings:[],avgRating:4.9,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  ];
  defaults.forEach(pm=>{_pms.push(pm);});
  _tryLS(()=>localStorage.setItem('sv2_pms',JSON.stringify(_pms)));
})();
