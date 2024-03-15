import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate,useParams } from 'react-router-dom';
function ResetPassword() {
  const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    let navigate=useNavigate()
    const { token } = useParams();
const handleSubmit=async(e)=>{
  try {
    e.preventDefault()
    let data={password,confirmPassword}
    let res=await axios.post(`/api/v1/user/password/reset/${token}`,data)
    if(res.status==201){
      navigate("/login")
      toast.success("Password Changed Successfully",{
        position:"top-center"
      })
    }
    
  } catch (error) {
    
  }
}

  return <>
  <div className="container-fulid">
  <div className="wrapper">
    <div className="reset_form">
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control type="password" placeholder="Enter New Password" onChange={e => setPassword(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Re-enter your Password" onChange={e => setConfirmPassword(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
    </div>
  </div>
  </div>
  </>
}

export default ResetPassword
