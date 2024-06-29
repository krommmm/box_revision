export class ICards {
    constructor() {
        if (new.target === ICards) {
            throw new TypeError("Cannot construct ICards instance directly.");
        }
        this.card = {};
        this.cards = [];
    }


    createCard() {
        throw new Error("addCard isn't implemented yet.");
    }

    saveCardInLs(){
        throw new Error("saveCardInLs isn't implemented yet.");
    }

    deleteCard() {
        throw new Error("deleteCard isn't implemented yet.");
    }

    resetCard() {
        throw new Error("resetCard isn't implemented yet.");
    }

    incrementCard() {
        throw new Error("incrementCard isn't implemented yet.");
    }
}