import { getMainTitle } from '/src/js/components/mainTitle.js';
import { getDesc } from '/src/js/components/desk.js';

//Страница продукта
export function getProductPage(title) {
    const page = document.createElement("div");
    page.classList.add("page", "product-page", "container")

    const mainTitle = getMainTitle(title);

    const desc = getDesc("Страница в разработке")

    page.append(mainTitle, desc);
    return page;
}
