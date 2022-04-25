function digital_root(n) {
  let arr = n.toString().split('')
  let sum = arr.reduce( (acc, sum) => acc + sum)

  while(sum.toString().length > 1){
    arr.splice(0)
    arr = sum.toString().split('')
    sum = arr.reduce( (acc, sum) => Number(acc) + Number(sum))
  }
  return Number(sum)
}