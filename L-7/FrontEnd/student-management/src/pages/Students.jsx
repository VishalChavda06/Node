import React, { useState } from 'react'
import { motion } from 'framer-motion'
import StudentCard from '../components/StudentCard'

const Students = () => {
  const [students] = useState([
    {
      id: 'STU001',
      name: 'John Doe',
      email: 'john.doe@email.com',
      grade: 'A+',
      course: 'Computer Science',
      enrollmentDate: '2024-01-15',
      status: 'Active'
    },
    {
      id: 'STU002',
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      grade: 'A',
      course: 'Mathematics',
      enrollmentDate: '2024-01-20',
      status: 'Active'
    },
    {
      id: 'STU003',
      name: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      grade: 'B+',
      course: 'Physics',
      enrollmentDate: '2024-02-01',
      status: 'Active'
    },
    {
      id: 'STU004',
      name: 'Sarah Wilson',
      email: 'sarah.wilson@email.com',
      grade: 'A-',
      course: 'Chemistry',
      enrollmentDate: '2024-02-10',
      status: 'Active'
    },
    {
      id: 'STU005',
      name: 'David Brown',
      email: 'david.brown@email.com',
      grade: 'B',
      course: 'Biology',
      enrollmentDate: '2024-02-15',
      status: 'Inactive'
    },
    {
      id: 'STU006',
      name: 'Emily Davis',
      email: 'emily.davis@email.com',
      grade: 'A+',
      course: 'Computer Science',
      enrollmentDate: '2024-02-20',
      status: 'Active'
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.course.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = filterStatus === 'All' || student.status === filterStatus
    
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Students</h1>
          <p className="text-gray-600">Manage all student records and information</p>
        </div>

        {/* Search and Filter Bar */}
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <motion.input
                type="text"
                placeholder="Search students by name, email, or course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
            <div className="md:w-48">
              <motion.select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </motion.select>
            </div>
            <motion.button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Add New Student
            </motion.button>
          </div>
        </motion.div>

        {/* Students Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudents.map((student, index) => (
              <StudentCard key={student.id} student={student} index={index} />
            ))}
          </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No students found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Students
