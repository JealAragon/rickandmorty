
    // funcion que retorna un numero aleatorio entre 1 y 126
    export const getRandomDimension = () => {
      // el metodo math.random  brinda un parametro de 0 a 0.9999
     return Math.floor(Math.random() * 126) + 1
    }