import { NavLink } from 'react-router-dom';

import logo from '../../../public/logo.png';
import img from '../../assets/images/auth/img.png';
import flower1 from '../../assets/images/auth/flower 1.png';
import flower2 from '../../assets/images/auth/flower 2.png';
import flower3 from '../../assets/images/auth/flower 3.png';
import flower4 from '../../assets/images/auth/flower 4.png';

import ToggleLocaleBtn from '../../components/toggleLocaleBtn/ToggleLocaleBtn';
import RegisterForm from '../../components/registerForm/RegisterForm';

function Register() {
  return (
    <div className="relative bg-authBackground min-h-screen">
      <img src={flower1} alt="flower" className="absolute z-0 w-52 top-0 left-0" />
      <img src={flower2} alt="flower" className="absolute z-0 w-52 top-0 right-0" />
      <img src={flower3} alt="flower" className="absolute z-0 w-64 bottom-0 left-[700px]" />
      <img src={flower4} alt="flower" className="absolute z-0 w-52 bottom-0 right-0" />
      <div className="mx-auto w-full max-w-7xl flex flex-col items-center pt-16 z-10">
        <NavLink to="/" className="cursor-pointer">
          <img src={logo} alt="logo" className="w-32 z-10" />
        </NavLink>
        <div className="flex justify-between items-center gap-4 w-full z-10">
          <div>
            <h2 className="text-5xl font-mulish font-bold mb-2 text-authTextColor">
              Онлайн патент
            </h2>
            <p className="text-2xl mb-2 font-mulish text-authTextColor max-w-[485px]">
              ваша интеллектуальная собственность находится под нашей надежной защитой
            </p>
            <img src={img} alt="img" className="w-96" />
          </div>
          <div className="flex flex-col items-end">
            <ToggleLocaleBtn bgColor={'bg-authLocaleBtn'} />
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
