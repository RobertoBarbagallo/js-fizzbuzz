var i = 0;
numero = 0;
var numeriDaUnoACento = [];

for (i = 0; i < 100; i++) {
    numero = i + 1;
    numeriDaUnoACento.push(numero);
}

console.log(numeriDaUnoACento);

multiploDiTre = 0;
multiploDiCinque = 0;

for (i = 0; i < numeriDaUnoACento.length; i++) {



    if (numeriDaUnoACento[i] % 3 === 0 && numeriDaUnoACento[i] % 5 !== 0) {
        numeriDaUnoACento.splice(i, 1, "Fizz");

    } else if (numeriDaUnoACento[i] % 5 === 0 && numeriDaUnoACento[i] % 3 !== 0) {
        numeriDaUnoACento.splice(i, 1, "Buzz");

    } else if (numeriDaUnoACento[i] % 3 === 0 && numeriDaUnoACento[i] % 5 === 0) {
        numeriDaUnoACento.splice(i, 1, "FizzBuzz");

    } else { };
}

console.log(numeriDaUnoACento);

document.getElementById("target").innerHTML = (numeriDaUnoACento.join(",  "))