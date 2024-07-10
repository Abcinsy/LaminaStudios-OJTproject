import React, { useState } from "react";
import SiteLayout from "../../Layouts/SiteLayout";
import BlackFooter from "../../Components/BlackFooter";
import News from "../News";
import Events from "./Partials/Events";
import PartnerStudios from "./Partials/PartnerStudios";

export default function Home({ carousel, events, news, blogs }) {
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

    return (
        <SiteLayout title={'Home'}>
            <div
                className="flex lg:flex-row flex-col px-16 -mt-32 items-center justify-between"
            >
                <div className="flex flex-col h-screen items-center justify-center">
                    <img
                        src="images/lamina_logo_yellow.png"
                        className="w-96"
                    />
                    <p className="text-white text-center  text-xl font-bold">
                        Developer and Creator of Dungeon Souls{" "}
                    </p>
                    <p className="text-white text-center  text-xl font-bold">
                        a Rougelike dungeon crawling action game avaialble on
                        Steam
                    </p>
                    <a
                        href="#_"
                        className="relative inline-flex items-center justify-start px-8 py-3 my-8 overflow-hidden font-medium transition-all bg-white rounded-xl hover:bg-white group"
                    >
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-black absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left font-bold text-black transition-colors duration-300 ease-in-out group-hover:text-yellow-400 ">
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
                        <div className="flex pt-80  justify-center ">
                            {slides.map((slide, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    onClick={() => goToSlide(slideIndex)}
                                    className="text-2xl cursor-pointer hover:scale-150"
                                >
                                    <i class="bi bi-dot"></i>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hover:opacity-50 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                        <i
                            class="bi bi-arrow-left-circle-fill"
                            onClick={prevSlide}
                            size={30}
                        />
                    </div>
                    <div className="hover:opacity-50 group-hover:block absolute top-[45%] -translate-x-0 translate-y[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                        <i
                            onClick={nextSlide}
                            size={30}
                            class="bi bi-arrow-right-circle-fill"
                        />
                    </div>
                </div>
            </div>
            <Events events={events} />
            <PartnerStudios />
        </SiteLayout>
    );
}
