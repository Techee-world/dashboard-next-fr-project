import React, { Fragment, useState } from "react";
import { Dialog, Transition, Combobox } from "@headlessui/react";
import Icon from "@/components/ui/Icon";

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState(" ");
  const [sample , setSample ] = useState()
  const [sample1 , setSample1 ] = useState()

  const searchList = {
    kerala: ["a", "b"],
    delhi: ["10", "20"],
    tamilnad: ["one", "two"],
  };

  const filteredSearchList = Object.keys(searchList).filter((key) =>
    key.toLowerCase().includes(query.toLowerCase())
  );
console.log(filteredSearchList,'some')

  const handleOpenModal = () => {
    setIsOpen(true);
    setSelectedOption(null);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedOption(null);
  };

 const handleSearchListSelection = (key, value) => {
   setSelectedOption(searchList[key]);
   console.log(key,'key')
   console.log(value,'value')
   setQuery(key);
   setBackgroundColor("bg-blue-300 flex-none w-min font-mono rounded px-2");
 };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
    setSelectedOption(null);
  };

  console.log(selectedOption, "selectedOption");
  return (
    <>
      <div>
        <button
          className="flex items-center xl:text-sm text-lg xl:text-slate-400 text-slate-800 dark:text-slate-300 px-1 space-x-3 rtl:space-x-reverse"
          onClick={handleOpenModal}
        >
          <>
            <Icon icon="heroicons-outline:search" />
            <span className="xl:inline-block hidden">Search... </span>
          </>
        </button>
      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[9999] overflow-y-auto p-4 md:pt-[25vh] pt-20"
          onClose={handleCloseModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-900/60 backdrop-filter backdrop-blur-sm backdrop-brightness-10" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel>
              <Combobox>
                <div className="relative">
                  <div className="relative mx-auto max-w-xl rounded-md bg-white dark:bg-slate-800 shadow-2xl ring-1 ring-gray-500-500 dark:ring-light divide-y divide-gray-500-300 dark:divide-light">
                    <div className="flex bg-white dark:bg-slate-800 gap-2  px-3 rounded-md py-3 items-center">
                      <div className="flex-0  text-slate-700 dark:text-slate-300 ltr:pr-2 rtl:pl-2 text-lg">
                        <Icon icon="heroicons-outline:search" />
                      </div>
                      <Combobox.Input
                        value={query}
                        className={`bg-transparent ${backgroundColor} outline-none  focus:outline-none border-none w-full flex-1 dark:placeholder:text-slate-300 dark:text-slate-200 `}
                        placeholder="Search..."
                        onChange={handleQueryChange}
                      />
                    </div>
                    <Combobox.Options className="max-h-40 overflow-y-auto text-sm py-2">
                      {filteredSearchList.map((key, i) => (
                        <Combobox.Option key={i}>
                          {({ active }) => (
                            <div
                              className={`px-4 text-[15px] font-normal capitalize py-2 hover:bg-slate-900 hover:text-white duration-500 border-b border-gray-100 ${
                                active
                                  ? " dark:bg-slate-600 dark:bg-opacity-60 "
                                  : "text-slate-900 dark:text-white"
                              }`}
                              onClick={() =>
                                handleSearchListSelection(key, searchList[key])
                              }
                            >
                              <span className="cursor-pointer font-mono ">
                                {key}:
                              </span>
                            </div>
                          )}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                    {selectedOption && (
                      <div>
                        {selectedOption.map((value, i) => (
                          <div
                            key={i}
                            onClick={() => handleSearchListSelection(value)}
                            className="px-4 cursor-pointer py-1 hover:bg-slate-900 hover:text-white border-b border-gray-100  duration-500"
                          >
                            {value}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default SearchModal;
