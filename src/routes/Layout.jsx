import { Outlet } from 'react-router-dom';
import Footer from '../components/partials/Footer';
import Header from '../components/partials/Header';
function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
