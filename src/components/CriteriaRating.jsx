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
  <div className='about-content'>
    <div className='about-title'>Мастер года в Ногтевой Эстетике</div>
    <h1 className="secondary-title">Excellence in Aesthetics</h1>
    <div class="third-container">
  <div class="third-section">
    <h2>Инновационность и креативность</h2>
    <p>Оценка уникальности техник и дизайнов, использование новаторских материалов и методов для создания современных и оригинальных ногтевых образов.</p>
  </div>
  <div class="third-section">
    <h2>Качество выполнения</h2>
    <p>Профессионализм в исполнении маникюра и педикюра, аккуратность и внимание к деталям, идеальное применение техник нанесения и декорирования.</p>
  </div>
  <div class="third-section">
    <h2>Обучение и развитие</h2>
    <p>Участие мастера в профессиональном обучении и его готовность делиться знаниями и опытом с другими специалистами индустрии, проведение мастер-классов или участие в обучающих программ.</p>
  </div>
    </div>
  </div>
  <div className='about-content'>
    <div className='about-title'>Прорыв Года</div>
    <h1 className="secondary-title">Excellence in Aesthetics</h1>
    <div class="third-container">
  <div class="third-section">
    <h2>Талант и оригинальность</h2>
    <p>Уникальность подходов и решений в индустрии красоты.</p>
  </div>
  <div class="third-section">
    <h2>Влияние на отрасль</h2>
    <p>Значимость достижений для развития индустрии.</p>
  </div>
  <div class="third-section">
    <h2>Перспективность и потенциал развития</h2>
    <p>Возможности для дальнейшего вклада в индустрию.</p>
  </div>
    </div>
  </div>
  <div className='about-content'>
    <div className='about-title'>Мастер года в Перманентном Макияже</div>
    <h1 className="secondary-title">Excellence in Aesthetics</h1>
    <div class="third-container">
  <div class="third-section">
    <h2>Техническое мастерство</h2>
    <p>Совершенство в исполнении техник перманентного макияжа.</p>
  </div>
  <div class="third-section">
    <h2>Инновационность</h2>
    <p>Внедрение новых методов и материалов в практику.</p>
  </div>
  <div class="third-section">
    <h2>Клиентская удовлетворенность</h2>
    <p>Отзывы клиентов, долговечность и качество результатов.</p>
  </div>
    </div>
  </div>
  <div className='about-content'>
    <div className='about-title'>Парикмахер Года</div>
    <h1 className="secondary-title">Excellence in Aesthetics</h1>
    <div class="third-container">
  <div class="third-section">
    <h2>Креативность и стиль</h2>
    <p>Оригинальность и трендовость создаваемых причесок.</p>
  </div>
  <div class="third-section">
    <h2>Техническое мастерство</h2>
    <p>Умение работать с различными типами волос и стилистическими направлениями.</p>
  </div>
  <div class="third-section">
    <h2>Образовательный вклад</h2>
    <p>Участие в подготовке и обучении нового поколения парикмахеров.</p>
  </div>
    </div>
  </div>
  <div className='about-content'>
    <div className='about-title'>Визажист Года</div>
    <h1 className="secondary-title">Excellence in Aesthetics</h1>
    <div class="third-container">
  <div class="third-section">
    <h2>Креативность и стиль</h2>
    <p> Оригинальность и актуальность создаваемых макияжей.</p>
  </div>
  <div class="third-section">
    <h2>Техническое мастерство</h2>
    <p>Владение различными техниками макияжа и способность работать с разнообразными типами кожи и чертами лица.</p>
  </div>
  <div class="third-section">
    <h2>Образовательный вклад</h2>
    <p>Активное участие в подготовке и обучении нового поколения визажистов. Проведение мастер-классов, семинаров и тренингов, делясь опытом и способствуя развитию индустрии красоты.</p>
  </div>
    </div>
  </div>
  <div className='about-content'>
    <div className='about-title'>За Вклад в Развитие Индустрии</div>
    <h1 className="secondary-title">Excellence in Aesthetics</h1>
    <div class="third-container">
  <div class="third-section">
    <h2>Долгосрочное влияние</h2>
    <p>Стабильность и продолжительность вклада в развитие индустрии.</p>
  </div>
  <div class="third-section">
    <h2>Инновации и лидерство</h2>
    <p>Лидерские качества и способность внедрять новшества.</p>
  </div>
  <div class="third-section">
    <h2>Репутация и признание</h2>
    <p>Уважение в профессиональном сообществе и среди коллег.</p>
  </div>
    </div>
  </div>
  </div>
  );
}
export default CriteriaRating;
