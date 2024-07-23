import React, {useEffect, useState} from 'react'

import axios from "axios"

import { useNavigate, Link} from "react-router-dom"

export const Login = () => {

  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')


  async function submit(e){
    e.preventDefault();

    try{

        await axios.post("https://localhost:8000/signup", {email, password})
    }
    catch(e){
        console.log(e)
    }
  }
  
  return (
    <div classname="login">
        <h1>SignUp</h1>

        <form action="POST">
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' name="" id="" />
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' name="" id="" />

            <input type="submit" onClick={submit}/>

        </form>

        <br />

        <h2>OR</h2>

        <br />


        <Link to="/login">Login Page</Link>
    </div>
  )
}
