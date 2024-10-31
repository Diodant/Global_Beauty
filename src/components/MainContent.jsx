import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PhotoGallery from './PhotoGallery'
import Form from './Form'
import BackgroundImg from '../img/img_4130.jpg';
import SideImage from '../img/1.png';
import NominationImage from '../img/hair_extensions_mane.jpg';
import MissionImage from '../img/mission-bg.jpg';
import Partner1 from '../img/partners/partner1.png';
import Partner2 from '../img/partners/partner2.png';
import Partner3 from '../img/partners/partner3.png';
import Partner4 from '../img/partners/partner4.png';
import Partner5 from '../img/partners/partner5.png';
import Partner6 from '../img/partners/partner6.webp';

const MainContent = () => {

  const nominationRef = useRef(null);
  const { hash } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (hash === '#nominations' && nominationRef.current) {
      nominationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div>
      <div className="main-content" style={{
  backgroundImage: `linear-gradient(rgba(24, 24, 24, 0.5), rgba(24, 24, 24, 0.5)), url(${BackgroundImg})`
}}>
        <div className="content-overlay">
          <div className="main-sub-title">Международная Премия</div>
          <div className="main-title">Global Beauty Leader</div>
          <Link to="/contacts">
            <button className="join-button">Подать заявку</button>
          </Link>
        </div>
      </div>

      <div className="secondary-content">

        <div className="left-image" style={{ backgroundImage: `url(${SideImage})` }}>
        </div>
        <div className="right-text">
          <h2 className="secondary-sub-title">Global Beauty Leader</h2>
          <h1 className="secondary-title">elevating beauty & confidence</h1>
          <p className="secondary-description">
          Международная Премия Global Beauty Leader, основанная в 2020 году, стала одним из самых значимых событий в мире красоты и велнеса. Каждый год мы отмечаем выдающиеся достижения профессионалов индустрии, которые вносят свой вклад в развитие и улучшение этой сферы. Премия считается символом престижа и международного признания, становясь мечтой и значимой целью для специалистов со всего мира.
          </p>
          <Link to="/about">
            <button className="join-button">О премии</button>
          </Link>
        </div>
      </div>
      <div ref={nominationRef} className='nomination-text-container'>
      <h2 className="secondary-sub-title">Номинации</h2>
      <h1 className="secondary-title">Global Beauty Leader</h1>
      </div>
      <div className="nomination-container">
      <div className="nomination-details">
        <h1>Список Номинаций:</h1>
        <h2>Инноватор Года</h2>
        <p>Для профессионалов, внедряющих новаторские технологии и методики в индустрию красоты</p>
        <h2>Лучший Мастер Эстетической Медицины</h2>
        <p>Награда за выдающиеся достижения в области эстетической медицины</p>
        <h2>Мастер года в Ногтевой Эстетике</h2>
        <p>Награда для профессионалов в маникюре и педикюре, демонстрирующих искусство и инновации</p>
        <h2>Прорыв Года</h2>
        <p>Для молодых талантов, которые сделали значительный вклад в индустрию красоты</p>
        <h2>Мастер года в Перманентном Макияже</h2>
        <p>Награда для специалистов, которые демонстрируют исключительное мастерство в техниках перманентного макияжа</p>
        <h2>Парикмахер Года</h2>
        <p>Для выдающихся парикмахеров, которые не только создают трендовые и оригинальные прически, но и вносят значительный вклад в развитие парикмахерского искусства</p>
        <h2>Визажист Года</h2>
        <p>Награда для профессионалов, создающих оригинальные и современные макияжи, владеющих разнообразными техниками для разных типов кожи и активно обучающих новое поколение визажистов.</p>
        <h2>За Вклад в Развитие Индустрии</h2>
        <p>Почетная номинация для лиц или организаций, имеющих долгосрочное влияние на развитие отрасли</p>
      </div>
      <div className="nomination-image" style={{ backgroundImage: `url(${NominationImage})` }}>
      </div>
    </div>
    <div className='nomination-text-container'>
      <h2 className="secondary-sub-title">Критерии оценки</h2>
      <h1 className="secondary-title">How it Works</h1>
      </div>
      <div class="third-wrap">
    <div class="third-container">
  <div class="third-section">
    <h2>Инновационность</h2>
    <p>Степень, в которой предложение или достижение вносит новшество в индустрию красоты. Оценивается уникальность подхода и его влияние на текущие тренды и практики</p>
  </div>
  <div class="third-section">
    <h2>Влияние на Индустрию</h2>
    <p>Оценка долгосрочного воздействия достижений на профессиональное сообщество и потребителей. Включает в себя улучшение качества услуг, уровня обслуживания или продуктов.</p>
  </div>
  <div class="third-section">
    <h2>Отзывы и Репутация</h2>
    <p>Реакция коллег и потребителей на работу кандидата, включая отзывы, участие в семинарах, обучающих программах, рекомендации и общее признание в индустрии.</p>
  </div>
    </div>
    <Link to="/ratings">
            <button className="join-button">Больше о критериях</button>
          </Link>
    </div>
    <div className="mission-section" style={{ backgroundImage: `url(${MissionImage})` }}>
      <div className="mission-content">
        <h1 className="mission-title">Наша главная цель</h1>
        <h2 className="mission-sub-title">TAKING MODERN BEAUTY TO THE NEXT LEVEL</h2>
        <p className="mission-text">
        Global Beauty Leader — это не только премия, это платформа для демонстрации инноваций и креативности в индустрии красоты. Наша цель — поддержка и продвижение талантливых специалистов, которые приносят новаторские идеи и решения, способные изменить привычные стандарты и взгляды на красоту и здоровье.
        </p>
      </div>
    </div>
    <section className='for-section'>
    <div class="for-content">
    <h2 class="secondary-sub-title">Спонсоры</h2>
    <h1 className="secondary-title">Global Beauty Leader</h1>
    <div className="partner-images">
         <div className="partner-card">
            <img src={Partner1} alt="Partner1" className="partner-image" />
          </div>
          <div className="partner-card">
            <img src={Partner2} alt="Partner2" className="partner-image" />
          </div>
          <div className="partner-card">
            <img src={Partner3} alt="Partner3" className="partner-image" />
          </div>
        </div>
        <div className="partner-images">
          <div className="partner-card">
            <img src={Partner4} alt="Partner6" className="partner-image" />
          </div>
          <div className="partner-card">
            <img src={Partner5} alt="Partner7" className="partner-image" />
          </div>
          <div className="partner-card">
            <img src={Partner6} alt="Partner8" className="partner-image" />
          </div>
        </div>
    </div>
    </section>
    <Form />
    <PhotoGallery />
    </div>
  );
};

export default MainContent;
