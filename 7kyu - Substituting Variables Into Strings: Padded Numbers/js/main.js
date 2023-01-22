// Substituting Variables Into Strings: Padded Numbers

// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

function solution(value){
  const padding = ['0','0','0','0','0']
  const len = value.toString().split('').length
  return `Value is ${padding.slice(len).join('') + value}`  
}

//  should have used padstart
// function solution(value){
//   return `Value is ${value.toString().padStart(5,'0')}`
// }