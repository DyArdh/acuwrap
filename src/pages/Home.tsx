import Navbar from "../components/Navbar";

// picture import
import hero1 from "../../public/hero1.png";
import hero2 from "../../public/hero2.png";
import about_product from "../../public/about_product.png";
import logo_dummy from "../../public/logo_dummy.svg";

import { AiOutlineRight, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
import { FaSquareThreads, FaLocationDot } from "react-icons/fa6";
import { SiShopee } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
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
          autoplay={{ delay: 5000 }}>
          <SwiperSlide>
            <div className="relative">
              <img className="w-full" src={hero1} alt="hero1" />
              <div className="absolute top-9 px-4 md:top-28 md:left-6 lg:top-52 lg:left-[150px]">
                <h1 className="text-white font-bold text-base md:text-[30px] lg:text-[45px]">
                  BE A SOLUTION
                </h1>
                <h1 className="text-white font-bold text-base md:text-[30px] md:mt-4 lg:text-[45px] lg:mt-8">
                  NOT A POLUTION
                </h1>
                <p className="text-white text-[8px] mt-3 md:text-sm md:mt-8 lg:text-lg lg:mt-14">
                  Pelopor bubble wrap bigradable ramah lingkungan untuk
                  menggantikan
                </p>
                <p className="text-white text-[8px] md:text-sm lg:text-lg">
                  bubble wrap PET. Ocuwrap hadir untuk membantu pelaku online
                  store
                </p>
                <p className="text-white text-[8px] md:text-sm lg:text-lg">
                  produk kosmetik di Indonesia untuk menjaga kosmetik
                </p>
                <p className="text-white text-[8px] md:text-sm lg:text-lg">
                  dari benturan selama diperjalanan.
                </p>

                <button
                  className="mt-6 rounded-sm px-2 py-1 bg-primary  text-white text-[8px] font-medium 
                                    md:mt-12 md:text-sm md:px-6 md:py-2
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
                <p className="text-white font text-[8px] mt-3 md:text-sm md:mt-8 lg:text-lg lg:mt-14">
                  Pelopor bubble wrap bigradable ramah lingkungan untuk
                  menggantikan
                </p>
                <p className="text-white text-[8px] md:text-sm lg:text-lg">
                  bubble wrap PET. Ocuwrap hadir untuk membantu pelaku online
                  store
                </p>
                <p className="text-white text-[8px] md:text-sm lg:text-lg">
                  produk kosmetik di Indonesia untuk menjaga kosmetik
                </p>
                <p className="text-white text-[8px] md:text-sm lg:text-lg">
                  dari benturan selama diperjalanan.
                </p>

                <button
                  className="mt-6 rounded-sm px-2 py-1 bg-primary  text-white text-[8px] font-medium 
                                    md:mt-12 md:text-sm md:px-6 md:py-2
                                    lg:mt-20 lg:text-lg lg:px-10">
                  Dapatkan
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* About Product */}

      {/* Description md-lg */}
      <div className="hidden relative md:relative md:flex justify-between top-20 md:px-10 lg:px-[150px] lg:top-[125px]">
        <div className=" relative justify-normal">
          <h1 className="text-2xl lg:text-[40px] font-bold ">Bubble Wrap</h1>
          <h1 className="text-2xl lg:text-[40px] mt-4 font-bold ">
            Ramah Lingkungan
          </h1>

          <p className="mt-4 text-sm lg:text-lg lg:mt-8">
            Ocuwrap merupakan inovasi bubble wrap
          </p>
          <p className="text-sm lg:text-lg">
            biogradable pertama di Indonesia.
          </p>
          <p className="text-sm lg:text-lg">
            Tersedia dengan dua ukuran dengan
          </p>
          <p className="text-sm lg:text-lg">harga yang terjangkau.</p>

          <div className="relative flex justify-normal items-center top-4 lg:top-8">
            <svg className="w-5" viewBox="0 0 26 26">
              <path
                fill="#00b835"
                fill-rule="evenodd"
                d="M26.635 5.02182C20.5366 8.60022 20.9734 15.9502 16.7006 19.2668C13.4848 21.763 8.9474 20.4988 6.3238 19.425C6.3238 19.425 4.5458 21.6692 3.2704 24.661C2.8434 25.6648 0.968798 24.5588 1.2978 23.709C5.467 12.95 19.6518 7.58242 19.6518 7.58242C19.6518 7.58242 9.6432 7.15822 2.954 15.8984C2.7748 13.902 2.478 8.50082 7.658 5.18842C14.6804 0.693024 28.0588 4.18742 26.635 5.02182Z"
              />
            </svg>
            <p className="px-2 font-medium text-sm lg:text-lg">100% Organic</p>
          </div>
          <div className="relative mt-5 lg:mt-10">
            <p className="text-sm lg:text-lg">Terbuat dari pati singkong</p>
            <p className="text-sm lg:text-lg">dan gambas kering.</p>
          </div>

          <button
            className=" bg-primary  text-white text-[8px] font-medium 
                                    md:mt-12 md:text-sm md:px-6 md:py-2
                                    lg:mt-16 lg:text-lg lg:px-10">
            Dapatkan
          </button>
        </div>

        {/* product image */}
        <div className="relative">
          <img
            className="md:w-[430px] lg:w-[650px]"
            src={about_product}
            alt="about_product"
          />
        </div>
      </div>

      {/* product image mobile */}
      <div className="relative top-10 flex justify-center items-center md:hidden">
        <img className="w-60 md:w-96" src={about_product} alt="about_product" />
      </div>

      {/* Description Mobile */}
      <div className="relative justify-center items-center text-center top-20 md:hidden">
        <h1 className="text-2xl font-bold ">Bubble Wrap</h1>
        <h1 className="text-2xl font-bold ">Ramah Lingkungan</h1>

        <p className="mt-4 text-sm">Ocuwrap merupakan inovasi bubble wrap</p>
        <p className="text-sm">biogradable pertama di Indonesia.</p>
        <p className="text-sm">Tersedia dengan dua ukuran dengan</p>
        <p className="text-sm">harga yang terjangkau.</p>

        <div className="relative flex justify-center top-4">
          <svg className="w-5" viewBox="0 0 26 20">
            <path
              fill="#00b835"
              fill-rule="evenodd"
              d="M26.635 5.02182C20.5366 8.60022 20.9734 15.9502 16.7006 19.2668C13.4848 21.763 8.9474 20.4988 6.3238 19.425C6.3238 19.425 4.5458 21.6692 3.2704 24.661C2.8434 25.6648 0.968798 24.5588 1.2978 23.709C5.467 12.95 19.6518 7.58242 19.6518 7.58242C19.6518 7.58242 9.6432 7.15822 2.954 15.8984C2.7748 13.902 2.478 8.50082 7.658 5.18842C14.6804 0.693024 28.0588 4.18742 26.635 5.02182Z"
            />
          </svg>
          <p className="px-2 font-medium text-sm">100% Organic</p>
        </div>
        <div className="mt-5">
          <p className="text-sm">Terbuat dari pati singkong</p>
          <p className="text-sm">dan gambas kering.</p>
        </div>
      </div>

      {/* Footer */}

      {/* Footer md:lg */}

      <div className="hidden relative md:block md:w-full md:h-[400px] md:bg-black2 md:top-[200px] lg:h-[477px]">
        <div className="md:grid md:grid-cols-4 md:py-12 md:px-10 lg:px-[150px] lg:py-24">
          <div className="relative">
            <img className="md:w-[80px] lg:w-[96px]" src={logo_dummy} alt="logo" />
            <p className=" text-white text-sm md:mt-6 md:mr-6 lg:mt-8">
              Ocuwrap berinovasi menciptakan bubblewrap ramah lingkungan untuk
              turut aktif mendukung gerakan mengurangi jumlah sampah plastik di
              Indonesia.
            </p>
          </div>

          <div className="md:mt-4 lg:ml-16">
            <div className="text-white">
              <h1 className="text-base font-medium md:mb-8 lg:mb-11">Jelajahi</h1>
              <p className="flex text-white items-center text-sm">
                <AiOutlineRight className="text-second" />
                <span className="ml-1">Beranda</span>
              </p>
              <p className="flex text-white items-center text-sm md:mt-4">
                <AiOutlineRight className="text-second" />
                <span className="ml-1">Tentang Kami</span>
              </p>
              <p className="flex text-white items-center text-sm md:mt-4">
                <AiOutlineRight className="text-second" />
                <span className="ml-1">Galeri</span>
              </p>
            </div>
          </div>

          <div className="relative md:mt-4 lg:ml-3">
            <h1 className="text-white md:mb-8">Media Sosial</h1>
            <ul className="items-center text-white text-sm">
              <a className="flex" href="">
                <AiFillInstagram className="mr-2 text-xl text-second" />
                ocuwrap.official
              </a>
              <a className="flex md:mt-4" href="">
                <BiLogoTiktok className="mr-2 text-xl text-second" />
                ocuwrap.official
              </a>
              <a className="flex md:mt-4" href="">
                <FaSquareThreads className="mr-2 text-xl text-second" />
                ocuwrap.official
              </a>
              <a className="flex md:mt-4" href="">
                <AiFillYoutube className="mr-2 text-xl text-second" />
                ocuwrap.official
              </a>
              <a className="flex md:mt-4" href="">
                <SiShopee className="mr-2 text-xl text-second" />
                ocuwrap.official
              </a>
            </ul>
          </div>

          <div className="relative text-white md:mt-4">
            <h1 className="text-base font-medium md:mb-8">Kontak</h1>
            <ul>
              <a href="" className="flex items-center text-xl">
                <BsFillTelephoneFill className="text-second" />
                <span className="ml-2 text-sm">+62 8790 898 7635</span>
              </a>
              <a href="" className="flex items-center md:mt-4">
                <IoMdMail className="text-second text-xl" />
                <span className="ml-2 text-sm">ocuwrap.official</span>
              </a>
              <a href="" className="flex items-center md:mt-4">
                <FaLocationDot className="text-second md:text-3xl lg:text-2xl" />
                <span className="ml-2 text-sm">
                  Jl. Patimura, Gg. Renggali No. 25 Malang, Jawa Timur
                </span>
              </a>
            </ul>
          </div>
        </div>

        <div className="md:mt-4 md:px-10 lg:px-[150px] lg:mt-0 items-center justify-center">
          <hr className="opacity-50 mb-4" />
          <h1 className="text-center text-white text-xs">
            Copyright - Ocuwrap All Right Reserved
          </h1>
        </div>
      </div>

      {/* Footer Mobile */}
      <div className="relative w-full h-[500px] top-[150px] bg-black2 py-9 px-4 md:hidden lg:hidden">
        <div className="flex justify-between items-center md:items-start">
          <img src={logo_dummy} alt="logo" className="w-16 md:w-20 lg:w-24" />

          {/* icon */}
          <ul className="flex items-center text-second text-xl gap-4 md:hidden lg:hidden">
            <a className="flex items-center" href="">
              <AiFillInstagram />
            </a>
            <a href="">
              <BiLogoTiktok />
            </a>
            <a href="">
              <FaSquareThreads />
            </a>
            <a href="">
              <AiFillYoutube />
            </a>
            <a href="">
              <SiShopee />
            </a>
          </ul>
        </div>

        {/* descriptopn */}
        <div className="relative mt-6 md:hidden">
          <p className=" text-white text-sm">
            Ocuwrap berinovasi menciptakan bubblewrap ramah lingkungan untuk
            turut aktif mendukung gerakan mengurangi jumlah sampah plastik di
            Indonesia.
          </p>
        </div>

        {/* navigation */}
        <div className="grid grid-cols-2 mt-12 md:hidden">
          <div className="text-white">
            <h1 className="text-base font-medium mb-4">Jelajahi</h1>
            <p className="flex text-white items-center text-xs">
              <AiOutlineRight className="text-second" />
              <span className="ml-1">Beranda</span>
            </p>
            <p className="flex text-white items-center text-xs mt-2">
              <AiOutlineRight className="text-second" />
              <span className="ml-1">Tentang Kami</span>
            </p>
            <p className="flex text-white items-center text-xs mt-2">
              <AiOutlineRight className="text-second" />
              <span className="ml-1">Galeri</span>
            </p>
          </div>

          {/* contact */}
          <div className="text-white">
            <h1 className="text-base font-medium mb-4">Kontak</h1>
            <p className="flex items-center text-sm">
              <BsFillTelephoneFill className="text-second" />
              <span className="ml-2 text-xs">+62 8790 898 7635</span>
            </p>
            <p className="flex items-center mt-2">
              <IoMdMail className="text-second text-[16px]" />
              <span className="ml-2 text-xs">ocuwrap.official@gmail.com</span>
            </p>
            <p className="flex items-center mt-2">
              <FaLocationDot className="text-second text-xl" />
              <span className="ml-2 text-xs">
                Jl. Patimura, Gg. Renggali No. 25 Malang, Jawa Timur
              </span>
            </p>
          </div>
        </div>
        <div className="mt-12 items-center justify-center">
          <hr className="opacity-50 mb-4" />
          <h1 className="text-center text-white text-xs">
            Copyright - Ocuwrap All Right Reserved
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
