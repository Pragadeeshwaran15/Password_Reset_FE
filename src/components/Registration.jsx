import React from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
function Registration() {
  let navigate=useNavigate()
  const handleSubmit = async(e)=>{
    try {
    e.preventDefault()
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData); 
    let res=await axios.post('/api/v1/user/register',formProps)
    if(res.status==201){
      navigate('/login')
      toast.success("Account Created 😍!!",{
        position:"top-center"
      })
    }
    console.log(formProps)
    } catch (error) {
      toast.error(error,{
        position:"top-center"
      })
    }

  }
  return <>
  <h1 className='text-center heading bg-dark'>Welcome</h1>
    <div className='container-fulid'>
        <div className="wrapper">
          <div className="form">
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" name='name' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
      <div className='text-center'>
      <Link onClick={()=>navigate('/login')} className='links'>Already have an Account ?</Link><br />
      <Link onClick={()=>navigate('/')} className='links'>Back</Link><br />
      </div>
    </Form>
          </div>
        </div>
      
    </div>
  </>
}

export default Registration
