import { getProductCard } from '/src/js/components/productCard/productCard.js';

import "./productList.css";

//Компонент списка товаров
export function getProductList() {
    const productList = document.createElement("div");
    productList.classList.add("product-list");

    const getProducts = async function(URI) {
        const response = await fetch("https://fakestoreapi.com/products");
        console.log(response);

        const data = await response.json();

        const list = document.createElement("ul");
        list.classList.add("product-list__list");


        for (const product of data) {
            console.log(product);
            const productCard = getProductCard(product);
            list.append(productCard);
        }

        productList.append(list);
    }

    return {
        productList,
        getProducts
    }
}