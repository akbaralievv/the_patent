import { useNavigate } from 'react-router-dom';

import arrow from '../../../assets/icons/arrow.png';

function SearchServices() {
  const navigate = useNavigate();
  return (
    <section className="mx-auto max-w-7xl mt-6 px-4">
      <div className="flex items-center gap-6 mb-8">
        <img src={arrow} alt="arrow" className="w-8 cursor-pointer" onClick={() => navigate(-1)} />
        <h3 className="text-3xl font-semibold font-mulish">Поиск патентов</h3>
      </div>

      <form className="max-w-3xl mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-xl font-medium text-gray-900 sr-only dark:text-white">
          Поиск
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pr-32 ps-10 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
            placeholder="Поиск"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-400 font-medium rounded-lg text-xl px-6 py-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
            Найти
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchServices;
