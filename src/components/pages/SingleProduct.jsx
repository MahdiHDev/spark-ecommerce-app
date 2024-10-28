import { useEffect, useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import ReactImageZoom from 'react-image-zoom';
import { Link, useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../services/productsApi';

const SingleProduct = () => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [priceState, setPriceState] = useState(0);

    const { productId } = useParams();
    const { data, error, isLoading } = useGetProductByIdQuery(productId);

    const sizes = ['M', 'L', 'XL', 'XXL'];

    const handleSelectedSize = (size) => {
        setSelectedSize(size);
    };

    const product = data?.payload.product;

    // handling price instead of quantity
    useEffect(() => {
        if (data) {
            setPriceState(data.payload.product.price);
        }
    }, [data]);

    const props = {
        // width: 300,
        // height: 300,
        zoomWidth: 500, // Width of the zoomed image
        img: product?.image, // Product image from the backend
        zoomPosition: 'right', // Position of the zoomed image (can also be 'top', 'left', 'bottom' based on layout)
        cursor: 'crosshair', // Crosshair cursor to indicate zoom functionality
        scale: 1.5, // A moderate zoom level
        zoomStyle: 'border: none; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);', // Subtle shadow for better visibility
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
        setPriceState(priceState + data.payload.product.price);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setPriceState(priceState - data.payload.product.price);
        }
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
                <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-8 mt-5">
                    {/* Product Image */}
                    <div className="w-full lg:w-1/3 flex items-center justify-center">
                        <ReactImageZoom
                            className="w-full max-h-[300px] sm:max-h-[400px] lg:max-h-[500px]"
                            {...props}
                        />
                    </div>

                    {/* Product Details */}
                    <div className="w-full lg:w-2/3 mx-auto p-4">
                        <h1 className="capitalize text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 lg:mb-5">
                            {product.name}
                        </h1>
                        <div>
                            {/* Price */}
                            <p className="mt-2 text-base sm:text-lg">
                                <span className="font-semibold">Price:</span>{' '}
                                <span className="text-primary text-lg sm:text-xl font-medium">
                                    {priceState} Taka
                                </span>
                            </p>

                            {/* Category */}
                            <p className="mt-2 text-base sm:text-lg">
                                <span className="font-semibold">Category:</span>{' '}
                                {product?.category.name}
                            </p>

                            {/* Size Selector */}
                            {product.category.name !== 'wallet' && (
                                <div className="mt-3 lg:mt-4">
                                    <span className="font-semibold text-base sm:text-lg">
                                        Size:
                                    </span>
                                    <div className="flex flex-wrap gap-2 py-2">
                                        {sizes.map((size) => (
                                            <button
                                                key={size}
                                                className={`py-1 px-4 text-sm border border-primary rounded-md transition-colors duration-150 ${
                                                    selectedSize === size
                                                        ? 'bg-primary text-white'
                                                        : 'bg-white text-primary'
                                                }`}
                                                onClick={() =>
                                                    handleSelectedSize(size)
                                                }
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Quantity Selector */}
                            <div className="flex items-center gap-4 mt-3 lg:mt-4">
                                <span className="text-lg font-semibold">
                                    Quantity :
                                </span>
                                <div className="flex border border-primary rounded-md divide-x divide-primary">
                                    <button
                                        onClick={decreaseQuantity}
                                        className="px-3 py-1 text-gray-500 hover:text-white hover:bg-primary transition duration-150"
                                    >
                                        −
                                    </button>
                                    <span className="px-4 py-1 text-center text-gray-700 font-medium">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={increaseQuantity}
                                        className="px-3 py-1 text-gray-500 hover:text-white hover:bg-primary transition duration-150"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="mt-3 lg:mt-4 text-base sm:text-lg">
                                <span className="font-semibold">
                                    Description:
                                </span>{' '}
                                {product.description}
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
