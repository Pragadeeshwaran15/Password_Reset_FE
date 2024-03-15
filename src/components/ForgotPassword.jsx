import React from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function ForgotPassword() {
  let navigate=useNavigate()
  const handleSubmit=async(e)=>{
    try {
      e.preventDefault()
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      let res=await axios.post('/api/v1/user/password/forgot',formProps)
      if(res.status==200){
         toast.success("Email sent Successfully",{
          position:"top-center"
         })
      }
    } catch (error) {
      toast.error(error,{
        position:"top-center"
       })
    }
  }
  return <>
    <h1 className=' text-center heading bg-dark'>Forgot Password</h1>
    <div className='container-fulid'>
      <div className="wrapper">
        <div className="forgot_form">
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' />
      </Form.Group>
      <Button variant="primary" type="submit">
        send
      </Button><br />

      <Link onClick={()=>navigate('/login')} className='links'>Back</Link>
    </Form>
          
        </div>
      </div>
      
    </div>
    </>
}

export default ForgotPassword
