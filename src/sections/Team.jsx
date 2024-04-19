import TeamCard from "../components/TeamCard";
import { team } from "../constants";
import "../src/carousal/css/styles.css"
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
      <div className="card__container">
            <article className="card__article">
               <img src="assets/img/landscape-1.png" alt="image" className="card__img" />

               <div className="card__data">
                  <span className="card__description">Vancouver Mountains, Canada</span>
                  <h2 className="card__title">The Great Path</h2>
                  <a href="#" className="card__button">Read More</a>
               </div>
            </article>
            </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5">
        {team.map((team) => (
          <TeamCard key={team.imgURL} {...team} />
        ))}
      </div>
    </section>
  );
};

export default Team;
