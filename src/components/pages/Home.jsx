import Banner from '../Banner';
import Catagory from '../Catagory';
import TrendingProducts from '../TrendingProducts';

function Home() {
    return (
        <div className="w-full">
            <div>
                <Banner />
            </div>
            <div className="max-width">
                <Catagory />
                <TrendingProducts />
            </div>
        </div>
    );
}

export default Home;
