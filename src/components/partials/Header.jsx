import { Collapse, Navbar } from '@material-tailwind/react';
import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { CiSearch } from 'react-icons/ci';
import { LuShoppingCart } from 'react-icons/lu';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logo.jpg';
import Navlist from '../Navlist';

export default function StickyNavbar() {
    const [openNav, setOpenNav] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleOpenSearch = () => {
        setIsSearchOpen((prevState) => !prevState);
        console.log(isSearchOpen);
    };

    React.useEffect(() => {
        window.addEventListener(
            'resize',
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <>
            <div className="max-h-[768px] w-full bg-black">
                <Navbar className="sticky top-0 z-9 h-max max-w-[90%] mx-auto rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-black text-white shadow-none border-none">
                    <div className="flex items-center justify-between text-blue-gray-900">
                        <Link
                            to="/"
                            className="mr-4 cursor-pointer py-1.5 font-medium flex items-center gap-2 text-sm sm:text-md"
                        >
                            <img
                                src={Logo}
                                alt=""
                                className="h-[24px] w-[24px] sm:h-[45px] sm:w-[45px] rounded-full"
                            />
                            Spark Men&apos;s Fashion
                        </Link>
                        <div className="lg:flex justify-center items-center hidden">
                            <input
                                className="w-[450px] py-2 pl-4 outline-none  border border-solid border-red-300 text-gray-700"
                                type="text"
                                placeholder="Search for Products"
                                value={search}
                                onChange={handleSearch}
                            />
                            <button className="bg-primary p-2 rounded-sm">
                                <CiSearch className="h-[26px] w-[26px]" />
                            </button>
                        </div>
                        <div className="flex items-center text-primary">
                            <div className="mr-4 hidden lg:inline-block">
                                <CgProfile className="cursor-pointer h-6 w-6 sm:h-[26px] sm:w-[26px]" />
                            </div>
                            <div className="mr-4 block lg:hidden">
                                <CiSearch
                                    className="cursor-pointer h-6 w-6"
                                    onClick={handleOpenSearch}
                                />
                            </div>
                            <Link to="/cart" className="mr-4  lg:block">
                                <LuShoppingCart className="cursor-pointer h-6 w-6" />
                            </Link>
                            <div
                                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                    <Collapse open={openNav}>
                        <Navlist visibility="lg:hidden" nav={openNav} />
                    </Collapse>
                </Navbar>
            </div>
            <div className=" justify-center border font-bold border-b-gray-300 googlefontSemibold py-2 hidden lg:flex">
                <Navlist />
            </div>
            <div
                className={`${
                    isSearchOpen ? 'translate-y-[0px]' : 'translate-y-[-180px]'
                } block lg:hidden duration-500 absolute top-[0px] left-0 w-full px-3 pt-1 sm:pt-5 pb-4 h-[100px] bg-white z-10 p-3 shadow-md`}
            >
                <div className="flex justify-end px-2">
                    <RxCross1
                        className="cursor-pointer text-primary text-lg"
                        onClick={handleOpenSearch}
                    />
                </div>
                <input
                    type="text"
                    placeholder="Looking for something?"
                    className="w-full py-2 px-4 outline-none border border-gray-400 mt-2 bg-gray-200 text-sm"
                    value={search}
                    onChange={handleSearch}
                />
            </div>
        </>
    );
}
