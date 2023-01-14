  import './Log.css';
 
import React, {useState } from 'react';
import axios from 'axios';
// import AuthContext from './../context/AuthProvider'

// const LOGIN_URL = '/auth'

function Login() {
   
      // const userRef = useRef()
      // const errRef  = useRef()

      const [username,setUsername] = useState('')
      const [password,setPassword] = useState('')
      const get = ()=>{axios.get("http://localhost:4000/getlogin",{
        username,
        password
      }).then((res)=>{
        if(res.data.status === 'valid'){
          window.location.assign("/dashboard")
        }
        else{
          
          alert("Invalid password")
        }
      })
      }
      // const [errMsg,setErrMsg] = useState('')
  

    //   useEffect(()=>{
    //     userRef.current.focus()
    //   },[])
    //   useEffect(()=>{
    //     setErrMsg('')
    //   },[username,password])
       
    // const handleSubmit = async (e) =>{
    //   e.preventDefault()
      // try{
      //    const response = await axios.post(LOGIN_URL,JSON.stringyfy({username,password}),{
      //     headers:{'content-Type':'application/json'},
      //     withCredentials : true
      //    })
        //  console.log(JSON.stringyfy(response?.data))
        //  const accessToken = response?.data?.accessToken
        //  const roles = response?.data?.roles
        //  setAuth({username,password,roles,accessToken})
      //    setUsername("")
      //    setPassword("")
      //    setSuccess(true)
      // }catch(err){
            //  if(!err?.response){
            //   setErrMsg('No server response')
            //  }
            //  else if(err.response?.status === 400){
            //   setErrMsg('Missing Username or password')
            //  }
            //  else if (err.response?.status === 401){
            //        setErrMsg('Únauthorized')
            //  }
            //  else{
            //   setErrMsg("Login Failed")
            //  }
            //  errRef.current.focus()
      // }
     
 

  return ( 
    <>
    
      <div class="container">
        
  <section id="content">
    <form>
      <h1>Login Form</h1>
      <div>
        <input type="text" placeholder="Username"  id="username"  name = "username"  onChange={(e)=>{setUsername(e.target.value)}} required />
      </div>
      <div>
        <input type="password" placeholder="Password"  id="password"  name = "password" onChange={(e)=>{setPassword(e.target.value)}} required  />
      </div>
      <div>
        <input  type = 'submit'value="Log in" onClick={get} />
        <a  class = "a1" href="#">Lost your password?</a>
        <a  class = "a1" href="/Register">Register</a>
      </div>
    </form>
    
  </section>
</div>
    
    
    </>
  )
  }

export default Login