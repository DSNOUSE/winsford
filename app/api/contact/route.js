import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const body = await request.json()
    
    const {
      parentName,
      studentName,
      email,
      phone,
      grade,
      referral,
      message
    } = body

    // Validate required fields
    if (!parentName || !studentName || !email || !phone || !grade || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email notification
    await sendContactEmail({
      parentName,
      studentName,
      email,
      phone,
      grade,
      referral: referral || 'Not specified',
      message
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Enquiry submitted successfully' 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error processing enquiry:', error)
    return NextResponse.json(
      { error: 'Failed to submit enquiry' },
      { status: 500 }
    )
  }
}

async function sendContactEmail(data) {
  try {
    // Create transporter using environment variables or Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false // Allow self-signed certificates
      }
    })

    const emailContent = `
      <h1>New Enquiry Received</h1>
      <h2>Contact Information</h2>
      <p><strong>Parent's Name:</strong> ${data.parentName}</p>
      <p><strong>Student's Name:</strong> ${data.studentName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      
      <h2>Academic Information</h2>
      <p><strong>Grade of Interest:</strong> ${data.grade}</p>
      <p><strong>How they heard about us:</strong> ${data.referral}</p>
      
      <h2>Message</h2>
      <p><strong>Enquiry:</strong></p>
      <p style="white-space: pre-wrap;">${data.message}</p>
      
      <h2>Submission Details</h2>
      <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
    `

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'winsfordoffice@gmail.com',
      subject: `New Enquiry - ${data.parentName} regarding ${data.studentName}`,
      html: emailContent
    })

    console.log('Contact enquiry email sent successfully to winsfordoffice@gmail.com')
  } catch (error) {
    console.error('Error sending contact email:', error)
    // Don't fail the enquiry submission if email fails
  }
}
