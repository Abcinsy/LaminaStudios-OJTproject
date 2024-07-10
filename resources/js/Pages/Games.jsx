import { Link } from "@inertiajs/react";
import SiteLayout from "../Layouts/SiteLayout";

function GameCard({ link, backgroundImage, backgroundPos, children }) {
    return (
        <Link
            href={link}
            className={`relative w-56 h-[70vh] bg-cover bg-${backgroundPos} bg-red-100 -skew-x-12 hover:brightness-125`}
            style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
            <div className="absolute top-1/2 -translate-y-1/2 skew-x-12">
                {children}
            </div>
        </Link>
    );
}

export default function Games() {
    return (
        <SiteLayout title={"Games"} backgroundImage={'Art/nightblade_study2.jpg'}>
            <div className="flex w-full min-h-screen sm:px-24 px-8 justify-around">
                <GameCard
                    backgroundImage={"/Art/Projects_Games.png"}
                    backgroundPos={'right'}
                    link={"games/dungeonsouls"}
                >
                    <img src="/Art/DS.png" alt="Dungeon Souls" />
                </GameCard>
                <GameCard
                    backgroundImage={"/Art/badbotsrise_back.png"}
                    link={"games/badbotsrise"}
                >
                    <img src="/Art/badbotsrise_logo.png" alt="Dungeon Souls" />
                </GameCard>
                <GameCard
                    link={"games/journeytovalhalla"}
                    backgroundImage={"/Art/jtv.png"}
                    backgroundPos={'center'}
                >
                    <img src="/Art/jvt_logo.png" alt="Dungeon Souls" />
                </GameCard>
            </div>
        </SiteLayout>
    );
}
