import { CartProvider } from '@/context/CartContext';
import { FavoriteProvider } from '@/context/FavoriteContext';

function MyApp({ Component, pageProps }) {
    return (
        <CartProvider>
            <FavoriteProvider>
                <Component {...pageProps} />
            </FavoriteProvider>
        </CartProvider>
    );
}

export default MyApp;
