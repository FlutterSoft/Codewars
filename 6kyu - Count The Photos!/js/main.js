function countPhotos(road){
  let count = 0
  let cameras = 0
  let right = 0
  
  road.split('').forEach(el => {
    if(el == '.'){
      cameras++
      count += right
    }
    else if(el == '<'){
      count += cameras
    }
    else if(el == '>'){
      right++
    }
  })
  return count
}