import { createContext, useContext, useEffect, useState } from "react";
import type { IAuthContext, IUser } from "./user.types";

const AuthContext = createContext<IAuthContext | null>(null)

type Props = {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    // заглушка
    const plugUser: IUser = {
      id: 23,
      name: 'ivan',
      cart: [1,3],
      favarite: [2],
    }
    setUser(plugUser)
    // конец заглушки
  }, [])

  const value: IAuthContext = {
    user
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