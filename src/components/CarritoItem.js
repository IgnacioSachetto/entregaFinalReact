import { useState } from 'react';
import { useCarrito } from './CustomProvider';

const CarritoItem = ({ producto, onAdd ,vaciarCarritoC,eliminarProductoC}) => {
    
    const [cantidad, setCantidad] = useState(1);
    const [cantidadUpdate, setCantidadUpdate] = useState(producto.cantidad);



    const {agregarProducto} = useCarrito();



    const handleSumar = () => {
        setCantidad(cantidad + 1);
      };
    
      const handleRestar = () => {
        if (cantidad > 1) {
          setCantidad(cantidad - 1);
        }
      };



    const handleVaciarCarrito = () => {
        vaciarCarritoC();
    }
    
    const confirmarACarro = () => {
        setCantidad(1)
        setCantidadUpdate(cantidadUpdate + cantidad);
        const nuevoProducto = {...producto, cantidad: producto.cantidad + cantidadUpdate};
        onAdd(nuevoProducto.cantidad);
        agregarProducto(nuevoProducto, nuevoProducto.cantidad);
    }

    const handleEliminar = (id) => {
        eliminarProductoC(id);
    }

   


    
return (
    <article key={producto.id} >
        <div className='contenedorTarjeta'>
            <div className='contenedorImg'>
            <img className="imagenTarjeta" src={producto.image} alt={producto.title}/>
            </div>
            <div className='textoTarjeta'>
                <h1>{producto.title}</h1>
            </div>
            <div className='contenedorEstadisticas'>
                <div className='estadisticasTarjeta'>
                    Precio: ${producto.price}
                    <br/>
                    Cantidad: {cantidadUpdate}
                    <br/>
                    Total: ${(producto.price * cantidadUpdate)}
                </div>
                <div className="cantidad-botones">
                    <button className="cantidad-boton" onClick={handleRestar}>-</button>
                        <span className="cantidad-medio">{cantidad}</span>
                    <button className="cantidad-boton" onClick={handleSumar}>+</button>

                </div>
                <div className="contenedorBotonComprar">
                    <button className="botonConfirmar" onClick={confirmarACarro}>
                            Confirmar: ${producto.price * (cantidadUpdate+cantidad)}
                            <br/>
                            Agregar: {cantidad}
                    </button>
                </div>
                <button onClick={()=> handleEliminar(producto.id)}>Eliminar</button> 

            </div>
        </div>
        <button className='botonVaciarCarrito' onClick={() => handleVaciarCarrito(producto.id)}>Vaciar Carrito</button>

    </article>
)
}

export default CarritoItem;
