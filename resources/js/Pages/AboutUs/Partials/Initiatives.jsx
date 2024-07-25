import React from 'react';

export default function Initiatives() {
    return (
        <div className="w-4/5 mx-auto pt-20 pb-20">
                <div className="flex flex-wrap justify-center gap-8">
                    {/* Our Initiatives */}
                    <div className="flex-1 min-w-[300px] max-w-[600px]">
                        <h2 className="text-yellow-400 uppercase font-bold tracking-wide text-center text-6xl mb-4">Our Initiatives</h2>
                        <div className="bg-brown bg-opacity-0 font-sans p-6 rounded-lg">
                            <p className="text-white text-justify tracking-wider text-medium font-manrope">
                                We empower students and professionals to engage in projects through collaboration.
                            </p>
                        </div>
                    </div>
                    {/* Goals */}
                    <div className="flex-1 min-w-[300px] max-w-[600px]">
                        <h2 className="text-yellow-400 uppercase font-bold tracking-wide text-center text-6xl mb-4">Our Goals</h2>
                        <div className="bg-brown bg-opacity-0 font-sans p-6 rounded-lg">
                            <p className="text-white text-justify tracking-wider text-medium font-manrope">
                                One of Lamina Studios' initiatives is to help students and professionals engage in innovative and creative projects through collaboration. In 2016, we partnered with several institutions offering Computer Science, Computer Engineering, Graphic Arts, Multimedia Arts, Computer Animation, and other IT/Computing related courses in the Bicol Region, Philippines.
                            </p>
                            <p className="text-white text-justify tracking-wider text-medium font-manrope">
                                We are still expanding our partnerships with other institutions/organizations not only in the Philippines but also around the world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    );
}
