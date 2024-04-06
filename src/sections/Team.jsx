import TeamCard from "../components/TeamCard";
import { team } from "../constants";

const Team = () => {
  return (
    <section className="lg:my-4 container">
      <h1 className="text-center text-teal-600 text-4xl">
        Meet Our Team Members
      </h1>
      <p className="text-center items-center">
        Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida
        malesuada quam commodo id integer nam.
      </p>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5">
        {team.map((team) => (
          <TeamCard key={team.imgURL} {...team} />
        ))}
      </div>
    </section>
  );
};

export default Team;
