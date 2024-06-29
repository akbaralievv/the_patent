import PropTypes from 'prop-types';

import card1 from '../../../assets/images/aboutSection/card 1.png';
import innerCard1 from '../../../assets/images/aboutSection/innerCard 1.png';
import innerCard2 from '../../../assets/images/aboutSection/innerCard 2.png';
import innerCard3 from '../../../assets/images/aboutSection/innerCard 3.png';
import innerCard4 from '../../../assets/images/aboutSection/innerCard 4.png';

const cardData = [
  {
    img: innerCard1,
    text: 'Работа по договору',
    description: 'Мы предоставляем юридическую поддержку.',
  },
  {
    img: innerCard2,
    text: 'Поэтапная оплата',
    description: 'Мы разрабатываем гибкие схемы оплаты.',
  },
  {
    img: innerCard3,
    text: 'Фиксированные суммы',
    description: 'Мы предлагаем прозрачные расценки для наших услуг.',
  },
];

const valueItems = [
  'Клиентоориентированность',
  'Ответственность',
  'Стремление к лучшим результатам',
  'Профессионализм',
];

function Priority({ aboutRef }) {
  return (
    <section ref={aboutRef} className="relative mx-auto w-full max-w-7xl">
      <h2 className="border-l-2 border-l-customBlueHR pl-6 font-mulish text-5xl leading-tight text-white">
        Безупречное качество — наш абсолютный приоритет
      </h2>
      <div className="mt-14 flex justify-between gap-2">
        <div className="w-[415px] max-h-[300px] flex flex-col items-center p-6 rounded-2xl bg-customBlueBackground">
          <img src={card1} alt="img" className="w-12 mb-1.5" />
          <h3 className="text-2xl font-mulish text-center font-medium text-white">
            Компания основана в 2024 году
          </h3>
          <p className="text-lg font-mulish text-center mt-3.5 text-gray-300">
            В штате работают патентные поверенные с 20-летним опытом, тех. специалисты, юристы и
            адвокаты, способные обеспечить надежную охрану и защиту любого объекта права
            интеллектуальной собственности
          </p>
        </div>
        <div className="w-[710px] p-6 rounded-2xl bg-customBlueBackground flex flex-col gap-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-3xl font-medium font-mulish mb-2 text-white">Наши ценности</h3>
              <ul className="flex flex-col border-l-2 border-l-customOrange pl-2.5">
                {valueItems.map((item, index) => (
                  <li key={index} className="text-lg text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[215px] h-[160px] flex flex-col justify-center items-center p-2 rounded-2xl bg-customCardBackground">
              <img src={innerCard4} alt="img" className="w-12 mb-1.5" />
              <h3 className="text-base font-mulish text-center text-white">
                Конф-ность и соблюдение профессиональной этики
              </h3>
            </div>
          </div>
          <div className="flex justify-between">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="w-[215px] h-[160px] flex flex-col justify-center items-center p-2 rounded-2xl bg-customCardBackground">
                <img src={card.img} alt="img" className="w-12 mb-1.5" />
                <h3 className="text-base font-mulish text-center text-white">{card.text}</h3>
                <p className="text-base font-mulish text-center text-gray-300">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Priority;
Priority.propTypes = {
  aboutRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};
