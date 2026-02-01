// let r1 = 5;

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

let row = 5;

for (let i = r; i >= 1; i--) {
  let stars = "";
  for (let j = 1; j <= r + i - 1; j++) {
    if (i === r) {
      stars += "*";
    } else if (j <= r - i) {
      stars += " ";
    } else if (j === r - i + 1) {
      stars += "*";
    } else if (j === r + i - 1) {
      stars += "*";
    } else {
      stars += " ";
    }
  }

  console.log(stars);
}

let r = 5;

for (let i = 1; i <= r; i++) {
  let digit = "";
  for (let j = 1; j <= i; j++) {
    digit += (i + j + 2) % 2;
  }
  console.log(digit);
}
