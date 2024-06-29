export class SModal {
    constructor(modal, selector) {
        this.modal = modal;
        this.selector = document.querySelector(selector);
    }

    open() {
        this.modal.open(this.selector);
    }
    close() {
        this.modal.close(this.selector);
    }
    clearInputs() {
        this.modal.clearInputs(this.selector);
    }

}