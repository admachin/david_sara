const ENTRANTS = new Map(
  [
    ["Adolfo", "ValorAdolfo"],
    ["David", "ValorDavid"],
    ["Alberto", "ValorAlberto"],
    ["Rubén", "ValorRubén"]
  ]
);

const rollEl = document.querySelector(".roll");
const namesEl = document.querySelector(".names");
const winnerEl = document.querySelector(".winner");

function randomName() {
  const rand = Math.floor(Math.random() * ENTRANTS.size);
  const key = Array.from(ENTRANTS.keys())[rand];
  const name = ENTRANTS.get(key);
  namesEl.innerText = name;
}

function rollClick() {
  rollEl.classList.add("hide");
  winnerEl.classList.add("hide");
  namesEl.classList.remove("hide");

  setDeceleratingTimeout(randomName, 10, 30);

  setTimeout(() => {
    namesEl.classList.add("hide");
    winnerEl.classList.remove("hide");

    const guest = document.getElementById("text-input").value;
    var winner = "Nadie quiere a Milhouse :(";
    if(ENTRANTS.has(guest)) {
      winner = ENTRANTS.get(guest);
    }
    winnerEl.innerHTML = `<span>And the winner is...</span><br>${winner}`;
    rollEl.classList.remove("hide");
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
