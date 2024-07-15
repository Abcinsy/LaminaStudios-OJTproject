import { useState } from "react";
import { Head } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import "../../css/auth-forms.css";

export default function Login({ csrf_token, errors }) {
    const [form, setForm] = useState({
        username: errors.username ? errors.username : "",
        password: errors.password ? errors.password : "",
        remember: errors.remember ? errors.remember : false,
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

    const handleCheck = (e) => {
        setForm((values) => ({
            ...values,
            remember: e.target.checked,
        }));
    };

    const validateForm = () => {
        let errors = {};
        if (!form.username) errors.username = "Username is required";
        if (!form.password) errors.password = "Password is required";
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            Inertia.post('/admin/auth/login', form);
        }
    };

    const redirectToRegister = (e) => {
        e.preventDefault();
        Inertia.get('/register');
    };

    return (
        <div
            className="flex flex-col w-full h-screen bg-cover bg-bottom"
            style={{ backgroundImage: "url(../../Art/Warrior_Cathedral.jpg)" }}
        >
            <Head title="Login" />
            <div className="flex flex-row basis-full">
                <div className="md:flex flex-col lg:w-2/3 md:w-1/2 hidden">
                    <div className="min-h-fit backdrop-brightness-50"></div>
                    
                </div>

                <div className="flex flex-col lg:w-1/3 md:w-1/2 w-full sm:mx-36 md:mx-0 bg-brown gap-8 pt-12 px-10">
                    <img
                        src="/Art/lamina-logo.png"
                        alt="Lamina Studios Logo"
                        className="w-28 ml-3 align-left pl-4 pb-0"
                    />
                    <p className="ml-8 mt-2 align-text-right text-xl font-bold font-display text-yellow-500">
                        Login to your Account
                    </p>
                    <form
                        method="post"
                        action="/admin/auth/login"
                        className="self-center max-w-full w-full px-8"
                        onSubmit={handleSubmit}
                    >
                        <div className="text-sm mb-2">
                            <a className="text-amber-400 inline-block"> Username </a>
                            <a className="text-red-600 inline-block"> * </a>
                        </div>

                        <input type="hidden" name="_token" value={csrf_token} />
                        <div className="relative z-0 w-full mb-8">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            </span>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="font-sans block py-2.5 px-4 w-full text-sm placeholder-gray-300 text-white bg-transparent border border-white rounded-lg"
                                placeholder="Input your username"
                                value={form.username}
                                onChange={handleChange}
                            />
                            {formErrors.username && (
                                <div className="text-red-500 text-sm mt-2">
                                    {formErrors.username}
                                </div>
                            )}
                        </div>

                        <div className="text-sm mb-2">
                            <a className="text-amber-400 inline-block"> Password </a>
                            <a className="text-red-600 inline-block"> * </a>
                        </div>

                        <div className="relative z-0 w-full mb-3">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            </span>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="font-sans block py-2.5 px-4 w-full text-sm placeholder-gray-300 text-white bg-transparent border border-white rounded-lg"
                                placeholder="Input your password"
                                value={form.password}
                                onChange={handleChange}
                            />
                            {formErrors.password && (
                                <div className="text-red-500 text-sm mt-2">
                                    {formErrors.password}
                                </div>
                            )}
                        </div>
                        <label>
                            <input
                                type="checkbox"
                                name="remember"
                                id="remember"
                                className="mr-2 w-4 h-4 bg-transparent border border-white drop-shadow-lg"
                                checked={form.remember}
                                onChange={handleCheck}
                            />
                            <span className="text-white text-sm font-sans"> Remember me </span>
                        </label>
                        <div className="flex flex-row justify-center mt-5">
                            <button className="bg-amber-300 w-full rounded-lg px-20 py-2 drop-shadow-lg font-bold text-black">
                                Login
                            </button>
                        </div>
                        <div className="text-center text-sm mt-4">
                            <a href="#" className="text-white" > You’re new in here? </a>
                            <a href="#" className="text-amber-500 hover:underline font-sans" onClick={redirectToRegister}>
                                 Create Account
                            </a>
                        </div>
                        {errors.error ? (
                            <div className="mt-8 p-4 text-center text-danger-600 bg-danger-100 rounded-lg border-danger-300 border-2">
                                {errors ? errors.error : null}
                            </div>
                        ) : null}
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
