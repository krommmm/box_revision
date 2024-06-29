export class SCards {
    constructor(card) {
        this.card = card;
    }

    createCard(nom, matiere) {
        this.card.createCard(nom, matiere);
    }


    saveCardInLs() {
        this.card.saveCardInLs();
    }

    deleteCard() {
        this.card.deleteCard();
    }

    resetCard() {
        this.card.resetCard();
    }

    incrementCard() {
        this.card.incrementCard();
    }
}