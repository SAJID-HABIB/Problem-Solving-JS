// let row1 = 5;

// const { line, li } = require("framer-motion/client");

// for (let i = 1; i <= row; i++) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// let row2 = 5;
// for (let i = row; i >= 1; i--) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }


// let row = 5;
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

//   }
//   console.log(stars);
// }


// let row = 5;
// for (let i = 1; i <= row; i++) {
//   // let stars = "";
//   for (let j = 0; j <= row; j++) {
//    if (row === 1 || row === 5 || j === 1 || j === row) {
//     console.log("*");
//    } else {
//     console.log("\n");
    
//    }
    
//   }
// }

// let row = 5;
// for (let i = 1; i <= row; i++) {
//   let line = "";
//   for (let j = 1; j <= row; j++) {
//     if (i === 1 || i === row) {
//       line += "*";
//     } else if (j === 1 || j === row) {
//       line += "*";
//     } else{
//       line += " ";
//     }
    
//   }
//   console.log(line);
  
// }


// let row = 5;
// for (let i = 1; i <= row ; row-i) {
//   line = "";
//   for (let j = 0; j <= row; 2 * (i - 1)- 1) {
//     line += " ";
//     if (j === row) {
//       line = "*";
//     }
//   }
//   console.log(line);
  
// }



let row = 5;
for (let i = 1; i <= 2 * row - 1; i += 2) {
  let stars = "";
  let currRow = (i + 1) / 2;
  for (let j = 1; j <= row + currRow - 1; j++) {
    if (j <= row - currRow || j > row -currRow + 1 && j < row + currRow - 1 && i !== 2 * row -1) {
      stars += " ";
    } else {
      stars += "*";
    }
  }
  console.log(stars);
}