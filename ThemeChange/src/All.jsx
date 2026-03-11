import React, { useEffect, useState } from 'react'
import FetchData from './FetchData';

function All() {
  let [allPosts, setAllPosts] = useState([])
  useEffect(() => {
    const getPost = async () => {
      let data = await FetchData()
      setAllPosts(data)
    }
    getPost()
  }, [])
  return (
    <>
      <h3>All Posts</h3>
      {allPosts ? allPosts.map((post) => <ul key={post.id}>
        <li>{post.userId}</li>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </ul>) : <p>Loding.....</p>}
    </>
  )
}

export default All