import { getMainTitle } from '/src/js/components/mainTitle/mainTitle.js';
import { getDesc } from '/src/js/components/desk/desk.js';

//Страница с каталогом
export function getOrderPage() {
    const page = document.createElement("div");
    page.classList.add("page", "order-page", "container")

    const mainTitle = getMainTitle("Оформление");

    const desc = getDesc("Здесь оформление заказа")

    page.append(mainTitle, desc);
    return page;
}
