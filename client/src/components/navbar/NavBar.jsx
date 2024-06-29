import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function NavBar({ scrollToSection }) {
  const [isActive, setIsActive] = useState('Главное');

  const handleSetActive = useCallback(
    (name) => {
      setIsActive(name);
      scrollToSection(name);
    },
    [scrollToSection],
  );

  const buttonClass = 'text-white font-mulish font-regular text-xl';
  const activeClass = 'pb-0.5 font-bold border-b border-b-white';

  return (
    <div className="z-10 h-[100px] flex justify-center items-center bg-black bg-opacity-50">
      <ul className="flex z-10 items-center gap-16">
        {['Главное', 'Об агентстве', 'Услуги', 'Новости', 'Контакты'].map((name) => (
          <li key={name}>
            <NavLink
              to="/"
              className={`${buttonClass} ${isActive === name ? activeClass : ''}`}
              onClick={() => handleSetActive(name)}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
NavBar.propTypes = {
  scrollToSection: PropTypes.func,
};
