// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.

// More examples in the test cases.

// Good luck!


function solve(s){
  const upperRegex = (s.match(/[A-Z]/g) || [] ).length
  const lowerRegex = (s.match(/[a-z]/g) || [] ).length
  const numberRegex = (s.match(/[0-9]/g) || [] ).length
  const specialRegex = (s.match(/[^a-zA-Z0-9]/g) || [] ).length
  
  return [upperRegex, lowerRegex, numberRegex, specialRegex]
  
}