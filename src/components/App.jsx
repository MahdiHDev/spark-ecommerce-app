import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
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
        </Provider>
    );
}

export default App;
