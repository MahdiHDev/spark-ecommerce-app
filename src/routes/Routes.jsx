import { createBrowserRouter } from 'react-router-dom';
import About from '../components/pages/About';
import Home from '../components/pages/Home';
import Notfound from '../components/pages/Notfound';
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
                path: '/*',
                element: <Notfound />,
            },
        ],
    },
]);
