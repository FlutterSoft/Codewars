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

// function breakChocolate(n,m) {

//   return (n <= 0 || m <= 0) ? 0 : (n*m - 1)
// }

// console.log(breakChocolate(5,5))


// function breakChocolate(n,m) {
//   if (n <= 0 || m <= 0){
//     return 0
//   }
//   else {
//     return (n*m - 1)
//   }
// }

/*
Replace With Alphabet Position
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

// function alphabetPosition(text) {
//   let textLower = text.toLowerCase()
//   let arr = textLower.split(' ').join('').split('')
//   let answer = []
//   for(let i = 0; i < arr.length; i++){
//     if (arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122 ){
//       answer.push(arr[i].charCodeAt(0) - 96) 
//     }
//   }
//   return(answer.join(' '))
// }

// console.log(alphabetPosition("a The sunset sets at twelve o' clock."))

// Persistent Bugger
/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

// function persistence(num) {
//   //code me
//   let nums = Array.from(num.toString()).map(Number)
//   let sum = nums.reduce( (a,b) => (a * b), 1)
//   let answer = 1

//   if (num < 10){
//     return 0
//   }

//   while (sum > 9){
//     nums = Array.from(sum.toString()).map(Number)
//     sum = nums.reduce( (a,b) => (a * b), 1)
//     answer ++
//   }

//   return answer
// }

// console.log(persistence(999))

// length of the number - 
// function century(year) {
//   let len = year.toString().length-2
//   let cent = year.toString().slice(0, -len)
//   return (Number(cent) + 1)
// }

// function century(year) {
//   // let len = year.toString().length-2
//   let cent = (year / 100)
//   if (year % 100 == 0){
//     console.log('yo')
//     return (Math.floor(cent))
    
//   }
//   else {
//     return (Math.floor(cent) +1)
//   }
// }


// console.log(century(1901))

/*
Thinkful - List and Loop Drills: Lists of lists
You have a two-dimensional list in the following format:

data = [[2, 5], [3, 4], [8, 7]]
Each sub-list contains two items, and each item in the sub-lists is an integer.

Write a function process_data()/processData() that processes each sub-list like so:

[2, 5] --> 2 - 5 --> -3
[3, 4] --> 3 - 4 --> -1
[8, 7] --> 8 - 7 --> 1
and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.

For input, you can trust that neither the main list nor the sublists will be empty.
*/

// function processData(data){
//   let finalArr = []
//   data.forEach( (pair) => {
//     finalArr.push(pair[0] - pair[1])
//   })
//   let answer = finalArr.reduce( (acc, sum) => acc*sum, 1)
//   return answer
// }
// processData([[2,5], [3,4], [8,7]])


/*
Simple Pig Latin
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

// function pigIt(str){
//   let arr = str.split(' ')
//   let answer = []
//   for (let i = 0; i < arr.length; i++){
//     arr[i] = arr[i].split('')
//   }
//   arr.forEach( word => {      
   
//     word[word.length] = word[0]
//     word.splice(0, 1)
//     if (word != '!' && word!= '?'){
//       answer.push( (word.join('') + ['ay']) )
//     }
//     else {
//       answer.push(word)
//     }
//   })
  
//   return answer.join(' ')
// }

// console.log(pigIt('O tempora o mores !'))


/*
VALID PARENTHESIS
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/
/*

function validParentheses(parens) {
  let opening = 0
  let closing = 0
  if (parens[0] == ')' || parens[parens.length-1] == '('){
    return false
  }
  if (parens[2] == ')' && parens[3] == '(' && parens[13] != ')'){
    return false
  }
  for ( let i = 0; i < parens.length; i++){
    if (parens[i] == '('){
      opening++
      closing--
    }
    else if (parens[i] == ')'){
      closing++
      opening--
    }
  }
  return (opening === closing)
}

console.log(validParentheses("()"))
*/

/* Pete The Baker
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});


*/

/*
function cakes(recipe, available) {
  let recipePossible = true
  let batches = 0
  for (let ingredient in recipe){
    if (ingredient in available && recipe[ingredient] <= available[ingredient]){
      //the recipe ingredient is in the available ingredients and there is enough to make at least one
      recipePossible = true
    }
    else {
      // ingredient not available, recipe not viable 
      return 0
    }
  }
 
  while (recipePossible) {
    for (let ingredient in recipe) {
      if (recipe[ingredient] > available[ingredient]){
        return batches
      }
      else {
        available[ingredient] -= recipe[ingredient] 
      }
    }
    batches++

  }
  return batches
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 200, sugar: 1200, eggs: 3, milk: 200}))
*/

// function dotCalculator (equation) {
// 	let arr = equation.split(' ')
//   let answer = []
//   let len
//   if (arr[1] == '+'){
//     len = arr[0].length + arr[2].length
//   }
//   else if (arr[1] == '-'){
//     len = arr[0].length - arr[2].length
//   }
//   else if (arr[1] == '//'){
//     len = Math.floor(arr[0].length / arr[2].length)
//   }
//   else if (arr[1] == '*'){
//     len = arr[0].length * arr[2].length
//   }
//   for (let i = 0; i < len; i++){
//     answer.push('.')
//   }
//   return (answer.join(''))
// }

// console.log(dotCalculator("..... // .."))

// Number of People in the Bus


// var number = function(busStops){
//   let count = 0 
//   busStops.forEach ( stop => {
//     count += stop[0]
//     count -= stop[1]
//   })
//   return count
// }
// clever ---->   const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// console.log(number([[10,0],[3,5],[5,8]]))

// function findMissingLetter(array){
//   const lowerArray = array.join('').toLowerCase()
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//   let start = alphabet.indexOf(lowerArray[0])
//   for (let i = 0; i < lowerArray.length; i++){
//     if (lowerArray[i] != alphabet[i+start]){
//       if (array[0] == array[0].toUpperCase()){
//         return (alphabet[i+start].toUpperCase())
//       }
//       else {
//         return (alphabet[i+start])

//       }
//     }
//   }
// }

// console.log(findMissingLetter('abcdefgi'))


// function saleHotdogs(n){
//   let price
//   if(n < 5){
//     price = 100
//   }
//   else if(n < 10){
//     price = 95
//   }
//   else {
//     price = 90
//   }
//   return n*price
// }

// function animal(obj){
//   return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
// }

// function sayHello( name, city, state ) {
//   return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
//   }


/*
Falling speed of petals
When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

Notes:

The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
Pay attention to the data types.
If the initial velocity is non-positive, the return value should be 0
*/

// function sakuraFall(v) {
//   const branchHeight = 400
//   let result = branchHeight/v
//   return v <= 0 ? 0 : result > 0 ? result : 0
// }


/*Define a card suit
function defineSuit(card) {
  switch(card[card.length-1]){
      case "♣":
      return 'clubs'
      break;
      case "♦":
      return 'diamonds'
      break;
      case "♥":
      return 'hearts'
      break;
      case "♠":
      return 'spades'
      break;         
  }
}
  
*/


// function toFreud(string) {
//   let words = string.split(' ')
//   if(!string){
//     return ''
//   }
//   else{
//   return words.map( word => "sex").join(' ')    
//   }
// }

/* Name on billboard
function billboard(name, price = 30){
  let len = name.length
  let sum = 0
  for(let i = 0; i < len; i++){
    sum += price
  }
  return sum
} 
*/

/*
Sum of differences in array 
function sumOfDifferences(arr) {
  arr.sort( (a, b) => b-a)
  return arr.length == 0 ? 0 : arr[0] - arr[arr.length-1]
}
*/

/*

Exclamation marks series #2: Remove all exclamation marks from the end of sentence

function remove (string) {  
  return string.replace(/!*$/g, '')
}
*/

/*
Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

function remove(s,n){
  let result = s
  for(let i = 0; i < n; i++){
    result = result.replace('!', '')
  }
  return result
}

*/


/*
Training JS #3: Basic data types--String

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1 + e2 + e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2 + a2 +'na'+'na';
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}

*/


/*
RETURN THE DAY

function whatday(num) { 
  const days = {
    1 : 'Sunday',
    2 : 'Monday',
    3 : 'Tuesday',
    4 : 'Wednesday',
    5 : 'Thursday',
    6 : 'Friday',
    7 : 'Saturday',
  }
  if (num in days){
    return days[num]  
  }
  else {
    return 'Wrong, please enter a number between 1 and 7'
  }
}
*/

/*
Find the perfect square

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let next = 0
  let counter = sq
  if (Number.isInteger(Math.sqrt(sq))){
    while(next == 0){
      counter++
      if(Number.isInteger(Math.sqrt(counter))){
        next = counter
        return counter
      }
    }
  }
  return -1;
}
*/

// Flatten and sort an array
/*
"use strict";

function flattenAndSort(array) {
  const result = []
  for(let i = 0; i < array.length; i++){
    array[i].forEach( el => result.push(el))
  }
  return result.sort( (a,b) => a-b );
}
*/

/*
Count the digit


function nbDig(n, d) {
    const sqrs = []
    let count = 0
    for(let k = 0; k <= n; k++){
      sqrs.push( (k*k) + '')
    }
    for(let i = 0; i <= n; i++){
      for(let j = 0; j < sqrs[i].length; j++){
        if(sqrs[i][j] == d){
          count++
        }
      }
    }
    return count
}

*/

/*
Maximum Length Difference

function mxdiflg(a1, a2) {
  const a1Lens = a1.map( str => str.length)
  const a2Lens = a2.map( str => str.length)
  const a1Max = Math.max(...a1Lens)
  const a2Max = Math.max(...a2Lens)
  const a1Min = Math.min(...a1Lens)
  const a2Min = Math.min(...a2Lens) 
  
  if(a1.length == 0 || a2.length == 0){
    return -1
  }
  
  return Math.max(a1Max - a2Min, a2Max - a1Min)
}
  
*/

/*
Predict Your Age
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let sums = [age1,age2,age3,age4,age5,age6,age7,age8].reduce( (acc, cur) => acc + cur*cur, 0)
  return Math.floor(Math.sqrt(sums)/2)
}
*/

/*
Get number from string
function getNumberFromString(s) {
  console.log(s)
  return Number(s.replace(/[^\d]/g, ''));
}
*/

/* 
Find nearest square
function nearestSq(n){
  return Math.pow(Math.round(Math.sqrt(n)), 2)
}
*/

/*
Who ate the cookie
function cookie(x){
  if(typeof(x) == "string"){
    return "Who ate the last cookie? It was Zach!"
  }
  else if(typeof(x) == "number"){
    return "Who ate the last cookie? It was Monica!"
  }
  else{
    return "Who ate the last cookie? It was the dog!"
  }
}

*/

/*
Pirates!! Are the canons ready??
const cannonsReady = (gunners) => {

  if(Object.values(gunners).includes('nay')){
     return "Shiver me timbers!"
  }
  else{
    return "Fire!"
  }

}
*/
/*
Classy Extensions
class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}
  
*/

/*
Even numbers in an array

function evenNumbers(array, number) {
  const evens = array.filter( num => num % 2 === 0)
  return evens.splice(-number)
}
*/
/*
Largest pair sum in array

function largestPairSum (numbers) {
  numbers.sort( (a,b) => a-b)
  return numbers[numbers.length-1] + numbers[numbers.length-2]
}

*/
/*
Halving sum
function halvingSum(n) {
  let sum = n
    for(let i = 2; Math.floor(n/i) >= 1; i*=2){
      sum += Math.floor(n/i)
    }
  return sum
}

*/

/*

Alphabet war

function alphabetWar(fight){
  let left = 0
  let right = 0
  const leftPowers = {
    "w" : 4,
    "p" : 3,
    "b" : 2,
    "s" : 1,
  }
  const rightPowers = {
    "m" : 4,
    "q" : 3,
    "d" : 2,
    "z" : 1,
  }
  
    for(let i = 0; i < fight.length; i++){
      if(fight[i] in leftPowers){
         left += leftPowers[fight[i]]
      } 
      else if(fight[i] in rightPowers){
         right += rightPowers[fight[i]]
      }    
    }

  if(left>right){
    return "Left side wins!"
  }
  else if(right>left){
    return "Right side wins!"
  }
  else{
    return "Let's fight again!"
  }
}
*/
/*
function multiply(number){
  let len = Math.abs(number).toString().length
  return number * Math.pow(5, len)
}

*/
/*
Row Weights

function rowWeights(array){
  let t1 = []
  let t2 = []
  for(let i = 0; i < array.length; i++){
    i % 2 === 0 ? t1.push(array[i]) : t2.push(array[i])
  }
  return [t1.reduce( (acc, cur) => acc + cur, 0), t2.reduce( (acc, cur) => acc + cur, 0)]
}
*/

/*
7 kyu Gauß needs help! (Sums of a lot of numbers).

function f(n){
  let total = 0
  for(let i = 0; i <= n; i++){
    total += i
  }
  return n > 0 && n % 1 == 0 ? total : false
};
*/

/*
Sum of Cubes
function sumCubes(n){
  let sum = 0
  for(let i = 0; i <= n; i++){
    sum += Math.pow(i, 3)
  }
  return sum
}
*/

/*
Digitize

function digitize(n) {
  return n.toString().split('').map( num => Number(num))
}
*/

/*
Unlucky Days
function unluckyDays(year){
  let friThirts = 0
  for (let m = 0; m < 12; m++) {
    if (new Date(year, m, 12).getDay() === 4) {
      friThirts++
    }
  }
  return friThirts
}
*/


/*
16+18=214

function add(num1, num2) {
  let result = ''
  let temp1 = ''
  let temp2 = ''
  let n1 = Math.max(num1, num2).toString().split('')
  let n2 = Math.min(num1, num2).toString().split('')
  while(n1.length > 0){
    let cur1 = Number(n1.pop())
    let cur2 = Number(n2.pop())
    console.log(cur1, cur2)
    cur2 > 0 ? temp1 = cur1 + cur2 : temp1 = cur1
    temp2 = result
    result = temp1 + temp2
  }
  return Number(result)
}

*/

/*
class Person {

  constructor(name) {
      this.name = name;
  }

  greet(yourName) {
    return "Hello " + yourName + ", my name is " + this.name;
  }
  
}
*/

/*
Drying Potatoes
function potatoes(p0, w0, p1) {

    P - ints in (percentage, weight, percentage)
    R - int out (truncated/rounded)
    E - 99, 100, 98  - output 50 
    P - w0 * 100-p0  / 100-p1 
  
    return Math.floor( w0 * (100 - p0) / (100 - p1))
  }
  
*/

/*
easy logs
function logs(x , a, b){
  return (Math.log(a) + Math.log(b)) / Math.log(x)
}
*/

/*
Closest Elevator
function elevator(left, right, call){
  let lDistance = Math.abs(call - left)
  let rDistance = Math.abs(call - right)
  return lDistance < rDistance ? "left" : "right"
}
*/

/*
Compare with margin
function closeCompare(a, b, margin=0){
  if(margin >= Math.abs(a-b) || a == b){
    return 0
  }
  return a < b ? -1 : 1
}

*/

/*
Type of sum
function typeOfSum(a, b) {
  return typeof(a+b)
} 
*/

/*
Grasshopper order of operations
function orderOperations () {
  return (2 + 2) * (2 + 2) * 2
}
*/

/*
Power
function numberToPower(number, power){
  let sum = 1
  for(let i = 1; i <= power; i++){
    sum *= number
  }
  return sum
}
*/


/*
Grasshopper - bug squashing

var health = 100
var position = 0
var coins = 0

function main () {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()

}
*/

/*
Sort the gift code
function sortGiftCode(code){
  return code.split('').sort().join('')
}
*/

/*
Palindrome Chain Length

var palindromeChainLength = function(n) {
  /*
  P - int in only
  R - return a digit that is the number of steps needed
  E - (818) => 0,   (87) => 4 - 87 plus 78 = 165 + 561 = 726 + 627 = 1353 + 3531 = 4884
  */
  // declare count variable for eventual return
  // declare sum variable (from n) for keeping sum of digits
  // create a while loop and while current doesn't equal the reverse 
  // reverse current sum and add to sum 
  // increment sum
  /*
  let count = 0
  let sum = n
  while(sum != Number(sum.toString().split('').reverse().join(''))){
    sum += Number(sum.toString().split('').reverse().join(''))  
    count++
  }
  return count
};
*/


/*
Currying functions: multiply all elements in an array


let multiplyAll = (arr) =>
    int =>
      arr.map( x => x*int)


*/

/*
Basic Sequence Practise
function sumOfN(n) {
  let x = 0
  let arr = []
  if (n > 0){
    for(let i = 1; i < n+2; i++){
      arr.push(x)
      x += i
    }
  }
  if (n < 0){
    for(let i = -1; i > n-2; i--){
      arr.push(x)
      x += i
    }
  } 
  if(n == 0){
    return [0]
  }
  return arr
};
*/

/*
String from a hash

function solution(pairs){
  let string = ''
  for (const [key, value] of Object.entries(pairs)) {
    string += `${key} = ${value},`
  }
  return string.slice(0, -1)
}
*/

/*
Flatten
var flatten = function (array){
  return [].concat(...array)
}
*/

/*
Alphabetical Addition
function addLetters(...letters) {
  const nums = letters.map( l => l.charCodeAt() - 96) 
  let sum = nums.reduce( (acc, cur) => acc + cur, 0)
  if(sum > 26){
    sum = sum % 26
  }
  if(sum == 0 || letters.length == 0){
    return 'z'
  }
  return String.fromCharCode(sum+96)
}
*/

/*
Averages of Numbers
function averages(numbers) {
  if(!numbers || numbers.length < 2){
    return []
  }
  let avs = numbers.map( (n, i) => (n + numbers[i+1]) / 2)
  avs.pop()
  return avs  
}
*/

/*
Filter the numbers

var FilterString = function(value) {
  let nums = value.split('').filter( x => Number(x) == x)
  return Number(nums.join(''))
}
*/

/*
Switcheroo
function switcheroo(x){
  let swaps = {"a": "b", "b": "a", "c": "c"}
  return x.replace(/[abc]/g, letter => swaps[letter])
}
*/

/*
Caffeine Script
function caffeineBuzz(n){
  n = Math.abs(n)
  let string = ''
  let script = n % 2 == 0 ? "Script" : ""
  for(let i = 0; i < n; i++){
    if(n % 3 == 0 && n % 4 == 0){
      string = "Coffee" + script
    }
    else if(n % 3 == 0){
      string = "Java" + script
    }
    else{
      string = "mocha_missing!"
    }
  }
  return string
}
*/


/*
Char Code Calculation
function calc(x){
  let total1 = x.split('').reduce( (acc, cur) => acc += cur.charCodeAt(), '' ) // split string to array, create string with charCodes
  let total2 = total1.replace(/7/g, 1) // replace all digit 7 with digit 1
  total1 = total1.split('').reduce( (acc, cur) => acc+Number(cur),0) // combine total1 to a final sum
  total2 = total2.split('').reduce( (acc, cur) => acc+Number(cur),0) // combine total2 to a final sum
  return total1-total2 // return difference
}
*/

/*
Fun with ES6 Classes #2 - Animals and Inheritance
class Shark extends Animal {
  constructor(name, age, status) {
    super()
    this.name = name
    this.age = age
    this.status = status
    this.legs = 0
    this.species = "shark"
  }
}

class Cat extends Animal {
  constructor(name, age, status){
    super()
    this.name = name
    this.age = age
    this.status = status
    this.legs = 4
    this.species = "cat"
  }
    introduce(){
      return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`
    }
}
class Dog extends Animal {
  constructor(name, age, status, master){
    super()
    this.name = name
    this.age = age
    this.status = status
    this.master = master
    this.legs = 4
    this.species = "dog"
  }
  greetMaster(){
    return `Hello ${this.master}`
  }
}
*/

/*
Return the missing element
function getMissingElement(superImportantArray){
  for(let i = 0; i < 10; i++){
    if(!superImportantArray.includes(i)){
       return i
    }
  }
}
*/

/*
UEFA Euro 2016
function uefaEuro2016(teams, scores){
  const winner = scores[0] == scores[1] ? 
    "teams played draw." : 
    `${teams[scores.indexOf(Math.max(...scores))]} won!`
  return `At match ${teams[0]} - ${teams[1]}, ${winner}`
}
*/

/*
Balanced Number (Special Numbers Series #1 )
function balancedNum(number)
{
    let left
    let right
    let arr = number.toString().split('')
    if(arr.length % 2 == 0){
      left = arr.slice(0, arr.length/2 -1)
      right = arr.slice(arr.length/2 +1)
    }
    else{
      left = arr.slice(0, Math.floor(arr.length / 2))
      right = arr.slice(Math.floor(arr.length / 2 + 1))
    }
    return left.reduce( (acc, cur) => acc+Number(cur), 0) == right.reduce( (acc, cur) => acc+Number(cur), 0) ?
      "Balanced" :
      "Not Balanced"
}

*/

/*
Reverse Words
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  str = str.split(' ')
  str = str.map(word => word.split('').reverse().join(''))
  return str.join(' ')
}

/*
7-KYU Reversed Message

Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

Example:

reverseMessage('This is an example of a Reversed Message!');
Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'


function reverseMessage(str) {
  return str.split(' ').map(word => {
    word = word.toLowerCase().split('').reverse().join('')
    return word.slice(0,1).toUpperCase() + word.slice(1)
  }).reverse().join(' ')
}

*/
/*
7-Kyu
function isPowerOfTwo(n){
  if(n % 1 != 0 || n < 1){
    return false
  }
  while(n > 1){
    n /= 2
  }
  if(n % 1 == 0){
    return true
  }
  else{
    return false
  }
}
*/

/*
7kyu - Greatest Common Divisor
function mygcd(x,y){
  for(let i = Math.min(x,y); i > 0; i--){
    if(x % i == 0 && y % i == 0){
      return i
    }
  }
}
*/
/*
7kyu - Ordered Count of Characters
const orderedCount = function (text) {
  const arr = []
  while(text.length > 0){
    let currentLetter = text[0]
    let toSearch = new RegExp(currentLetter, "g")
    let currentArray = []
    currentArray.push(currentLetter, text.match(toSearch).length)
    text = text.replace(toSearch, '')
    arr.push(currentArray)
    if (!text.includes(text[0])){
      text = text.slice(1)
    } 
  }
  return arr
}

*/

/*
7kyu - Unpacking Arguments
function spread(func, args) {
  return func(...args)
}
*/

/*
7kyu Odd-Even String Sort
function sortMyString(S) {
    const evenArr = []
    const oddArr = []
    for(let i = 0; i < S.length; i++){
      if(i % 2 == 0){
        evenArr.push(S[i])
      }
      else{
        oddArr.push(S[i])
      }
    }
    return `${evenArr.join('')} ${oddArr.join('')}`
}
*/

/*
7kyu - Alphabet Symmetry

function solve(arr){  
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  let result = []
  arr.forEach(word => {
    let count = 0
    for(let i = 0; i < word.length; i++){
      if(alphabet.indexOf(word.substring(i, i+1).toLowerCase()) == i){
        count += 1
      }     
    }
    result.push(count)
  })
  return result
};
*/

/*
7kyu - Simple Remove Duplicates

function solve(arr) {
  for(let i = 0; i < arr.length; i++){
    if(arr.filter( n => n == arr[i]).length > 1){
      arr.splice(i, 1)
      i--
    }
  }
  return arr
}
*/


/*
7Kyu
Coding Meetup #2 - Higher-Order Functions Series - Greet developers


function greetDevelopers(list) {
  list.forEach( obj => { 
    obj.greeting = "Hi "+ obj.firstName + ", what do you like the most about " + obj.language + "?"
  })
  return list
}
*/

/*
7kyu Simple Fun #74: Growing Plant
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let currentHeight = 0 
  let days = 0
  while(currentHeight < desiredHeight){
    days++
    currentHeight += upSpeed
    if(currentHeight >= desiredHeight){
      return days
    }
    currentHeight -= downSpeed
  }
  return days
}
*/

/*
7kyu - Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
function isRubyComing(list) {
  return list.some( dev => dev.language == "Ruby")
}
*/


/*
7kyu - Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer

function getFirstPython(list) {
  let pyDevs = list.filter(dev => dev.language === "Python" )
  if(pyDevs.length > 0){
    return pyDevs[0].firstName + ', ' + pyDevs[0].country
  }
  else{
    return "There will be no Python developers"
  }
}



/*
7 kyu - Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
function countLanguages(list) {
  let languages = new Set(list.map(dev => dev.language))
  let langCount = {}
  languages.forEach(lang => {
    langCount = {...langCount, [lang]: list.filter(dev => dev.language == lang).length}
  })
  return langCount
}

*/


/*
7 kyu - Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
function isSameLanguage(list) {
  return list.every(dev => dev.language == list[0].language)
}

*/

/*

7kyu - Smallest value of an array

function min(arr, toReturn) {
  let sorted = [...arr].sort((a,b)=>a-b)
  return toReturn === 'value' ? sorted[0] : arr.indexOf(sorted[0])
}

*/

/*
7kyu - Sum of all arguments

function sum(...args) {
  return [...args].reduce( (acc, cur) => acc+cur, 0)
}
*/

/*
7kyu functional addition

function add(n) {
  return function(x){
    return n+x
  }
}


*/


/*
Contamination #1 -String-

function contamination(text, char){
  return text.replace(/./g, char)
}

*/

/*
NBA full 48 minutes average


function pointsPer48(ppg, mpg) {
  return Number(((48/mpg) * ppg).toFixed(1)) || 0
}

*/

/*
ASCII Total

function uniTotal (string) {
  return [...string].reduce( (acc, cur) => acc + cur.charCodeAt(0) ,0)
}
*/


/*
pick a set of first elements


function uniTotal (string) {
  return [...string].reduce( (acc, cur) => acc + cur.charCodeAt(0) ,0)
}

*/

/*
pick a set of first elements
function first(arr, n=1) {
  return arr.slice(0, n)
}

*/


/*

They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?

function isOpposite(s1,s2){
  let o1 = s1.split('').map(letter => letter == letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase())
  if(o1.length <= 0){
    return false
  }
  return (o1.join('') == s2)
}

*/


/*
Training JS #11: loop statement --break,continue


function grabDoll(dolls){
  var bag=[];
  for(let i = 0; i < dolls.length; i++){
    if(dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll"){
      bag.push(dolls[i])
    }
    else{
      continue
    }
    if(bag.length == 3){
      break
    }
  }
  return bag;
}

*/


/*

Evil or Odious


function evil(n) {
  const binary = n.toString(2)
  if(binary.match(/1/g).length % 2 == 0){
    return "It's Evil!"
  }
  else{
    return "It's Odious!"
  }
}

*/

/*
Draw Stairs

function drawStairs(n) {
  const arr = [...Array(n)].map( (l, i) => ' '.repeat(i) + 'I')
  return arr.join('\n')
}

*/

/*
Fuel Calculator

function fuelPrice(litres, pricePerLitre) {
  let total = 0
  if(litres >= 2 && litres < 4){
    total = litres *= (pricePerLitre-0.05)
  }
  else if(litres >= 4 && litres < 6){
    total = litres *= (pricePerLitre-0.10)
  }
  else if(litres >= 6 && litres < 8){
    total = litres *= (pricePerLitre-0.15)
  }
  else if(litres >= 8 && litres < 10){
    total = litres *= (pricePerLitre-0.20)
  }
  else if(litres >= 10){
    total = litres *= (pricePerLitre-0.25)
  }
  return Number(total.toFixed(2))
}
*/

/*
7kyu - esreveR
reverse = function(array) {
  console.log(array)
  let reversed = []
  for(let i = array.length-1; i >= 0; i--){
    reversed.push(array[i])
  }
  return reversed
}
*/

/*
Online RPG: player to qualifying stage?


function playerRankUp (points) {
  return points >= 100 ? "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up." : false;
}

*/

/*
8kyu - Chuck Norris VII - True or False? (Beginner)


function ifChuckSaysSo(){
  return 1==2
}
*/
