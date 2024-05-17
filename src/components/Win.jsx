import React, { useEffect } from 'react';
import BackgroundImg from '../img/winner-bg.webp';

const Win = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div>
    <div className="main-content" style={{
  backgroundImage: `linear-gradient(rgba(24, 24, 24, 0.5), rgba(24, 24, 24, 0.5)), url(${BackgroundImg})`
}}>
    <div className="content-overlay">
      <div className="main-sub-title">Победители</div>
      <div className="main-title">Global Beauty Leader</div>
    </div>
  </div>
  <div className='about-content'>

  </div>
  </div>
  );
}
export default Win;
