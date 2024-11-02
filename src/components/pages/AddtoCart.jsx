import EmptyCart from '../../assets/images/empty.png';

const AddtoCart = () => {
    return (
        <div className="max-width flex items-center justify-center flex-col py-5">
            <h1 className="text-3xl tracking-widest pt-5 text-gray-400">
                Cart Is Empty
            </h1>
            <img
                src={EmptyCart}
                alt="Cart"
                className="w-auto h-[200px] sm:h-[250px] md:h-[350px] opacity-[0.7]"
            />
        </div>
    );
};

export default AddtoCart;
