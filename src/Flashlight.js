/*jslint esnext:true, browser:true*/
/**
 * @module Flashlight
 */
export default class Flashlight {
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
		link.setAttribute("href", "./src/flashlight.css");
	}
	creerSprite() {
		var resultat = document.createElement("div");
		resultat.classList.add("sprite");
		resultat.classList.add("flashlight");
		resultat.style.left = this.x + "px";
		resultat.style.top = this.y + "px";
		resultat.obj = this;
		this.sprite = resultat;

		window.addEventListener("keypress", e => {
			if (e.code === "Space") {
				this.toggle();
			}
		});
		window.addEventListener("click", e => {
			this.toggle();
		});

		return resultat;
	}
	allumer() {
		this.sprite.classList.add("on");
	}
	eteindre() {
		this.sprite.classList.remove("on");
	}
	estAllumee() {
		return this.sprite.classList.contains("on");
	}
	toggle() {
		this.sprite.classList.toggle("on");
	}
	static init() {
		this.ajouterStyle();
	}
}
Flashlight.init();