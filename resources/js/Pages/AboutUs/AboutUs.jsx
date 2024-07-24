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

    return (
        <SiteLayout title={'About Us'} backgroundImage={'Art/06.png'}>
            {/* Hero Section */}
            <div className="bg-palette bg-opacity-20 bg-cover">
            <section className="hero-section relative h-screen">
                <h1 className="font-display font-bold absolute right-8 bottom-30 text-6xl mb-2 text-lamina-yellow border-yellow-950">OUR STORY</h1>
                <div className="absolute left-8 center-right top-20 w-90 h-auto px-3">
                    <div className="text-right flex flex-col justify-between font-sans">
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-xl text-white mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </section>
            </div>
            {/* Initiatives Section */}
            <div className="relative overflow-x-clip bg-palette text-white">
            <Initiatives />
            </div>
            <Event />
        </SiteLayout>
    );
}
