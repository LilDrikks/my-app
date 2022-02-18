import { useEffect, useState } from "react"
import { useApi } from "../../hooks/useApi"
import { User } from "../../types/User"
import { AuthContext } from "./AuthContext"

/*usar o contexto para manipular os dados do usuario e autenticar*/
export const AuthProvider = ({children} : {children:  JSX.Element}) => {
        const [user , setUser] = useState<User| null>(null)
        const api = useApi()

        useEffect(()=>{
                const validateToken = async ()=>{
                        const localStorageData = localStorage.getItem('authToken')
                        if(localStorageData){
                                const data = await api.validateToken(localStorageData)
                                if(data.user){
                                        setUser(data.user)
                                }
                        }
                }
                validateToken()
        },[api])

        const signin = async (email: string, password: string) => {
                const data = await api.signin(email, password)
                if(data.user && data.token){
                        setUser(data.user)
                        setToken(data.token)
                        return true
                }
                return false
        }

        const signout = async () => {
                await api.signout()
                setUser(null)
                setToken('')
        }

        const setToken = (token: string) => {
                localStorage.setItem('authToken', token)
        }
        return(
                <AuthContext.Provider value={{ user, signin, signout}}>
                        {children}
                </AuthContext.Provider>
        )
}