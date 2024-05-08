import { router } from "/src/js/main";
import "./basketBtn.css";
//bundle-text: - инструкция для сборщика 
import basketImg from "bundle-text:/src/assets/img/basket.svg";

export function getBasketBtn() {
    const basketBtn = document.createElement("a");
    basketBtn.href = "/basket";
    basketBtn.classList.add("basket-btn");
    basketBtn.innerHTML = basketImg;

    basketBtn.addEventListener("click", function(event) {
        event.preventDefault();
        router.navigate('/basket');
    })

    return basketBtn;
}