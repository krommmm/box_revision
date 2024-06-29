import { ICemetery } from "../interfaces/ICemetery.js";

export class Cemetery extends ICemetery {
    constructor(sRenderer, modalDeleteCard) {
        super();
        this.storageContent = JSON.parse(localStorage.getItem("cards"));
        this.sRenderer = sRenderer;
        this.modalDeleteCard = modalDeleteCard;
        this.cloneStorage = [];
        this.init();
    }

    init() {
        let isLsNull = this.isLsNull();
        if (!isLsNull) {
            return;
        }
        this.implementCemeteryArray();

        let isCemeteryEmpty = this.isCemeteryEmpty();
        if (!isCemeteryEmpty) {
            document.querySelector(".cimetary_zone").innerHTML = "";
            return;
        }
        this.displayCemetary();
        this.displayCemeteryCards();
        this.bindEvents();
    }

    bindEvents() {
        document.addEventListener("click", this.handleClicks.bind(this));
    }

    handleClicks(e) {
        if (e.target.classList.contains("iconDelete")) {
            this.deleteCardFromLsArray(e);
        } else if (e.target.classList.contains("modalAnswer__input__yes")) {
            this.deleteCardFromLs();
        } else if (e.target.classList.contains("modalAnswer__input__no")) {
            this.modalDeleteCard.close();
        } else if (e.target.classList.contains('iconReset')) {

            this.resetCard(e);
        }
    }

    resetCard(e) {
        let name = '';
     
            name = e.target
                .closest('.undoneDiv')
                .querySelector('.undoneParaName').textContent;
        

        for (let i = 0; i < this.storageContent.length; i++) {
            if (name === this.storageContent[i].name) {
                let currentDate = new Date();
                let currentDateDMY = [
                    currentDate.getDate(),
                    currentDate.getMonth(),
                    currentDate.getFullYear(),
                ];
                this.storageContent[i].step = 1;
                this.storageContent[i].date = currentDateDMY;
            }
        }
        localStorage.setItem('cards', JSON.stringify(this.storageContent));
        window.location.reload();
    }

    deleteCardFromLsArray(e) {
        this.cloneStorage = [...this.storageContent];
        let container = e.target.closest('.undoneDiv');
        let name = container.querySelector('.undoneParaName').textContent;
        for (let i = 0; i < this.storageContent.length; i++) {
            if (this.storageContent[i].name === name) {
                this.cloneStorage.splice(i, 1);
            }
        }
        let modal_answer_input = document.querySelector('.modal_answer_input');
        modal_answer_input.style.display = 'inline-block';
        this.modalDeleteCard.open();
    }

    deleteCardFromLs() {
        localStorage.setItem("cards", JSON.stringify(this.cloneStorage));
        this.modalDeleteCard.close();
        //window.location.reload();
        window.location.reload();
    }

    isLsNull() {
        return this.storageContent !== null ? true : false;
    }

    isCemeteryEmpty() {
        return this.undoneTasks.length > 0 ? true : false;
    }

    implementCemeteryArray() {
        for (let i = 0; i < this.storageContent.length; i++) {
            let currentHours = this.currentDate.getHours();
            if (
                this.currentDate.getTime() - (currentHours + 1000 * 3600 * 24) >
                new Date(
                    this.storageContent[i].date[2],
                    this.storageContent[i].date[1],
                    this.storageContent[i].date[0]
                ).getTime()
            ) {
                this.undoneTasks.push(this.storageContent[i]);
            }
        }
    }

    displayCemetary() {
        this.sRenderer.displayCemetary();
    }

    displayCemeteryCards() {
        let undoneTasksZone = document.querySelector('.undoneTasks_zone');
        for (let i = 0; i < this.undoneTasks.length; i++) {
            let div = document.createElement('div');
            div.className = 'undoneDiv';
            let img = document.createElement('img');
            img.src = `../../assets/pictures/icons/${this.undoneTasks[i].matiere}.png`;
            img.className = 'undoneImg';

            let paraName = document.createElement('p');
            paraName.className = 'undoneParaName';
            let paraDate = document.createElement('p');
            paraDate.className = 'undoneParaDate';

            let icon = document.createElement('i');
            icon.className = 'fa-regular fa-trash-can iconDelete';

            let iReset = document.createElement("i");
            iReset.className = "fa-solid fa-arrows-rotate iconReset";

            let paraNameNode = document.createTextNode(this.undoneTasks[i].name);
            let paraDateNode = document.createTextNode(
                ': ' +
                this.undoneTasks[i].date[0] +
                ' ' +
                this.month[this.undoneTasks[i].date[1]] +
                ' ' +
                this.undoneTasks[i].date[2]
            );

            paraName.appendChild(paraNameNode);
            paraDate.appendChild(paraDateNode);
            div.appendChild(img);
            div.appendChild(paraName);
            div.appendChild(paraDate);
            div.appendChild(icon);
            div.appendChild(iReset);
            undoneTasksZone.appendChild(div);
        }
    }
}
