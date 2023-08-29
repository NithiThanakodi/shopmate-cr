import { Card } from "../components/";
import { useTitle } from "../hooks/useTitle";

export const HomePage = () => {
    const itmes = [
        { id: "1001", name: "Sony Wh-Ch510 Bluetooth Wireless", price: 149 },
        { id: "1002", name: "boAt Rockerz 450", price: 69 },
        { id: "1003", name: "JBL Tune 760NC", price: 179 },
        { id: "1004", name: "Logitech H111 Wired", price: 39 },
        { id: "1005", name: "APPLE Airpods Max Bluetooth Headset", price: 199 },
        { id: "1006", name: "ZEBRONICS Zeb-Thunder Wired", price: 29 }
    ];
    useTitle("Home");
    return (
        <main>
            <section className="mt-24" >
                <div className="flex justify-center flex-wrap">
                    {itmes.map((item) => (
                        <Card item={item} />
                    ))}
                </div>
            </section>
        </main>
    )
}
