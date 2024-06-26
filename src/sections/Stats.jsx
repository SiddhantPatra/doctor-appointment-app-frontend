 
import CountUp from 'react-countup';
const Stats = () => {
  return (
    <section className="max-sm:hidden">
      <h1 className="text-center text-teal-600 text-3xl">Our results in numbers</h1>
      <div className="flex flex-1 justify-center gap-20 py-10 mb-4 mt-4 ">
        <div className="block text-center">
          <h1 className="text-green-600 text-4xl">
          <CountUp end={99} duration={10} />%</h1>
          <p>Customer satisfaction</p>
        </div>
        <div className="block text-center">
          <h1 className="text-green-600 text-4xl"><CountUp end={15} duration={5} />k</h1>
          <p>Online Patients</p>
        </div>
        <div className="block text-center">
          <h1  className="text-green-600 text-4xl"><CountUp end={200} duration={10} />+</h1>
          <p>Doctors</p>
        </div>
        <div className="block text-center">
          <h1  className="text-green-600 text-4xl"><CountUp end={240} duration={5} />%</h1>
          <p>Growth</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
