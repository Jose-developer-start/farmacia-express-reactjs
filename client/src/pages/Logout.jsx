import React from 'react'
import { useEffect } from 'react'

export default function Logout({setCheckLogin}) {
    
    useEffect(()=>{
        sessionStorage.setItem('Auth',false)
        sessionStorage.setItem('AuthUser',{})
        setCheckLogin(sessionStorage.getItem('Auth'))
        window.location.href = "/login"
    },[])
  return (
    <div>Cerrando sesión</div>
  )
}
