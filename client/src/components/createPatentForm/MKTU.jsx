import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const classes = Array.from({ length: 45 }, (_, i) => `Класс-${i + 1}`);

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MKTU({ setFormData, formData }) {
  const [selected, setSelected] = useState(classes[0]);
  useEffect(() => {
    setFormData((prev) => ({ ...prev, mktuClass: selected }));
  }, [selected, setFormData]);

  return (
    <div className="shadow-md mb-8 p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
      <h4 className="text-2xl font-medium mb-4 font-mulish">МКТУ</h4>
      <div className="w-full flex justify-between gap-20 items-center">
        <Listbox value={formData.mktuClass} onChange={setSelected}>
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
                    {classes.map((item, index) => (
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
        <p className="text-lg font-mulish font-medium w-[35%] border-b-2 cursor-pointer inline-block">
          Перейдите в подробнее о классах
        </p>
      </div>
    </div>
  );
}

MKTU.propTypes = {
  setFormData: PropTypes.func,
  formData: PropTypes.object,
};
