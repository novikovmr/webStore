import { router } from "/src/js/main.js";
import { getNavLink } from "/src/js/components/navigationLink/navLink";
import "./header.css";
import { getLogo } from "/src/js/components/logo/logo";
import { getBasketBtn } from "/src/js/components/basketBtn/basketBtn";


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

    const basketBtn = getBasketBtn();

    const links = {
        "home": getNavLink("/", "Главная страница"),
        "catalog" : getNavLink("/catalog", "Каталог"),
        "basket" : basketBtn,
    }

    for (const oneLink in links) {
        nav.append(links[oneLink]);
    }

    const setActiveLink = function(link = "") {
        for (const oneLink in links) {
            links[oneLink].classList.remove("active")
        }
        if (link !=="") {
            links[link].classList.add("active");
        }
    
    }

    container.append(logo, nav, basketBtn);

    header.append(container);
    
    return {
        header,
        setActiveLink
    };
}