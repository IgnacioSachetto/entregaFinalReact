import React from 'react'
import { Link } from "react-router-dom"
import { useCarrito } from './CustomProvider';
const CarritoBotones = () => {
    const {vaciarCarrito} = useCarrito();

    
    const handleVaciarCarrito = () => {
        vaciarCarrito()
    }

  return (
    <div>
    <button className='botonVaciarCarrito' onClick={() => handleVaciarCarrito()}>Vaciar Carrito</button>
    <Link className="botonConfirmarCompra" to="/checkout/">Confirmar Compra</Link> 
    </div>
 )
}

export default CarritoBotones