import PropTypes from 'prop-types';

function NamePatent({ formData, handleChangeForm, setApplicant, applicant }) {
  const handleChange = (event) => {
    setApplicant((prev) => ({
      ...prev,
      applicant: { ...prev.applicant, applicantType: event.target.value },
    }));
  };

  return (
    <div className="shadow-md mb-8 p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
      <div className="w-full">
        <div className="flex flex-wrap flex-col gap-8">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
              htmlFor="grid-password">
              Название
            </label>
            <input
              className="text-lg appearance-none h-12 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              name="title"
              onChange={handleChangeForm}
              value={formData.title}
              placeholder=""
            />
          </div>
        </div>
        <div className="w-full px-3 mt-6">
          <h4 className="tracking-wide uppercase text-gray-700 text-lg font-bold mb-2">Вы:</h4>
          <div className="flex items-center mb-2">
            <input
              checked={applicant.applicantType === 'Физическое лицо'}
              onChange={handleChange}
              id="default-radio-2"
              type="radio"
              value="Физическое лицо"
              name="default-radio"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ms-4 text-xl font-medium text-gray-900 dark:text-gray-300">
              Физическое лицо
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked={applicant.applicantType === 'Юридическое лицо'}
              onChange={handleChange}
              id="default-radio-1"
              type="radio"
              value="Юридическое лицо"
              name="default-radio"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ms-4 text-xl font-medium text-gray-900 dark:text-gray-300">
              Юридическое лицо
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NamePatent;

NamePatent.propTypes = {
  formData: PropTypes.object,
  handleChangeForm: PropTypes.func,
  setApplicant: PropTypes.func,
  applicant: PropTypes.object,
};
