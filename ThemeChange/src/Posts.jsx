import React, { useEffect, useState } from 'react'
import FetchData from './FetchData'

function Posts() {
  let [posts,setPosts]=useState(null)
  useEffect(()=>
  {
    const getPost=async ()=>
    {
      const data=await FetchData()
      setPosts(data)
    }
    getPost()
  },[])
  return (
    <>
     <h3>Posts</h3>
      {posts ? posts.map((p)=>
      <ul key={p.id}>
        <li>{p.body}</li>
      </ul>
      ):<p>Lodaing</p>}
    </>
  )
}

export default Posts