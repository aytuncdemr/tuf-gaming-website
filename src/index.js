import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./store/Store";
import { IndexRouter } from "./routes/IndexRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={Store}>
            <RouterProvider router={IndexRouter}>
                <App />
            </RouterProvider>
        </Provider>
    </React.StrictMode>
);
