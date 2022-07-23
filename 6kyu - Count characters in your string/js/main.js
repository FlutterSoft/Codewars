// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
  /*
  P - string in containing letters, letters only a & b??
  R - return an object, each character and count as a key value pair. should it be returned in alphabetical order?
  E -  count("aba") => { a: 2, b: 1}   
  P
  */
  // create a copy of string and make a new set array only containing each character once **don't need to as it is only a and b
  // create counter object
  // loop through the copy and create a new keyvalue pair in the counter object with the letter ** don't need to only a & b
  // find the amount in string by using filter and checking length
  
  let counter = {a:0, b:0}
  counter.a = string.split('').filter( letter => letter === "a").length
  counter.b = string.split('').filter( letter => letter === "b").length
  counter.a === 0 && delete counter.a
  counter.b === 0 && delete counter.b
  return counter
}