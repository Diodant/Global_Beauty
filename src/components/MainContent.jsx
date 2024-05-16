import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImg from '../img/img_4130.jpg';
import SideImage from '../img/1.png';
import NominationImage from '../img/hair_extensions_mane.jpg';

const MainContent = () => {
  return (
    <div>
      <div className="main-content" style={{ backgroundImage: `url(${BackgroundImg})` }}>
        <div className="content-overlay">
          <div className="main-sub-title">Международная Премия</div>
          <div className="main-title">Global Beauty Leader</div>
          <Link to="/form">
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
          <Link to="/services">
            <button className="join-button">О премии</button>
          </Link>
        </div>
      </div>
      <div className='nomination-text-container'>
      <h2 className="secondary-sub-title">Номинации</h2>
      <h1 className="secondary-title">Global Beauty Leader</h1>
      </div>
      <div className="nomination-container">
      <div className="nomination-details">
        <h2>Инноватор Года</h2>
        <p>Для профессионалов, внедряющих новаторские технологии и методики в индустрию красоты</p>
        <h2>Лучший Мастер Эстетической Медицины</h2>
        <p>награда за выдающиеся достижения в области эстетической медицины</p>
        <h2>Мастер года в Ногтевой Эстетике</h2>
        <p>награда для профессионалов в маникюре и педикюре, демонстрирующих искусство и инновации</p>
        <h2>Прорыв Года</h2>
        <p>для молодых талантов, которые сделали значительный вклад в индустрию красоты</p>
        <h2>Мастер года в Перманентном Макияже</h2>
        <p>награда для специалистов, которые демонстрируют исключительное мастерство в техниках перманентного макияжа, включая микроблейдинг и микропигментацию, и вносят инновации в этот сегмент индустрии.</p>
        <h2>Парикмахер Года</h2>
        <p>для выдающихся парикмахеров, которые не только создают трендовые и оригинальные прически, но и вносят значительный вклад в развитие парикмахерского искусства, участвуя в обучении молодых специалистов или разработке новых технологий в области ухода за волосами.</p>
        <h2>За Вклад в Развитие Индустрии</h2>
        <p>почетная номинация для лиц или организаций, имеющих долгосрочное влияние на развитие отрасли</p>
      </div>
      <div className="nomination-image" style={{ backgroundImage: `url(${NominationImage})` }}>
      </div>
    </div>
    </div>
  );
};

export default MainContent;
