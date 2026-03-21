
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  let [data,setData]=useState([])
  let[searchData,setSearch]=useState([])
  let searchRef=useRef()
useEffect(()=>
{
  const getData=async()=>
  {
    const data=await fetch("https://jsonplaceholder.typicode.com/users");
    const response=await data.json()
    
    setData(response)
  }
getData()
})
function SearchFunc()
{
  console.log("Search");
  const user=data.find(d=>d.email==searchRef.current.value)
  setSearch([user]) 

}
  return (
    <>
    <label htmlFor="">Search</label> 
    <input type="text" ref={searchRef}/>
    <button onClick={SearchFunc}>Search</button>
     {
      searchData.length==0 ? data.map(
        d=><div key={d.id}>
            <h1>{d.name}</h1>
            <h3>{d.usename}</h3>
            <h3>{d.email}</h3>
        </div>
      ):searchData.map(d=>console.log(d))
     }
    </>
  )
}

export default App
