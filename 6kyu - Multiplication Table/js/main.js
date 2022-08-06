// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
  /*
  P- single int in, working with ints only
  R - return an array of arrays containing ints where the multiplication increases by 1 each array and the count in each array is the size
  E - multiplicationTable(3) => [[1,2,3], [2,4,6], [3,6,9]]
  P -
  // create array to return
  // create for loop whilst i is less than size
  // create a for loop inside whilst j is less than size to create each individual array
  // push the number to the array
  // return array
  */
  let arr = []
  let curArr = []
  let j = 1
  for(let i = 1; i <= size; i++){
    curArr = []
    for(let j = 1; j <= size; j++){
      curArr.push(i*j)
    }
      arr.push(curArr)
  }
  return arr
}

