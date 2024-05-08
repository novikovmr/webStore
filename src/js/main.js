import Navigo from 'navigo';

// Components
import { getHeader } from './components/header.js';
import { getPageContainer } from './components/pageContainer.js';
import { getMainTitle } from './components/mainTitle.js';
import { getDesc } from './components/desk.js';


// Pages
// import { getProductPage } from './pages/product.js';

const app = document.getElementById("app");

export const router = new Navigo('/');

const header = getHeader(router);
const pageContainer = getPageContainer();



router.on('/', async () => {
    pageContainer.innerHTML = "";
    const pageModuleMain = await import('./pages/main.js');
    const mainPage = pageModuleMain.getMainPage();
    pageContainer.append(mainPage);
})

router.on('/catalog', async () => {
    pageContainer.innerHTML = "";
    const pageModuleCatalog = await import('./pages/catalog.js');
    const catalogPage = pageModuleCatalog.getCatalogPage();
    pageContainer.append(catalogPage);
})

router.on('/basket', async () => {
    pageContainer.innerHTML = "";
    const pageModuleProduct = await import('./pages/basket.js');
    const basketPage = pageModuleProduct.getBasketPage();
    pageContainer.append(basketPage);
})


router.on('/product/:title', async ({data}) => {
    pageContainer.innerHTML = "";
    const pageModuleBasket = await import('./pages/product.js');
    const productPage = pageModuleBasket.getProductPage(data.title);
    pageContainer.append(productPage);
})

router.resolve();

app.append(header, pageContainer);