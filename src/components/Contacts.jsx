import React, { useEffect } from 'react';
import BackgroundImg from '../img/img_4130.jpg';
import Form from './Form'

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="main-content" style={{
        backgroundImage: `linear-gradient(rgba(24, 24, 24, 0.5), rgba(24, 24, 24, 0.5)), url(${BackgroundImg})`
      }}>
        <div className="content-overlay">
          <div className="main-sub-title">Контакты</div>
          <div className="main-title">Global Beauty Leader</div>
        </div>
      </div>
      <div className="about-content">
        <div className="contact-details">
          <h2 className="about-title">Контакты</h2>
          <h1 className="secondary-title mb-20">Be In Touch</h1>
          <div className='contact-card'>
            <p className="contact-info">Организатор Международной Премии Global Beauty Leader:
            Всероссийская Общественная Организация «Сообщество Предприятий индустрии красоты» (СПИК)</p>
          <p className="contact-info"><strong className='bold'>Email:</strong> aspikrussia@gmail.com</p>
          <p className="contact-info"><strong className='bold'>Телефон:</strong> +7 (909) 337 09-96</p>
          <p className="contact-info"><strong className='bold'>Адрес:</strong> 413 115, Саратовская Область, город Энгельс, ул. Смоленская, дом 23</p>
          <p className="contact-info"><strong className='bold'>Официальный сайт СПИК:</strong> https://spikrussia.ru/</p>
          <p className="contact-info"><strong className='bold'>Электронная почта для подачи заявок на участие в Международной Премии Global Beauty Leader: </strong> globalbeautyleader2020@gmail.com</p>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
}

export default Contacts;
