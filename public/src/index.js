// Cloudflare Workers script with D1 database integration
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Handle form submissions
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      try {
        const formData = await request.json();
        
        // Insert into D1 database
        const result = await env.MY_BINDINGS.prepare(
          `INSERT INTO contact_submissions (first_name, last_name, email, phone, message, submitted_at)
           VALUES (?, ?, ?, ?, ?, ?)`
        ).bind(
          formData.firstName,
          formData.lastName,
          formData.email,
          formData.phone,
          formData.message,
          new Date().toISOString()
        ).run();
        
        return new Response(JSON.stringify({ 
          success: true, 
          message: 'Quote request received! We\'ll contact you soon.',
          id: result.meta.last_row_id 
        }), {
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      } catch (error) {
        return new Response(JSON.stringify({ 
          success: false, 
          error: error.message 
        }), {
          status: 500,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    }
    
    // Serve static assets
    return env.ASSETS.fetch(request);
  },
};
