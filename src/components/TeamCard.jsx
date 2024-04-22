import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "../assets/icons/Social Media Icon Square";
import PropTypes from "prop-types";
import "../assets/carousal/css/styles.css";
const TeamCard = ({ imgURL, name, designation, about }) => {
  return (
    <>
      {/* <div className="h-full w-full">
         
        <div className="h-full overflow-hidden rounded bg-white text-slate-500 shadow-2xl shadow-slate-200">
          <div className="relative p-6">
            <img
              src={imgURL}
              alt={name}
              height={90}
              width={90}
              className="card__img"
            />

            <div className="card__data">
              <span className="card__description">{designation}</span>
              <h2 className="card__title"> {name}</h2>
              <a href="#" className="card__button">
                {about}
              </a>
              <div className="flex flex-row items-center  justify-center mt-8 px-2 gap-4">
                <img src={Facebook} height={20} width={20} />
                <img src={Twitter} height={20} width={20} />
                <img src={Instagram} height={20} width={20} />
                <img src={Linkedin} height={20} width={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
       */}

      {/* <div className="h-full w-full"> */}
      <div className=" flex flex-1 flex-col overflow-hidden rounded-xl shadow-md     bg-white text-slate-500 shadow-2xl shadow-slate-200 flex-wrap h-full">
        <div className="relative p-6">
          <img src={imgURL} alt={name} />
          <p className="mt-2 text-2xl leading-normal text-center text-teal-600 font-bold font-palanquin">
            {name}
          </p>
          <p className="font-montserrat text-xl text-center leading-normal font-semibold text-slate-gray max-sm:hidden">
            {designation}
          </p>
          <p> {about}</p>
          <div className="flex flex-row items-center  justify-center mt-8 px-2 gap-4">
            <img src={Facebook} height={20} width={20} />
            <img src={Twitter} height={20} width={20} />
            <img src={Instagram} height={20} width={20} />
            <img src={Linkedin} height={20} width={20} />
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

TeamCard.propTypes = {
  imgURL: PropTypes.any,
  name: PropTypes.string,
  designation: PropTypes.string,
  about: PropTypes.string,
};
export default TeamCard;
