import React, { useEffect, useState } from 'react'
import Resident from './Resident'
import { paginationLogic } from '../util/pagination'
const FIRST_PAGE = 1

const ResidentList = ({residents, location}) => {
  const [currentPage, setcurrentPage] = useState(FIRST_PAGE)
  const {pages, residentsInPage} = paginationLogic(currentPage, residents)

  // cuando cambia el location (dimension), que la que se pagina (currentPage) que se muestre sea la primera 
  useEffect(() => {
    // magin string= no lo sacamos de la manga esta  mal si se pone 1 en ver de la variable 
      setcurrentPage(FIRST_PAGE)
  }, [location])
  
  
  return (
    <section className='px-3'>
        {/*lista de residentes */}
        <section className='grid gap-8 grid-cols-[repeat(auto-fill,_200px)] justify-center max-w-[1024px] mx-auto py-6'>
            {/*generar una lista que por cada residente me muestre resident para el caso se llama a resindetsInPages */}
           {residentsInPage?.map((resident) => ( <Resident key={resident} residentURL={resident}/>))}
        </section>
        {/*paginacion */}
        <section className='flex justify-center gap-4 flex-wrap pb-8 '>

        {pages.map((page) =>(
          <button 
          key={page} 
          onClick={() => setcurrentPage(page)} 
          // si de quiere poner una condicional al tailwind se tiene que hacer con un operador ternario para cambiar la clase 
          className={` p-2 px-3 rounded-md ${currentPage === page ? "bg-green-900/50": "bg-green-700"}`}>
          {page}
          </button>
          ))}

        </section>
    </section>
  )
}

export default ResidentList