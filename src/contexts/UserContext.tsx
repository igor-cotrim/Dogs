import { createContext, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../api';

export const UserContext = createContext()

export type StorageProviderProps = {
  children: React.ReactNode
}

export const UserStorage = ({ children }: StorageProviderProps) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const userLogout = useCallback(async () => {
    setData(null)
    setError(null)
    setLoading(false)
    setLogin(false)

    window.localStorage.removeItem('token')
    navigate('/login')
  }, [navigate])

  const getUser = async (token) => {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()

    setData(json)
    setLogin(true)
  }

  const userLogin = async (username, password) => {
    try {
      setError(null)
      setLoading(true)

      const { url, options } = TOKEN_POST({ username, password })
      const tokenRes = await fetch(url, options)
      if (!tokenRes.ok) throw new Error(`Error: Usuário inválido`)
      const { token } = await tokenRes.json()

      window.localStorage.setItem('token', token)
      await getUser(token)
      navigate('/conta')
    } catch (error) {
      setError(error.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem('token')

      if (token) {
        try {
          setError(null)
          setLoading(true)

          const { url, options } = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          if (!response.ok) throw new Error('Token inválido')

          await getUser(token)
        } catch (error) {
          userLogout()
        } finally {
          setLoading(false)
        }
      }
    }
    autoLogin()
  }, [userLogout])

  return (
    <UserContext.Provider value={{ userLogin, userLogout, data, login, error, loading }}>
      {children}
    </UserContext.Provider>
  )

};

