import "@/styles/mainCarrinho.sass";
import { useCart } from '@/context/CartContext';
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import DeleteProductConfirm from "@/components/deleteProductConfirm";
import FinalizePurchaseRequest from "@/components/finalizePurchaseRequest";

export default function MainCarrinho() {
    const { cart, removeFromCart } = useCart();
    const [quantities, setQuantities] = useState({});
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [showFinalizeConfirm, setShowFinalizeConfirm] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    useEffect(() => {
        const initialQuantities = cart.reduce((acc, product) => {
            acc[product.id] = 1;
            return acc;
        }, {});
        setQuantities(initialQuantities);
    }, [cart]);

    const handleQuantityChange = (productId, delta) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: Math.max(1, (prevQuantities[productId] || 1) + delta)
        }));
    };

    const calculateTotal = () => {
        return cart.reduce((acc, product) => acc + product.price * (quantities[product.id] || 1), 0).toFixed(2);
    };

    const handleDeleteClick = (productId) => {
        setProductToDelete(productId);
        setShowDeleteConfirm(true);
    };

    const confirmDeleteProduct = () => {
        removeFromCart(productToDelete);
        setShowDeleteConfirm(false);
        setProductToDelete(null);
    };

    const handleFinalizeClick = () => {
        setShowFinalizeConfirm(true);
    };

    const confirmFinalizePurchase = () => {
        setShowFinalizeConfirm(false);
    };

    return (
        <main>
            <div className="main-container">
                <div className="main-content">
                    <div className="cart-box">
                        <div className="cart-table">
                            <div className="cart-header">
                                <ul>
                                    <li>Produto</li>
                                    <li>Preço</li>
                                    <li>Quantidade</li>
                                    <li>Ações</li>
                                </ul>
                            </div>

                            <div className="cart-body">
                                {cart.length > 0 ? cart.map((product) => (
                                    <div className="cart-item" key={product.id}>
                                        <div className="cart-product">
                                            <div className="product-image">
                                                <Image 
                                                    src={product.image} 
                                                    alt={product.title} 
                                                    width={100} 
                                                    height={100} 
                                                />
                                            </div>
                                            
                                            <div className="product-info">
                                                <h3>{product.title.length > 20 ? product.title.substring(0, 20) + "..." : product.title}</h3>
                                            </div>
                                        </div>

                                        <div className="product-count">
                                            <div className="product-name">
                                                <span>{product.title.length > 20 ? product.title.substring(0, 20) + "..." : product.title}</span>
                                            </div>

                                            <div className="cart-price">
                                                <span>R$ {product.price.toFixed(2)}</span>
                                            </div>
                                            <div className="cart-quantity">
                                                <div className="count-product">
                                                    <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                                                    <span>{quantities[product.id]}</span>
                                                    <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                                                </div>
                                            </div>
                                            <div className="cart-actions">
                                                <button onClick={() => handleDeleteClick(product.id)}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )) : (
                                    <div className="cart-item">
                                        <p className="NonProduct">Nenhum produto no carrinho</p>
                                    </div>
                                )}
                            </div>

                            <div className="cart-footer">
                                <div className="cart-total">
                                    <span>Total</span>
                                    <span id="total">R$ {calculateTotal()}</span>
                                </div>

                                <div className="cart-buttons">
                                    <button id="btn-buy" onClick={handleFinalizeClick}>Finalizar Compra</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showDeleteConfirm && (
                <DeleteProductConfirm 
                    onCancel={() => setShowDeleteConfirm(false)}
                    onConfirm={confirmDeleteProduct}
                />
            )}
            {showFinalizeConfirm && (
                <FinalizePurchaseRequest 
                    onCancel={() => setShowFinalizeConfirm(false)}
                    onConfirm={confirmFinalizePurchase}
                />
            )}
        </main>
    );
}
