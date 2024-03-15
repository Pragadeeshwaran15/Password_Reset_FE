import React from 'react'
import DashBoard from '../components/DashBoard'
import Login from '../components/Login'
import Registration from '../components/Registration'
import ForgotPassword from '../components/ForgotPassword'
import ResetPassword from '../components/ResetPassword'
import { Navigate } from 'react-router-dom'
const AppRoutes=[
    {
        path:"/",
        element:<DashBoard/>
},
{
    path:"/login",
    element:<Login/>
},{
    path:"/register",
    element:<Registration/>
},{
    path:"/fogotpassword",
    element:<ForgotPassword/>
},{
    path:"/resetPassword/:token",
    element:<ResetPassword/>
},{
    path:"*",
    element:<Navigate to="/"/>
   }

]

export default AppRoutes
