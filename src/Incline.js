/*jslint esnext:true, browser:true*/
/**
 * @module Incline
 */
export default class Incline {
	constructor(x, y, largeur=1, type=0) {
		this.x = x;
		this.y = y;
		this.type = type;
		this.largeur = largeur;
	}
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
	}
	static ajouterStyle() {
		var link = document.head.appendChild(document.createElement("link"));
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("href", "./src/incline.css");
	}
	creerSprite() {
		var resultat = document.createElement("div");
		resultat.classList.add("sprite");
		resultat.classList.add("incline");
		resultat.setAttribute("tabindex", "0");
		resultat.style.left = this.x + "px";
		resultat.style.top = this.y + "px";
		resultat.style.setProperty("--type", this.type);
		resultat.style.setProperty("--largeur", this.largeur);
		resultat.obj = this;
		this.sprite = resultat;

		resultat.addEventListener("keydown", e => {
			e.stopPropagation();
			e.preventDefault();	//Pour empêcher le keypress
			if (e.code === "ArrowDown") {
				this.type = (this.type + 1) % 6;
				e.currentTarget.style.setProperty("--type", this.type);
			} else if (e.code === "ArrowUp") {
				this.type = (this.type + 6 - 1) % 6;
				e.currentTarget.style.setProperty("--type", this.type);
			} else if (e.code === "ArrowLeft" && this.largeur > 1) {
				this.largeur -= 1;
				e.currentTarget.style.setProperty("--largeur", this.largeur);
			} else if (e.code === "ArrowRight" && this.largeur < 4) {
				this.largeur += 1;
				e.currentTarget.style.setProperty("--largeur", this.largeur);
			}
		});
		return resultat;
	}
	static init() {
		this.ajouterStyle();
	}
}
Incline.init();