import { Route, Routes } from 'react-router-dom'
import Tittle from './Tittle'
import Posts from './Posts'
import All from './All'
import MainLayout from './MainLayout'
function FrontPage() {
  return (

      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='all' element={<All />}></Route>
          <Route path='title' element={<Tittle />}></Route>
          <Route path='posts' element={<Posts />}></Route>
        </Route>
      </Routes>

  )
}

export default FrontPage