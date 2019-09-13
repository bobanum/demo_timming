/*jslint esnext:true, browser:true*/
/**
 * @module Aladdinslamp
 */
export default class Aladdinslamp {
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
		link.setAttribute("href", "./src/aladdinslamp.css");
	}
	creerSprite() {
		var resultat = document.createElement("div");
		resultat.classList.add("sprite");
		resultat.classList.add("aladdinslamp");
		resultat.style.left = this.x + "px";
		resultat.style.top = this.y + "px";
		resultat.obj = this;
		this.sprite = resultat;

		resultat.addEventListener("click", e => {
			e.currentTarget.obj.toggle();
		});
		return resultat;
	}
	arreter() {
		this.sprite.style.animationName = "";
	}
	demarrer() {
		this.sprite.style.animationName = "aladdinslamp-action";
	}
	fonctionne() {
		return this.sprite.style.animationName === "aladdinslamp-action";
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
Aladdinslamp.init();