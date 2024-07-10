import React from "react";
import Layout from "./Layout";

export default function DungeonSouls() {
    return (
        <Layout
            title={"Dungeon Souls"}
            backgroundImage={"/Art/Projects_Games.png"}
        >
            <div className="brightness-150 flex flex-col-1 justify-center ">
                <img
                    src={`${location.origin}/Art/DS.png`}
                    alt=""
                    className="w-80 h-full mt-24"
                />
            </div>
            <p className="text-white font-bold text-lg text-center italic">
                {" "}
                Dungeon Souls is an action-adventure roguelike dungeon crawler
                game.{" "}
            </p>
            <div className="block">
                <div className="flex flex-wrap justify-center">
                    <a
                        className="m-4 sm:m-8 px-6 py-3 text-white text-lg font-bold bg-gray-500 hover:scale-125 ease in-out hover:bg-gray-400 rounded-2xl"
                        target="_blank"
                        href="https://www.indiedb.com/games/dungeon-souls/presskit"
                    >
                        Presskit
                    </a>
                    <a
                        className="m-4 sm:m-8 px-6 py-3 text-white text-lg font-bold bg-gray-500 hover:scale-125 ease in-out hover:bg-gray-400 rounded-2xl"
                        target="_blank"
                        href="https://dungeonsouls.fandom.com/wiki/Dungeon_Souls_Wiki"
                    >
                        Gamepedia
                    </a>
                    <a
                        className="m-4 sm:m-8 px-6 py-3 text-white text-lg font-bold bg-gray-500 hover:scale-125 ease in-out hover:bg-gray-400 rounded-2xl"
                        target="_blank"
                        href="https://dungeonsouls.myspreadshop.com/"
                    >
                        Merch Store
                    </a>
                </div>
            </div>
            <div className="flex flex-wrap justify-center ">
                <img
                    src={`${location.origin}/Art/logowhite.png`}
                    alt="lamina logo"
                    className="w-32 h-full my-12"
                />
                <img
                    src={`${location.origin}/Art/blackshell.png`}
                    alt="black shell logo"
                    className="mx-12 w-32 h-full my-12"
                />
            </div>
            <div className="grid justify-center mt-52">
                <img
                    src="https://cdn.akamai.steamstatic.com/steam/apps/383230/ss_ad65023b464cc8e821ddcf7b35d0d1f7742393af.600x338.jpg?t=1667440082"
                    alt=""
                    className="w-max-[2000px] h-max-[750px] justify-center"
                />
            </div>
            <h1 className="text-white text-center text-5xl mt-8 font-bold">
                Dungeon Souls Story
            </h1>
            <p className="text-center text-lg text-white mt-12 mx-12">
                The Dungeon is a mythical place that holds fallen heroes captive
                forever only if they can counter the dungeon’s dark forces. Each
                of the fallen heroes are legends of the overworld that once
                decided to explore the dungeon, with promises of great treasure
                and honor, and succumbed to death. Following their death, their
                souls ended up getting trapped in the Dungeon, where the journey
                begins.{" "}
            </p>
            <p className="text-center text-lg text-white mt-12 mx-12">
                The main story consists of a group of heroes who died inside of
                a dungeon, getting their souls trapped and having to fight for
                them to escape. Long before these events, a main-side story
                occurred: There was once a very powerful wizard, by the name of
                Merlin, who lived in a village with his daughter Celestia.
                Celestia was known for being a very friendly, thoughtful and
                caring person, as well as having a tendency for playing in the
                woods. On one tragic day, Merlin came back home to find that his
                daughter was polymorphed into an owl, whilst playing on the
                woods. Merlin tried spell after spell to free Celestia from the
                curse, but to no avail. Upon days of trying, Merlin decided to
                travel around the world in search for a cure. Upon arriving on a
                local village, Merlin found out about a mysterious dungeon that
                just appeared out of nowhere, said to have powerful artifacts
                and immense treasure, which made him curious to explore. He set
                course to travel inside the dungeon and, after defeating several
                waves of evil entities, he was able to meet a young-looking
                sorceress – Selene. She asked him what he was doing in her
                dungeon and, after explaining, she began telling him how the
                dungeon worked. It was powered by a core that fed itself from
                souls. However, due to its vile nature, these souls had to
                possess heroic-like characteristics. These were harnessed using
                Soul Orbs. The only issue of the contraption was that, every
                once in a while, the souls of the heroes would return to their
                corpses and try to escape. To do so, they’d have to collect
                their respective Soul Orb from the Soul Guardian and pass a
                Judgement Trial to fight Selene. If all heroes managed to do so,
                the dungeon would lose its power and die. As such, Selene
                offered Merlin a deal: she would give him access to all
                knowledge available in the dungeon’s Forbidden Library, as long
                as he’d help keeping the heroes trapped in the dungeon. In an
                act of despair, Merlin accepted her offer and brought Celestia
                alongside to perform tests.
            </p>
            <div className="flex flex-wrap justify-center mt-12">
                <a
                    className="m-4 sm:m-8 px-6 py-3 text-white text-lg font-bold bg-gray-500 hover:scale-125 ease in-out hover:bg-gray-400 rounded-2xl"
                    href="https://store.steampowered.com/app/383230/Dungeon_Souls/"
                    target="_blank"
                >
                    Download Now
                </a>
            </div>
            <h1 className="text-yellow-500 text-center text-5xl mt-12 font-bold">
                Awards and Recognition
            </h1>
            <div class="flex flex-wrap justify-center px-16">
                <div class="bg-white  md:bg-white mt-12 flex container justify-around rounded-xl border-yellow-500">
                    <img
                        src="https://www.laminastudios.com/assets/images/dwge2015-1-600x420.png"
                        alt="Award 1"
                        class="xs:w-28 bg-white sm:w-52 md:w-64 lg:w-80 rounded-xl  "
                    />
                    <img
                        src="https://www.laminastudios.com/assets/images/gdap-1-600x420.png"
                        alt="Award 2"
                        class="xs:w-28 bg-white sm:w-52 md:w-64 lg:w-80 rounded-xl "
                    />
                    <img
                        src="https://www.laminastudios.com/assets/images/haogamer-2-600x420.png"
                        alt="Award 3"
                        class="xs:w-28 bg-white rounded-xl sm:w-52 md:w-64 lg:w-80  "
                    />
                </div>
                <h1 className="text-yellow-500 text-center text-5xl my-12 font-bold">
                    Press Mentions
                </h1>
                <div className="flex justify-between mx-8 gap-4">
                    <div className="w-full text-white backdrop-blur border-yellow-500 border  flex flex-col p-12 my-4  rounded-xl ">
                        <h3 className="font-semibold my-4 mx-2 py-4 px-2 ">
                            "It's splashy, frantic and hugely enjoyable, and its
                            classes are constructed with smart consideration of
                            their asymmetry."
                        </h3>
                        <p className="italic text-lamina-yellow font-bold my-4 mx-2 py-4 px-2">
                            - Marsh Davies of Rock Paper Shotgun
                        </p>
                    </div>

                    <div className="w-full text-white backdrop-blur border-yellow-500 border  flex flex-col p-12 my-4  rounded-xl ">
                        <h3 className="font-semibold my-4 mx-2 py-4 px-2 ">
                            "Dungeon Souls is a very cool dungeon crawling hack
                            n slash roguelike featuring gorgeous pixel art
                            animation, challenging gameplay, big bosses,
                            procedurally generated level design and permadeath."
                        </h3>
                        <p className="italic text-lamina-yellow font-bold my-4 mx-2 py-4 px-2  ">
                            - Calum Fraser of Alpha Beta Gamer
                        </p>
                    </div>

                    <div className="w-full text-white backdrop-blur border-yellow-500 border  flex flex-col p-8 my-4  rounded-xl">
                        <h3 className="font-semibold my-4 mx-2 py-4 px-2 ">
                            "It also helps that the game is addictive in its own
                            right, thanks to the responsive combat system and
                            constant flow of action."
                        </h3>
                        <p className="italic text-lamina-yellow font-bold my-4 mx-2 py-4 px-2">
                            - Brian Dumlao of Worth Playing
                        </p>
                    </div>
                </div>

                <div class="flex flex-wrap justify-center ">
                    <h1 className="text-yellow-500 text-center text-5xl my-16 font-bold">
                        Achievements and Participation
                    </h1>
                    <div className="mx-4">
                        <ul className="grid grid-cols-2 font-bold container border border-yellow-500 rounded-xl py-8 text-lamina-yellow backdrop-blur italic text-center">
                            <li className="px-2 py-4">
                                Forbes' Top 148 Worth Playing Video Games List
                                2016
                            </li>
                            <li className="px-2 py-4">
                                IndieCade Fall Festival 2016, San Francisco
                                (Entry)
                            </li>
                            <li className="px-2 py-4">
                                E-Sports and Game Summit (ESGS) 2015 Oct. 23-24,
                                2015 in SMX Convention, Manila, Philippines{" "}
                            </li>
                            <li className="px-2 py-4">
                                Top 50 Upcoming Indie Games 2016 (nerdmuch.com)
                            </li>
                            <li className="px-2 py-4">
                                Indie Prize Contest 2016 Worlds Resort Sentosa,
                                Singapore (Entry)
                            </li>
                            <li className="px-2 py-4">
                                International Game Network Convention (IGN) 2015
                                in Du Forum, Abu Dhabi, UAE
                            </li>
                        </ul>
                        <h1 className="  text-yellow-500 text-center text-5xl my-16 font-bold">
                            Download Files
                        </h1>
                    </div>
                </div>

                <div class="flex flex-wrap justify-center my-2 ">
                    <a
                        className="m-4 sm:m-8 px-6 py-3 text-white text-lg font-bold bg-gray-500 hover:scale-125 ease in-out hover:bg-gray-400 rounded-2xl"
                        href="https://www.laminastudios.com/dungeonsouls.php"
                        target="_blank"
                    >
                        Modding Editor
                    </a>
                    <a
                        className="m-4 sm:m-8 px-6 py-3 text-white text-lg font-bold bg-gray-500 hover:scale-125 ease in-out hover:bg-gray-400 rounded-2xl"
                        href="http://laminastudios.com/dungeonsouls/modding/Help/help.html"
                        target="_blank"
                    >
                        Documentation
                    </a>
                </div>
            </div>
            <div>
                <h1 className="  text-yellow-500 text-center text-5xl mt-16 mb-4 font-bold">
                    Online Stores
                </h1>
                <p className="text-center text-white font-bold text-lg">
                    Download Dungeon Souls from the following online stores:
                </p>
                <div class=" flex flex-wrap justify-center my-2 ">
                    <a
                        className="m-4 sm:m-8 px-6 py-3 text-white text-lg font-bold bg-gray-500 hover:scale-125 ease in-out hover:bg-gray-400 rounded-2xl"
                        href="https://store.steampowered.com/app/383230/"
                        target="_blank"
                    >
                        Steam
                    </a>
                    <a
                        className="m-4 sm:m-8 px-6 py-3 text-white text-lg font-bold bg-gray-500 hover:scale-125 ease in-out hover:bg-gray-400 rounded-2xl"
                        href="https://www.gog.com/game/dungeon_souls"
                        target="_blank"
                    >
                        GOG
                    </a>
                    <a
                        className="m-4 sm:m-8 px-6 py-3 text-white text-lg font-bold bg-gray-500 hover:scale-125 ease in-out hover:bg-gray-400 rounded-2xl"
                        href="https://www.greenmangaming.com/title-no-longer-available/?query=Dungeon%20Souls"
                        target="_blank"
                    >
                        GMG
                    </a>
                    <a
                        className="m-4 sm:m-8 px-6 py-3 text-white text-lg font-bold bg-gray-500 hover:scale-125 ease in-out hover:bg-gray-400 rounded-2xl"
                        href="http://www.gamelyst.com/"
                        target="_blank"
                    >
                        Gamelyst
                    </a>

                    <a
                        className="m-4 sm:m-8 px-6 py-3 text-white text-lg font-bold bg-gray-500 hover:scale-125 ease in-out hover:bg-gray-400 rounded-2xl"
                        href="https://www.indiegala.com/store"
                        target="_blank"
                    >
                        Indie Gala
                    </a>
                    <div class=" flex flex-wrap justify-center my-2 ">
                        <a
                            className="m-4 sm:m-8 px-6 py-3 text-white text-lg font-bold bg-gray-500 hover:scale-125 ease in-out hover:bg-gray-400 rounded-2xl"
                            href="https://www.fanatical.com/en/publishers/black-shell-media"
                            target="_blank"
                        >
                            Bundle Stars
                        </a>
                        <a
                            className="m-4 sm:m-8 px-6 py-3 text-white text-lg font-bold bg-gray-500 hover:scale-125 ease in-out hover:bg-gray-400 rounded-2xl"
                            href="https://www.humblebundle.com/store"
                            target="_blank"
                        >
                            Humble Bundle
                        </a>
                        <a
                            className="m-4 sm:m-8 px-6 py-3 text-white text-lg font-bold bg-gray-500 hover:scale-125 ease in-out hover:bg-gray-400 rounded-2xl"
                            href="https://indiegamestand.com/store/2125/dungeon-souls/"
                            target="_blank"
                        >
                            Indie Game Stand
                        </a>
                    </div>
                </div>
            </div>
            <h1 className="  text-yellow-500 text-center text-5xl mt-16 mb-4 font-bold">
                DUNGEON SOULS TEAM
            </h1>
            <h5 className="  text-yellow-500 text-center text-3xl mt-8 mb-12 font-bold">
                The Creative Team
            </h5>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-2xl flex flex-col p-4 my-4 backdrop-blur bg-transparent border border-yellow-500  rounded-lg ">
                    <img
                        className="w-32 mx-auto mt-[-3rem] bg-white  rounded-full"
                        src="https://www.laminastudios.com/assets/images/pewpew-160x147.png"
                        alt="April Gianan"
                    />
                    <h2 className="text-2xl text-white font-bold text-center py-8">
                        April Gianan
                    </h2>
                    <p className="text-xl text-white font-bold text-center ">
                        Game Producer
                    </p>
                    <div className="flex flex-col text-center">
                        <p className="py-2  mx-8 text-white  italic ">
                            April oversees the game development on a daily basis
                            and interacts with the team, made up of great
                            talents
                        </p>
                    </div>
                </div>
                <div className="w-full shadow-2xl flex flex-col p-4 my-4 backdrop-blur bg-transparent border border-yellow-500 rounded-lg ">
                    <img
                        className="w-32 mx-auto mt-[-3rem] bg-white  rounded-full"
                        src="https://www.laminastudios.com/assets/images/diogo-thumb-160x152.jpg"
                        alt="Diogo Braga"
                    />
                    <h2 className="text-2xl text-white font-bold text-center py-8">
                        Diogo Braga
                    </h2>
                    <p className="text-xl text-white font-bold text-center ">
                        Lead Game Developer
                    </p>
                    <div className="flex flex-col text-center">
                        <p className="py-2  mx-8 text-white italic  ">
                            Over the course of six years, Diogo has developed
                            game mechanic engines in Game Maker.
                        </p>
                    </div>
                </div>
                <div className="w-full shadow-2xl flex flex-col p-4 my-4 backdrop-blur bg-transparent border border-yellow-500 rounded-lg ">
                    <img
                        className="w-32 mx-auto mt-[-3rem] bg-white rounded-full"
                        src="https://www.laminastudios.com/assets/images/igor-grincu-160x152.png"
                        alt="Igor Grincu"
                    />
                    <h2 className="text-2xl text-white font-bold text-center py-8">
                        Igor Grincu
                    </h2>
                    <p className="text-xl text-white font-bold text-center rounded-full ">
                        Pixel Artist & Animator
                    </p>
                    <div className="flex flex-col text-center">
                        <p className="py-2  mx-8 text-white italic ">
                            Igor is a wandering pixel artist that occasionally
                            serves as game industry encyclopedia.
                        </p>
                    </div>
                </div>
                <div className="w-full shadow-2xl flex flex-col p-4 my-4 backdrop-blur bg-transparent border border-yellow-500 rounded-lg ">
                    <img
                        className="w-32 mx-auto mt-[-3rem] bg-white rounded-full"
                        src="https://www.laminastudios.com/assets/images/piotrek-antoniak-160x152.jpg"
                        alt="Piotrek Antoniak"
                    />
                    <h2 className="text-2xl text-white font-bold text-center py-8">
                        Piotrek Antoniak
                    </h2>
                    <p className="text-xl text-white font-bold text-center rounded-full ">
                        Illustrator
                    </p>
                    <div className="flex flex-col text-center">
                        <p className="py-2  mx-8 text-white italic ">
                            Piotrek is a Digital Artist & Illustrator. He has a
                            Master's degree in Computer Science
                        </p>
                    </div>
                </div>
                <div className="w-full shadow-2xl flex flex-col p-4 my-4 backdrop-blur bg-transparent border border-yellow-500 rounded-lg ">
                    <img
                        className="w-32 mx-auto mt-[-3rem] bg-white rounded-full"
                        src="https://www.laminastudios.com/assets/images/xian-570x543-160x152.png"
                        alt="Christian Argante"
                    />
                    <h2 className="text-2xl text-white font-bold text-center py-8">
                        Christian Argante
                    </h2>
                    <p className="text-xl text-white font-bold text-center rounded-full ">
                        Pixel Artist & Animator
                    </p>
                    <div className="flex flex-col text-center">
                        <p className="py-2  mx-8 text-white italic ">
                            Xian is a professional pixel artist and animator
                        </p>
                    </div>
                </div>
                <div className="w-full shadow-2xl flex flex-col p-4 my-4 backdrop-blur bg-transparent border border-yellow-500 rounded-lg ">
                    <img
                        className="w-32 mx-auto mt-[-3rem] bg-white rounded-full"
                        src="https://www.laminastudios.com/assets/images/paul-galvez-160x152.jpg"
                        alt="Paul Benedict Galvez"
                    />
                    <h2 className="text-2xl text-white font-bold text-center py-8">
                        Paul Benedict Galvez
                    </h2>
                    <p className="text-xl text-white font-bold text-center rounded-full ">
                        Pixel Artist & Animator
                    </p>
                    <div className="flex flex-col text-center">
                        <p className="py-2  mx-8 text-white italic ">
                            Paul is an animator, graphic artist and has a
                            background in multimedia arts
                        </p>
                    </div>
                </div>
                <div className="w-full shadow-2xl flex flex-col p-4 my-4 backdrop-blur bg-transparent border border-yellow-500 rounded-lg ">
                    <img
                        className="w-32 mx-auto mt-[-3rem] bg-white rounded-full"
                        src="https://www.laminastudios.com/assets/images/ui-160x152.png"
                        alt="UFID"
                    />
                    <h2 className="text-2xl text-white font-bold text-center py-8">
                        Unfamilliar Identity
                    </h2>
                    <p className="text-xl text-white font-bold text-center rounded-full ">
                        Game Composer
                    </p>
                    <div className="flex flex-col text-center">
                        <p className="py-2  mx-8 text-white italic ">
                            Unfamiliar Identity is the anonymous Australian
                            based Orchestral Electronic Composer who started in
                            early 2012.
                        </p>
                    </div>
                </div>
                <div className="w-full shadow-2xl flex flex-col p-4 my-4 backdrop-blur bg-transparent border border-yellow-500 rounded-lg ">
                    <img
                        className="w-32 mx-auto mt-[-3rem] bg-white rounded-full"
                        src="https://www.laminastudios.com/assets/images/christopher-eijk-160x152.png"
                        alt="jDAW"
                    />
                    <h2 className="text-2xl text-white font-bold text-center py-8">
                        JackDaw
                    </h2>
                    <p className="text-xl text-white font-bold text-center rounded-full ">
                        Game Composer
                    </p>
                    <div className="flex flex-col text-center">
                        <p className="py-2  mx-8 text-white italic ">
                            Christopher van Eijk aka "Jackdaw" says that music
                            has always run through his veins.
                        </p>
                    </div>
                </div>
                <div className="w-full shadow-2xl flex flex-col p-4 my-4 backdrop-blur bg-transparent border border-yellow-500 rounded-lg ">
                    <img
                        className="w-32 mx-auto mt-[-3rem] bg-white rounded-full"
                        src="https://www.laminastudios.com/assets/images/david-viano-160x152.png"
                        alt="DSE"
                    />
                    <h2 className="text-2xl text-white font-bold text-center py-8">
                        Digital Sun Enterprises
                    </h2>
                    <p className="text-xl text-white font-bold text-center rounded-full ">
                        Game Composer
                    </p>
                    <div className="flex flex-col text-center">
                        <p className="py-2  mx-8 text-white italic ">
                            David Viano aka "Digital Sun Enterprises" approached
                            music in 2001, learning to play the guitar.
                        </p>
                    </div>
                </div>
                <div className="w-full shadow-2xl flex flex-col p-4 my-4 backdrop-blur bg-transparent border border-yellow-500 rounded-lg ">
                    <img
                        className="w-32 mx-auto mt-[-3rem] bg-white rounded-full"
                        src="https://www.laminastudios.com/assets/images/joe-oquinn-160x152.png"
                        alt="Joe"
                    />
                    <h2 className="text-2xl text-white font-bold text-center py-8">
                        Joe O`Quinn
                    </h2>
                    <p className="text-xl text-white font-bold text-center rounded-full ">
                        Game Composer
                    </p>
                    <div className="flex flex-col text-center">
                        <p className="py-2  mx-8 text-white italic ">
                            Joe O'Quinn is a game composer who conveys the
                            powerful experiences through his music.
                        </p>
                    </div>
                </div>
                <div className="w-full shadow-2xl flex flex-col p-4 my-4 backdrop-blur bg-transparent border border-yellow-500 rounded-lg ">
                    <img
                        className="w-32 mx-auto mt-[-3rem] bg-white rounded-full"
                        src="https://www.laminastudios.com/assets/images/yannik-160x152.jpg"
                        alt="Yannik"
                    />
                    <h2 className="text-2xl text-white font-bold text-center py-8">
                        Yannik Langener
                    </h2>
                    <p className="text-xl text-white font-bold text-center rounded-full ">
                        Voice Actor
                    </p>
                    <div className="flex flex-col text-center">
                        <p className="py-2  mx-8 text-white italic ">
                            Yannik is an aspiring voice actor and dubbed the
                            voice of Merlin and Soul Guardian of Dungeon Souls.
                        </p>
                    </div>
                </div>
                <div className="w-full shadow-2xl flex flex-col p-4 my-4 backdrop-blur bg-transparent border border-yellow-500 rounded-lg ">
                    <img
                        className="w-32 mx-auto mt-[-3rem] bg-white rounded-full"
                        src="https://www.laminastudios.com/assets/images/ovais-malik-160x152.jpg"
                        alt="OVAIS MALIK"
                    />
                    <h2 className="text-2xl text-white font-bold text-center py-8">
                        Ovais Malik
                    </h2>
                    <p className="text-xl text-white font-bold text-center rounded-full ">
                        Voice Actor
                    </p>
                    <div className="flex flex-col text-center">
                        <p className="py-2  mx-8 text-white italic ">
                            Ovais is a multilingual voice actor specializing in
                            everything from video games, animation and film.
                        </p>
                    </div>
                </div>
                <div className="w-full shadow-2xl flex flex-col p-4 my-4 backdrop-blur bg-transparent border border-yellow-500 rounded-lg ">
                    <img
                        className="w-32 mx-auto mt-[-3rem] bg-white rounded-full"
                        src="https://www.laminastudios.com/assets/images/pippa-vos-160x152.jpg"
                        alt="PVOS"
                    />
                    <h2 className="text-2xl text-white font-bold text-center py-8">
                        Pippa Vos
                    </h2>
                    <p className="text-xl text-white font-bold text-center rounded-full ">
                        Voice Actor
                    </p>
                    <div className="flex flex-col text-center">
                        <p className="py-2  mx-8 text-white italic ">
                            Pippa Vos speaks perfect English and is fluent in
                            Brazilian Portuguese and Spanish. She is a global
                            Voice Actor.
                        </p>
                    </div>
                </div>
                <div className="w-full shadow-2xl flex flex-col p-4 my-4 backdrop-blur bg-transparent border border-yellow-500 rounded-lg ">
                    <img
                        className="w-32 mx-auto mt-[-3rem] bg-white rounded-full"
                        src="https://www.laminastudios.com/assets/images/valentina-profile-160x152.jpg"
                        alt="VHG"
                    />
                    <h2 className="text-2xl text-white font-bold text-center py-8">
                        Valentina Hincapie Garay
                    </h2>
                    <p className="text-xl text-white font-bold text-center rounded-full ">
                        Intern
                    </p>
                    <p className="text-xl text-white font-bold text-center rounded-full ">
                        (Game Artist)
                    </p>
                    <div className="flex flex-col text-center">
                        <p className="py-2  mx-8 text-white italic ">
                            Valentina is a 2D Environment artist, videogamer,
                            and a 3D animation student.
                        </p>
                    </div>
                </div>
                <div className="w-full shadow-2xl flex flex-col p-4 my-4 backdrop-blur bg-transparent border border-yellow-500 rounded-lg ">
                    <img
                        className="w-32 mx-auto mt-[-3rem] bg-white rounded-full"
                        src="https://www.laminastudios.com/assets/images/harrison-perryman-160x160.jpg"
                        alt="Harrison Perryman"
                    />
                    <h2 className="text-2xl text-white font-bold text-center py-8">
                        Harrison Perryman
                    </h2>
                    <p className="text-xl text-white font-bold text-center rounded-full ">
                        Volunteer
                    </p>
                    <p className="text-xl text-white font-bold text-center rounded-full ">
                        Promotional Artist
                    </p>
                    <div className="flex flex-col text-center">
                        <p className="py-2  mx-8 text-white italic ">
                            Harrison is an aspiring animator and concept artist
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
