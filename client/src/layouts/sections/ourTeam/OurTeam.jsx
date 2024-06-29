import { useState } from 'react';
import Modal from '@mui/material/Modal';

import SliderPersons from '../../../components/sliderPersons/SliderPersons';
import WriteUsForm from '../../../components/writeUsForm/WriteUsForm';

function OurTeam() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <section className="mx-auto w-full max-w-7xl flex flex-col items-center">
      <h2 className="inline-block font-mulish text-5xl leading-tight text-white border-b-2 border-b-customOrange">
        Наша команда
      </h2>
      <SliderPersons />
      <button
        onClick={handleOpen}
        className="text-2xl font-medium text-white font-mulish flex items-center justify-center w-[260px] h-[62px] rounded-full bg-customOrange">
        Написать нам
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-xl max-h-full">
          <WriteUsForm onClose={handleClose} />
        </div>
      </Modal>
    </section>
  );
}

export default OurTeam;
