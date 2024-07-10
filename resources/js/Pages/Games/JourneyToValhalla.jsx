import React from "react";
import Layout from "./Layout";
import TeamMember from "./Components/TeamMember";

export default function JourneyToValhalla() {
    return (
        <Layout title="Journey to Valhalla" backgroundImage={"/Art/jtv.png"}>
            <div className="flex flex-col h-screen justify-center">
                <div className="brightness-100 flex flex-col-1 justify-center">
                    <p className="uppercase font-extrabold text-7xl mb-8 text-lamina-yellow">
                        Journey to Valhalla
                    </p>
                </div>
                <p className="text-white w-[80vh] font-bold text-lg text-center self-center italic">
                    {" "}
                    Journey to Valhalla is a Hack and Slash adventure game
                    inspired by Dark Souls and Necropolis. Experience a game
                    with hardcore melee combat whilst exploring beautiful
                    environments.{" "}
                </p>
            </div>
            <h1 className="text-lamina-yellow text-center text-5xl mt-8 font-bold">
                Journey to Valhalla Lore
            </h1>
            <p className="text-center text-lg text-white mt-12 mx-12">
                Journey to Valhalla is a Hack and Slash adventure game inspired
                by Dark Souls and Necropolis. Experience a game with hardcore
                melee combat whilst exploring beautiful environments.{" "}
            </p>
            <div>
                <h1 className="  text-yellow-500 text-center text-5xl mt-16 mb-4 font-bold">
                    Online Stores
                </h1>
                <p className="text-center text-white font-bold text-lg">
                    Download Journey to Valhalla from the following online
                    stores:
                </p>
                <div class=" flex flex-wrap justify-center my-2 ">
                    <a
                        className="m-4 sm:m-8 px-6 py-3 text-white text-lg font-bold bg-gray-500 hover:scale-125 ease in-out hover:bg-gray-400 rounded-2xl"
                        href="http://store.steampowered.com/app/851240/"
                        target="_blank"
                    >
                        Steam
                    </a>
                </div>
            </div>
            <h1 className="  text-yellow-500 text-center text-5xl mt-16 mb-4 font-bold">
                JOURNEY TO VALHALLA TEAM
            </h1>
            <h5 className="  text-yellow-500 text-center text-3xl mt-8 mb-12 font-bold">
                The Creative Team
            </h5>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <TeamMember
                    name={"Christian Jay Llaneta"}
                    role={"Lead Game Developer & Game Designer"}
                >
                    Christian is the lead developer of Journey to Valhalla.
                </TeamMember>
                <TeamMember
                    name={"Enzo Austria"}
                    role={"Lead Game Artist"}
                >
                    Enzo is the lead game artist of Journey to Valhalla.
                </TeamMember>
                <TeamMember
                    name={"Sean Garavan"}
                    role={"Game Composer"}
                >
                    Sean is the Game Composer for Journey to Valhalla.
                </TeamMember>
                <TeamMember
                    name={"April Gianan"}
                    role={"Game Producer"}
                    image={
                        "https://www.laminastudios.com/assets/images/pewpew-160x147.png"
                    }
                >
                    April oversees Journey to Valhalla development on a daily
                    basis. She is the game producer of the game and make sure
                    she gets the right talent for the team.
                </TeamMember>
            </div>
        </Layout>
    );
}
