import React, { useState } from 'react'

function Home() {

  const [name,setName]=useState("");
  return (
    <main className="home-page">
        <label htmlFor="home-name">Your name</label>
        <input id="home-name" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <h2>Hello {name}</h2>
    </main>
  )
}

export default Home
