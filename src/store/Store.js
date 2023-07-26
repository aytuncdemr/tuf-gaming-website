import { configureStore, createSlice } from "@reduxjs/toolkit";
import gaming_case_img_path from "../assets/images/tuf-gaming-case.png";
import gaming_motherboard_img_path from "../assets/images/tuf-gaming-motherboard.png";
import gaming_mouse_img_path from "../assets/images/tuf-gaming-mouse.png";
import gaming_laptop_img_path from "../assets/images/tuf-gaming-laptop.png";
import gaming_headphones_img_path from "../assets/images/Gaming Headphones.png";
import amd_processor_img_path from "../assets/images/AMD Processor.png";
import intel_processor_img_path from "../assets/images/Intel Processor.png";
import cooler_img_path from "../assets/images/Cooler.png";
import asus_monitor_img_path from "../assets/images/ASUS Monitor.png";
import gaming_msi_keyboard_img_path from "../assets/images/MSI Keyboard.png";
import gaming_msi_motherboard_img_path from "../assets/images/MSI Motherboard.png";
import apple_iphone_14_img_path from "../assets/images/Iphone 14.png";
import samsung_galaxy_s20fe_img_path from "../assets/images/S20FE.png";
import razer_mouse_img_path from "../assets/images/Razer Mouse.png";
import gaming_razer_img_path from "../assets/images/Razer Laptop.png";
import apple_macbook_img_path from "../assets/images/Macbook.png";

const best_seller_infos = {
    data: [
        {
            title: "TUF Gaming Case",
            price: 59.99,
            discount_percentage: 15,
            piece_count: 0,
            img_path: gaming_case_img_path,
        },

        {
            title: "TUF Gaming Laptop",
            price: 499.99,
            discount_percentage: 25,
            piece_count: 0,
            img_path: gaming_laptop_img_path,
        },
        {
            title: "Apple Iphone 14",
            price: 859.99,
            piece_count: 0,
            img_path: apple_iphone_14_img_path,
        },
        {
            title: "Samsung Galaxy S20FE",
            price: 749.99,
            piece_count: 0,
            img_path: samsung_galaxy_s20fe_img_path,
        },
    ],
};

const best_seller_slice = createSlice({
    name: "best seller products",
    initialState: best_seller_infos,
    reducers: {
        add_item(state = product_infos, action) {
            state.data.find((elem) => elem.title === action.payload.title)
                .piece_count++;
        },
        remove_item(state = product_infos, action) {
            const piece_count = state.data.find(
                (elem) => elem.title === action.payload.title
            ).piece_count;

            if (piece_count <= 0);
            else
                state.data.find((elem) => elem.title === action.payload.title)
                    .piece_count--;
        },
    },
});

const product_infos = {
    data: [
        {
            title: "TUF Gaming Case",
            price: 59.99,
            discount_percentage: 15,
            piece_count: 0,
            img_path: gaming_case_img_path,
        },
        {
            title: "TUF Gaming Motherboard",
            price: 23.49,
            discount_percentage: 60,
            piece_count: 0,
            img_path: gaming_motherboard_img_path,
        },
        {
            title: "TUF Gaming Mouse",
            price: 15.99,
            discount_percentage: 50,
            piece_count: 0,
            img_path: gaming_mouse_img_path,
        },
        {
            title: "TUF Gaming Laptop",
            price: 499.99,
            discount_percentage: 25,
            piece_count: 0,
            img_path: gaming_laptop_img_path,
        },
    ],
};

const discount_products_slice = createSlice({
    name: "discount products",
    initialState: product_infos,
    reducers: {
        add_item(state = product_infos, action) {
            state.data.find((elem) => elem.title === action.payload.title)
                .piece_count++;
        },
        remove_item(state = product_infos, action) {
            const piece_count = state.data.find(
                (elem) => elem.title === action.payload.title
            ).piece_count;

            if (piece_count <= 0);
            else
                state.data.find((elem) => elem.title === action.payload.title)
                    .piece_count--;
        },
    },
});

const new_products_infos = {
    data: [
        {
            title: "TUF Gaming Headpones",
            price: 39.99,
            piece_count: 0,
            img_path: gaming_headphones_img_path,
        },
        {
            title: "MSI Gaming Motherboard",
            price: 69.99,
            piece_count: 0,
            img_path: gaming_msi_motherboard_img_path,
        },
        {
            title: "MSI Gaming Keyboard",
            price: 29.99,
            piece_count: 0,
            img_path: gaming_msi_keyboard_img_path,
        },
        {
            title: "Razer Gaming Laptop",
            price: 699.49,
            piece_count: 0,
            img_path: gaming_razer_img_path,
        },
        {
            title: "Apple Iphone 14",
            price: 859.99,
            piece_count: 0,
            img_path: apple_iphone_14_img_path,
        },
        {
            title: "Samsung Galaxy S20FE",
            price: 749.99,
            piece_count: 0,
            img_path: samsung_galaxy_s20fe_img_path,
        },
        {
            title: "Intel Processor",
            price: 689.99,
            piece_count: 0,
            img_path: intel_processor_img_path,
        },
        {
            title: "AMD Processor",
            price: 579.99,
            piece_count: 0,
            img_path: amd_processor_img_path,
        },
        {
            title: "Cooler",
            price: 49.99,
            piece_count: 0,
            img_path: cooler_img_path,
        },
        {
            title: "ASUS Monitor",
            price: 74.99,
            piece_count: 0,
            img_path: asus_monitor_img_path,
        },
        {
            title: "Apple MacBook",
            price: 1299.99,
            piece_count: 0,
            img_path: apple_macbook_img_path,
        },
        {
            title: "Razer Mouse",
            price: 59.99,
            piece_count: 0,
            img_path: razer_mouse_img_path,
        },
    ],
};

const new_products_slice = createSlice({
    name: "new products",
    initialState: new_products_infos,
    reducers: {
        add_item(state = product_infos, action) {
            state.data.find((elem) => elem.title === action.payload.title)
                .piece_count++;
        },
        remove_item(state = product_infos, action) {
            const piece_count = state.data.find(
                (elem) => elem.title === action.payload.title
            ).piece_count;

            if (piece_count <= 0);
            else
                state.data.find((elem) => elem.title === action.payload.title)
                    .piece_count--;
        },
    },
});

export const Store = configureStore({
    reducer: {
        discount_products_reducer: discount_products_slice.reducer,
        new_producs_reducer: new_products_slice.reducer,
        best_seller_reducer: best_seller_slice.reducer
    },
});

export const new_producs_actions = new_products_slice.actions;
export const discount_actions = discount_products_slice.actions;
export const best_seller_actions = best_seller_slice.actions;