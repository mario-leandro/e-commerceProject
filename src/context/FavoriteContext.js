import { createContext, useState, useContext } from 'react';

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (product) => {
        setFavorites((prevFavorites) => [...prevFavorites, product]);
    };

    const removeFromFavorites = (productId) => {
        setFavorites((prevFavorites) =>
            prevFavorites.filter((product) => product.id !== productId)
        );
    };

    return (
        <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoriteContext.Provider>
    );
}

export const useFavorites = () => {
    return useContext(FavoriteContext);
};
