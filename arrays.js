// TASK 1 ---------------------------

// 1. Write a JS code to print Even numbers in given array

const arr = [13,23,12,45,22,48,66,100,101,104];


for(i = 0; i < arr.length; i ++)
{
  if(arr[i] % 2 == 0)
  {
    console.log(arr[i]);
  }
}

//TASK 2 --------------------------------

// 2. Write a JS code to delete all occurrence of element in given array

const arr = [23,56,4,78,5,63,45,210,56];
const num = 56;


for(i = 0; i < arr.length; i ++){
  if (arr[i] == num){
    arr.splice(i,1);
}
}
console.log(arr);

//TASK 3 -------------------------------

// 3. Write a JS code to find the largest number in an array

const arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
let num = 0;

for(i = 0; i < arr.length; i ++){
   if(arr[i] > num){
    num = arr[i];
   }

}

console.log(num);

//TASK 4 ---------------------------------

// 4. Write a JS code to find duplicate values in a given array

const arr = [4, 2, 34, 4, 1, 12, 1, 4];

for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr.length; j++) {
    if (i != j) {
      if (arr[i] == arr[j]) {
        console.log(arr[i]);
      }
    }
  }
}
