import {Link} from "react-router-dom"

const Item = ({producto}) => {
    return(

        <div class="divProductos">
            <article key={producto.id}>
                <h3>{producto.title}</h3>
                <img className = "productoPrincipal" src={producto.image} alt={producto.title} />


                <Link className="verMas" to={"/item/"+producto.id}>Ver Detalle</Link>
            </article>
        </div>
          
       
    )
}

export default Item