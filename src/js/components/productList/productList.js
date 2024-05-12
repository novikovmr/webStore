import { getProductCard } from '/src/js/components/productCard/productCard.js';

import "./productList.css";

//Компонент списка товаров
export function getProductList() {
    const productList = document.createElement("div");
    productList.classList.add("product-list");

    const getProducts = async function(URI) {

        try {
            const response = await fetch(URI);

            if(response.status === 404) {
                throw new Error("Товары не найдены");
            }

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
        } catch (error) {
            const msg = document.createElement("span");
            msg.classList.add("productList__msg");
            msg.textContent = error.message;
            productList.append(msg);

        }

        
    }

    return {
        productList,
        getProducts
    }
}