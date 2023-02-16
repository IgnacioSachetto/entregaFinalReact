import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCarrito } from './CustomProvider';


const ItemCount = ({ productos, onAdd }) => {
  const [cantidad, setCantidad] = useState(1);
  const { agregarProducto } = useCarrito();

  const handleSumar = () => {
    setCantidad(cantidad + 1);
  };

  const handleRestar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const confirmarACarro = () => {
    onAdd(cantidad);
    agregarProducto(productos, cantidad);
  }

  return (
    <>
      <div className="contenedorBotonComprar">
        <Link className="botonComprar" onClick={confirmarACarro}>
          Comprar ${productos.price * cantidad} <br />
          Stock: {productos.stock}
        </Link>
      </div>
      <div className="cantidad-botones">
        <Link className="cantidad-boton" onClick={handleRestar}>-</Link>
        <Link className="cantidad-medio-detail">{cantidad}</Link>
        <Link className="cantidad-boton" onClick={handleSumar}>+</Link>
      </div>
    </>
  )
}

export default ItemCount