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

