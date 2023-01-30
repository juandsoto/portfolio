import { skills } from "data";
import Slider, { Settings as SliderSettings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Skills = () => {
  const settings: SliderSettings = {
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    swipeToSlide: false,
    swipe: false,
    cssEase: "linear",
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
    <div id="skills" className="flex p-4 flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-center font-bold">Skills</h2>
        <p className="md:w-[75%] mx-auto text-center">These are some of the tools I have learned so far</p>
      </div>
      <Slider {...settings}>
        {skills.map(skill => (
          <div key={skill.name} className="skill__container">
            <img src={skill.image} alt={skill.name} />
            <span className="skill__name">{skill.name}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Skills;
