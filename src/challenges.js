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
// eslint-disable-next-line complexity
function fizzBuzz(numFizzBuzz) {
  let howManyFizzBuzz = [];
  for (let index = 0; index < numFizzBuzz.length; index += 1) {
    if (numFizzBuzz[index] % 3 === 0 && numFizzBuzz[index] % 5 === 0) {
      howManyFizzBuzz.push('fizzBuzz');
    // eslint-disable-next-line sonarjs/no-duplicated-branches
    } else if (numFizzBuzz[index] % 3 === 0) {
      howManyFizzBuzz.push('fizz');
    // eslint-disable-next-line sonarjs/no-duplicated-branches
    } else if (numFizzBuzz[index] % 5 === 0) {
      howManyFizzBuzz.push('buzz');
    } else {
      howManyFizzBuzz.push('bug!');
    }
  }
  return howManyFizzBuzz;
}

// Desafio 9
// eslint-disable-next-line complexity
function encode(fraseEncode) {
  let fraseEncodeSplit = fraseEncode.split('');
  for (let index = 0; index < fraseEncodeSplit.length; index += 1) {
    if (fraseEncodeSplit[index] === 'a') {
      fraseEncodeSplit[index] = '1';
    } else if (fraseEncodeSplit[index] === 'e') {
      fraseEncodeSplit[index] = '2';
    } else if (fraseEncodeSplit[index] === 'i') {
      fraseEncodeSplit[index] = '3';
    } else if (fraseEncodeSplit[index] === 'o') {
      fraseEncodeSplit[index] = '4';
    } else if (fraseEncodeSplit[index] === 'u') {
      fraseEncodeSplit[index] = '5';
    }
  }
  return fraseEncodeSplit.join('');
}

// eslint-disable-next-line complexity
function decode(fraseDecode) {
  let fraseDecodeSplit = fraseDecode.split('');
  for (let index = 0; index < fraseDecodeSplit.length; index += 1) {
    if (fraseDecodeSplit[index] === '1') {
      fraseDecodeSplit[index] = 'a';
    } else if (fraseDecodeSplit[index] === '2') {
      fraseDecodeSplit[index] = 'e';
    } else if (fraseDecodeSplit[index] === '3') {
      fraseDecodeSplit[index] = 'i';
    } else if (fraseDecodeSplit[index] === '4') {
      fraseDecodeSplit[index] = 'o';
    } else if (fraseDecodeSplit[index] === '5') {
      fraseDecodeSplit[index] = 'u';
    }
  }
  return fraseDecodeSplit.join('');
}

// Desafio 10
function techList(techs, namePerson) {
  let listTechsAndName = [];
  let ObTechsAndName;
  let techsSort = techs.sort();
  if (techs.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < techsSort.length; index += 1) {
    ObTechsAndName = {
      tech: techsSort[index],
      name: namePerson,
    };
    listTechsAndName.push(ObTechsAndName);
  }
  return listTechsAndName;
}
