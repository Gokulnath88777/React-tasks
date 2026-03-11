import React, { useEffect, useState } from 'react'
import FetchData from './FetchData'

function Tittle() {
  let [title, setTitle] = useState(null)
  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await FetchData()
        setTitle(data)
      }
      catch(error)
      {
        console.log(error);
      }
    }
    getPost()

  }, [])
  return (
    <>
    <p>Title</p>
      {title ? title.map((posts) => 
        <ul key={posts.id}>
          <li>{posts.title}</li>
        </ul>
      ):<p>Loding.....</p>}
    </>
  )
}

export default Tittle