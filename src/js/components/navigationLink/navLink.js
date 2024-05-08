import { router } from "/src/js/main.js";
import "./navLink.css"

export function getNavLink(path, title = "") {
    let link = document.createElement("a");
    link.href = path;
    link.classList.add("navigation-link");
    link.textContent = title;
    
    link.addEventListener("click", function(event) {
        event.preventDefault();
        router.navigate(path);
    })
    return link
}