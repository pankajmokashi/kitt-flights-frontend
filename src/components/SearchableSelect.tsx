// SearchableSelect component
// Created custom combobox for selecting departureLocation and destinationLocation

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Airport } from "@/types";
import { refList } from "../../data/refList";
const options = refList.airports;

interface SearchableSelectProps {
  title: string;
  selectedAirport: Airport | null;
  setSelectedAirport: (airport: Airport | null) => void;
}

function SearchableSelect({
  title,
  selectedAirport,
  setSelectedAirport,
}: SearchableSelectProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (selectedAirport) {
      setSearchTerm(selectedAirport.name);
    }
    setIsOpen(false);
  }, [selectedAirport]);

  const filteredOptions = options.filter(
    (option) =>
      option.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      option.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      option.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      option.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: Airport) => {
    if (selectedAirport?.code === option.code) {
      setSelectedAirport(null);
      setSearchTerm("");
    } else {
      setSelectedAirport(option);
      setSearchTerm(option.name);
    }
    setIsOpen(false);
  };

  const handleIsOpen = () => {
    if (selectedAirport) {
      setSearchTerm(selectedAirport.name);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-72 md:min-w-60 md:w-60 h-12 input-width">
      <div
        className="border rounded-md p-2 cursor-pointer bg-white h-full"
        onClick={handleIsOpen}
      >
        {isOpen || selectedAirport ? (
          <>
            <span className="absolute top-1 left-2 text-xs text-gray-500">
              {title}
            </span>
            {/* Input to display selected value after setopen to close */}
            <input
              type="text"
              className="absolute top-4 left-2 w-[82%] text-base lg:text-lg focus:outline-none bg-white text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsOpen(true)}
              onBlur={() =>
                setSearchTerm(
                  selectedAirport ? selectedAirport.name : searchTerm
                )
              }
              autoFocus
            />
            {isOpen ? (
              <ChevronUpIcon className="w-4 h-4 absolute right-2 top-5 text-gray-500" />
            ) : (
              <ChevronDownIcon className="w-4 h-4 absolute right-2 top-5 text-gray-500" />
            )}
          </>
        ) : (
          <>
            {/* if vale not selected or open state is false */}
            <div className="h-full flex items-center justify-between text-gray-500">
              <div className="flex gap-2 items-center">
                <Image
                  src="/images/mark.png"
                  alt="mark"
                  width={20}
                  height={10}
                  className="w-5 h-5"
                />
                <span>{title}</span>
              </div>
              <span>
                <ChevronDownIcon className="w-5 h-5" />
              </span>
            </div>
          </>
        )}
      </div>

      {/* Input to open dropbox after onfocus*/}
      {isOpen && (
        <input
          type="text"
          className="absolute top-4 left-2 w-[82%] text-base lg:text-lg focus:outline-none bg-white text-black"
          value={searchTerm}
          onFocus={() => setIsOpen(true)}
          onBlur={() => {
            setSearchTerm(selectedAirport ? selectedAirport.name : searchTerm);
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoFocus
        />
      )}

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute mt-1 border rounded-md bg-white w-full max-h-48 overflow-y-auto z-50 scroll-bar shadow-md">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                className={`p-2 cursor-pointer hover:bg-gray-100 ${
                  selectedAirport?.code === option.code && "bg-gray-100"
                }`}
                onClick={() => handleSelect(option)}
              >
                <div className="w-full flex items-center justify-between text-gray-500">
                  <div>
                    <div className="mb-1 text-black">{option.city}</div>
                    <div>{option.country}</div>
                  </div>
                  <div className="text-black">{option.code}</div>
                </div>
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No options found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchableSelect;
