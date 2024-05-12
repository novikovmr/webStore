import { router } from "/src/js/main.js";
import "./productCard.css";

//Карточка продукта
export function getProductCard(product) {
    const item = document.createElement("li");
    item.classList.add("product");

    const productTitle = document.createElement("h2");
    productTitle.classList.add("product__title");
    

    const productPreview = document.createElement("img");
    productPreview.classList.add("product__prewiew");
    productPreview.src = product.image;
    

    let productLink = document.createElement("a");
    productLink.textContent = product.title;
    productLink.href = ""
    productLink.setAttribute("data-navigo", "true");

    productLink.addEventListener("click", function(event){
        event.preventDefault();
        router.navigate(`/product/${product.id}`);
    })

    productTitle.append(productLink);

    const productPrice = document.createElement("strong");
    productPrice.classList.add("product__price");
    productPrice.textContent = `${product.price} $`;

    const addBasketBtn = document.createElement("button");
    addBasketBtn.classList.add("btn", "product__add-basket");
    addBasketBtn.textContent = "В корзину";

    item.append(productPreview, productTitle, productPrice, addBasketBtn);
    return item;
}