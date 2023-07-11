import React, { useState } from 'react'

export default function Formulario() {
 return (
  <>
   <h2>Crear Citas</h2>

   <form>
    <label>Nombre De Mascota</label>
    <input
     type='text'
     name='nombre de mascota'
     className='u-full-width'
     placeholder='Nombre De Mascota'
    />
    <label>Nombre Del dueño</label>
    <input
     type='text'
     name='nombre del dueño'
     className='u-full-width'
     placeholder='Nombre Del Propietario'
    />
    <label>Fecha</label>
    <input type='date' name='fecha' className='u-full-width' />

    <label>Hora</label>
    <input type='time' name='hora' className='u-full-width' />

    <label>Síntomas</label>
    <textarea className='u-full-width' name='sintomas'></textarea>

    <button type='submit' className='u-full-width button-primary'>
     Agregar Cita
    </button>
   </form>
  </>
 )
}
