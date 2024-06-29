import PropTypes from 'prop-types';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const countryCode = [
  'KG-Kyrgyzstan',
  'KZ-Kazakhstan',
  'RUS-Russia',
  'AM-Armenia',
  'JP-Japan',
  'CH-China',
  'UK-Ukraine',
];

function Applicant({ handleChangeApplicant, setFormData, formData }) {
  const [selected, setSelected] = useState(countryCode[0]);
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      applicant: {
        ...prev.applicant,
        country: selected,
      },
    }));
  }, [selected, setFormData]);

  return (
    <div className="shadow-md mb-8 p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
      <h4 className="text-2xl font-medium mb-4 font-mulish">Заявитель</h4>
      <div className="w-full">
        <div className="flex flex-wrap flex-col gap-8">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
              htmlFor="fullName">
              Ф.И.О. или полное наименование
            </label>
            <input
              className="text-lg appearance-none h-12 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="fullName"
              type="text"
              onChange={handleChangeApplicant}
              name="fullName"
              value={formData ? formData.applicant.fullName : ''}
              placeholder=""
            />
            <p className="text-gray-600 text-xl italic">
              Фамилия, имя и отчество физического лица или полное наименование юридического лица
            </p>
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
              htmlFor="code">
              Регистрационный код
            </label>
            <input
              className="text-lg appearance-none h-12 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="code"
              type="text"
              onChange={handleChangeApplicant}
              placeholder=""
              value={formData ? formData.applicant.code : ''}
              name="code"
            />
            <p className="text-gray-600 text-xl italic">
              Для физических лиц — ПИН. Для юридических лиц — ИНН или ОКПО
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2">
                Код страны по стандарту ВОИС ST.3
              </label>
              <Listbox value={formData ? formData.applicant.country : ''} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <div className="relative mt-2 w-full">
                      <ListboxButton className="relative appearance-none h-12 block border border-gray-200 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500 w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                        <span className="flex items-center">
                          <span className="ml-3 block truncate text-lg">{selected}</span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                      </ListboxButton>
                      <Transition
                        show={open}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {countryCode.map((item, index) => (
                            <ListboxOption
                              key={index}
                              className={({ focus }) =>
                                classNames(
                                  focus ? 'bg-indigo-600 text-white' : '',
                                  !focus ? 'text-gray-900' : '',
                                  'relative cursor-default select-none py-2 pl-3 pr-9',
                                )
                              }
                              value={item}>
                              {({ selected, focus }) => (
                                <>
                                  <div className="flex items-center">
                                    <span
                                      className={classNames(
                                        selected ? 'font-semibold' : 'font-normal',
                                        'ml-3 block truncate text-lg',
                                      )}>
                                      {item}
                                    </span>
                                  </div>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        focus ? 'text-white' : 'text-indigo-600',
                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                      )}>
                                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </ListboxOption>
                          ))}
                        </ListboxOptions>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
              <p className="text-gray-600 text-xl italic">Для иностранных заявителей</p>
            </div>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                htmlFor="nationality">
                Гражданство
              </label>
              <input
                className="text-lg appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded h-12 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="nationality"
                type="text"
                name="nationality"
                value={formData.applicant.nationality}
                onChange={handleChangeApplicant}
                placeholder=""
              />
            </div>
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
              htmlFor="address">
              Местожительство или местонахождение
            </label>
            <input
              className="text-lg appearance-none h-12 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="address"
              type="text"
              name="address"
              value={formData ? formData.applicant.address : ''}
              onChange={handleChangeApplicant}
              placeholder=""
            />
          </div>
          <div className="flex gap-4">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                htmlFor="number">
                Телефон
              </label>
              <input
                className="text-lg appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded h-12 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="number"
                name="number"
                type="text"
                value={formData ? formData.applicant.number : ''}
                onChange={handleChangeApplicant}
                placeholder=""
              />
            </div>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                htmlFor="email">
                Адрес электронной почты
              </label>
              <input
                className="text-lg appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded h-12 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="text"
                name="email"
                value={formData ? formData.applicant.email : ''}
                onChange={handleChangeApplicant}
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applicant;
Applicant.propTypes = {
  handleChangeApplicant: PropTypes.func,
  setFormData: PropTypes.func,
  formData: PropTypes.object,
};
