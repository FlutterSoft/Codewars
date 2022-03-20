/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/
// sort arr
// 

//339
// function findOdd(A) {
//     let sorted = A.sort( (a,b) => (a-b))
//     let obj = {}
//     for(let i = 0; i < sorted.length; i++){
//         obj[sorted[i]] = {
//             count: 0,
//         }
//     }
//     for(let i = 0; i < sorted.length; i++){
//             obj[sorted[i]].count += 1
//     }

//     for(let i = 0; i < sorted.length; i++){
//         if (obj[sorted[i]].count % 2 != 0){
//             return sorted[i]
//         }
//     }
// }


// console.log(findOdd([5,5,8,8,8]))


/*
Create Phone Number
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/


// function createPhoneNumber(numbers){
//   return (`(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`)
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
/*
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}
much smarter */