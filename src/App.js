
/*jslint esnext:true, browser:true*/
import Fan from "./Fan.js";
import Aladdinslamp from "./Aladdinslamp.js";
import Pinwheel from "./Pinwheel.js";
import Incline from "./Incline.js";
import Bowlingball from "./Bowlingball.js";
import Flashlight from "./Flashlight.js";
import Poolball from "./Poolball.js";
/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
		var app = document.getElementById("app");
		var fan = new Fan(200, 60);
		app.appendChild(fan.creerSprite());
		var aladdinslamp = new Aladdinslamp(20, 20);
		app.appendChild(aladdinslamp.creerSprite());
		var pinwheel = new Pinwheel(100, 200);
		app.appendChild(pinwheel.creerSprite());
		var incline = new Incline(300, 200, 4, 3);
		app.appendChild(incline.creerSprite());
		var bowlingball = new Bowlingball(490, -33);
		app.appendChild(bowlingball.creerSprite());
		bowlingball.tomber(290,168);
		var me;
		bowlingball.sprite.addEventListener("transitionend", me = e => {
			e.stopImmediatePropagation();
			e.currentTarget.removeEventListener("transitionend", me);
			e.currentTarget.obj.rouler(347,183, 1000);
			var me2;
			bowlingball.sprite.addEventListener("transitionend", me2 = e => {
				e.stopImmediatePropagation();
				e.currentTarget.removeEventListener("transitionend", me2);
				e.currentTarget.obj.tomber(447, 300);
				var me3;
				bowlingball.sprite.addEventListener("transitionend", me3 = e => {
					e.stopImmediatePropagation();
					e.currentTarget.removeEventListener("transitionend", me3);
					e.currentTarget.obj.detruire();
				});
			});
		});
		var flashlight = new Flashlight(190, 200);
		app.appendChild(flashlight.creerSprite());
		var ajouterBalle = () => {
			var poolball = new Poolball(400, 0, this.alea(15));
			app.appendChild(poolball.creerSprite());
			poolball.tomber(this.alea(800,0),this.alea(600,100));
			// poolball.sprite.addEventListener("transitionend", e => {
			// 	e.currentTarget.obj.detruire();
			// });
			window.setTimeout(() => {
				poolball.detruire();
			}, this.alea(5000,1000));
		};
		var int_balles = window.setInterval(() => {
			window.setTimeout(() => {
				ajouterBalle();
			}, this.alea(4000, 2000));
		}, 10);
		window.setTimeout(() => {
			window.clearInterval(int_balles);
			// console.log("fini");
		}, this.alea(10000));
	}
	static alea(max, min = 0, precision = 0) {
		var resultat = Math.random() * (max - min + 1);
		precision = Math.pow(10, precision);
		resultat = Math.floor(resultat * precision) / precision;
		resultat += min;
		return resultat;
	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns {Promise} La promesse qui sera résolue après chargement
	 */
	static load() {
		return new Promise(resolve => {
			window.addEventListener("load", () => {
				resolve();
			});
		});
	}
}
