import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Edit, Mail, Phone, Calendar, MapPin, BookOpen, Award, TrendingUp } from 'lucide-react'
import EditStudentModal from '../components/EditStudentModal'

const StudentDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)

  // Sample student data - in a real app, this would come from an API
  const studentData = {
    'STU001': {
      id: 'STU001',
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1 (555) 123-4567',
      dateOfBirth: '1998-05-15',
      address: '123 University Ave, College Town, CT 12345',
      enrollmentDate: '2024-01-15',
      course: 'Computer Science',
      year: 'Senior',
      gpa: 3.8,
      status: 'Active',
      avatar: 'J',
      grade: 'A+',
      emergencyContact: {
        name: 'Jane Doe',
        relationship: 'Mother',
        phone: '+1 (555) 987-6543'
      },
      academicHistory: [
        { semester: 'Fall 2023', gpa: 3.9, credits: 15, status: 'Completed' },
        { semester: 'Spring 2023', gpa: 3.7, credits: 18, status: 'Completed' },
        { semester: 'Fall 2022', gpa: 3.8, credits: 16, status: 'Completed' }
      ],
      currentCourses: [
        { code: 'CS401', name: 'Advanced Algorithms', credits: 3, grade: 'A' },
        { code: 'CS402', name: 'Machine Learning', credits: 3, grade: 'A+' },
        { code: 'CS403', name: 'Software Engineering', credits: 4, grade: 'A-' },
        { code: 'MATH301', name: 'Statistics', credits: 3, grade: 'B+' }
      ],
      achievements: [
        { title: 'Dean\'s List', semester: 'Fall 2023', description: 'GPA above 3.5' },
        { title: 'Programming Competition Winner', date: '2023-11-15', description: '1st place in university coding contest' },
        { title: 'Research Assistant', period: '2023-2024', description: 'Working on AI research project' }
      ]
    }
  }

  const student = studentData[id] || studentData['STU001'] // Fallback to first student

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSaveStudent = (updatedData) => {
    // In a real app, this would make an API call to update the student
    console.log('Saving student data:', updatedData)
    // For now, we'll just close the modal
    setIsEditing(false)
  }

  const handleCloseModal = () => {
    setIsEditing(false)
  }

  const handleBack = () => {
    navigate('/students')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Students
            </button>
            <motion.button
              onClick={handleEdit}
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Student
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Student Profile Card */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <div className="text-center mb-6">
                <motion.div
                  className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-blue-600 font-bold text-3xl">
                    {student.avatar}
                  </span>
                </motion.div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{student.name}</h1>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                    student.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {student.status}
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {student.grade}
                  </span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-3 text-blue-500" />
                  <span className="text-sm">{student.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-3 text-blue-500" />
                  <span className="text-sm">{student.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-3 text-blue-500" />
                  <span className="text-sm">{new Date(student.dateOfBirth).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                  <span className="text-sm">{student.address}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <BookOpen className="w-5 h-5 mr-3 text-blue-500" />
                  <span className="text-sm">{student.course} - {student.year}</span>
                </div>
              </div>

              {/* Academic Summary */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Summary</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{student.gpa}</div>
                    <div className="text-sm text-gray-600">GPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {student.academicHistory.length}
                    </div>
                    <div className="text-sm text-gray-600">Semesters</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Current Courses */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">Current Courses</h2>
              </div>
              <div className="space-y-3">
                {student.currentCourses.map((course, index) => (
                  <motion.div
                    key={course.code}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div>
                      <div className="font-medium text-gray-900">{course.code} - {course.name}</div>
                      <div className="text-sm text-gray-600">{course.credits} credits</div>
                    </div>
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      course.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                      course.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {course.grade}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Academic History */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">Academic History</h2>
              </div>
              <div className="space-y-3">
                {student.academicHistory.map((semester, index) => (
                  <motion.div
                    key={semester.semester}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div>
                      <div className="font-medium text-gray-900">{semester.semester}</div>
                      <div className="text-sm text-gray-600">{semester.credits} credits</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">GPA: {semester.gpa}</div>
                      <div className="text-sm text-green-600">{semester.status}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-yellow-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">Achievements</h2>
              </div>
              <div className="space-y-4">
                {student.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="font-medium text-gray-900">{achievement.title}</div>
                    <div className="text-sm text-gray-600 mt-1">{achievement.description}</div>
                    <div className="text-xs text-gray-500 mt-2">
                      {achievement.semester || achievement.date || achievement.period}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Emergency Contact</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium text-gray-900">{student.emergencyContact.name}</div>
                <div className="text-sm text-gray-600">{student.emergencyContact.relationship}</div>
                <div className="text-sm text-gray-600">{student.emergencyContact.phone}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Edit Modal */}
        <EditStudentModal
          student={student}
          isOpen={isEditing}
          onClose={handleCloseModal}
          onSave={handleSaveStudent}
        />
      </div>
    </div>
  )
}

export default StudentDetail
