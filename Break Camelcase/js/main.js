/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

    // let len = 0
    // let strLength = str.length
    // while (len < strLength){
    //     str.splice(len, 0, ' ')
    //     len++
    // }

// this is much easier with regex 

function solution(string) {
    const str = string.split('')
    const strUpper = string.toUpperCase().split('')
    const indexes = []
    let count = 0

    // push the index of capital letters to indexes array
    for (let i = 0; i < str.length; i++){
        if ( str[i] === strUpper[i] ){
            indexes.push(i)
            console.log(i)
        }
    }
    // add space at each element of indexes
    indexes.forEach( index => {        
        str.splice(index+count, 0, ' ') 
        count++
    })

    return str.join('')
}
console.log(solution('camelCaseMan'))