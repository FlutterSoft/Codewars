function pigIt(str){
  let arr = str.split(' ')
  let answer = []
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i].split('')
  }
  arr.forEach( word => {      
   
    word[word.length] = word[0]
    word.splice(0, 1)
    if (word != '!' && word!= '?'){
      answer.push( (word.join('') + ['ay']) )
    }
    else {
      answer.push(word)
    }
  })
  
  return answer.join(' ')
}