import{ createContext, useState } from 'react'
export const ThemeContext=createContext(
   
   { isLogin:"",
     themeChange:()=>{}
   }

)
function ThemeProvider({children}) {
    let[isChange,setChange]=useState(true)
    function themeChange()
    {   console.log("ThemeChange");
        setChange(!isChange)
    }
  return (
    <ThemeContext.Provider value={{isChange,themeChange}}>
        {children}    
    </ThemeContext.Provider>
  )
}

export default ThemeProvider