// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriang = (base * height) / 2;
  return areaTriang;
}

// Desafio 3
function splitSentence(palavraComposta) {
  const splitstring = palavraComposta.split(' ');
  for (let index = 0; index < splitstring.length; index += 1) {
    palavraComposta = splitstring[index];
  }
  return splitstring;
}

// Desafio 4
function concatName(lastFirstItem) {
  let firstItem = lastFirstItem[0];
  let lastItem = lastFirstItem[lastFirstItem.length - 1];
  let concatItem = lastItem.concat(', ', firstItem);
  return concatItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiesPoints = ties * 1;
  let totalPoints = winPoints + tiesPoints;
  return totalPoints;
}

// Desafio 6
function highestCount(numCounts) {
  let lastNum = numCounts[0];
  let highestNum;
  let howManyHighestNum = 0;
  for (let index = 1; index < numCounts.length; index += 1) {
    if (lastNum >= numCounts[index]) {
      highestNum = lastNum;
    } else {
      highestNum = numCounts[index];
      lastNum = numCounts[index];
    }
  }
  for (let index1 = 0; index1 < numCounts.length; index1 += 1) {
    if (highestNum === numCounts[index1]) {
      howManyHighestNum += 1;
    }
  }
  return howManyHighestNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;

  if (Math.abs(distanceCat1) === Math.abs(distanceCat2)) {
    return 'os gatos trombam e o rato foge';
  }
  if (Math.abs(distanceCat1) < Math.abs(distanceCat2)) {
    return 'cat1';
  }
  if (Math.abs(distanceCat2) < Math.abs(distanceCat1)) {
    return 'cat2';
  }

}
// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
