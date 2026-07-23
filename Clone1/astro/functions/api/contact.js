export async function onRequestPost({ request, env }) {
  try {
    const data = await request.formData();
    const name    = (data.get('name')         || '').trim();
    const email   = (data.get('Email')        || '').trim();
    const phone   = (data.get('Phone-Number') || '').trim();
    const company = (data.get('Company-Name') || '').trim();
    const message = (data.get('Message')      || '').trim();

    if (!name || !email || !message) {
      return json({ ok: false, error: 'Missing required fields' }, 400);
    }

    await env.EMAIL.send({
      to:      'contact@prismaclad.com',
      from:    { email: 'noreply@prismaclad.com', name: 'Prismaclad Site' },
      replyTo: { email, name },
      subject: `New enquiry from ${name}${company ? ' — ' + company : ''}`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Phone:   ${phone || '—'}`,
        `Company: ${company || '—'}`,
        '',
        message,
      ].join('\n'),
      html: `
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Phone:</strong> ${esc(phone || '—')}</p>
        <p><strong>Company:</strong> ${esc(company || '—')}</p>
        <hr/>
        <p>${esc(message).replace(/\n/g, '<br>')}</p>
      `,
    });

    return json({ ok: true });
  } catch (err) {
    console.error('contact form error', err);
    return json({ ok: false, error: 'Failed to send' }, 500);
  }
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
