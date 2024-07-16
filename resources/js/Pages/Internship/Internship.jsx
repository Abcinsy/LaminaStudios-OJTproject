import SiteLayout from "../../Layouts/SiteLayout";
import { InertiaLink } from '@inertiajs/inertia-react'; // Import InertiaLink

export default function Internship() {
    // Example authentication status, replace with actual authentication check
    const isAuthenticated = false; // Replace with your actual authentication check logic

    const applyNowButton = isAuthenticated ? (
        <InertiaLink href="/application" className='text-gray-950 text-center px-10 py-3 mx-10 uppercase text-base rounded-full bg-yellow-400'>
            APPLY NOW
        </InertiaLink>
    ) : (
        <InertiaLink href="/login" className='text-gray-950 text-center px-10 py-3 mx-10 uppercase text-base rounded-full bg-yellow-400'>
            APPLY NOW
        </InertiaLink>
    );

    return (
        <SiteLayout title={'Internship'} backgroundImage={'Art/09.png'}>
            <div className="flex flex-col lg:px-16 md:px-10 relative overflow-x-clip">
                <div>
                    <div className='pt-32 w-4/5 lg:w-auto mx-auto flex flex-col gap-5'>
                        <h1 className='text-yellow-400 uppercase font-bold tracking-wide text-center text-5xl lg:text-7xl'>Internship</h1>
                        <p className='text-white lg:text-center tracking-wider text-xl text-start lg:text-3xl px-2 lg:px-64 font-extralight'>We offer internship opportunities as well as free training and mentoring to both students and professionals.</p>
                    </div>

                    {/* Apply Now Button */}
                    <div className="flex flex-row justify-center mt-16 mb-20 ">
                        <button className='text-gray-950 text-center px-10 py-3 mx-10 uppercase text-base rounded-full bg-yellow-400 '>
                            APPLY NOW
                        </button>
                    </div>

                    {/* Photos */}
                    <div className=' pt-40 w-4/5 mx-auto  flex flex-col gap-5 pb-44 '>
                        <h1 className='text-yellow-400 uppercase font-bold tracking-wide text-center text-5xl lg:text-7xl  '>Internship Photos</h1>
                        {/* <p className=' text-white text-center text-xl px-2 lg:px-64 font-extralight  '>Photo Credits: University of Santo Tomas - Legazpi City, Bicol University, SLTCFI</p> */}

                        {/* photo grid */}
                        <div className='pt-10 flex flex-wrap flex-col lg:flex-row gap-y-2'>
                            <div data-open-modal className='basis-1/3 px-1 aspect-square'>
                                <img src="/images/internship-3.jpg" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className='basis-1/3 px-1 aspect-square'>
                                <img src="/images/internship-6.png" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className='basis-1/3 px-1 aspect-square'>
                                <img src="/images/internship-4.jpg" alt="" className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </SiteLayout>
    );
}
