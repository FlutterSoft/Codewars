function noOdds( values ){
    //P: array of whole ints, 0 - ?
    //R: return an array of ints
    //E: example - // noOdds([0,1,2,3,4,5]) returns [0, 2, 4]
    //P:  for loop for values length, if array item is even add to new array, return new array
    const arr = []
    for(let i = 0; i < values.length; i++){
      if (values[i]%2 == 0){
        arr.push(values[i])
      }
    }
    return arr
  }