import React, { useState, useEffect, useRef } from 'react'

const BlackFooter = () => {

    // minimizing navbar size when not on top of page
    const [show, setShow] = useState(true)

    const handleScroll = () => {

        const height = (window.innerHeight + window.scrollY)
        const bottom = Math.ceil(height) >= document.documentElement.scrollHeight

        if (bottom) {
            console.log('at the bottom');
            setShow(false)
        }

        if (window.scrollY <= ((height / 2) + 350)) {
            setShow(true)
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);






    return (
        <footer onScroll={handleScroll} className={` left-0 bottom-0 w-full static   transition-all duration-300  bg-black py-10  text-white text-center `}>

            <div className={` grid gap-y-10  lg:grid-cols-3 justify-around items-start  whitespace-nowrap  flex-wrap  grid-cols-1 `}>

                <div>
                    <div className="flex justify-center">
                        <img src={"/Art/LS_newlogo.png"} alt='logo' className={`invert w-[250px] h-auto `} />
                    </div>
                    <p className={` my-10 text-amber-300 text-center uppercase font-semibold block `}>United States</p>
                </div>

                {/* contacts */}

                <div className="mx-10 lg:text-left text-start block">
                    <h2 className="lg:ml-0 text-white lg:pb-5 pt-3 font-semibold text-xl uppercase">Contact Information</h2>
                    <div className="mt-6 flex text-start justify-start  ">
                        <div className="grid grid-cols-1 gap-y-2">
                            <a href="mailto:support@laminastudios.com">
                                <div className="flex flex-row gap-2">
                                    <p className="text-amber-300 font-semibold ">Support:</p>
                                    <p className="text-white font-semibold ">support@laminastudios.com</p>
                                </div>
                            </a>
                            <a href="mailto:info@laminastudios.com">
                                <div className="flex flex-row gap-2">
                                    <p className="text-amber-300 font-semibold ">Query:</p>
                                    <p className="text-white font-semibold ">info@laminastudios.com</p>
                                </div>
                            </a>
                            <a href="mailto:business@laminastudios.com">
                                <div className="flex flex-row gap-2">
                                    <p className="text-amber-300 font-semibold ">Business:</p>
                                    <p className="text-white font-semibold ">business@laminastudios.com</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* social links */}

                <div className="mx-10 lg:text-left text-start block">
                    <h2 className="lg:ml-0 text-white lg:pb-5 pt-3 font-semibold text-xl uppercase">Social Platforms</h2>
                    <div className="mt-5 mb-10 flex lg:flex-col lg:gap-y-2 lg:gap-x-0">
                    <a className="px-5 text-white flex items-center mb-3 lg:mb-0" href="http://Discord.com">
                            <i className="bi bi-discord text-white"></i>
                            <p className="ml-3 lg:ml-0 lg:block text-white">Discord</p>
                        </a>

                        <a className="px-5 text-white flex items-center mb-3 lg:mb-0" href="http://Facebook/laminastudios.official">
                            <i className="bi bi-facebook text-white"></i>
                            <p className="ml-3 lg:ml-0 lg:block text-white">Facebook</p>
                        </a>

                        <a className="px-5 text-white flex items-center mb-3 lg:mb-0" href="http://Instagram.com/laminastudios">
                            <i className="bi bi-instagram text-white"></i>
                            <p className="ml-3 lg:ml-0 lg:block text-white">Instagram</p>
                        </a>

                        <a className="px-5 text-white flex items-center mb-3 lg:mb-0" href="http://TikTok.com">
                            <i className="bi bi-tiktok text-white"></i>
                            <p className="ml-3 lg:ml-0 lg:block text-white">TikTok</p>
                        </a>

                        <a className="px-5 text-white flex items-center mb-3 lg:mb-0" href="http://Twitter.com">
                            <i className="bi bi-twitter text-white"></i>
                            <p className="ml-3 lg:ml-0 lg:block text-white">Twitter</p>
                        </a>
                    </div>
                </div>


            </div>

            <div className="flex justify-center space-x-4">
                <a href="#" className="text-white text-center px-7 py-4 uppercase text-base font-bold rounded-full bg-gray-500">Terms and Conditions</a>
                <a href="#" className="text-white text-center px-7 py-4 uppercase text-base font-bold rounded-full bg-gray-500">Privacy Statement</a>
            </div>

            <div className="pt-10 flex justify-center">
                <p className="text-white py-3 text-center text-lg uppercase text-sm">© 2024 Lamina Studios, LLC. All Rights Reserved.</p>
            </div>

        </footer>

    )
}

export default BlackFooter