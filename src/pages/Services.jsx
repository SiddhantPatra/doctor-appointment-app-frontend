import Footer from "../components/Footer";
import Nav from "../components/Nav"; 
import DoctorCards from "../sections/DoctorCards";
// import Hero from "../sections/Hero";
import SearchDoc from "../sections/SearchDoc"; 
// import Testimonials from "../sections/Testimonials";

function Services() {
  return (
    <main className="bg-[#ECECEC]">
      <Nav />
      {/* <section className="xl:padding-l wide:padding-r ">
        <Hero />
      </section> */}
      <section className="xl:padding-l wide:padding-r padding-b ">
        <SearchDoc />
      </section>
      <section className="xl:padding-l wide:padding-r padding-b"><DoctorCards/></section>
      {/* <section className="xl:padding-l wide:padding-r padding-b">
        <Testimonials />
      </section> */}

      <Footer />
    </main>
  );
}

export default Services;
