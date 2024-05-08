import "./desk.css";

//Создает описание товара
export function getDesc(text) {
    const desc = document.createElement("p");
    desc.classList.add("desc");
    desc.textContent = text;

    return desc;
}