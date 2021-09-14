import React from 'react'
const Mensaje = ({mensaje}) => {
  return (
    <h3 className={mensaje ? mensaje.mensaje.type : ''}>
      {mensaje ? mensaje.mensaje.mensaje : ''}
    </h3>
  )
}
export default Mensaje
