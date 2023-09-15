import Navbar from "../components/Navbar";
import hero1 from "../../public/hero1.png";
import hero2 from "../../public/hero2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero Carousel */}
      <div className="relative">
        <Swiper
          className="relative"
          spaceBetween={0}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{ delay: 5000000 }}>
          <SwiperSlide>
            <div className="image relative">
              <img className="w-full" src={hero2} alt="hero1" />
              <div className="absolute top-9 px-4 md:top-28 md:left-6 lg:top-52 lg:left-[150px]">
                <h1 className="text-white font-bold text-base md:text-[30px] lg:text-[45px]">
                  BE A SOLUTION
                </h1>
                <h1 className="text-white font-bold text-base md:text-[30px] md:mt-4 lg:text-[45px] lg:mt-8">
                  NOT A POLUTION
                </h1>
                <p className="text-white text-[6px] mt-3 md:text-sm md:mt-8 lg:text-lg lg:mt-14">
                  Pelopor bubble wrap bigradable ramah lingkungan untuk
                  menggantikan
                </p>
                <p className="text-white text-[6px] md:text-sm lg:text-lg">
                  bubble wrap PET. Ocuwrap hadir untuk membantu pelaku online
                  store
                </p>
                <p className="text-white text-[6px] md:text-sm lg:text-lg">
                  produk kosmetik di Indonesia untuk menjaga kosmetik
                </p>
                <p className="text-white text-[6px] md:text-sm lg:text-lg">
                  dari benturan selama diperjalanan.
                </p>

                <button
                  className="mt-6 rounded-sm px-2 py-1 bg-primary  text-white text-[8px] font-medium 
                                    md:mt-12 md:text-sm md:px-6 md:py-3
                                    lg:mt-20 lg:text-lg lg:px-10">
                  Dapatkan
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="image relative">
              <img className="w-full" src={hero2} alt="hero1" />
              <div className="absolute top-9 px-4 md:top-28 md:left-6 lg:top-52 lg:left-[150px]">
                <h1 className="text-white font-bold text-base md:text-[30px] lg:text-[45px]">
                  BE A SOLUTION
                </h1>
                <h1 className="text-white font-bold text-base md:text-[30px] md:mt-4 lg:text-[45px] lg:mt-8">
                  NOT A POLUTION
                </h1>
                <p className="text-white text-[6px] mt-3 md:text-sm md:mt-8 lg:text-lg lg:mt-14">
                  Pelopor bubble wrap bigradable ramah lingkungan untuk
                  menggantikan
                </p>
                <p className="text-white text-[6px] md:text-sm lg:text-lg">
                  bubble wrap PET. Ocuwrap hadir untuk membantu pelaku online
                  store
                </p>
                <p className="text-white text-[6px] md:text-sm lg:text-lg">
                  produk kosmetik di Indonesia untuk menjaga kosmetik
                </p>
                <p className="text-white text-[6px] md:text-sm lg:text-lg">
                  dari benturan selama diperjalanan.
                </p>

                <button
                  className="mt-6 rounded-sm px-2 py-1 bg-primary  text-white text-[8px] font-medium 
                                    md:mt-12 md:text-sm md:px-6 md:py-3
                                    lg:mt-20 lg:text-lg lg:px-10">
                  Dapatkan
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div>
          <img className="w-full h-screen" src={hero2} alt="hero1" />
        </div>
      </div>
    </>
  );
};

export default Home;
