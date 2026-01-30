import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [jokes,setJokes] = useState([])

  useEffect(()=> {
    axios.get('/api/jokes')
    .then((response)=> {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  })

  return (
    <>
      <h1>Hello Everyone Here Me Nayan... </h1>
      <h2>JOKES: {jokes.length}</h2>

      {
        jokes.map((joke)=> (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
