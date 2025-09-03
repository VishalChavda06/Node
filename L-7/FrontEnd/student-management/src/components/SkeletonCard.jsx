import React from 'react'
import { motion } from 'framer-motion'

const SkeletonCard = ({ index = 0 }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="flex items-center space-x-4">
        <motion.div
          className="w-12 h-12 bg-gray-200 rounded-full"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }}
        />
        
        <div className="flex-1 space-y-2">
          <motion.div
            className="h-4 bg-gray-200 rounded w-3/4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 + 0.1 }}
          />
          <motion.div
            className="h-3 bg-gray-200 rounded w-1/2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 + 0.2 }}
          />
          <motion.div
            className="h-3 bg-gray-200 rounded w-1/3"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 + 0.3 }}
          />
        </div>
        
        <div className="text-right space-y-2">
          <motion.div
            className="h-6 bg-gray-200 rounded-full w-12"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 + 0.4 }}
          />
          <motion.div
            className="h-3 bg-gray-200 rounded w-16"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 + 0.5 }}
          />
        </div>
      </div>
      
      <div className="mt-4 flex space-x-2">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="flex-1 h-8 bg-gray-200 rounded-md"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 + 0.6 + i * 0.1 }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default SkeletonCard
