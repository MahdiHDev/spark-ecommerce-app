import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <div className="max-w-[400px] mx-auto h-screen md:h-[70vh] flex flex-col justify-center p-4">
            <form
                action=""
                className="flex flex-col items-center  p-5 border border-gray-500 shadow-gray-200 shadow-md rounded-md"
            >
                <h1 className="py-5 text-center text-2xl md:text-3xl font-semibold text-gray-600 underline">
                    Login
                </h1>
                <div className="flex flex-col p-2 w-full text-gray-500">
                    <label className="py-1">Email: </label>
                    <input
                        type="text"
                        placeholder="example@test.com"
                        className="w-full border p-2 outline-green-300"
                    />
                </div>
                <div className="flex flex-col p-2  w-full text-gray-500">
                    <label className=" py-1">Password: </label>
                    <div className="relative">
                        <input
                            type={`${show ? 'text' : 'password'}`}
                            placeholder="password"
                            className="w-full border p-2 outline-green-300 "
                        />
                        {show ? (
                            <FaRegEye
                                className="absolute text-xl right-[20px] bottom-[12px] text-gray-500 cursor-pointer"
                                onClick={handleShow}
                            />
                        ) : (
                            <FaRegEyeSlash
                                className="absolute text-xl right-[20px] bottom-[12px] text-gray-500 cursor-pointer"
                                onClick={handleShow}
                            />
                        )}
                    </div>
                    <button
                        type="Submit"
                        className="w-full p-2 bg-green-400 rounded-sm text-white mt-5"
                    >
                        Login
                    </button>
                    <p className="pt-3 text-center">
                        Don&apos;t Have an Account?{' '}
                        <Link
                            to="/sign-up"
                            className="underline hover:text-green-500"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
