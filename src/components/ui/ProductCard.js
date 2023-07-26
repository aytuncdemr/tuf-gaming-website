import React from "react";
import { useDispatch } from "react-redux";
export default function ProductCard(props) {

    return (
        <div className="product-card border-2 shadow-md text-xl border-gray-300 py-6 px-4">
            <img src={props.img_path} className="mb-2" alt={props.title} />

            <p className="text-center mb-4">{props.title}</p>

            <div className="product-bottom flex items-center gap-2 justify-between">
                {props.discount_percentage ? (
                    <div>
                        <p className="text-red-600 line-through font-bold">
                            ${props.price}
                        </p>
                        <p className="text-green-700 font-bold">
                            $
                            {(
                                props.price *
                                (1 - props.discount_percentage / 100)
                            ).toFixed(2)}
                        </p>
                    </div>
                ) : (
                    <p className="text-green-700 font-bold">${props.price}</p>
                )}

                <div className="add-remove-card flex items-center gap-2">
                    <button onClick={() => {props.dispatch(props.actions.add_item({title:props.title}))}} className="w-[3.2rem] h-[3.2rem] rounded-lg flex items-center justify-center border-2 border-gray-300">
                        <i className="fa-solid fa-plus"></i>
                    </button>
                    <p className="w-[3.2rem] h-[3.2rem] rounded-lg flex items-center justify-center border-2 border-gray-300">{props.piece_count}</p>
                    <button onClick={() => {props.dispatch(props.actions.remove_item({title:props.title}))}} className="w-[3.2rem] h-[3.2rem] rounded-lg flex items-center justify-center border-2 border-gray-300">
                        <i className="fa-solid fa-minus"></i>
                    </button>{" "}
                </div>
            </div>
        </div>
    );
}
