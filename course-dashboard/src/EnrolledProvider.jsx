import React, { createContext,useState } from 'react'
import { toast } from 'react-toastify'
export const enrolledContext=createContext()
function EnrolledProvider({children}) {
    let [enrolled,setEnrolled]=useState(null)
       function handleEnrolled(e) {

        toast.success("Enrolled")
        enrollFunc(e)

    }
    function enrollFunc(enrolledTitle)
    {
        setEnrolled(prev=>[...(prev||[]),enrolledTitle])
        console.log(enrolledTitle);
    }
    function handleRemove(course)
    {
        let removeEnroll=enrolled.filter(enroll=>enroll.title!=course.title)
        setEnrolled(removeEnroll)
    }
  return (
   <enrolledContext.Provider value={{enrolled,handleEnrolled,handleRemove,setEnrolled}}>
          {children}
   </enrolledContext.Provider>
  )
}

export default EnrolledProvider