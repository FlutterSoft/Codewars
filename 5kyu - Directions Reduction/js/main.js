function dirReduc(arr){
  function opposite(dir){
      if (dir == "NORTH"){
          return "SOUTH"
      }
      else if (dir == "EAST"){
          return "WEST"
      }
      else if (dir == "SOUTH"){
          return "NORTH"
      }
      else if (dir == "WEST"){
          return "EAST"
      }
  }

  for (let i = arr.length; i > 0; i--){
      if (arr[i] == opposite(arr[i-1])){
          arr.splice(i-1, 2)           
      } 

  }
  return (arr)
}