
import {  Link, Outlet } from 'react-router-dom'
import ThemeChange from './ThemeChange'
import Header from './Header'

function MainLayout() {
  return (
    <>
    <nav className='header'>
        <Header/>
        <div>
          <Link to={"/all"}>All</Link>
          <Link to={"/title"}>Title</Link>
          <Link to={"/posts"}>Posts</Link> 
        </div>       
      <ThemeChange />
    </nav>
    <main>
        <Outlet/>
    </main>
       
    </>
  )
}

export default MainLayout