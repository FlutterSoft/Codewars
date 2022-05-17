function fizzbuzz(n)
{
  const arr = []
  for(let i = 1; i <= n; i++){
    if(i % 3 === 0 && i % 5 === 0){
      arr.push('FizzBuzz')
    }
    else if (i % 3 === 0){
      arr.push('Fizz')
    }
    else if(i % 5 === 0){
      arr.push('Buzz')
    }
    else{
      arr.push(i)
    }
  }
  return arr
}

/*
P: Whole int
R: Array of ints and strings, Fizz for %3 and Buzz for %5 and FizzBuzz for %3 & %5
E: fizzbuzz(3) // [1,2, "Fizz"]
P: // for loop, 1 to n, push digit to array unless if %3 or %5
*/