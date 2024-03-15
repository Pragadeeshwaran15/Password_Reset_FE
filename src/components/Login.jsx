import React from 'react'
import axios from 'axios';
import {toast} from 'react-toastify'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Login() {
  
  let navigate=useNavigate()
  const handleSubmit = async(e)=>{
    try {
    e.preventDefault()
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData); 
    let res=await axios.post('/api/v1/user/login',formProps)
    if(res.status==201){
      navigate('/')
      localStorage.setItem('logged',true)
      toast.success("Login Success!!",{
        position:"top-center"
      })
    }
    console.log(formProps)
    } catch (error) {
      
    }

  }
  return <>
    <h1 className='text-center bg-dark heading'>Login</h1>
    <div className='container-fulid'>
        <div className="wrapper">
          <div className="form">
          <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password'/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Log In
      </Button>
      <div className='text-center'>
      <Link onClick={()=>navigate('/fogotpassword')} className='links'>Forgot Password</Link><br />
      <Link onClick={()=>navigate('/register')} className='links'>Create Account</Link><br />
      </div>
    </Form>
          </div>
        </div>
      
    </div>
    </>
}

export default Login
