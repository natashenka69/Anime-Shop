import React, { useState } from "react";

import { CiSearch } from "react-icons/ci";
import { Figures } from "../data";

import { Link } from "react-router-dom";

export default function SearchBar() {
  const [activeSearch, setActiveSearch] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    setInputValue(e.target.value);

    if (e.target.value == "") {
      setActiveSearch([]);
      return false;
    }
    const searchTerm = e.target.value.toLowerCase();
    const filteredFigures = Figures.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    ).slice(0, 6);
    setActiveSearch(filteredFigures);
  };
  const clearActiveSearch = () => {
    setActiveSearch([]);
  };

  const handleClick = (title) => {
    setInputValue(title);
    clearActiveSearch();
  };

  return (
    <div>
      <div class="relative xl:w-[800px] md:w-[400px] w-[200px] h-10 text-white md:mr-16 mr-4">
        <div class="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
          <CiSearch
            size={24}
            className="absolute top-0 left- cursor-pointer text-white"
          />
        </div>
        <input
          class="peer border-t-transparent pr-8 w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border-1 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-white border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] focus:border-purple-500"
          placeholder=" "
          value={inputValue}
          onChange={handleSearch}
        />
        <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
          Search Everything
        </label>
      </div>
      {activeSearch.length > 0 && (
        <div className="absolute top-20 p-4 bg-white xl:w-[800px] md:w-[400px] w-[200px]">
          {activeSearch.map((item) => (
            <Link
              key={item.id}
              onClick={() => handleClick(item.title)}
              to={`/figure/${item.id}`}
            >
              <h1 className="m-2 md:text-[16px] text-[12px]">{item.title}</h1>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
