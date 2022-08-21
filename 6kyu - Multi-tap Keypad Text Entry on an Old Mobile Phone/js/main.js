/*
6kyu - Multi-tap Keypad Text Entry on an Old Mobile Phone

function presses(phrase) {
  let sum = 0
  phrase = phrase.toUpperCase()
  const oneCount = [' ', 'A', 'D', 'G', 'J', 'M', 'P', 'T', 'W', '1']
  const twoCount = ['B', 'E', 'H', 'K', 'N', 'Q', 'U', 'X', '0']
  const threeCount = ['C', 'F', 'I', 'L', 'O', 'R', 'V', 'Y']
  const fourCount = ['S', 'Z', '2','3', '4', '5', '6', '8']
  const fiveCount = ['7', '9']
  for(let i = 0; i < phrase.length; i++){
    if(oneCount.includes(phrase[i])){
      sum += 1
    }
    else if(twoCount.includes(phrase[i])){
      sum += 2
    }
    else if(threeCount.includes(phrase[i])){
      sum += 3
    }    
    else if(fourCount.includes(phrase[i])){
      sum += 4
    }
    else{
      sum += 5
    }
  }
  return sum
}

*/