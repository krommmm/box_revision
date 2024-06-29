import { SRenderer } from "./class/services/SRenderer.js";
import { Renderer } from "./class/utils/Renderer.js";
import { SModal } from "./class/services/SModal.js";
import { Modal } from "./class/utils/Modal.js";
import { SCards } from "./class/services/SCards.js";
import { Cards } from "./class/utils/Cards.js";
import { Home } from "./class/pages/Home.js";
import { SCemetery } from "./class/services/SCemetery.js";
import { Cemetery } from "./class/utils/Cemetery.js";



const modal = new Modal();
const modalAddCard = new SModal(modal, ".modal_name");
const modalDeleteCard = new SModal(modal, ".modal_answer_input");
const modalNextOrReset = new SModal(modal, ".modal_answer");

const renderer = new Renderer();
const sRenderer = new SRenderer(renderer);


const cards = new Cards();
const cardService = new SCards(cards);

const home = new Home(sRenderer, modalAddCard, cards, modalNextOrReset);
const cemetery = new Cemetery(sRenderer, modalDeleteCard);
const sCemetery = new SCemetery(cemetery);


// Define reload methods
home.reload = function () {
    const home = new Home(sRenderer, modalAddCard, cards, modalNextOrReset);
};

cemetery.reload = function () {
    const cemetery = new Cemetery(sRenderer, modalDeleteCard);
};

// Add event listeners
window.addEventListener('localStorageModified', () => {
    cemetery.reload();
    home.reload();
});



