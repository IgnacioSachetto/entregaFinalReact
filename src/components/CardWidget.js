import React from 'react'
import { Link } from "react-router-dom"
import { useCarrito } from './CustomProvider';
import imagenCarrito from '../carrito.png';


export const CardWidget = () => {

  const {totalProductos} = useCarrito()

  return (
    <div className="objeto">
      <Link className="headerLink" to="/carrito">
       
        <img className="imagenCarrito" src={imagenCarrito}  alt="Carrito de compras" />  {totalProductos}

      </Link>

    </div>
    
  );
};

export default CardWidget;
