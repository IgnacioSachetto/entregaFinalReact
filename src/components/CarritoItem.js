import { useState } from 'react';
import { useCarrito } from './CustomProvider';
import { Link } from 'react-router-dom';

const CarritoItem = ({ producto, eliminarProductoC }) => {
    const [cantidad, setCantidad] = useState(producto.cantidad);
    const { modificarCantidad } = useCarrito();

    const handleSumar = () => {
        const nuevaCantidad = cantidad + 1;
        setCantidad(nuevaCantidad);
        modificarCantidad(producto.id, nuevaCantidad);
    };

    const handleRestar = () => {
        if (cantidad > 1) {
            const nuevaCantidad = cantidad - 1;
            setCantidad(nuevaCantidad);
            modificarCantidad(producto.id, nuevaCantidad);
        }
    };

    const handleEliminar = (id) => {
        eliminarProductoC(id);
    };

    return (
        <article key={producto.id}>
            <div className='contenedorTarjeta'>
                <div className='contenedorImg'>
                    <img className="imagenTarjeta" src={producto.image} alt={producto.title} />
                </div>
                <div className='textoTarjeta'>
                    <h1>{producto.title}</h1>
                </div>
                <div className='contenedorEstadisticas'>
                    <div className='estadisticasTarjeta'>
                        <div className='textoTarjeta'>
                            Precio: ${producto.price}
                            <br /><br />
                            Cantidad: {cantidad}
                            <br /><br />
                            Total: ${(producto.price * cantidad)}
                            <br />
                        </div>
                    </div>
                    <div className="cantidad-botones">
                        <Link className="cantidad-boton" onClick={handleRestar}>-</Link>
                        <span className="cantidad-medio">{cantidad}</span>
                        <Link className="cantidad-boton" onClick={handleSumar}>+</Link>
                    </div>
                    <Link className="botonEliminar" onClick={() => handleEliminar(producto.id)}>X</Link>
                </div>
            </div>
        </article>
    )
}

export default CarritoItem;