import React from 'react'
import { Link } from "react-router-dom"
import { useCarrito } from './CustomProvider';

export const CardWidget = () => {

  const {totalProductos} = useCarrito()

  return (
    <div className="objeto">
      <Link className="headerLink" to="/carrito">
        Carrito {totalProductos}

      </Link>
      <img src="../img/carrito.png" alt="Carrito de compras" />
    </div>
  );
};

export default CardWidget;
