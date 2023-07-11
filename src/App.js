import React from 'react'
import Cita from './components/Cita'
import Formulario from './components/Formulario'
export default function citas() {
 return (
  <>
   <h1>administrador de citas</h1>

   <div className='container'>
    <div className='row'>
     <div className='one-half column'>
      <Formulario />
     </div>
     <div className='one-half column'>2</div>
     <Cita/>
    </div>
   </div>
  </>
 )
}

