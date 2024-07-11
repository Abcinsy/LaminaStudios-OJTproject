import SiteLayout from "../../Layouts/SiteLayout";
import Initiatives from "./Partials/Initiatives";

export default function AboutUs() {
    return (
        <SiteLayout title={'About Us'} backgroundImage={'Art/06.png'}>
                <div className="flex flex-col lg:px-16 md:px-10 relative overflow-x-clip">
                    <div className="flex md:flex-row flex-col">
                        <div className="flex flex-col basis-1/2 items-center w-full md:w-1/2 ">
                            <h2 className="text-lamina-yellow font-bold text-7xl text-center">
                                Our Story
                            </h2>
                            <div className="flex flex-col-1 justify-center items-center">
                                <img
                                    src={"/images/lamina_logo_yellow.png"}
                                    alt="Lamina Logo"
                                    className="w-80 "
                                />
                            </div>
                        </div>
                        <div className="basis-1/2 font-semibold">
                            <p className="text-lg text-white text-center pb-4 md:px-0 px-16">
                                Lamina Studios was founded in January 2016 when
                                the development of Dungeon Souls was in
                                transition of October 2015. The studio continued
                                the development of the said game led by April
                                Gianan as Game Producer. April teamed up with
                                Diogo Braga and became the Lead Game Developer
                                of Dungeon Souls. During the transition, the
                                team collaborated with Igor Grincu (as Pixel
                                Artist) and with many other collaborators from
                                all over the world,
                            </p>
                            <p className="text-lg text-white text-center pb-4 md:px-0 px-16">
                                Lamina Studios' logo was designed by Paul
                                Benedict Galvez, a De La Salle University
                                Digital and Multimedia Arts student from the
                                Philippines. The logo represents the creative
                                and innovative team behind every project. Each
                                member of the team demonstrates unique skill and
                                talent which contributes immensely in fulfilling
                                our project goals. The collaborative efforts of
                                the team members result to a more productive and
                                successful projects:
                            </p>
                            <p className="text-lg text-white text-center pb-4 md:px-0 px-16">
                                Dungeon Souls is the first indie game developed
                                by Lamina Studios. While the game development
                                continues, more features were added to the game
                                such as the following: Steam Trading Cards,
                                Emoticons, Steam Achievements, Split Screen,
                                Controller Support, Logitech keyboard and mouse
                                FX integration, Alienware keyboard FX as well as
                                Arx Control. Dungeon Souls final stage has been
                                finished were more bug fixes and numerous
                                patches uploaded. The Arcane Fofge, Merlin's
                                story and the final Boss scenes were added
                                features in the final stage.
                            </p>
                            <p className="text-lg text-white text-center pb-4 md:px-0 px-16">
                                In December. 2, 2016, Dungeon Souls final build
                                was released and to this day, development
                                continues with UX/UI redesign, improvement of
                                controller layout, with a plan of DLC, and so
                                much more for the year 2017.
                            </p>
                        </div>
                    </div>

                    <Initiatives />
                </div>
        </SiteLayout>
    );
}
