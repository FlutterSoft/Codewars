/* Description:

Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/
var encryptThis = function(text) {
    let words = text.split(' ')  
    let final = ''
    if (text.length > 1){
        words.forEach( word => {
          if (word.length > 1){
            let str = word.split('')
            let first = word.charCodeAt(0).toString()
            let second = word[1]
            let last = word[word.length-1]
            str[0] = first
            str[1] = last
            str[word.length -1] = second
            str = str.join('')
            final += str + ' '
          }
      
          else {
            let first = word.charCodeAt(0)
            final += first + ' '
          }   
        })
    }
    else {
        final = text.charCodeAt(0).toString()
        return final
    }

    return final.trim()
  }

  console.log(encryptThis("A"))


//  .charCodeAt(0)
