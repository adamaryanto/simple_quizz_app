import React, { useRef } from 'react'
import {Link, Navigate,useNavigate} from 'react-router-dom';
import axios from 'axios';
function Login() {
  const emailRef = useRef('')
  const PasswordRef = useRef('')
  const Navigate = useNavigate()
  function onLogin(e){
    e.preventDefault()
    const dataLogin = {
      email:emailRef.current.value,
      password: PasswordRef.current.value
    }
    axios.post('http://localhost:5000/login',dataLogin)
    .then((ress)=>{
      alert('Login Berhasil')
      localStorage.setItem('userName',ress.data.user.name)
      Navigate('/')
    })
    .catch((err)=>{
      alert('login gagal')
      console.log(err)
    })
  }
  return (
    <div className='wrapperLogin' onSubmit={onLogin}>
        <h2>Welcome Back</h2>
        <form className='wrapperFormLogin'>
            <label htmlFor='email'>Email</label><br/>
            <input type='email' placeholder='you@example.com' className='inputLoginEmail' ref={emailRef}/><br/>
            <label htmlFor='password'>Password</label><br/>
            <input type='password' placeholder='********' className='inputLoginPassword' ref={PasswordRef}/><br/>
            <button className='btnLogin' >Login</button>
        </form>
        <p>
          Don’t have an account? <Link to="/register">Sign up</Link>
        </p>
    </div>
  )
}

export default Login