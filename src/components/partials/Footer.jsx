import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import Image from '../../assets/logo/logo.jpg';

function Footer() {
    return (
        <div className="bg-black text-white py-3 px-10 mt-10">
            <div className="max-width md:flex justify-between flex-wrap">
                <div>
                    <div className="flex items-center gap-1 pt-2">
                        <img
                            src={Image}
                            alt="spark"
                            className="h-[65px] w-[65px]"
                        />
                        <span className="text-xl hover:text-primary transition delay-100 cursor-pointer">
                            Spark Men&apos;s Fasion
                        </span>
                    </div>
                    <ul className="mt-5 px-4 py-2 leading-6">
                        <li>
                            Call us:{' '}
                            <span className="hover:underline hover:text-primary">
                                09664554535645
                            </span>
                        </li>
                        <li>Email us: example@gmail.com</li>
                        <li className="md:w-[280px]">
                            Shop Address: Suite 747 1327 Ethan Run, South
                            Raymond, MN 05281
                        </li>
                    </ul>
                    <div>
                        <ul className="flex gap-2 px-4 py-4">
                            <li className="border border-primary rounded-md p-2 text-xl shadow-md hover:shadow-gray-600  duration-300 hover:text-primary hover:border-gray-600">
                                <a href="#">
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li className="border border-primary rounded-md p-2 text-xl shadow-md hover:shadow-gray-600  duration-300 hover:text-primary hover:border-gray-600">
                                <a href="#">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li className="border border-primary rounded-md p-2 text-xl shadow-md hover:shadow-gray-600  duration-300 hover:text-primary hover:border-gray-600">
                                <a href="#">
                                    <FaTiktok />
                                </a>
                            </li>
                            <li className="border border-primary rounded-md p-2 text-xl shadow-md hover:shadow-gray-600  duration-300 hover:text-primary hover:border-gray-600">
                                <a href="#">
                                    <FaWhatsapp />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-5">
                    <h2 className="text-xl text-primary">Customer account</h2>
                    <ul className="leading-7 px-4 py-2">
                        <li className="hover:translate-x-2 duration-300 hover:text-primary list-circle">
                            <a href="#">Sign In</a>
                        </li>
                        <li className="hover:translate-x-2 duration-300 hover:text-primary list-circle">
                            <a href="#">Create new account</a>
                        </li>
                        <li className="hover:translate-x-2 duration-300 hover:text-primary list-circle">
                            <a href="#">My Orders</a>
                        </li>
                    </ul>
                </div>

                <div className="mt-5">
                    <h2 className="text-xl text-primary">Related Pages</h2>
                    <ul className="leading-7 px-4 py-2">
                        <li className="hover:translate-x-2 duration-300 hover:text-primary list-circle">
                            <a href="#">About Us</a>
                        </li>
                        <li className="hover:translate-x-2 duration-300 hover:text-primary list-circle">
                            <a href="#">Refund Policy</a>
                        </li>
                        <li className="hover:translate-x-2 duration-300 hover:text-primary list-circle">
                            <a href="#">WholeSale</a>
                        </li>
                        <li className="hover:translate-x-2 duration-300 hover:text-primary list-circle">
                            <a href="#">Products</a>
                        </li>
                        <li className="hover:translate-x-2 duration-300 hover:text-primary list-circle">
                            <a href="#">Combo Offers</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
