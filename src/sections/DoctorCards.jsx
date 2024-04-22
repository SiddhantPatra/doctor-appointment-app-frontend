 
import { doctors } from "../constants";
import DoctorCard from "../components/DoctorCard";
import { Link } from "react-router-dom";
const DoctorCards = () => {
  return (
    <section className="lg:my-4 ">
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-5">
        {doctors.map((team) => (
          <Link key={team.imgURL} to={"/doctor"}>
            <DoctorCard key={team.imgURL} {...team} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DoctorCards;
