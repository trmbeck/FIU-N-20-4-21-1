// alert("Willkommen FIU!");
console.log("Dienstag, 12.10.2021: Teilnehmer sind sehr interessiert :-)");
document.getElementById("headline").
    style.backgroundColor = "red";

let s = "Hallo";
console.log(s);

s = 10;
console.log(s);

s = true;
console.log(s);

s = "15" + 10;
console.log(s);

s = "15" - 10;
console.log(s);

s = Number("15") + 10;
console.log(s);

console.log(typeof(s));
console.log(typeof(true));
console.log(typeof("zeichenfolge"));

console.log("15" == 15); // --> true
console.log("15" === 15);// 3 istgleich Zeichen bewirkt Datentypvergleich
//Pascal Zuweisung :=, Vergleich =

let emptyArray = [];
console.log(emptyArray.length);

let myArray = new Array(10);
console.log(myArray.length);

let myArray2 = [10,20,30];
console.log(myArray2.length);

for (let index = 0; index < myArray2.length; index++) {
    const element = myArray2[index];
    console.log(index + ": " + element);
}

console.log(myArray2);

console.log("push, pop");
myArray2.push(40);
console.log(myArray2);

console.log(myArray2.pop());
console.log(myArray2);

console.log("unshift, shift");
myArray2.unshift(40);
console.log(myArray2);

console.log(myArray2.shift());
console.log(myArray2);

// einfache und doppelte Anführungszeichen
let einfach = 'Hallo JavaScript';
let doppelt = "Hallo JavaScript";

einfach = 'Hallo "JavaScript"';
doppelt = "Hallo 'JavaScript'";

einfach = 'Hallo \'tolles\' "JavaScript"';
doppelt = "Hallo 'tolles' \"JavaScript\"";