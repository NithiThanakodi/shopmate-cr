import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
    cartList: [],
    total: 0,
}

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => {
        const updatedCart = state.cartList.concat(product);
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCart
            }
        });
        updateTotal(updatedCart);
    }

    const removeFromCart = (product) => {
        const updatedCart = state.cartList.filter((pro) => pro.id !== product.id);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCart
            }
        })
        updateTotal(updatedCart);
    }

    const updateTotal = (products) => {
        let updatedTotal = 0;
        products.forEach(product => updatedTotal = updatedTotal + product.price);
        dispatch({
            type: "UPDATE_TOTAL",
            payload: {
                total: updatedTotal
            }
        })
    }

    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart,
        updateTotal
    };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext); 