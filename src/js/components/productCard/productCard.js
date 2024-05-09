import { router } from "/src/js/main.js";
import "./productCard.css";

//Карточка продукта
export function getProductCard(product) {
    const item = document.createElement("li");
    item.classList.add("product");

    const productTitle = document.createElement("h2");
    productTitle.classList.add("product__title");
    

    let productLink = document.createElement("a");
    productLink.textContent = product.title;
    productLink.href = ""
    productLink.setAttribute("data-navigo", "true");

    productLink.addEventListener("click", function(event){
        event.preventDefault();
        router.navigate(`/product/${title}`);
    })

    productTitle.append(productLink);

    const productPrice = document.createElement("strong");
    productPrice.classList.add("product__price");
    productPrice.textContent = `${product.price} $`;

    const addBasketBtn = document.createElement("button");
    addBasketBtn.classList.add("btn");
    addBasketBtn.textContent = "В корзину";

    item.append(productTitle, productPrice, addBasketBtn);
    return item;
}