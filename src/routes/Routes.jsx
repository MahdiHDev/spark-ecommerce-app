import { createBrowserRouter } from 'react-router-dom';
import About from '../components/pages/About';
import AddtoCart from '../components/pages/AddtoCart';
import Home from '../components/pages/Home';
import Notfound from '../components/pages/Notfound';
import Products from '../components/pages/Products';
import Layout from './Layout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/products',
                element: <Products />,
            },
            {
                path: '/*',
                element: <Notfound />,
            },
            {
                path: '/cart',
                element: <AddtoCart />,
            },
        ],
    },
]);
