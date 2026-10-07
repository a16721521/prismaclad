// Worker entry for prismaclad.com.
// Static files are the Astro build (Clone1/astro/dist), served by the ASSETS
// binding before this script runs. The script only handles what a static
// build can't: the contact form endpoint. The handler itself lives in
// functions/api/contact.js and is shared as-is.
import { onRequestPost } from '../functions/api/contact.js';

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);

    if (pathname === '/api/contact' || pathname === '/api/contact/') {
      if (request.method === 'POST') return onRequestPost({ request, env });
      return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
    }

    return env.ASSETS.fetch(request);
  },
};
