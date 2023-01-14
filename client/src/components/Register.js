import React from 'react'
import './Log.css';
import { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
function Register() {

  const [Username ,setUsername] = useState("")
  const [Email ,setEmail] = useState("")
  const [password , setPassword] = useState("")

  const post = () =>{axios.post('http://localhost:4000/post',{
    Username,
    Email,
    password,
  }).then((res)=>{
    if(res.data.status==='user already'){
      alert('email already exist')
    }
  })
  
}

  return (
    <>
    <div className="container">
   <section id="content">
    <form action="/Login">
      <h1>Register Here</h1>
      <div>
      <input type="text" placeholder="Username"  id="username"  onChange={(e)=>{
          setUsername(e.target.value);
        }}/>
      </div>
      <div>
      <input type="text" placeholder="Email"  id="email"  onChange={(e)=>{
          setEmail(e.target.value);
        }}/>
      </div>
      <div>
        <input type="password" placeholder="Password"  id="password" onChange={(e)=>{
          setPassword(e.target.value);
        }} />
      </div>
      <div>
        <input type="submit" value="Log in" onClick={post}/>
    </div>
    </form>
    </section>
    </div>
    </>
  )
}

export default Register