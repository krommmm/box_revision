import { IModal } from "../interfaces/IModal.js";

export class Modal extends IModal {

    open(selector) {
        selector.style.display = "inline-block";
    }

    close(selector) {
        selector.style.display = "none";
    }

    clearInputs(selector) {
        let inputs = selector.querySelectorAll("input,textArea");
        inputs.forEach((input) => input.value = "");
    }
}