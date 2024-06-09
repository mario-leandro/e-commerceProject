import { useRouter } from 'next/router';
import UseApi from '@/app/api/api.js';
import { useState, useEffect } from 'react';
import Header from '@/components/subfaces/header';
import Footer from '@/components/subfaces/footer';
import "@/styles/globals.sass";
import "@/styles/product.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoriteContext';
import Image from 'next/image';

function ProductDetails() {
    const router = useRouter();
    const { productId } = router.query;
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();
    const { addToFavorites } = useFavorites();

    useEffect(() => {
        if (!productId) return; 

        const fetchProduct = async () => {
            try {
                const response = await UseApi.getProductById(productId);
                setProductData(response);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    const handleAddToCart = () => {
        addToCart(productData);
        router.push('/carrinho');
    };

    const handleAddToFavorites = () => {
        addToFavorites(productData);
    };

    if (loading) {
        return (
            <>
                <Header />
                <main>
                    <div className="main-container">
                        <div className="main-content">
                            <div className="product-box">
                                <div className="product-info">
                                    <div className="product-top">
                                        <div className="product-name">
                                            <h1>Carregando...</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    if (!productData) {
        return (
            <>
                <Header />
                <main>
                    <div className="main-container">
                        <div className="main-content">
                            <div className="product-box">
                                <div className="product-info">
                                    <div className="product-top">
                                        <div className="product-name">
                                            <h1>Produto não encontrado</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        ); 
    }

    return (
        <>
            <Header />
            <main>
                <div className="main-container">
                    <div className="main-content">
                        <div className="product-box">
                            <div className="product-info">
                                <div className="product-image">
                                    <Image 
                                        src={productData.image} 
                                        alt={productData.title} 
                                        width={300} 
                                        height={300}
                                    />
                                </div>
                                
                                <div className="product-top">
                                    <div className="product-name">
                                        <h1>{productData.title}</h1>
                                    </div>

                                    <div className="product-price">
                                        <h2>R$ {productData.price}</h2>
                                    </div>

                                    <div className="product-buttons">
                                        <button onClick={handleAddToCart} id="addCart">
                                            <FontAwesomeIcon icon={faCartShopping} />
                                        </button>
                                        
                                        <button onClick={handleAddToFavorites} id="addFavorite">
                                            <FontAwesomeIcon icon={faHeart} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="product-bottom">
                                <div className="product-description">
                                    <p>{productData.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default ProductDetails;
