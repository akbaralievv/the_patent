import PropTypes from 'prop-types';

function PatentVerified({ formData, handleChangePatentAttorney }) {
  return (
    <div className="shadow-md mb-8 p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
      <h4 className="text-2xl font-medium mb-4 font-mulish">Патентный поверенный</h4>
      <div className="w-full">
        <div className="flex flex-wrap flex-col gap-8">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
              htmlFor="name">
              Ф.И.О.
            </label>
            <input
              className="text-lg appearance-none h-12 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="name"
              type="text"
              name="name"
              value={formData.patentAttorney.name}
              onChange={handleChangePatentAttorney}
              placeholder=""
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
              htmlFor="licenseNumber">
              Регистрационный код
            </label>
            <input
              className="text-lg appearance-none h-12 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="licenseNumber"
              type="text"
              name="licenseNumber"
              value={formData.patentAttorney.licenseNumber}
              onChange={handleChangePatentAttorney}
              placeholder=""
            />
            <p className="text-gray-600 text-xl italic">Персональный идентификационный номер</p>
          </div>

          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
              htmlFor="address">
              Адрес местожительства или местонахождения
            </label>
            <input
              className="text-lg appearance-none h-12 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="address"
              type="text"
              name="address"
              value={formData.patentAttorney.address}
              onChange={handleChangePatentAttorney}
              placeholder=""
            />
          </div>
          <div className="flex gap-4">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                htmlFor="phoneNumber">
                Телефон
              </label>
              <input
                className="text-lg appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded h-12 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                value={formData.patentAttorney.phoneNumber}
                onChange={handleChangePatentAttorney}
                placeholder=""
              />
            </div>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                htmlFor="email">
                Адрес электронной почты
              </label>
              <input
                className="text-lg appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded h-12 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="text"
                name="email"
                value={formData.patentAttorney.email}
                onChange={handleChangePatentAttorney}
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatentVerified;
PatentVerified.propTypes = {
  handleChangePatentAttorney: PropTypes.func,
  formData: PropTypes.object,
};
