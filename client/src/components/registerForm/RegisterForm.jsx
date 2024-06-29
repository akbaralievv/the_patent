import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import view from '../../assets/icons/auth/view.png';
import hide from '../../assets/icons/auth/hide.png';
import flag from '../../assets/images/auth/flag.png';
import { useRegisterMutation } from '../../redux/services/userApi';

function RegisterForm() {
  const [register, { data, error, isLoading }] = useRegisterMutation();
  const [isEye, setIsEye] = useState(false);
  const [form, setForm] = useState({
    email: '',
    name: '',
    surname: '',
    password: '',
    phone: '',
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const isValidForm = form.email && form.name && form.surname && form.password && form.phone;

  const onSubmit = (e) => {
    e.preventDefault();
    if (isValidForm) {
      register(form);
    }
  };

  useEffect(() => {
    if (!isLoading && !error && data) {
      navigate('/login');
    }
  }, [isLoading, data, error, navigate]);

  const toggleEye = () => setIsEye(!isEye);

  return (
    <form className="mt-6 rounded-3xl p-8 bg-white flex flex-col gap-6" onSubmit={onSubmit}>
      <h3 className="text-2xl font-mulish font-medium text-authTextColor">Вход в кабинет</h3>
      <div className="flex flex-col gap-4">
        <label htmlFor="" className="flex flex-col gap-2">
          <span className="text-authTextColor text-xl font-medium font-mulish">Имя</span>
          <input
            type="text"
            placeholder="Имя"
            name="name"
            onChange={handleChange}
            className="border-none bg-authInputBackground outline-none rounded-2xl w-full h-11 px-3 text-authTextColor text-base font-medium font-mulish"
          />
        </label>
        <label htmlFor="" className="flex flex-col gap-2">
          <span className="text-authTextColor text-xl font-medium font-mulish">Фамилия</span>
          <input
            type="text"
            placeholder="Фамилия"
            name="surname"
            onChange={handleChange}
            className="border-none bg-authInputBackground outline-none rounded-2xl w-full h-11 px-3 text-authTextColor text-base font-medium font-mulish"
          />
        </label>
        <label htmlFor="" className="flex flex-col gap-2">
          <span className="text-authTextColor text-xl font-medium font-mulish">E-mail</span>
          <input
            type="text"
            placeholder="E-mail"
            name="email"
            onChange={handleChange}
            className="border-none bg-authInputBackground outline-none rounded-2xl w-full h-11 px-3 text-authTextColor text-base font-medium font-mulish"
          />
        </label>
        <label htmlFor="" className="flex flex-col gap-2">
          <span className="text-authTextColor text-xl font-medium font-mulish">Пароль</span>
          <div className="relative">
            <input
              type={`${isEye ? 'text' : 'password'}`}
              placeholder="Пароль"
              name="password"
              onChange={handleChange}
              className="border-none bg-authInputBackground outline-none rounded-2xl w-full h-11 px-3 pr-[39px] text-authTextColor text-base font-medium font-mulish"
            />
            <img
              src={isEye ? view : hide}
              alt=""
              onClick={toggleEye}
              className="absolute right-[10px] top-[10px] w-6 cursor-pointer"
            />
          </div>
        </label>
        <label htmlFor="" className="flex flex-col gap-2">
          <span className="text-authTextColor text-xl font-medium font-mulish">Телефон</span>
          <div className="flex">
            <div className="h-11 p-3 gap-2 bg-authPhoneBackground flex items-center rounded-l-2xl">
              <img src={flag} alt="flag" className="w-5" />
              <span className="text-base font-medium font-mulish text-white">+996</span>
            </div>
            <input
              type="text"
              placeholder="Телефон"
              name="phone"
              onChange={handleChange}
              className="border-none bg-authInputBackground outline-none rounded-r-2xl h-11 px-3 text-authTextColor text-base font-medium font-mulish"
            />
          </div>
        </label>
      </div>
      {error && error.originalStatus === 400 && (
        <p className="text-base font-mulish text-red-500">Такая почта уже зарегистрирована</p>
      )}
      <div className="flex items-center gap-4 justify-between">
        <NavLink
          to="/login"
          className="w-28 h-10 flex items-center justify-center text-base font-mulish text-black border border-black rounded-3xl">
          Вход
        </NavLink>
        <button
          type="submit"
          disabled={isLoading}
          className="w-44 h-10 bg-blue-600 text-base font-mulish text-white  rounded-3xl">
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
