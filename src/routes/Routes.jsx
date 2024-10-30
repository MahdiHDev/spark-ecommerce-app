import { createBrowserRouter } from 'react-router-dom';
import About from '../components/pages/About';
import AddtoCart from '../components/pages/AddtoCart';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import Notfound from '../components/pages/Notfound';
import Playground from '../components/pages/Playground';
import Products from '../components/pages/Products';
import SignUp from '../components/pages/SignUp';
import SingleProduct from '../components/pages/SingleProduct';
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
                path: '/products/:productId',
                element: <SingleProduct />,
            },
            {
                path: '*',
                element: <Notfound />,
            },
            {
                path: '/cart',
                element: <AddtoCart />,
            },
            {
                path: '/playground',
                element: <Playground />,
            },
            {
                path: '/sign-up',
                element: <SignUp />,
            },
            {
                path: '/login',
                element: <Login />,
            },
        ],
    },
]);
