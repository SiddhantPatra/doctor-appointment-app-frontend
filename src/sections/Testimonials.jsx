import TestimonialCards from "../components/TestimonialCards";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section>
      <h1 className="text-center text-teal-600 text-4xl">Testimonials</h1>

      <p className="text-center text-sm pt-0">
        Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
        elementum tempus hac tellus libero accumsan. 
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {testimonials.map((testimonial) => (
      <TestimonialCards key={testimonial.imgURL} {...testimonial}/> ))}
      </div>
    </section>
  );
};

export default Testimonials;
