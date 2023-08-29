import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

export const Card = ({ item }) => {
    const { cartList, addToCart, removeFromCart } = useCart();
    const [isInCart, setIsInCart] = useState(false);
    useEffect(() => {
        const productIsInCart = cartList.find(product => product.id === item.id);
        if (productIsInCart) {
            setIsInCart(true);
        }
        else {
            setIsInCart(false);
        }
    }, [cartList, item, setIsInCart])

    return (
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
            <Link to="/cart">
                <img class="p-2 rounded-t-lg max-w-full max-h-fit" src={`/assets/images/${item.id}.png`} alt="product" />
            </Link>
            <div class="px-5 py-5">
                <Link to="/cart">
                    <h5 class="text-lg font-medium tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                </Link>
                <div class="flex items-center justify-between pt-5">
                    <span class="text-2xl font-medium text-gray-900 dark:text-white">${item.price}</span>
                    {isInCart ? (<button onClick={() => removeFromCart(item)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>) :
                        (<button onClick={() => addToCart(item)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>)}

                </div>
            </div>
        </div>
    )
}
