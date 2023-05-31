import { Link } from 'react-router-dom';
import Icon from '../icon/Icons';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './navigation.scss';

function Navigation() {
  const route = useLocation();
  const routePath = route.pathname;

  const [shown, setShown] = useState(false);

  const toggleMenu = () => {
    setShown(!shown);
  };

  return (
    <nav className="Nav">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          <img src="images/logo.png" alt="logo" />
        </Link>
        <ul className="nav-list">
          <li>
            <Link to="/" className={routePath === '/' ? 'active' : undefined}>
              <Icon type="fas" name="home" color="" />
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={routePath === '/cart' ? 'active' : undefined}
            >
              <Icon type="fas" name="shopping-cart" color="" />
              <sup className="cart-items">2</sup>
            </Link>
          </li>
          <li>
            <Link
              to="/favourites"
              className={routePath === '/favourites' ? 'active' : undefined}
            >
              <Icon type="fas" name="heart" color="" />
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className={routePath === '/login' ? 'active' : undefined}
            >
              <Icon type="fas" name="user" color="" />
            </Link>
          </li>
        </ul>

        {/* Mobile menu */}
        <button className="show-menu-button" onClick={toggleMenu}>
          <Icon type="fas" name="bars" color="" />
        </button>

        <div
          className={`overlay ${shown ? 'shown' : ''}`}
          onClick={toggleMenu}
        ></div>

        <div className={`menu ${shown ? 'shown' : ''}`}>
          <button className="close-menu-button" onClick={toggleMenu}>
            <Icon name="xmark" type="fas" color="" />
          </button>
          <ul className="menu-list">
            <li>
              <Link to="/" className={routePath === '/' ? 'active' : undefined}>
                <Icon type="fas" name="home" color="" />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className={routePath === '/cart' ? 'active' : undefined}
              >
                <Icon type="fas" name="shopping-cart" color="" />
                <sup>2</sup>
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/favourites"
                className={routePath === '/favourites' ? 'active' : undefined}
              >
                <Icon type="fas" name="heart" color="" />
                Favourites
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className={routePath === '/login' ? 'active' : undefined}
              >
                <Icon type="fas" name="user" color="" />
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
