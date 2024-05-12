import { getMainTitle } from '/src/js/components/mainTitle/mainTitle.js';
import { getProductList } from '/src/js/components/productList/productList';
import { URL } from '/src/js/config';

//Главная страница
export function getMainPage() {
    const page = document.createElement("div");
    page.classList.add("page", "main-page", "container")

    const mainTitle = getMainTitle("Главная страница");

    const product = getProductList();
    product.getProducts(`${URL}/products?limit=4`);

    page.append(mainTitle, product.productList);
    return page;
}