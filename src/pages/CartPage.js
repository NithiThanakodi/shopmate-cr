import { useCart } from "../context/CartContext";
import { CartItem } from "../components"
import { useTitle } from "../hooks/useTitle";

export const CartPage = () => {
    const { cartList, total } = useCart();
    useTitle("Cart");
    return (
        <main>
            <section className="mt-24">
                <div className="max-w-screen-lg flex flex-col justify-center mx-auto ">
                    <h1 className="text-center font-bold text-2xl">Cart Items: {cartList.length} / ${total}</h1>
                    <div className="pt-5">

                        {cartList && cartList.map((item) => (
                            <CartItem item={item} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
