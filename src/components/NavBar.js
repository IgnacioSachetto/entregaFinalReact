import { Link } from "react-router-dom"
import { CartWidget } from './CartWidget'

const NavBar = (props) => {
    if (props.isHeader) {
        return (
            <>
                <nav className="barraNav">
                    <Link className="headerLink" to="/category/electronics">Electronicos</Link>
                    <Link className="headerLink" to="/category/jewelery/">Joyeria</Link>
                    <Link className="headerLink" to="/category/mensclothing/">Hombres</Link>
                    <Link className="headerLink" to="/category/womensclothing/">Mujeres</Link>
                    <CartWidget />
                </nav>
            </>
        )
    } else {
        return (
            <nav className="footerNav">
                <p className="copy">{props.textLinkFooter2}</p>
            </nav>
        )
    }

}

export default NavBar