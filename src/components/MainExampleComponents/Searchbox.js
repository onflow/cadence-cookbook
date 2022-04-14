import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import { filterData } from "../../functions/CategoryFilter";
import { searchData } from "../../functions/Search";

const Searchbox = ({ setResults, flowExamples, categories }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedFitler, setSelectedFilter] = useState("");
  const [selectedSearch, setSelectedSearch] = useState("");

  useEffect(() => {
    if (searchParams.get("search")) {
      setSelectedSearch(searchParams.get("search"));
      searchData(searchParams.get("search"), flowExamples, setResults);
    }

    if (searchParams.get("filter")) {
      setSelectedFilter(searchParams.get("filter"));
      filterData(searchParams.get("filter"), flowExamples, setResults);
    }
  }, []);

  return (
    <div className="mt-14">
      <div>
        <h1 style={{ fontSize: 42 }}>Flow Smart Contract Examples</h1>
        <h2 className="text-md mt-2 mb-10">
          {" "}
          Explore various Cadence smarts contracts & transaction scripts for
          different use cases. <br /> Build with confidence for your Web3
          application
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center px-5">
        <input
          placeholder="Search Examples"
          className="border-2 border-gray-100 p-1 pl-3 rounded-xl md:w-96 md:m-0 m-auto w-3/4 "
          value={selectedSearch}
          onChange={(e) => {
            searchData(e.target.value, flowExamples, setResults);
            setSearchParams({ search: e.target.value });
            setSelectedSearch(e.target.value);
          }}
        />
        <div>
          <select
            className="p-2 border-2 border-gray-100 rounded-xl text-gray-400 md:w-64 md:ml-10 md:m-0 m-auto w-3/4 mt-5"
            value={selectedFitler}
            onChange={(e) => {
              filterData(e.target.value, flowExamples, setResults);
              setSearchParams({ filter: e.target.value });
              setSelectedFilter(e.target.value);
            }}
          >
            <option value="">All</option>
            {categories[0]?.map((category) => (
              <option
                className="text-slate-800"
                value={category}
                key={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
