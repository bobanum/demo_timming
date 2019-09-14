/*jslint esnext:true, browser:true*/
/**
 * @module Poolball
 */
export default class Poolball {
	constructor(x, y, no=0) {
		this.x = x;
		this.y = y;
		this.no = no;
	}
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
	}
	static ajouterStyle() {
		var link = document.head.appendChild(document.createElement("link"));
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("href", "./src/poolball.css");
	}
	creerSprite() {
		var resultat = document.createElement("div");
		resultat.classList.add("sprite");
		resultat.classList.add("poolball");
		resultat.classList.add("no" + this.no);
		resultat.style.left = this.x + "px";
		resultat.style.top = this.y + "px";
		resultat.obj = this;
		this.sprite = resultat;
		return resultat;
	}
	tomber(x, y, dur) {
		// Formule de la distance en fonction du temps : s = 1/2*a*t²
		// Formule du temps en fonction du temps : t = √(2s/a) = √(2s/10)
		if (dur === undefined) {
			dur = 100 * Math.sqrt(Math.abs(this.y - y));
		}
		this.x = x;
		this.y = y;
		this.sprite.style.transitionDuration = dur + "ms";
		this.sprite.style.transitionProperty = "left, top";
		this.sprite.style.transitionTimingFunction = "linear, cubic-bezier(.75,0,1,1)";
		window.setTimeout(() => {
			this.sprite.style.left = this.x + "px";
			this.sprite.style.top = this.y + "px";
		}, 100);
		var me;
		this.sprite.addEventListener("transitionend", me = e => {
			e.stopImmediatePropagation();
			var sprite = e.currentTarget;
			sprite.removeEventListener("transitionend", me);
			sprite.style.removeProperty("transitionDuration");
			sprite.style.removeProperty("transitionProperty");
			sprite.style.removeProperty("transitionTimingFunction");
		});
	}
	detruire() {
		this.sprite.parentNode.removeChild(this.sprite);
		delete this.sprite;
	}
	rouler(x, y, dur=2000) {
		this.x = x;
		this.y = y;
		this.sprite.style.transitionDuration = dur + "ms";
		this.sprite.style.transitionProperty = "left, top";
		this.sprite.style.transitionTimingFunction = "linear";
		window.setTimeout(() => {
			this.sprite.style.left = this.x + "px";
			this.sprite.style.top = this.y + "px";
		}, 100);
		var me;
		this.sprite.addEventListener("transitionend", me = e => {
			e.stopImmediatePropagation();
			var sprite = e.currentTarget;
			sprite.removeEventListener("transitionend", me);
			sprite.style.removeProperty("transitionDuration");
			sprite.style.removeProperty("transitionProperty");
			sprite.style.removeProperty("transitionTimingFunction");
		});
	}
	static init() {
		this.ajouterStyle();
	}
}
Poolball.init();