const names = document.getElementById('firstName');
const password = document.getElementById('password');
const form = document.getElementById('forms');
const lname = document.getElementById('lastName');
const email = document.getElementById('emailAddress');
const error1 = document.getElementById('error1');
const inputs = document.querySelector('input');
const error2 = document.getElementById('error2');
const error3 = document.getElementById('error3');
const error4 = document.getElementById('error4');
const error5 = document.getElementById('error5');

form.addEventListener('submit', (e) =>{
    let messages = []
    if (names.value === '' || names.value == null){
        messages.push('First Name cannot be empty');
        names.style.border = "2px solid red"
    }
    if(messages.length > 0){
    e.preventDefault()
    error1.innerText = messages.join(',')
    }
    else {
        names.border.style = "1px solid hsl(246, 25%, 77%)"
    }


    if(lastie.length > 0){
        e.preventDefault()
        error2.innerText = lastie.join(',')
        }
})
/* let lastie = []
    if (lname.value === '' || lname.value == null){
        lastie.push('Last Name cannot be empty');
        lname.style.border = "2px solid red"
    }

    if(messages.length > 0){
    e.preventDefault()
    error1.innerText = messages.join(',')
    }
