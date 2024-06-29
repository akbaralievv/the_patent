import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';

import person1 from '../../assets/images/ourTeam/person 1.png';
import person2 from '../../assets/images/ourTeam/person 2.png';
import person3 from '../../assets/images/ourTeam/person 3.png';
import next from '../../assets/icons/ourTeam/next.svg';
import prev from '../../assets/icons/ourTeam/prev.svg';

const personInfo = [
  {
    name: 'Алексей Нуманов',
    roles: ['Директор', 'Руководитель отдела'],
    image: person1,
  },
  {
    name: 'Андрей Бедняков',
    roles: ['Партнер', 'Международная правовая охрана'],
    image: person2,
  },
  {
    name: 'Осман Назар',
    roles: ['Главный партнер', 'Руководитель отделатогрговых марок и авторских прав'],
    image: person3,
  },
];

export const Person = ({ info }) => (
  <div className="h-[210px] flex justify-between gap-2 bg-black rounded-2xl px-5 pt-7">
    <img src={info.image} alt="person" className="w-1/2" />
    <div className="flex flex-col items-end">
      <h3 className="text-end text-2xl font-bold text-white font-mulish">{info.name}</h3>
      {info.roles.map((role, index) => (
        <p key={index} className="text-end text-base text-white font-mulish">
          {role}
        </p>
      ))}
    </div>
  </div>
);

Person.propTypes = {
  info: PropTypes.object,
};

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <img src={next} className={className} onClick={onClick} />;
}

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <img src={prev} className={className} onClick={onClick} />;
}

SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function SliderPersons() {
  const settings = {
    infinite: personInfo.length >= 3 ? true : false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container my-7 w-full">
      <Slider {...settings}>
        {personInfo.map((person) => (
          <Person key={person.name} info={person} />
        ))}
      </Slider>
    </div>
  );
}

export default SliderPersons;
