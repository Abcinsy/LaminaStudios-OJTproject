import { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import "../../css/auth-forms.css";

export default function Register({ csrf_token, errors }) {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
    });
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setForm((values) => ({
            ...values,
            [key]: value,
        }));
    };

    const validateForm = () => {
        let errors = {};
        if (!form.username) errors.username = "Username is required";
        if (!form.email) errors.email = "Email is required";
        if (!form.password) errors.password = "Password is required";
        if (form.password !== form.password_confirmation) {
            errors.password_confirmation = "Passwords do not match";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            Inertia.post('/register', form, {
                onSuccess: () => {
                    Inertia.get('/login');
                }
            });
        }
    };

    return (
        <div
            className="flex flex-col w-full h-screen bg-cover overflow-y-auto"
            style={{ backgroundImage: "url(../../Art/07.png)" }}
        >
            <Head title="Register" />
            <div className="flex flex-row basis-full">

                <div className="flex flex-col lg:w-1/3 md:w-1/2 w-full sm:mx-36 md:mx-0 bg-brown gap-8 pt-5 px-10">
                    <img
                        src="/Art/lamina-logo.png"
                        alt="Lamina Studios Logo"
                        className="w-20 ml-3 align-left pl-4 pb-0"
                    />

                    <p className="ml-8 align-text-right text-xl font-bold font-display text-yellow-500">
                        Create your account
                    </p>
                    <form
                        method="post"
                        action="/register"
                        className="self-center max-w-full w-full px-8"
                        onSubmit={handleSubmit}
                    >
                        <div className="text-sm mb-2">
                            <a className="text-amber-400 inline-block" htmlFor="username"> Username </a>
                            <a className="text-red-600 inline-block"> * </a>
                        </div>

                        <input type="hidden" name="_token" value={csrf_token} />
                        <div className="mb-2">
                            <input
                                id="username"
                                type="text"
                                className="font-sans block py-2.5 px-4 w-full text-sm placeholder-gray-300 text-white bg-transparent border border-white rounded-lg"
                                placeholder="Input your username"
                                value={form.username}
                                onChange={handleChange}
                            />
                            {formErrors.username && (
                                <p className="text-red-500 text-xs italic">{formErrors.username}</p>
                            )}
                        </div>
                        <div className="mb-2">

                            <div className="text-sm mb-2">
                                <a className="text-amber-400 inline-block" htmlFor="email"> Email </a>
                                <a className="text-red-600 inline-block"> * </a>
                            </div>

                            <input
                                id="email"
                                type="email"
                                className="font-sans block py-2.5 px-4 w-full text-sm placeholder-gray-300 text-white bg-transparent border border-white rounded-lg"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                            />
                            {formErrors.email && (
                                <p className="text-red-500 text-xs italic">{formErrors.email}</p>
                            )}
                        </div>
                        <div className="mb-2">

                            <div className="text-sm mb-2">
                                <a className="text-amber-400 inline-block" htmlFor="password"> Password </a>
                                <a className="text-red-600 inline-block"> * </a>
                            </div>

                            <input
                                id="password"
                                type="password"
                                className="font-sans block py-2.5 px-4 w-full text-sm placeholder-gray-300 text-white bg-transparent border border-white rounded-lg"
                                placeholder="Enter your password"
                                value={form.password}
                                onChange={handleChange}
                            />
                            {formErrors.password && (
                                <p className="text-red-500 text-xs italic">{formErrors.password}</p>
                            )}
                        </div>
                        <div className="mb-4">

                            <div className="text-sm mb-2">
                                <a className="text-amber-400 inline-block" htmlFor="password_confirmation"> Confirm Password </a>
                                <a className="text-red-600 inline-block"> * </a>
                            </div>

                            <input
                                id="password_confirmation"
                                type="password"
                                className="font-sans block py-2.5 px-4 w-full text-sm placeholder-gray-300 text-white bg-transparent border border-white rounded-lg"
                                placeholder="Re-enter your password"
                                value={form.password_confirmation}
                                onChange={handleChange}
                            />
                            {formErrors.password_confirmation && (
                                <p className="text-red-500 text-xs italic">{formErrors.password_confirmation}</p>
                            )}
                        </div>

                        <div className="flex flex-row justify-center mt-5">
                            <button
                                className="mt-2 bg-amber-300 w-full rounded-lg px-20 py-2 drop-shadow-lg font-bold text-black"
                                type="submit">
                                Create Account
                            </button>
                        </div>
                        {errors.error && (
                            <div className="text-red-500 text-xs mt-2">{errors.error}</div>
                        )}

                        <div className="text-left text-sm mt-4">
                            <a href="#" className="text-white" > Already have an account? </a>
                            <Link href="/login" className="text-amber-500 hover:underline font-sans">
                                Login here
                            </Link>
                        </div>

                    </form>
                </div>

            </div>
            <div className="flex flex-col w-full h-24 items-center bg-black text-white font-bold">
                <span className="w-full h-4 mb-4 bg-gradient-to-r from-yellow-400 to-amber-600"></span>
                <span className="w-full px-24 text-white md:text-base text-xs">
                    © 2024 Lamina Studios, LLC. All rights reserved.
                </span>
            </div>
        </div>
    );
}
