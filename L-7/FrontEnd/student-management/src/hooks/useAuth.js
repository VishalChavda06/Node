import { useState, useEffect } from 'react'

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true) // Default to true for demo
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate checking authentication status
    const checkAuth = async () => {
      try {
        // In a real app, you would check with your auth service
        // const token = localStorage.getItem('token')
        // const response = await fetch('/api/auth/verify', {
        //   headers: { Authorization: `Bearer ${token}` }
        // })
        
        // For demo purposes, we'll simulate a successful auth check
        setTimeout(() => {
          setUser({
            id: 1,
            name: 'Admin User',
            email: 'admin@studentmanagement.com',
            role: 'admin'
          })
          setIsAuthenticated(true)
          setLoading(false)
        }, 1000)
      } catch (error) {
        setIsAuthenticated(false)
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (credentials) => {
    try {
      // In a real app, you would make an API call to authenticate
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(credentials)
      // })
      
      // For demo purposes, simulate successful login
      setUser({
        id: 1,
        name: 'Admin User',
        email: credentials.email,
        role: 'admin'
      })
      setIsAuthenticated(true)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    // In a real app, you would also clear tokens from localStorage
    // localStorage.removeItem('token')
  }

  return {
    isAuthenticated,
    user,
    loading,
    login,
    logout
  }
}

export default useAuth
