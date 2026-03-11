import { useContext, useEffect } from 'react'
import { ThemeContext } from './ThemeProvider'

function ThemeChange() {
  const { isChange, themeChange } = useContext(ThemeContext)

  useEffect(()=>
  {
    document.documentElement.classList=isChange?"light":"dark"
  },[isChange])
  return (
    <button onClick={themeChange}>ThemeChange</button>

  )
}

export default ThemeChange