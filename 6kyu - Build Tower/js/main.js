// Build Tower.

/*Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]*/

function towerBuilder(nFloors) {
    // need to add 1 space each side as pyramid goes up rows
    // need add 2 less * each row as pyramid goes up rows
      let arr = []
      let spaces = 0
      let spacesStr = ''
      let temp = ''
      for(let i = nFloors; i > 0; i--){
        let cur = ''
        for (let j = 0; j < i*2-1; j++){
           cur += '*'    
        }
        temp = cur 
        cur = spacesStr + temp + spacesStr
        arr.unshift(cur)
        spacesStr+= ' '
      }
      return arr
    }
    