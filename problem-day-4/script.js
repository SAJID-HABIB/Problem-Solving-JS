let row1 = 5;

for (let i = 1; i <= row; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

let row2 = 5;
for (let i = row; i >= 1; i--) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

let row = 5;
for (let i = 1; i <= 2 * row - 1; i+= 2) {
    let stars = "";
    const currRow = (i + 1) / 2;
    for (let j = 1; j <= row + currRow - 1; j++) {
        if (j <= row - currRow) {
            stars += " ";
        } else{
            stars += "*"; 
        }
    }
    console.log(stars);
    
}