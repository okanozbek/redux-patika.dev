import style from './style.module.scss';
import { NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <>
      <div className={style.headerWrapper}>
        <div className={style.logo}>
          <NavLink to="/">
            BREAKING
            <br />
            BAD
          </NavLink>
        </div>
        <nav className={style.menu}>
          <div className={style.menuItem}>
            <NavLink to="/">Home</NavLink>
          </div>
          <div className={style.menuItem}>
            <NavLink to="/characters">Characters</NavLink>
          </div>
          <div className={style.menuItem}>
            <NavLink to="/quotes">Quotes</NavLink>
          </div>
        </nav>
        <MobileMenu />
      </div>
    </>
  );
};

export default Header;
