import { testimonials } from "../assets/data"

// import Swiper core and required modules
import { Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <div className="my-32">
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
          {testimonials.map((item)=>{
            return (
              <SwiperSlide className="bg-accent px-6 py-12" key={item.id}>
                <h1 className='text-4xl font-bold mb-10 text-center text-white'>What our customers are saying</h1>
                <div className="flex flex-col sm:flex-row items-center justify-center text-white">
                  {/* Person's introduction */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-[40%]">
                    <img src={item.image} alt="" className="w-16 aspect-square rounded-full border-white border-4" />
                    <div className="mb-5 sm:mb-0">
                      <h3 className="text-xl font-bold text-center sm:text-left">{item.name}</h3>
                      <p className="text-lg text-center sm:text-left">{item.designation}</p>
                    </div>
                  </div>

                  {/* description */}
                  <div className="w-full sm:w-[40%] text-center sm:text-left">
                    <p>{item.description}</p>
                  </div>
              </div>
              </SwiperSlide>
            );
          })}
        
        </Swiper>

    </div>
  )
}

export default Testimonials