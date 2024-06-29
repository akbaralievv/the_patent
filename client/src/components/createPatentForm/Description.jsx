import PropTypes from 'prop-types';

function Description({ handleChangeForm, formData }) {
  return (
    <div className="shadow-md mb-8 p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
      <h4 className="text-2xl font-medium mb-4 font-mulish">Описание заявляемого обозначения</h4>
      <div className="w-full flex justify-between gap-20 items-center">
        <textarea
          id="message"
          rows="4"
          onChange={handleChangeForm}
          name="description"
          value={formData ? formData.description : ''}
          className=" block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Расскажите о своем товаре..."></textarea>
      </div>
    </div>
  );
}
export default Description;

Description.propTypes = {
  handleChangeForm: PropTypes.func,
  formData: PropTypes.object,
};
