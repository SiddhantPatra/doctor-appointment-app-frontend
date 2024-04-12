import { arrowRight } from "../assets/icons";
import { Group3 } from "../assets/images";
import Button from "../components/Button";
import SplitType from "split-type";

import { gsap } from "gsap";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const dynamicText = new SplitType(".target", { types: "chars" });
      for (let i = 0; i < dynamicText.chars.length; i++) {
        dynamicText.chars[i].classList.add("translate-y-full");
      }
      gsap.to(".char", {
        y: 0,
        stagger: 0.05,
        delay: 0.02,
        duration: 0.5,
      });
    setInterval(() => {
      const dynamicText = new SplitType(".target", { types: "chars" });
      for (let i = 0; i < dynamicText.chars.length; i++) {
        dynamicText.chars[i].classList.add("translate-y-full");
      }
      gsap.to(".char", {
        y: 0,
        stagger: 0.05,
        delay: 0.02,
        duration: 0.5,
      });
    }, 5000);
  });

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <h1 className="mt-10 font-palanquin sm:text-4xl  max-sm:leading[41] font-bold">
          <span className="xl:bg-[#ECECEC] xl:whitespace-nowrap relative z-10 pr-10">
            Providing Quality{" "}
            <span
              className="text-green-500 inline-block mt-3 animate-text-slide target"
              
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            >
              {" "}
              Healthcare
            </span>{" "}
            for a <br />{" "}
            <span className="text-[#007E85] inline-block mt-3 target"  style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
              Brighter
            </span>{" "}
            and{" "}
            <span className="text-[#6EAB36] inline-block mt-3 target"  style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>Healthy</span>{" "}
            Future
          </span>
        </h1>
        <p className="font-montserrat text-slate-gray sm:text-lg max-sm:text-text-sm sm:leading-8 max-sm:leading[41] mt-6 mb-14 max-sm:mb-4 sm:max-w-sm">
          At our hospital, we are dedicated to providing exceptional medical
          care to our patients and their families. Our experienced team of
          medical professionals, cutting-edge technology, and compassionate
          approach make us a leader in the healthcare industry
        </p>
        <Button label="Appointment" iconURL={arrowRight}>
          {/* <img /> */}
        </Button>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-[#ECECEC] bg-hero bg-no-repeat bg-border-none  bg-center">
        <img
          src={Group3}
          alt="Doctor"
          width={474}
          height={470}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute sm:top-[35%] max-sm:-bottom-[-12%] sm:right-[10%] max-sm:px-6">
          <div className="flex flex-row w-sm bg-white rounded-full p-4">
            <p>
              <span className="sm:text-3xl  text-teal-700">24/7</span> Service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
