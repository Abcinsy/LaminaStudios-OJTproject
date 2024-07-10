import Header from "../../Components/Header";
import { Head } from "@inertiajs/react";
import BlackFooter from "../../Components/BlackFooter";

export default function Layout({ title, backgroundImage, children }) {
    return (
        <div
            className="relative bg-cover bg-fixed bg-no-repeat brightness-100"
            style={{
                backgroundImage: `url('${backgroundImage}')`,
            }}
        >
            <Head title={title} />
            <Header />
            {children}
            <BlackFooter />
        </div>
    );
}
