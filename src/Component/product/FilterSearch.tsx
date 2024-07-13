/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";

interface FilterProps {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
  selectedValue: string;
  setSelectedValue: Dispatch<SetStateAction<string>>;
  handleSubmit: any;
}
const FilterSearch = ({
  searchInput,
  setSearchInput,
  selectedValue,
  setSelectedValue,
  handleSubmit,
}: FilterProps) => {
  return (
    <div>
      <form className="flex flex-col md:flex-row gap-3" onSubmit={handleSubmit}>
        <div className="flex">
          <input
            type="text"
            placeholder="Search for the tool you like"
            className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-blue-400 focus:outline-none focus:border-blue-400"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-400 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
          >
            Search
          </button>
        </div>
        <select
          id="pricingType"
          name="pricingType"
          className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="Flower">Flower</option>
          <option value="Fruits">Fruits</option>
          <option value="Bonsai">Bonsai</option>
          <option value="Bamboo">Bamboo</option>
          <option value="Cactus">Cactus</option>
          <option value="Rose">Rose</option>
          <option value="Fertilizers">Fertilizers</option>
          <option value="Gardening">Gardening</option>
          <option value="Pebbles">Pebbles</option>
          <option value="Mango">Mango</option>
        </select>
      </form>
    </div>
  );
};

export default FilterSearch;
