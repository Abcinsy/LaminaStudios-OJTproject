import { router } from "@inertiajs/react";
import React from "react";
import { useState } from "react";

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
        <div
            className="w-screen min-h-[621px] bg-right xs:bg-auto sm:bg-auto  lg:bg-auto  md:bg-auto   "
            style={{ backgroundImage: "url(../../Art/05.png)" }}
        >
            <div className="grid md:grid-cols-2 justify-center text-center items-center xs:grid-cols-1 ">
                <div className=" md:grid justify-center  text-center min-h-[620px] bg-white md:h-screen">
                    <img
                        src="art/LS_newlogo.png"
                        className="w-52 mx-auto"
                        alt=""
                    />
                    <h1 className="xs:text-5xl xs:mr-4 md:mr-0 md:text-5xl font-bold my-4 ">
                        Contact Us
                    </h1>
                    <div className="grid justify-center items-center ">
                        <form onSubmit={handleSubmit}>
                            <div className="relative">
                                <i class="bi bi-person-fill text-xl absolute top-2 left-2"></i>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    className="border px-4 pl-8 py-2 mb-4 bg-gray-200 rounded-xl   "
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
                                <i class="bi bi-at text-xl absolute top-2 left-2"></i>
                                <input
                                    type="text"
                                    placeholder="Enter Email"
                                    className="border px-4 pl-8 py-2 mb-4 bg-gray-200 rounded-xl    "
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
                                <i class="bi bi-question text-xl absolute top-2 left-2"></i>
                                <select
                                    type="text"
                                    placeholder="Select Inquiry"
                                    className="  w-full px-4 pl-8 py-2 mb-4 bg-gray-200 rounded-xl"
                                    value={form.inquiry}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            inquiry: e.target.value,
                                        })
                                    }
                                >
                                    <option
                                        value=""
                                        disabled
                                        className="text-gray-100"
                                    >
                                        Select inquiry
                                    </option>
                                    <option value="bug">Bug Report</option>
                                    <option value="business">
                                        Business Inquiry
                                    </option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="relative">
                                <i class="bi bi-envelope text-xl absolute top-2 left-2"></i>
                                <input
                                    type="text"
                                    placeholder="Enter Concern"
                                    className="border px-4 pl-8 py-8 mb-4 bg-gray-200 rounded-3xl flex-1 xs:mr-4 "
                                    value={form.content}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            content: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </form>
                    </div>
                    <div className="grid">
                        <button className="xs:mx-4 sm:mx-8 md:text-lg font-semibold border px-2 py-2 mx-12 bg-slate-400 hover:bg-slate-600 rounded-xl">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
