import { useState } from "react";
import { Head } from "@inertiajs/react";
import "../../css/auth-forms.css";

export default function Login({ csrf_token, errors }) {
    const [form, setForm] = useState({
        username: errors.username ? errors.username : "",
        password: errors.password ? errors.password : "",
        remember: errors.remember ? errors.remember : false,
    });

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

    return (
        <div
            className="flex flex-col w-full h-screen bg-cover bg-bottom"
            style={{ backgroundImage: "url(../../Art/Warrior_Cathedral.jpg" }}
        >
            <Head title="Login" />
            <div className="flex flex-row basis-full">
                <div className="md:flex flex-col lg:w-2/3 md:w-1/2 hidden">
                    <div className="min-h-fit backdrop-brightness-50">
                        <img
                            src="/images/lamina_logo_yellow.png"
                            alt="Lamina Studios Logo"
                            className="w-28 m-4 ml-8"
                        />
                    </div>
                    <div className="flex basis-full justify-center items-center backdrop-brightness-75">
                        <p className="text-white lg:text-7xl text-6xl text-center drop-shadow">
                            Welcome to the{" "}
                            <span className="font-bold">Admin Panel</span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:w-1/3 md:w-1/2 w-full sm:mx-36 md:mx-0 bg-slate-100 gap-8 pt-12">
                    <img
                        src="/images/LS_newlogo.png"
                        alt="Lamina Studios Logo"
                        className="w-28 self-center"
                    />
                    <p className="self-center text-xl font-bold mb-8">Login</p>
                    <form
                        method="post"
                        action="/admin/auth/login"
                        className="self-center max-w-full w-full px-8"
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
                                className="block py-2.5 px-0 pl-8 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                                placeholder=" "
                                value={form.username}
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="username"
                                className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 top-3 left-0 -z-10 origin-[0] peer-placeholder-shown:left-8 peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
                            >
                                Username
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-8">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <i className="bi bi-key-fill text-xl text-gray-700"></i>
                            </span>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="block py-2.5 px-0 pl-8 w-full text-lg text-gray-900 bg-transparent autofill:bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                                placeholder=" "
                                value={form.password}
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="password"
                                className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 top-3 left-0 -z-10 origin-[0] peer-placeholder-shown:left-8 peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
                            >
                                Password
                            </label>
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
                            Remember me
                        </label>
                        <div className="flex flex-row justify-center mt-16">
                            <button className="bg-amber-500 rounded-xl px-8 py-1 drop-shadow-lg uppercase font-bold text-gray-800">
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
