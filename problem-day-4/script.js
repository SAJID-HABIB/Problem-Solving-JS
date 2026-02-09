// let r1 = 5;

// const { i } = require("framer-motion/client");

// const { line, li } = require("framer-motion/client");

// for (let i = 1; i <= r; i++) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// let r2 = 5;
// for (let i = r; i >= 1; i--) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// let r = 5;
// for (let i = 1; i <= 2 * r - 1; i += 2) {
//   let stars = "";
//   let currr = (i + 1) / 2;
//   for (let j = 1; j <= r + currr - 1; j++) {
//     if (j <= r - currr) {
//       stars += " ";
//     } else {
//       stars += "*";
//     }
//   }
//   console.log(stars);
// }

// let r1 = 5;
// for (let i = 2 * r1 - 1; i >= 1; i -= 2) {
//   let stars = "";
//   let currr = (i + 1) / 2;
//   for (let j = 1; j <= r1 + currr - 1; j++) {
//     if (j <= r1 - currr) {
//       stars += " ";
//     } else {
//       stars += "*";
//     }

// let r1 = 5;
// for (let i = 2 * r1 - 1; i >= 1; i -= 2) {
//   let stars = "";
//   let currr = (i + 1) / 2;
//   for (let j = 1; j <= r1 + currr - 1; j++) {
//     if (j <= r1 - currr) {
//       stars += " ";
//     } else {
//       stars += "*";
//     }
//   }
//   console.log(stars);
// }

//   }
//   console.log(stars);
// }

// let r = 5;
// for (let i = 1; i <= r; i++) {
//   // let stars = "";
//   for (let j = 0; j <= r; j++) {
//    if (r === 1 || r === 5 || j === 1 || j === r) {
//     console.log("*");
//    } else {
//     console.log("\n");

//    }

//   }
// }

// let r = 5;
// for (let i = 1; i <= r; i++) {
//   let line = "";
//   for (let j = 1; j <= r; j++) {
//     if (i === 1 || i === r) {
//       line += "*";
//     } else if (j === 1 || j === r) {
//       line += "*";
//     } else{
//       line += " ";
//     }

//   }
//   console.log(line);

// }

// let r = 5;
// for (let i = 1; i <= r; r - i) {
//   line = "";
//   for (let j = 0; j <= r; 2 * (i - 1) - 1) {
//     line += " ";
//     if (j === r) {
//       line = "*";
//     }
//   }
//   console.log(line);
// }

// let r1 = 5;
// for (let i = 1; i <= 2 * r - 1; i += 2) {
//   let stars = "";
//   let currr = (i + 1) / 2;
//   for (let j = 1; j <= r + currr - 1; j++) {
//     if (
//       j <= r - currr ||
//       (j > r - currr + 1 && j < r + currr - 1 && i !== 2 * r - 1)
//     ) {
//       stars += " ";
//     } else {
//       stars += "*";
//     }
//   }
//   console.log(stars);
// }

// let row = 5;

// for (let i = r; i >= 1; i--) {
//   let stars = "";
//   for (let j = 1; j <= r + i - 1; j++) {
//     if (i === r) {
//       stars += "*";
//     } else if (j <= r - i) {
//       stars += " ";
//     } else if (j === r - i + 1) {
//       stars += "*";
//     } else if (j === r + i - 1) {
//       stars += "*";
//     } else {
//       stars += " ";
//     }
//   }

//   console.log(stars);
// }

// let r = 5;

// for (let i = 1; i <= r; i++) {
//   let digit = "";
//   for (let j = 1; j <= i; j++) {
//     digit += (i + j + 2) % 2;
//   }
//   console.log(digit);
// }

// let row1 = 5;
// for (let i = 2 * row1 - 1; i >= 1; i -= 2) {
//   let stars = "";
//   let currRow = (i + 1) / 2;
//   for (let j = 1; j <= row1 + currRow - 1; j++) {
//     if (j <= row1 - currRow) {
//       stars += " ";
//     } else {
//       stars += "*";
//     }
//   }
//   console.log(stars);
// }

// let row2 = 5;
// for (let i = 3; i <= 2 * row2 - 1; i += 2) {
//   let stars = "";
//   let currRow = (i + 1) / 2;
//   for (let j = 1; j <= row2 + currRow - 1; j++) {
//     if (j <= row2 - currRow) {
//       stars += " ";
//     } else {
//       stars += "*";
//     }
//   }
//   console.log(stars);
// }

// let row = 3;

// for (let i = 1; i <= 2 * row - 1; i += 2) {
//   let stars = "";
//   let currRow = (i + 1) / 2;
//   for (let j = 1; j <= row + currRow - 1; j++) {
//     if (j <= row - currRow) {
//       stars += " ";
//     } else {
//       stars += "*";
//     }
//   }

//   console.log(stars);
// }

// for (let i = 3; i >= 1; i -= 2) {
//   let stars = "";
//   let currRow = (i + 1) / 2;
//   for (let j = 1; j <= row + currRow - 1; j++) {
//     if (j <= row - currRow) {
//       stars += " ";
//     } else {
//       stars += "*";
//     }
//   }
//   console.log(stars);
// }

// let n = 3;
// let TotalRow = 2 * n - 1;
// for (let i = 1; i <= n; i++) {
//   let stars = "";
//   for (let j = 1; j <= n - i; j++) {
//     stars += " ";
//   }
//   stars += "*";
//   if (i > 1) {
//     for (let j = 1; j <= 2 * (i - 1) - 1; j++) {
//       stars += " ";
//     }
//     stars += "*";
//   }
//   console.log(stars);
// }

// for (let i = n - 1; i >= 1; i--) {
//   let stars = "";
//   for (let j = 1; j <= n - i; j++) {
//     stars += " ";
//   }
//   stars += "*";
//   if (i > 1) {
//     for (let j = 1; j <= 2 * (i - 1) - 1; j++) {
//       stars += " ";
//     }
//     stars += "*";
//   }
//   console.log(stars);
// }

// let row = 5;
// for (let i = 1; i <= row; i++) {
//   let stars = "";
//   for (let j = 1; j <= row - i; j++) {
//     stars += " ";
//   }
//   for (let j = 1; j <= row; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }


// let input = 4;
// // let number = 6;
// for (let i = 1; i <= input ; i++) {
//   let table = 0;
//   for (let j = 1; j <= i; j++) {
//     table = i * j;
//   }
//   console.log(table);  
// }

let n = 3;
for (let i = 1; i <= 10; i++) {
  let result ;
  result = i * n;
  console.log(result);
}