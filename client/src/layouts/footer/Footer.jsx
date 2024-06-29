import { useState } from 'react';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';

import logo from '../../../public/logo.png';
import email from '../../assets/images/footer/email.png';
import viber from '../../assets/images/footer/viber.png';
import telegram from '../../assets/images/footer/telegram.png';
import whatsapp from '../../assets/images/footer/whatsapp.png';
import vk from '../../assets/images/footer/vk.png';
import skype from '../../assets/images/footer/skype.png';
import next from '../../assets/icons/ourTeam/next.svg';
import pinkFlower from '../../assets/images/footer/pinkFlower.png';
import greenFlower from '../../assets/images/footer/greenFlower.png';
import RequestCallForm from '../../components/requestCallForm/RequestCallForm';
import Maps from '../../components/map/Map';

const phoneNumber = '996708073925';
const user_name = 'Teriussss123';
const message = 'Привет! Это тестовое сообщение.';
const encodedMessage = encodeURIComponent(message);

export const InnerTop = () => (
  <div className="flex justify-between gap-4 z-10">
    <div className="z-10">
      <img src={logo} alt="logo" className="w-44" />
      <p className="text-base font-mulish text-white">Основано в 2024 году</p>
    </div>
    <div className="z-10">
      <h3 className="mb-6 font-medium font-mulish text-2xl text-white">Основные сервисы</h3>
      <div className="flex justify-between gap-4 z-10">
        <ul className="flex flex-col gap-3">
          <li className="font-mulish text-white text-base">Услуги и цены</li>
          <li className="font-mulish text-white text-base">Товарные знаки</li>
          <li className="font-mulish text-white text-base">Изобретения</li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className="font-mulish text-white text-base">Базы данных</li>
          <li className="font-mulish text-white text-base">Промышленные образцы</li>
          <li className="font-mulish text-white text-base">Программы на ЭВМ</li>
        </ul>
      </div>
    </div>
    <div className="z-10">
      <h3 className="mb-6 font-medium font-mulish text-2xl text-white">Мы в соцсетях</h3>
      <div className="flex flex-col justify-between gap-4">
        <ul className="flex gap-3">
          <li className="py-2.5 px-6 flex justify-between items-center rounded-2xl border border-solid border-slate-400 font-mulish text-white text-base">
            <a target="_blank" href={`https://t.me/${user_name}?text=${encodedMessage}`}>
              <img src={telegram} alt="telegram" className="w-10 cursor-pointer" />
            </a>
          </li>
          <li className="py-2.5 px-6 flex justify-between items-center rounded-2xl border border-solid border-slate-400 font-mulish text-white text-base">
            <img src={vk} alt="vk" className="w-10" />
          </li>
          <li className="py-2.5 px-6 gap-1.5 flex justify-between items-center border border-solid border-slate-400 rounded-2xl font-mulish text-white text-base">
            <a
              target="_blank"
              href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
              className="cursor-pointer text-base text-white font-mulish">
              мы в WhatsApp
            </a>
            <img src={whatsapp} alt="whatsapp" className="w-10" />
          </li>
        </ul>
        <ul className="flex gap-3">
          <li className="py-2.5 px-6 flex justify-between items-center rounded-2xl border border-solid border-slate-400  font-mulish text-white text-base">
            <img src={skype} alt="skype" className="w-10" />
          </li>
          <li className="py-2.5 px-6 flex justify-between items-center rounded-2xl border border-solid border-slate-400 font-mulish text-white text-base">
            <img src={viber} alt="viber" className="w-10" />
          </li>
          <li className="py-2.5 px-6 gap-1.5 flex justify-between items-center rounded-2xl border border-solid border-slate-400 font-mulish text-white text-base">
            <span className="text-base text-white font-mulish">Написать нам</span>
            <img src={email} alt="email" className="w-10" />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export const InnerBottom = ({ handleOpen }) => (
  <div className="flex justify-between gap-4 mt-4 z-10">
    <div className="flex gap-8 z-10">
      <div className="h-64 w-[510px] bg-customBlueBackground rounded-2xl flex justify-center items-center">
        <Maps />
      </div>
      <div>
        <h3 className="text-base font-mulish text-white mb-3">Наш адрес</h3>
        <p className="font-mulish text-white text-base">City-Bishkek Baker Street, 221B </p>
      </div>
    </div>
    <div className="flex flex-col items-center gap-4 z-10">
      <h3 className="text-3xl font-mulish text-white">+996 (778) 00 44 61</h3>
      <h4 className="text-2xl font-mulish text-white">onlinpatent@gmail.com</h4>
      <button
        onClick={handleOpen}
        className="flex text-lg justify-center items-center gap-9 text-white w-[312px] h-[60px] rounded-3xl bg-customOrange font-mulish font-semibold">
        Заказать звонок <img src={next} alt="next" className="w-2.5" />
      </button>

      <button className="flex text-lg justify-center items-center gap-9 text-white w-[312px] h-[60px] rounded-3xl bg-customBlueBackground font-mulish font-semibold">
        Начать работать <img src={next} alt="next" className="w-2.5" />
      </button>
    </div>
  </div>
);

InnerBottom.propTypes = {
  handleOpen: PropTypes.func,
};

function Footer({ contactsRef }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <footer
      ref={contactsRef}
      className="relative overflow-hidden bg-black rounded-tl-2xl rounded-tr-2xl py-9">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-xl max-h-full">
          <RequestCallForm handleClose={handleClose} />
        </div>
      </Modal>
      <div className="mx-auto w-full max-w-7xl">
        <InnerTop />
        <InnerBottom handleOpen={handleOpen} />
      </div>
      <img
        src={greenFlower}
        alt="flower"
        className="absolute w-80 z-0 left-[770px] bottom-[-60px]"
      />
      <img
        src={pinkFlower}
        alt="flower"
        className="absolute w-64 z-0 bottom-[-150px] right-[-80px]"
      />
    </footer>
  );
}

export default Footer;
Footer.propTypes = {
  contactsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};
