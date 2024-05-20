import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../img/logo.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="left-section">
        <div className="footer-logo"><img src={LogoImg} alt="Logo" /></div>
        <div>
          <p>Международная Премия Global Beauty Leader, основанная в 2020 году, стала одним из самых значимых событий в мире красоты и велнеса. Каждый год мы отмечаем выдающиеся достижения профессионалов индустрии.</p>
        </div>
      </div>
      <div className="right-section">
        <ul>
          <li>Навигация</li>
          <li className='footer-links'><Link to="/">Главная</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/#nominations">Номинации</Link></li>
        </ul>
        <ul>
          <li>События</li>
          <li><Link to="/winners">Победители</Link></li>
          <li><Link to="/jury">Жюри</Link></li>
          <li><Link to="/lastjury">Жюри прошлых лет</Link></li>
        </ul>
        <ul>
          <li>Ресурсы</li>
          <li><Link to="/ratings">Критерии оценки</Link></li>
          <li><Link to="/position">Положение</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
