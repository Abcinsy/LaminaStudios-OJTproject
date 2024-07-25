import { useState, useEffect, useRef } from 'react';
import SiteLayout from "../../Layouts/SiteLayout";
import Initiatives from "./Partials/Initiatives";
import Event from "./Partials/Event";

export default function AboutUs() {
    // * Summarized text
    // const paragraphs = [
    //     "Lamina Studios was founded in January 2016, following the transition of Dungeon Souls' development, which began in October 2015. The studio continued the game's development under the leadership of April Gianan as Game Producer and Diogo Braga as Lead Game Developer, with Igor Grincu as Pixel Artist and other global collaborators. The studio's logo, designed by Paul Benedict Galvez, reflects the team's creativity and innovation.",
    //     "Dungeon Souls, Lamina Studios' debut indie game, saw several feature additions, including Steam Trading Cards, Emoticons, Achievements, Split Screen, Controller Support, and various FX integrations. The final stage included significant updates like the Arcane Forge, Merlin's story, and final Boss scenes. The game's final build was released on December 2, 2016, and development continued with plans for UX/UI redesigns, controller layout improvements, and potential DLCs throughout 2017."
    // ];

    const paragraphs = [
        "Lamina Studios was founded in January 2016 when the development of Dungeon Souls was in transition of October 2015. The studio continued the development of the said game led by April Gianan as Game Producer. April teamed up with Diogo Braga and became the Lead Game Developer of Dungeon Souls. During the transition, the team collaborated with Igor Grincu (as Pixel Artist) and with many other collaborators from all over the world,",
        "Lamina Studios' logo was designed by Paul Benedict Galvez, a De La Salle University Digital and Multimedia Arts student from the Philippines. The logo represents the creative and innovative team behind every project. Each member of the team demonstrates unique skill and talent which contributes immensely in fulfilling our project goals. The collaborative efforts of the team members result to a more productive and successful projects:",
        "Dungeon Souls is the first indie game developed by Lamina Studios. While the game development continues, more features were added to the game such as the following: Steam Trading Cards, Emoticons, Steam Achievements, Split Screen, Controller Support, Logitech keyboard and mouse FX integration, Alienware keyboard FX as well as Arx Control. Dungeon Souls final stage has been finished were more bug fixes and numerous patches uploaded. The Arcane Fofge, Merlin's story and the final Boss scenes were added features in the final stage.",
        "In December. 2, 2016, Dungeon Souls final build was released and to this day, development continues with UX/UI redesign, improvement of controller layout, with a plan of DLC, and so much more for the year 2017."
    ];

    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [containerHeight, setContainerHeight] = useState('auto');

    const textContainerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (textContainerRef.current) {
            // Calculate the height based on the content of the first 150 characters + button height
            const contentHeight = textContainerRef.current.scrollHeight;
            setContainerHeight(isExpanded ? 'auto' : `${Math.min(contentHeight, 200)}px`);
        }
    }, [isExpanded, paragraphs, isMobile]);

    const handleReadMoreClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <SiteLayout title={'About Us'} backgroundImage={'Art/06.png'}>
            {/* Hero Section */}
            <section className="relative min-h-[80vh] bg-cover bg-center rounded-xl mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 overflow-hidden">
                <div className="absolute inset-x-0 top-[10px] bottom-[10px] bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url("Art/Archer Steam.png")' }}>
                    <div className="relative h-full w-full flex items-center">
                        <div
                            className={`ml-10 transition-all duration-500 ease-in-out ${isExpanded ? 'w-2/3' : 'w-1/3'}`}
                        >
                            <div className="bg-palette bg-opacity-80 text-white p-4 sm:p-6 rounded-lg h-[400px] flex flex-col">
                                <div
                                    className="text-justify font-manrope mb-4 text-sm sm:text-base md:text-lg overflow-y-auto flex-grow"
                                    ref={textContainerRef}
                                >
                                    <p className='text-3xl font-bold mb-4'>
                                        OUR STORY
                                    </p>
                                    {isExpanded
                                        ? paragraphs.map((paragraph, index) => (
                                            <p key={index} className="indent-12 mb-4">{paragraph}</p>
                                        ))
                                        : (
                                            <p className="indent-12">
                                                {isMobile
                                                    ? paragraphs[0].substring(0, 150) + '...'
                                                    : paragraphs[0].substring(0, 300) + '...'}
                                            </p>
                                        )
                                    }
                                </div>
                                <button
                                    onClick={handleReadMoreClick}
                                    className="inline-block px-4 py-2 text-black font-semibold rounded-lg text-sm hover:bg-yellow-500 hover:text-white bg-white transition duration-300 mt-auto"
                                >
                                    {isExpanded ? 'READ LESS' : 'READ MORE'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Initiatives Section */}
            <div className="relative overflow-x-clip bg-palette text-white">
                <Initiatives />
            </div>

            {/* Events Section */}
            <Event />

        </SiteLayout>
    );
}
