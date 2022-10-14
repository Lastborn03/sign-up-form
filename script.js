const inputs = document.querySelectorAll('input');
const form = document.querySelector('.forms');
const errorIcons= document.querySelector('.errorIcon');
const errors = document.querySelector('.errors')

form.addEventListener('submit', (e) => {
    inputs.forEach( input => {
        if ( input.value.trim() === '' ) {
            input.style.border = "2px solid red";
            input.nextSibling.remove();

            input.insertAdjacentHTML (
                'afterend', `<div class="errors"><img src="icon-error.svg" class="errorIcon" alt="error"/> <p class="errormes">${input.name} cannot be empty`

            )
            e.preventDefault()
        }
        else{
            input.style.border = ''
            input.nextSibling.textContent = ''
        }
    })
})    