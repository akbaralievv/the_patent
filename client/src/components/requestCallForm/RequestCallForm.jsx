import PropTypes from 'prop-types';

import next from '../../assets/icons/ourTeam/next.svg';

function RequestCallForm({ handleClose }) {
  return (
    <form className="bg-blue-900 py-6 px-8 rounded-2xl">
      <div className="flex justify-between items-center gap-2">
        <h3 className="text-2xl font-medium font-mulish text-white">Заказать звонок</h3>
        <button
          type="button"
          onClick={handleClose}
          className="text-white font-semibold text-xl border-2 border-white rounded-full w-10 h-10 flex items-center justify-center">
          X
        </button>
      </div>
      <ul className="my-4 flex flex-col gap-4">
        <li>
          <input
            type="text"
            placeholder="Ваше имя"
            className="rounded-xl outline-none h-10 w-full border-none text-base font-mulish px-3.5"
          />
        </li>
        <li>
          <input
            type="text"
            placeholder="+996(---)(___)-(___)"
            className="rounded-xl outline-none h-10 w-full border-none text-base font-mulish px-3.5"
          />
        </li>
      </ul>
      <button className="mt-4 mx-auto text-xl text-white font-mulish flex items-center gap-4 justify-center w-[200px] h-[50px] rounded-full bg-customOrange">
        Заказать <img src={next} alt="icon" className="w-3" />
      </button>
    </form>
  );
}

export default RequestCallForm;

RequestCallForm.propTypes = {
  handleClose: PropTypes.func,
};
