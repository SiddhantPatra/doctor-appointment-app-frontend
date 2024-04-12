import Button from "../components/Button";

const SearchDoc = () => {
  return (
    <section>
      <div className=" p-16 bg-white rounded-md shadow-lg">
        <h4 className="mb-8 text-4xl font-bold">Find A Doctor</h4>
        <form>
          <div className="flex flex-row flex-wrap max-sm:gap-2 justify-between items-center max-sm:items-center">
            <div className="flex flex-row flex-wrap max-sm:gap-2  ">
              <input
                className='block w-48 rounded-md border-0 border-gray-800 ring-1 ring-inset ring-gray-800 py-1.5 pl-7   mr-16 text-gray-900  placeholder:text-gray-400  sm:text-sm sm:leading-6"'
                type="text"
                placeholder="Name "
              />
              <input
                className='block w-48 rounded-md border-0 border-gray-800  py-1.5  mr-16  pl-7 px-2 text-gray-900 ring-1 ring-inset ring-gray-800 placeholder:text-gray-400  sm:text-sm sm:leading-6"'
                type="text"
                placeholder="Speciality"
              />
            </div>
            <div className="max-sm:items-center">
              <Button
                backgroundColor={"bg-[#007E85]"}
                textColor={"text-white"}
                borderColor={"border-[#007E85]"}
                label="Search"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchDoc;
