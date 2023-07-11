import React, { useState, useSyncExternalStore } from 'react'

const Cita = () => {
 //aqui va el codigo javascript
 const [count, setcount] = useState(0)
 // funcion flecha,
 const actualizarnumero = (props) => {
  setcount(props)
 }
 return (
  // aqui va el codigo

  <>
   <h2>cita </h2>

   <h2>numero: {count}</h2>
   <button onClick={() => actualizarnumero(count + 1)}>click me</button>
  </>
 )
}
export default Cita
