// import { star } from "../assets/icons";
// import PropTypes from 'prop-types';

// const TestimonialCards = ({ rating, feedback, customerName, imgURL }) => {
//   return (
//     <div>
//       <div className=" flex flex-1 flex-col rounded-xl object-fill shadow-md mt-4 p-8 w-full max-sm:w-full">
//         <img height={50} width={50} src={imgURL} alt={customerName} />
//         <div className="mt-8 flex justify-start gap-2.5">
//           <p className="font-montserrat text-xl leading-normal text-slate-gray">
//             Rating: ({rating})
//           </p>
//           <img src={star} alt="rating icon" width={24} height={24} />
//         </div>
//         <p> {feedback}</p>
//         <p className="mt-2 text-2xl leading-normal text-teal-600 font-semibold font-palanquin"> {customerName}</p>
//       </div>
//     </div>
//   );
// };
// TestimonialCards.propTypes = {
//   rating: PropTypes.number,
//   feedback: PropTypes.string,
//   customerName: PropTypes.string,
//   imgURL: PropTypes.any,
// };
// export default TestimonialCards;

import PropTypes from "prop-types";
import star from "../assets/icons/star"; // Assuming 'star' is the name of the icon file

const TestimonialCards = ({ rating, feedback, customerName, imgURL }) => {
  return (
    <div className="testimonial-card rounded-xl shadow-md mt-4 p-8 w-full max-sm:w-full">
      <img className="customer-avatar" src={imgURL} alt={customerName} />
      <div className="rating-container flex items-center mt-4">
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          Rating: ({rating})
        </p>
        <img className="star-icon" src={star} alt="rating icon" />
      </div>
      <p className="feedback">{feedback}</p>
      <p className="customer-name text-2xl leading-normal text-teal-600 font-semibold font-palanquin">
        {customerName}
      </p>
    </div>
  );
};

TestimonialCards.propTypes = {
  rating: PropTypes.number.isRequired,
  feedback: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
};

export default TestimonialCards;
