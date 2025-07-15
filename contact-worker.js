// Cloudflare Worker for Itamih Contact Form with Resend
export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    // Only allow POST requests to /api/contact
    if (request.method !== 'POST' || !request.url.includes('/api/contact')) {
      return new Response('Not Found', { status: 404 });
    }

    try {
      // Parse the form data
      const data = await request.json();
      
      // Validate required fields (now including company)
      if (!data.name || !data.email || !data.company || !data.message) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }

      // Log the form submission for debugging
      console.log('Form submission received:', JSON.stringify(data, null, 2));

      try {
        // Send notification email to you
        await sendNotificationEmail(data, env);
        
        // Send simple auto-reply to customer
        await sendAutoReply(data, env);
        
        console.log('Emails sent successfully');
        
        // Return success response
        return new Response(JSON.stringify({ 
          success: true, 
          message: 'Thank you! We\'ll get back to you within 24 hours.' 
        }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
        
      } catch (emailError) {
        console.error('Email sending failed:', emailError.message);
        
        // Log form data so you don't lose it
        console.log('Form submission logged (email failed):', JSON.stringify(data, null, 2));
        
        // Still return success to user (graceful fallback)
        return new Response(JSON.stringify({ 
          success: true, 
          message: 'Thank you! We\'ll get back to you within 24 hours.' 
        }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }

    } catch (error) {
      console.error('Contact form error:', error.message);
      
      return new Response(JSON.stringify({ error: 'Internal server error' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
  }
};

// Send notification email to you
async function sendNotificationEmail(data, env) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Website <noreply@itamih.com>',
      to: ['sam@itamih.com'],
      subject: `New Contact Form: ${data.name} from ${data.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;">
                  <a href="mailto:${data.email}" style="color: #4f46e5;">${data.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Company:</td>
                <td style="padding: 8px 0; color: #1f2937;">${data.company}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 10px;">Message:</h3>
            <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 6px; padding: 15px; white-space: pre-wrap;">${data.message}</div>
          </div>
          
          <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; margin-top: 20px;">
            <p style="margin: 0; font-size: 14px; color: #6b7280;">
              <strong>Submitted:</strong> ${new Date(data.timestamp).toLocaleString()}<br>
              <strong>Source:</strong> itamih.com contact form
            </p>
          </div>
          
          <div style="margin-top: 20px; text-align: center;">
            <a href="mailto:${data.email}?subject=Re: Your inquiry about business automation" 
               style="background: #4f46e5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Reply to ${data.name}
            </a>
          </div>
        </div>
      `,
      reply_to: [data.email]
    }),
  });
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Resend notification error: ${response.status} ${error}`);
  }
  
  return response.json();
}

// Send simple auto-reply to customer
async function sendAutoReply(data, env) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Itamih Team <hello@itamih.com>',
      to: [data.email],
      subject: 'Thank you for contacting Itamih - We\'ll be in touch soon!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px 0; border-bottom: 1px solid #e5e7eb;">
            <h1 style="color: #4f46e5; margin: 0; font-size: 24px;">Itamih</h1>
            <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 14px;">Custom software for growing businesses</p>
          </div>
          
          <div style="padding: 30px 0;">
            <h2 style="color: #374151; margin-bottom: 15px;">Thank you for your interest, ${data.name}!</h2>
            
            <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
              We've received your message about your business automation needs and will get back to you within 24 hours.
            </p>
            
            <div style="background: #f8fafc; border-left: 4px solid #4f46e5; padding: 20px; margin: 25px 0;">
              <h3 style="color: #374151; margin-top: 0; margin-bottom: 15px;">What happens next:</h3>
              <ul style="color: #4b5563; line-height: 1.6; margin: 0; padding-left: 20px;">
                <li style="margin-bottom: 8px;">We'll review your specific automation needs</li>
                <li style="margin-bottom: 8px;">Prepare relevant case studies and examples</li>
                <li style="margin-bottom: 8px;">Reach out to discuss how we can help your business</li>
              </ul>
            </div>
            
            <p style="color: #4b5563; line-height: 1.6;">
              Best regards,<br>
              <strong>The Itamih Team</strong>
            </p>
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center;">
            <p style="color: #9ca3af; font-size: 14px; margin: 0;">
              This is an automated response. Please don't reply to this email.<br>
              For urgent matters, email us directly at <a href="mailto:hello@itamih.com" style="color: #4f46e5;">hello@itamih.com</a>
            </p>
          </div>
        </div>
      `,
    }),
  });
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Resend auto-reply error: ${response.status} ${error}`);
  }
  
  return response.json();
}