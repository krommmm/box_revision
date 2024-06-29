
export class ICemetery {
    constructor() {
        if (new.target === ICemetery) {
            throw new TypeError("Cannot construt ICemetery instance directly.");
        }
        this.month = [
            'janvier',
            'février',
            'mars',
            'avril',
            'mai',
            'juin',
            'juillet',
            'août',
            'septembre',
            'octobre',
            'novembre',
            'décembre',
        ];
        this.currentDate = new Date();
        this.storageContent = JSON.parse(localStorage.getItem('cards'));
        this.undoneTasks = [];
    }

    implementCemeteryArray() {
        throw new Error("implementCemeteryArry isn't implemented yet.");
    }

    isCemeteryEmpty() {
        throw new Error("isCemeteryEmpty isn't implemented yet.");
    }

    displayCemetary(){
        throw new Error("displayCemetary isn't implemented yet.");
    }

    displayCemeteryCards() {
        throw new Error("displayCemeteryCards isn't implemented yet.");
    }
}