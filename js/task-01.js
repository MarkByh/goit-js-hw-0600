console.log('task 1:');
const list = document.getElementById('categories');
const items = list.children;
console.log( 'Number of categories:', items.length);


const categories = document.querySelectorAll('.item').forEach((category)=> {
    console.log('Category:', category.firstElementChild.textContent);
    console.log('Elements:',category.lastElementChild.children.length);
});


