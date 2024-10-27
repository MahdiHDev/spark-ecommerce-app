import { useState } from 'react';
import { MdNavigateNext, MdProductionQuantityLimits } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useGetPaginatedProductsQuery } from '../../services/productsApi';
import Card from '../Card';

const Products = () => {
    const [page, setPage] = useState(1);
    const limit = 12;

    const { data, error, isLoading } = useGetPaginatedProductsQuery({
        page,
        limit,
    });
    console.log(data);

    const totalProducts = data?.payload?.pagination?.totalNumberOfProducts || 0;
    const totalPages = Math.ceil(totalProducts / limit);

    const renderPageButtons = () => {
        const maxVisiblePages = 5; // Number of visible buttons at once
        const buttons = [];

        // Determine the start and end page numbers
        let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
        let endPage = startPage + maxVisiblePages - 1;

        // Adjust if we're at the end of the total pages
        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        // Generate the page buttons
        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => setPage(i)}
                    disabled={page === i}
                    style={{
                        fontWeight: page === i ? 'bold' : 'normal',
                    }}
                    className={`bg-primary text-white mx-1 p-[4px] rounded-sm text-sm shadow-lg ${
                        page === i ? 'bg-green-500' : ''
                    } hover:bg-gray-200 hover:text-black shadow-gray-500 shadow-sm cursor-pointer`}
                >
                    {i <= 9 ? `0${i}` : i}
                </button>
            );
        }

        return buttons;
    };

    const handleLastPage = () => {
        setPage(totalPages);
    };

    const handleFirstPage = () => {
        setPage(1);
    };

    return (
        <div className="max-width">
            <h1 className="text-3xl p-2">#Products</h1>
            <p className="text-gray-400 p-3 flex items-center">
                <Link className="hover:underline" to="/">
                    Home
                </Link>
                <MdNavigateNext />
                <Link className="hover:underline" to="/products">
                    Category
                </Link>
            </p>
            <div className="2lg:flex gap-10 mt-10">
                <div className="2lg:p-3 w-full 2lg:w-1/4 2lg:border-r border-gray-300 2lg:sticky top-0">
                    <h3 className=" text-xl">Categories</h3>
                    <ul className="text-gray-500 px-2 py-4 mt-1 flex flex-wrap 2lg:flex-col gap-3">
                        <li className="cursor-pointer p-2 2lg:px-0 bg-primary 2lg:bg-white rounded-md text-sm 2lg:text-[16px] text-white 2lg:text-gray-500">
                            All Products
                        </li>
                        <li className="cursor-pointer p-2 2lg:px-0 bg-primary 2lg:bg-white rounded-md text-sm 2lg:text-[16px] text-white 2lg:text-gray-500">
                            Trending
                        </li>
                        <li className="cursor-pointer p-2 2lg:px-0 bg-primary 2lg:bg-white rounded-md text-sm 2lg:text-[16px] text-white 2lg:text-gray-500">
                            Latest
                        </li>
                        <li className="cursor-pointer p-2 2lg:px-0 bg-primary 2lg:bg-white rounded-md text-sm 2lg:text-[16px] text-white 2lg:text-gray-500">
                            Mash-Fabric-Jersy
                        </li>
                        <li className="cursor-pointer p-2 2lg:px-0 bg-primary 2lg:bg-white rounded-md text-sm 2lg:text-[16px] text-white 2lg:text-gray-500">
                            Jeans
                        </li>
                        <li className="cursor-pointer p-2 2lg:px-0 bg-primary 2lg:bg-white rounded-md text-sm 2lg:text-[16px] text-white 2lg:text-gray-500">
                            Wallet
                        </li>
                        <li className="cursor-pointer p-2 2lg:px-0 bg-primary 2lg:bg-white rounded-md text-sm 2lg:text-[16px] text-white 2lg:text-gray-500">
                            Bag
                        </li>
                        <li className="cursor-pointer p-2 2lg:px-0 bg-primary 2lg:bg-white rounded-md text-sm 2lg:text-[16px] text-white 2lg:text-gray-500">
                            Jacket
                        </li>
                        <li className="cursor-pointer p-2 2lg:px-0 bg-primary 2lg:bg-white rounded-md text-sm 2lg:text-[16px] text-white 2lg:text-gray-500">
                            Trowser
                        </li>
                        <li className="cursor-pointer p-2 2lg:px-0 bg-primary 2lg:bg-white rounded-md text-sm 2lg:text-[16px] text-white 2lg:text-gray-500">
                            Check Shirt
                        </li>
                    </ul>
                </div>

                {isLoading && (
                    <p className="text-center text-xl text-gray-400">
                        Loading...
                    </p>
                )}
                <div className="w-full 2lg:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
                    {data &&
                        data?.payload?.products.map((product, id) => {
                            return <Card key={id} item={product} />;
                        })}
                </div>

                {error && (
                    <div className="w-full 2lg:w-3/4 flex justify-center items-center p-5 flex-col text-gray-400">
                        <MdProductionQuantityLimits className="text-5xl m-4 " />
                        <p>No Products Found</p>
                    </div>
                )}
            </div>
            <div className="text-center pt-5 mt-5">
                {/* Pagination controls */}
                <div>
                    <button
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                        className="bg-primary text-white mx-1 p-[4px] rounded-sm text-sm hover:bg-gray-200 hover:text-black shadow-gray-500 shadow-sm cursor-pointer"
                    >
                        Previous
                    </button>
                    {totalPages > 10 && (
                        <button
                            className="bg-primary text-white mx-1 p-[4px] rounded-sm text-sm hover:bg-gray-200 hover:text-black shadow-gray-500 shadow-sm cursor-pointer"
                            onClick={handleFirstPage}
                        >
                            First
                        </button>
                    )}

                    {/* Render page buttons 1 to 5 */}
                    {renderPageButtons()}
                    {/* Render 'Last' button */}
                    {totalPages > 5 && (
                        <button
                            className="bg-primary text-white mx-1 p-[4px] rounded-sm text-sm shadow-lg hover:bg-gray-200 hover:text-black shadow-gray-500 shadow-sm cursor-pointer"
                            onClick={handleLastPage}
                            style={{ marginLeft: '10px' }}
                        >
                            Last
                        </button>
                    )}
                    <button
                        className="bg-primary text-white mx-1 p-[4px] rounded-sm text-sm shadow-lg hover:bg-gray-200 hover:text-black shadow-gray-500 shadow-sm cursor-pointer"
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Products;
