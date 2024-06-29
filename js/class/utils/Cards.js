import { ICards } from "../interfaces/ICards.js";
export class Cards extends ICards {

    constructor() {
        super();
    }

    createCard(nom, matiere) {
        let currentDate = new Date();
        let dateDMY = [currentDate.getDate(), currentDate.getMonth(), currentDate.getFullYear()];
        this.card = {
            name: nom,
            matiere: matiere,
            step: 1,
            date: dateDMY,
        };
    }

    saveCardInLs() {
        let lsContent = JSON.parse(localStorage.getItem("cards"));
        if (lsContent !== null && lsContent !== undefined) {
            lsContent.push(this.card);
            localStorage.setItem('cards', JSON.stringify(lsContent));
        } else {
            this.cards.push(this.card);
            localStorage.setItem('cards', JSON.stringify(this.cards));
        }
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