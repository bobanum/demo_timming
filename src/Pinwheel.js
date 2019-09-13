/*jslint esnext:true, browser:true*/
/**
 * @module Pinwheel
 */
export default class Pinwheel {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
	}
	static ajouterStyle() {
		var link = document.head.appendChild(document.createElement("link"));
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("href", "./src/pinwheel.css");
	}
	creerSprite() {
		var resultat = document.createElement("div");
		resultat.classList.add("sprite");
		resultat.classList.add("pinwheel");
		resultat.style.left = this.x + "px";
		resultat.style.top = this.y + "px";
		resultat.obj = this;
		this.sprite = resultat;

		window.addEventListener("keypress", e => {
			if (e.code === "Space") {
				this.toggle();
			}
		});

		return resultat;
	}
	arreter() {
		this.sprite.style.animationPlayState = "paused";
	}
	demarrer() {
		this.sprite.style.animationPlayState = "running";
	}
	fonctionne() {
		return this.sprite.style.animationPlayState !== "paused";
	}
	toggle() {
		if (this.fonctionne()) {
			this.arreter();
		} else {
			this.demarrer();
		}
	}

	static init() {
		this.ajouterStyle();
	}
}
Pinwheel.init();