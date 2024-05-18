import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../img/logo.svg'
import OpenImg from '../img/open.svg';
import CloseImg from '../img/close.svg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     <div className="slogan-block">
        <p>Unleashing Beauty, Crafting Elegance</p>
      </div>
    <div className="navbar">
      <div className='navbar-container'>
        <div className="logo"><img src={LogoImg} alt="Logo"/></div>
        {!isOpen && (
          <div className="menu-icon" onClick={toggleMenu}>
            <img src={OpenImg} alt="Menu" />
          </div>
        )}

        <div className={`menu ${isOpen ? "open" : ""}`}>
          <div className="close-icon" onClick={toggleMenu}>
            {isOpen && <img src={CloseImg} alt="Close" />}
          </div>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/winners">Победители</Link></li>
            <li><Link to="/jury">Жюри</Link></li>
            <li><Link to="/position">Положение</Link></li>
            <li><Link to="/ratings">Критерии оценки</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
export default Navigation;
