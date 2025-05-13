import React, {  useRef, useState } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
function Registrasi() {
     const newName = useRef('')
     const newEmail = useRef('')
     const newPassword = useRef('')

    function register(e){
      e.preventDefault()
      const dataAkun = {
        name: newName.current.value,
        email:newEmail.current.value,
        password:newPassword.current.value
      }
      axios.post('http://localhost:5000/registrasi',dataAkun,{
        headers:{
          'Content-Type': 'application/json',
        },
      })
      .then((ress)=>{
        alert(ress.data.message)
      })
      .catch((err)=>{
        if (err.response && err.response.status === 409) {
          alert('Email sudah terdaftar');
        } else {
          console.log('Registrasi Gagal');
        }
      })
    }
  return (
    <div className='wrapperRegis'>
    <h2>Welcome Back</h2>
    <form className='wrapperFormRegis' onSubmit={register}>
        <label htmlFor='text'>Full Name</label><br/>
        <input type='text' placeholder='Your Name' className='inputRegisName' ref={newName}/><br/>
        <label htmlFor='email'>Email</label><br/>
        <input type='email' placeholder='you@example.com' className='inputRegisEmail' ref={newEmail}/><br/>
        <label htmlFor='password'>Password</label><br/>
        <input type='password' placeholder='********' className='inputRegisPassword' ref={newPassword}/><br/>
        <button className='btnRegis' >Registrasi</button>
    </form>
    <p >
          Already have an account? <Link to='/login' >Login</Link>
        </p>

</div>
  )
}

export default Registrasi