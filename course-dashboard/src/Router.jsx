import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Enrolled from './Enrolled'
import LoginForm from './LoginForm'
import DashBoard from './DashBoard'
import Courses from './Courses'
import Profile from './Profile'
import ViewCourse from './ViewCourse'
function Router() {

  return (
    <Routes>
      <Route path='/' index element={<LoginForm />}></Route>
      <Route path="/dashboard" element={<DashBoard />}>
        <Route path='course' element={<Courses/>}></Route>
        <Route index element={<Courses />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='enrolled' element={<Enrolled />}></Route>
        <Route path='viewCourse/:id' element={<ViewCourse />}></Route>

      </Route>


    </Routes>
  )
}

export default Router 