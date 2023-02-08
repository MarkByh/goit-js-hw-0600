
const form = document.querySelector('.login-form')
form.addEventListener('submit', OnFormSubmit )

function OnFormSubmit (event) {
    event.preventDefault();
    const {
        elements: {email, password}
    } = event.currentTarget;
    if (email.value==='' || password.value === '') {
        return alert('All fields must be field')
    } 
    console.log( {'email': email.value, 'password' : password.value });
    event.currentTarget.reset()
}