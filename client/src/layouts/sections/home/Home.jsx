import PropTypes from 'prop-types';

import card1 from '../../../assets/images/mainSection/card 1.png';
import card2 from '../../../assets/images/mainSection/card 2.png';
import card3 from '../../../assets/images/mainSection/card 3.png';
import backgroundImage from '../../../assets/images/backgroundMain.jpg';

function Home({ homeRef }) {
  return (
    <section
      ref={homeRef}
      className="pt-56 pb-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="relative mx-auto w-full max-w-7xl">
        <h1 className="font-mulish text-5xl leading-[68px] text-white">
          Ваш надежный партнер по патентным делам в Кыргызстане{' '}
        </h1>
        <a
          target="_blank"
          href="https://base.patent.kg/"
          className="font-semibold text-white mt-10 font-mulish text-lg flex items-center justify-center w-[200px] h-[65px] rounded-2xl bg-customBlue">
          Поиск патентов
        </a>
        <button></button>
        <div className="pl-6 border-l-2 border-l-customOrange">
          <p className="mb-7 mt-20 font-mulish text-2xl text-white">Современный документооборот</p>
          <ul className="grid grid-cols-3 items-center gap-2">
            <li className="w-[415px] h-[247px] p-4 flex flex-col items-center rounded-[31px] bg-black bg-opacity-30">
              <img src={card1} alt="img" className="w-12 mb-1.5" />
              <h3 className="text-2xl font-mulish text-center font-medium text-white">
                Подача заявок онлайн
              </h3>
              <p className="text-base font-mulish text-center mt-3.5 text-gray-300">
                Благодаря электронному документообороту, заявки попадают в Кыргызпатент мгновенно,
                исключаются лишние связующие элементы и гарантируется дата и время подачи.
              </p>
            </li>
            <li className="w-[415px] h-[247px] flex flex-col items-center p-4 rounded-[31px] bg-black bg-opacity-30">
              <img src={card2} alt="img" className="w-12 mb-1.5" />
              <h3 className="text-white inline-block text-2xl font-mulish text-center font-medium">
                Контроль качества и перепроверка данных
              </h3>
              <p className="mt-3.5 text-gray-300 text-base font-mulish text-center">
                Все заявки на регистрацию торговых марок проходят проверку перед подачей.
              </p>
            </li>
            <li className="w-[415px] h-[247px] flex flex-col items-center p-4 rounded-[31px] bg-black bg-opacity-30">
              <img src={card3} alt="img" className="w-12 mb-1.5" />
              <h3 className="text-white text-2xl font-mulish text-center font-medium">
                Автоматизированное делопроизводство
              </h3>
              <p className="mt-3.5 text-gray-300 text-base font-mulish text-center">
                Автоматизированное делопроизводство позволяет избежать ошибок и контролировать сроки
                сдачи документов.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;
Home.propTypes = {
  homeRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};
