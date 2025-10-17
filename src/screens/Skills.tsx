import Slider, { Settings as SliderSettings } from 'react-slick';

import { SKILLS } from '@/data';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export const Skills = () => {
  const settings: SliderSettings = {
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: SKILLS.length,
    autoplay: true,
    speed: SKILLS.length * 1400,
    autoplaySpeed: 0,
    cssEase: 'linear',
    swipeToSlide: false,
    swipe: false,
    pauseOnHover: false,
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div id="skills" className="md:section flex flex-col gap-8">
      <div className="flex flex-col gap-4 px-4">
        <h2 className="text-center font-bold">Skills</h2>
      </div>
      {/* @ts-expect-error - working as it is */}
      <Slider {...settings}>
        {SKILLS.map(skill => (
          <div key={skill.name} className="skill__container">
            <img src={skill.image} alt={skill.name} />
            <span className="skill__name">{skill.name}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};
