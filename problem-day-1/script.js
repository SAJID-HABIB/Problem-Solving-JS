// let n = prompt("enter a number :");

// const { useMemo } = require("react");

// for (let i = n; i > 0; i--) {
//     console.log(i);
// }

// let n = 5;

// for (let i = 0; i < n; i++) {
//     let n = i;
//     console.log(n);

// }

// for (let i = 1; i < n; i++) {
//     console.log(i);

// }

// let n = Number(prompt("enter a number to print :"));
// let i = 1;
// while (i <= n) {
//     console.log(i);
//     i++;
// // }

// let p = 0;
// do {
//     console.log(p);
//     p++;
// } while (p <= n);

// let n = prompt("Enetr the number to print it :");
// while (n > 0) {
//     console.log(n);
//     n--;
// }

// let m = prompt("enter a number to print it :");

// do {
//     console.log(m);
//     m--;
// } while (m > 0);

// let button = document.querySelector("#btn");
// let input = document.querySelector("#input");

// button.addEventListener("click",() =>{
//     let n = Number(input.value);
//     for (let i = 0; i < n; i++) {
//      console.log(i);
//     }
// });

// let number = Number(prompt("Enter number to check it :"));

// for (let i = 0; i < number; i++) {
//   if (i % 2 == 0) {
//     console.log("the number is even :", i);
//   } else {
//     console.log("number is odd :", i);
//   }
// }


// let n = Number(prompt("Enter the natural to sum it :"));
// n = 1000000000;
// let sum = 0;
//   if (n >= 0) {
//     for (let i = 1; i <= n; i++) {
//     sum +=  i;
//     // console.log("the sum of the natural number is :",sum);
    
//   }
  
// }
//  else {
//   console.log("please Enter positive number :",sum);
  
// }

// console.log("sum :",sum);
// console.timeEnd();


// sum = n(n + 1) / 2;

// console.log("sum of the natural number is :",sum);


// let n = Number(prompt("Enter the natural to sum it :"));

// let sum = n * (n + 1) / 2;

// console.log("sum of the number is :",sum);



// let n = 10;
// let factorial = 1;
// for (let i =  0; i <= n; i++) {
//   factorial = factorial * i;
// }

// console.log("the factorial of the number is :",factorial);

// console.time("factioralTime")

// let n = 1000000000000000;

// factorial = factorial * i;

// console.timeEnd("factioralTime")




// let input = document.querySelector("#input");
// let button = document.querySelector("#btn");
// let factorial = 1;
// button.addEventListener("click",() =>{
//   let n = Number(input.value);
//   for (let i = 1; i <= n; i++) {
//      factorial = factorial * i;    
//   }
// console.log("factorial is :",factorial);

// });



// let squre = 1;
// for (let i = 0; i <= n; i++) {
  
// if (i % 2 === 0 ) {
//   sum = n * (n + 1);
// //   console.log("sum of the even muber is :",sum);  
// }
// //   console.log("sum of the even muber is :",sum);


// }

//   console.log("sum of the even muber is :",sum);


// for (let i = 1; i <= n; i++) {
//     squre = i ** 2;
//     console.log("sqyre of the number is :",squre);
// }

// console.log("sqyre of the number is :",squre);

// let n = Number(prompt("Enetr to sum of all even number :"));

// if (i % 3 === 0) {
//         for (let i = 0; i < n; i++) {
//         console.log("the number is devisible by 3:",i);
// } 
//     } else 
//     {
//     console.log("the numer is not divisible by 3",n);
// }

// let n = Number(prompt("Enetr the number to check  the divisible by 3 and 5 :"));


// for (let i = 1; i < n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i,"divisiible by 3 and 5");  
//     }    
// }


// let sum = 0;
// for (let i = 0; i <= n; i++) {
//     if (i % 2 === 1) {
//         sum = sum + i;
//     }
//     // console.log("sum of the odd number is :",sum);
    
// }

//     console.log("sum of the odd number is :",sum);


// let cube = 1;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     cube = i * i * i;
//     sum = sum +cube;
// console.log("the cube is :",cube);
// console.log("sum of the cube is :",sum);

// }

// console.log("the cube is :",cube);
// console.log("sum of the cube is :",sum);


let n = Number(prompt("Enetr number to sum of the odd number :"));
let squre = 1;

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 ) {
        squre = Math.sqrt(i);
        if (Number.isInteger(squre)) {
        console.log("the number even and perfect squre :",i);         
        }
    } 
}


