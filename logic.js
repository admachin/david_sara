const map = new Map(
  [
    ["Adolfo", "ValorAdolfo"],
    ["David", "ValorDavid"],
    ["Alberto", "ValorAlberto"],
    ["Rubén", "ValorRubén"],
  ]
);

function getMatch(name) {
  if(map.has(name)) {
    return map.get(name);
  }
  else {
    return "Nadie quiere a milhouse :(";
  }
}

function showMatch() {
  var guest = document.getElementById("guest").value;
  //output = getMatch(document.getElementById("guest").value);
  
  var output = getMatch(guest);
  
  console.log('guest: ', guest);
  
  document.getElementById('output_1').hidden = false;
  document.getElementById('output_2').hidden = false;
  document.getElementById('output_2').innerHTML = output;
}

