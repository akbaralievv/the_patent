import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';

import next from '../../assets/icons/ourTeam/next.svg';
import { useState } from 'react';

function WriteUsForm({ onClose }) {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send('service_wh8ev1r', 'template_oxknlwf', formData, {
        publicKey: 'vyMgXONJ_bU_mrdND',
      })
      .then(
        (result) => {
          console.log(result.text);
          alert('Письмо успешно отправлено!');
          onClose();
        },
        (error) => {
          console.log(error.text);
          alert('Ошибка при отправке письма.');
        },
      );
  };
  return (
    <form className="bg-blue-900 py-6 px-8 rounded-2xl" onSubmit={handleSubmit}>
      <div className="flex justify-between items-center gap-2">
        <h3 className="text-2xl font-medium font-mulish text-white">Написать нам</h3>
        <button
          onClick={onClose}
          type="button"
          className="text-white font-semibold text-xl border-2 border-white rounded-full w-10 h-10 flex items-center justify-center">
          X
        </button>
      </div>
      <ul className="my-4 flex flex-col gap-4">
        <li>
          <input
            type="text"
            placeholder="Ваше имя"
            name="user_name"
            onChange={handleChange}
            className="rounded-xl outline-none h-10 w-full border-none text-base font-mulish px-3.5"
          />
        </li>
        <li>
          <input
            type="text"
            placeholder="+996(---)(___)-(___)"
            name="user_phone"
            onChange={handleChange}
            className="rounded-xl outline-none h-10 w-full border-none text-base font-mulish px-3.5"
          />
        </li>
        <li>
          <input
            type="text"
            placeholder="Ваш e-mail"
            name="user_email"
            onChange={handleChange}
            className="rounded-xl outline-none h-10 w-full border-none text-base font-mulish px-3.5"
          />
        </li>
      </ul>
      <div>
        <h4 className="text-xl font-mulish font-medium text-white mb-4">Краткое описание задачи</h4>
        <textarea
          placeholder="Введите текст"
          name="message"
          onChange={handleChange}
          className="w-full min-h-24 text-base font-mulish h-36 max-h-44 outline-none rounded-2xl"></textarea>
      </div>
      <button
        type="submit"
        className="mt-4 mx-auto text-xl text-white font-mulish flex items-center gap-4 justify-center w-[200px] h-[50px] rounded-full bg-customOrange">
        Написать нам <img src={next} alt="icon" className="w-3" />
      </button>
    </form>
  );
}

export default WriteUsForm;

WriteUsForm.propTypes = {
  onClose: PropTypes.func,
};
