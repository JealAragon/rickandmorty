        export const paginationLogic =(currentPage, residents) => {
          // excepcion para el primer render 
          if(!residents){
            return{
              pages:[1],
              residentsInPage:[]
            }
          }
        //cantidad de residentes por pagina
        const RESIDENTS_PER_PAGE = 20
        // cantidad de paginas ( donde MAth.ceil, aproximamos al maximo de paginas posibles)
        const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)
      
        // residentes qu se mostraran por pagin
        //definimo el numero de personas inicial del arreglo desde comienza en 0 por que es una array
        const sliceStart = (currentPage - 1 ) * RESIDENTS_PER_PAGE
        // primer elemento de la segunda pagina(se hace asi pues el slice muestra una elemento anterior)
        const sliceEnd = sliceStart + RESIDENTS_PER_PAGE

         // residentes qu se mostraran por pagina actual
        const residentsInPage = residents.slice(sliceStart, sliceEnd)
    
      
        // Generacion del arreglo de las paginas que se van a mostrar
      
        const pages =[]
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i)
          
        }

        return{
          residentsInPage,
          pages
         }


    };
