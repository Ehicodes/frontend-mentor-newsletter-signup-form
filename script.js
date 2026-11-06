'use strict'
const signup = document.querySelector('.signup')
const form = document.querySelector('.signup__form') 
const  emailInput = document.querySelector('#email')
const errorMessage = document.querySelector('.error-message')
const successMessage = document.querySelector('.success-message')
const successEmail = document.querySelector('.success-message__note span')
const dismissBtn = document.querySelector('.dismiss-btn')

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const email = emailInput.value.trim()

    errorMessage.textContent = ''

      // 1. Presence check
    if(!email) {
        errorMessage.textContent = 'Email address is required.'
         return
    }

  // 2. Basic email structure
    if(!emailInput.checkValidity()) {
         errorMessage.textContent = 'Email required'
         return
    }  

      // 3. Character and space restrictions
    const hasInvalidCharacters = /\s/.test(email);
    const hasConsecutiveDots = /\.{2,}/.test(email);

    if (hasInvalidCharacters || hasConsecutiveDots) {
          errorMessage.textContent = 'Valid email required.'
         emailInput.style.backgroundColor = '#fbe2e2'
         emailInput.style.border = '1px solid #eb7c7c'
         emailInput.style.border = '1px solid #eb7c7c'
         emailInput.style.color = '#ff8989'
         return 
      }  else emailInput.style.backgroundColor = '#fff',  
           emailInput.style.border = '1px solid #949494',
           emailInput.style.color = '#36384e'
     
      //4. Display the entered email
       successEmail.textContent = email;

      // 5. Show success message
        successMessage.classList.add('is-visible')

      // 6. Show normal signup screen
        signup.classList.add('is-success') 
})

//Listen for the dismiss button click
dismissBtn.addEventListener('click', function() {
    //Return to the normal signup screen
     signup.classList.remove('is-success')

  // Hide the success message
     successMessage.classList.remove('is-visible')

     //Clear the form
     form.reset()

  // Clear previous errors
  errorMessage.textContent = '';
})


