import { Link } from 'react-router-dom';

import { AiOutlineRight, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { BiLogoTiktok } from 'react-icons/bi';
import { FaSquareThreads } from 'react-icons/fa6';
import { SiShopee } from 'react-icons/si';
import { IoMdMail } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';
import logo from '/logo.png';
import Sosmed from '../data/sosmed_path.json';

const Footer: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Footer md:lg */}
            <section className="relative md:bg-black2">
                <div className="container mx-auto">
                    <div className="hidden relative md:block md:w-full md:h-[400px] lg:h-[477px]">
                        <div className="md:grid md:grid-cols-4 md:py-12 md:px-10 lg:px-[150px] lg:py-24">
                            <div className="mx-auto">
                                <img className="md:w-[125px] lg:w-[180px]" src={logo} alt="logo" />
                                <p className=" text-white text-sm md:mt-6 md:mr-6 lg:mt-8">
                                    Ocuwrap berinovasi menciptakan bubblewrap ramah lingkungan untuk turut aktif
                                    mendukung gerakan mengurangi jumlah sampah plastik di Indonesia.
                                </p>
                            </div>

                            <div className="md:mt-4 lg:ml-16">
                                <div className="text-white">
                                    <h1 className="text-base font-medium md:mb-8 lg:mb-11">Jelajahi</h1>
                                    <Link
                                        to={'/'}
                                        className="flex cursor-pointer text-white items-center text-sm"
                                        onClick={() => scrollToSection('home')}
                                    >
                                        <AiOutlineRight className="text-second" />
                                        <span className="ml-1">Beranda</span>
                                    </Link>
                                    <Link
                                        to={'/'}
                                        className="flex cursor-pointer text-white items-center text-sm md:mt-4"
                                        onClick={() => scrollToSection('about')}
                                    >
                                        <AiOutlineRight className="text-second" />
                                        <span className="ml-1">Tentang Kami</span>
                                    </Link>
                                    <Link to={'/gallery'} className="flex text-white items-center text-sm md:mt-4">
                                        <AiOutlineRight className="text-second" />
                                        <span className="ml-1">Galeri</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="relative md:mt-4 lg:ml-3">
                                <h1 className="text-white md:mb-8">Media Sosial</h1>
                                <ul className="items-center text-white text-sm">
                                    <a target="_blank" className="flex" href={Sosmed[0].url}>
                                        <AiFillInstagram className="mr-2 text-xl text-second" />
                                        {Sosmed[0].name}
                                    </a>
                                    <a target="_blank" className="flex md:mt-2" href={Sosmed[1].url}>
                                        <BiLogoTiktok className="mr-2 text-xl text-second" />
                                        {Sosmed[1].name}
                                    </a>
                                    <a target="_blank" className="flex md:mt-2" href={Sosmed[2].url}>
                                        <FaSquareThreads className="mr-2 text-xl text-second" />
                                        {Sosmed[2].name}
                                    </a>
                                    <a target="_blank" className="flex md:mt-2" href={Sosmed[3].url}>
                                        <AiFillYoutube className="mr-2 text-xl text-second" />
                                        {Sosmed[3].name}
                                    </a>
                                    <a target="_blank" className="flex md:mt-2" href={Sosmed[4].url}>
                                        <SiShopee className="mr-2 text-xl text-second" />
                                        {Sosmed[4].name}
                                    </a>
                                </ul>
                            </div>

                            <div className="relative text-white md:mt-4">
                                <h1 className="text-base font-medium md:mb-8">Kontak</h1>
                                <ul>
                                    <div className="flex items-center text-xl">
                                        <BsFillTelephoneFill className="text-second" />
                                        <span className="ml-2 text-sm">+62 857 0402 6129</span>
                                    </div>
                                    <div className="flex items-center md:mt-4 ">
                                        <IoMdMail className="text-second text-xl" />
                                        <span className="ml-2 text-sm hidden md:block lg:hidden">ocuwrap.official</span>
                                        <span className="ml-2 text-sm md:hidden lg:block">
                                            ocuwrap.official@gmail.com
                                        </span>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        <div className="md:mt-4 md:px-10 lg:px-[150px] lg:mt-0 items-center justify-center">
                            <hr className="opacity-50 mb-4" />
                            <h1 className="text-center text-white text-xs md:mb-6">
                                Copyright - Ocuwrap All Right Reserved
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Mobile */}
            <div className="relative w-full h-[500px] bg-black2 py-9 px-4 md:hidden lg:hidden">
                <div className="flex justify-between items-center md:items-start">
                    <img src={logo} alt="logo" className="w-32" />

                    {/* icon */}
                    <ul className="flex items-center text-second text-xl gap-4 mt-[13px] md:hidden lg:hidden">
                        <a target="_blank" href={Sosmed[0].url}>
                            <AiFillInstagram />
                        </a>
                        <a target="_blank" href={Sosmed[1].url}>
                            <BiLogoTiktok />
                        </a>
                        <a target="_blank" href={Sosmed[2].url}>
                            <FaSquareThreads />
                        </a>
                        <a target="_blank" href={Sosmed[3].url}>
                            <AiFillYoutube />
                        </a>
                        <a target="_blank" href={Sosmed[4].url}>
                            <SiShopee />
                        </a>
                    </ul>
                </div>

                {/* descriptopn */}
                <div className="relative mt-6 md:hidden">
                    <p className=" text-white text-sm">
                        Ocuwrap berinovasi menciptakan bubblewrap ramah lingkungan untuk turut aktif mendukung gerakan
                        mengurangi jumlah sampah plastik di Indonesia.
                    </p>
                </div>

                {/* navigation */}
                <div className="grid grid-cols-2 mt-12 md:hidden">
                    <div className="text-white">
                        <h1 className="text-base font-medium mb-4">Jelajahi</h1>
                        <Link
                            to={'/'}
                            className="flex text-white items-center text-xs"
                            onClick={() => scrollToSection('home')}
                        >
                            <AiOutlineRight className="text-second" />
                            <span className="ml-1">Beranda</span>
                        </Link>
                        <Link
                            to={'/'}
                            className="flex text-white items-center text-xs mt-2"
                            onClick={() => scrollToSection('about')}
                        >
                            <AiOutlineRight className="text-second" />
                            <span className="ml-1">Tentang Kami</span>
                        </Link>
                        <Link to={'/gallery'} className="flex text-white items-center text-xs mt-2">
                            <AiOutlineRight className="text-second" />
                            <span className="ml-1">Galeri</span>
                        </Link>
                    </div>

                    {/* contact */}
                    <div className="text-white">
                        <h1 className="text-base font-medium mb-4">Kontak</h1>
                        <p className="flex items-center text-sm">
                            <BsFillTelephoneFill className="text-second" />
                            <span className="ml-2 text-xs">+62 857 0402 6129</span>
                        </p>
                        <p className="flex items-center mt-2">
                            <IoMdMail className="text-second text-[16px]" />
                            <span className="ml-2 text-xs">ocuwrap.official@gmail.com</span>
                        </p>
                    </div>
                </div>
                <div className="mt-12 items-center justify-center">
                    <hr className="opacity-50 mb-4" />
                    <h1 className="text-center text-white text-xs">Copyright - Ocuwrap All Right Reserved</h1>
                </div>
            </div>
        </>
    );
};

export default Footer;
