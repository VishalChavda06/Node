import React, { useState } from 'react'

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('overview')

  const reportData = {
    overview: {
      title: 'Overview Report',
      description: 'General statistics and performance metrics',
      data: {
        totalStudents: 156,
        activeStudents: 142,
        averageGrade: 'B+',
        topPerformingCourse: 'Computer Science',
        graduationRate: '94%'
      }
    },
    performance: {
      title: 'Performance Report',
      description: 'Detailed performance analysis by course and student',
      data: {
        computerScience: { students: 45, average: 'A-', passRate: '96%' },
        mathematics: { students: 38, average: 'B+', passRate: '89%' },
        physics: { students: 32, average: 'B', passRate: '84%' },
        chemistry: { students: 28, average: 'B+', passRate: '93%' },
        biology: { students: 13, average: 'A-', passRate: '92%' }
      }
    },
    attendance: {
      title: 'Attendance Report',
      description: 'Student attendance patterns and trends',
      data: {
        averageAttendance: '92%',
        excellentAttendance: 89,
        goodAttendance: 45,
        poorAttendance: 22
      }
    }
  }

  const renderOverviewReport = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <div className="p-3 bg-blue-100 rounded-lg">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Total Students</p>
            <p className="text-2xl font-semibold text-gray-900">{reportData.overview.data.totalStudents}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <div className="p-3 bg-green-100 rounded-lg">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Active Students</p>
            <p className="text-2xl font-semibold text-gray-900">{reportData.overview.data.activeStudents}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <div className="p-3 bg-purple-100 rounded-lg">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Average Grade</p>
            <p className="text-2xl font-semibold text-gray-900">{reportData.overview.data.averageGrade}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <div className="p-3 bg-yellow-100 rounded-lg">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Top Course</p>
            <p className="text-lg font-semibold text-gray-900">{reportData.overview.data.topPerformingCourse}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <div className="p-3 bg-indigo-100 rounded-lg">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Graduation Rate</p>
            <p className="text-2xl font-semibold text-gray-900">{reportData.overview.data.graduationRate}</p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderPerformanceReport = () => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Course Performance</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average Grade</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pass Rate</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Object.entries(reportData.performance.data).map(([course, data]) => (
              <tr key={course} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">
                  {course.replace(/([A-Z])/g, ' $1').trim()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{data.students}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    {data.average}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{data.passRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderAttendanceReport = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Attendance Statistics</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Average Attendance</span>
            <span className="text-lg font-semibold text-gray-900">{reportData.attendance.data.averageAttendance}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Excellent (95%+)</span>
            <span className="text-lg font-semibold text-green-600">{reportData.attendance.data.excellentAttendance}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Good (80-94%)</span>
            <span className="text-lg font-semibold text-blue-600">{reportData.attendance.data.goodAttendance}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Poor (&lt;80%)</span>
            <span className="text-lg font-semibold text-red-600">{reportData.attendance.data.poorAttendance}</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Attendance Trends</h3>
        <div className="text-center py-8">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <p className="text-gray-600">Chart visualization would go here</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports</h1>
          <p className="text-gray-600">Generate and view comprehensive reports and analytics</p>
        </div>

        {/* Report Type Selector */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <select
                value={selectedReport}
                onChange={(e) => setSelectedReport(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="overview">Overview Report</option>
                <option value="performance">Performance Report</option>
                <option value="attendance">Attendance Report</option>
              </select>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Export Report
            </button>
          </div>
        </div>

        {/* Report Content */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {reportData[selectedReport].title}
          </h2>
          <p className="text-gray-600 mb-6">
            {reportData[selectedReport].description}
          </p>
        </div>

        {selectedReport === 'overview' && renderOverviewReport()}
        {selectedReport === 'performance' && renderPerformanceReport()}
        {selectedReport === 'attendance' && renderAttendanceReport()}
      </div>
    </div>
  )
}

export default Reports
