import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../App.css';
import { store } from '../app/store';
import Layout from '../routes/Layout';
import { router } from '../routes/Routes';

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router}>
                <Layout />
            </RouterProvider>
            <ToastContainer position="bottom-right" autoClose={3000} />
        </Provider>
    );
}

export default App;
