import React,{ useState } from "react";
import './index.css';

export const Login=(props)=>{
    const {email,setEmail}=useState('');
    const {password,setPassword}=useState('');
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return(
    <div className="form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <label className="label" htmlFor="email">email</label>
            <input className="input" value={email} onChange={(e)=>setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label className="label" htmlFor="email">password</label>
            <input className="input" value={password} onChange={(e)=>setPassword(e.target.value)}type="password" placeholder="********" id="password" name="password"/>
            <button className="button" type="submit">Login</button>
        </form>
        <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Dont'have an account?Register here</button>
    </div>
    )

}