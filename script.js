// Program 1: Sort an array
let arr = [5, 2, 9, 1, 3];
arr.sort((a, b) => a - b); // Ascending order

console.log("Sorted Array:", arr); // Output: [1, 2, 3, 5, 9]
// Program 2: Concatenate two arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let newArray = array1.concat(array2);

console.log("Concatenated Array:", newArray); // Output: [1, 2, 3, 4, 5, 6]
// Program 3: Remove first element of an array
let fruits = ["Apple", "Banana", "Mango"];

fruits.shift(); // Removes the first element

console.log("After Removing First Element:", fruits); // Output: ["Banana", "Mango"]
