import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useHttp } from "../../hooks/http.hook";
import { useMessage } from "../../hooks/message.hook";

export const Auth = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', 
        password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registration = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        }
        catch (e) {}
    }

    const loginisation = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
            message(data.message)
        }
        catch (e) {}
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Сократи ссылку</h1>
                <div class="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input 
                                    placeholder="Enter your email" 
                                    id="email" 
                                    type="text"
                                    name="email"
                                    className="yellow-input"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input 
                                    placeholder="Enter your password" 
                                    id="password" 
                                    type="password"
                                    name="password"
                                    className="yellow-input"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button 
                            className="btn yellow darken-4" 
                            style={{marginRight: 10}}
                            disabled={loading}
                            onClick={loginisation}
                        >Войти</button>
                        <button 
                            className="btn grey leghten-1 black-text"
                            onClick={registration}
                            disabled={loading}
                        >Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    )
}