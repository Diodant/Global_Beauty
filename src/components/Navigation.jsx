import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../img/logo.svg'
import OpenImg from '../img/open.svg';
import CloseImg from '../img/close.svg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

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

        <div ref={menuRef} className={`menu ${isOpen ? "open" : ""}`}>
          <div className="close-icon" onClick={toggleMenu}>
            {isOpen && <img src={CloseImg} alt="Close" />}
          </div>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/winners">Победители</Link></li>
            <li><Link to="/lastjury">Жюри прошлых лет</Link></li>
            <li><Link to="/jury">Жюри</Link></li>
            <li><Link to="/#nominations">Номинации</Link></li>
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
