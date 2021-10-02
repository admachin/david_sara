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
		["javier", "Álvaro"],
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
		["álvaro", "Javier"],
		["martin", "Iria"],
		["adrian", "Ana"],
		["ruben", "Arancha"],
		["ivan", "Sara"],
		["lucia", "Jon"],
		["alvaro", "Javier"],
		["patri", "Adolfo"],
		["adri", "Ana"],
		["alber", "Lydia"],
		["javi", "Álvaro"],
		["adol", "Patricia"]
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
