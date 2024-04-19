import { container7 } from "../assets/images";
import Button from "../components/Button";

const ChooseUs = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center  max-container">
      <div className="flex flex-row max-sm:flex-col-reverse flex-1 my-2 py-8 max-sm:py-1">
        <div className="flex flex-col flex-1 justify-center max-sm:items-center max-sm:px-8 max-sm:my-8 gap-10 ">
          <h1 className="text-2xl text-teal-600 text-montserrat  ">
            If you are a Doctor , then have lots of reasons to Join us
          </h1>
          <p className="text-sm sm:py-2">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>
          <div className="sm:py-8 ">
            <Button
              backgroundColor={"bg-teal-600"}
              textColor={"text-white"}
              borderColor={"border-[#007E85]"}
              label={"Contact Us"}
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 items-start ">
          <img className="sm:mx-8 col-md-2 rounded-xl" src={container7} alt="Hospital" />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
