import React from 'react'
import { Link } from "react-router-dom"
import { useCarrito } from './CustomProvider';

const CarritoBotones = () => {
  const {vaciarCarrito} = useCarrito();

  const handleVaciarCarrito = () => {
    vaciarCarrito()
  }

  return (
    <div className='contenedor-botones'>
    <Link className='botonVaciarCarrito' onClick={() => handleVaciarCarrito()}>Vaciar Carrito</Link>
    <Link className="botonConfirmarCompra" to="/checkout/">Confirmar Compra</Link>
    </div>
 )
}

export default CarritoBotones