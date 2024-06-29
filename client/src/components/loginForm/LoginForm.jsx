import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import view from '../../assets/icons/auth/view.png';
import hide from '../../assets/icons/auth/hide.png';
import { useLoginMutation } from '../../redux/services/userApi';

function LoginForm() {
  const [login, { data, error, isLoading }] = useLoginMutation();
  const [isEye, setIsEye] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const isValidForm = form.email && form.password;

  const onSubmit = (e) => {
    e.preventDefault();
    if (isValidForm) {
      login(form);
    }
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem('token', data.token);
      if (!isLoading && !error) {
        navigate('/patentSelection');
      }
    }
  }, [isLoading, data, error, navigate]);

  const toggleEye = () => setIsEye(!isEye);

  return (
    <form className="mt-6 rounded-3xl p-8 bg-white flex flex-col gap-6" onSubmit={onSubmit}>
      <h3 className="text-2xl font-mulish font-medium text-authTextColor">Вход в кабинет</h3>
      <div className="flex flex-col gap-4">
        <label htmlFor="" className="flex flex-col gap-2">
          <span className="text-authTextColor text-xl font-medium font-mulish">Логин</span>
          <input
            type="text"
            placeholder="Логин"
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
      </div>
      {error && <p className="text-base font-mulish text-red-500">{error.data}</p>}
      <div className="flex items-center gap-4 justify-between">
        <button
          type="submit"
          disabled={isLoading}
          className="flex items-center justify-center w-28 h-10 text-base font-mulish text-white bg-blue-600 rounded-3xl">
          Вход
        </button>
        <NavLink
          to="/register"
          className="flex items-center justify-center w-44 h-10 text-base font-mulish text-black border border-black rounded-3xl">
          Регистрация
        </NavLink>
      </div>
    </form>
  );
}

export default LoginForm;
