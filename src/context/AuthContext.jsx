import { createContext, useContext, useEffect, useState } from 'react'
import { getCurrentUser, login as loginSvc, logout as logoutSvc } from '../services/auth'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined) // undefined = loading

  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .catch(() => setUser(null))
  }, [])

  const login = async (email, password) => {
    const u = await loginSvc(email, password)
    setUser(u)
    return u
  }

  const logout = async () => {
    await logoutSvc()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading: user === undefined }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
