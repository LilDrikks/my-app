import React, { ChangeEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth/AuthContext'

export default function Login() {
        const auth = useContext(AuthContext)
        const navigate = useNavigate()
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        
        const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value)
        }

        const handleLogin = async () =>{
                if(email && password){
                        const isLogged = await auth.signin(email, password)
                        if(isLogged){
                                navigate('/');
                        }else{
                                alert('Cadatro não efetivado!')
                        }
                }
        }
        
        return (
                <div>
                        <h2>Página fechada</h2>

                        <input type="text"
                                value={email}
                                onChange={e =>setEmail(e.target.value)}
                                placeholder='Digite seu email'
                        />
                        <input type="password"
                                value={password}
                                onChange={handlePassword}
                                placeholder='Digite sua senha'
                        />
                        <button onClick={handleLogin}>Logar</button>
                </div>
        )
}
