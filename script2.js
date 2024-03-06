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

// cum aflam cel mai mare numar de tip NUMBER

console.log(Number.MAX_SAFE_INTEGER);

// Cum aflam cel mai mic numar de tip NUMBER

console.log(Number.MIN_SAFE_INTEGER);

// numere de tip BigInt

let bigIntNumber = 123456789n;
console.log(`BigInt value is ${bigIntNumber}`);

// String Operations
// ne putem raporta la un string ca la si un sir de caractere
// string-urile au INDEX; Index-ul incepe de la 0 ex: Prima pozitoe dintr-un sir de caractere are indez-ul 0

const myFullName = "Cristina Chifor";

// afisarea unui caracter de la o pozitie
// primul caracter/ al doilea caracter

const firstCharInName = myFullName [0];
console.log(`Primul caracter din sirul '${myFullName}' este ${firstCharInName}`);

const secondCharInName = myFullName [1];
console.log(`Al doilea caracter din sirul '${myFullName}' este ${secondCharInName}`);

// lungimea sirului
// spatiul din interiorul unui string este numarat ca fiind un caracter

const myFullNameLength = myFullName.length;
console.log(`Lungimea sirului '${myFullName}' este ${myFullNameLength} `);

// ultimul caracter din sir
// se calc length -1

let lastCharIndex= myFullNameLength -1;
let lastChar = myFullName[lastCharIndex];
console.log(`Ultimul caracter din sir este ${lastChar}`);

// concatenare de stringuri

let firstName = "Cristina";
let secondName = "Chifor";
let separator = ' ';
//let fullName = firstName + separator +secondName;
let allName = firstName + ' ' +secondName;
console.log (`My fullname is ${allName}`);

// De exersat acasa:

let upperCaseName = allName.toUpperCase ();
console.log(`Full name in uppercase is ${allName}`); // de verificat!

let lowerCaseName = allName.toLowerCase ();
console.log(`My fullname in lowercase is ${allName}`); // de verificat!

let substringResult = allName.substring (1, 4);
console.log(`Caracterle de la 1, 4 sunt ${substringResult}`); //REZULTAT CORECT

// verificare numar impar/ par

let checkedNumber= 21;

let moduloResult = checkedNumber % 2;

// operatori de comparatie ==

let isEven = moduloResult == 0;
console.log(`Number ${checkedNumber} is even: ${isEven}`);


// adaugare la un numar

let x = 10;
console.log(`x =`, 1);

x++;
console.log(`x =`, 1);

// Operatori de comparatie
// = operator de atribuire
// == operator de comparatie

let value1 = 22;
let value2 = 22;
let value3 = 23;
let value4 = "22";

let firstCompareResult = value1 == value2;
console.log(`${value1} == ${value2} => ${firstCompareResult}`);

let secondCompareResult = value1 == value3;
console.log(`${value1} == ${value3} => ${secondCompareResult}`);

let stringAndNumberEquality = value1 == value4;
console.log(`${value1} == ${value4} => ${stringAndNumberEquality}`);

// cand se comapara un string cu un number le face pe amandoua string

// comparatorul de egalitate stricta ===
// verifica si val si tipul de date

let strictEqual = value1 === value4;

console.log(`${value1} === ${value4} => ${strictEqual}`);
// rez este false deoarece nu avem acelasi tip de date: val 1 = number si val 4 este string

let strictEqualComparison = value1 === value2;
console.log(`${value1} === ${value2} => ${strictEqualComparison}`);
// rez este true deoarece avem acelasi tip de date: number

// comparatorul  mai mic() mai mic sau egal <=

let num1 = 5;
let num2 = 6;
let num3 = 5;
let lessThanComparison = num1 < num2;
console.log(`${num1} < ${num2} => ${lessThanComparison}`);

let lessThanComparison2 = num2 < num1;
console.log(`${num2} < ${num1} => ${lessThanComparison2}`);

let lessOrEqualComparison = num1 <= num2;
console.log(`${num1} < ${num2} => ${lessOrEqualComparison}`);

// Operatori logici
// se fol pt date de tip boolean

let trueValue = true;
let falseValue = false;

// si logic (&&)

let logicalEndResult = trueValue && falseValue;
console.log(`${trueValue} && ${falseValue} => ${logicalEndResult}`);
// cand avem op si intre operatii booleane dif

logicalEndResult = falseValue && falseValue;
console.log(`${falseValue} && ${falseValue} => ${logicalEndResult}`);

logicalEndResult = trueValue && trueValue;
console.log(`${trueValue} && ${trueValue} => ${logicalEndResult}`);

// sau logic (||)

let logicalResult = trueValue || falseValue;
console.log(`${trueValue} || ${falseValue} => ${logicalResult}`);

logicalResult =  falseValue || falseValue;
console.log(`${falseValue} || ${falseValue} => ${logicalResult}`);

logicalResult =  trueValue || trueValue;
console.log(`${trueValue} || ${trueValue} => ${logicalResult}`);

// true= daca macar unul din cei doi operanti este true

// negare logica not oprator !

let notTrueValue = !trueValue;
console.log(`!${trueValue} => ${notTrueValue}`);

let notFalseValue = !falseValue;
console.log(`!${!falseValue} => ${notFalseValue}`);