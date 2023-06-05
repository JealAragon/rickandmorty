import axios from 'axios'
import React from 'react'

const Location = ({location, setLocation}) => {
    const handleSutmit = (e) =>{
      e.preventDefault()
      const newLocation = e.target.newLocation.value

      const URL=`https://rickandmortyapi.com/api/location/${newLocation}` 
      
      axios.get(URL)
      .then(({data})=>setLocation(data))
      .catch((err) => console.log(err))

    }

  return (
    <section className='flex flex-col sm:flex-row gap-2  justify-center max-w-[500px] mx-auto py-6 '>
      <section className=' max-w-xs justify-center mx-auto px-2'>
      <div>
        <img src="../public/ram.png" alt="" />
      </div>
        {/*imput de busqueda  */}
        </section>

      <section> 

        <form  onSubmit={handleSutmit} className='flex  p-2 rounded-lg border-2 justify-center my-auto'>
          <input className='text-slate-900 rounded-l-lg' id='newLocation' placeholder='Type a location Id...' type="text" />
          <button className='bg-lime-700 flex rounded-r-lg'> {<i className='bx bx-search-alt '>Search </i>}  </button>
        </form>
        {/*info location */}
          <section className='bg-lime-950 p-2 rounded-lg'>
          <h2 className='text-lime-700 text-lg font-bold  text-center'>{location?.name}</h2>
            <ul>
                <li>type: {location?.type}</li>
                <li>dimention: {location?.dimension} </li>
                <li>population: {location?.residents.length}</li>
            </ul>

     </section>    
      




      </section>
     


        <section>

        </section>
    </section>
  )
}

export default Location