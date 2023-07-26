import DiscountProducts from "../components/appcomponents/DiscountProducts";
import { Provider } from "react-redux";
import { Store } from "../store/Store";
import NewProducts from "../components/appcomponents/NewProducts";
import BestSellerProducts from "../components/appcomponents/BestSellerProducts";
export default function HomeRoute() {
    return (
            <main>
                <section className="discount-section py-12 px-4">
                    <DiscountProducts></DiscountProducts>
                </section>
                <section className="new-products-section py-12 px-4">
                    <NewProducts></NewProducts>
                </section>
                <section className="best-sellers-section py-12 px-4">

                    <BestSellerProducts></BestSellerProducts>

                </section>
            </main>
    );
}
