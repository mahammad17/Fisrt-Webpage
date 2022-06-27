// let first = 35;
// let second = 30;
// let third = 25;

// let total = first + second + (third*2);

// let average = total/4;

// let finalprice = total - 5;

// console.log("Total Price: " + total);
// console.log("Average Price: " + average);
// console.log("Final Price: " + finalprice);


//TASK 1 -------------------------

//1. variable-a eded daxil edirem, console-da mene ededin tek ve ya cut oldugunu qaytarmalidi. meselen 1 daxil etdimse consola tek cixarsin.


let n = 6;

if (n%2==0){
    console.log("EVEN")
}
else{
    console.log("ODD")
}

//TASK 2 ------------------------

//2. 2 variable teyin edirem. bu ededlerden boyuk olani consola cixarmalidi, eger beraberdise desin beraberdi


let b = 55;
let a = 77;

if(b>a){
    console.log(b)
}else if(b==a){
    console.log("Equal")
}else{
    console.log(a)
}

//TASK 3 --------------------------

//3.  3 variable teyin edirem, en boyuk ededi consola cixarsin


let x = 22;
let y = 35;
let z = 15;

if(x>y && x>z){
    console.log(x)
}else if(y>x && y>z){
    console.log(y)
}else {
    console.log(z)
}

//TASK 4 ----------------------------

//4. 3 eded daxil edirem -> num, start ve end. consolda mene num-in start ve endin ortasinda yerlesdiyini ve ya yerlesmediyini cixarsin.


let start = 19;
let num = 16;
let end = 11;

if (num>start && num<end){
    console.log(true)
}else if (num>end && num<start){
    console.log(true)
}else{
    console.log(false)
}

//TASK 5 ---------------------------

// 5. bir year adinda variable teyin edirem (mes: 2012 qebul edir).
// bu sertler altinda consola cixaracaqsiz.

// If year is divisble by 4 and not divisble by 100 then print “leap year”.
// Or if year is divisible by 400 then print “leap year”.
// Else print “not a leap year”.


let year = 2000;

if(year%4==0 && year%100!=0){
    console.log("Leap Year")
}else if(year%400==0){
    console.log("Leap Year")
}else{
    console.log("Nota a Leap Year")
}
