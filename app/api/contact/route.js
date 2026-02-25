import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, projectType, details } = body;

    // Basic validation
    if (!name || !email || !details) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Configure transporter
    // Note: In production, use environment variables for these credentials
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || 'production@primeframe.com', // Success recipient
      subject: `New Project Inquiry: ${projectType} from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Project Type: ${projectType}
        
        Details:
        ${details}
        
        Sent at: ${new Date().toLocaleString()}
      `,
      html: `
        <h3>New Project Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <br/>
        <p><strong>Details:</strong></p>
        <p>${details}</p>
        <br/>
        <p><small>Sent at: ${new Date().toLocaleString()}</small></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
