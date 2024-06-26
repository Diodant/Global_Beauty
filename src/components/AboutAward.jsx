import React, { useEffect } from 'react';
import BackgroundImg from '../img/img_4130.jpg';

const AboutAward = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    <div className="main-content" style={{
  backgroundImage: `linear-gradient(rgba(24, 24, 24, 0.5), rgba(24, 24, 24, 0.5)), url(${BackgroundImg})`
}}>
    <div className="content-overlay">
      <div className="main-sub-title">О Международной Премии</div>
      <div className="main-title">Global Beauty Leader</div>
    </div>
  </div>
  <div className='about-content'>
    <div className='about-title'>О нас</div>
    <h1 className="secondary-title">Global Beauty Leader</h1>
    <p className='about-text'>Добро пожаловать на официальный сайт Международной Премии Global Beauty Leader. С 2020 года мы каждый год отмечаем самые выдающиеся достижения в мире красоты и велнеса. Эта премия стала символом престижа и международного признания в индустрии.</p>
    <p className='about-text'>Международная Премия Global Beauty Leader, основанная в 2020 году, стала одним из самых значимых событий в мире красоты и велнеса. Каждый год мы отмечаем выдающиеся достижения профессионалов индустрии, которые вносят свой вклад в развитие и улучшение этой сферы. Премия считается символом престижа и международного признания, становясь мечтой и значимой целью для специалистов со всего мира.</p>
    <p className='about-text'>Участие в премии, а также включение в состав жюри, открывает уникальные возможности для обмена опытом и установления профессиональных контактов с ведущими экспертами мира. Каждый судья и участник отбираются на основании их уникальных достижений, которые оказали значительное влияние на индустрию красоты.</p>
    <div className='about-sub-title'>Критерии отбора и жюри</div>
    <p className='about-text'>Участие в премии и возможность войти в состав жюри открывают уникальные возможности для профессионального общения и обмена опытом с ведущими экспертами в отрасли на международной арене. Члены жюри и участники отбираются на основании их профессиональных достижений и вклада в индустрию красоты, которые оцениваются строго и объективно.</p>
    <p className='about-text'>Global Beauty Leader — это подтверждение вашего статуса в международном масштабе, символ того, что вы являетесь частью элиты индустрии красоты.</p>
    <div className='about-sub-title'>Влияние и значимость</div>
    <p className='about-text'>Наши лауреаты и члены жюри — это лидеры мнений и новаторы, чьи работы и идеи не только формируют современные тренды, но и вдохновляют тысячи специалистов по всему миру. Стать частью Global Beauty Leader — это признание вашего статуса и профессионализма на международной арене.</p>
    <p className='about-text'>Мы приглашаем всех специалистов индустрии красоты присоединиться к нашему движению, чтобы вместе отмечать тех, кто делает этот мир ярче и креативнее. Вместе мы можем установить новые стандарты и способствовать дальнейшему развитию отрасли, поддерживая друг друга и вдохновляя на новые достижения и успехи.</p>
    <p className='about-text'>Международная Премия Global Beauty Leader — это ваш шанс стать частью элиты мировой индустрии красоты, подтвердить свои профессиональные успехи и получить заслуженное признание на глобальном уровне.</p>
  </div>
  </div>
  );
}
export default AboutAward;
