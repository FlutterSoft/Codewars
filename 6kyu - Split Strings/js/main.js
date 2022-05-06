function solution(str){
  let temp = ""
  let arr = []
  let strArr = str.split('')
  if (str.length == 0){
    return []
  }
  for (let i = 0; i <= strArr.length; i+=2){
    temp = strArr.slice(i,i+2)
    console.log(temp)
    arr.push(temp.join(''))
  }
   arr.pop()
   if (str.length % 2 != 0){
     
     arr.push(strArr[strArr.length-1] + "_")
   }
 return arr
}