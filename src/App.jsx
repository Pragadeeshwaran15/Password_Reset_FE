import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
function App() {
  let route=createBrowserRouter(AppRoutes)
  return (
    <RouterProvider router={route}/>
  )
}

export default App
