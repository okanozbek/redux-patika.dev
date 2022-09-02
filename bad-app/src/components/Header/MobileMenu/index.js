import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CgMenuRight } from 'react-icons/cg';
import style from './style.module.scss';

const MobileMenu = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  return (
    <>
      <div className={style.mobileMenuButton}>
        <button onClick={handleMenuToggle}>
          <CgMenuRight size={36} />
        </button>
      </div>

      <div
        className={`${style.offCanvas} ${
          isMobileMenu ? style.offCanvasActive : ''
        }`}
        onClick={handleMenuToggle}
      ></div>

      <div
        className={`${style.mobileMenuWrapper} ${
          isMobileMenu ? style.mobileMenuWrapperActive : ''
        }`}
      >
        <nav className={style.mobileMenu}>
          <div className={style.mobileMenuItem}>
            <NavLink to="/" onClick={handleMenuToggle}>
              Home
            </NavLink>
          </div>
          <div className={style.mobileMenuItem}>
            <NavLink to="/characters" onClick={handleMenuToggle}>
              Characters
            </NavLink>
          </div>
          <div className={style.mobileMenuItem}>
            <NavLink to="/quotes" onClick={handleMenuToggle}>
              Quotes
            </NavLink>
          </div>
          <div className={style.mobileMenuItem}>
            <button onClick={handleMenuToggle}>Close</button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
