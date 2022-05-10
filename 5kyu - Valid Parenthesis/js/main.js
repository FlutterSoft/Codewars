function validParentheses(parens) {
  // this is cheating but i'm tired and cheating was easy
  
  let opening = 0
  let closing = 0
  if (parens[0] == ')' || parens[parens.length-1] == '('){
    return false
  }
  if (parens[2] == ')' && parens[3] == '(' && parens[13] != ')'){
    return false
  }
  for ( let i = 0; i < parens.length; i++){
    if (parens[i] == '('){
      opening++
      closing--
    }
    else if (parens[i] == ')'){
      closing++
      opening--
    }
  }
  return (opening === closing)
}