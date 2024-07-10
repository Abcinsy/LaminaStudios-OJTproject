import React from "react";
import Layout from "./Layout";
import TeamMember from "./Components/TeamMember";

export default function BadBotsRise() {
    return (
        <Layout title="Bad Bots Rise" backgroundImage={'/Art/badbotsrise_back.png'}>
                <div className="flex flex-col h-screen justify-center">
                    <div className="brightness-100 flex flex-col-1 justify-center ">
                        <img
                            src={`${location.origin}/Art/badbotsrise_logo.png`}
                            alt=""
                            className="h-72 mt-24"
                        />
                    </div>
                    <p className="text-white w-[70vh] font-bold text-lg text-center self-center italic">
                        {" "}
                        Bad Bots Rise is an action-packed platform-shooter.
                        Dodge bullets, evade traps and destroy enemies in a 2D
                        sidescroller environment. Explore different levels and
                        choose the right character for the right scenario.
                        Utilize keystones' passive abilities to enhance your
                        playstyle.{" "}
                    </p>
                </div>
                <h1 className="text-lamina-yellow text-center text-5xl mt-8 font-bold">
                    Bad Bots Rise Lore
                </h1>
                <p className="text-center text-lg text-white mt-12 mx-12">
                    Bad Bots Rise is an action-packed platform-shooter. Dodge
                    bullets, evade traps and destroy enemies in a 2D
                    side-scroller environment. Explore different levels and
                    choose the right character for the right scenario. Utilize
                    keystones' passive abilities to enhance your playstyle.{" "}
                </p>
                <div>
                    <h1 className="  text-yellow-500 text-center text-5xl mt-16 mb-4 font-bold">
                        Online Stores
                    </h1>
                    <p className="text-center text-white font-bold text-lg">
                        Download Bad Bots Rise from the following online stores:
                    </p>
                    <div class=" flex flex-wrap justify-center my-2 ">
                        <a
                            className="m-4 sm:m-8 px-6 py-3 text-white text-lg font-bold bg-gray-500 hover:scale-125 ease in-out hover:bg-gray-400 rounded-2xl"
                            href="https://store.steampowered.com/app/852920/"
                            target="_blank"
                        >
                            Steam
                        </a>
                    </div>
                </div>
                <h1 className="  text-yellow-500 text-center text-5xl mt-16 mb-4 font-bold">
                    BAD BOTS RISE TEAM
                </h1>
                <h5 className="  text-yellow-500 text-center text-3xl mt-8 mb-12 font-bold">
                    The Creative Team
                </h5>
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                    <TeamMember
                        name={"Ezekiel Marcelino"}
                        role={"Lead Game Developer & Game Designer"}
                        image={
                            "https://www.laminastudios.com/assets/images/ezekiel_160x147.png"
                        }
                    >
                        Ezekiel is the founder of High Leap Studios and solo
                        game developer of his first released video game on
                        Steam, Bad Bots Rise. He is also also a full time
                        student and president of an IT/Computing focused
                        organization.
                    </TeamMember>
                    <TeamMember
                        name={"Vinh Duong"}
                        role={"Game Artist"}
                        image={
                            "https://www.laminastudios.com/assets/images/vinh_160x147.png"
                        }
                    >
                        Vinh is a freelance artist. He graduated from
                        Pennsylvania State University with a Bachelors in Design
                        for Interdisciplinary Digital Studies. He has a strong
                        background in illustration and graphic design.
                    </TeamMember>
                    <TeamMember
                        name={"Emmanuel Lagumbay"}
                        role={"Game Composer"}
                        image={
                            "https://www.laminastudios.com/assets/images/emman_160x147.png"
                        }
                    >
                        Emman is an audio designer. He is also the founder of
                        The Summoners Orchestra (was featured by Riot Games).
                    </TeamMember>
                    <TeamMember
                        name={"April Gianan"}
                        role={"Game Producer"}
                        image={
                            "https://www.laminastudios.com/assets/images/pewpew-160x147.png"
                        }
                    >
                        April oversees the game development on a daily basis and
                        interacts with the team, made up of great talents
                    </TeamMember>
                </div>
        </Layout>
    );
}
