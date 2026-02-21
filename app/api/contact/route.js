import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, projectType, message } = body

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Log contact submission (in production, this would send email)
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      projectType,
      message,
      timestamp: new Date().toISOString()
    })

    // TODO: In production, integrate with email service (SendGrid, Resend, etc.)
    // Example:
    // await sendEmail({
    //   to: 'founder@primeframe.com',
    //   subject: `New Contact: ${projectType}`,
    //   body: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    // })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We will get back to you within 24 hours.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint. Use POST to submit contact form.' },
    { status: 200 }
  )
}
