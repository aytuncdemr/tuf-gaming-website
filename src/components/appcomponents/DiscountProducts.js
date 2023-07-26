import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ui/ProductCard";
import { discount_actions } from "../../store/Store";
import { useEffect } from "react";

export default function DiscountProducts() {

    const {data:discount_products} = useSelector((store) => store.discount_products_reducer);
    const dispatch = useDispatch();

   

    return (
        <div className="discount-container">
            <div className="discount-top-text mb-12">
                <h2 className="product-heading text-xl font-bold inline-block">
                    Promotions
                </h2>
            </div>

            <div className="discount-products ">
                <ul className="flex flex-col gap-4">
                {discount_products.map((elem,index) => <li key={index}><ProductCard actions={discount_actions} dispatch={dispatch} discount_percentage={elem.discount_percentage} title={elem.title} price={elem.price} piece_count={elem.piece_count} img_path={elem.img_path}></ProductCard></li> )}
                </ul>
            </div>

        </div>
    );
}
