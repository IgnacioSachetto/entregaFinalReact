import { useCarrito } from './CustomProvider';
import CarritoItem from './CarritoItem';

const CarritoItemContainer = () => {
    const {carrito, modificarCantidad, eliminarProducto,vaciarCarrito} = useCarrito();
    
    const handleModificarCantidad = (id, nuevaCantidad) => {
        modificarCantidad(id, nuevaCantidad);
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
                            modificarCantidad={handleModificarCantidad}
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