const inputValid = document.getElementById('validation-input');
const length = Number(inputValid.dataset.length)
inputValid.addEventListener('change', checkValidation)
 function checkValidation (event) {
  
    if (inputValid.value.length === length) {
        
        inputValid.classList.remove('invalid')
        inputValid.classList.add('valid')
    }  
    else{
        inputValid.classList.add('invalid')
        inputValid.classList.remove('valid')
    } 
 }