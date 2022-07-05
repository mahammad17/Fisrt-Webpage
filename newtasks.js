// TASK 1 --------------------------

// 1. Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

let num;

while (true) {
    num = prompt("Enter the number", "");
    if (num > 100) {
        break;
    }
}
console.log(num);


//TASK 2 --------------------------------

// 2. promptdan iki eded daxil edirem, birinci eded ikinci ise quvveti, meselen 2 sonra 3 daxil etdimse cavabda 8 cixarmalidi.


let number = prompt("Number","");
let square = prompt("Square","");

let squaredNumber = Math.pow(number,square);

console.log(squaredNumber);




//TASK 3 --------------------------------

// 3. promptdan eded daxil edirem ve consolda bu sekilde cixarmalidir. meselen 8 daxil etdimse


let n = prompt("Enter the number", ""); 
let sp = "";


for (let q = 1; q <= n; q++) {
  for (let w = 1; w <= q; w++) {
    sp += w;
  }
  sp += "\n";
}
console.log(sp);


//TASK 4 --------------------------------

// 4. reqem daxil edirem ve nece reqemli oldugunu tapir. meselen 1234 reqemi daxil etsem proqram 4 cixarmalidir. (Math.floor nedi arasdirarsiz.)

// let entrnum = 345;


//TASK 5 ---------------------------------

//5. eded daxil edirem ve reqemlerinin cemini cixarir. meselen 1234 daxil etsem mene cavab olaraq 10 cixarmalidir.

let val = prompt("Enter the number", "")
let sum = 0;

while(val){
  sum += val % 10;
  val = Math.floor(val / 10);
}

console.log("Summ: " + sum);



  //TASK 6 -------------------------------

//   6. Write a JavaScript program which itegrates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".


for(i = 1; i <= 100; i++){
    if(i % 15 == 0){
    console.log("FizzBuzz");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
     }
     else if(i % 3 == 0)
     {
         console.log("Fizz");
     }else{
         console.log(i);
     }
}

//TASK 7 -----------------

// 7. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.


let sumall = 0;
let m = prompt("Enter the number","")

for(a = 1; a < m; a++){
  if(a % 3 == 0 || a % 5 == 0){
  sumall += a;
}
}

console.log("ALLSUM: " + sumall);
