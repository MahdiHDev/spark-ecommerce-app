import { RxCross1 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EmptyCart from '../../assets/images/empty.png';

const AddtoCart = () => {
    const cart = useSelector((state) => state.cart);
    console.log(cart);

    return (
        <>
            {cart.items.length > 0 ? (
                <div className="max-width min-h-screen p-5">
                    {cart.items.map((item) => (
                        <div
                            className="flex gap-3 my-5 items-center bg-gray-100 p-4"
                            key={item._id}
                        >
                            <img
                                className="w-[150px] h-[150px] object-cover"
                                src={item.image}
                                alt="product image"
                            />
                            <div className="flex justify-between items-center w-full p-2">
                                <div className="px-5">
                                    <p>{item.category.name}</p>
                                    <h1>{item.name}</h1>
                                    <p>{item.price} Taka</p>

                                    <button>+</button>
                                    <span>{item.quantity}</span>
                                    <button>-</button>
                                </div>
                                <button className="flex items-center">
                                    Remove <RxCross1 />{' '}
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-end px-4 font-semibold">
                        <p className="text-primary">Total: 00</p>
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
