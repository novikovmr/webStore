import { router } from "/src/js/main.js";

import { getMainTitle } from '/src/js/components/mainTitle/mainTitle.js';
import { getDesc } from '/src/js/components/desk/desk.js';

//Страница с корзиной
export function getBasketPage() {
    const page = document.createElement("div");
    page.classList.add("page", "basket-page", "container")

    const mainTitle = getMainTitle("Корзина");

    const desc = getDesc("Страница в разработке");

    //Кнопка оформления заказа
    let orderLink = document.createElement("a");
    orderLink.href ="/order";
    orderLink.classList.add("btn");
    orderLink.textContent = "Оформление заказа";
    

    orderLink.addEventListener("click", function(event) {
        event.preventDefault();
        router.navigate('/order');
    })


    page.append(mainTitle, desc, orderLink);
    return page;
}