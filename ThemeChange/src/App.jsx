import FrontPage from "./FrontPage"
import ThemeChange from "./ThemeChange"
import ThemeProvider from "./ThemeProvider"
function App() {

  return (
    <>
    <ThemeProvider>
       <FrontPage/>
    </ThemeProvider>
    </>
  )
}

export default App
