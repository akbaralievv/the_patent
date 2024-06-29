import { useState } from 'react';
import logo from '../../../public/logo.png';
import location from '../../assets/icons/location.svg';
import phone from '../../assets/icons/phone.svg';
import { NavLink } from 'react-router-dom';

function HeadContacts() {
  const [isLocaleActive, setIsLocaleActive] = useState(false);

  return (
    <div className="flex justify-center items-center h-[100px] z-10">
      <div className="h-full flex items-center">
        <img src={logo} alt="logo" className="w-20" />
      </div>
      <div className="h-full flex items-center gap-2.5 px-6">
        <img src={location} alt="location" />
        <p className="font-mulish text-base text-white">City-Bishkek, Baker Street, 221B </p>
      </div>
      <div className="h-full border-x border-solid border-x-white gap-2.5 flex items-center px-6">
        <img src={phone} alt="phone" />
        <div>
          <p className="font-mulish text-base text-white">+996 (778) 00 44 61</p>
          <p className="font-mulish text-base text-white">onlinpatent@gmail.com</p>
        </div>
        <button className="font-semibold text-white font-mulish text-base flex items-center justify-center w-[180px] h-[60px] rounded-2xl bg-customOrange">
          Бесплатная консультация
        </button>
      </div>
      <div className="h-full flex items-center px-6 gap-4 border-r border-solid border-r-white">
        <p
          onClick={() => setIsLocaleActive(false)}
          className={`${
            !isLocaleActive ? 'border-b-2 border-solid border-b-white text-white' : 'text-gray-400'
          } cursor-pointer text-base font-mulish font-bold`}>
          RU
        </p>
        <p
          onClick={() => setIsLocaleActive(true)}
          className={`${
            isLocaleActive ? 'border-b-2 border-solid border-b-white text-white' : 'text-gray-400'
          } cursor-pointer text-base font-mulish font-bold`}>
          EN
        </p>
      </div>
      <div className="flex items-center px-6">
        <NavLink
          to="/login"
          className="font-semibold text-white font-mulish text-base flex items-center justify-center w-[180px] h-[60px] rounded-2xl bg-customBlue">
          Вход в кабинет
        </NavLink>
      </div>
    </div>
  );
}

export default HeadContacts;
