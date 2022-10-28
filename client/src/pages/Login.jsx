import React from 'react'
import { useForm } from 'react-hook-form'
import { userAPI } from '../api/user.js'
import bcrypt, { hash } from "bcryptjs"
import { useState } from 'react'
import { useEffect } from 'react'

export default function Login({ setCheckLogin }) {
    const { register, handleSubmit } = useForm()
    const [userAuth, setUserAuth] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [auth, setAuth] = useState(false);

    const onSubmit = async (dataForm) => {
        const result = await getUserByEmail(dataForm.email)
        setUserAuth({ ...userAuth, ...result })
        const { email, passwd } = result
        validationLogin(dataForm.passwd, passwd)
    }

    const getUserByEmail = async (userEmail) => {
        let result = await userAPI.getUserById(userEmail)
        return result.body[0]


    }
    const validationLogin = (password, hash) => {
        bcrypt.compare(password, hash, (err, result) => {
            //console.log(result)
            if (result) {
                setAuth(true)
                setIsLoading(true)
            }

        })
    }

    useEffect(() => {
        if (isLoading) {
            sessionStorage.setItem('AuthUser', JSON.stringify(userAuth))
            sessionStorage.setItem('Auth', auth)
            setCheckLogin(sessionStorage.getItem('Auth'))
            window.location.href = "/"
        }
    }, [isLoading])

    return (
        <>
            <div>

            </div>
            <section className="login-content">
                <div className="my-4">
                    <h1>FARMACIA</h1>
                </div>
                <div className="login-box">
                    <form className="login-form" method='POST' onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="login-head"><i className="fa fa-lg fa-fw fa-user"></i>ACCEDER</h3>
                        <div className="form-group">
                            <label className="control-label">EMAIL</label>
                            <input className='form-control' name='email' {...register('email', { required: true })} type="text" placeholder='Correo' />
                        </div>
                        <div className="form-group">
                            <label className="control-label">PASSWORD</label>
                            <input className='form-control' name='passwd' {...register('passwd', { required: true })} type="password" placeholder='Clave' />
                        </div>

                        <div className="form-group btn-container">
                            <button type='submit' className="btn btn-primary btn-block"><i className="fa fa-sign-in fa-lg fa-fw"></i>INGRESAR</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
