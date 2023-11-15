import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className='NavBar'>
            <ul className='moni'>
                <li>
                    <NavLink to="/" className="active">
                        Inicio
                    </NavLink>
                </li>
            </ul>
                    <ul>
                        <li>
                            <Link to={`/category/ollas`}className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Ollas</Link>
                        </li>
                        <li>
                            <Link to={`/category/jarras`}className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Jarras</Link>
                        </li>
                        <li>
                            <Link to={`/category/sarten`}className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Sartén</Link>
                        </li>
                    </ul>
            <div id="carrito" className="carrito">
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;