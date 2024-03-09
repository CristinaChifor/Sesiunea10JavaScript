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

// o variabila este un conatiner in care tinem mai multe tipuri de date

// Operatori de atribuire
// atribuie o val unei variabile

let x = 5;
//x += 3;
//console.log(x);
// x = x + 3; x = 5 + 3 = 8

//x -= 2;
//console.log(x);
// x = x -2; x = 5-2 =3;

//x *= 3;
//console.log(x);
// x= x *3; x= 5*3 =15

x /= 2;
console.log(x);
// x = x /2; x = 5 / 2 = 2.5

// adaugare +1 la un numar - incrementare

let y = 10;
console.log(`y=`, y);

// sintaxa ++ adauga 1
y++;
console.log(`y=`, y);

// = este operator de atribuire adica atribuim o val dupa semnul =

// Operatori de comparatie

// Comparatorul de egalitate ==
// rezultatul compararii variabilelor

let value1 = 22;
let value2 = 22;
let value3 = 23;
let value4= "22";

let firstComparison = value1 == value2;
console.log(`${value1} == ${value2} => ${firstComparison}`);

let secondComparison = value1 == value3;
console.log(`${value1} == ${value3} => ${secondComparison}`);

let thirdComparison = value1 == value4;
console.log(`${value1} == ${value4} => ${thirdComparison}`);
// o comp intre un numar si un string
// cand folosim operatorul == chiar daca datele sunt de tip deferit number si string le face pe amandoua stringuri

// comparatori de egalitate stricta ===
// verifica val si tipul de date al valorii

let strictequalcompare= value1 === value4;
console.log(`${value1} === ${value4} => ${strictequalcompare}`);

let secondstrictequalcompare = value1 === value2;
console.log(`${value1} === ${value2} => ${secondstrictequalcompare}`);

// comparatori mai mic (<); mai mic sau egal (<=)

let z = 5;
let w = 6
let q = 5;

let lessThanComparison = z < w;
console.log(`${z} < ${w} => ${lessThanComparison}`);

let lessThanComparison2 = w < z;
console.log(`${w} < ${z} => ${lessThanComparison2}`);

let lessEqualComparison = z <= w;
console.log(`${z} <= ${w} => ${lessEqualComparison}`);

let lessOrEqualComparison2 = z <= q;
console.log(`${z} <= ${q} => ${lessOrEqualComparison2}`);

// comaparatorul mai mare (>); mai mare sau egal (>=)

let moreThanComparison = z > w;
console.log(`${z} > ${w} => ${moreThanComparison}`);

let moreThanComparison2 = w > z;
console.log(`${w} > ${z} => ${moreThanComparison2}`);

let moreEqualComparison = z >= w;
console.log(`${z} >= ${w} => ${moreEqualComparison}`);

let moreOrEqualComparison2 = z >= q;
console.log(`${z} >= ${q} => ${moreOrEqualComparison2}`);



