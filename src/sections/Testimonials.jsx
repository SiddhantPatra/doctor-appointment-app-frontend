import TestimonialCards from "../components/TestimonialCards";
import { testimonials } from "../constants";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <section>
      <h1 className="text-center text-teal-600 text-4xl">Testimonials</h1>

      <p className="text-center text-sm pt-0">
        Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
        elementum tempus hac tellus libero accumsan.
      </p>
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-5"> */}
      <div className="  my-4 ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              className="flex-wrap h-full w-1/4 my-4   "
              key={testimonial.imgURL}
            >
              <TestimonialCards key={testimonial.imgURL} {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
