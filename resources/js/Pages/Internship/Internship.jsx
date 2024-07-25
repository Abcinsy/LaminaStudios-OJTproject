import React, { useState } from 'react';
import SiteLayout from "../../Layouts/SiteLayout";
import { InertiaLink } from '@inertiajs/inertia-react';

const programs = [
    { title: 'UI/UX Design', description: 'Utilize a Prototyping tool and other software tools to design a multiplatform web app', icon: 'bi bi-palette' },
    { title: 'Cybersecurity', description: 'Case Study Utilizing several technologies such as Virtualbox/VMWare, Kali Linux, Ubuntu, Wireshark, Nmap, Nessus', icon: 'bi bi-incognito' },
    { title: 'Web Development', description: 'Work on the company website with an admin panel for easy content updates or the logistics system for Thumbworx, built with Laravel and Vue.js', icon: 'bi bi-laptop' },
    { title: 'Data Analytics', description: 'You will be tasked to utilize Data Organization tools and create diagrams such as ERD, UML, and others. Then later coordinate them with the developers', icon: 'bi bi-briefcase' },
    { title: 'Game Development', description: 'Choose from a variety of roles, including digital animation, game design, music/sound composition, and voice acting', icon: 'bi bi-joystick' },
    { title: 'IoT System Development', description: 'Continue working on the IoT dashboard following the current UI Design via Figma', icon: 'bi bi-diagram-3' },
    { title: 'Financial Management', description: 'Develop a model for a Financial Management System which involves learning about various financial management systems and understanding their significance across different industries', icon: 'bi bi-cash-coin' },
    { title: 'Network Administration', description: 'Learn to use Packet Tracer, Virtualbox/VMWare, MS Server, and other simulators. Gain skills in scripting with PowerShell, administering Linux and Windows systems', icon: 'bi bi-hdd-network' },
];

export default function Internship() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? programs.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === programs.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <SiteLayout title={'Internship'} backgroundImage={'Art/09.png'}>
            <div className="flex flex-col lg:px-16 md:px-10 relative overflow-x-clip">
                <div>
                    <div className='pt-32 w-4/5 lg:w-auto mx-auto flex flex-col gap-5'>
                        <h1 className='text-yellow-400 uppercase font-bold tracking-wide text-center text-5xl lg:text-7xl'>Internship</h1>
                        <p className='text-white lg:text-center tracking-wider text-xl text-start lg:text-3xl px-2 lg:px-64 font-extralight'>We offer internship opportunities as well as free training and mentoring to both students and professionals.</p>

                        {/* Apply Now Button */}
                        <div className="flex flex-row justify-center mt-10 mb-20 ">
                            <InertiaLink href="/application-form" className='text-gray-950 text-center px-10 py-3 mx-10 uppercase text-base rounded-full bg-yellow-400'>
                                APPLY NOW
                            </InertiaLink>
                        </div>
                    </div>


                    {/* Internship Programs */}
                    <div className='pt-40 w-full lg:w-4/5 mx-auto flex flex-col gap-5 pb-44'>
                        <h1 className='text-yellow-400 uppercase font-bold tracking-wide text-center text-5xl lg:text-7xl'>Internship Programs</h1>
                        {/* Programs Here */}
                        <div className='pt-20 flex justify-center items-center'>
                            <button
                                onClick={handlePrevious}
                                className='text-white p-2 text-2xl opacity-50'
                                disabled={currentIndex === 0}>
                                <i className="bi bi-caret-left-fill"></i>
                            </button>
                            <div className='grid grid-cols-3 gap-10 flex-grow'>
                                {programs.slice(currentIndex, currentIndex + 3).map((program, index) => (
                                    <div
                                        key={index}
                                        className='flex flex-col p-5 rounded-lg shadow-lg'
                                        style={{
                                            width: '100%',
                                            height: '400px',
                                            backgroundColor: 'rgba(22, 31, 43, 0.7)' // Adjust this color to match your palette
                                        }}
                                    >
                                        <div className='flex justify-center items-center flex-col h-full'>
                                            <i className={`bi ${program.icon} text-8xl text-white my-7`}></i>
                                            <div className='flex flex-col flex-grow overflow-hidden'>
                                                <h2 className='text-amber-400 text-xl text-center font-bold mb-4 truncate'>{program.title}</h2>
                                                <p className='text-white text-sm text-center overflow-y-auto'>{program.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={handleNext}
                                className='text-white p-2 text-2xl opacity-50'
                                disabled={programs.length - currentIndex <= 3}>
                                <i className="bi bi-caret-right-fill"></i>
                            </button>
                        </div>
                    </div>




                    {/* Internship Photos */}
                    <div className='pt-40 w-4/5 mx-auto flex flex-col gap-5 pb-44'>
                        <h1 className='text-yellow-400 uppercase font-bold tracking-wide text-center text-5xl lg:text-7xl'>Internship Photos</h1>
                        <p className='text-white text-center text-xl px-2 lg:px-64 font-extralight'>Bicol University College of Science</p>

                        {/* photo grid */}
                        <div className='pt-10 flex flex-wrap flex-col lg:flex-row gap-y-2'>
                            <div data-open-modal className='basis-1/3 px-1 aspect-square'>
                                <img src="/images/internship-3.jpg" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className='basis-1/3 px-1 aspect-square'>
                                <img src="/images/internship-6.png" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className='basis-1/3 px-1 aspect-square'>
                                <img src="/images/internship-1.jpg" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className='basis-1/3 px-1 aspect-square'>
                                <img src="/images/internship-2.jpg" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className='basis-1/3 px-1 aspect-square'>
                                <img src="/images/internship-4.jpg" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className='basis-1/3 px-1 aspect-square'>
                                <img src="/images/internship-7.png" alt="" className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </SiteLayout>
    );
}
