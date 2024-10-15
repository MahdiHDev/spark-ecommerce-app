import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/1.jpg';
import img10 from '../../assets/images/10.jpg';
import img11 from '../../assets/images/11.jpg';
import img12 from '../../assets/images/12.jpg';
import img13 from '../../assets/images/13.jpg';
import img14 from '../../assets/images/14.jpg';
import img15 from '../../assets/images/15.jpg';
import img16 from '../../assets/images/16.jpg';
import img17 from '../../assets/images/17.jpg';
import img18 from '../../assets/images/18.jpg';
import img19 from '../../assets/images/19.jpg';
import img2 from '../../assets/images/2.jpg';
import img20 from '../../assets/images/20.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';
import img6 from '../../assets/images/6.jpg';
import img7 from '../../assets/images/7.jpg';
import img8 from '../../assets/images/8.jpg';
import img9 from '../../assets/images/9.jpg';
import Card from '../Card';

const Products = () => {
    const cardItems = [
        {
            image: img1,
            name: 'This is a product',
            price: '480',
        },
        {
            image: img2,
            name: 'This is a product',
            price: '480',
        },
        {
            image: img3,
            name: 'This is a product',
            price: '480',
        },
        {
            image: img4,
            name: 'This is a product',
            price: '480',
        },
        {
            image: img5,
            name: 'This is a product',
            price: '480',
        },
        {
            image: img6,
            name: 'This is a product',
            price: '480',
        },
        {
            image: img7,
            name: 'This is a product',
            price: '480',
        },
        {
            image: img8,
            name: 'This is a product',
            price: '480',
        },
        {
            image: img9,
            name: 'This is a product',
            price: '480',
        },
        {
            image: img10,
            name: 'This is a product',
            price: '480',
        },
        {
            image: img11,
            name: 'This is a product',
            price: '480',
        },
        {
            image: img12,
            name: 'This is a product',
            price: '480',
        },
        {
            image: img13,
            name: 'This is a product',
            price: '480',
        },
        {
            image: img14,
            name: 'This is a product',
            price: '480',
        },
        {
            image: img15,
            name: 'This is a product',
            price: '480',
        },
        {
            image: img16,
            name: 'This is a product',
            price: '480',
        },
        {
            image: img17,
            name: 'This is a product',
            price: '480',
        },
        {
            image: img18,
            name: 'This is a product',
            price: '480',
        },
        {
            image: img19,
            name: 'This is a product',
            price: '480',
        },
        {
            image: img20,
            name: 'This is a product',
            price: '480',
        },
    ];

    return (
        <div className="max-width">
            <h1 className="text-3xl p-2">#Products</h1>
            <p className="text-gray-400 p-3">
                <Link className="hover:underline" to="/">
                    Home
                </Link>{' '}
                {'#'}{' '}
                <Link className="hover:underline" to="/products">
                    Category
                </Link>
            </p>
            <div className="flex gap-10 mt-10">
                <div className="p-3 w-1/4 border-r border-gray-300 sticky top-0">
                    <h3 className=" text-xl">Categories</h3>
                    <ul className="text-gray-500 px-2 mt-1">
                        <li className="cursor-pointer py-1">All Products</li>
                        <li className="cursor-pointer py-1">Trending</li>
                        <li className="cursor-pointer py-1">Latest</li>
                        <li className="cursor-pointer py-1">
                            Mash-Fabric-Jersy
                        </li>
                        <li className="cursor-pointer py-1">Jeans</li>
                        <li className="cursor-pointer py-1">Wallet</li>
                        <li className="cursor-pointer py-1">Bag</li>
                        <li className="cursor-pointer py-1">Jacket</li>
                        <li className="cursor-pointer py-1">Trowser</li>
                        <li className="cursor-pointer py-1">Check Shirt</li>
                    </ul>
                </div>
                <div className="w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-start">
                    {cardItems.map((cardItem, i) => {
                        return <Card key={i} item={cardItem} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Products;
