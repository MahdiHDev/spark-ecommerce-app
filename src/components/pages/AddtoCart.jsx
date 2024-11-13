import { useEffect, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EmptyCart from '../../assets/images/empty.png';
import { removeItem, updateQuantity } from '../../features/products/cartSlice';

const AddtoCart = () => {
    const [total, setTotal] = useState(0);

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        const calculatedTotal = cart.items.reduce(
            (acc, item) => acc + item.subtotal,
            0
        );
        setTotal(calculatedTotal);
    }, [cart.items]);

    // handling stuffs

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    };

    const handleUpdateQuantity = (item, newQuantity) => {
        const newSubtotal = item.price * newQuantity; // calculate new subtotal
        dispatch(
            updateQuantity({
                _id: item._id,
                quantity: newQuantity,
                subtotal: newSubtotal,
            })
        );
    };

    return (
        <>
            {cart.items.length > 0 ? (
                <div className="max-width min-h-screen p-5">
                    {cart.items.map((item) => (
                        <div
                            className="flex gap-3 my-5 items-center bg-gray-100 p-4 relative"
                            key={item._id}
                        >
                            <RxCross1
                                onClick={() => handleRemoveItem(item._id)}
                                className="absolute right-2 top-2 sm:hidden cursor-pointer"
                            />
                            <img
                                className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-cover border-4 shadow-gray-400 shadow-md cursor-pointer"
                                src={item.image}
                                alt="product image"
                            />
                            <div className="sm:flex justify-between items-center w-full md:p-2">
                                <div className="px-5">
                                    <h1 className="sm:text-xl font-bold ">
                                        {item.name}
                                    </h1>
                                    <p className="bg-black w-full h-[1px] mb-2"></p>
                                    {item.size && (
                                        <p className="mb-1 text-sm">
                                            <span className="font-semibold">
                                                Size:{' '}
                                            </span>
                                            <span className="text-primary">
                                                {item.size}
                                            </span>
                                        </p>
                                    )}
                                    <p className="mb-1 text-sm">
                                        <span className="font-semibold">
                                            Price:{' '}
                                        </span>
                                        <span className="text-primary">
                                            {item.price}
                                        </span>
                                        Taka
                                    </p>
                                    <p className="mb-2 text-sm">
                                        <span className="font-semibold">
                                            Category:
                                        </span>{' '}
                                        {item.category.name}
                                    </p>

                                    <div className="flex px-2 text-lg sm:text-xl">
                                        <button
                                            onClick={() =>
                                                handleUpdateQuantity(
                                                    item,
                                                    item.quantity - 1
                                                )
                                            }
                                            className="p-2 text-gray-500"
                                        >
                                            −
                                        </button>
                                        <span className="p-2 text-center text-gray-700">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() =>
                                                handleUpdateQuantity(
                                                    item,
                                                    item.quantity + 1
                                                )
                                            }
                                            className="p-2 text-gray-500"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p>
                                        <span className="font-semibold text-sm">
                                            Subtotal:
                                        </span>{' '}
                                        {item.subtotal} Taka
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleRemoveItem(item._id)}
                                    className="hidden sm:flex items-center gap-1"
                                >
                                    Remove <RxCross1 />{' '}
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-end px-4 font-semibold">
                        <p className="text-primary">Total: {total}</p>
                    </div>
                </div>
            ) : (
                <div className="max-width flex items-center justify-center flex-col py-5">
                    <h1 className="text-3xl tracking-widest pt-5 text-gray-400">
                        Cart Is Empty
                    </h1>
                    <img
                        src={EmptyCart}
                        alt="Cart"
                        className="w-auto h-[200px] sm:h-[250px] md:h-[350px] opacity-[0.7]"
                    />
                    <Link
                        to="/products"
                        className="bg-primary text-white p-2 rounded-md border hover:border-primary hover:bg-white hover:text-gray-500 hover:shadow-md transition duration-300"
                    >
                        Go to Shopping
                    </Link>
                </div>
            )}
        </>
    );
};

export default AddtoCart;
