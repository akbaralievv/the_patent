import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import next from '../../assets/icons/services/next.png';

function NewsDetail() {
  const {
    state: { image, title, description },
  } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-56 pb-10">
      <div className="mx-auto w-full max-w-7xl flex flex-col">
        <div
          className="inline-flex mb-12 items-center gap-2 cursor-pointer"
          onClick={() => navigate(-1)}>
          <img src={next} alt="" className="rotate-180 w-8" />
          <span className="text-white font-mulish font-semibold text-2xl">Назад</span>
        </div>
        <h4 className="mb-6 text-center inline-block mx-auto font-mulish text-3xl leading-tight text-white">
          {title}
        </h4>
        <div className="flex gap-4 mb-6">
          {image?.map((image) => (
            <img key={image} className="w-96" src={image} alt="" />
          ))}
        </div>
        <p className="text-white text-lg">{description}</p>
      </div>
    </section>
  );
}

export default NewsDetail;
