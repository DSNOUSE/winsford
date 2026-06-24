'use client'

import { useState, useEffect } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import InnerPageHero from '../../../components/InnerPageHero'
import Link from 'next/link'

export default function StudentDatabase() {
  const [students, setStudents] = useState([])
  const [filteredStudents, setFilteredStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [section, setSection] = useState('all')
  const [classFilter, setClassFilter] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const sections = ['all', 'primary', 'secondary']
  const primaryClasses = ['Preparatory', 'Nursery One', 'Nursery Two', 'Kindergarten', 'Basic One', 'Basic Two', 'Basic Three', 'Basic Four', 'Basic Five', 'Basic Six']
  const secondaryClasses = ['JSS 1', 'JSS 2', 'JSS 3A', 'JSS 3B', 'SS 1', 'SS 2']

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true)
      try {
        let url = '/api/students'
        const params = new URLSearchParams()
        
        if (section !== 'all') {
          params.append('section', section)
        }
        
        if (classFilter) {
          params.append('class', classFilter)
        }
        
        if (params.toString()) {
          url += `?${params.toString()}`
        }

        const response = await fetch(url)
        const data = await response.json()
        setStudents(data.students)
        setFilteredStudents(data.students)
      } catch (error) {
        console.error('Error fetching students:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStudents()
  }, [section, classFilter])

  useEffect(() => {
    // Filter by search term
    if (searchTerm) {
      const filtered = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredStudents(filtered)
    } else {
      setFilteredStudents(students)
    }
  }, [searchTerm, students])

  const handleSectionChange = (newSection) => {
    setSection(newSection)
    setClassFilter('')
  }

  const availableClasses = section === 'primary' ? primaryClasses : 
                           section === 'secondary' ? secondaryClasses : 
                           [...primaryClasses, ...secondaryClasses]

  return (
    <>
      <Header />

      <main>
        <InnerPageHero
          title="Student Database"
          subtitle="Browse our complete student registry with filtering and search capabilities."
        />

        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              {/* Filters */}
              <div className="card p-6 mb-8">
                <div className="grid md:grid-cols-4 gap-4">
                  {/* Section Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Section
                    </label>
                    <select
                      value={section}
                      onChange={(e) => handleSectionChange(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {sections.map(sec => (
                        <option key={sec} value={sec}>
                          {sec.charAt(0).toUpperCase() + sec.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Class Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Class
                    </label>
                    <select
                      value={classFilter}
                      onChange={(e) => setClassFilter(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">All Classes</option>
                      {availableClasses.map(cls => (
                        <option key={cls} value={cls}>
                          {cls}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Search */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Search by Name
                    </label>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Enter student name..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="card p-4 text-center">
                  <div className="text-3xl font-bold text-blue-900">{filteredStudents.length}</div>
                  <div className="text-sm text-gray-600">Total Students</div>
                </div>
                <div className="card p-4 text-center">
                  <div className="text-3xl font-bold text-blue-900">
                    {filteredStudents.filter(s => s.sex === 'M' || s.sex === 'MALE').length}
                  </div>
                  <div className="text-sm text-gray-600">Male</div>
                </div>
                <div className="card p-4 text-center">
                  <div className="text-3xl font-bold text-blue-900">
                    {filteredStudents.filter(s => s.sex === 'F' || s.sex === 'FEMALE').length}
                  </div>
                  <div className="text-sm text-gray-600">Female</div>
                </div>
                <div className="card p-4 text-center">
                  <div className="text-3xl font-bold text-blue-900">
                    {new Set(filteredStudents.map(s => s.class)).size}
                  </div>
                  <div className="text-sm text-gray-600">Classes</div>
                </div>
              </div>

              {/* Students Table */}
              {loading ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
                  <p className="mt-4 text-gray-600">Loading student data...</p>
                </div>
              ) : (
                <div className="card overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-blue-900 text-white">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">S/N</th>
                          <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                          <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Class</th>
                          <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Section</th>
                          <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Sex</th>
                          {section === 'primary' && (
                            <>
                              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Age</th>
                              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Address</th>
                              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Phone</th>
                            </>
                          )}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredStudents.map((student, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.sn}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.class}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.section}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.sex}</td>
                            {section === 'primary' && (
                              <>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.age || '-'}</td>
                                <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{student.address || '-'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.phone || '-'}</td>
                              </>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {filteredStudents.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-gray-600">No students found matching your criteria.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Back Button */}
              <div className="mt-8">
                <Link href="/students" className="btn-primary inline-block">
                  Back to Students Portal
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
