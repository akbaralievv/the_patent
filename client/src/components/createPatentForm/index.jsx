import { useState } from 'react';
import PropTypes from 'prop-types';

import Description from './Description';
import Applicant from './Applicant';
import AttachedDocuments from './AttachedDocuments';
import GraphicalRepresentations from './GraphicalRepresentations';
import MKTU from './MKTU';
import PatentVerified from './PatentVerified';
import NamePatent from './NamePatent';
import { useCreatePatentMutation } from '../../redux/services/patentsApi';

function CreatePatentForm({ from }) {
  const [createPatent, { data, error, isLoading }] = useCreatePatentMutation();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    patentType: from,
    mktuClass: '',
    applicant: {
      applicantType: 'Физическое лицо',
      fullName: '',
      address: '',
      code: '',
      nationality: '',
      number: '',
      email: '',
      country: '',
    },
    patentAttorney: {
      name: '',
      licenseNumber: '',
      address: '',
      phoneNumber: '',
      email: '',
    },
  });
  const [validationError, setValidationError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeApplicant = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      applicant: {
        ...prev.applicant,
        [name]: value,
      },
    }));
  };

  const handleChangePatentAttorney = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      patentAttorney: {
        ...prev.patentAttorney,
        [name]: value,
      },
    }));
  };

  const validateForm = () => {
    const { title, description, patentType, mktuClass, applicant, patentAttorney } = formData;
    if (
      !title ||
      !description ||
      !patentType ||
      !mktuClass ||
      !applicant.fullName ||
      !applicant.address ||
      !applicant.code ||
      !applicant.nationality ||
      !applicant.number ||
      !applicant.email ||
      !applicant.country ||
      !patentAttorney.name ||
      !patentAttorney.licenseNumber ||
      !patentAttorney.address ||
      !patentAttorney.phoneNumber ||
      !patentAttorney.email
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      createPatent(formData);
    } else {
      setValidationError('Все поля должны быть заполнены.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <NamePatent
          handleChangeForm={handleChange}
          formData={formData}
          setApplicant={setFormData}
          applicant={formData.applicant}
        />
        <MKTU formData={formData} setFormData={setFormData} />
        <Description formData={formData} handleChangeForm={handleChange} />
        <GraphicalRepresentations />
        <AttachedDocuments />
        <Applicant
          formData={formData}
          handleChangeApplicant={handleChangeApplicant}
          setFormData={setFormData}
        />
        <PatentVerified
          formData={formData}
          handleChangePatentAttorney={handleChangePatentAttorney}
        />
        {validationError && (
          <p className="text-lg font-medium text-red-600 mt-2">{validationError}</p>
        )}
        <div className="flex justify-end" type="submit" disabled={isLoading}>
          <button
            type="submit"
            className="text-white bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
            {isLoading ? 'Отправка...' : 'Оставить заявку'}
          </button>
        </div>
      </form>
      {error && <p className="error">{error.message}</p>}
      {data && <p className="success">Патент успешно создан!</p>}
    </div>
  );
}

export default CreatePatentForm;
CreatePatentForm.propTypes = {
  from: PropTypes.string,
};
