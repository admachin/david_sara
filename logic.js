const ENTRANTS = new Map(
	[
		["Adolfo", "ValorAdolfo"],
		["David", "ValorDavid"],
		["Alberto", "ValorAlberto"],
		["Rubén", "ValorRubén"]
	]
);

const namesElement = document.getElementById("names");
const winnerElement = document.getElementById("winner");
const discoverButton = document.getElementById("discover-button");

function randomName() {
	const rand = Math.floor(Math.random() * ENTRANTS.size);
	const key = Array.from(ENTRANTS.keys())[rand];
	const name = ENTRANTS.get(key);
	namesElement.innerText = name;
}

function rollClick() {
	discoverButton.disabled = true;
	namesElement.style.display = "block";	// Show names element
	winnerElement.style.display = "none";	// Hide winner element
	
	setDeceleratingTimeout(randomName, 10, 30);

	setTimeout(() => {
		namesElement.style.display = "none";	// Hide names element
		winnerElement.style.display = "block";	// Show winner element
		discoverButton.disabled = false;
		
		const guest = document.getElementById("text-input").value;
		var winner = "Nadie quiere a Milhouse :(";
		if(ENTRANTS.has(guest)) {
			winner = ENTRANTS.get(guest);
		}
		winnerElement.innerHTML = `<span>Tu pareja es...</span><br>${winner}`;
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
