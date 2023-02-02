import api from '../api/api'

import {useState,useEffect} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

export default function useAuht(){
    const [authenticated, setAuthenticated] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }
    },[])

    async function register(user){
        let msgText = 'Usuário cadastrado'
        let msgType = 'success'

        try{
            const data = await api.post('/user/register',user)
            .then((response)=>{
                return response.data
            })
            if(data){
                await authUser(data)
                window.location.reload()
            }
        }catch(error){
            msgText = error.response.data.message
            msgType = 'error'
        }
    }

    async function login(user){
        let msgText = 'Bem-Vindo ;)'
        let msgType = 'success'

        try{
            const data = await api.post('/user/login',user)
            .then((response)=>{
                return response.data
            })
            if(data){
                await authUser(data)
                window.location.reload()
            }
        }catch(error){
            msgText = error.response.data.message
            msgType = 'error'
        }

    }

    async function authUser(data){
        setAuthenticated(true)
        localStorage.setItem('token',JSON.stringify(data.token))
        navigate('/profile')
    }

    function logout(){
        const msgText = 'Volte sempre ;)'
        const msgType = 'success'

        setAuthenticated(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authoruzation = undefined
        navigate('/')


    }

    return {authenticated,register,logout,login}
}