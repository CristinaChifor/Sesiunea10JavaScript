let age = 30;
let years = 10;
console.log (age);
console.log (years);

age = 36;
console.log (age);

let username = "Cristina";
console.log (" name:");
console.log (username);

const piNumber = 3.14;
console.log (piNumber);
// piNumber = 4;
//val setate in constante nu pot fi schimbate

// Operatori pentru date numerice
// Operatori artimetici

// % operator care calc operatii cu rest

// Addition +

let  firstNumber =12;
let secondNumber = 21;
let sum = firstNumber + secondNumber;
console.log (`Rezultatul sumei dintre ${firstNumber} si ${secondNumber} este ${sum}`);
//string interpolation ${}
// trecem let o singura data cand def prima data variabila.
// nu trebuie trecut decat o singura data.

// Substraction -

let pastAge = age - years;
console.log(`Acum ${years} aveam varsta de ${pastAge}`);

console.log(`Acum ${years} aveam varsta de ${age-years}`);


// Multiplication *

let numberA = 5;
let numberb = 10;
let multplyResult = numberA * numberb;
console.log (`${numberA} inmultit cu ${numberb} da ${multplyResult}`);

//Division

let numberC = 55;
let numberD = 10;
let divisionResult = numberC/ numberD;
console.log (`${numberC} impartit la ${numberD} rezulta ${divisionResult}`);


// restul impartirii

let numberE = 18;
let numberF = 4;
let moduloResult = numberE % numberF;
console.log (`Rezultatul impartirii lui ${numberE} la ${numberF} rezulta ${moduloResult}`);

// cum aflam

//console.log (Number_MAX_SAFE_INTEGER);

//console.log(Number_MIN_SAFE_INTEGER);

// Cum aflam numere de tip BigInt

let bigIntNumber = 123456789n;
console.log (`Right value is ${bigIntNumber}`);

//String Operations
// index-ul porneste de la 0

const myName= "Cristina Chifor";

// afisarea unui caracter de la o pozitie
// primul caracter

const firstCharInName = myName [0];
console.log (`Primul caracter din sirul ${myName} este ${firstCharInName}`);


//lungimea sirului

const myNameLength = myName.length;
console.log (`Lungimea sirului ${myName} este ${myNameLength}`);

// Ultimul caracter din sir

let lastCharIndex = myNameLength - 1;
let lastChar = myName [lastCharIndex];
console.log (`Ultimul caracter din sir este ${lastChar}`);


// Concatenare de stringuri

let firstName = "Cristina".endsWith("a");
let lastName = "Chifor";
let separator = " ";
let fullName = firstName + separator + lastName;
console.log (`Numele complet este ${fullName}`);

// verificare numar par/ impar

let checkedNumber = 21;

let reminder = checkedNumber % 2;
let isEven = reminder == 0;
console.log (`Number ${checkedNumber} is even: ${isEven}`);

// demo continuare sesiunea 10
// string precizare daca punem punct dupa un string putem vedea ce alte metode se mai pot seta

//firstName = "Cristiana".endsWith(`a`);

// Date de tip Boolean ( True/ False)

// variabilele se declara

let isAdult = true;
console.log(`isAdult= ${isAdult}`);

let isOld = false;
console.log(`isOld= ${isOld}`);

// Date NULL si UNDEFINED
// null marcheaza lipsa referintei catre o alta valoare
// intr-o varaibila putem avea val null doar daca este setata explicit

let nullValue = null;
console.log(`nullValue = ${nullValue}`);

// undefined - var care au fost definte dar nu si initializate
// in exemplul de mai jos am def varibila dar nu am initia;izat nicio valoare
let notInitialised;
console.log(`notInitialised = ${notInitialised}`);
