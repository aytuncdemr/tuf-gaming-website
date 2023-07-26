import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ui/ProductCard";
import { new_producs_actions } from "../../store/Store";
import { useEffect } from "react";

export default function NewProducts() {

    const { data: new_products } = useSelector(
        (store) => store.new_producs_reducer
    );
    const dispatch = useDispatch();


    return (
        <div className="new-products-container">
            <div className="discount-top-text mb-12">
                <h2 className="product-heading text-xl md:text-2xl xl:text-3xl font-bold inline-block">
                    New Products
                </h2>
            </div>

            <div className="new-products ">
                <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-12 gap-4">
                    {new_products.map((elem, index) => (
                        <li key={index}>
                            <ProductCard
                                actions={new_producs_actions}
                                dispatch={dispatch}
                                title={elem.title}
                                price={elem.price}
                                piece_count={elem.piece_count}
                                img_path={elem.img_path}
                            ></ProductCard>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
