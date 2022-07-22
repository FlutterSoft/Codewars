/*
You are given three integer inputs: length, minimum, and maximum.

Return a string that:

Starts at minimum
Ascends one at a time until reaching the maximum, then
Decends one at a time until reaching the minimum
repeat until the string is the appropriate length
Examples:

 length: 5, minimum: 1, maximum: 3   ==>  "12321"
 length: 14, minimum: 0, maximum: 2  ==>  "01210121012101"
 length: 11, minimum: 5, maximum: 9  ==>  "56789876567"
Notes:

length will always be non-negative
negative numbers can appear for minimum and maximum values
hyphens/dashes ("-") for negative numbers do count towards the length
the resulting string must be truncated to the exact length provided
return an empty string if maximum < minimum or length == 0
minimum and maximum can equal one another and result in a single number repeated for the length of the string

*/

function ascendDescend(length, minimum, maximum) {
  /*
  P - Accepts 3 ints, a length of string, a minimum number and maximum number to start/end at
  R - Returning a string, starts a minimum, ascends one at a time til reaching max then descends til reaching minimum 
    then repeat process until length reached
  E - length: 5, minimum: 1, maximum: 3 => "12321", l: 14, min:0, max:2 => 01210121012101
  P -
  */
  // create a string variable to hold result
  // start a counter at minimum
  // create a variable for ascending to be true
  let string = ""
  let counter = minimum
  let ascending = true
  
  // if the minimum is greater than the maximum return empty string because it's impossible
  if(minimum > maximum){
    return ""
  }
  
  // create a while loop (while string length is less than length)
  while(string.length < length){
    // if the counter = the min or max then ascending should change true/false
    if(counter == maximum){
      ascending = false
    }
    else if(counter == minimum){
      ascending = true
    }
    
    // if ascending is true then we should add current counter to the string then add one to the counter
    if(ascending){
      string += counter
      counter++
    }
    // if ascending is false then we should add current counter to the string then minus one from the counter
    else{
      string += counter
      counter-- 
    }
    // if the counter is below or above min/max set it to min/max
    if(counter < minimum){
      counter = minimum
    }
    else if(counter > maximum){
      counter = maximum
    }
  }
  // return the string once length is reached and while loop is exited, slice to length needed for negatives
  return string.slice(0, length)
  
}
