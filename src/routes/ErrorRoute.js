export default function ErrorRoute() {
    return (
        <main>
            <section className="error-message-section w-full h-full py-40 px-4">
                <div className="error-message-body text-center text-red-500 font-bold text-xl">
                    <p>
                        Error: We could not find the page you are looking for.
                        :(
                    </p>
                </div>
            </section>
        </main>
    );
}
