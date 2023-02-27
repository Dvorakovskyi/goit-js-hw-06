const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredientsEl = document.querySelector('#ingredients');
const itemIngredientsEl = ingredients.forEach((ingridient) => {
  const itemIngredient = document.createElement('li');
  itemIngredient.textContent = `${ingridient}`;
  itemIngredient.classList.add('item');
  listIngredientsEl.append(itemIngredient);
})
