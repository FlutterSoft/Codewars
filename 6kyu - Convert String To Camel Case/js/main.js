function toCamelCase(str){
    let arr = []
    let result = ''
    if(str.includes('-')){
         arr = str.split('-')
    }
    else {
      arr = str.split('_')
    }
    result += arr[0]
    for(let i = 1; i<arr.length; i++){
      result += arr[i][0].toUpperCase() + arr[i].slice(1)
    }
    return result
  }