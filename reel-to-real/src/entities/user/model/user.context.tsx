import { createContext, useContext, useEffect, useState } from "react";
import type { IAuthContext, IUser } from "./user.types";

const AuthContext = createContext<IAuthContext | null>(null)

type Props = {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IUser | null>(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    }
    else {
      localStorage.removeItem('user')
    }
  }, [user])

  const value: IAuthContext = {
    user,
    setUser
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be user within AuthProvider')
  }
  return context
}