import { getProductCard } from '/src/js/components/productCard/productCard.js';
import { getMainTitle } from '/src/js/components/mainTitle/mainTitle.js';

//Главная страница
export function getMainPage() {
    const page = document.createElement("div");
    page.classList.add("page", "main-page", "container")

    const mainTitle = getMainTitle("Главная страница");



    page.append(mainTitle);
    return page;
}