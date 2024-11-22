import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66',
      title: 'Discover New Books',
      subtitle: 'Explore our vast collection of books',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc',
      title: 'Special Offers',
      subtitle: 'Up to 50% off on selected titles',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570',
      title: 'Punjab Literature',
      subtitle: 'Explore the rich culture through books',
    },
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <div className="h-[500px] relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-xl">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
