import React, { useEffect } from 'react';
import BackgroundImg from '../img/ratings-bg.webp';

const CriteriaRating = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div>
    <div className="main-content" style={{
  backgroundImage: `linear-gradient(rgba(24, 24, 24, 0.5), rgba(24, 24, 24, 0.5)), url(${BackgroundImg})`
}}>
    <div className="content-overlay">
      <div className="main-sub-title">Критерии оценки</div>
      <div className="main-title">Global Beauty Leader</div>
    </div>
  </div>
  <div className='about-content'>
    <div className='about-title'>Общие Критерии Оценки для Всех Номинаций</div>
    <h1 className="secondary-title">How it Works</h1>
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
    <div class="third-container">
    <div class="third-section">
    <h2>Качество и Эстетика</h2>
    <p>Стандарты исполнения и эстетической привлекательности выполненных работ или продуктов.</p>
  </div>
  <div class="third-section">
    <h2>Профессионализм и Этика</h2>
    <p>Соблюдение высоких профессиональных и этических стандартов во всех аспектах работы.</p>
  </div>
    </div>
  </div>
  <div className='about-content'>
    <div className='about-title'>Инноватор Года</div>
    <h1 className="secondary-title">Driving Industry Change</h1>
    <div class="third-container">
  <div class="third-section">
    <h2>Инновационность</h2>
    <p>Оценка уникальности и оригинальности внедряемых технологий и методик.</p>
  </div>
  <div class="third-section">
    <h2>Влияние на Индустрию</h2>
    <p>Эффективность и практическая значимость инноваций для отрасли.</p>
  </div>
  <div class="third-section">
    <h2>Практическая реализация</h2>
    <p>Успешность внедрения нововведений в практику и их коммерческий успех.</p>
  </div>
    </div>
  </div>
  <div className='about-content'>
    <div className='about-title'>Лучший Мастер Эстетической Медицины</div>
    <h1 className="secondary-title">Excellence in Aesthetics</h1>
    <div class="third-container">
  <div class="third-section">
    <h2>Профессиональное мастерство</h2>
    <p>Уровень знаний, навыков и качества выполнения процедур.</p>
  </div>
  <div class="third-section">
    <h2>Инновации в методиках</h2>
    <p>Разработка и применение новых методов в эстетической медицине.</p>
  </div>
  <div class="third-section">
    <h2>Вклад в развитие специализации</h2>
    <p>Образовательная деятельность, публикации, участие в профессиональных конференциях.</p>
  </div>
    </div>
  </div>
  </div>
  );
}
export default CriteriaRating;
