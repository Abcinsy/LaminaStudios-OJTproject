import React, { useState, useEffect, useRef } from 'react'

const BlackFooter = () => {

    // minimizing navbar size when not on top of page
    const [show, setShow ] = useState(true)


    const handleScroll = () => {

        const height = (window.innerHeight + window.scrollY)
        const bottom = Math.ceil(height) >= document.documentElement.scrollHeight

        if (bottom) {
          console.log('at the bottom');
          setShow(false)
        }

        if (window.scrollY <= ((height/2) + 350)){
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
                <img src={"/Art/LS_newlogo.png"} alt='logo'  className={`invert w-[250px] h-auto `} />
            </div>
            <p className={` my-10 text-amber-300 text-center uppercase font-semibold block `}>United States</p>
        </div>

        {/* contacts */}

        <div className={` mx-10 lg:text-left text-start     flex flex-col justify-center`}  >
            <h2 className="text-white lg:pb-20 pt-3 font-semibold text-xl uppercase">Contact Information</h2>
            <div className="flex text-start justify-start  ">
                <div className="grid grid-cols-1 gap-y-2">
                    <a href="mailto:support@laminastudios.com">
                        <div className="flex flex-row gap-2">
                            <p className="text-amber-300 font-semibold ">Support:</p>
                            <p className="text-white font-semibold ">support@laminastudios.com</p>
                        </div>
                    </a>
                    <a href="mailto:info@laminastudios.com">
                        <div className="flex flex-row gap-2">
                            <p className="text-amber-300 font-semibold ">Querry:</p>
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

        <div className={` mx-10 lg:text-left text-start block   `}  >
            <h2 className="hidden lg:block text-white lg:pb-20 pt-3 font-semibold text-xl uppercase">Social Platforms</h2>
            <div className="flex text-center ">
                <div className="flex flex-row lg:flex-col gap-y-2 lg:gap-x-0 gap-x-20 pt-5 lg:pt-0 ">
                    <a href="http://Discord.com" className="text-white ">
                        <div className="flex flex-row gap-5 transition hover:text-amber-500 duration-200   ">
                            <i className="bi bi-discord text-white"></i>
                            <p className="hidden lg:block" >Discord</p>
                        </div>
                    </a>

                    <a className="text-white " href="http://Facebook.com">
                        <div className="flex flex-row gap-5 transition hover:text-amber-500 duration-200   ">
                            <i className="bi bi-facebook text-white"></i>
                            <p className="hidden lg:block" >Facebook</p>
                        </div>
                    </a>

                    <a className="text-white " href="http://Instagram.com">
                        <div className="flex flex-row gap-5 transition hover:text-amber-500 duration-200   ">
                            <i className="bi bi-instagram text-white"></i>
                            <p className="hidden lg:block" >Instagram</p>
                        </div>
                    </a>

                    <a className="text-white " href="http://TikTok.com">
                        <div className="flex flex-row gap-5 transition hover:text-amber-500 duration-200   ">
                            <i className="bi bi-tiktok text-white"></i>
                            <p className="hidden lg:block" >TikTok</p>
                        </div>
                    </a>

                    <a className="text-white " href="http://Twitter.com">
                        <div className="flex flex-row gap-5 transition hover:text-amber-500 duration-200   ">
                            <i className="bi bi-twitter text-white"></i>
                            <p className="hidden lg:block" >Twitter</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>


        <div>
            <a href="#" className='text-white text-center px-5 py-4 mx-10 uppercase text-base font-bold rounded-full bg-gray-500 '> Terms and Conditions </a>
            <a href="#" className='text-white text-center px-5 py-4 mx-10 uppercase text-base font-bold rounded-full bg-gray-500 '> Privacy Statement</a>
        </div>
        
        <div>
            <p className="text-white  py-4  text-center text-lg uppercase font-semibold ">© 2022 Lamina Studios, LLC. All Rights Reserved.</p>
        </div>

    </div>

</footer>

    )
  }

  export default BlackFooter


//   <footer className="">
//   <div className="hidden lg:flex flex-col md:flex-row justify-around align-middle items-center uppercase font-bold whitespace-nowrap  ">
//       <img src={"/Art/LS_newlogo.png"} alt='logo' width="100px" height="100px" className="invert " />
//       <p className="my-10 text-amber-300 ">United States</p>
//                 <div className="block lg:hidden  left-1/2 -ml-0.5 h-0.5 w-80  px-7 bg-gray-600"></div>
//       <p className="  text-lg  ">
//           © 2022 lamina studios, llc. all rights reserved.
//       </p>
//       <div >
//           <a href="#" className="px-6 py-4 rounded-full bg-gray-600  hover:bg-gray-400  active:bg-gray-900 cursor-pointer">Terms and Conditions</a>
//       </div>

//       <div >
//           <a href="#" className="px-6 py-4 rounded-full bg-gray-600  hover:bg-gray-400 active:bg-gray-900 cursor-pointer">Privacy Statement</a>
//       </div>
//   </div>
// </footer>
