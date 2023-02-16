import { Link } from "react-router-dom"

const Item = ({ producto }) => {
    return (
        <div className="divProductos">
            <article key={producto.id}>
                <h3 className="title-producto">{producto.title}</h3>
                <img className="productoPrincipal" src={producto.image} alt={producto.title} />
                <Link className="verMas" to={"/item/" + producto.id}>Ver Detalle</Link>
            </article>
        </div>
    )
}

export default Item