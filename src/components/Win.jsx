import React, { useEffect, useState } from 'react';
import BackgroundImg from '../img/winner-bg.webp';
import data from './datawin';
import WinImg from '../img/win.png'

const Win = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const [year, setYear] = useState(2023);

  const handleYearChange = (newYear) => {
    setYear(newYear);
  };

  const selectedYearData = data.find((item) => item.year === year);

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
  <div className='win'>
          <h2 className='about-title'>Победители: {year} года </h2>
          <div className="secondary-title">Winners of Global Beauty</div>
          <div className="winners-buttons">
            {data.map((item) => (
              <button key={item.year} onClick={() => handleYearChange(item.year)}>
                {item.year}
              </button>
            ))}
          </div>
          {selectedYearData && (
            <div className="win-card">
              {selectedYearData.items.map((item, index) => (
                <div key={index} className="win-item">
                  <div className='win-title'>{item.title}</div>
                  <div className='win-text'><img src={WinImg} alt="Win" />{item.name}</div>
                  <div className='win-sub-text'>{item.text}</div>
                  <div className='win-text'><img src={WinImg} alt="Win" />{item.name2}</div>
                  <div className='win-sub-text'>{item.text2}</div>
                </div>
              ))}
            </div>
          )}
        </div>
  </div>
  </div>
  );
}
export default Win;
