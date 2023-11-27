import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import style from '../NavBar/NavBar.module.css';


const NavBar = () => {
  return (
    <nav className={style.NavBar}>
      <ul className={style.moni}>
        <li>
          <NavLink to="/" end className={style.ActiveOption}>  Inicio
          </NavLink>
        </li>
      </ul>
      <ul className={style.cate}>
        <li>
          <NavLink to="/category/ollas" className={style.ActiveOption}>
            Ollas
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/jarras" className={style.ActiveOption}>
            Jarras
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/sarten" className={style.ActiveOption}>
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
