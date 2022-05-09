function cakes(recipe, available) {
  let recipePossible = true
  let batches = 0
  for (let ingredient in recipe){
    if (ingredient in available && recipe[ingredient] <= available[ingredient]){
      //the recipe ingredient is in the available ingredients and there is enough to make at least one
      recipePossible = true
    }
    else {
      // ingredient not available, recipe not viable 
      return 0
    }
  }
 
  while (recipePossible) {
    for (let ingredient in recipe) {
      if (recipe[ingredient] > available[ingredient]){
        return batches
      }
      else {
        available[ingredient] -= recipe[ingredient] 
      }
    }
    batches++

  }
  return batches
 }