import React from 'react'
import { useState } from 'react';
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
        <button className="botonComprar" onClick={confirmarACarro}>
          Comprar ${productos.price * cantidad} <br />
          Stock: {productos.stock}
        </button>
      </div>
      <div className="cantidad-botones">
        <button className="cantidad-boton" onClick={handleRestar}>-</button>
        <span className="cantidad-medio-detail">{cantidad}</span>
        <button className="cantidad-boton" onClick={handleSumar}>+</button>
      </div>
    </>
  )
}

export default ItemCount