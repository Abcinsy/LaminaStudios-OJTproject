import React from 'react';

export default function Event() {
    return(
        <div className="bg-palette bg-opacity-20 ">
        <div className=' pt-32 w-4/5 mx-auto  flex flex-col gap-5 pb-44'>
        <h1 className='text-yellow-400 uppercase font-bold tracking-wide text-center text-5xl lg:text-7xl  '>Event Photos</h1>
        <p className=' text-white text-center text-xl px-2 lg:px-64 font-extralight  '>Photo Credits: University of Santo Tomas - Legazpi City, Bicol University, SLTCFI</p>

        {/* photo grid */}
        <div className='flex flex-wrap  flex-col lg:flex-row  gap-y-2'>
            <div data-open-modal className='basis-1/3 px-1'>
                <img src="/images/ls_initiatives1.png" alt="" srcset="" className='w-full    h-full' />
            </div>
            <div className='basis-1/3 px-1'>
                <img src="/images/ls_initiatives2.png" alt="" srcset="" className='w-full    h-full' />
            </div>
            <div className='basis-1/3 px-1'>
                <img src="/images/ls_initiatives3.png" alt="" srcset="" className='w-full    h-full' />
            </div>
            <div className='basis-1/3 px-1'>
                <img src="/images/ls_initiatives4.png" alt="" srcset="" className='w-full    h-full' />
            </div>
            <div className='basis-1/3 px-1'>
                <img src="/images/ls_initiatives7.png" alt="" srcset="" className='w-full    h-full' />
            </div>
            <div className='basis-1/3 px-1'>
                <img src="/images/ls_initiatives6.png" alt="" srcset="" className='w-full    h-full' />
            </div>
        </div>

                {/* Description */}
                <div className="font-sans pt-12 w-4/5 lg:w-auto mx-auto flex flex-col gap-5">
                    <p className="text-white lg:text-justify tracking-wider text-l text-start ">
                        Jemarwen Baldon as well as Rommin Callos (aka Arcee), Lamina Studios University Ambassador goes to every university and college in Albay, Philippines. Lamina Studios were invited to several IT-related seminars or workshops.
                    </p>
                    <p className=" text-white lg:text-justify tracking-wider text-l text-start ">
                        Lamina Studios participated in several events held at different universities and colleges in the Bicol Region, Philippines. Lamina Studios' members: Arcee Beah Ortega, Nikko B. Alamo, Brian Calma, and Jemarwen Baldon were invited to be the guest speakers at the events sponsored by Bicol University, Southern Luzon Technological College Foundation, Inc., Aquinas University, and Lamina Studios. The events covered the following topics: Virtual Reality, Computer Programming, Internet and Social Media Marketing, Game Development, Web Design and Development, Graphic Design and Animation, Mobile Application and Android Development. Lamina Studios will continue to reach out to more universities or colleges to extend our help to students or professionals who share the same vision with us.
                    </p>
                </div>
            </div>
        </div>
    )
};
