import { getMainTitle } from '/src/js/components/mainTitle.js';
import { getDesc } from '/src/js/components/desk.js';

//Страница с каталогом
export function getNotFoundPage() {
    const page = document.createElement("div");
    page.classList.add("page", "notFound-page", "container")

    const mainTitle = getMainTitle("Страница не найдена");


    page.append(mainTitle);
    return page;
}
