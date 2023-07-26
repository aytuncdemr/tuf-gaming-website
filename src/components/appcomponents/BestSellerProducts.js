import { useDispatch, useSelector } from "react-redux";
import { best_seller_actions } from "../../store/Store";
import ProductCard from "../ui/ProductCard";
import { useEffect } from "react";
export default function BestSellerProducts() {
    const { data: best_seller_products } = useSelector(
        (data) => data.best_seller_reducer
    );
    const dispatch = useDispatch();

   

    return (
        <div className="best-seller-container">
            <div className="best-seller-top-text mb-12">
                <h2 className="product-heading text-xl font-bold inline-block">
                    Best Sellers
                </h2>
            </div>

            <div className="best-seller-products ">
                <ul className="flex flex-col gap-4">
                    {best_seller_products.map((elem, index) => (
                        <li key={index}>
                            <ProductCard
                                actions={best_seller_actions}
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
