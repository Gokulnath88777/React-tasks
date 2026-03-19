import React, {  createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { enrolledContext } from './EnrolledProvider';
import { purchaseContext } from './PurchaseProvider';

export const AuthContext=createContext()
function AuthProvider({children}) {
    let [loginDetails,setLoginDetails]=useState()
    let [login,setLogin]=useState(false)
    let {setEnrolled}=useContext(enrolledContext)
    let{setPurchase}=useContext(purchaseContext)
    console.log(children);
    let navigate=useNavigate(     )
    function LoginFunc(userName)
    {
       setLoginDetails(userName)
       setLogin(true)
       setLogin(true)
    }
    function logoutFunc()
    {
      console.log("Logut");
      setEnrolled(null);
      setPurchase(null);
      navigate("/")
    }
  return (
    <>
        <AuthContext.Provider value={{LoginFunc,loginDetails,logoutFunc}}>
            {children}
        </AuthContext.Provider>
    </>
  )
}

export default AuthProvider