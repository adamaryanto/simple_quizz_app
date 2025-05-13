import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
function Dashboard() {
    const [userName,setUserName] = useState('')
    const Navigate = useNavigate()
    useEffect(() => {
        const name = localStorage.getItem('userName');
        if (name) setUserName(name);
      }, []);
      const handleLogout = () => {
        localStorage.removeItem('userName');
        setUserName('');
      };
      const itemDashboard = [
        {
            mapel: 'Bhs Indo',
            credit:0,
            deskripsi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, expedita',
        },
        {
            mapel: 'MateMatika',
            credit:2,
            deskripsi: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, officiis commodi praesentium cum doloremque dolore!',
        },
        {
            mapel: 'Bhs Indo',
            credit: 4 ,
            deskripsi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, expedita',
        }
      ]
  return (
    <div className='wrapperDashboard'>
        <nav className='navbarDashboard'>
            <h1>Quizz-Appz</h1>
            <div className='itemDashboard'>
                <p>{userName? userName: 'Nama Kamu'}</p>
                {!userName&&(
                    <>
                <p ><Link to='/login' >Login</Link></p>
                <p ><Link to='/register' >Daftar</Link></p>
                    </>
                )}
                {userName&&(
                    <>
                    <p>Credit:</p>
                    <button className='btnLogOut' onClick={handleLogout}>LogOut</button>
                    </>
                )}
            </div>
        </nav>
        <div className='wrapperCard'>
            <ul>
            {itemDashboard.map((item,index)=>(
                <li key={index}>
                    <h2>{item.mapel}</h2>
                    <h2>Credit :{item.credit}</h2>
                    <p>{item.deskripsi}</p>
                    <button  onClick={()=> userName?  Navigate('/pagequiz') : Navigate('/login')}>Mulai Quiz</button>
                </li>
            ))}

            </ul>
        </div>
    </div>
  )
}

export default Dashboard