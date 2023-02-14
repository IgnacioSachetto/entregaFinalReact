import React, { useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ productos }) => {
    
  const onAdd = (parametro) => {
    console.log(parametro)
}
  
  
  return (
      <div>
        <div className="tituloDelProducto">{productos.title}</div>
        <div className="contenedorImagenDescripción">
          <img
            className="imagenDelProducto"
            src={productos.image}
            alt={productos.title}
          />
          <div className="descripcionDelProducto">
            {productos.description}
          </div>
        </div>
        <ItemCount productos={productos} onAdd={onAdd}/>
      
      </div>
    );
  };
  
  export default ItemDetail;