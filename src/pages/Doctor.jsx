import Footer from "../components/Footer";
import Nav from "../components/Nav";
import DoctorDetails from "../sections/DoctorDetails";

function Doctor() {
  return (
    <main className="bg-[#ECECEC]">
      
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b pt-48">
        <DoctorDetails />
      </section>
      <Footer />
    </main>
  );
}

export default Doctor;
