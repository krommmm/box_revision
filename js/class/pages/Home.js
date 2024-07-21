import { SDaysWeek } from "../services/SDaysWeek.js";
import { DaysWeek } from "../utils/DaysWeek.js";

export class Home {
    constructor(sRenderer, modalAddCard, cards, modalNextOrReset) {
        this.sRenderer = sRenderer;
        this.modalAddCard = modalAddCard;
        this.cards = cards;
        this.modalNextOrReset = modalNextOrReset;
        this.name = "";
        this.eventsBound = false;  // Nouveau drapeau
        this.init();
    }

    init() {
        this.start();
        if (!this.eventsBound) {
            this.bindEvents();
            this.eventsBound = true;
        }
        const daysWeek = new DaysWeek();
        new SDaysWeek(daysWeek);
    }

    start() {
        this.lsContent = JSON.parse(localStorage.getItem('cards'));

        if (this.lsContent !== null && this.lsContent.length > 0) {
            this.sRenderer.displayWeek();
        } else {
            localStorage.removeItem('cards');
            this.sRenderer.displayIntro();
        }
    }

    bindEvents() {
        document.addEventListener("click", this.handleClicks.bind(this));
        document.addEventListener("scroll", this.handleScroll.bind(this));
    }

    handleClicks(e) {
        if (e.target.classList.contains("add-btn")) {
            this.modalAddCard.open();
        } else if (e.target.classList.contains("quitModalName")) {
            this.modalAddCard.clearInputs();
            this.modalAddCard.close();
        } else if (e.target.classList.contains("btn-send")) {
            this.addCart(e);
        } else if (e.target.classList.contains('card_li') ||
            e.target.classList.contains('day_img') ||
            e.target.classList.contains('day_para')) {
            this.modalNextOrReset.open();
            this.implementName(e);
        } else if (e.target.classList.contains("modalAnswer__no")) {
            this.implementName(e);
            this.modalNextOrReset.close();
            this.resetDate();
        } else if (e.target.classList.contains("modalAnswer__yes")) {
            this.implementName(e);
            this.modalNextOrReset.close();
            this.updateDate();
        }
    }

    handleScroll() {
        const scrollHeight = window.scrollY || document.documentElement.scrollTop;
        let modalAnswer = document.querySelector('.modal_answer');
        modalAnswer.style.top = `${scrollHeight + 300}px`;
        let modalName = document.querySelector('.modal_name');
        modalName.style.top = `${scrollHeight + 300}px`;
        let modalAnswerCimetiere = document.querySelector('.modal_answer_input');
        modalAnswerCimetiere.style.top = `${scrollHeight + 300}px`;
    }

    implementName(e) {
        if (e.target.classList.contains('card_li')) {
            let li = e.target;
            this.name = li.querySelector('.day_para').textContent;
            document.querySelector('.modal_answer').style.display =
                'inline-block';
        } else if (
            e.target.classList.contains('day_img') ||
            e.target.classList.contains('day_para') ||
            e.target.classList.contains('cardSpan')
        ) {
            let li = e.target.parentElement.closest('.card_li');
            this.name = li.querySelector('.day_para').textContent.split("step:")[0];
            document.querySelector('.modal_answer').style.display =
                'inline-block';
        }
    }

    addCart(e) {
        let container = e.target.closest(".modal_name ");
        let name = container.querySelector(".name").value;
        let matiere = container.querySelector(".matiere").value;
        if (name !== "" && name !== null && name !== undefined) {
            this.cards.createCard(name, matiere);
            this.cards.saveCardInLs();
            this.modalAddCard.clearInputs();
            this.modalAddCard.close();
            this.init();
        }
    }

    resetDate() {

        this.lsContent = JSON.parse(localStorage.getItem('cards'));
        for (let i = 0; i < this.lsContent.length; i++) {
            if (
                this.lsContent[i].name === this.name &&
                this.lsContent[i].step > 0
            ) {
                // this.lsContent[i].step = 1;
                switch (this.lsContent[i].step) {
                    case 1:
                        this.transformFromSwitch(i, 1, false);
                        break;
                    case 2:
                        this.transformFromSwitch(i, 3, false);
                        break;
                    case 3:
                        this.transformFromSwitch(i, 7, false);
                        break;
                    case 4:
                        this.transformFromSwitch(i, 30, false);
                        break;
                    case 5:
                        this.transformFromSwitch(i, 180, false);
                        break;
                    case 6:
                        this.lsContent.splice(i, 1);
                        break;
                    default:
                        console.log('error');
                }
            }
        }
        localStorage.setItem('cards', JSON.stringify(this.lsContent));
        this.init();
    }

    transformFromSwitch(index, cpt, bool) {
        let date = this.lsContent[index].date;
        let newDate = new Date(date[2], date[1], date[0]);
        let newDateMs = newDate.getTime() + 1000 * 3600 * 24 * cpt;
        let updatedDate = new Date(newDateMs);
        let newDay = updatedDate.getDate();
        let newMonth = updatedDate.getMonth();
        let newYear = updatedDate.getFullYear();
        let newDateDMY = [newDay, newMonth, newYear];
        this.lsContent[index].date = newDateDMY;
        if (bool) {
            this.lsContent[index].step++;
        } else {
            if (this.lsContent[index].step > 1) {

                let newDate = new Date(date[2], date[1], date[0]);
                let newDateMs = newDate.getTime() + 1000 * 3600 * 24 * 1;
                let updatedDate = new Date(newDateMs);
                let newDay = updatedDate.getDate();
                let newMonth = updatedDate.getMonth();
                let newYear = updatedDate.getFullYear();
                let newDateDMY = [newDay, newMonth, newYear];
                this.lsContent[index].date = newDateDMY;
                this.lsContent[index].step--;
            }

        }
    }

    updateDate() {
        this.lsContent = JSON.parse(localStorage.getItem('cards'));
        for (let i = 0; i < this.lsContent.length; i++) {
            if (this.lsContent[i].name === this.name) {
                switch (this.lsContent[i].step) {
                    case 1:
                        this.transformFromSwitch(i, 1, true);
                        break;
                    case 2:
                        this.transformFromSwitch(i, 3, true);
                        break;
                    case 3:
                        this.transformFromSwitch(i, 7, true);
                        break;
                    case 4:
                        this.transformFromSwitch(i, 30, true);
                        break;
                    case 5:
                        this.transformFromSwitch(i, 180, true);
                        break;
                    case 6:
                        // this.lsContent.splice(i, 1);
                        this.lsContent[i].step = 5;
                        this.transformFromSwitch(i, 180, true);
                        break;
                    default:
                        console.log('error');
                }
            }
        }
        localStorage.setItem('cards', JSON.stringify(this.lsContent));
        this.init();
    }
}