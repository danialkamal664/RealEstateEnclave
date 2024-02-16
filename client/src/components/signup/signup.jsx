import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import './signup.css';

export const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/auth/registor", {
                "username": name,
                "email": email,
                "password": pass,
                "balance": 0
            });
            // localStorage.setItem("currentUser", JSON.stringify(res.data))
            // console.log(res.data);
            window.location.href = "/login"
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className='login' type="submit">Sign up</button>
                <Link className='loginText' to='/login'>Already have an account? Login here.</Link>
            </form>
        </div>
    )
}