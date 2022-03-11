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


function disemvowel(str) {

    return (str.replace(/[aeiouAEIOU]/g, ''))
    // str = str.replaceAll('a', '').replaceAll('e', '').replaceAll('i','').replaceAll('o', '').replaceAll('u','')
    // str = str.replaceAll('A', '').replaceAll('E', '').replaceAll('I','').replaceAll('O', '').replaceAll('U','')
    // return str
  }
  

  console.log(disemvowel("This website is for losers LOL!"))