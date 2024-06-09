import "@/styles/mainFavorite.sass";
import { useFavorites } from '@/context/FavoriteContext';
import Image from 'next/image';

export default function MainFavorite() {
    const { favorites, removeFromFavorites } = useFavorites();

    return (
        <main>
            <div className="main-container">
                <div className="main-content">
                    <div className="favorite-box">
                        <div className="favorite-title">
                            <h1>Produtos Favoritos</h1>
                        </div>

                        <div className="favorite-list">
                            {favorites.length > 0 ? favorites.map((product) => (
                                <div className="product-card" key={product.id}>
                                    <div className="card-image">
                                        <Image src={product.image} alt={product.title} width={100} height={100} />
                                    </div>

                                    <div className="card-body">
                                        <div className="card-name">
                                            <h2>{product.title.length > 18 ? product.title.substring(0, 18) + "..." : product.title}</h2>
                                        </div>

                                        <div className="card-price">
                                            <p>R$ {product.price.toFixed(2)}</p>
                                        </div>

                                        <div className="card-button">
                                            <button onClick={() => removeFromFavorites(product.id)}>Remover</button>
                                        </div>
                                    </div>
                                </div>
                            )) : (
                                <p>Nenhum produto favorito</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}


