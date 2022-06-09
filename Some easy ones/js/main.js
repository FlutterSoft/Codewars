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