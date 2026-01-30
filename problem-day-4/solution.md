Q1.


let row = 5;

for (let i = 1; i <= row; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
        
    }
    console.log(stars);
    
    
}


Q2.


   let row2 = 5;
   for (let i = row; i >= 1; i--) {
     let stars = "";
     for (let j = 1; j <= i; j++) {
       stars += "*";
     }
     console.log(stars);
   }


Q3.

et row = 5;
for (let i = 1; i <= 2 * row - 1; i += 2) {
  let stars = "";
  let currRow = (i + 1) / 2;
  for (let j = 1; j <= row + currRow - 1; j++) {
    if (j <= row - currRow) {
      stars += " ";
    } else {
      stars += "*";
    }
  }
  console.log(stars);
   }


Q5.


let row1 = 5;
for (let i = 2 * row1 - 1; i >= 1; i -= 2) {
  let stars = "";
  let currRow = (i + 1) / 2;
  for (let j = 1; j <= row1 + currRow - 1; j++) {
    if (j <= row1 - currRow) {
      stars += " ";
    } else {
      stars += "*";
    }
  }
  console.log(stars);
}


Q6.