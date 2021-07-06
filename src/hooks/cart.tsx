import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { createContext } from "react";

interface IProductsInCart{
    id: number;
    title: string;
    cover_path: string;
    author: string;
    publisher: string;
    format_type: string;
}

interface ICartContext{
    productsInCart: IProductsInCart[];
    handleAddProductInCart(product: IProductsInCart): void;
}

const CartContext = createContext({} as ICartContext);

export const CartProvider: React.FC = ({ children }) => {
    const [productsInCart, setProductsInCart] = useState<IProductsInCart[]>([]);

    useEffect(() => {
        async function loadData(){
            const productsInCart = await AsyncStorage.getItem('@Pilgrim:ProductsInCart');

            if(productsInCart){
                setProductsInCart(JSON.parse(productsInCart));
            }
        }

        loadData();
    }, []);

    const handleAddProductInCart = useCallback(async(product: IProductsInCart) => {
        const checkProductAlreadyIsInCart = productsInCart.some(productFinded => productFinded.id === product.id);

        if(checkProductAlreadyIsInCart){
            const newProductsInCartArray = productsInCart.filter(productFinded => productFinded.id !== product.id);

            setProductsInCart(newProductsInCartArray);
            await AsyncStorage.setItem('@Pilgrim:ProductsInCart', JSON.stringify(newProductsInCartArray));
        } else{
            const newProductsInCartArray = [...productsInCart, product];

            setProductsInCart(newProductsInCartArray);
            await AsyncStorage.setItem('@Pilgrim:ProductsInCart', JSON.stringify(newProductsInCartArray));
        }
    }, [productsInCart]);

    return(
        <CartContext.Provider value={{ productsInCart, handleAddProductInCart }}>
            {children}
        </CartContext.Provider>
    );
};

export function useCart(): ICartContext{
    const { productsInCart, handleAddProductInCart } = useContext(CartContext);

    return ({ productsInCart, handleAddProductInCart });
}