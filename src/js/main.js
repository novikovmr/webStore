import Navigo from 'navigo';

// Components
import { getHeader } from '/src/js/components/header.js';
import { getPageContainer } from '/src/js/components/pageContainer.js';


const app = document.getElementById("app");

export const router = new Navigo('/');

const header = getHeader(router);
const pageContainer = getPageContainer();


//Главная страница
router.on('/', async () => {
    pageContainer.innerHTML = "";
    const pageModuleMain = await import('/src/js/pages/main.js');
    const mainPage = pageModuleMain.getMainPage();
    pageContainer.append(mainPage);
})


//Каталог
router.on('/catalog', async () => {
    pageContainer.innerHTML = "";
    const pageModuleCatalog = await import('/src/js/pages/catalog.js');
    const catalogPage = pageModuleCatalog.getCatalogPage();
    pageContainer.append(catalogPage);
})

//Продукт
router.on('/product/:title', async ({data}) => {
    pageContainer.innerHTML = "";
    const pageModuleBasket = await import('/src/js/pages/product.js');
    const productPage = pageModuleBasket.getProductPage(data.title);
    pageContainer.append(productPage);
})

//Корзина
router.on('/basket', async () => {
    pageContainer.innerHTML = "";
    const pageModuleProduct = await import('/src/js/pages/basket.js');
    const basketPage = pageModuleProduct.getBasketPage();
    pageContainer.append(basketPage);
})

//Оформление
router.on('/order', async () => {

    if(true) {
        router.navigate('/');
        return
    }

    pageContainer.innerHTML = "";
    const pageModuleOrder = await import('/src/js/pages/order.js');
    const orderPage = pageModuleOrder.getOrderPage();
    pageContainer.append(orderPage);
})

//Страница не найдена

router.notFound(async () => {
    pageContainer.innerHTML = "";
    const pageNotFound = await import('/src/js/pages/notFound.js');
    const notFoundPage = pageNotFound.getNotFoundPage();
    pageContainer.append(notFoundPage);
})

router.resolve();

app.append(header, pageContainer);