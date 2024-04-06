import Hero from "../sections/Hero";
import Nav from "../components/Nav";
import SearchDoc from "../sections/SearchDoc";
import Stats from "../sections/Stats";
import Footer from "../components/Footer";
// import Testimonials from "../sections/Testimonials";
import ChooseUs from "../sections/ChooseUs";
import Team from "../sections/Team";

function Home() {
  return (
    <main className="bg-[#ECECEC]">
      <Nav />
      <section className="xl:padding-l wide:padding-r ">
        <Hero />
      </section>
      <section className="xl:padding-l wide:padding-r padding-b">
        <SearchDoc />
      </section>
      <section className="xl:padding-l wide:padding-r ">
        <Stats />
      </section>
      <section className="xl:padding-l wide:padding-r">
        <ChooseUs />
      </section>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Team />
      </section>
      {/* <section className="xl:padding-l wide:padding-r padding-b">
        <Testimonials />
      </section> */}

      <Footer />
    </main>
  );
}
export default Home;
