import React from 'react';

export default function Initiatives() {
    return (
        <div className="w-4/5 mx-auto pt-20 pb-20 mt-32">
            <div className="flex flex-wrap justify-center gap-8">
                {/* Our Initiatives */}
                <div className="flex-1 min-w-[300px] max-w-[600px]">
                    <h2 className="text-yellow-400 uppercase font-bold tracking-wide text-center text-6xl mb-4">Our Initiatives</h2>
                    <div className="bg-brown bg-opacity-0 font-sans p-6 rounded-lg" style={{ textIndent: '2em' }}>
                        <p className="text-white text-justify tracking-wider text-medium font-manrope">
                            We empower students and professionals to engage in projects through collaboration, offering comprehensive internship programs that allow students to gain practical experience in their chosen fields.
                            By working on actual projects, interns at Lamina Studios develop their technical abilities, learn industry-standard practices, and build a portfolio that showcases their capabilities.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <a href="/internship" className="inline-block px-6 py-2 border-2 border-yellow-400 text-white font-bold rounded hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
                            Learn More
                        </a>
                    </div>
                </div>
                {/* Goals */}
                <div className="flex-1 min-w-[300px] max-w-[600px]">
                    <h2 className="text-yellow-400 uppercase font-bold tracking-wide text-center text-6xl mb-4">Our Goals</h2>
                    <div className="bg-brown bg-opacity-0 font-sans p-6 rounded-lg" style={{ textIndent: '2em' }}>
                        <p className="text-white text-justify tracking-wider text-medium font-manrope">
                            One of Lamina Studios' initiatives is to help students and professionals engage in innovative and creative projects through collaboration. In 2016, we partnered with several institutions offering Computer Science, Computer Engineering, Graphic Arts, Multimedia Arts, Computer Animation, and other IT/Computing related courses in the Bicol Region, Philippines.
                        </p>
                        <br />
                        <p className="text-white text-justify tracking-wider text-medium font-manrope">
                            We are still expanding our partnerships with other institutions/organizations not only in the Philippines but also around the world.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
