function electrons_around_the_cores( dices ){
  //thank you wikipedia 
  
  let arr = []
  for (let i = 0; i < dices.length; i++){
    if (dices[i] == 3){
      arr.push(2)
    }
    else if (dices[i] == 5){
      arr.push(4)
    }
  }
  return arr.reduce( (acc, sum) => acc + sum, 0);
}