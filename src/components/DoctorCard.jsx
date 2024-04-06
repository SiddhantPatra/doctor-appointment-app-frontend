import { star } from "../assets/icons";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "../assets/icons/Social Media Icon Square";
import PropTypes from 'prop-types';

DoctorCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specialty: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  avgRating: PropTypes.number.isRequired,
  totalRating: PropTypes.number.isRequired,
  hospital: PropTypes.string.isRequired,
};
const DoctorCard = ({
  imgURL,
  name,
  specialty, 
  avgRating,
  totalRating,
  hospital,
}) => {
  return (
    <div className=" flex flex-1 flex-col hover:cursor-pointer  items-center max-sm:flex-col rounded-xl object-fill shadow-md m-4 p-8 w-sm max-sm:w-full lg:gap-4 ">
      <div className="flex bg-doctorCard w-full justify-center text-center items-center ">
        <img src={imgURL} alt={name} />
      </div>
      {/* <div className="mt-8 flex justify-center gap-2.5"> */}
      <p className="mt-2 text-2xl leading-normal text-center text-teal-600 font-bold font-palanquin">
        {name}
      </p>
      <p className="font-montserrat text-xl text-center leading-normal font-semibold text-slate-gray">
        {specialty}
      </p>
      {/* </div> */}
      <div className=" flex justify-start gap-2.5">
        <img src={star} alt="rating icon" width={16} height={16} />
        <p className="font-montserrat text-sm leading-normal text-slate-gray">
          {avgRating}({totalRating})
        </p>
      </div>
      <p className=" text-sm"> {hospital}</p>
      <div className="flex flex-row items-center  justify-center mt-8 px-2 gap-4">
        <img src={Facebook} height={20} width={20} />
        <img src={Twitter} height={20} width={20} />
        <img src={Instagram} height={20} width={20} />
        <img src={Linkedin} height={20} width={20} />
      </div>
    </div>
  );
};

export default DoctorCard;
