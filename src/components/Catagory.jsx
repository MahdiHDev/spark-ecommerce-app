import { Link } from 'react-router-dom';
import checkShirt from '../assets/categories/checkShirt.jpg';
import dropShoulder from '../assets/categories/dropShoulder.jpg';
import pants from '../assets/categories/Pants.jpg';
import polo from '../assets/categories/polo.jpg';
import slipper from '../assets/categories/Slipper.jpg';
import trowsers from '../assets/categories/Trowsers.jpg';
import tShirt from '../assets/categories/tShirt.jpg';
import wallet from '../assets/categories/wallets.jpg';

const categories = [
    {
        catagoryName: 'Polo Shirt',
        catagoryImg: polo,
    },
    {
        catagoryName: 'Check Shirts',
        catagoryImg: checkShirt,
    },
    {
        catagoryName: 'Drop Shoulder',
        catagoryImg: dropShoulder,
    },
    {
        catagoryName: 'Pants',
        catagoryImg: pants,
    },
    {
        catagoryName: 'Slippers',
        catagoryImg: slipper,
    },
    {
        catagoryName: 'Trowsers',
        catagoryImg: trowsers,
    },
    {
        catagoryName: 'T Shirt',
        catagoryImg: tShirt,
    },
    {
        catagoryName: 'Wallet',
        catagoryImg: wallet,
    },
];

const Catagory = () => {
    return (
        <div className="flex gap-2 flex-wrap my-5 justify-center items-center">
            {categories.map((category, i) => {
                return (
                    <Link
                        to="/about"
                        key={i}
                        className="p-2 w-[45%] md:w-[30%] lg:w-[20%] h-[180px] md:h-[250px] relative cursor-pointer object-cover transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                        <img
                            src={category.catagoryImg}
                            alt="category"
                            className="w-full h-full object-cover "
                        />
                        <p className="absolute bottom-[20px] text-sm sm:text-xl text-white p-2 bg-[rgba(0,0,0,0.5)]">
                            {category.catagoryName}
                        </p>
                    </Link>
                );
            })}
        </div>
    );
};

export default Catagory;
