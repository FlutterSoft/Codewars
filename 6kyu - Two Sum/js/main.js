function twoSum(numbers, target) {
    let n1 = 0
    let n2 = 0
    let index1 = 0
    let index2 = 0
    let sum = 0
    
    for(let i = 0; i < numbers.length; i++){
      n1 = numbers[i]
      index1 = i
      
      for(let j = 1; j < numbers.length; j++){
        n2 = numbers[j]
        index2 = j
        sum = Number(n1+n2)
        if(sum == target){
          return([index1, index2])
        }
      }
    }
  }