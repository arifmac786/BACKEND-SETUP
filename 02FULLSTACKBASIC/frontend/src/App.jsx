import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    }
  
  )
  .catch((error)=>{
    console.log(error);
    
  })
  },[])

  return (
    <>
       <h1>hello welcome to my profile</h1>
       <p>JOKES:{jokes.length}</p>
       {
        jokes.map((joke)=>(
          <div style={{
            border:'2px solid white'
          }} key={joke.id}>
            <h2>{joke.title}</h2>
            <h4> {joke.joke}</h4>
          </div>
        ))
       }
      
    </>
  )
}

export default App
