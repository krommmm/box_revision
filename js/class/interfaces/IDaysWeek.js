export class IDaysWeek {

    constructor() {
        if (new.target === IDaysWeek) {
            throw new TypeError("Cannot construct IDaysWeek instance directly.");
        }
        this.currentDate = new Date();
        this.currentDay = this.currentDate.getDay();
        this.ls = JSON.parse(localStorage.getItem("cards"));
        this.weeks = [];

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

        this.lundi = [];
        this.mardi = [];
        this.mercredi = [];
        this.jeudi = [];
        this.vendredi = [];
        this.samedi = [];
        this.dimanche = [];
        this.myCards = [this.dimanche, this.lundi, this.mardi, this.mercredi, this.jeudi, this.vendredi, this.samedi];
    }

    getOccurencyMs() {
        throw new Error("getOccurencyMs isn't implemented yet.");
    }
    getOccurencyDMY() {
        throw new Error("getOccurencyMs isn't implemented yet.");
    }
    implementDaysWeekArray() {
        throw new Error("getOccurencyMs isn't implemented yet.");
    }

    displayDay() {
        throw new Error("getOccurencyMs isn't implemented yet.");
    }
    displayMonth() {
        throw new Error("getOccurencyMs isn't implemented yet.");
    }
    DisplayCurrentDay() {
        throw new Error("getOccurencyMs isn't implemented yet.");
    }
    DisplayDaysWeek() {
        throw new Error("getOccurencyMs isn't implemented yet.");
    }

}