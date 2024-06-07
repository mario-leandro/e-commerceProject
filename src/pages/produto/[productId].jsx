import { useRouter } from 'next/router';
import UseApi from '@/app/api/api.js';
import { useState, useEffect } from 'react';
import Header from '@/components/subfaces/header';
import Footer from '@/components/subfaces/footer';
import "@/styles/globals.sass";
import "@/styles/product.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '@/context/CartContext'; // Importar o contexto do carrinho

function ProductDetails() {
    const router = useRouter();
    const { productId } = router.query;
    const [productData, setProductData] = useState({});
    const { addToCart } = useCart(); // Usar o hook do contexto do carrinho

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await UseApi.getProductById(productId);
                setProductData(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProduct();
    }, [productId]);

    if (!productData) return <div>Carregando...</div>;

    const handleAddToCart = () => {
        addToCart(productData);
        router.push('/carrinho'); // Redirecionar para a página do carrinho
    };

    return (
        <>
            <Header />
            <main>
                <div className="main-container">
                    <div className="main-content">
                        <div className="product-box">
                            <div className="product-info">
                                <div className="product-image">
                                    <img src={productData.image} alt={productData.name} />
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
                                        
                                        <form action="/favoritos" method='POST'>
                                            <input type="hidden" name="favorite" value={productData.id} />
                                            <button type="submit" id="addFavorite">
                                                <FontAwesomeIcon icon={faHeart} />
                                            </button>
                                        </form>
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
