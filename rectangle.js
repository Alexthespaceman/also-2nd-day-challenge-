// Create a function makeRectangle that will print an m by n rectangle of * to the screen

// For example, makeRectangle(3,5) should print a 3 by 5 rectangle of *, as shown below:

//  * * *
//  * * *
//  * * *
//  * * *
//  * * *

// You don't need to use loops for this one! :)

function makeRectangle(m, n) {
    let rows = m;
let columns = n;

const myArray = [];

for(let i = 0; i < rows; i++){
  myArray[i] = [];
   for(let j = 0; j < columns; j++){
     myArray[i][j] = '*';
   }
}
return myArray;

}
console.log(makeRectangle(5,3));

function makeRectangle(width, length) {
    return ("*".repeat(width) + "\n").repeat(length);
}