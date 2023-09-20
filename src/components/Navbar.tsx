/* eslint-disable react-hooks/exhaustive-deps */
import logo from '/logo.png';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

type NavbarProps = {
    bgColor: string;
    txtColor: string;
};

const Navbar = ({ bgColor, txtColor }: NavbarProps) => {
    const Links = [
        {
            name: 'Beranda',
            url: '/',
            section: 'home',
        },
        {
            name: 'Galeri',
            url: '/gallery',
            section: 'gallery',
        },
        {
            name: 'Tentang Kami',
            url: '/',
            section: 'about',
        },
    ];

    const [color, setColor] = useState(bgColor);
    const [textColor, setTextColor] = useState(txtColor);
    const location = useLocation();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 250) {
                setColor('white');
                setTextColor('black');
            } else {
                setColor('transparent');
                setTextColor('white');
            }
        };

        if (txtColor === 'black') {
            setColor('white');
            setTextColor('black');
        } else {
            window.addEventListener('scroll', changeColor);
        }
    }, []);

    return (
        <>
            <div
                style={{ backgroundColor: `${color}` }}
                className="hidden md:block md:fixed left-0 top-0 w-full z-10 ease-in duration-300 drop-shadow-nav"
            >
                <div className="px-2 py-2 md:px-10 md:py-2 lg:max-w-[1280px] lg:px-10 lg:py-2 mx-auto flex justify-between items-center">
                    <img src={logo} alt="logo" className="w-24 md:w-28 lg:w-32" />

                    <ul
                        style={{ color: `${textColor}` }}
                        className="hidden md:flex md:text-xs lg:flex lg:text-base font-bold gap-16"
                    >
                        {Links.map((link, index) => (
                            <li key={index}>
                                <Link
                                    className="hover:text-second duration-500"
                                    to={link.url}
                                    onClick={() => scrollToSection(link.section)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile menu */}
            <div className="fixed block z-50 bottom-0 left-0 right-0 py-3 px-10 bg-white drop-shadow-upper md:hidden lg:hidden">
                <ul className="flex justify-between">
                    <Link to={'/'}>
                        <li
                            className="flex justify-center flex-col items-center gap-1 text-primary"
                            onClick={() => scrollToSection('home')}
                        >
                            <svg className="w-6" viewBox="0 0 24 24">
                                <g
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                >
                                    <path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
                                    <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
                                </g>
                            </svg>
                            <span className="text-xs font-bold md:text-sm">Beranda</span>
                        </li>
                    </Link>
                    <Link to={'/'}>
                        <li
                            className="flex justify-center flex-col items-center gap-1 text-primary"
                            onClick={() => scrollToSection('about')}
                        >
                            <svg className="w-6" viewBox="0 0 24 24">
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm4 2h6m-6 4h6m-6 4h4"
                                />
                            </svg>
                            <span className="text-xs font-bold md:text-sm">Tentang Kami</span>
                        </li>
                    </Link>

                    <Link to={'/gallery'}>
                        <li className="flex justify-center flex-col items-center gap-1 text-primary">
                            <svg className="w-6" viewBox="0 0 24 24">
                                <path
                                    fill="#00b835"
                                    fillRule="evenodd"
                                    d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235c-.21.391-.47.742-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558c-.002-.473-.002-.973-.002-1.501v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19Zm-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386v.844l1.001-.877a2.3 2.3 0 0 1 3.141.105l4.29 4.29a2 2 0 0 0 2.564.222l.298-.21a3 3 0 0 1 3.732.225l2.83 2.547c.286-.598.455-1.384.545-2.493c.098-1.205.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-xs font-bold md:text-sm">Galeri</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
