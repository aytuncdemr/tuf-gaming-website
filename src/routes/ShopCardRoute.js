import CardItems from "../components/appcomponents/CardItems";
export default function ShopCardRoute() {
    return (
        <main>
            <section className="shop-card-section min-h-screen py-24 px-4">
                <div className="shop-card-container">
                    <div className="shop-card-top-text mb-12">
                        <h2 className="product-heading text-xl md:text-2xl xl:text-3xl font-bold inline-block">
                            Card Items
                        </h2>
                    </div>

                    <CardItems></CardItems>
                </div>
            </section>
        </main>
    );
}
