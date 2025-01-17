import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.png';
import DefaultLayout from '../../layout/DefaultLayout';
import { useLoginMutation } from '../../redux/services/userApi';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data, error, isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = await login({ email, password }).unwrap();
      // Сохранение токена в локальное хранилище или куки
      localStorage.setItem('token', userData.token);
      // Перенаправление пользователя на главную страницу или другую защищенную страницу
      navigate('/tables');
    } catch (err) {
      console.error('Failed to log in: ', err);
    }
  };

  const getErrorMessage = (error: any): string => {
    if (error?.data?.message) {
      return error.data.message;
    } else if (error?.error) {
      return error.error;
    }
    return 'Unknown error occurred';
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Sign In" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" to="/">
                <img className="hidden dark:block" src={Logo} alt="Logo" />
                <img className="dark:hidden" src={LogoDark} alt="Logo" />
              </Link>
              <p className="2xl:px-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse.
              </p>
              <span className="mt-15 inline-block">{/* SVG код */}</span>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium">Start for free</span>
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign In to ThePatent
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    <span className="absolute right-4 top-4">
                      {/* SVG для email */}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="6+ Characters, 1 Capital letter"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    <span className="absolute right-4 top-4">
                      {/* SVG для пароля */}
                    </span>
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                    disabled={isLoading}
                  />
                </div>

                {error && (
                  <p className="text-red-600">
                    Ошибка: {getErrorMessage(error)}
                  </p>
                )}

                <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
                  <span>{/* SVG для Google */}</span>
                  Sign in with Google
                </button>

                <div className="mt-6 text-center">
                  <p>
                    Don’t have any account?{' '}
                    <Link to="/auth/signup" className="text-primary">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignIn;
