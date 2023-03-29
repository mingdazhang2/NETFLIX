import React, { useState, useRef } from 'react'
import './login.scss'
const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("")
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const handleStart = ()=>{
//     setEmail(emailRef.current.value)
//   }
//   const handleFinist = ()=>{
//     setEmail(passwordRef.current.value)
//   }
  return (
    <div className='login'>
        <div className='top'>
            <div className='wrapper'>
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt="logo"
                className='logo' 
                />    
            </div>
        </div>
        <div className='container'>
            <form>

                <h1>Sign In</h1>
                <input type="text" placeholder='Email or phone number' />
                <input type="password" placeholder='Password'/>
                <button className='loginButton'>Sign In</button>

                <span>New to Netflix? <b>Sign up now.</b></span>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. </small>
            </form>
        </div>
    </div>
  )
}

export default Login