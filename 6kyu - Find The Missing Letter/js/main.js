function findMissingLetter(array){
  const lowerArray = array.join('').toLowerCase()
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let start = alphabet.indexOf(lowerArray[0])
  
  for (let i = 0; i < lowerArray.length; i++){
    if (lowerArray[i] != alphabet[i+start]){
      if (array[0] == array[0].toUpperCase()){
        return (alphabet[i+start].toUpperCase())
      }
      else {
        return (alphabet[i+start])
      }
    }
  }
}