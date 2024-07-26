import React, { useState, useEffect } from "react";
import SiteLayout from "../../Layouts/SiteLayout";
import Events from "./Partials/Events";
import PartnerStudios from "./Partials/PartnerStudios";

export default function Home({ carousel, events, news, blogs, errors }) {
    console.log("Home Component Props:", { carousel, events, news, blogs, errors });

    if (!carousel || !carousel.images) {
        return (
            <SiteLayout title={'Home'}>
                <div className="text-white">No carousel data available</div>
            </SiteLayout>
        );
    }

    const slides = carousel.images;
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [currentIndex]); // Add currentIndex as a dependency

    return (
        <SiteLayout title={'Home'}>
            <div className="flex lg:flex-row flex-col px-16 -mt-32 items-center justify-between">
                <div className="flex flex-col h-screen items-center justify-center">
                    <img
                        src="images/lamina_logo_yellow.png"
                        className="w-96"
                        alt="Lamina Logo"
                    />
                    <p className="text-white text-center text-xl font-bold font-manrope">
                        Developer and Creator of Dungeon Souls
                    </p>
                    <p className="text-white text-center text-xl font-bold font-manrope">
                        a Roguelike dungeon crawling action game available on Steam
                    </p>
                    <a
                        href="#_"
                        className="relative inline-flex items-center justify-start px-8 py-3 my-8 overflow-hidden font-medium transition-all bg-white rounded-xl hover:bg-white group"
                    >
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-black absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left font-bold text-black transition-colors duration-300 ease-in-out group-hover:text-yellow-400">
                            Explore More
                        </span>
                    </a>
                </div>

                <div className="max-w-[700px] h-[480px] w-full py-16 px-4 relative group">
                    <div
                        style={{
                            backgroundImage: `url(${slides[currentIndex].image_name})`,
                        }}
                        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
                    >
                        <div className="flex pt-80 justify-center">
                            {slides.map((slide, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    onClick={() => goToSlide(slideIndex)}
                                    className="text-2xl cursor-pointer hover:scale-150"
                                >
                                    <i className="bi bi-dot"></i>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Events events={events} />
            <PartnerStudios />
        </SiteLayout>
    );
}
