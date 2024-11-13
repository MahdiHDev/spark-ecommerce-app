import { FaImages } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <h1 className="text-center py-5 md:py-10 text-3xl">Sign Up</h1>
            <form
                action=""
                className="w-full md:w-2/3 lg:w-1/2 mx-auto p-5 md:border md:border-gray-500 shadow-gray-200 md:shadow-md md:rounded-md"
            >
                <div className="p-2">
                    <label className="block mb-2">Name</label>
                    <input
                        type="text"
                        className="border w-full p-2 outline-green-300"
                        placeholder="Enter Your Name"
                    />
                </div>
                <div className="p-2">
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        className="border w-full p-2 outline-green-300"
                        placeholder="Enter Your Email"
                    />
                </div>
                <div className="p-2">
                    <label className="block mb-2">Password</label>
                    <input
                        type="password"
                        className="border w-full p-2 outline-green-300"
                        placeholder="Enter Password"
                    />
                </div>
                <div className="p-2">
                    <label className="block mb-2">Password</label>
                    <input
                        type="text"
                        className="border w-full p-2 outline-green-300"
                        placeholder="Enter Password"
                    />
                </div>
                <div className="p-2">
                    <label className="block mb-2">Phone</label>
                    <input
                        type="text"
                        className="border w-full p-2 outline-green-300"
                        placeholder="Enter Phone Number"
                    />
                </div>
                <div className="p-2 text-gray-400">
                    <label className="block">Profile Image</label>
                    <input type="file" id="fileInput" className="hidden" />
                    <label
                        htmlFor="fileInput"
                        className="flex justify-between items-center border p-2 cursor-pointer hover:border-green-300"
                    >
                        <span>Upload Your Profile Image </span>
                        <FaImages />{' '}
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-full p-2 bg-green-400 hover:bg-green-600 transition duration-300 rounded-sm text-white mt-5"
                >
                    Register
                </button>
                <div className="mt-3 text-center">
                    Already Have and account?{' '}
                    <Link
                        to="/login"
                        className="underline hover:text-green-500"
                    >
                        Login
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
