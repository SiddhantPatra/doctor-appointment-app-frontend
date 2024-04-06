import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "../assets/icons/Social Media Icon Square";
import PropTypes from 'prop-types';

TeamCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  about: PropTypes.string,
};
const TeamCard = ({ imgURL, name, designation, about }) => {
  return (
    <div className=" flex flex-1 flex-col  items-center max-sm:flex-col rounded-xl object-fill shadow-md m-4 p-8 w-sm max-sm:w-full lg:gap-4 ">
      <img height={90} width={90} src={imgURL} alt={name} />
      {/* <div className="mt-8 flex justify-center gap-2.5"> */}
      <p className="mt-2 text-2xl leading-normal text-center text-teal-600 font-bold font-palanquin">
        {name}
      </p>
      <p className="font-montserrat text-xl text-center leading-normal font-semibold text-slate-gray">
        {designation}
      </p>
      {/* </div> */}
      <p> {about}</p>
      <div className="flex flex-row items-center  justify-center mt-8 px-2 gap-4">
        <img src={Facebook} height={20} width={20} />
        <img src={Twitter} height={20} width={20} />
        <img src={Instagram} height={20} width={20} />
        <img src={Linkedin} height={20} width={20} />
      </div>
    </div>
  );
};

export default TeamCard;
