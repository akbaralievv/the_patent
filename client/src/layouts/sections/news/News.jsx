import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import newsData from '../../../layouts/sections/news/data.json';

function News({ newsRef }) {
  const truncateText = (str) => {
    return str.slice(0, 150) + '...';
  };

  return (
    <section ref={newsRef} className="py-8 ">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-6 text-center inline-block mx-auto font-mulish text-5xl leading-tight text-customOrange border-b-2 border-b-customOrange">
          Новости
        </h2>
        <ul className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((info) => (
            <li key={info.id}>
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <span className="text-base font-semibold">{info.date}</span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {info.title}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {truncateText(info.description)}
                </p>
                <NavLink
                  to={`/newsDetail/${info.id}`}
                  state={{ title: info.title, description: info.description, image: info.images }}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Подробнее
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </NavLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default News;

News.propTypes = {
  newsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};
