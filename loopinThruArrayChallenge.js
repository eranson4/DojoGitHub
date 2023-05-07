// #1 write a for loop that will traverse through an array of numbers
// and print each number     var arr1 = [8, 6, 7, 5, 3, 0, 9];

// function allNums(arr1){
//     for (let i = 0; i < arr.length; i++) {       
//     }
//     console.log(arr1)
//     return arr;
// }
// allNums([8, 6, 7, 5, 3, 0, 9])


//2. Write a for loop that will traverse through an array of numbers,
// and print the sum of the number and the index of the number in the array.


// function sumNumIndex(arr2){

// for(var i = 0; i < arr2.length; i++){
//     console.log(i + arr2[i])
// }
// }
// sumNumIndex([4, 7, 13, 13, 19, 37, -2]);



//Write a for loop that will traverse through an array of numbers, 
// and print only the numbers greater than 5.

// var arr3 = [6, 2, 12, 14, -24, 5, 0];
// for(var i = 0; i arr3.length 7; i++){
//     if(arr3[i] > 5){
//         console.log(arr3[i]);
//     }
// }

//Ninja Bonus: Modify your solution for #3 so that any numbers in the 
// array that are not greater than 5 are instead replaced with a string of
// "No dice." This string should not be printed.

// var arr3 = [6, "No dice", 12, 14, "No dice", "No dice", "No dice"];
// for(var i = 0; i <= arr3.length; i++){
//     if(arr3[i] > 5){
//         console.log(arr3[i]);
//     }
// }

// Aarons Bonus Challenge : same problem, but I want the function
// to return the result, not print to console, the new values in an array

// function sumNumIndex(arr){
//     // declaring an empty array to push the results into
//     var result = [];
//     // For loop to go through the array based on the array length
//     for (var i = 0; i < arr.length; i++){
//         // Console log the sum of the number in the array and the index of the number in the array.
//         // console.log(arr[i] + i); // commenting this out because it only verifies what we're pushing into the array
//         result.push(arr[i] + i);
//     }
//     return result;
// }

// var testArray1 = [12, 5, 77, -3, -52, 0];
// var testArray2 = [5, 4, 3, 2, 1];

// console.log(sumNumIndex(testArray1)) // result should be [12, 6, 79, 0, -48, 5]
// console.log(sumNumIndex(testArray2)) // result should be [5, 5, 5, 5, 5]