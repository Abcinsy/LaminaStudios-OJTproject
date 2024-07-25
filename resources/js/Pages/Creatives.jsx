import { useState, useEffect } from "react";
import SiteLayout from "../Layouts/SiteLayout";

export default function Creatives({
    creatives,
    featuredCreative,
    featuredGallery,
}) {
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        console.log("Featured Creative:", featuredCreative);
        console.log("Creatives:", creatives);
        console.log("Featured Gallery:", featuredGallery);
    }, [featuredCreative, creatives, featuredGallery]);

    const openModal = async (name) => {
        try {
            const res = await fetch(`/api/creatives/${name}`, {
                method: "GET",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            console.log("Modal Data:", data);
            setModalData(data);
        } catch (err) {
            console.log(err);
        }
    };

    const closeModal = () => setModalData(null);

    return (
        <>
            <SiteLayout title={"Creatives"} backgroundImage={'/art/Wizard%20Steam.png'}>
                <div className="flex flex-col w-full min-h-screen">
                    <div className="w-full justify-center items-center text-center my-8">
                        <p className="text-[#fec200] text-6xl font-bold font-display">
                            Featured Creatives
                        </p>
                        <p className="text-white text-3xl font-base font-manrope">
                            Artist of the Month.
                        </p>
                    </div>
                    <div className="flex flex-col items-center px-32">
                        {featuredCreative && (
                            <div className="flex flex-col items-center">
                                <img
                                    src={featuredCreative.image_name}
                                    alt={featuredCreative.name}
                                    className="w-96 h-96 bg-white border-4 border-[#fec200]"
                                />
                                <p className="text-[#fec200] text-3xl font-bold mt-4">
                                    {featuredCreative.name}
                                </p>
                                <p className="text-white text-xl">
                                    {featuredCreative.title}
                                </p>
                            </div>
                        )}
                        <div className="flex flex-wrap basis-2/3 p-32 pt-0 -mt-2 pr-0 justify-end">
                            {featuredGallery?.images.map((image, id) => (
                                <div className="flex basis-1/2 p-2" key={id}>
                                    <img
                                        src={image.image_name}
                                        alt={image.name}
                                        className="basis-1/2 object-contain border-2 bg-gray-200 border-[#fec200]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full justify-center items-center text-center mt-8">
                        <p className="text-[#fec200] text-6xl font-bold font-display">
                            The Creatives
                        </p>
                        <p className="text-white text-3xl font-base font-sans">
                            We value diversity.
                        </p>
                    </div>
                    <div className="flex flex-wrap w-auto lg:mx-32 md:mx-16 mx-8 pt-16">
                        {creatives.map((creative, index) => (
                            <div
                                key={index}
                                onClick={() => openModal(creative.name)}
                                className="flex flex-col xl:basis-1/5 lg:basis-1/4 md:basis-1/3 basis-1/2 items-center text-center mb-8 hover:cursor-pointer"
                            >
                                <img
                                    src={creative.image_name}
                                    alt={creative.name}
                                    className="w-40 h-40 rounded-full bg-white border-4 border-lamina-yellow mb-2"
                                />
                                <p className="text-white font-bold">
                                    {creative.name}
                                </p>
                                <p className="text-white ">{creative.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {modalData && (
                    <div
                        className={
                            "fixed left-0 top-0 h-full w-full backdrop-brightness-50 font-['Poppins'] " +
                            (modalData ? "block" : "hidden")
                        }
                    >
                        <div className="flex fixed top-[50%] left-[50%] p-12 bg-white w-[75%] h-[70vh] translate-x-[-50%] translate-y-[-50%] rounded-3xl border-4 border-yellow-400">
                            <div className="flex flex-col basis-1/3 items-center">
                                <img
                                    src={modalData.image_name}
                                    alt={modalData.name}
                                    className="w-64 h-64 rounded-full"
                                />
                            </div>
                            <div className="flex flex-col basis-2/3 gap-y-2">
                                <p className="text-5xl font-bold">
                                    {modalData.name}
                                </p>
                                <p className="text-3xl">{modalData.title}</p>
                                <div className="overflow-auto mt-2">
                                    <p className="text-base text-justify">
                                        {modalData.description}
                                    </p>
                                </div>
                            </div>
                            <i
                                onClick={closeModal}
                                className="bi bi-x-lg fixed top-4 right-4 text-6xl text-yellow-400"
                            ></i>
                        </div>
                    </div>
                )}
            </SiteLayout>
        </>
    );
}
