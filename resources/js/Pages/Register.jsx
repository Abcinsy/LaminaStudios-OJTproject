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
            className="flex flex-col w-full h-screen bg-cover overflow-hidden"
            style={{ backgroundImage: "url(../../Art/lamina_bg.jpg)" }}
        >
            <Head title="Register" />
            <div className="flex flex-row basis-full h-full">
                <div className="flex flex-col lg:w-1/3 md:w-1/2 w-full sm:mx-36 md:mx-0 bg-brown gap-4 pt-8">
                    <img
                        src="/Art/lamina-logo.png"
                        alt="Lamina Studios Logo"
                        className="w-28 align-left pl-4 pb-0"
                    />
                    <p className="font-display text-left ml-4 text-xl text-yellow-500 font-bold mb-0 mt-0 pb-0">Sign Up for an Account</p>
                    <form
                        method="post"
                        action="/register"
                        className="bg-transparent shadow-md rounded px-4 pt-2 pb-0 mb-0"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="_token" value={csrf_token} />
                        <div className="mb-2">
                            <label className="block text-white text-sm font-bold mb-2 font-sans" htmlFor="username">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                className="font-sans shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Username"
                                value={form.username}
                                onChange={handleChange}
                            />
                            {formErrors.username && (
                                <p className="text-red-500 text-xs italic">{formErrors.username}</p>
                            )}
                        </div>
                        <div className="mb-2">
                            <label className="block text-white text-sm font-bold mb-2 font-sans" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="font-sans shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                            />
                            {formErrors.email && (
                                <p className="text-red-500 text-xs italic">{formErrors.email}</p>
                            )}
                        </div>
                        <div className="mb-2">
                            <label className="block text-white text-sm font-bold mb-2 font-sans" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                className="font-sans shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Password"
                                value={form.password}
                                onChange={handleChange}
                            />
                            {formErrors.password && (
                                <p className="text-red-500 text-xs italic">{formErrors.password}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2 font-sans" htmlFor="password_confirmation">
                                Confirm Password
                            </label>
                            <input
                                id="password_confirmation"
                                type="password"
                                className="font-sans shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Confirm Password"
                                value={form.password_confirmation}
                                onChange={handleChange}
                            />
                            {formErrors.password_confirmation && (
                                <p className="text-red-500 text-xs italic">{formErrors.password_confirmation}</p>
                            )}
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-amber-500 hover:bg-amber-700 text-white font-display font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Register
                            </button>
                        </div>
                        {errors.error && (
                            <div className="text-red-500 text-xs mt-2">{errors.error}</div>
                        )}
                        <div className="text-left text-sm mt-4 ">
                            <Link href="/login" className="text-amber-500 hover:underline font-sans">
                                Already have an account? Login here
                            </Link>
                        </div>
                    </form>
                </div>

            </div>
            <div className="flex flex-col w-full h-24 items-center bg-gray-950 text-white font-bold">
                <span className="w-full h-4 mb-4 bg-gradient-to-r from-yellow-400 to-amber-600"></span>
                <span className="w-full px-24 text-white md:text-base text-xs">
                    © 2022 Lamina Studios, LLC. All rights reserved.
                </span>
            </div>
        </div>
    );
}
