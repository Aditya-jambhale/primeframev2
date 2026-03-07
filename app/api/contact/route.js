import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, projectType, details, message } = body;
    const finalDetails = details || message;

    // Basic validation
    if (!name || !email || !finalDetails) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Modern HTML Email Template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Inter', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid #eee; }
          .header { background: #000000; padding: 30px; text-align: center; }
          .header h1 { color: #EAB308; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 4px; font-weight: 900; }
          .content { padding: 40px; }
          .field { margin-bottom: 25px; border-bottom: 1px solid #f0f0f0; pb: 15px; }
          .label { font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #EAB308; font-weight: 700; margin-bottom: 5px; display: block; }
          .value { font-size: 16px; color: #111; font-weight: 500; }
          .message-box { background: #f9f9f9; padding: 25px; border-radius: 8px; border-left: 4px solid #EAB308; font-style: italic; margin-top: 10px; }
          .footer { background: #fafafa; padding: 20px; text-align: center; font-size: 12px; color: #888; border-top: 1px solid #eee; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>SKYLUME PRODUCTION</h1>
          </div>
          <div class="content">
            <h2 style="margin-top: 0; color: #111; font-size: 20px; border-bottom: 2px solid #EAB308; display: inline-block; padding-bottom: 5px;">New Inquiry Received</h2>
            
            <div class="field" style="margin-top: 30px;">
              <span class="label">Project Interest</span>
              <div class="value">${projectType || 'General Inquiry'}</div>
            </div>

            <div class="field">
              <span class="label">Full Name</span>
              <div class="value">${name}</div>
            </div>

            <div class="field">
              <span class="label">Email Address</span>
              <div class="value">${email}</div>
            </div>

            <div class="field">
              <span class="label">Phone Number</span>
              <div class="value">${phone || 'Not provided'}</div>
            </div>

            <div style="margin-top: 30px;">
              <span class="label">Client Message / Brief</span>
              <div class="message-box">
                ${finalDetails.replace(/\n/g, '<br/>')}
              </div>
            </div>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Skylume Production. India | Dubai | UAE</p>
            <p>This inquiry was sent from the website contact form.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Email content
    const mailOptions = {
      from: `"Skylume Web Terminal" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER || 'contact@skylumeproduction.com',
      replyTo: email,
      subject: `[Vision Brief] ${projectType || 'New Inquiry'} - ${name}`,
      html: htmlContent,
      text: `
        New Project Inquiry:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Project: ${projectType}
        
        Details:
        ${finalDetails}
        
        Sent at: ${new Date().toLocaleString()}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ message: 'Failed to transmit briefing. Please try again.' }, { status: 500 });
  }
}
