import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// picture import
import hero1 from '/hero1.png';
import hero2 from '/hero2.png';
import about_product from '/about_product.png';
import advantage from '/advantage.png';
import display_product from '/display produk.png';

import gallery_path from '../data/gallery_path.json';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home: React.FC = () => {
    return (
        <>
            <Navbar bgColor={'transparent'} txtColor={'white'} />

            {/* Hero Carousel */}
            <section className="relative container mx-auto" id="home">
                <Swiper spaceBetween={0} slidesPerView={1} modules={[Autoplay]} autoplay={{ delay: 5000 }}>
                    <SwiperSlide>
                        <img className="w-full" src={hero1} alt="hero1" />
                        <div className="absolute top-9 px-4 md:top-28 md:left-6 lg:top-52 lg:left-[125px] ">
                            <h1 className="text-white font-bold text-base md:text-[30px] lg:text-[45px]">
                                BE A SOLUTION
                            </h1>
                            <h1 className="text-white font-bold text-base md:text-[30px] md:mt-4 lg:text-[45px] lg:mt-8">
                                NOT A POLLUTION
                            </h1>
                            <p className="text-white text-[8px] mt-3 md:text-sm md:mt-8 lg:text-lg lg:mt-14">
                                Pelopor bubble wrap bigradable ramah lingkungan untuk menggantikan
                            </p>
                            <p className="text-white text-[8px] md:text-sm lg:text-lg">
                                bubble wrap PET. Ocuwrap hadir untuk membantu pelaku online store
                            </p>
                            <p className="text-white text-[8px] md:text-sm lg:text-lg">
                                produk kosmetik di Indonesia untuk menjaga kosmetik
                            </p>
                            <p className="text-white text-[8px] md:text-sm lg:text-lg">
                                dari benturan selama diperjalanan.
                            </p>

                            <a
                                target="_blank"
                                href="https://wa.me/6285704026129?text=Saya%20ingin%20membeli%20produk%20anda"
                            >
                                <button
                                    className="mt-6 rounded-sm px-2 py-1 bg-primary  text-white text-[8px] font-medium 
                                    md:mt-12 md:text-sm md:px-6 md:py-2
                                    lg:mt-20 lg:text-lg lg:px-10"
                                >
                                    Dapatkan
                                </button>
                            </a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className="w-full" src={hero2} alt="hero1" />
                        <div className="absolute top-9 px-4 md:top-28 md:left-6 lg:top-52 lg:left-[150px]">
                            <h1 className="text-white font-bold text-base md:text-[30px] lg:text-[45px]">
                                BE A SOLUTION
                            </h1>
                            <h1 className="text-white font-bold text-base md:text-[30px] md:mt-4 lg:text-[45px] lg:mt-8">
                                NOT A POLLUTION
                            </h1>
                            <p className="text-white font text-[8px] mt-3 md:text-sm md:mt-8 lg:text-lg lg:mt-14">
                                Pelopor bubble wrap bigradable ramah lingkungan untuk menggantikan
                            </p>
                            <p className="text-white text-[8px] md:text-sm lg:text-lg">
                                bubble wrap PET. Ocuwrap hadir untuk membantu pelaku online store
                            </p>
                            <p className="text-white text-[8px] md:text-sm lg:text-lg">
                                produk kosmetik di Indonesia untuk menjaga kosmetik
                            </p>
                            <p className="text-white text-[8px] md:text-sm lg:text-lg">
                                dari benturan selama diperjalanan.
                            </p>

                            <a
                                target="_blank"
                                href="https://wa.me/6285704026129?text=Saya%20ingin%20membeli%20produk%20anda"
                            >
                                <button
                                    className="mt-6 rounded-sm px-2 py-1 bg-primary  text-white text-[8px] font-medium 
                                    md:mt-12 md:text-sm md:px-6 md:py-2
                                    lg:mt-20 lg:text-lg lg:px-10"
                                >
                                    Dapatkan
                                </button>
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            {/* About Product */}

            {/* Description md-lg */}
            <section className="relative container mx-auto md:top-20 md:mb-10 lg:top-[125px] lg:mb-[125px] items-center">
                <div className="hidden md:flex md:justify-between top-20 md:px-10 lg:px-[150px] lg:top-[125px]">
                    <div className=" relative justify-normal">
                        <h1 className="text-2xl lg:text-[40px] font-bold ">Bubble Wrap</h1>
                        <h1 className="text-2xl lg:text-[40px] md:mt-0 lg:mt-5 mt-4 font-bold ">Ramah Lingkungan</h1>

                        <p className="mt-4 text-sm lg:text-lg lg:mt-8">Ocuwrap merupakan inovasi bubble wrap</p>
                        <p className="text-sm lg:text-lg">biogradable pertama di Indonesia.</p>
                        <p className="text-sm lg:text-lg">Tersedia dengan dua ukuran dengan</p>
                        <p className="text-sm lg:text-lg">harga yang terjangkau.</p>

                        <div className="relative flex justify-normal items-center top-4 lg:top-8">
                            <svg className="w-5" viewBox="0 0 26 26">
                                <path
                                    fill="#00b835"
                                    fillRule="evenodd"
                                    d="M26.635 5.02182C20.5366 8.60022 20.9734 15.9502 16.7006 19.2668C13.4848 21.763 8.9474 20.4988 6.3238 19.425C6.3238 19.425 4.5458 21.6692 3.2704 24.661C2.8434 25.6648 0.968798 24.5588 1.2978 23.709C5.467 12.95 19.6518 7.58242 19.6518 7.58242C19.6518 7.58242 9.6432 7.15822 2.954 15.8984C2.7748 13.902 2.478 8.50082 7.658 5.18842C14.6804 0.693024 28.0588 4.18742 26.635 5.02182Z"
                                />
                            </svg>
                            <p className="px-2 font-medium text-sm lg:text-lg">100% Organik</p>
                        </div>
                        <div className="relative mt-5 lg:mt-10">
                            <p className="text-sm lg:text-lg">Terbuat dari pati singkong</p>
                            <p className="text-sm lg:text-lg">dan gambas kering.</p>
                        </div>

                        <a
                            target="_blank"
                            href="https://wa.me/6285704026129?text=Saya%20ingin%20membeli%20produk%20anda"
                        >
                            <button
                                className=" bg-primary  text-white text-[8px] font-medium 
                                    md:mt-12 md:text-sm md:px-6 md:py-2
                                    lg:mt-16 lg:text-lg lg:px-10"
                            >
                                Dapatkan
                            </button>
                        </a>
                    </div>

                    {/* product image */}
                    <div className="hidden md:block">
                        <img className=" md:w-[430px] lg:w-[600px]" src={about_product} alt="about_product" />
                    </div>
                </div>
            </section>

            {/* product image mobile */}
            <div className="relative top-14 flex justify-center items-center md:hidden">
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
                            fillRule="evenodd"
                            d="M26.635 5.02182C20.5366 8.60022 20.9734 15.9502 16.7006 19.2668C13.4848 21.763 8.9474 20.4988 6.3238 19.425C6.3238 19.425 4.5458 21.6692 3.2704 24.661C2.8434 25.6648 0.968798 24.5588 1.2978 23.709C5.467 12.95 19.6518 7.58242 19.6518 7.58242C19.6518 7.58242 9.6432 7.15822 2.954 15.8984C2.7748 13.902 2.478 8.50082 7.658 5.18842C14.6804 0.693024 28.0588 4.18742 26.635 5.02182Z"
                        />
                    </svg>
                    <p className="px-2 font-medium text-sm">100% Organic</p>
                </div>
                <div className="relative mt-5">
                    <p className="text-sm">Terbuat dari pati singkong</p>
                    <p className="text-sm">dan gambas kering.</p>
                </div>

                <button className="relative mt-7 rounded-sm px-6 py-2 bg-primary  text-white text-[14px] font-medium md:mt-12 md:text-sm md:px-6 md:py-2lg:mt-20 lg:text-lg lg:px-10">
                    Dapatkan
                </button>
            </div>

            {/* product advantages */}

            <section className="relative bg-halfgreen top-[125px]">
                <div className="container mx-auto w-full h-[650px] md:h-[530px] lg:h-[725px] mb-[100px] md:px-10 md:py-20 lg:py-0 md:grid md:grid-cols-2 lg:px-[150px]">
                    <div className="flex justify-center items-center mx-auto md:justify-normal md:items-start ">
                        <img
                            className="w-56 mt-14 md:mt-0 md:w-[350px] lg:w-[450px] lg:mt-[125px]"
                            src={advantage}
                            alt="advantage"
                        />
                    </div>
                    <div className="justify-center text-center px-11 md:px-8 lg:max-w-md lg:mx-4 mt-6 md:mt-4 md:justify-normal md:text-start">
                        <h1 className="text-2xl px-10 md:px-0 md:max-w-[250px] font-bold lg:max-w-full md:mx-0 lg:mt-[135px] lg:text-[40px] lg:leading-[50px]">
                            Kenapa Harus Memakai Ocuwrap
                        </h1>
                        <p className="text-sm mt-4">
                            Ocuwrap mampu bersaing dengan bubblewrap lain karena lebih ramah lingkungan, melindungi
                            barang dari berbagai benturan, praktis untuk digunakan karena berbentuk kantong.
                        </p>
                        <p className="text-sm mt-4">
                            Selain itu, Ocuwrap juga hadir untuk menjaga bumi dengan cara mengurangi penggunaan sampah
                            plastik dan dapat digunakan kembali sebagai media tanam.
                        </p>
                    </div>
                </div>
            </section>

            {/* Galeri */}

            <section className="relative container mx-auto mt-44 md:mb-8 lg:mt-[220px] lg:mb-20">
                <div className="container mx-auto items-center">
                    <h1 className="text-2xl lg:text-[40px] font-bold text-center ">Galeri</h1>
                    <p className="text-sm text-center px-10 md:px-48 mt-4 mb-6">
                        Jelajahi lebih banyak gambar produk hingga event menarik tentang ocuwrap pada galeri
                    </p>

                    {/* swiper md:lg */}
                    <Swiper
                        slidesPerView={3}
                        centeredSlides={false}
                        spaceBetween={30}
                        className="mySwiper hidden md:block md:mt-8 lg:mt-12 md:px-10 lg:px-32"
                    >
                        {gallery_path.slice(0, 5).map((gallery, index) => (
                            <SwiperSlide key={index}>
                                <img src={gallery.url} alt={gallery.name} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* swiper mobile */}
                    <Swiper slidesPerView={1} centeredSlides={true} spaceBetween={30} className="mySwiper md:hidden">
                        {gallery_path.slice(0, 5).map((gallery, index) => (
                            <SwiperSlide key={index}>
                                <img src={gallery.url} alt={gallery.name} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Company */}

            <section className="relative bg-halfgreen top-[60px] mb-16 " id="about">
                <div className="container mx-auto w-full h-[530px] md:h-[470px] lg:h-[670px] md:mb-[40px] md:px-10 md:py-20 lg:py-0 md:grid md:grid-cols-2 lg:px-[150px]">
                    <div className="flex justify-center items-center mx-auto md:justify-normal md:items-start ">
                        <img
                            className="w-56 mt-14 md:mt-0 md:w-[350px] lg:w-[450px] lg:mt-[125px]"
                            src={display_product}
                            alt="advantage"
                        />
                    </div>
                    <div className="justify-center text-center px-11 md:px-8 lg:max-w-md lg:mx-4 mt-6 md:mt-4 md:justify-normal md:text-start">
                        <h1 className="text-2xl px-10 md:px-0 md:max-w-[250px] font-bold lg:max-w-full md:mx-0 lg:mt-[135px] lg:text-[40px] lg:leading-[50px]">
                            Ocuwrap
                        </h1>
                        <p className="text-sm mt-4">
                            Ocuwrap adalah perusahaan yang bergerak di bidang wrapping dan berfokus pada bubblewrap
                            biodegradable. Ocuwrap membuat inovasi baru untuk mendukung gerakan anti plastik dan
                            mengurangi jumlah sampah plastik di Indonesia.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;
