import React, { useRef } from 'react';
import img1 from '../img/gallery/img1.jpg';
import img2 from '../img/gallery/img2.jpg';
import img3 from '../img/gallery/img3.jpg';
import img4 from '../img/gallery/img4.jpg';
import img5 from '../img/gallery/img5.jpg';
import img6 from '../img/gallery/img6.jpg';
import img7 from '../img/gallery/img7.jpg';
import img8 from '../img/gallery/img8.jpg';
import img9 from '../img/gallery/img9.jpg';
import img10 from '../img/gallery/img10.jpg';
import img11 from '../img/gallery/img11.jpg';
import img12 from '../img/gallery/img12.jpg';
import img13 from '../img/gallery/img13.jpg';
import img14 from '../img/gallery/img14.jpg';
import img15 from '../img/gallery/img15.jpg';
import img16 from '../img/gallery/img16.jpg';
import img17 from '../img/gallery/img17.jpg';
import img18 from '../img/gallery/img18.jpg';
import img19 from '../img/gallery/img19.jpg';
import img20 from '../img/gallery/img20.jpg';
import img21 from '../img/gallery/img21.jpg';
import img22 from '../img/gallery/img22.jpg';
import img23 from '../img/gallery/img23.jpg';
import img24 from '../img/gallery/img24.jpg';

const images = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img6 },
  { id: 7, image: img7 },
  { id: 8, image: img8 },
  { id: 9, image: img9 },
  { id: 10, image: img10 },
  { id: 11, image: img11 },
  { id: 12, image: img12 },
  { id: 13, image: img13 },
  { id: 14, image: img14 },
  { id: 15, image: img15 },
  { id: 16, image: img16 },
  { id: 17, image: img17 },
  { id: 18, image: img18 },
  { id: 19, image: img19 },
  { id: 20, image: img20 },
  { id: 21, image: img21 },
  { id: 22, image: img22 },
  { id: 23, image: img23 },
  { id: 24, image: img24 },
];

const PhotoGallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollLeft -= 400;
    } else {
      scrollRef.current.scrollLeft += 400;
    }
  };

  return (
    <div >
    <h2 className="secondary-sub-title text-center">Фотогалерея</h2>
    <h1 className="secondary-title mb-50 text-center">elevating beauty & confidence</h1>
    <div className="slider-container">
      <span className="left-arrow" onClick={() => scroll('left')}>&#10094;</span>
      <div className="slider" ref={scrollRef}>
        {images.map((img, index) => (
          <img src={img.image} alt="beauty shot" className="image" key={index} />
        ))}
      </div>
      <span className="right-arrow" onClick={() => scroll('right')}>&#10095;</span>
    </div>
    </div>
  );
};

export default PhotoGallery;
