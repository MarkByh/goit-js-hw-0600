const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elmUl = document.getElementById('ingredients')
const lielements = ingredients.map(ingridient => {
  const elemLi = document.createElement('li')
  elemLi.classList.add('item')
  elemLi.textContent = ingridient;
  return elemLi;
});

elmUl.append(...lielements);