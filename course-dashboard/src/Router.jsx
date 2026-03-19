import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import DashBoard from './DashBoard'
import Courses from './Courses'
import Profile from './Profile'
import ViewCourse from './ViewCourse'
import Saved from './Saved'
import { AuthContext } from './AuthProvider'
function Router() {
      let{loginDetails}=useContext(AuthContext);
  return (
    <Routes>
      <Route path='/' index element={<LoginForm />}></Route>
        <Route path="/dashboard" element={loginDetails.length>0?<DashBoard />:<Navigate to='/'></Navigate>}>
        <Route path='course' element={<Courses/>}></Route>
        <Route index element={<Courses />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='saved' element={<Saved />}></Route>
        <Route path='viewCourse/:id' element={<ViewCourse />}></Route>
        
      </Route>


    </Routes>
  )
}

export default Router 