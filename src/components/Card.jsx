import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    return (
        <Link
            to={`/products/${item.slug}`}
            className="p-4 border borer-gray-300 rounded-md hover:shadow-xl duration-300 cursor-pointer"
        >
            <img
                src={item.image}
                className="h-[150px] sm:h-[200px] w-full object-cover"
                alt=""
            />
            <h1 className="text-center mt-1 text-gray-600">{item.name}</h1>
            <p className="text-center mt-1 text-primary">
                {item.price}.00 Taka
            </p>
        </Link>
    );
};

export default Card;
