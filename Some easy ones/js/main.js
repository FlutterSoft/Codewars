/* Get the Middle Character
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
*/

// function getMiddle(s)
// {
//     let midPoint = Math.floor(s.length / 2)
//         if (s.length % 2 === 0){
//         return (s[midPoint-1] + s[midPoint])
//         }
//         else {
//             return (s[midPoint])
//         }
// }

// console.log(getMiddle('testing'))



/* List Filtering
n this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
// */

// function filter_list(l) {
//     return ( l.filter( (i) => typeof i !== 'string' && i >= 0 ))
// }


// //   filter_list([1,'a','b',0,15])
//      console.log(filter_list([1,2,'aasf','1','123',123]))


/* Disemvowel Trolls
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/


// function disemvowel(str) {

//     return (str.replace(/[aeiouAEIOU]/g, ''))
//     // str = str.replaceAll('a', '').replaceAll('e', '').replaceAll('i','').replaceAll('o', '').replaceAll('u','')
//     // str = str.replaceAll('A', '').replaceAll('E', '').replaceAll('I','').replaceAll('O', '').replaceAll('U','')
//     // return str
//   }
  

//   console.log(disemvowel("This website is for losers LOL!"))




// function findShort(s){
//   const arr = s.split(' ')
//   const shortest = arr.reduce( (a, b) => {
//     return (a.length <= b.length ? a : b)
//   })
//   return shortest.length
// }

// console.log(findShort("hey how are you going today mr man?"))


// beginner series #3 sum of numbers
/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/


// function getSum( a,b ){
//   let temp = a
//   if (b < a){
//     a = b
//     b = temp
//   }
//   {
//     let sum = 0
//     for (let i = a; i <= b; i++){
//       sum += i
//     }
//     return sum
//   }
// }


/* Credit Card Mask
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
*/
/*
// return masked string
function maskify(cc) {
  if (cc.length <= 4){
    return cc
  }
  else {
    const arr = cc.split('')
    const lastFour = arr.slice(-4)
    for (let i = 0; i < arr.length; i++){
      arr[i] = '#'
    }
    arr.splice(-4, 4, lastFour.join(''))
    return arr.join('')
  }
}

console.log(maskify("123456"))

=======
/*
iven a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
*/
/*
function stringTransformer(str) {
  // Your code here
  let string = str.split('')
  for (let i = 0; i < string.length; i++){
    if (string[i] === string[i].toLowerCase()){
    string[i] = string[i].toUpperCase()
    }
    else if (string[i] === string[i].toUpperCase()){
      string[i] = string[i].toLowerCase()
    }
  }
  string = string.join('')
  let arr = string.split(' ').reverse()
  return arr.join(' ')
}
console.log(stringTransformer('Example string'))
*/

/*
FRIEND OR FOE
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
*/
// function friend(friends){
//   //your code here
//   let friendArr = friends.filter( (friend) => friend.length == 4)
//   return friendArr
// }

// console.log(friend(["Ryan", "Kieran", "Mark"]))

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// function squareSum(numbers){
//   if (numbers.length === 0){
//     return 0
//   }
//   else {
//     return (numbers.reduce( (acc, cur) => {
//       return acc + cur*cur

//   },0))
//   } 
// }
// // function squareSum(numbers){
// //   let sum = 0
// //   for(let i = 0; i < numbers.length; i++){
// //     sum += (numbers[i] * numbers[i])
// //   }
// //   return sum
// // }
// console.log(squareSum([-19,3,-18,0,2,17,-20,-12]))

// function countSheeps(arrayOfSheep) {
//   let count = arrayOfSheep.filter( sheep => sheep === true)
//   return count.length
// }

// console.log(countSheeps([true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]))



/*

Money, Money, Money



Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest

Example:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
*/

/*
function calculateYears(principal, interest, tax, desired) {
  let balance = principal
  let years = 0
  let yearlyInterest = 0 
  let yearlyTax = 0 
  if (principal === desired){
    return 0
  }
  while (balance < desired){
    yearlyInterest = interest*balance
    yearlyTax = yearlyInterest * tax
    balance += (yearlyInterest - yearlyTax)
    years++
    console.log(`Current balance after ${years} years is ${balance}`)
  }
  
  return years
}

console.log(calculateYears(1000,0.05,0.18,1100))
*/

/*
Count the divisors of a number

Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)

4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/

// function getDivisorsCnt(n){
//   let count = 0
//   for (let i = 1; i <= n; i++){
//     if (n % i === 0) {
//       count++
//     }
//   }
//   return count
// }

// console.log(getDivisorsCnt(30))

// function breakChocolate(n,m) {
//   if (n === 1 && m === 1){
//     return 0
//   }
//   else if (n === 0 || m === 0 ){
//     return 0
//   }
//   else {
//     return (n*m - 1)
//   }
// }

function breakChocolate(n,m) {

  return (n <= 0 || m <= 0) ? 0 : (n*m - 1)
}

console.log(breakChocolate(5,5))


function breakChocolate(n,m) {
  if (n <= 0 || m <= 0){
    return 0
  }
  else {
    return (n*m - 1)
  }
}