import NavBar from '../core/components/NavBar/NavBar';
import Footer from '../core/components/Footer/Footer';
import Cart from '../core/components/Cart/Cart';

const ShoppingCart = () => {
	return (
		<>
            <div className='flex flex-col min-h-screen'>
                <NavBar />
                <Cart />
                <Footer />
            </div>
		</>
	);
}

export default ShoppingCart;