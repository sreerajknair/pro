import React,{useState} from "react";
import {useNavigate} from "react-router-dom";




function Signup(){
const[Name,setName]=useState('')
const[email,setEmail]=useState('')
const[phone,setPhone]=useState('')
const[password,setPassword]=useState('')
      
async function registerUser(event){
  event.preventDefault()
  const response=await fetch('http://localhost:3001/register',{
    method:'POST',
    headers:{
           'Content-Type':'application/json'
    },
    body: JSON.stringify({
      Name,
      email,
      phone,
      password
    })
  })
  const data = await response.json()
  console.log(data);
  Navigate("/")
}  
    
 let Navigate=useNavigate();

 

  
    return(
        <div>
            
  <form onSubmit={registerUser}>
  <div className="container" >
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />
    <label for="text"><b>Name</b></label>
    <input  placeholder="Enter name" type="text" value={Name} onChange={(e)=> setName(e.target.value)} name="Name" required />

    <label for="email"><b>Email</b></label>
    <input  type="text" placeholder="Enter Email" value={email} onChange={(e)=> setEmail(e.target.value)} name="email" required />

    <label for="phone"><b>phone number</b></label>
    <input  type="text"  placeholder="Enter phone number" value={phone} onChange={(e)=> setPhone(e.target.value)} name="phone" required />

    <label for="psw"><b>Password</b></label>
    <input  type="password"  placeholder="Enter Password" value={password} onChange={(e)=> setPassword(e.target.value)} name="password" required/>
    <div className="clearfix">
      
      <button  type="submit" class="signupbtn">Sign Up</button>
       
    </div>
  </div>
  </form>
    </div>
    )
}
export default Signup;