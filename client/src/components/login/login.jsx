import React, { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";

import "./login.css"


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [code, setCode] = useState('');
    const [showCodeArea, setShowCodeArea] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/auth/login", {
                "email": email,
                "password": pass
            });

            setShowCodeArea(true);
            setErrorMessage('Enter two step code to login')

            // localStorage.setItem("currentUser", JSON.stringify(res.data))
            // console.log(res.data);
            // window.location.href = "/"
        } catch (error) {
            if (error.response.status == 404) {
                setErrorMessage('Account does not exist');
            }
            if (error.response.status == 400) {
                setErrorMessage('Incorrect password');
            }
            console.log(error);
        }
    }

    const handleSubmit2 = async (e) => {
        e.preventDefault();
        try {
            console.log('Here');

            const res = await axios.post("http://localhost:8000/api/auth/twofactor", {
                "email": email,
                "code": code
            }, { withCredentials: true });

            setShowCodeArea(true);

            localStorage.setItem("currentUser", JSON.stringify(res.data))
            console.log(res.data);
            window.location.href = "/"
        } catch (error) {
            if (error.response.status == 402) {
                setErrorMessage('Incorrect Verification code');
            }
            else {
                setErrorMessage('Something went wrong');
            }
            console.log(error);
        }
    }


    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={showCodeArea ? handleSubmit2 : handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                {showCodeArea ? <label htmlFor="code">Two Factor Code</label> : <></>}
                {showCodeArea ? <input value={code} onChange={(e) => setCode(e.target.value)} type="text" placeholder="" id="code" name="code" /> : <></>}
                <p className="error">{errorMessage}</p>
                <button type="submit" className="login">Log In</button>
                <Link to='/signup' className='registor'>Don't have an account? Register here.</Link>
            </form>
        </div>
    )
}

export default Login;