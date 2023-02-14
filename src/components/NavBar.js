import { useContext } from "react"
import { Link } from "react-router-dom"
import {CardWidget} from './CardWidget'
import {contexto} from './CustomProvider'

const NavBar = (props) =>{

    const {totalProductos} = useContext(contexto)

    if (props.isHeader){
        return(
            <>
            <nav className= "barraNav">
                <Link className="headerLink" to="/category/electronics">Electronicos</Link>
                <Link className="headerLink" to="/category/jewelery/">Joyeria</Link>
                <Link className="headerLink" to="/category/men's clothing/">Hombres</Link>
                <Link className="headerLink" to="/category/women's clothing/">Mujeres</Link>
                <CardWidget/>

            </nav>
            </>
        )
    } else {
        return(
            <nav className="footerNav">
                <p className="copy">{props.textLinkFooter2}<a className="redes" href={props.hrefLinkFooter}>{props.textLinkFooter}</a></p>
            </nav>
        )
    }
    
}

export default NavBar