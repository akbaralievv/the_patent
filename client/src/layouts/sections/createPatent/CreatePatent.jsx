import { useLocation, useNavigate } from 'react-router-dom';

import arrow from '../../../assets/icons/arrow.png';

import CreatePatentForm from '../../../components/createPatentForm';
import UpdatePatentForm from '../../../components/updatePatentForm';

function CreatePatent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { from, state } = location.state || {};
  return (
    <section className="mx-auto max-w-7xl mt-6 px-4">
      <div
        className="inline-flex items-center gap-4 mb-8 cursor-pointer"
        onClick={() => navigate(-1)}>
        <img src={arrow} alt="arrow" className="w-8" />
        <span className="text-2xl font-mulish font-semibold">Назад</span>
      </div>
      <h3 className="text-3xl font-semibold mb-4 font-mulish">
        {from ? from : state ? state.patentType.name : ''}
      </h3>
      {from ? <CreatePatentForm from={from} /> : state ? <UpdatePatentForm state={state} /> : ''}
    </section>
  );
}

export default CreatePatent;
