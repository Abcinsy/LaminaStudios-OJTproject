import { useState } from 'react';
import SiteLayout from "../../Layouts/SiteLayout";
import Initiatives from "./Partials/Initiatives";
import Event from "./Partials/Event";

export default function AboutUs() {
    const paragraphs = [
        "Lamina Studios was founded in January 2016 when the development of Dungeon Souls was in transition of October 2015. The studio continued the development of the said game led by April Gianan as Game Producer. April teamed up with Diogo Braga and became the Lead Game Developer of Dungeon Souls. During the transition, the team collaborated with Igor Grincu (as Pixel Artist) and with many other collaborators from all over the world.",
        "Lamina Studios' logo was designed by Paul Benedict Galvez, a De La Salle University Digital and Multimedia Arts student from the Philippines. The logo represents the creative and innovative team behind every project. Each member of the team demonstrates unique skill and talent which contributes immensely in fulfilling our project goals. The collaborative efforts of the team members result to a more productive and successful projects.",
        "Dungeon Souls is the first indie game developed by Lamina Studios. While the game development continues, more features were added to the game such as the following: Steam Trading Cards, Emoticons, Steam Achievements, Split Screen, Controller Support, Logitech keyboard and mouse FX integration, Alienware keyboard FX as well as Arx Control. Dungeon Souls final stage has been finished were more bug fixes and numerous patches uploaded. The Arcane Fofge, Merlin's story and the final Boss scenes were added features in the final stage.",
        "In December. 2, 2016, Dungeon Souls final build was released and to this day, development continues with UX/UI redesign, improvement of controller layout, with a plan of DLC, and so much more for the year 2017."
    ];

    const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

    const handlePrevClick = () => {
        if (currentParagraphIndex > 0) {
            setCurrentParagraphIndex(currentParagraphIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentParagraphIndex < paragraphs.length - 1) {
            setCurrentParagraphIndex(currentParagraphIndex + 1);
        }
    };

    return (
        <SiteLayout title={'About Us'} backgroundImage={'Art/06.png'}>
            {/* Hero Section */}
                <section className="hero-section relative h-screen">
                    <h1 className="font-display font-bold absolute right-8 text-7xl mb-2 mt-10 text-lamina-yellow border-yellow-950">OUR STORY</h1>
                    <div className="absolute right-8 top-20 w-1/3 h-auto px-3">
                        <div className="bg-palette bg-opacity-70 relative text-xl font-sans text-white mb-4 mt-12 p-4 rounded-lg h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent custom-scrollbar">
                            <p className="text-justify font-manrope mb-4">
                                {paragraphs[currentParagraphIndex]}
                            </p>
                            <div className="flex justify-between mt-4">
                                <button
                                    onClick={handlePrevClick}
                                    className="bg-transparent text-white text-xl px-2 py-1 hover:bg-yellow-600 hover:text-black transition duration-300 ease-in-out"
                                    disabled={currentParagraphIndex === 0}
                                >
                                    &larr;
                                </button>
                                <button
                                    onClick={handleNextClick}
                                    className="bg-transparent text-white text-xl px-2 py-1 hover:bg-yellow-600 hover:text-black transition duration-300 ease-in-out"
                                    disabled={currentParagraphIndex === paragraphs.length - 1}
                                >
                                    &rarr;
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            {/* Initiatives Section */}
            <div className="relative overflow-x-clip bg-palette text-white">
                <Initiatives />
            </div>
            <Event />
        </SiteLayout>
    );
}
