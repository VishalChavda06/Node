import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, isAuthenticated = true }) => {
  // For now, we'll assume the user is always authenticated
  // In a real app, you would check authentication status here
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
