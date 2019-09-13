
/*jslint esnext:true, browser:true*/
import Fan from "./Fan.js";
import Aladdinslamp from "./Aladdinslamp.js";
import Pinwheel from "./Pinwheel.js";
/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
		var app = document.getElementById("app");
		Fan.main();
		var fan = new Fan(200, 60);
		app.appendChild(fan.creerSprite());
		Aladdinslamp.main();
		var aladdinslamp = new Aladdinslamp(20, 20);
		app.appendChild(aladdinslamp.creerSprite());
		Pinwheel.main();
		var pinwheel = new Pinwheel(100, 200);
		app.appendChild(pinwheel.creerSprite());
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
