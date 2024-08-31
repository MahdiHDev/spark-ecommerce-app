import { Typography } from '@material-tailwind/react';
import { useState } from 'react';
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci';
import { RiArrowDropDownLine } from 'react-icons/ri';

function Navlist({ visibility, nav }) {
    const [openSections, setOpenSections] = useState({
        mansClothing: false,
        comboOffers: false,
        wallet: false,
        punjabi: false,
        bag: false,
        flashSale: false,
        trending: false,
    });

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <ul
            className={`mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 ${
                visibility ? visibility : 'lg:flex-row'
            } lg:items-center lg:gap-4`}
        >
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className={`p-2 font-semibold group border-b-[1px]  lg:border-b-0 ${
                    nav ? 'block border-gray-800' : 'hidden lg:block'
                }`}
            >
                <a href="#" className="flex items-center">
                    <div className="flex justify-between w-full items-center">
                        <span>Man&apos;s Clothing</span>
                        <button onClick={() => toggleSection('mansClothing')}>
                            {openSections.mansClothing ? (
                                <CiSquareMinus className="lg:hidden text-lg" />
                            ) : (
                                <CiSquarePlus className="lg:hidden text-lg" />
                            )}
                        </button>
                    </div>
                    <RiArrowDropDownLine className="w-[24px] h-[24px] hidden lg:block" />
                </a>
                {openSections.mansClothing && (
                    <ul className=" pl-4 mt-2 space-y-1">
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Mash Fabric Jersey
                        </li>
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Trouers
                        </li>
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Jeans Pants
                        </li>
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Jackets
                        </li>
                        <li className="cursor-pointer p-2 ">Check Shirt</li>
                    </ul>
                )}
                <div className="absolute py-2 w-[200px] hidden lg:group-hover:block shadow-lg bg-gray-100">
                    <div className="p-2 cursor-pointer ">
                        <ul className="w-full">
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Mash Fabric Jersey
                                </span>
                            </li>
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Trouers
                                </span>
                            </li>
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Jeans Pants
                                </span>
                            </li>
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Jackets
                                </span>
                            </li>
                            <li className="px-4 py-2  text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Check Shirt
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className={`p-2 font-semibold group border-b-[1px]  lg:border-b-0 ${
                    nav ? 'block border-gray-800' : 'hidden lg:block'
                }`}
            >
                <a href="#" className="flex items-center">
                    <div className="flex justify-between w-full items-center">
                        <span>Combo Offers</span>
                        <button onClick={() => toggleSection('comboOffers')}>
                            {openSections.comboOffers ? (
                                <CiSquareMinus className="lg:hidden text-lg" />
                            ) : (
                                <CiSquarePlus className="lg:hidden text-lg" />
                            )}
                        </button>
                    </div>
                    <RiArrowDropDownLine className="w-[24px] h-[24px] hidden lg:block" />
                </a>
                {openSections.comboOffers && (
                    <ul className="pl-4 mt-2 space-y-1">
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Mash Fabric Jersey
                        </li>
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Trouers
                        </li>
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Jeans Pants
                        </li>
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Jackets
                        </li>
                        <li className="cursor-pointer p-2 ">Check Shirt</li>
                    </ul>
                )}
                <div className="absolute py-2 w-[200px] hidden lg:group-hover:block shadow-lg bg-gray-100">
                    <div className="p-2 cursor-pointer ">
                        <ul className="w-full">
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Mash Fabric Jersey
                                </span>
                            </li>
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Trouers
                                </span>
                            </li>
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Jeans Pants
                                </span>
                            </li>
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Jackets
                                </span>
                            </li>
                            <li className="px-4 py-2  text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Check Shirt
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className={`p-2 font-semibold group border-b-[1px]  lg:border-b-0 ${
                    nav ? 'block border-gray-800' : 'hidden lg:block'
                }`}
            >
                <a href="#" className="flex items-center">
                    <div className="flex justify-between w-full items-center">
                        <span>Wallet</span>
                        <button onClick={() => toggleSection('wallet')}>
                            {openSections.wallet ? (
                                <CiSquareMinus className="lg:hidden text-lg" />
                            ) : (
                                <CiSquarePlus className="lg:hidden text-lg" />
                            )}
                        </button>
                    </div>
                    <RiArrowDropDownLine className="w-[24px] h-[24px] hidden lg:block" />
                </a>
                {openSections.wallet && (
                    <ul className="pl-4 mt-2 space-y-1">
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Mash Fabric Jersey
                        </li>
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Trouers
                        </li>
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Jeans Pants
                        </li>
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Jackets
                        </li>
                        <li className="cursor-pointer p-2 ">Check Shirt</li>
                    </ul>
                )}
                <div className="absolute py-2 w-[200px] hidden lg:group-hover:block shadow-lg bg-gray-100">
                    <div className="p-2 cursor-pointer ">
                        <ul className="w-full">
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Mash Fabric Jersey
                                </span>
                            </li>
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Trouers
                                </span>
                            </li>
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Jeans Pants
                                </span>
                            </li>
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Jackets
                                </span>
                            </li>
                            <li className="px-4 py-2  text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Check Shirt
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className={`p-2 font-semibold group border-b-[1px]  lg:border-b-0 ${
                    nav ? 'block border-gray-800' : 'hidden lg:block'
                }`}
            >
                <a href="#" className="flex items-center">
                    <div className="flex justify-between w-full items-center">
                        <span>Punjabi</span>
                        <button onClick={() => toggleSection('punjabi')}>
                            {openSections.punjabi ? (
                                <CiSquareMinus className="lg:hidden text-lg" />
                            ) : (
                                <CiSquarePlus className="lg:hidden text-lg" />
                            )}
                        </button>
                    </div>
                    <RiArrowDropDownLine className="w-[24px] h-[24px] hidden lg:block" />
                </a>
                {openSections.punjabi && (
                    <ul className="pl-4 mt-2 space-y-1">
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Mash Fabric Jersey
                        </li>
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Trouers
                        </li>
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Jeans Pants
                        </li>
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Jackets
                        </li>
                        <li className="cursor-pointer p-2 ">Check Shirt</li>
                    </ul>
                )}
                <div className="absolute py-2 w-[200px] hidden lg:group-hover:block shadow-lg bg-gray-100">
                    <div className="p-2 cursor-pointer ">
                        <ul className="w-full">
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Mash Fabric Jersey
                                </span>
                            </li>
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Trouers
                                </span>
                            </li>
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Jeans Pants
                                </span>
                            </li>
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Jackets
                                </span>
                            </li>
                            <li className="px-4 py-2  text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Check Shirt
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className={`p-2 font-semibold group border-b-[1px]  lg:border-b-0 ${
                    nav ? 'block border-gray-800' : 'hidden lg:block'
                }`}
            >
                <a href="#" className="flex items-center">
                    <div className="flex justify-between w-full items-center">
                        <span>Bag</span>
                        <button onClick={() => toggleSection('bag')}>
                            {openSections.bag ? (
                                <CiSquareMinus className="lg:hidden text-lg" />
                            ) : (
                                <CiSquarePlus className="lg:hidden text-lg" />
                            )}
                        </button>
                    </div>
                    <RiArrowDropDownLine className="w-[24px] h-[24px] hidden lg:block" />
                </a>
                {openSections.bag && (
                    <ul className="pl-4 mt-2 space-y-1">
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Mash Fabric Jersey
                        </li>
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Trouers
                        </li>
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Jeans Pants
                        </li>
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Jackets
                        </li>
                        <li className="cursor-pointer p-2 ">Check Shirt</li>
                    </ul>
                )}
                <div className="absolute py-2 w-[200px] hidden lg:group-hover:block shadow-lg bg-gray-100">
                    <div className="p-2 cursor-pointer ">
                        <ul className="w-full">
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Mash Fabric Jersey
                                </span>
                            </li>
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Trouers
                                </span>
                            </li>
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Jeans Pants
                                </span>
                            </li>
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Jackets
                                </span>
                            </li>
                            <li className="px-4 py-2  text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Check Shirt
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className={`p-2 font-semibold group border-b-[1px]  lg:border-b-0 ${
                    nav ? 'block border-gray-800' : 'hidden lg:block'
                }`}
            >
                <a href="#" className="flex items-center">
                    <div className="flex justify-between w-full items-center">
                        <span>Flash Sale</span>
                        <button onClick={() => toggleSection('flashSale')}>
                            {openSections.flashSale ? (
                                <CiSquareMinus className="lg:hidden text-lg" />
                            ) : (
                                <CiSquarePlus className="lg:hidden text-lg" />
                            )}
                        </button>
                    </div>
                    <RiArrowDropDownLine className="w-[24px] h-[24px] hidden lg:block" />
                </a>
                {openSections.flashSale && (
                    <ul className="pl-4 mt-2 space-y-1">
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Jackets
                        </li>
                        <li className="cursor-pointer p-2 ">Check Shirt</li>
                    </ul>
                )}
                <div className="absolute py-2 w-[200px] hidden lg:group-hover:block shadow-lg bg-gray-100">
                    <div className="p-2 cursor-pointer ">
                        <ul className="w-full">
                            <li className="px-4 py-2 border-b border-gray-300 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Jackets
                                </span>
                            </li>
                            <li className="px-4 py-2  text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Check Shirt
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className={`p-2 font-semibold group ${
                    nav ? 'block ' : 'hidden lg:block'
                }`}
            >
                <a href="#" className="flex items-center">
                    <div className="flex justify-between w-full items-center">
                        <span>Trending Products</span>
                        <button onClick={() => toggleSection('trending')}>
                            {openSections.trending ? (
                                <CiSquareMinus className="lg:hidden text-lg" />
                            ) : (
                                <CiSquarePlus className="lg:hidden text-lg" />
                            )}
                        </button>
                    </div>
                    <RiArrowDropDownLine className="w-[24px] h-[24px] hidden lg:block" />
                </a>
                {openSections.trending && (
                    <ul className="pl-4 mt-2 space-y-1">
                        <li className="cursor-pointer p-2 border-b-[1px] border-gray-700">
                            Mash Fabric Jersey
                        </li>
                    </ul>
                )}
                <div className="absolute py-2 w-[200px] hidden lg:group-hover:block shadow-lg bg-gray-100">
                    <div className="p-2 cursor-pointer ">
                        <ul className="w-full">
                            <li className="px-4 py-2 text-black capitalize list-none text-sm cursor-pointer font-medium">
                                <span className="hover:text-primary hover:text-secondary  inline-block hover:duration-300">
                                    Mash Fabric Jersey
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Typography>
        </ul>
    );
}

export default Navlist;
