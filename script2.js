let age = 30;
console.log(age);
console.log(`I am ${age} years old.`);

let years = 10;
console.log(years);

// let defineste o variabila in cazul de fata age;
// mai jos nu am mai folosit let deoarece am reatribuit o noua valoare variabilei age
age= 36;
console.log(age);

const piNumber = 3.14;
console.log(piNumber);
//piNumber = 4; mesaj de eroare in consola deoarece am atribuit deja o val const piNumber
// valorile pe care le atribuim in constante nu pot fi schimbate

let userName = "Cristina";
console.log(`My name is ${userName}`);
console.log('userName: ');
console.log(userName);

// string-ul este o valoare absoluta.

// Tipuri de date numerice: Number
// Operatori date numerice: ARITMETICI

// Addition +

let firstNumber = 10;
firstNumber=12;
let secondNumber = 21;
let sum = firstNumber + secondNumber;
console.log(sum);
console.log(`Rezultatul sumei dintre ${firstNumber} si ${secondNumber} este ${sum}.`);

// cand reatribuim val de dinainte este stearsa, nu se mai ia in considerare
// ii este luat locul de catre noua valoare

// string interpolation se foloseste pentru a crea texte mai interpretative

// Substraction -

let pastAge = age - years;
console.log(`Acum ${years} ani aveam varsta de ${pastAge}.`);
console.log(`Acum ${years} ani aveam varsta de ${age - years}.`);
// in interpolare putem folosi si expresii ca in aczul de mai sus nu doar variabile

// Multiplication *

let numberA = 5;
let numberB = 10;
let multiplyResults = numberA * numberB;
console.log(`${numberA} inmultit cu ${numberB} este egal cu ${multiplyResults}.`);

// Division /

let numberC = 25;
let numberD = 10;
let divisionResults= numberC / numberD;
console.log(`${numberC} impartit la ${numberD} rezulta ${divisionResults}`);


// Restul impartirii % Modulo

let numberE = 15;
let numberF = 4;
let moduloResults = numberE % numberF;
console.log(`Restul impartirii lui ${numberE} la ${numberF} este egal cu ${moduloResults}.`);
