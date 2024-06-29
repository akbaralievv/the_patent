import { NavLink, useNavigate } from 'react-router-dom';

import arrow from '../../../assets/icons/arrow.png';

import evm from '../../../assets/images/patentSelection/evm.png';
import utilityModel from '../../../assets/images/patentSelection/utility model.png';
import invention from '../../../assets/images/patentSelection/invention.png';
import database from '../../../assets/images/patentSelection/database.png';
import trademark from '../../../assets/images/patentSelection/trademark.png';
import industrialSample from '../../../assets/images/patentSelection/industrial sample.png';
import { useGetMyPatentsQuery } from '../../../redux/services/patentsApi';

const thData = [
  'Тип объекта интеллектуальной собственности',
  'Название',
  'Дата подачи',
  'Статус',
  'Действия',
];

function MyBriefcase() {
  const { data, error, isLoading } = useGetMyPatentsQuery();
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const months = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year} г.`;
  };
  const getImage = (type) => {
    switch (type) {
      case 'Полезная модель':
        return utilityModel;
      case 'Программа для ЭВМ':
        return evm;
      case 'Изобретение':
        return invention;
      case 'База данных':
        return database;
      case 'Товарный знак':
        return trademark;
      case 'Промышленный образец':
        return industrialSample;
      default:
        return null;
    }
  };

  return (
    <section className="mx-auto max-w-7xl mt-6 px-4">
      <div
        className="inline-flex items-center gap-4 mb-8 cursor-pointer"
        onClick={() => navigate(-1)}>
        <img src={arrow} alt="arrow" className="w-8" />
        <span className="text-2xl font-mulish font-semibold">Назад</span>
      </div>
      <h3 className="text-3xl mb-4 font-semibold font-mulish">Мои патенты</h3>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {thData.map((item) => (
                <th key={item} scope="col" className="px-6 py-3">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={thData.length} className="px-6 py-4 text-center">
                  Загрузка...
                </td>
              </tr>
            ) : error || data.length === 0 ? (
              <tr>
                <td colSpan={thData.length} className="px-6 py-4 text-center">
                  Пусто
                </td>
              </tr>
            ) : (
              data?.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 flex gap-4 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img src={getImage(item.patentType.name)} alt="" className="w-12" />
                    <p>{item.patentType.name}</p>
                  </th>
                  <td className="px-6 py-4 text-gray-900">
                    <button>{item.title}</button>
                  </td>
                  <td className="px-6 py-4 text-gray-900">
                    <p>{formatDate(item.submissionDate)}</p>
                  </td>
                  <td
                    className={`px-6 py-4 text-gray-900 font-semibold ${
                      item.status === 'Ожидание'
                        ? 'text-sky-400'
                        : item.status === 'Отклонено'
                        ? 'text-red-500'
                        : item.status === 'Одобрено'
                        ? 'text-green-500'
                        : ''
                    }`}>
                    <p>{item.status}</p>
                  </td>
                  <td className="px-6 py-4 text-gray-900">
                    <NavLink
                      to="/patentSelection/createPatent"
                      state={{ state: item }}
                      className="text-blue-600 hover:underline">
                      Редактировать
                    </NavLink>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default MyBriefcase;
