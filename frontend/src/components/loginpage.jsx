import React from 'react';

const LoginPopup = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50">
            <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-lg w-[90%] max-w-md shadow-xl">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="Username or Email Address *"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black"/>

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black"/>

                    <div className="flex items-center justify-between text-sm text-gray-700">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="text-gray-600 hover:underline">
                            Forgot your password?
                        </a>
                    </div>

                    <div className="pt-4 flex gap-4 justify-center">
                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded">
                            Login
                        </button>
                        <button
                            type="button"
                            className="border border-gray-400 hover:bg-gray-200 px-6 py-2 rounded">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPopup;
