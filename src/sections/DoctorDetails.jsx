import React from "react";
import { doc5 } from "../assets/images";
import { star } from "../assets/icons";
import Button from "../components/Button";

const DoctorDetails = () => {
  return (
    <section className="w-full">
      <div className="flex justify-center max-sm:flex-col max-sm:items-center max-sm:mx-2 ">
        <div className="flex flex-col max-sm:flex-col gap-5 md:ml-5   p-5  w-3/5 max-sm:w-full max-sm:items-center">
          {/* Left */}
          <div className="flex flex-row max-sm:flex-col max-sm:items-center flex-start gap-4 w-full">
            <img src={doc5} alt="Doctor" height={200} width={200} />
            <div>
              <p className="py-2">
                <span className="bg-teal-400 text-teal-800 font-lexendtera text-sm px-3 py-1 rounded-full">
                  Dentist
                </span>
              </p>
              <h1 className="text-lg font-bold font-montserrat py-2">
                Dr. Emily Roberts
              </h1>
              <div className=" flex justify-start gap-2.5">
                <img src={star} alt="rating icon" width={16} height={16} />
                <p className="font-montserrat text-sm leading-normal text-slate-gray">
                  4.5(200)
                </p>
              </div>
              <p className="text-sm py-3">Specialization in Dental Care</p>
            </div>
          </div>

          <div className="border-t-4 mt-4">
            <h1 className="font-semibold py-4">
              About
              <span className="text-md text-emerald-400">
                Dr. Emily Roberts
              </span>
            </h1>
            <p>
              Dr. Emily Roberts is a highly skilled and compassionate dental
              practitioner dedicated to providing exceptional oral care to her
              patients. With a commitment to excellence, Dr. Roberts combines
              her extensive knowledge with a gentle touch, ensuring a positive
              and comfortable experience for all. As a graduate of the
              prestigious XYZ Dental School, Dr. Roberts stays at the forefront
              of the latest advancements in dentistry through continuous
              education. Specializing in general and cosmetic dentistry, she
              takes pride in transforming smiles and improving oral health.
              Driven by a passion for patient well-being, she emphasizes
              preventive care, educating individuals on maintaining optimal
              dental hygiene. Dr. Roberts fosters a warm and welcoming
              environment at her state-of-the-art dental practice. Her
              approachable demeanor and effective communication skills allow
              patients to feel at ease, fostering open dialogue about their
              dental concerns. Whether performing routine check-ups, addressing
              complex dental issues, or enhancing smiles through cosmetic
              procedures, Dr. Roberts is dedicated to achieving optimal results
              and building lasting relationships with her patients. Committed to
              community outreach, Dr. Roberts actively participates in dental
              health awareness programs and strives to make a positive impact on
              oral health beyond the confines of her practice. With a blend of
              expertise and compassion, Dr. Emily Roberts stands as a trusted
              partner in promoting overall wellness through exceptional dental
              care.
            </p>
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col items-between ">
          <div className=" bg-white shadow-xl  w-full  border-none  rounded-xl  p-4">
            <div className="flex flex-row justify-between py-2">
              <p className="text-sm">Session Price: </p>
              <p className="text-2xl  font-montseriff">500 ₹</p>
            </div>
            <h1>Available Slots</h1>
            <ul>
              <li className="flex flex-row justify-between text-xs font-palanquin">
                <p>Monday: </p>
                <p>7:00PM - 9:00PM</p>
              </li>
              <li className="flex flex-row justify-between text-xs font-palanquin">
                <p>Tuesday: </p>
                <p>7:00PM - 9:00PM</p>
              </li>
              <li className="flex flex-row justify-between text-xs font-palanquin">
                <p>Wednesday: </p>
                <p>7:00PM - 9:00PM</p>
              </li>
              <li className="flex flex-row justify-between text-xs font-palanquin">
                <p>Thursday: </p>
                <p>7:00PM - 9:00PM</p>
              </li>
              <li className="flex flex-row justify-between text-xs font-palanquin">
                <p>Friday: </p>
                <p>7:00PM - 9:00PM</p>
              </li>
              <li className="flex flex-row justify-between text-xs font-palanquin">
                <p>Saturday: </p>
                <p>7:00PM - 9:00PM</p>
              </li>{" "}
              <li className="flex flex-row justify-between text-xs font-palanquin">
                <p>Sunday: </p>
                <p>7:00PM - 9:00PM</p>
              </li>
            </ul>
            <div className="mt-4  ">
              <Button
                class
                backgroundColor={"bg-[#007E85]"}
                textColor={"text-white"}
                borderColor={"border-[#007E85]"}
                label="Book Appointment"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
