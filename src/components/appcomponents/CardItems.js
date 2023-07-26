import { useSelector } from "react-redux";
import CardItem from "./CardItem";
export default function CardItems() {
    const {
        discount_products_reducer: { data: discount_products },
        new_producs_reducer: { data: new_products },
    } = useSelector((data) => data);

    const all_products = [...discount_products, ...new_products];

    const store_data = useSelector((data) => data);
    let total = 0;
    let total_price = 0;

    for (const { data } of Object.values(store_data))
        for (const item of data) total += item.piece_count;

    for (const { data } of Object.values(store_data))
        for (const item of data) total_price += item.discount_percentage ? item.price * (1-item.discount_percentage/100) *item.piece_count : item.piece_count * item.price;

    total_price = total_price.toFixed(2);

    return (
        <div className="shop-card-items">
            <ul className="grid grid-cols-1  md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-12 gap-4 mb-4 lg:mb-24">
                {total === 0 ? (
                    <p className="text-xl font-bold text-center">
                        There is no product in the card.
                    </p>
                ) : null}

                {all_products.map((elem, index) => {
                    return elem.piece_count > 0 ? (
                        <li key={index}>
                            <CardItem
                                discount_percentage={elem.discount_percentage}
                                title={elem.title}
                                price={elem.price}
                                piece_count={elem.piece_count}
                                img_path={elem.img_path}
                            ></CardItem>
                        </li>
                    ) : null;
                })}
            </ul>
            <div className="total-info text-center">
            <p className="text-gray-600 text-2xl font-bold mb-2  xl:text-3xl">Total Price</p>
            <p className="text-green-600 text-2xl font-bold  xl:text-3xl" >${total_price}</p>
            </div>
        </div>
    );
}
