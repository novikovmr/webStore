import { getMainTitle } from '/src/js/components/mainTitle/mainTitle.js';
import { getProductList } from '/src/js/components/productList/productList';
import { URL } from '/src/js/config';

//Страница с каталогом
export function getCatalogPage() {
    const page = document.createElement("div");
    page.classList.add("page", "catalog-page", "container")

    const mainTitle = getMainTitle("Каталог");

    const product = getProductList();
    product.getProducts(`${URL}/products`);


    page.append(mainTitle, product.productList);
    return page;
}
