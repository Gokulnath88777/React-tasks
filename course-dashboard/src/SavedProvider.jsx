import React, { createContext,useState } from 'react'
import { toast } from 'react-toastify'

export const savedContext=createContext()
function SavedProvider({children}) {
    let [saved,setSaved]=useState(null)
       function handleSaved(e) {

        toast.success("Course Saved")
        savedFunc(e)

    }
    function savedFunc(savedTitle)
    {
        setSaved(prev=>[...(prev||[]),savedTitle])
    }
    function handleRemove(course)
    {
        let removeSave=saved.filter(save=>save.title!=course.title)
        setSaved(removeSave)
    }
  return (
   <savedContext.Provider value={{saved,handleSaved,handleRemove,setSaved}}>
          {children}
   </savedContext.Provider>
  )
}

export default SavedProvider