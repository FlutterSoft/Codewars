
/*]Snail Sort

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
*/


// make duplicate of array, after each for loop remove that line from the duplicate array
// at end of the last for loop - splice all from array, and then copy duplicate to array
snail = function(array) {
    // I should have used shift/pop rather than making duplicate arrays that was dumb
    
    let arr = []
    let tester = array.filter( e => e.length)
    if (tester.length == 0 || tester == null || tester == []){
      return []
    }
    while (array.length > 0){
      let dupe = array.filter( e => e.length)
  
      let len = array[0].length
      // add the top row to answer array
      for (let i = 0; i < len; i++){
        arr.push(array[0][i])
      }
      dupe[0].splice(0, len)
  
      // add the right side to answer array
      for (let i = 1; i < len; i++){
        arr.push(array[i][len-1])
      }
      // delete the right side from duplicate array
      for (let i = 1; i < len; i++){
        dupe[i].splice(-1, 1)
      }
      // add the bottom row to answer array
      for (let i = len-2; i >= 0; i--){
        arr.push(array[len-1][i])
      }
      // delete bottom row from dupe
      dupe[len-1].splice(0, len)
  
      // add the left side from bottom to top to answer
      for (let i = len-2; i >= 1; i--){
        arr.push(array[i][0])
      }  
      // delete the left side from bottom to top to answer
      for (let i = len-2; i >= 1; i--){
        dupe[i].splice(0, 1)
  
      }
      array = dupe.filter( e => e.length)
    }
    return arr
  }
  
  
  
  
  
  console.log(snail([[]]))
  
  