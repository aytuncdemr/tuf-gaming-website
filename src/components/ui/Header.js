import { useState } from "react";
import shopify_logo from "../../assets/logos/logo-shopify.png";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [is_nav_open, set_nav_open] = useState(false);
    const store_data = useSelector((data) => data);
    const [shop_counter,set_shop_counter] = useState(0);

    function toggle_nav() {
        set_nav_open((prev_state) => {
            if (!prev_state) {
                document.body.style.overflow = "hidden";
                window.scrollTo(0, 0);
            } else document.body.style.overflow = "initial";

            return !prev_state;
        });
    }

    useEffect(() => {
        let total = 0;

        for (const { data } of Object.values(store_data)) {
            for (const item of data) total += item.piece_count;
        }

        set_shop_counter(total);

    }, [store_data]);


    return (
        <header className="py-4 px-2">
            <div className="header-container flex items-center justify-between">
                <Link to="/">
                <img
                    src={shopify_logo}
                    alt="Shopify Logo"
                    className="w-[40px]"
                />
                </Link>

                <div className="header-buttons  flex gap-4 text-2xl">
                    <button className="relative">
                        <Link to="shop-card">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <div className="shop-counter">{shop_counter}</div>
                        </Link>
                    </button>

                    <button className="toggle-nav z-20" onClick={toggle_nav}>
                        {is_nav_open ? (
                            <i className="fa-solid fa-close"></i>
                        ) : (
                            <i className="fa-solid fa-bars"></i>
                        )}
                    </button>
                </div>

                {is_nav_open && <nav className="navigation absolute bg-white bg-opacity-50 backdrop-blur-sm left-0 top-0 w-full min-h-screen flex items-center justify-center">
                    
                    <ul className="flex flex-col gap-6 font-bold text-xl text-center">

                            <li><a href="#" onClick={toggle_nav}>Source Code</a></li>

                            <li><a href="#" onClick={toggle_nav}>About</a></li>

                            <li><a href="#" onClick={toggle_nav}>Contact</a></li>

                    </ul>
                    
                    </nav>}
            </div>
        </header>
    );
}
