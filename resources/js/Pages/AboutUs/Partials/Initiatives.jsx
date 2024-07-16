import React from 'react';

export default function Initiatives() {

  return (
    <div>
        {/* Our initiatives */}
        <div className=' pt-32 w-4/5 mx-auto flex flex-col gap-5 '>
            <h1 className='text-yellow-400 uppercase font-bold tracking-wide text-center text-5xl lg:text-7xl  '>Our Initiative</h1>
            <p className=' text-white lg:text-center tracking-wider text-xl text-start lg:text-3xl px-2 lg:px-64 font-extralight  '>We empower students and professionals to engage in projects through collaboration</p>
        </div>

        {/* Goals */}
        <div className=' pt-32 w-4/5 lg:w-auto    mx-auto flex flex-col gap-5 '>
            <h1 className='text-yellow-400 uppercase font-bold tracking-wide text-center text-5xl lg:text-7xl  '>Goals</h1>
            <p className=' text-white lg:text-center tracking-wider text-xl text-start lg:text-3xl px-2 lg:px-64 font-extralight'>One of Lamina Studios' initiative is to help students and professionals engage in innovative and creative projects through collaboration. In 2016, we partnered with several institutions offering Computer Science, Computer Engineering, Graphic Arts, Multimedia Arts, Computer Animation, and other IT/Computing related courses in the Bicol Region, Philippines.  </p>
            <p className=' text-white lg:text-center tracking-wider text-xl text-start lg:text-3xl px-2 lg:px-64 font-extralight'> We are still expanding our partnerships with other institutions/organizations not only in the Philippines, but also around the world.</p>
        </div>


        {/* Event Photos part 1 */}
        <div className=' pt-32 w-4/5 lg:w-auto   mx-auto flex flex-col gap-5 '>
            <h1 className='text-yellow-400 uppercase font-bold tracking-wide text-center text-5xl lg:text-7xl  '>Event Photos</h1>
            <p className=' text-white lg:text-center tracking-wider text-xl text-start lg:text-3xl px-2 lg:px-64 font-extralight  '>Jemarwen Baldon as well as Rommin Callos (aka Arcee), Lamina Studios University Ambassador goes to every university and college in Albay, Philippines. Lamina Studios were invited in several IT-related seminars or workshops.</p>
            <p className=' text-white lg:text-center tracking-wider text-xl text-start lg:text-3xl px-2 lg:px-64 font-extralight '>Lamina Studios participated in several events held at different universities and colleges in Bicol Region, Philippines. Lamina Studios' members: Arcee Beah Ortega, Nikko B. Alamo, Brian Calma, and Jemarwen Baldon were invited to be the guest speakears at the events sponsored by Bicol University, Southern Luzon Technological College Foundation, Inc., Aquinas University and Lamina Studios. The events covered the following the topics: Virtual Reality, Computer Programming, Internet and Social Media Marketing, Game Development, Web Design and Development, Graphic Design and Animation, Mobile Application and Android Development. Lamina Studios will continue to reach out to more universities or colleges to extend our help to students or professionals who share the same vision with us. </p>
        </div>
        

        {/* Event Photos part 2 */}
        <div className=' pt-32  w-4/5 mx-auto  flex flex-col gap-5 pb-44 '>
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
        </div>
    </div>

  )
}