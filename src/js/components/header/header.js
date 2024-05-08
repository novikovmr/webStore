import { router } from "/src/js/main.js";
import { getNavLink } from "/src/js/components/navigationLink/navLink";
import "./header.css";
import { getLogo } from "/src/js/components/logo/logo";


// Создать шапку
export function getHeader() {
    const header = document.createElement("header");
    header.classList.add("header")

    const container = document.createElement("div");
    container.classList.add("container", "header__container");

    const logo = getLogo();
    logo.classList.add("header__logo");

    const nav = document.createElement("nav");
    nav.classList.add("navigation", "header__navigation");

    //Создаем кнопки навигации
    let link1 = getNavLink("/", "Главная страница"); 
    let link2 = getNavLink("/catalog", "Каталог"); 
    let link3 = getNavLink("/basket", "Корзина"); 


    nav.append(link1, link2, link3);
    container.append(logo, nav);

    header.append(container);
    
    return header;
}