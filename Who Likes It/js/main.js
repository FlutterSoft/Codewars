// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
    // if array empty return no one likes this
    // if array length of 1 return name likes this
    // if array length of 2 return name and name like this 
    // if array length of 3 return name, name and name like this
    // if array length of 4 or more return name, name and (num) others like this

    let likesStr = ''
    if (names.length == 0){
        likesStr =  "no one likes this"
    }
    else if (names.length == 1){
        likesStr = `${names[0]} likes this` 
    }
    else if (names.length == 2){
        likesStr = `${names[0]} and ${names [1]} like this`
    }
    else if (names.length == 3){
        likesStr = `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    else {
        let others = names.length - 2
        likesStr = `${names[0]}, ${names[1]} and ${others} others like this`
    }

    return likesStr
  }

  console.log(likes(["Max", "John", "Mark", "Jeff"]))