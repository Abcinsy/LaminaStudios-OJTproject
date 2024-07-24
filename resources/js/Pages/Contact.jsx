import { router } from "@inertiajs/react";
import React, { useState } from "react";
import SiteLayout from "../Layouts/SiteLayout"; // Ensure the path is correct

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        inquiry: "",
        content: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        router.post("/contact-us", form);
    }

    return (
        <SiteLayout title={'Contact Us'} backgroundImage={'Art/08.png'}>
            <div className="w-screen min-h-screen flex justify-center items-center">
                <div className="bg-brown bg-opacity-90 p-8 rounded-xl shadow-lg w-full max-w-md">
                    <div className="flex flex-col items-center mb-8">
                        <img
                            src="art/lamina-logo.png"
                            className="w-24 mb-4"
                            alt="Lamina Logo"
                        />
                        <h1 className="text-lamina-yellow font-display text-3xl font-bold mb-2">
                            CONTACT US
                        </h1>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <label className="text-lamina-yellow text-sm mb-1 block font-sans">Name*</label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="w-full px-4 py-2 rounded-lg bg-brown text-white border border-brown-600 focus:outline-none focus:border-lamina-yellow"
                                value={form.name}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="relative">
                            <label className="text-lamina-yellow text-sm mb-1 block font-sans">Email*</label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="w-full px-4 py-2 rounded-lg bg-brown text-white border border-brown-600 focus:outline-none focus:border-lamina-yellow"
                                value={form.email}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="relative">
                            <label className="text-lamina-yellow text-sm mb-1 block font-sans">Inquiry*</label>
                            <select
                                className="w-full px-4 py-2 rounded-lg bg-brown text-white border border-brown-600 focus:outline-none focus:border-lamina-yellow"
                                value={form.inquiry}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        inquiry: e.target.value,
                                    })
                                }
                            >
                                <option value="" disabled>Select inquiry</option>
                                <option value="bug">Bug Report</option>
                                <option value="business">Business Inquiry</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="relative">
                            <label className="text-lamina-yellow text-sm mb-1 block font-sans">Concern*</label>
                            <textarea
                                placeholder="Enter Concern"
                                className="w-full px-4 py-2 rounded-lg bg-brown text-white border border-brown-600 focus:outline-none focus:border-lamina-yellow"
                                value={form.content}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        content: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 rounded-lg bg-amber-300 text-black font-bold hover:bg-amber-400 focus:outline-none"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </SiteLayout>
    );
}
