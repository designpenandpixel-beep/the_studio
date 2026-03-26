export const prerender = false;
import { getSession } from '../../lib/auth.js';

// CinexAI Branded Email Template
function buildEmailHTML(subject, heading, body, ctaText, ctaUrl, footerNote) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0A0A12;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0A12;padding:32px 16px">
<tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" style="background:#12121E;border-radius:12px;border:1px solid #2A2A40;overflow:hidden">
  <!-- Header -->
  <tr><td style="background:linear-gradient(135deg,#FF6B35,#8B5CF6);padding:24px 32px">
    <div style="font-size:24px;font-weight:800;color:#fff;letter-spacing:-0.02em">Cinex<span style="color:#fff">AI</span></div>
    <div style="font-size:11px;color:rgba(255,255,255,0.7);margin-top:4px">AI-Powered Media Production</div>
  </td></tr>
  <!-- Body -->
  <tr><td style="padding:32px">
    <h1 style="font-size:20px;font-weight:700;color:#F0F0FF;margin:0 0 16px;line-height:1.3">${heading}</h1>
    <div style="font-size:14px;color:#C8C8E0;line-height:1.7;margin-bottom:24px">${body}</div>
    ${ctaText && ctaUrl ? `<a href="${ctaUrl}" style="display:inline-block;padding:12px 28px;background:linear-gradient(135deg,#FF6B35,#8B5CF6);color:#fff;font-size:14px;font-weight:700;text-decoration:none;border-radius:8px">${ctaText}</a>` : ''}
  </td></tr>
  <!-- Footer -->
  <tr><td style="padding:16px 32px;border-top:1px solid #2A2A40">
    ${footerNote ? `<div style="font-size:11px;color:#6B6B8A;line-height:1.5;margin-bottom:8px">${footerNote}</div>` : ''}
    <div style="font-size:10px;color:#55557A">This is an automated notification from CinexAI. Please do not reply to this email.</div>
  </td></tr>
</table>
</td></tr>
</table>
</body></html>`;
}

// Email notification templates by event type
const EMAIL_TEMPLATES = {
  project_started: (data) => ({
    subject: `New project started: ${data.projectName}`,
    heading: 'Your Project Has Started! 🎬',
    body: `Great news — your project <strong>${data.projectName}</strong> is now in production.<br><br>Your dedicated AI Project Manager is reviewing your brief and assembling the creative team. You'll receive updates as your project progresses through each stage.`,
    cta: { text: 'View Project', url: data.platformUrl },
    footer: `Project ID: ${data.projectId} · Type: ${data.projectType}`
  }),
  synopsis_ready: (data) => ({
    subject: `Synopsis ready for review: ${data.projectName}`,
    heading: 'Your Synopsis Is Ready ✍️',
    body: `The creative synopsis for <strong>${data.projectName}</strong> is ready for your review.<br><br>Please review it and either approve to proceed to storyboard creation, or request a revision with your feedback.`,
    cta: { text: 'Review Synopsis', url: data.platformUrl },
    footer: `You have up to 3 revision rounds available.`
  }),
  delivery_ready: (data) => ({
    subject: `Your content is ready: ${data.projectName}`,
    heading: 'Your Deliverables Are Ready! 📦',
    body: `Exciting news — the final deliverables for <strong>${data.projectName}</strong> are ready for your review.<br><br>You can preview, download, and approve the content directly from your dashboard. If anything needs adjusting, you can request a revision.`,
    cta: { text: 'View Delivery', url: data.platformUrl },
    footer: 'Download your files or request changes from your project dashboard.'
  }),
  new_assignment: (data) => ({
    subject: `New project assigned: ${data.projectName}`,
    heading: 'New Project Assignment 📁',
    body: `You've been assigned to <strong>${data.projectName}</strong> (${data.projectType}).<br><br>Client: ${data.clientName || 'TBD'}<br>Priority: ${data.priority || 'Medium'}<br><br>Review the brief and start production when ready.`,
    cta: { text: 'Open Project', url: data.platformUrl },
    footer: `Assigned by: ${data.assignedBy || 'AI PM'}`
  }),
  client_feedback: (data) => ({
    subject: `Client feedback received: ${data.projectName}`,
    heading: 'New Client Feedback 💬',
    body: `The client has submitted feedback on <strong>${data.projectName}</strong>.<br><br>${data.feedbackPreview ? `<em>"${data.feedbackPreview}"</em><br><br>` : ''}Please review and address the feedback in your next update.`,
    cta: { text: 'View Feedback', url: data.platformUrl },
    footer: null
  }),
  deadline_reminder: (data) => ({
    subject: `Deadline approaching: ${data.projectName}`,
    heading: '⚠️ Deadline Approaching',
    body: `<strong>${data.projectName}</strong> is due on <strong>${data.deadline}</strong>.<br><br>Current status: ${data.status}. Please ensure all deliverables are on track.`,
    cta: { text: 'View Project', url: data.platformUrl },
    footer: null
  }),
  api_failure: (data) => ({
    subject: `[ALERT] API provider issue detected`,
    heading: '⚠️ API Provider Alert',
    body: `The <strong>${data.provider}</strong> API has experienced ${data.failCount} consecutive failures.<br><br>Failover is active — the system is using backup providers. Please check the API status in Settings.`,
    cta: { text: 'Check Status', url: data.platformUrl },
    footer: 'This alert is sent to platform administrators only.'
  }),
};

export async function POST({ request }) {
  // Session validation
  if (import.meta.env.SESSION_SECRET) {
    const session = await getSession(request);
    if (!session) {
      return new Response(JSON.stringify({ error: 'Authentication required' }), {
        status: 401, headers: { 'Content-Type': 'application/json' }
      });
    }
  }

  const { type, to, data } = await request.json();

  if (!type || !to || !data) {
    return new Response(JSON.stringify({ error: 'Missing type, to, or data' }), {
      status: 400, headers: { 'Content-Type': 'application/json' }
    });
  }

  const template = EMAIL_TEMPLATES[type];
  if (!template) {
    return new Response(JSON.stringify({ error: `Unknown email type: ${type}` }), {
      status: 400, headers: { 'Content-Type': 'application/json' }
    });
  }

  const { subject, heading, body, cta, footer } = template(data);
  const html = buildEmailHTML(subject, heading, body, cta?.text, cta?.url, footer);

  // Check for email provider configuration
  const resendKey = import.meta.env.RESEND_KEY;
  const fromEmail = import.meta.env.EMAIL_FROM || 'CinexAI <noreply@cinexai.com>';

  if (!resendKey) {
    // No email provider configured — log and return success (soft fail)
    console.log(`[EMAIL] Would send "${subject}" to ${to} (no RESEND_KEY configured)`);
    return new Response(JSON.stringify({
      success: true,
      simulated: true,
      message: 'Email logged (no provider configured). Set RESEND_KEY env var to enable.',
      subject, to, html
    }), {
      status: 200, headers: { 'Content-Type': 'application/json' }
    });
  }

  // Send via Resend API
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: fromEmail, to: [to], subject, html })
    });
    const result = await r.json();
    if (!r.ok) {
      return new Response(JSON.stringify({ error: `Email send failed: ${JSON.stringify(result)}` }), {
        status: r.status, headers: { 'Content-Type': 'application/json' }
      });
    }
    return new Response(JSON.stringify({ success: true, id: result.id }), {
      status: 200, headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Email error: ' + e.message }), {
      status: 502, headers: { 'Content-Type': 'application/json' }
    });
  }
}
