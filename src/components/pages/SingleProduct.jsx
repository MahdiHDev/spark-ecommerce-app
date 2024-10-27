import { useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import ReactImageZoom from 'react-image-zoom';
import { Link, useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../services/productsApi';

const SingleProduct = () => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const sizes = ['M', 'L', 'XL', 'XXL'];

    const handleSelectedSize = (size) => {
        setSelectedSize(size);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const { productId } = useParams();

    const { data, error, isLoading } = useGetProductByIdQuery(productId);
    const product = data?.payload.product;

    const props = {
        // width: 400,
        // height: 300,
        // zoomWidth: 400,
        img: product?.image,
        zoomStyle: 'border: none; box-shadow: none;',
        zoomPosition: 'right',
        cursor: 'pointer',
        scale: 1.2,
    };

    return (
        <div className="max-width py-5 mt-5">
            <p className="text-gray-400 p-3 flex items-center">
                <Link to="/" className="hover:underline">
                    Home
                </Link>
                <MdNavigateNext />
                <Link to="/products" className="hover:underline">
                    Products
                </Link>
                <MdNavigateNext />
                <span className="hover:underline">{productId}</span>
            </p>

            {isLoading && (
                <p className="text-center text-xl text-gray-400">Loading...</p>
            )}

            {product && (
                <div className="flex flex-col 2lg:flex-row justify-center gap-4 lg:gap-8 mt-5">
                    <div className="w-full 2lg:w-1/4 flex items-center justify-center">
                        <ReactImageZoom
                            className="w-full max-h-[200px]"
                            {...props}
                        />
                    </div>
                    <div className="w-full 2lg:w-2/4 mx-auto">
                        <h1 className="text-primary text-3xl font-semibold">
                            {product.name}
                        </h1>
                        <div className="">
                            <p className="mt-2">
                                <span className="font-semibold">Price:</span>{' '}
                                {product.price} Taka
                            </p>
                            <p className="mt-2">
                                <span className="font-semibold">Category:</span>{' '}
                                {product?.category.name}
                            </p>
                            {product.category.name !== 'wallet' && (
                                <div className="mt-2">
                                    <span className="font-semibold">Size:</span>
                                    <div className="flex gap-2 py-2 text-center">
                                        {sizes.map((size) => {
                                            return (
                                                <button
                                                    key={size}
                                                    className={`py-1 px-8 text-sm border border-1 border-primary ${
                                                        selectedSize === size
                                                            ? 'bg-primary text-white'
                                                            : 'bg-white text-primary'
                                                    }`}
                                                    style={{
                                                        backgroundColor:
                                                            selectedSize ===
                                                            size
                                                                ? 'bg-primary'
                                                                : '',
                                                    }}
                                                    onClick={() =>
                                                        handleSelectedSize(size)
                                                    }
                                                >
                                                    {size}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center gap-4 mt-2">
                                <span className="text-lg font-semibold">
                                    Quantity :
                                </span>
                                <div className="flex border border-primary rounded-md divide-x divide-primary">
                                    <button
                                        onClick={decreaseQuantity}
                                        className="px-3 py-1 text-gray-500 hover:text-white hover:bg-primary focus:outline-none"
                                    >
                                        −
                                    </button>
                                    <span className="px-4 py-1 text-center text-gray-700 font-medium">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={increaseQuantity}
                                        className="px-3 py-1 text-gray-500 hover:text-white hover:bg-primary focus:outline-none"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <p className="mt-2">
                                <span className="font-semibold">
                                    Description:
                                </span>{' '}
                                {product.description}{' '}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {error && (
                <div className="w-full 2lg:w-3/4 flex justify-center items-center p-5 flex-col text-gray-400">
                    <p>No Products Found</p>
                </div>
            )}
        </div>
    );
};

export default SingleProduct;
