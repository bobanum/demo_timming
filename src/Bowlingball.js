/*jslint esnext:true, browser:true*/
/**
 * @module Bowlingball
 */
export default class Bowlingball {
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
		link.setAttribute("href", "./src/bowlingball.css");
	}
	creerSprite() {
		var resultat = document.createElement("div");
		resultat.classList.add("sprite");
		resultat.classList.add("bowlingball");
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
	tomber(x, y, dur=2000) {
		this.x = x;
		this.y = y;
		this.sprite.style.transitionDuration = dur + "ms";
		this.sprite.style.transitionProperty = "left, top";
		this.sprite.style.transitionTimingFunction = "linear, cubic-bezier(.75,0,1,1)";
		window.setTimeout(() => {
			this.sprite.style.left = this.x + "px";
			this.sprite.style.top = this.y + "px";
		}, 10);
		var me;
		this.sprite.addEventListener("transitionend", me = e => {
			e.stopImmediatePropagation();
			var sprite = e.currentTarget;
			console.log("fin tomber");
			sprite.style.removeProperty("transitionDuration");
			sprite.style.removeProperty("transitionProperty");
			sprite.style.removeProperty("transitionTimingFunction");
			sprite.removeEventListener("transitionend", me);
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
		}, 10);
		var me;
		this.sprite.addEventListener("transitionend", me = e => {
			e.stopImmediatePropagation();
			var sprite = e.currentTarget;
			sprite.removeEventListener("transitionend", me);
			console.log("fin rouler");
			sprite.style.removeProperty("transitionDuration");
			sprite.style.removeProperty("transitionProperty");
			sprite.style.removeProperty("transitionTimingFunction");
		});
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
Bowlingball.init();