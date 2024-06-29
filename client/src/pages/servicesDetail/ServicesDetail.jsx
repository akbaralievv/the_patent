import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import next from '../../assets/icons/services/next.png';

import evm from '../../assets/images/patentSelection/evm.png';
import trademark from '../../assets/images/patentSelection/trademark.png';
import utilityModel from '../../assets/images/patentSelection/utility model.png';
import invention from '../../assets/images/patentSelection/invention.png';
import industrialSample from '../../assets/images/patentSelection/industrial sample.png';
import database from '../../assets/images/patentSelection/database.png';

import evmData from '../../layouts/sections/services/priceServicesJson/evm.json';
import trademarkData from '../../layouts/sections/services/priceServicesJson/trademark.json';
import utilityModelData from '../../layouts/sections/services/priceServicesJson/utilityModel.json';
import inventionData from '../../layouts/sections/services/priceServicesJson/invention.json';
import industrialSampleData from '../../layouts/sections/services/priceServicesJson/industrialSample.json';
import databaseData from '../../layouts/sections/services/priceServicesJson/database.json';

const thData = ['№', 'Регистрация', 'Цена'];
const imageMapping = {
  1: trademark,
  2: evm,
  3: industrialSample,
  4: invention,
  5: utilityModel,
  6: database,
};

const dataMapping = {
  1: trademarkData,
  2: evmData,
  3: industrialSampleData,
  4: inventionData,
  5: utilityModelData,
  6: databaseData,
};

function ServicesDetail() {
  const {
    state: { title, description },
  } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageSrc = imageMapping[id];
  const serviceData = dataMapping[id];

  return (
    <section className="pt-56 pb-10">
      <div className="mx-auto w-full max-w-7xl">
        <div
          className="inline-flex mb-12 items-center gap-2 cursor-pointer"
          onClick={() => navigate(-1)}>
          <img src={next} alt="" className="rotate-180 w-8" />
          <span className="text-white font-mulish font-semibold text-2xl">Назад</span>
        </div>
        <div className="mb-6 flex gap-6 items-center">
          <img src={imageSrc} alt="" className="w-20" />
          <h4 className="text-center inline-block font-mulish text-3xl leading-tight text-white">
            {title}
          </h4>
        </div>
        <p className="text-white text-lg">{description}</p>
        <div className="mt-8">
          <h5 className="mb-4 text-center inline-block mx-auto font-mulish text-2xl leading-tight text-white">
            Цены
          </h5>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {thData.map((data, id) => (
                    <th key={id} scope="col" className="text-black text-lg px-6 py-3">
                      {data}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {serviceData.map((row) => (
                  <tr
                    key={row.id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-100 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="text-lg px-6 py-4 font-medium whitespace-nowrap text-black dark:text-white">
                      {row.id}
                    </th>
                    <td className="px-6 py-4 text-lg text-black">{row.name}</td>
                    <td className="px-6 py-4 text-lg text-black min-w-40">{row.price} сом</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesDetail;
