import { Head } from "@inertiajs/react";
import Header from "../Components/Header";
import BlackFooter from "../Components/BlackFooter";

export default function SiteLayout({ children, title, backgroundImage }) {
    return (
        <div className="bg-repeat-y bg-gradient-to-b from-gray-900 via-slate-600 to-gray-900 font-['Poppins']">
            <Head title={title} />
            <Header />
            <div
                className="w-full min-h-screen bg-no-repeat bg-fixed bg-cover"
                style={{
                    backgroundImage: backgroundImage ? `url(${backgroundImage})` : `url(../../Art/Warrior_Cathedral.jpg)`,
                }}
            >
                <div className="min-h-screen py-32 backdrop-brightness-50">
                    {children}
                </div>
            </div>
            <BlackFooter />
        </div>
    );
}
