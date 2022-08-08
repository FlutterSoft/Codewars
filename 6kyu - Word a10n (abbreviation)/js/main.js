/*
Word a10n (abbreviation)
The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
Example

abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"
*/

function abbreviate(string) {
  // if else hell but it's bed time
  let arr = string.split(' ')
  arr = arr.map( word => {
    let len = word.length
    if(len >= 4){
      if(word.includes('-')){
        let hyphenWord = word.split('-')
        hyphenWord = hyphenWord.map( hWord => {
          return hWord.length >= 4 ? hWord[0]+Number(hWord.length-2)+hWord[hWord.length-1] : hWord
        })
        return hyphenWord.join('-')
      }
      else{
        if(word[len-1] == ","){
          return (word[0]+Number(len-3)+word[len-2]+',')
        }
        else{
          return (word[0]+Number(len-2)+word[len-1])
        }
      }
    }
    else{
      return word
    }
  }) 
  return arr.join(' ')
}