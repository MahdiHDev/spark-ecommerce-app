import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function SimpleSlider({ products }) {
    const slider = React.useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <IoIosArrowForward />,
        prevArrow: <IoIosArrowBack />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <Slider ref={slider} {...settings}>
                {products.map((product, i) => {
                    return (
                        <div key={i}>
                            <div className="sm:w-90% sm:p-2 flex flex-col justify-center items-center shadow-xl m-2 mx-4 border border-gray-200">
                                <img
                                    src={product.img}
                                    alt=""
                                    className="w-[150px] sm:w-full h-[150px] sm:h-[180px] object-cover p-2 rounded-2xl"
                                />
                                <p className="text-gray-500 text-md">
                                    {product.name}
                                </p>
                                <p className="text-primary text-sm">
                                    {product.price}.00 Taka
                                </p>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </>
    );
}
