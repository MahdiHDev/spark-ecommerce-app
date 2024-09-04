import React from 'react';
import { TbShirtOff } from 'react-icons/tb';

const Notfound = () => {
    return (
        <div className="max-width text-gray-300 p-5 flex items-center justify-center flex-col h-[80vh]">
            <TbShirtOff className="w-[100px] md:w-[150px] h-auto mx-auto" />
            <h1 className="text-center text-xl md:text-3xl">
                Error <span className="font-bold italic">404</span> Page not
                Found!
            </h1>
        </div>
    );
};

export default Notfound;
