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
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
