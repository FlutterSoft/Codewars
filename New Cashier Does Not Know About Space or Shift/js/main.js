/*
Some new cashiers started to work at your restaurant.

They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

All the orders they create look something like this:

"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

Their preference is to get the orders as a nice clean string with spaces and capitals like so:

"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in the menu.

The menu items are fairly simple, there is no overlap in the names of the items:

1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke
*/

function getOrder(input) {
    // could run loop search each item from menu array in the input, splice from index + menu item length, then sort once array made, then rejoin into string
    const menu = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke']
    input = input.toLowerCase()
    let found
    let words = []

    while (input.length > 0){
        for (let i = 0; i < menu.length; i++){
            if (input.indexOf(menu[i]) != -1){
                found = input.indexOf(menu[i])
                words.unshift(input.substring(found, found + menu[i].length))
                input = input.replace(words[0], '')            
            }
        }
    }

    // sort array 
    let sorted = words.sort( (a, b) => menu.indexOf(a) - menu.indexOf(b))

    // make first letter capital
    for(let i = 0; i < sorted.length; i++){
        sorted[i] = sorted[i].charAt(0).toUpperCase() + sorted[i].substr(1)
    }

    // join to string
    sorted = sorted.join(' ')
    return ( sorted)
  }

  getOrder('pizzachickenfriesburgercokemilkshakefriessandwich')