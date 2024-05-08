import { router } from "../main.js";

//Карточка продукта
export function getProductCard(title, price) {
    const item = document.createElement("li");
    item.classList.add("product-list__item");

    const productTitle = document.createElement("h2");
    productTitle.classList.add("product-list__title");
    

    let productLink = document.createElement("a");
    productLink.textContent = title;
    productLink.href = ""
    productLink.setAttribute("data-navigo", "true");

    productLink.addEventListener("click", function(event){
        event.preventDefault();
        router.navigate(`/product/${title}`);
    })

    productTitle.append(productLink);

    const productPrice = document.createElement("strong");
    productPrice.classList.add("product-list__price");
    productPrice.textContent = `${price} руб`;

    const addBasketBtn = document.createElement("button");
    addBasketBtn.classList.add("btn");
    addBasketBtn.textContent = "В корзину";

    item.append(productTitle, productPrice, addBasketBtn);
    return item;
}