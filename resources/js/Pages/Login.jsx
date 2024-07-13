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
                    <div className="flex basis-full justify-center items-center backdrop-brightness-75">
                        <div className="bg-gray-950 bg-opacity-50 p-5 rounded-lg">
                            <p className="text-neutral-50 lg:text-7xl font-bold text-6xl text-center drop-shadow font-sans">
                                Welcome to the{" "}
                                <span className="font-bold font-sans">Admin Panel</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:w-1/3 md:w-1/2 w-full sm:mx-36 md:mx-0 bg-brown gap-8 pt-12">
                    <img
                        src="/Art/lamina-logo.png"
                        alt="Lamina Studios Logo"
                        className="w-28 align-left pl-4 pb-0"
                    />
                    <p className="ml-4 mt-2 align-text-right text-xl font-bold font-display text-yellow-500">
                        Login to your Account
                    </p>
                    <form
                        method="post"
                        action="/admin/auth/login"
                        className="self-center max-w-full w-full px-8"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="_token" value={csrf_token} />
                        <div className="relative z-0 w-full mb-8">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <i className="bi bi-person-fill text-xl text-gray-700"></i>
                            </span>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="font-sans block py-2.5 px-0 pl-8 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                                placeholder=" "
                                value={form.username}
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="username"
                                className="font-sans absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 top-3 left-0 -z-10 origin-[0] peer-placeholder-shown:left-8 peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
                            >
                                Username
                            </label>
                            {formErrors.username && (
                                <div className="text-red-500 text-sm mt-2">
                                    {formErrors.username}
                                </div>
                            )}
                        </div>
                        <div className="relative z-0 w-full mb-8">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <i className="bi bi-key-fill text-xl text-gray-700"></i>
                            </span>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="font-sans block py-2.5 px-0 pl-8 w-full text-lg text-gray-900 bg-transparent autofill:bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                                placeholder=" "
                                value={form.password}
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="password"
                                className="font-sans absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 top-3 left-0 -z-10 origin-[0] peer-placeholder-shown:left-8 peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
                            >
                                Password
                            </label>
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
                                className="mr-2 w-4 h-4 accent-amber-500 drop-shadow-lg"
                                checked={form.remember}
                                onChange={handleCheck}
                            />
                            <span className="text-white font-sans"> Remember me</span>
                        </label>
                        <div className="text-center mt-4">
                            <a href="#" className="text-amber-500 hover:underline font-sans" onClick={redirectToRegister}>
                                Don't have an account? Register here
                            </a>
                        </div>
                        <div className="flex flex-row justify-center mt-8">
                            <button className="bg-amber-500 rounded-xl px-20 py-1 drop-shadow-lg uppercase font-bold text-gray-800 font-display">
                                Login
                            </button>
                        </div>
                        {errors.error ? (
                            <div className="mt-8 p-4 text-center text-danger-600 bg-danger-100 rounded-lg border-danger-300 border-2">
                                {errors ? errors.error : null}
                            </div>
                        ) : null}
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
