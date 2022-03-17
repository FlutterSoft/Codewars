// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    // split words at the space and convert letters to char code then add up and compare each
    let high
    let arr = x.split(' ')
    let sumsArr = []
    console.log(arr)
    arr.forEach( (val) => {
        let sum = 0
        for(let i = 0; i < val.length; i++){
            sum += Number(val.charCodeAt(i) -96)
        }
        sumsArr.push(sum)
    })
    let sumsArrSorted = sumsArr.slice().sort( (a,b) => b-a)
    // console.log(sumsArr)
    // console.log(sumsArrSorted)
    high = sumsArr.indexOf(sumsArrSorted[0])
    return arr[high]
}
console.log(high('what time are we climbing up the volcano'))