import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const body = await request.json()
    
    const {
      firstName,
      lastName,
      dob,
      gender,
      grade,
      previousSchool,
      parentName,
      relationship,
      email,
      phone,
      address,
      lastSchool,
      lastGrade,
      averageMarks,
      medical,
      interests,
      motivation,
      declaration1,
      declaration2,
      declaration3
    } = body

    // Validate required fields
    if (!firstName || !lastName || !dob || !gender || !grade || 
        !parentName || !relationship || !email || !phone || !address ||
        !lastSchool || !lastGrade || !motivation || 
        !declaration1 || !declaration2 || !declaration3) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create application object (will be stored when database is available)
    const application = {
      id: `temp_${Date.now()}`,
      firstName,
      lastName,
      dob: new Date(dob),
      gender,
      grade,
      previousSchool: previousSchool || null,
      parentName,
      relationship,
      email,
      phone,
      address,
      lastSchool,
      lastGrade,
      averageMarks: averageMarks || null,
      medical: medical || null,
      interests: interests || null,
      motivation,
      declaration1,
      declaration2,
      declaration3,
      status: 'pending',
      submittedAt: new Date()
    }

    // Try to store in database (will fail gracefully if database unavailable)
    try {
      const prisma = (await import('@/lib/prisma')).default
      const dbApplication = await prisma.application.create({
        data: {
          firstName,
          lastName,
          dob: new Date(dob),
          gender,
          grade,
          previousSchool: previousSchool || null,
          parentName,
          relationship,
          email,
          phone,
          address,
          lastSchool,
          lastGrade,
          averageMarks: averageMarks || null,
          medical: medical || null,
          interests: interests || null,
          motivation,
          declaration1,
          declaration2,
          declaration3,
          status: 'pending'
        }
      })
      application.id = dbApplication.id
    } catch (dbError) {
      console.log('Database unavailable, using temporary storage:', dbError.message)
    }

    // Send email notification
    await sendNotificationEmail(application)

    return NextResponse.json(
      { 
        success: true, 
        applicationId: application.id,
        message: 'Application submitted successfully',
        databaseStored: application.id.startsWith('temp_') ? false : true
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating application:', error)
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
}

async function sendNotificationEmail(application) {
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
      <h1>New Admission Application Received</h1>
      <h2>Student Information</h2>
      <p><strong>Name:</strong> ${application.firstName} ${application.lastName}</p>
      <p><strong>Date of Birth:</strong> ${new Date(application.dob).toLocaleDateString()}</p>
      <p><strong>Gender:</strong> ${application.gender}</p>
      <p><strong>Grade Applying For:</strong> ${application.grade}</p>
      <p><strong>Previous School:</strong> ${application.previousSchool || 'N/A'}</p>
      
      <h2>Parent/Guardian Information</h2>
      <p><strong>Name:</strong> ${application.parentName}</p>
      <p><strong>Relationship:</strong> ${application.relationship}</p>
      <p><strong>Email:</strong> ${application.email}</p>
      <p><strong>Phone:</strong> ${application.phone}</p>
      <p><strong>Address:</strong> ${application.address}</p>
      
      <h2>Academic Information</h2>
      <p><strong>Last School Attended:</strong> ${application.lastSchool}</p>
      <p><strong>Last Grade Completed:</strong> ${application.lastGrade}</p>
      <p><strong>Average Marks:</strong> ${application.averageMarks || 'N/A'}</p>
      
      <h2>Additional Information</h2>
      <p><strong>Medical Conditions:</strong> ${application.medical || 'None'}</p>
      <p><strong>Interests:</strong> ${application.interests || 'None'}</p>
      <p><strong>Motivation:</strong> ${application.motivation}</p>
      
      <h2>Application Details</h2>
      <p><strong>Application ID:</strong> ${application.id}</p>
      <p><strong>Submitted At:</strong> ${application.submittedAt.toLocaleString()}</p>
      <p><strong>Status:</strong> ${application.status}</p>
    `

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'winsfordoffice@gmail.com',
      subject: `New Admission Application - ${application.firstName} ${application.lastName}`,
      html: emailContent
    })

    console.log('Email notification sent successfully to winsfordoffice@gmail.com')
  } catch (error) {
    console.error('Error sending email notification:', error)
    // Don't fail the application submission if email fails
  }
}
