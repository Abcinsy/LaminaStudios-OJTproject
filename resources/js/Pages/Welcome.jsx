import { Head, Link } from "@inertiajs/react";

function Item({ image, link, title, logo, gridArea }) {
    return (
        <Link href={link ? link : '#'}
            className={`group bg-cover bg-center transition-transform ease-in duration-300 hover:scale-105 hover:z-50 hover:cursor-pointer ${gridArea}`}
            style={{ backgroundImage: `url('${image}')` }}
        >
            <div className="relative flex w-full h-full backdrop-brightness-75 hover:backdrop-brightness-100 justify-center items-center">
                {
                    logo ? <img src="Art/LS_newlogo.png" alt="LS_logo" className="absolute top-0 left-0 w-20 sm:w-28 m-4 invert" /> : null
                }
                <p className="transition ease-in-out p-4 rounded-lg text-2xl sm:text-4xl text-gray-100 font-bold text-center align-middle uppercase">{title}</p>
            </div>
        </Link>
    );
}

export default function Welcome() {
    return (
        <div className="min-h-screen overflow-hidden">
            <Head title="Welcome" />
            <div className="grid grid-cols-3 grid-rows-3 w-full h-full" style={{ height: '100vh', wdith: '100vh' }}>
                <Item image={"/Art/Warrior_Cathedral.jpg"} title="Home" link={'/home'} logo gridArea="col-span-2 row-span-1" />
                <Item image={"/Art/06.png"} title="About Us" link={'/about-us'} gridArea="col-span-1 row-span-1" />
                <Item image={"/Art/Wizard%20Steam.png"} title="Creatives" link={'/creatives'} gridArea="col-span-1 row-span-1" />
                <Item image={"/Art/10.png"} title="Games" link={'/games'} gridArea="col-span-1 row-span-1" />
                <Item image={"/Art/09.png"} title="Internship" link={'/internship'} gridArea="col-span-1 row-span-2" />
                <Item image={"/Art/nightblade_study2.jpg"} title="News and Features" link={'/news'} gridArea="col-span-1 row-span-1" />
                <Item image={"/Art/08.png"} title="Contact Us" link={'/contact'} gridArea="col-span-1 row-span-1" />
            </div>
        </div>
    );
}