import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Resident = ({residentURL}) => {
   const [residentInfo, setResidentInfo] = useState(null)

   const statusStyles = {
    "Alive": "bg-green-500",
    "Dead": "bg-red-500",
    "unknown":"bg-gray-400"
   }

    useEffect(() => {
        axios.get(residentURL)
        .then(({data}) => setResidentInfo(data))
        .catch((err) =>console.log(err))
    
    }, [])
    
  return (
    
    <article className='rounded-sm border-2 p-2'>
    <div className='relative'>
        <img src={residentInfo?.image} alt="" />
        <div className='flex items-center gap-2 absolute bottom-3 left-1/2 -translate-x-1/2 bg-neutral-500/30 p-1'>
            <div className={`h-4 aspect-square rounded-full ${statusStyles[residentInfo?.status]} `}> </div>
          {residentInfo?.status}
        </div>
    </div>
<section>
    <h4>{residentInfo?.name}</h4>
    <ul>
        <li>Species: <span>{residentInfo?.species}</span> </li>
        <li>Origen: <span>{residentInfo?.origin.name}</span> </li>
        <li>Tipes appear: <span>{residentInfo?.episode.length} </span> </li>
    </ul>    
</section>    

</article>
  )
}

export default Resident