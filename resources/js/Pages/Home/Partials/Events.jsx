import { useState, useEffect } from "react";
import Title from "../../../Components/Title";

const sampleEvents = [
    { image_name: 'img/amac.jpg', name: 'AMAC', blurb: 'This is Event 1', description: 'AMAC, hosted by Lamina Studios, is a dynamic event designed to foster creativity, innovation, and collaboration within the arts and media community.' },
    { image_name: 'img/bicol.jpg', name: 'Level Up', blurb: 'This is Event 2', description: 'Level Up, facilitated by Lamina Studios and held at Bicol University College of Science, is an engaging event aimed at inspiring and equipping students with the skills and knowledge to excel in their academic and professional journeys. This event features a mix of keynote speeches, hands-on workshops, and interactive sessions led by experts from various fields.' },
    { image_name: 'img/versus.jpg', name: 'Versus', blurb: 'This is Event 3', description: 'VERSUS, powered by IEEE and facilitated by Lamina Studios, is a competitive and educational event that challenges participants to push the boundaries of their technical and creative abilities. ' },
];

function Event({ event, active, onClick }) {
    return (
        <div onClick={onClick} className={"flex-col min-h-[32rem] lg:basis-1/3 justify-center items-center " + (active ? 'flex' : 'brightness-75 opacity-70 lg:flex hidden ')}>
            <img className={`${active ? 'sm:w-96 w-full' : 'w-72 '} lg:max-h-[32rem] mb-4`} src={event.image_name || ''} alt="event" />
            {
                active ? null : (
                    <div className="flex flex-col justify-self-end ">
                        <p className="text-xl text-yellow-500 fontFamily-display  font-manrope font-bold text-center underline decoration-amber-500 decoration-2">{event.name || 'Unnamed Event'}</p>
                        <p className="text-lg text-yellow-500 fontFamily-display font-manrope text-center">{event.blurb || 'No blurb available'}</p>
                    </div>
                )
            }
        </div>
    );
}

export default function Events() {
    const [events, setEvents] = useState(sampleEvents);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        console.log("Events data changed:", events);
    }, [events]);

    const nextSlide = () => {
        if (index === events.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    const prevSlide = () => {
        if (index === 0) {
            setIndex(events.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    return (
        <div className="flex flex-col w-full min-h-screen sm:px-24 px-8 mt-16">
           <h1 className="text-lamina-yellow font-bold text-5xl pb-4 mt-20 text-center">
                    EVENTS
                </h1>
            <div className="relative flex w-full justify-center lg:min-h-[36rem] ">
                <span onClick={prevSlide} className="absolute z-50 top-[50%] left-0 bg-gray-400/50 rounded-full w-12 h-12 flex justify-center items-center cursor-pointer">
                    <i className="bi bi-chevron-left text-3xl"></i>
                </span>
                <Event onClick={prevSlide} event={events[index === 0 ? events.length - 1 : index - 1]} />
                <Event event={events[index]} active={true} />
                <Event onClick={nextSlide} event={events[index === events.length - 1 ? 0 : index + 1]} />
                <span onClick={nextSlide} className="absolute z-50 top-[50%] right-0 bg-gray-400/50 rounded-full w-12 h-12 flex justify-center items-center cursor-pointer">
                    <i className="bi bi-chevron-right text-3xl"></i>
                </span>
            </div>
            <div className="flex flex-col justify-self-end">
                <p className="text-xl text-yellow-500 fontFamily-display  font-bold text-center underline decoration-amber-500 decoration-2">{events[index].name || 'Unnamed Event'}</p>
                <p className="text-lg text-yellow-500 fontFamily-display  text-center">{events[index].blurb || 'No blurb available'}</p>
            </div>
            <div className="flex w-full justify-center mt-4 text-lg text-white text-center font-manrope">
                {events[index].description || 'No description available'}
            </div>
        </div>
    );
}
