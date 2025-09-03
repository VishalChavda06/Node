import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const StudentCard = ({ student, index = 0 }) => {
  const navigate = useNavigate()

  const handleViewDetails = () => {
    navigate(`/students/${student.id}`)
  }

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center space-x-4">
        <motion.div 
          className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 font-semibold text-lg">
            {student.name.charAt(0).toUpperCase()}
          </span>
        </motion.div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
          <p className="text-gray-600">{student.email}</p>
          <p className="text-sm text-gray-500">ID: {student.id}</p>
        </div>
        
        <div className="text-right">
          <motion.span 
            className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {student.grade}
          </motion.span>
          <p className="text-sm text-gray-500 mt-1">{student.course}</p>
        </div>
      </div>
      
      <motion.div 
        className="mt-4 flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.button 
          className="flex-1 bg-blue-50 text-blue-600 hover:bg-blue-100 py-2 px-3 rounded-md text-sm transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleViewDetails}
        >
          View Details
        </motion.button>
        <motion.button 
          className="flex-1 bg-gray-50 text-gray-600 hover:bg-gray-100 py-2 px-3 rounded-md text-sm transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Edit
        </motion.button>
        <motion.button 
          className="flex-1 bg-red-50 text-red-600 hover:bg-red-100 py-2 px-3 rounded-md text-sm transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Delete
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default StudentCard
