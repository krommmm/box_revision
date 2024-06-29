
import { IRenderer } from "../interfaces/IRenderer.js";
export class Renderer extends IRenderer {


	getIntroContent() {
		return `
				<div class="flashCards">
					<div class="title">
						<h1>Flash cards</h1>
						<p>Bienvenue sur l'application de flash Cards</p>
					</div>
					<h2>Commencer</h2>
					<div class="fakePost">
						<div class="fakePost__pictures"><img src="assets/pictures/others/leiner.png" alt=""/></div>
						<div class="fakePost__text">
							<p class="fakePost__text--title">Bienvenue sur l'application de flash Cards</p>
							<p class="fakePost__text--main">Dispositif d'apprentissage fondé sur la technique de la répétition espacée.</p>
							<p class="fakePost__text--main">Cette technique d'apprentissage a été mise au point dans les années 1970 par Sebastian Leitner (en) (chroniqueur scientifique allemand, 1919-1989) à la suite des travaux de Hermann Ebbinghaus1. </p>
							<p class="fakePost__text--litleTitle">Ajouter une carte pour débuter ...</p>
							<button class="btn add-btn">Add card</button>
						</div>
					
					</div>
					</div>
        `;
	}

	getCemetaryContent() {
		return `
        <div class="undoneTasks_logo">
                 
                    <p class="undoneTasks_logo__titre">Cimetière des cartes</p>
                    <div class="undoneTasks_zone"></div> 
        </div>   
        `;
	}

	getWeekContent() {
		return `
	<p class="mois"></p>
				
				<div class="semaine">
					<div class="semaine__dimanche day">
						<p class="semaine__titre">
							Dimanche <span class="numero"></span>
						</p>
						<ul></ul>
					</div>
					<div class="semaine__lundi day">
						<p class="semaine__titre">
							lundi <span class="numero"></span>
						</p>
						<ul></ul>
					</div>
					<div class="semaine__mardi day">
						<p class="semaine__titre">
							Mardi <span class="numero"></span>
						</p>
						<ul></ul>
					</div>
					<div class="semaine__mercredi day">
						<p class="semaine__titre">
							Mercredi <span class="numero"></span>
						</p>
						<ul></ul>
					</div>
					<div class="semaine__jeudi day">
						<p class="semaine__titre">
							Jeudi <span class="numero"></span>
						</p>
						<ul></ul>
					</div>
					<div class="semaine__vendredi day">
						<p class="semaine__titre">
							Vendredi <span class="numero"></span>
						</p>
						<ul></ul>
					</div>
					<div class="semaine__samedi day">
						<p class="semaine__titre">
							Samedi <span class="numero"></span>
						</p>
						<ul></ul>
					</div>
				
				</div>
				<button class="btn add-btn">Add card</button>
	`;
	}

	renderContent(content, selector) {
		const element = document.querySelector(selector);
		if (element) {
			element.innerHTML = content;
		} else {
			console.error(`Element with selector ${selector} not found.`);
		}
	}
}