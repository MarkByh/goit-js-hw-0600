const writtenName = document.getElementById('name-input');
const nameout = document.getElementById('name-output')

writtenName.addEventListener('input', nameInput)
function nameInput(event) {
    if (writtenName.value==='') {
        nameout.textContent = 'Anonymous';
    } else {
        nameout.textContent = writtenName.value;
    }
}
