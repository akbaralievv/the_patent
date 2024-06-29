import { NavLink } from 'react-router-dom';

import evm from '../../../assets/images/patentSelection/evm.png';
import trademark from '../../../assets/images/patentSelection/trademark.png';
import utilityModel from '../../../assets/images/patentSelection/utility model.png';
import invention from '../../../assets/images/patentSelection/invention.png';
import industrialSample from '../../../assets/images/patentSelection/industrial sample.png';
import database from '../../../assets/images/patentSelection/database.png';

const cards = [
  {
    img: evm,
    title: 'Программа для ЭВМ',
  },
  {
    img: trademark,
    title: 'Товарный знак',
  },
  {
    img: utilityModel,
    title: 'Полезная модель',
  },
  {
    img: invention,
    title: 'Изобретение',
  },
  {
    img: industrialSample,
    title: 'Промышленный образец',
  },
  {
    img: database,
    title: 'База данных',
  },
];

function MainPatentSelection() {
  return (
    <section className="mx-auto max-w-7xl mt-6 px-4">
      <h3 className="text-3xl font-semibold font-mulish text-center">Создайте заявку сейчас</h3>
      <p className="text-xl font-mulish mt-3 text-center">
        Выберите один из предложенных вариантов услуг, чтобы начать процесс подачи заявки на патент.
        Мы предлагаем различные услуги, чтобы удовлетворить ваши потребности и обеспечить успешное
        оформление вашего патента.
      </p>
      <ul className="flex gap-5 justify-center mt-8 flex-wrap">
        {cards.map((card, id) => (
          <li key={id}>
            <NavLink
              to="/patentSelection/createPatent"
              state={{ from: card.title }}
              className="cursor-pointer transition-all duration-400 ease-linear hover:shadow-2xl hover:translate-y-[-8px] w-44 h-44 flex flex-col gap-4 items-center justify-center rounded-3xl shadow-lg bg-white p-5">
              <img src={card.img} alt="" className="w-16" />
              <p className="font-mulish text-xl text-center">{card.title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MainPatentSelection;
