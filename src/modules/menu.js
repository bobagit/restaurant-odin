const currentPage = 'menu';

const updateActiveTab = (navButton) => {
  let activeTab = document.getElementById(navButton)
  let navigation = document.querySelectorAll('.nav-button')

  for (let i = 0; i < navigation.length; i++) {
    if (navigation[i].getAttribute('id') == currentPage) {
      activeTab.classList.add('active')
    } else {
      navigation[i].classList.remove('active')
    }
  }
} 
const menuItems = {
  hotdog: {
    name: "Vinny's Famous Hot Dog",
    price: 2.25,
    ingredients: ["salt", "nitrates", "onion powder", "organic chicken claw", "meal worm", "bun", "stabilizers", "artificial flavoring", "B12 coloring", "palm oil", "trans fats substitutes", "aspertame", "stevia", "love"],
    calories: 912,
  },
  drink: {
    name: "Coke",
    price: 3.50,
    ingredients: ['carbonated water', 'high fructose corn syrup', 'caramel color', 'phosphoric acid', 'natural flavors', 'caffeine'],
    calories: 140,
  },
  side: {
    name: "Fries",
    price: 5.95,
    ingredients: ['beef oil', 'mealworm', 'palm oil', 'hydrogenated translipid nonsoluloids', 'pig hoof for flavoring', 'potatoes', 'organic kosher sea salt'],
    calories: 140,
  }
};

const createMenu = function(item) {
    let name = item.name
    let price = item.price
    let ingredients = item.ingredients
    let calories = item.calories
    
    let htmlName = document.createElement('h2')
    htmlName.textContent = name

    let htmlPrice = document.createElement('p')
    htmlPrice.className = "price"
    htmlPrice.textContent = `$${price}`

    let htmlIngredients = document.createElement('p')
    htmlIngredients.textContent = ingredients.join(', ')

    let htmlCalories = document.createElement('p')
    htmlCalories.textContent = `Calories: ${calories}`
    return {
      htmlName,
      htmlPrice,
      htmlIngredients,
      htmlCalories
    }
}

const loadMenu = function() {
  updateActiveTab(currentPage);
  localStorage.setItem('currentPage', currentPage)
  let mainContent = document.getElementById('main-content')
  mainContent.innerHTML = '';
  let innerDiv = document.createElement('div')
  innerDiv.classList.add('inner', 'menu')
  mainContent.appendChild(innerDiv)
  
  for (let i = 0; i < 3; i++) {
    let item = (createMenu(menuItems[Object.keys(menuItems)[i]]))
    innerDiv.appendChild(item.htmlName)
    innerDiv.appendChild(item.htmlPrice)
    innerDiv.appendChild(item.htmlIngredients)
    innerDiv.appendChild(item.htmlCalories)
  }  

  






 
};

export default loadMenu;