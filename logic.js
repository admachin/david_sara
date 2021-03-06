const ENTRANTS = new Map(
	[
		["patricia", "Adolfo"],
		["martín", "Iria"],
		["nacho", "Jaime"],
		["adrián", "Ana"],
		["juan", "Elena"],
		["jon", "Lucía"],
		["rubén", "Arancha"],
		["sici", "Iñigo"],
		["alberto", "Lydia"],
		["capa", "Mario"],
		["iván", "Sara"],
		["marta", "Borja"],
		["adolfo", "Patricia"],
		["iria", "Martín"],
		["jaime", "Nacho"],
		["ana", "Adrián"],
		["elena", "Juan"],
		["lucía", "Jon"],
		["arancha", "Rubén"],
		["iñigo", "Sici"],
		["lydia", "Alberto"],
		["mario", "Capa"],
		["sara", "Iván"],
		["borja", "Marta"],
		["álvaro", "Matín"],
		["martin", "Iria"],
		["adrian", "Ana"],
		["ruben", "Arancha"],
		["ivan", "Sara"],
		["lucia", "Jon"],
		["alvaro", "Martín"],
		["patri", "Adolfo"],
		["adri", "Ana"],
		["alber", "Lydia"],
		["javi", "Álvaro"],
		["adol", "Patricia"]
	]
);

const ENTRANTS_AUX = new Map(
	[
		["pablo", "¿Quién es Pablo?, prueba con personas reales"],	
		["juanito profundo", "La Laurita"],
		["nevado da sousa", "Espero que la Merchi no"],
		["nevado di sousa", "Espero que la Merchi no"],	
		["nevado", "Espero que la Merchi no"],	
		["lluch", "No tenemos más chicles señora"],
		["doctor rayote", "Elmo Cosillas"],
		["albaricoque", "Pato"],	
		["raquel", "Habrá que llamarla"],
		["hector", "Poliamor"],	
		["el pez dorado", "Ojo"],
		["pijama", "Mario"],
		["yo", "Tú"],	
		["hola", "Tu puta madre"],
		["soma", "No esperes encontrar ulte"],
		["mujeres", "Más mujeres"],	
		["andrea", "¿Quién ha puesto esta canción?"],
		["bernie", "Más mujeres"],
		["stalin", "El guardián de nuestro camping"]
	]
);

const namesElement = document.getElementById("names");
const winnerElement = document.getElementById("winner");
const discoverButton = document.getElementById("discover-button");
const textInput = document.getElementById("text-input");

function randomName() {
	const rand = Math.floor(Math.random() * ENTRANTS.size);
	const key = Array.from(ENTRANTS.keys())[rand];
	const name = ENTRANTS.get(key);
	namesElement.innerText = name;
}

function rollClick() {
	discoverButton.disabled = true;
	textInput.disabled = true;
	namesElement.style.display = "block";	// Show names element
	winnerElement.style.display = "none";	// Hide winner element
	
	setDeceleratingTimeout(randomName, 10, 30);

	setTimeout(() => {
		namesElement.style.display = "none";	// Hide names element
		winnerElement.style.display = "block";	// Show winner element
		discoverButton.disabled = false;
		textInput.disabled = false;
		
		const guest = document.getElementById("text-input").value;
		var winner = "Nadie quiere a Milhouse :(";
		if(ENTRANTS.has(guest.toLowerCase())) {
			winner = ENTRANTS.get(guest.toLowerCase());
			winnerElement.innerHTML = `<span>Te tienes que casar con...</span><br>${winner}`;
		}
		else if(ENTRANTS_AUX.has(guest.toLowerCase())) {
			winner = ENTRANTS_AUX.get(guest.toLowerCase());
			winnerElement.innerHTML = `${winner}`;
		}
		else {
			winnerElement.innerHTML = `${winner}`;
		}
	}, 4000);
}

function setDeceleratingTimeout(callback, factor, times) {
	const internalCallback = ((t, counter) => {
		return () => {
			if (--t > 0) {
				setTimeout(internalCallback, ++counter * factor);
				callback();
			}
		};
	})(times, 0);

	setTimeout(internalCallback, factor);
}
