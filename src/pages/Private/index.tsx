import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/auth/AuthContext'

export default function Private() {
  const auth = useContext(AuthContext)
  return (
    <div>Você esta logado {auth.user?.name}</div>
  )
}
