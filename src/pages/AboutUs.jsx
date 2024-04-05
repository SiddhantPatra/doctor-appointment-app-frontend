import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { container2, container3, container4, hospitalimg } from "../assets/images";
import Team from "../sections/Team";

export default function AboutUs() {
  return (
    <main>
      <Nav />
      <section className="padding-b pt-48">
        <div className="w-full ">
          <img className=" w-full h-1/2 object-fill" src={hospitalimg}   />
        </div>
        <div className="lg:ml-32 sm:items-center lg:bg-gradient-to-r from-teal-500 font-palanquin lg:text-2xl lg:font-semibold  lg:text-white shadow-xl rounded-xl px-32 py-24  lg:absolute sm:top-[45%] max-sm:-bottom-[-12%] sm:right-[10%] max-sm:px-6 gap-2.5">
          <p>
            At {" "}
            <span className="font font-semibold text-3xl text-teal-600">Healthcare</span>
            , we are dedicated to streamlining your healthcare experience. Easily schedule appointments, receive timely reminders, and connect with leading medical professionals. Your well-being is our focus, ensuring a hassle-free path to better health. Choose {" "}
            <span className="font font-semibold text-3xl text-green-300">Healthcare</span>{" "}
            for simplified, efficient, and patient-centered care.
          </p>
        </div>
        <div className="flex sm:gap-6 gap-4 absolute lg:top-[25%]   max-sm:hidden max-lg:-bottom-[-12%] lg:right-[10%] max-lg:px-6">
          <div className="flex flex-row w-sm bg-white   p-4">
            <img src={container3} height={250} width={250}/>
          </div>
        </div>
        <div className="flex sm:gap-6 gap-4 absolute lg:top-[75%] max-sm:hidden max-lg:hidden lg:right-[10%] max-lg:px-6">
          <div className="flex flex-row w-sm bg-white   p-4">
            <img src={container2} height={250} width={250}/>
          </div>
        </div>
        <div className="flex sm:gap-6 gap-4 absolute lg:top-[45%] max-sm:hidden max-lg:hidden lg:right-[0%] max-lg:px-6">
          <div className="flex flex-row w-sm bg-white   p-4">
            <img src={container4} height={250} width={250}/>
          </div>
        </div>
      </section>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Team />
      </section>
      <Footer />
    </main>
  );
}
