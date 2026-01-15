Q1.solution :
let n = parseint("enter a number :");

for (let n = 0; n < n; n++) {
    console.log(n);  
}

Q2. solution :


let n = prompt("Enetr the number to print it :");
 while (n > 0) {
     console.log(n);
    n--;
}

Q3. 

let number = Number(prompt("Enter number to check it :"));

for (let i = 0; i < number; i++) {
  if (i % 2 == 0) {
    console.log("the number is even :", i);
  } else {
    console.log("number is odd :", i);
  }
}

Q4.


let n = Number(prompt("Enter the natural to sum it :"));
let sum = 0;
  if (n >= 0) {
    for (let i = 1; i <= n; i++) {
    sum +=  i;
    console.log("the sum of the natural number is :",sum);
    
  }
  
} else {
  console.log("please Enter positive number :",sum);
  
}

by using formula 


let n = Number(prompt("Enter the natural to sum it :"));

let sum = n * (n + 1) / 2;

console.log("sum of the number is :",sum);


Q5.

let n = 10;
let factorial = 1;
for (let i =  0; i <= n; i++) {
  factorial = factorial * i;
}

console.log("the factorial of the number is :",factorial);


Q6. 




let input = document.querySelector("#input");
let button = document.querySelector("#btn");
let factorial = 1;
button.addEventListener("click",() =>{
  let n = Number(input.value);
  for (let i = 1; i <= n; i++) {
     factorial = factorial * i;    
  }
console.log("factorial is :",factorial);

});

Q7.


let n = 10;
let sum = 0;
for (let i = 1; i < n; i++) {
  
if (i % 2 === 0 ) {
  sum = sum + i;
  console.log("sum of the even muber is :",sum);  
}
  console.log("sum of the even muber is :",sum);


}

Q8.

let n = Number(prompt("Enetr to sum of all even number :"));
let squre = 1;



for (let i = 1; i <= n; i++) {
    squre = i ** 2;
    console.log("sqyre of the number is :",squre);
}

console.log("sqyre of the number is :",squre);


Q9.

let n = Number(prompt("Enetr the number to check  the divisible by 3 and 5 :"));


for (let i = 1; i < n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i,"divisiible by 3 and 5");  
    }    
}

Q10.



let n = Number(prompt("Enetr number to sum of the odd number :"));
let sum = 0;
for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) {
        sum = sum + i;
    }    
}

    console.log("sum of the odd number is :",sum);


Q11.


let n = Number(prompt("Enetr number to sum of the odd number :"));
let cube = 1;
let sum = 0;

for (let i = 1; i <= n; i++) {
    cube = i * i * i;
    sum = sum +cube;
console.log("the cube is :",cube);
console.log("sum of the cube is :",sum);

}

console.log("the cube is :",cube);
console.log("sum of the cube is :",sum);

