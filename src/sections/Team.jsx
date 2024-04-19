import TeamCard from "../components/TeamCard";
import { team } from "../constants";
import Glide from "@glidejs/glide";
import "../assets/carousal/css/styles.css";
import { useEffect } from "react";

const Team = () => {
  useEffect(() => {
    const slider = new Glide(".glide-08", {
      type: "carousel",
      focusAt: 1,
      animationDuration: 4000,
      autoplay: 4500,
      autoplay: true,
      rewind: true,
      perView: 4,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 4,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <section className="lg:my-4 container">
      <h1 className="text-center text-teal-600 text-4xl">
        Meet Our Team Members
      </h1>
      <p className="text-center items-center">
        Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida
        malesuada quam commodo id integer nam.
      </p>
      <div className=" w-screen">
        <div className="glide-08  w-screen">
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 pb-12">
           
              {team.map((team) => (
                <li key={team.id} className="">
                  <div className="h-5/6 w-4/6">
                    <TeamCard key={team.id} {...team} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
