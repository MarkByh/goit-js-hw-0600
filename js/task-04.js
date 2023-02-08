let counterValue = 0;
const number = document.getElementById('value')
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
decrement.addEventListener('click', () => {
    counterValue -= 1;
    number.textContent = counterValue;
    
} );
increment.addEventListener('click', () => {
    counterValue += 1;
    number.textContent = counterValue;
    
} );
