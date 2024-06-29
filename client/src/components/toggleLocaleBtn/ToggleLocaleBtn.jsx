import { useState } from 'react';
import PropTypes from 'prop-types';

function ToggleLocaleBtn({ bgColor }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={`flex items-center p-1.5 ${bgColor} rounded-2xl`}>
      <button
        onClick={() => setIsActive(false)}
        className={`${
          !isActive ? 'text-black bg-white' : 'text-white'
        } font-mulish text-base py-1.5 px-3 rounded-xl `}>
        Ru
      </button>
      <button
        onClick={() => setIsActive(true)}
        className={`${
          isActive ? 'text-black bg-white' : 'text-white'
        } font-mulish text-base py-1.5 px-3 rounded-xl `}>
        Eng
      </button>
    </div>
  );
}

export default ToggleLocaleBtn;
ToggleLocaleBtn.propTypes = {
  bgColor: PropTypes.string,
};
