
/*jslint esnext:true, browser:true*/
import Fan from "./Fan.js";
import Aladdinslamp from "./Aladdinslamp.js";
import Pinwheel from "./Pinwheel.js";
import Incline from "./Incline.js";
import Bowlingball from "./Bowlingball.js";
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
		console.log("appel tomber");
		bowlingball.tomber(290,168);
		var me;
		bowlingball.sprite.addEventListener("transitionend", me = e => {
			e.stopImmediatePropagation();
			e.currentTarget.removeEventListener("transitionend", me);
			console.log("appel rouler");
			e.currentTarget.obj.rouler(347,183, 1000);
			var me2;
			bowlingball.sprite.addEventListener("transitionend", me2 = e => {
				e.stopImmediatePropagation();
				e.currentTarget.removeEventListener("transitionend", me2);
				console.log("appel tomber");
				e.currentTarget.obj.tomber(447, 300, 1500);
				var me3;
				bowlingball.sprite.addEventListener("transitionend", me3 = e => {
					e.stopImmediatePropagation();
					e.currentTarget.removeEventListener("transitionend", me3);
					e.currentTarget.obj.detruire();
				});
			});
		});
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
