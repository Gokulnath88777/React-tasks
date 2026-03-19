import React, {  createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { savedContext } from './SavedProvider';
import { purchaseContext } from './PurchaseProvider';

export const AuthContext=createContext()
function AuthProvider({children}) {
    let [loginDetails,setLoginDetails]=useState(()=>
    {const data = localStorage.getItem("loginName");
      return data ? data.replace(/"/g, "") : "";
    })
    let {setSaved}=useContext(savedContext)
    let{setPurchase}=useContext(purchaseContext)
    console.log(children);
    let navigate=useNavigate(     )
    function LoginFunc(userName)
    {
       
       localStorage.setItem("loginName",JSON.stringify(userName))
       setLoginDetails(userName)
    }
    function logoutFunc()
    {
      localStorage.removeItem("loginName")
      setLoginDetails("");
      setSaved(null);
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