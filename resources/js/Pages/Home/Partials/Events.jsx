import { useState } from "react";
import Title from "../../../Components/Title";

function Event({event, active, onClick}) {
    return (
        <div onClick={onClick} className={"flex-col min-h-[32rem] lg:basis-1/3 justify-center items-center " + (active ? 'flex' : 'brightness-75 opacity-70 lg:flex hidden')}>
            <img className={`${active ? 'sm:w-96 w-full' : 'w-72'} lg:max-h-[32rem]  mb-4`} src={event.image_name} alt="event" />
            {
                active ? null : (
                    <div className="flex flex-col justify-self-end">
                        <p className="text-xl text-slate-100 font-bold text-center underline decoration-amber-500 decoration-2">{event.name}</p>
                        <p className="text-lg text-slate-100 text-center">{event.blurb}</p>
                    </div>
                )
            }
        </div>
    )
}

export default function Events({ events }) {

    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        if(index === events.length - 1) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    const prevSlide = () => {
        if(index === 0) {
            setIndex(events.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    return (
        <div className="flex flex-col w-full min-h-screen sm:px-24 px-8 mt-16">
            <Title>Events</Title>
            <div className="relative flex w-full justify-center lg:min-h-[36rem]">
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
                <p className="text-xl text-slate-100 font-bold text-center underline decoration-amber-500 decoration-2">{events[index].name}</p>
                <p className="text-lg text-slate-100 text-center">{events[index].blurb}</p>
            </div>
            <div className="flex w-full justify-center mt-4 text-lg text-white text-center">
                {events[index].description}
            </div>
        </div>
    );
}
