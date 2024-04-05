import { star } from "../assets/icons";

const TestimonialCards = ({ rating, feedback, customerName, imgURL }) => {
  return (
    <div>
      <div className=" flex flex-1 flex-col rounded-xl object-fill shadow-md mt-4 p-8 w-full max-sm:w-full">
        <img height={50} width={50} src={imgURL} alt={customerName} />
        <div className="mt-8 flex justify-start gap-2.5">
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            Rating: ({rating})
          </p>
          <img src={star} alt="rating icon" width={24} height={24} />
        </div>
        <p> {feedback}</p>
        <p className="mt-2 text-2xl leading-normal text-teal-600 font-semibold font-palanquin"> {customerName}</p>
      </div>
    </div>
  );
};

export default TestimonialCards;
