import FileDND from './FileDND';

function GraphicalRepresentations() {
  return (
    <div className="shadow-md mb-8 p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
      <h4 className="text-2xl font-medium mb-4 font-mulish">Графические представления</h4>
      <div className="w-full">
        <div className="flex flex-wrap flex-col gap-8">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
              htmlFor="grid-password">
              Файлы (можете приложить к заявке изображения, описания, чертежи)
            </label>
            <FileDND />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphicalRepresentations;
