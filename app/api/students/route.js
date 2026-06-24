import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const section = searchParams.get('section') // 'primary', 'secondary', or 'all'
  const classFilter = searchParams.get('class')

  try {
    let students = []
    
    // Read the appropriate file based on section
    if (section === 'primary') {
      const filePath = path.join(process.cwd(), 'data', 'primary_students.json')
      const fileContents = fs.readFileSync(filePath, 'utf8')
      students = JSON.parse(fileContents)
    } else if (section === 'secondary') {
      const filePath = path.join(process.cwd(), 'data', 'secondary_students.json')
      const fileContents = fs.readFileSync(filePath, 'utf8')
      students = JSON.parse(fileContents)
    } else {
      // Default to all students
      const filePath = path.join(process.cwd(), 'data', 'all_students.json')
      const fileContents = fs.readFileSync(filePath, 'utf8')
      students = JSON.parse(fileContents)
    }

    // Filter by class if specified
    if (classFilter) {
      students = students.filter(student => 
        student.class.toLowerCase() === classFilter.toLowerCase()
      )
    }

    return NextResponse.json({ students })
  } catch (error) {
    console.error('Error reading student data:', error)
    return NextResponse.json({ error: 'Failed to load student data' }, { status: 500 })
  }
}
