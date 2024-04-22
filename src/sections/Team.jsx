import TeamCard from "../components/TeamCard";
import { team } from "../constants";
import Glide from "@glidejs/glide";
import "../assets/carousal/css/styles.css";
import { useEffect } from "react";

const Team = () => {
  useEffect(() => {
    const slider = new Glide(".glide-08", {
      type: "carousel",
      focusAt: "center",
      animationDuration: 3000,
      autoplay: 4500,
      // autoplay: true,
      rewind: true,
      perView: 3,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-slate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 3,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <section className="lg:my-4 ">
      <h1 className="text-center text-teal-600 text-4xl">
        Meet Our Team Members
      </h1>
      <p className="text-center items-center mb-2">
        Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida
        malesuada quam commodo id integer nam.
      </p>
      <div className="flex justify-center items-center text-center pt-4" >
        <div className=" flex justify-around items-center w-full overflow-hidden  ">
          <div className="glide-08 text-center overflow-hidden w-full">
            <div data-glide-el="track">
              <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex justify-around  overflow-hidden p-0 pb-12">
                {team.map((team) => (
                  <li key={team.id} className="flex justify-around flex-wrap">
                    <div className="  w-4/6 ">
                      <TeamCard key={team.id} {...team} />
                    </div>
                  </li>
                ))}
              </ul>
              {/* </div> */}
              {/*    <!-- Indicators --> */}
              <div
                className="-mt-6 flex w-full items-center justify-center gap-2"
                data-glide-el="controls[nav]"
              >
                {team.map((teamMember, index) => (
                  <button
                    key={index}
                    className="group p-4 "
                    data-glide-dir={`=${index}`}
                    aria-label={`Go to slide ${index}`}
                  >
                    <span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700  transition-colors duration-300 focus:outline-none"></span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
