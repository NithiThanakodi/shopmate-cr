import { useCart } from "../context/CartContext";

export const CartItem = ({ item }) => {
    const { removeFromCart } = useCart();
    return (
        <div className="flex flex-row justify-between items-center p-3 mt-8 border border-gray-100 shadow">
            <img src={`/assets/images/${item.id}.png`} alt="itmem1 " className="max-h-24" />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>
        </div>
    )
}
