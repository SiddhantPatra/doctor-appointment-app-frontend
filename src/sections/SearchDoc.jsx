import { useState } from "react";
import Button from "../components/Button";

const SearchDoc = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialization, setSpecialization] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search using searchTerm and specialization
    console.log(
      "Searching with term:",
      searchTerm,
      "and specialization:",
      specialization
    );
    // You can replace the console.log with your actual search logic
  };

  return (
    <section>
      <div className="p-16 bg-white rounded-md shadow-lg">
        <h4 className="mb-8 text-4xl font-bold">Find A Doctor</h4>
        <form onSubmit={handleSearch}>
          <div className="flex flex-row flex-wrap items-center max:sm:flex-col">
            <div className="relative  md:w-3/6 "> 
              <input
                className=" block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-teal-500 focus:border-teal-500 light:bg-gray-50 light:border-teal-600 light:placeholder-gray-400 light:text-gray-50 light:focus:ring-teal-500 light:focus:border-teal-500"
                type="text"
                placeholder="Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative md:w-2/6  md:py-1.5  md:px-1.5">
              <select
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-teal-500 focus:border-teal-500 light:bg-gray-50 light:border-teal-600 light:placeholder-gray-400 light:text-gray-50 light:focus:ring-teal-500 light:focus:border-teal-500"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
              >
                <option className="py-2 my-2" value="">Select Specialization</option>
                <option className="py-2 my-2" value="Cardiologist">Cardiologist</option>
                <option className="py-2 my-2" value="Dermatologist">Dermatologist</option>
                {/* Add more options as needed */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4 max-sm:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6z" />
                </svg>
              </div>
            </div>
            <Button
              type="submit"
              backgroundColor={"bg-[#007E85]"}
              textColor={"text-white"}
              borderColor={"border-[#007E85]"}
              label="Search"
            />
          </div>
        </form>



        
      </div>
    </section>
  );
};

export default SearchDoc;
