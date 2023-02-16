import { useState } from 'react';
import { useCarrito } from './CustomProvider';
import { Link } from 'react-router-dom';

const CarritoItem = ({ producto, eliminarProductoC }) => {

    const [cantidad, setCantidad] = useState(1);
    const [cantidadUpdate, setCantidadUpdate] = useState(producto.cantidad);

    const { modificarCantidad } = useCarrito();

    const handleSumar = () => {
        setCantidad(cantidad + 1);
    };

    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const handleModificarCantidad = (id, cantidad) => {
        const nuevaCantidad = cantidad + producto.cantidad;
        modificarCantidad(id, nuevaCantidad);
    }

    const confirmarACarro = () => {
        setCantidadUpdate(cantidad + producto.cantidad)
        const nuevoProducto = { ...producto, cantidad: producto.cantidad + cantidadUpdate };
        handleModificarCantidad(nuevoProducto.id, cantidad);


    }

    const handleEliminar = (id) => {
        eliminarProductoC(id);
    }

    return (
        <article key={producto.id} >
            <div className='contenedorTarjeta'>
                <div className='contenedorImg'>
                    <img className="imagenTarjeta" src={producto.image} alt={producto.title} />
                </div>
                <div className='textoTarjeta'>
                    <h1>{producto.title}</h1>
                </div>
                <div className='contenedorEstadisticas'>
                    <div className='estadisticasTarjeta'>
                        <div className='textoTarjeta'>Precio: ${producto.price}
                            <br /><br />
                            Cantidad: {cantidadUpdate}
                            <br /><br />
                            Total: ${(producto.price * cantidadUpdate)}
                            <br />
                        </div>
                    </div>
                    <div className="cantidad-botones">
                        <Link className="cantidad-boton" onClick={handleRestar}>-</Link>
                        <span className="cantidad-medio">{cantidad}</span>
                        <Link className="cantidad-boton" onClick={handleSumar}>+</Link>

                    </div>
                    <div className="contenedorBotonComprar">
                        <Link className="botonConfirmar" onClick={confirmarACarro}>
                            Confirmar: ${producto.price * (cantidadUpdate + cantidad)}
                            <br />
                            Agregar: {cantidad}
                        </Link>
                    </div>
                    <Link className="botonEliminar" onClick={() => handleEliminar(producto.id)}>X</Link>

                </div>

            </div>

        </article>


    )
}

export default CarritoItem;
