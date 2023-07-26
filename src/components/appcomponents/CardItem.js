import React from "react";
export default function CardItem(props) {
    return (
        <div className="card-item w-full flex-shrink-0 max-w-[24rem] mx-auto  h-[14rem] flex flex-col gap-6 border-2 border-gray-400 py-2 rounded-lg px-2">
            <div className="product-info-top flex  gap-4 items-center">
                <img
                    src={props.img_path}
                    alt={props.title}
                    className="max-h-[8rem]"
                />
                <div className="text-center flex-grow">
                    <p className="font-bold text-xl text-center md:text-2xl">
                        {props.title}
                    </p>
                </div>
            </div>
            <div className="product-info-bottom flex items-center mt-auto justify-between">
                {props.discount_percentage ? (
                    <div>
                        <p className="line-through font-bold text-xl text-red-500">
                            ${props.price}
                        </p>
                        <p className=" font-bold text-xl text-green-500 mb-2">
                            $
                            {`${(
                                props.price *
                                (1 - props.discount_percentage / 100)
                            ).toFixed(2)} (x${props.piece_count})`}
                        </p>
                    </div>
                ) : (
                    <React.Fragment>
                        <p className="font-bold text-xl text-green-500 mb-2">
                            ${`${props.price} (${props.piece_count}x)`}
                        </p>
                    </React.Fragment>
                )}
                {props.discount_percentage ? (
                    <p className="font-bold text-gray-500 text-lg">
                        Total: $
                        {(
                            props.price *
                            (1 - props.discount_percentage / 100) *
                            props.piece_count
                        ).toFixed(2)}
                    </p>
                ) : (
                    <p className="font-bold text-gray-500 text-lg ">
                        Total: ${(props.price * props.piece_count).toFixed(2)}
                    </p>
                )}
            </div>
        </div>
    );
}
