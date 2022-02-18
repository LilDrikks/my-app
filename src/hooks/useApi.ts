import axios from 'axios'

const api = axios.create({
        baseURL: process.env.REACT_APP_API
})

export const useApi = () => ({
        validateToken: async (token: string) =>{
                return{
                        user: {id:1, name: 'rodrigo', email: 'teste@gmail.com'}
                }
                const response = await api.post('/signin', {token})
                return response.data
        },
        signin: async (email: string, password: string) => {
                return{
                        user: {id:1, name: 'rodrigo', email: 'teste@gmail.com'},
                        token: '1234234123'
                }
               const response = await api.post('/signin', {email, password})
               return response.data
        },
        signout: async () => {
                return {status: true}
                const response = await api.post('/signout')
                return response.data
        }
})