import React, { useEffect } from 'react';
import BackgroundImg from '../img/ratings-bg.webp';

const Position = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div>
    <div className="main-content" style={{
  backgroundImage: `linear-gradient(rgba(24, 24, 24, 0.5), rgba(24, 24, 24, 0.5)), url(${BackgroundImg})`
}}>
    <div className="content-overlay">
      <div className="main-sub-title">Положение</div>
      <div className="main-title">Global Beauty Leader</div>
    </div>
  </div>
  <div className="about-content">
  <div className='about-title'>Общие Положения</div>
    <h1 className="secondary-title">Innovating Global Beauty</h1>
    <div class="third-container">
  <div class="third-section">
    <h2>Цель Премии</h2>
    <p>Международная Премия Global Beauty Leader направлена на поощрение инноваций, профессионализма и творчества в индустрии красоты на международном уровне.</p>
  </div>
  <div class="third-section">
    <h2>Участники</h2>
    <p>В премии могут участвовать специалисты, компании и организации, работающие в индустрии красоты по всему миру.</p>
  </div>
  <div class="third-section">
    <h2>Порядок проведения</h2>
    <p>Конкурс проводится ежегодно с 10 сентября по 25 сентября. Результаты подводятся на торжественной церемонии награждения 1 октября.</p>
  </div>
    </div>

        <h2 className="secondary-sub-title mt-50">Жюри</h2>
        <h1 className="secondary-title">Expertise, Integrity, Recognition</h1>
        <div class="third-container">
        <div class="third-section">
          <h2>Состав Жюри</h2>
          <p>Жюри состоит из выдающихся мастеров индустрии красоты с международным признанием. Все члены жюри обладают не менее трех лет опыта в сфере красоты и являются признанными экспертами в своих областях.</p>
        </div>
        <div class="third-section">
          <h2>Критерии отбора</h2>
          <p>Члены жюри отбираются на основе их профессиональных достижений, вклада в развитие индустрии и способности объективно оценивать конкурсные работы.</p>
        </div>
          </div>

        <h2 className="secondary-sub-title mt-50">Номинации</h2>
        <h1 className="secondary-title mb-20">Global Beauty Leader</h1>
        <div className='nomination-details'>
        <ul className="nomination-list">
          <li>Инноватор Года</li>
          <li>Лучший Мастер Эстетической Медицины</li>
          <li>Мастер года в Ногтевой Эстетике</li>
          <li>Прорыв Года</li>
          <li>Мастер года в Перманентном Макияже</li>
          <li>Парикмахер Года</li>
          <li>Визажист Года</li>
          <li>За Вклад в Развитие Индустрии</li>
        </ul>
        </div>

        <h2 className="secondary-sub-title mt-50">Критерии Оценки</h2>
        <h1 className="secondary-title">Innovation, Mastery, Impact</h1>
        <p className='about-text'>Каждая номинация оценивается по следующим критериям:</p>
        <p className='nomination-text'>Инновационность и креативность: Оригинальность подхода и новизна идей.</p>
        <p className='nomination-text'>Профессиональное мастерство: Уровень исполнения и технической компетенции.</p>
        <p className='nomination-text'>Влияние на индустрию: Степень воздействия на развитие отрасли и общество.</p>
        <p className='nomination-text'>Отзывы клиентов и репутация в профессиональном сообществе.</p>

        <h2 className="secondary-sub-title mt-50">Условия Участия</h2>
        <h1 className="secondary-title">Application, Compliance, Participation</h1>
        <p className="about-text">Заявка на участие: Каждый желающий участвовать в премии должен подать заявку через официальный сайт, предоставив необходимые документы и портфолио работ.</p>
        <p className="nomination-text">Соблюдение правил: Участники обязаны соблюдать все правила и условия премии, опубликованные на сайте.</p>

        <h2 className="secondary-sub-title mt-50">Подведение Итогов</h2>
        <p className="about-text">Итоги премии подводятся на основе оценок жюри и голосования участников, при этом каждый аспект работы участников тщательно анализируется.</p>
      </div>

  </div>
  );
}
export default Position;
