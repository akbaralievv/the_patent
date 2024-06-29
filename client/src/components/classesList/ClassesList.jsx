import data from '../../layouts/sections/MKTUDirectory/classesData.json';

export default function ClassesList() {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {data.map((product) => (
        <li key={product.id} className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src={product.img}
              alt=""
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-2xl font-medium text-teal-500">{product.name}</h3>
          <p className="mt-1 text-xl font-medium text-gray-900">{product.description}</p>
        </li>
      ))}
    </ul>
  );
}
