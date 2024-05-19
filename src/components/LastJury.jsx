import React, { useEffect, useState } from 'react';
import BackgroundImg from '../img/jury-bg.jpg';
import data from './data';

const LastJury = () => {
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
      <div className="main-sub-title">Жюри прошлых лет</div>
      <div className="main-title">Global Beauty Leader</div>
    </div>
  </div>
  <div className='about-content'>
  <div className='about-title'>Жюри {year} года </div>
    <h1 className="secondary-title mb-20">Global Beauty Leader</h1>
          <div className="winners-buttons">
            {data.map((item) => (
              <button key={item.year} onClick={() => handleYearChange(item.year)}>
                {item.year}
              </button>
            ))}
          </div>
          {selectedYearData && (
  <div className="last-jury">
    {selectedYearData.items.map((item, index) => (
        <div className='jury-card' key={index}>
            <h2 className='about-title mb-50'>{item.title}</h2>
      <div className='profile-section'>
      <img  src={item.image} alt={`${year}_${index + 1}`} />
        <div className="profile-text">
          <h3>{item.name}</h3>
          <p>{item.text}</p>
        </div>
      </div>
      <div className="council-members">
        <div className="member-card">{item.name1}</div>
        <div className="member-card">{item.name2}</div>
        <div className="member-card">{item.name3}</div>
      </div>
      </div>
      ))}
    </div>
    )}
    </div>
  </div>
  );
}
export default LastJury;
