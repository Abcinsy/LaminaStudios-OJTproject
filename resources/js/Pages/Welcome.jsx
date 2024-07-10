import { Head, Link } from "@inertiajs/react";

function Item({ image, link, title, logo }) {
    return (
        <Link href={link ? link : '#'}
            className={`group bg-cover bg-center min-h-[10rem] sm:h-[50vh] basis-full sm:basis-1/2 lg:basis-1/3 transition-transform ease-in duration-300 hover:scale-110 hover:z-50 hover:cursor-pointer`}
            style={{ backgroundImage: `url('${image}')` }}
        >
            <div className="relative flex w-full h-full backdrop-brightness-75 hover:backdrop-brightness-100 justify-center items-center">
                {
                    logo ? <img src="Art/LS_newlogo.png" alt="LS_logo" className="absolute top-0 left-0 w-20 sm:w-28 m-4 invert" /> : null
                }
                <p className="transition ease-in-out border-amber-400 group-hover:border-4 group-hover:bg-gray-700/40 p-4 rounded-lg text-2xl sm:text-4xl text-gray-100 font-bold text-center align-middle uppercase">{title}</p>
            </div>
        </Link>
    );
}

export default function Welcome() {
    return (
        <div className="flex flex-row flex-wrap w-full min-h-fit overflow-hidden">
            <Head title="Welcome" />
            <Item image={"/Art/Warrior_Cathedral.jpg"} title="Home" link={'/home'} logo />
            <Item image={"/Art/nightblade_study2.jpg"} title="Games" link={'/games'} />
            <Item image={"/Art/06.png"} title="News and Features" link={'/news'} />
            <Item image={"/Art/10.png"} title="About Us" link={'/about-us'} />
            <Item image={"/Art/Wizard%20Steam.png"} title="Creatives" link={'/creatives'} />
            <Item image={"/Art/08.png"} title="Contact Us" link={'/contact'} />
        </div>
    );
}
