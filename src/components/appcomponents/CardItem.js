import React from "react";
export default function CardItem(props) {
    return (
        <div className="card-item flex flex-col gap-6 border-2 border-gray-400 py-2 rounded-lg px-2">
            <div className="product-info-top flex gap-4 items-center">
                <img
                    src={props.img_path}
                    alt={props.title}
                    className="w-[25%]"
                />
                <p className="font-bold text-xl">{props.title}</p>
            </div>
            <div className="product-info-bottom">
                {props.discount_percentage ? (
                    <React.Fragment>
                        <p className="line-through font-bold text-xl text-red-500">
                            ${props.price}
                        </p>
                        <p className=" font-bold text-xl text-green-500 mb-2">
                            $
                            {(
                                props.price *
                                (1 - props.discount_percentage / 100)
                            ).toFixed(2)}
                        </p>
                        <p className="font-bold text-gray-500 text-lg">
                            Total: $
                            {(
                                props.price *
                                (1 - props.discount_percentage / 100)
                            ).toFixed(2) * props.piece_count}
                        </p>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <p className="font-bold text-xl text-green-500 mb-2">
                            ${props.price}
                        </p>
                        <p className="font-bold text-gray-500 text-lg">
                            Total: ${(props.price * props.piece_count).toFixed(2)}
                        </p>
                    </React.Fragment>
                )}
                <p className="text-gray-500 text-xl font-bold mb-4">
                    x{props.piece_count}
                </p>
            </div>
        </div>
    );
}
