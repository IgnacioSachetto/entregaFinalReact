import { useState } from 'react';
import { useCarrito } from './CustomProvider';
import { Link } from "react-router-dom"

const CarritoItem = ({ producto,vaciarCarritoC,eliminarProductoC}) => {
    
    const [cantidad, setCantidad] = useState(1);
    const [cantidadUpdate, setCantidadUpdate] = useState(producto.cantidad);
    const {agregarProducto} = useCarrito();

    const {modificarCantidad} = useCarrito();



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

    const handleModificarCantidad = (id,cantidad) => {
        console.log("Cantidad Agregada es:" + (cantidad))
        const nuevaCantidad = cantidad+producto.cantidad;
        console.log(nuevaCantidad+"nueva es <-")
        modificarCantidad(id, nuevaCantidad);
    }


    const confirmarACarro = () => {
        setCantidadUpdate(cantidad+producto.cantidad)
        const nuevoProducto = {...producto, cantidad: producto.cantidad + cantidadUpdate};
        handleModificarCantidad(nuevoProducto.id, cantidad);


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
                    <div className='textoTarjeta'>Precio: ${producto.price}
                        <br/><br/>
                        Cantidad: {cantidadUpdate}
                        <br/><br/>
                        Total: ${(producto.price * cantidadUpdate)}
                        <br/>
                    </div>
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

    </article>
       
    
)
}

export default CarritoItem;
