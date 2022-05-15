function findEvenIndex(arr){
    let sumL
    let sumR
    let l
    let r
  
    for(let i = 0; i < arr.length; i++){
      l = arr.slice(0, i)
      r = arr.slice(i+1)
      sumL = l.reduce( (acc, sum) => acc+sum, 0) 
      sumR = r.reduce( (acc, sum) => acc+sum, 0)
      if (sumL === sumR){
        return i
      }
    }
    return -1
  }