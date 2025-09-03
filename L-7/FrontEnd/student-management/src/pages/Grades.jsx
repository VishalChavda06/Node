import React, { useState } from 'react'

const Grades = () => {
  const [grades] = useState([
    {
      id: 1,
      studentName: 'John Doe',
      studentId: 'STU001',
      course: 'Computer Science',
      assignment: 'Final Project',
      grade: 'A+',
      points: 95,
      maxPoints: 100,
      date: '2024-03-15'
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      studentId: 'STU002',
      course: 'Mathematics',
      assignment: 'Calculus Exam',
      grade: 'A',
      points: 88,
      maxPoints: 100,
      date: '2024-03-14'
    },
    {
      id: 3,
      studentName: 'Mike Johnson',
      studentId: 'STU003',
      course: 'Physics',
      assignment: 'Lab Report',
      grade: 'B+',
      points: 85,
      maxPoints: 100,
      date: '2024-03-13'
    },
    {
      id: 4,
      studentName: 'Sarah Wilson',
      studentId: 'STU004',
      course: 'Chemistry',
      assignment: 'Midterm Exam',
      grade: 'A-',
      points: 90,
      maxPoints: 100,
      date: '2024-03-12'
    },
    {
      id: 5,
      studentName: 'David Brown',
      studentId: 'STU005',
      course: 'Biology',
      assignment: 'Research Paper',
      grade: 'B',
      points: 82,
      maxPoints: 100,
      date: '2024-03-11'
    },
    {
      id: 6,
      studentName: 'Emily Davis',
      studentId: 'STU006',
      course: 'Computer Science',
      assignment: 'Programming Assignment',
      grade: 'A+',
      points: 98,
      maxPoints: 100,
      date: '2024-03-10'
    }
  ])

  const [selectedCourse, setSelectedCourse] = useState('All')
  const [selectedGrade, setSelectedGrade] = useState('All')

  const courses = ['All', ...new Set(grades.map(grade => grade.course))]
  const gradeOptions = ['All', 'A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D', 'F']

  const filteredGrades = grades.filter(grade => {
    const matchesCourse = selectedCourse === 'All' || grade.course === selectedCourse
    const matchesGrade = selectedGrade === 'All' || grade.grade === selectedGrade
    return matchesCourse && matchesGrade
  })

  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return 'text-green-600 bg-green-100'
    if (grade.startsWith('B')) return 'text-blue-600 bg-blue-100'
    if (grade.startsWith('C')) return 'text-yellow-600 bg-yellow-100'
    if (grade.startsWith('D')) return 'text-orange-600 bg-orange-100'
    return 'text-red-600 bg-red-100'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Grades</h1>
          <p className="text-gray-600">View and manage student grades and assessments</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-48">
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {courses.map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>
            <div className="md:w-48">
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {gradeOptions.map(grade => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Add New Grade
            </button>
          </div>
        </div>

        {/* Grades Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assignment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Points
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredGrades.map((grade) => (
                  <tr key={grade.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{grade.studentName}</div>
                        <div className="text-sm text-gray-500">{grade.studentId}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {grade.course}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {grade.assignment}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getGradeColor(grade.grade)}`}>
                        {grade.grade}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {grade.points}/{grade.maxPoints}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(grade.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredGrades.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No grades found</h3>
            <p className="text-gray-600">Try adjusting your filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Grades
