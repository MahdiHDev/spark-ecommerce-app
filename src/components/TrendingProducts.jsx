import { IoIosTrendingUp } from 'react-icons/io';
import image1 from '../assets/images/1.jpg';
import image10 from '../assets/images/10.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import image4 from '../assets/images/4.jpg';
import image5 from '../assets/images/5.jpg';
import image6 from '../assets/images/6.jpg';
import image7 from '../assets/images/7.jpg';
import image8 from '../assets/images/8.jpg';
import image9 from '../assets/images/9.jpg';
import SimpleSlider from '../libraries/SimpleSlider';

const TrendingProducts = () => {
    const products = [
        {
            img: image1,
            name: "Men's Outfit",
            price: '480',
        },
        {
            img: image2,
            name: "Men's Outfit",
            price: '480',
        },
        {
            img: image3,
            name: "Men's Outfit",
            price: '480',
        },
        {
            img: image3,
            name: "Men's Outfit",
            price: '480',
        },
        {
            img: image4,
            name: "Men's Outfit",
            price: '480',
        },
        {
            img: image5,
            name: "Men's Outfit",
            price: '480',
        },
        {
            img: image6,
            name: "Men's Outfit",
            price: '480',
        },
        {
            img: image7,
            name: "Men's Outfit",
            price: '480',
        },
        {
            img: image8,
            name: "Men's Outfit",
            price: '480',
        },
        {
            img: image9,
            name: "Men's Outfit",
            price: '480',
        },
        {
            img: image10,
            name: "Men's Outfit",
            price: '480',
        },
    ];

    return (
        <div>
            <h2 className="text-2xl p-4 mx-6">
                Trending Products <IoIosTrendingUp className="inline" />
            </h2>
            <SimpleSlider products={products} />
        </div>
    );
};

export default TrendingProducts;
