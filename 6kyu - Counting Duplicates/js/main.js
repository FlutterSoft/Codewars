function duplicateCount(text){
  // create array, check each item in array for indexof to find matches 
  // and then remove each occurence whilst adding 1 to the total count
  
  let arr = text.toLowerCase().split('')
  let pos = 0
  let cur = ''
  let j = 0
  let sums = []
  for (let i = 0; i < arr.length; i++){
    sums.push(0)
  } 
  
  while (arr.length > 0){
    cur = arr.shift()            // take off first letter in array
    pos = arr.indexOf(cur)       // find the location of the first letter matching 
    while (pos != -1){           // if there is a match
      sums[j] += 1                 // add 1 to the total for that letter
      arr.splice([pos], 1)       // delete the letter
      pos = arr.indexOf(cur)     // find the location of the first letter matching 
    } 
    arr[j]
    j++
  }
  
  return sums.filter( (num) => num > 0).length
}