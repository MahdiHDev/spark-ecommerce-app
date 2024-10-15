import classes from '../styles/textanimation.module.css';

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = [
    'Ignite Your Style with Spark',
    `Spark Men's Fashion: Where Elegance Meets Edge`,
    `Elevate Your Wardrobe: Spark Men's Fashion`,
    'Unleash Your Inner Flame with Spark',
];

const Banner = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div
            className={`${classes.banner} text-white text-sm sm:text-xl md:text-2xl lg:text-3xl flex items-center justify-center object-contain h-[30vh] md:h-[50vh] w-full p-5 flex-col tracking-wider`}
        >
            <TextTransition springConfig={presets.wobbly}>
                {TEXTS[index % TEXTS.length]}
            </TextTransition>
            <Link
                to="/products"
                className="mt-10 bg-primary text-white hover:bg-white hover:text-primary duration-300 z-10 flex justify-center items-center md:text-lg py-2 px-6 gap-3 rounded-md cursor-pointer text-sm"
            >
                Shop Now <FaArrowRight />
            </Link>
        </div>
    );
};

export default Banner;
