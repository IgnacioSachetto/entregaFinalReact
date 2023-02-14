import { useCarrito } from './CustomProvider';
import CarritoItem from './CarritoItem';

const CarritoItemContainer = () => {
    const {carrito, modificarCantidad, eliminarProducto,vaciarCarrito} = useCarrito();
    
    const handleModificarCantidad = (id, cantidad) => {
        modificarCantidad(id, cantidad);
    }

    const handleEliminarProducto = (id) => {
        eliminarProducto(id);
    }

    const handleVaciarCarrito = () => {
        vaciarCarrito()
    }

    
    return (
        <div>
            {carrito.length === 0 ? (
                <div className="divCarritoGenerico">
                    <h2 className='tituloProducto'>Sin articulos</h2>
                </div>
                ) : (
                    carrito.map((producto) => {
                    return (
                        <CarritoItem
                            producto={producto}
                            key={producto.id}
                            modificarCantidadC={handleModificarCantidad}
                            eliminarProductoC={handleEliminarProducto}
                            vaciarCarritoC={handleVaciarCarrito}
                        />
                    );
                })
            )}
        </div>
    )
}

export default CarritoItemContainer