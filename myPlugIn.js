var i = 0;
numero = 0;
var numeriDaUnoACento = [];

for (i = 0; i < 100; i++) {
    numero = i + 1;
    numeriDaUnoACento.push(numero);


    var multiploDiTre = numeriDaUnoACento[i] % 3 === 0;
    var multiploDiCinque = numeriDaUnoACento[i] % 5 === 0 ;

    if (multiploDiTre && !multiploDiCinque) {
        numeriDaUnoACento[i]= ("Fizz");
        // numeriDaUnoACento.splice(i, 1, "Fizz");

    } else if (multiploDiCinque && !multiploDiTre) {
        numeriDaUnoACento[i]= ("Buzz");
        // numeriDaUnoACento.splice(i, 1, "Buzz");

    } else if (multiploDiTre && multiploDiCinque) {
        numeriDaUnoACento[i]= ("FizzBuzz");
        // numeriDaUnoACento.splice(i, 1, "FizzBuzz");

    } else { };

};


console.log(numeriDaUnoACento);

document.getElementById("target").innerHTML = (numeriDaUnoACento.join(",  "))