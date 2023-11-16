import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import style from '../NavBar/NavBar.module.css';


const NavBar = () => {
  return (
    <nav className={style.NavBar}>
      <ul className={style.moni}>
        <li>
          <NavLink to="/" end>  Inicio
          </NavLink>
        </li>
      </ul>
      <ul className={style.cate}>
        <li>
          <NavLink to="/category/ollas" className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>
            Ollas
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/jarras" className={({ isActive }) =>  {
            console.log('isActive ollas:', isActive);
            return isActive ? 'ActiveOption' : 'Option';
          }}>
            Jarras
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/sarten" className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>
            Sartén
          </NavLink>
        </li>
      </ul>
      <div id="carrito" className="carrito">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
