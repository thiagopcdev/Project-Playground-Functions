// Desafio 1
function compareTrue(elemento1, elemento2) {
  if (elemento1 === true && elemento2 === true) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let array = phrase.split(' ');
  return array;
}

// Desafio 4
function concatName(arrayNomes) {
  let ultPrimeiro = (`${arrayNomes[arrayNomes.length - 1]}, ${arrayNomes[0]}`);
  return ultPrimeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosWins = (wins * 3);
  return pontosWins + ties;
}

// Desafio 6.1
function contRepeated(numbers, maiorNum) {
  let contMaiorNum = 0;
  for (let i in numbers) {
    if (numbers[i] === maiorNum) contMaiorNum += 1;
  }
  return contMaiorNum;
}

// Desafio 6
function highestCount(numbers) {
  let maiorNum = 0;
  for (let i in numbers) {
    if (numbers[i] > maiorNum) maiorNum = numbers[i];
  }
  return contRepeated(numbers, maiorNum);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = (mouse - cat1);
  let distanciaCat2 = (mouse - cat2);
  if (distanciaCat1 < 0) distanciaCat1 *= -1;
  if (distanciaCat2 < 0) distanciaCat2 *= -1;
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
  if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8.1
function checkBuzz(num) {
  if ((num % 3 === 0) && (num % 5 === 0)) return 'fizzBuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return 'bug!';
}

// Desafio 8
function fizzBuzz(numbers) {
  let newArray = [];
  for (let i = 0; i < numbers.length; i += 1) {
    newArray.push(checkBuzz(numbers[i]));
  }
  return newArray;
}

// Desafio 9
function encode(string) {
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');
  return string;
}

function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
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
};
