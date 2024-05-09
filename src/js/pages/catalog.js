import { getMainTitle } from '/src/js/components/mainTitle/mainTitle.js';
import { getDesc } from '/src/js/components/desk/desk.js';
import { getProductList } from '/src/js/components/productList/productList';

//Страница с каталогом
export function getCatalogPage() {
    const page = document.createElement("div");
    page.classList.add("page", "catalog-page", "container")

    const mainTitle = getMainTitle("Каталог");

    const product = getProductList();
    product.getProducts();


    page.append(mainTitle, product.productList);
    return page;
}
