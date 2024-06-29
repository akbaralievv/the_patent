import { useState } from 'react';
import PropTypes from 'prop-types';

import { useUpdatePatentMutation } from '../../redux/services/patentsApi';
import NamePatent from '../createPatentForm/NamePatent';
import MKTU from '../createPatentForm/MKTU';

import GraphicalRepresentations from '../createPatentForm/GraphicalRepresentations';
import AttachedDocuments from '../createPatentForm/AttachedDocuments';
import Applicant from '../createPatentForm/Applicant';
import PatentVerified from '../createPatentForm/PatentVerified';
import Description from '../createPatentForm/Description';

function UpdatePatentForm({ state }) {
  const [updatePatent, { data, error, isLoading }] = useUpdatePatentMutation();

  const [formData, setFormData] = useState({
    title: state.title,
    description: state.description,
    patentType: state.patentType.name,
    mktuClass: state.mktuClass.name,
    applicant: {
      applicantType: state.applicant.applicantType.name,
      fullName: state.applicant.full_name,
      address: state.applicant.applicant_address,
      code: state.applicant.applicant_code,
      nationality: state.applicant.applicant_nationality,
      number: state.applicant.applicant_number,
      email: state.applicant.applicant_email,
      country: state.applicant.applicant_country.name,
    },
    patentAttorney: {
      name: state.patentAttorney.attorney_name,
      licenseNumber: state.patentAttorney.attorney_address,
      address: state.patentAttorney.attorney_address,
      phoneNumber: state.patentAttorney.attorney_phoneNumber,
      email: state.patentAttorney.attorney_email,
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
      updatePatent({ id: state.id, data: formData });
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
        <MKTU setFormData={setFormData} formData={formData} />
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
        {error && <p className="text-lg text-red-500">{error.message}</p>}
        {data && <p className="text-lg text-green-500">Патент успешно обновлен!</p>}
        <div className="flex justify-end" type="submit" disabled={isLoading}>
          <button
            type="submit"
            className="text-white bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
            {isLoading ? 'Отправка...' : 'Сохранить изменения'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdatePatentForm;
UpdatePatentForm.propTypes = {
  state: PropTypes.object,
};
