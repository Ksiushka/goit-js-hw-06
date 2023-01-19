const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navEl = document.querySelector('ul#ingredients');

const listIngredients = ingredients.map(ingredient => {
  let item = document.createElement('li');
  item.className = 'item';
  item.textContent = ingredient;
  return item;
}
);

// console.log(listIngredients);

navEl.append(...listIngredients);
console.log(navEl)

//троеточие, append not appendChild