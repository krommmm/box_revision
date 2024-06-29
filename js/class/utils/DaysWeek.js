import { IDaysWeek } from "../interfaces/IDaysWeek.js";
export class DaysWeek extends IDaysWeek {
    constructor() {
        super();
        this.occurenceDayInMs = "";
        this.occurenceDayDMA = [];
        this.days = document.querySelectorAll('.day');

        this.init();
    }

    async init() {
        if (!this.verifyIfLsIsNull()) {
            return;
        }
        this.implementDaysWeekArray();
        this.displayDay();
        this.displayMonth();
        this.displayDaysWeek();
    }

    verifyIfLsIsNull() {
        if (this.ls === null) {
            return false;
        }
        return true;
    }

    getOccurencyMs(index) {
        let num = index - this.currentDay;
        let hours = this.currentDate.getHours();
        let cleanDayInMs = this.currentDate.getTime() - 1000 * 3600 * hours;
        return cleanDayInMs + num * 1000 * 3600 * 24;
    }

    getOccurencyDMY() {
        let occrurenceDay = new Date(this.occurenceDayInMs);
        let jour = occrurenceDay.getDate();
        let mois = occrurenceDay.getMonth();
        let année = occrurenceDay.getFullYear();
        return [jour, mois, année];
    }

    implementDaysWeekArray() {
        for (let i = 0; i < 7; i++) {
            this.occurenceDayInMs = this.getOccurencyMs(i);
            this.occurenceDayDMA = this.getOccurencyDMY();
            this.weeks.push(new Date(this.occurenceDayInMs));
            for (let j = 0; j < this.ls.length; j++) {
                if (
                    this.ls[j].date[0] === this.occurenceDayDMA[0] &&
                    this.ls[j].date[1] === this.occurenceDayDMA[1] &&
                    this.ls[j].date[2] === this.occurenceDayDMA[2]
                ) {
                    if (i === 0) {
                        this.dimanche.push(this.ls[j]);
                    } else if (i === 1) {
                        this.lundi.push(this.ls[j]);
                    } else if (i === 2) {
                        this.mardi.push(this.ls[j]);
                    } else if (i === 3) {
                        this.mercredi.push(this.ls[j]);
                    } else if (i === 4) {
                        this.jeudi.push(this.ls[j]);
                    } else if (i === 5) {
                        this.vendredi.push(this.ls[j]);
                    } else if (i === 6) {
                        this.samedi.push(this.ls[j]);
                    }
                }
            }
        }
    }

    displayDay() {
        let numeros = document.querySelectorAll('.numero');
        for (let i = 0; i < numeros.length; i++) {
            numeros[i].textContent = this.weeks[i].getDate();
        }
    }

    displayMonth() {
        document.querySelector('.mois').textContent =
            this.month[this.weeks[this.currentDay].getMonth()];
    }


    displayCurrentDay(index) {
        let day = this.days[index].querySelector(".semaine__titre");
        let numeroDay = day.textContent.split(" ")[1];
        let currentNumeroDay = new Date().getDate();
        if (parseInt(currentNumeroDay) === parseInt(numeroDay)) {
            day.classList.add("currentDay");
        }
    }

    displayDaysWeek() {
        for (let i = 0; i < this.days.length; i++) {
            this.displayCurrentDay(i);
            let ul = this.days[i].querySelector('ul');
            for (let j = 0; j < this.myCards[i].length; j++) {
                if (this.myCards[i][j].name !== undefined) {
                    let li = document.createElement('li');
                    li.classList = "card_li";
                    let img = document.createElement('img');
                    img.className = 'day_img';
                    img.src = `../../assets/pictures/icons/${this.myCards[i][j].matiere}.png`;

                    let para = document.createElement('p');
                    para.className = 'day_para';
                    let paraNode = document.createTextNode(
                        `${this.myCards[i][j].name}`
                    );
                    let cardSpan = document.createElement('span');
                    cardSpan.className = "cardSpan";
                    // let cardSpanNode = document.createTextNode(`step: ${this.myCards[i][j].step}`);
                    // cardSpan.appendChild(cardSpanNode);
                    para.appendChild(paraNode);
                    para.appendChild(cardSpan);
                    li.appendChild(img);
                    li.appendChild(para);
                    ul.appendChild(li);
                }
            }
        }
    }

}