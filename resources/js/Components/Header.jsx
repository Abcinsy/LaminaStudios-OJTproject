import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';

const Header = () => {
    // links
    const Links = [
        { id: 0, name: "Home", link: "/home" },
        { id: 1, name: "About Us", link: "/about-us" },
        { id: 2, name: "Games", link: "/games" },
        { id: 3, name: "Creatives", link: "/creatives" },
        { id: 4, name: "News and Features", link: "/news" },
        { id: 5, name: "Contact Us", link: "/contact-us" },
        { id: 6, name: "Internship", link: "/internship" }
    ];

    const [open, setOpen] = useState(false);

    // minimizing navbar size when not on top of page
    const [show, setShow] = useState(true);
    const controlNavbar = () => {
        if (window.scrollY > 100) {
            setShow(false);
        } else {
            setShow(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, []);

    const currentPath = window.location.pathname;

    return (
        <nav className={`fixed z-50 w-full transition-all duration-300 ${show ? 'bg-transparent' : 'bg-[rgba(0,0,0,0.8)] lg:bg-[rgba(0,0,0,0.5)]'}`}>
            <div className={`lg:flex lg:flex-row justify-between px-10 py-2 lg:py-0 lg:h-[80px] text-white text-center text-sm align-middle items-center uppercase font-bold whitespace-nowrap ${open ? 'left-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm' : 'left-[-2090px]'}`}>
                <div className="flex flex-row-reverse justify-between">
                    <img src={"/images/lamina_logo_yellow.png"} alt='logo' width="100px" height="100px" />
                    <div className="lg:hidden text-white text-6xl cursor-pointer">
                        <i onClick={() => setOpen(!open)} className={`${open ? 'bi bi-x' : 'bi bi-list'}`}></i>
                    </div>
                </div>

                <ul className={`lg:flex lg:flex-row gap-5 xl:gap-5 lg:static lg:pb-0 mt-3 pb-12 lg:z-auto z-[-1] left-0 lg:w-auto w-full transition-all ${open ? 'left-0' : 'hidden absolute'}`}>
                    {Links.map((link) => (
                        <li className='my-10' key={link.id}>
                            <Link href={link.link} className={`px-6 py-4 rounded-full hover:text-lamina-yellow active:bg-gray-900 cursor-pointer ${currentPath === link.link ? 'text-amber-400 text-lg text-style-bold' : ''}`} style={{ lineHeight: currentPath === link.link ? '1rem' : '1rem' }}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Header;
