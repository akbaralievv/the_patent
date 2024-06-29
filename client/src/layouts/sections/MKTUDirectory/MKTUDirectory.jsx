import { useNavigate } from 'react-router-dom';

import arrow from '../../../assets/icons/arrow.png';
import ClassesList from '../../../components/classesList/ClassesList';

function MKTUDirectory() {
  const navigate = useNavigate();
  return (
    <section className="mx-auto max-w-7xl mt-6 px-4">
      <div
        className="inline-flex items-center gap-4 mb-8 cursor-pointer"
        onClick={() => navigate(-1)}>
        <img src={arrow} alt="arrow" className="w-8" />
        <span className="text-2xl font-mulish font-semibold">Назад</span>
      </div>
      <h3 className="text-3xl mb-8 font-semibold font-mulish">
        Полный справочник всех классов МКТУ
      </h3>
      <ClassesList />
    </section>
  );
}

export default MKTUDirectory;
