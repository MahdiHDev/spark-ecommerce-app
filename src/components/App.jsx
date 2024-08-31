import { RouterProvider } from 'react-router-dom';
import '../../App.css';
import Layout from '../routes/Layout';
import { router } from '../routes/Routes';

function App() {
    return (
        <div>
            <RouterProvider router={router}>
                <Layout />
            </RouterProvider>
        </div>
    );
}

export default App;
