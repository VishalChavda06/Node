import React from 'react'
import { motion } from 'framer-motion'
import LoadingSpinner from '../components/LoadingSpinner'
import SkeletonCard from '../components/SkeletonCard'

const AnimationDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Animation Showcase</h1>
        </motion.div>

        {/* Loading Spinners */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Loading Spinners</h2>
          <div className="flex space-x-8 items-center">
            <div className="text-center">
              <LoadingSpinner size="small" color="blue" />
              <p className="text-sm text-gray-600 mt-2">Small</p>
            </div>
            <div className="text-center">
              <LoadingSpinner size="medium" color="green" />
              <p className="text-sm text-gray-600 mt-2">Medium</p>
            </div>
            <div className="text-center">
              <LoadingSpinner size="large" color="red" />
              <p className="text-sm text-gray-600 mt-2">Large</p>
            </div>
          </div>
        </motion.div>

        {/* Skeleton Cards */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Skeleton Loading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SkeletonCard index={0} />
            <SkeletonCard index={1} />
          </div>
        </motion.div>

        {/* Interactive Elements */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive Elements</h2>
          <div className="flex flex-wrap gap-4">
            <motion.button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Hover & Tap Me
            </motion.button>
            
            <motion.div
              className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              ↻
            </motion.div>
            
            <motion.div
              className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold"
              whileHover={{ scale: 1.2, rotate: 180 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ✨
            </motion.div>
          </div>
        </motion.div>

        {/* Staggered Animation */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Staggered Animation</h2>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <motion.div
                key={item}
                className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: item * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{ scale: 1.2 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AnimationDemo
