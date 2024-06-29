import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';

import logo from '../../../public/logo.png';
import burger from '../../assets/icons/burgerMenu.png';

import ToggleLocaleBtn from '../../components/toggleLocaleBtn/ToggleLocaleBtn';
import { useGetUserQuery } from '../../redux/services/userApi';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const MenuBurger = () => {
  const { data } = useGetUserQuery();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton>
          <img src={burger} alt="burger" className="w-12 cursor-pointer" />
        </MenuButton>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <MenuItems className="absolute overflow-hidden right-0 z-10 mt-2 w-56 origin-top-right rounded-2xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div>
            <MenuItem>
              {({ focus }) => (
                <NavLink
                  to="/patentSelection/myBriefcase"
                  className={classNames(
                    focus ? 'bg-teal-500 text-white' : 'text-gray-700',
                    'block px-8 py-4 text-lg group rounded-tr-2xl rounded-tl-2xl transition-all duration-400 ease-linear',
                  )}>
                  <span className="block cursor-pointer">Мой портфель</span>
                </NavLink>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <a
                  href="https://base.patent.kg/"
                  target="_blank"
                  className={classNames(
                    focus ? 'bg-teal-500 text-white' : 'text-gray-700',
                    'block px-8 py-4 text-lg group rounded-br-2xl rounded-bl-2xl transition-all duration-400 ease-linear',
                  )}>
                  <span className="block cursor-pointer">Сервисы</span>
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <NavLink
                  to="/patentSelection/mktuDirectory"
                  className={classNames(
                    focus ? 'bg-teal-500 text-white' : 'text-gray-700',
                    'block px-8 py-4 text-lg group rounded-br-2xl rounded-bl-2xl transition-all duration-400 ease-linear',
                  )}>
                  <span className="block cursor-pointer">Справочник МКТУ</span>
                </NavLink>
              )}
            </MenuItem>
            {data?.authorities[0].authority === 'ROLE_ADMIN' && (
              <MenuItem>
                {({ focus }) => (
                  <a
                    href="http://localhost:5001/"
                    target="_blank"
                    className={classNames(
                      focus ? 'bg-teal-500 text-white' : 'text-gray-700',
                      'block px-8 py-4 text-lg group rounded-br-2xl rounded-bl-2xl transition-all duration-400 ease-linear',
                    )}>
                    <span className="block cursor-pointer">Админ панель</span>
                  </a>
                )}
              </MenuItem>
            )}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

function HeaderPatentSelection() {
  return (
    <header className="bg-teal-950">
      <div className="mx-auto max-w-7xl py-10 px-4">
        <div className="flex justify-between items-center">
          <NavLink to="/patentSelection">
            <img src={logo} alt="logo" className="w-32 cursor-pointer" />
          </NavLink>
          <div className="flex justify-between items-center gap-9">
            <ToggleLocaleBtn bgColor={'bg-teal-500'} />
            <MenuBurger />
          </div>
        </div>
        <h2 className="mt-11 font-mulish font-medium text-white text-5xl">Заявка на патент</h2>
      </div>
    </header>
  );
}

export default HeaderPatentSelection;
