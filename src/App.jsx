
import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './util/random'
import axios from 'axios'
import Location from './componets/Location'
import ResidentList from './componets/ResidentList'

function App() {
 
  const [location, setLocation] = useState(null)
  
  useEffect(() => {
    const URL=`https://rickandmortyapi.com/api/location/${getRandomDimension()}` 

    // se realiza una promesa 
    axios.get(URL)
      .then(({data})=>setLocation(data))
      .catch((err) => console.log(err))
  
  }, [])
  
  return (
  <main className='bg-black min-h-screen text-white'>
    <Location location={location} setLocation={setLocation}/>
    <ResidentList location={location} residents={location?.residents} />

  </main>
  )
}

export default App
