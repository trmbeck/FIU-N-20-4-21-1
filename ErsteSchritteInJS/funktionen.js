function functionName(param1, variable2, bezeichner3)
{
    //Anweisungen
}

let test = AddNumbers(20,30);
console.log("Test: " + test);

function AddNumbers(firstNumber, secondNumber){
    if (!secondNumber) secondNumber = 0;
    let sum = firstNumber + secondNumber;
    return sum;
}

let result = AddNumbers(2,3);
result = AddNumbers(2);
result = AddNumbers();//NaN --> not a number 

console.log(result);
console.log(typeof(result));
console.log(isNaN(result));

result = AddNumbers(3,4);
console.log(isNaN(result));

result = AddNumbers(1,2,3,4);
console.log(result);

let add = AddNumbers; //Delegate
result = add(4,5);
console.log(result);

//console.log(anonymeFunktion(500,34)); nicht initialisiert, kein hoisting

//anonymous function expression
let anonymeFunktion = function (first, second){
    return first * second;
}

console.log(anonymeFunktion(5,8));

//Named function expression
let factorial = function computeFactorial(number){
    if(number <= 1){
        return 1;
    }
    return number* computeFactorial(number -1) // !5 = 5* 4* 3* 2 *1 = 120
}

console.log("!5 = " + factorial(5));
//console.log(computeFactorial(4)); //Fehler: not defined