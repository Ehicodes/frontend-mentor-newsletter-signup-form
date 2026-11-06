# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

**Desktop sign-up form**

![Newsletter sign-up form on desktop](./screenshots/Desktop%20design.png)

**Desktop validation and success states**

![Desktop error state](./screenshots/Error%20state-desktop.png)
![Desktop success message](./screenshots/Success%20state-desktop.png)

**Mobile layout**

![Newsletter sign-up form on mobile](./screenshots/Mobile%20design.png)
![Mobile success message](./screenshots/Success%20state-mobile.png)

### Links

- Solution URL: []
- Live Site URL: [https://ehi-frontendmentor-signup-form.netlify.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

Working on this project helped me strengthen my understanding of HTML, CSS, and JavaScript, particularly how they work together to create an interactive user experience. Some of the major things I learned include:

- **HTML structure:** Understanding the importance of proper nesting and parent-child relationships. I discovered that placing an element inside the wrong container can affect how it behaves when styling or manipulating it with JavaScript.
- **Responsive design:** Using CSS Grid, Flexbox, media queries, and the HTML `<picture>` element to create layouts that adapt to different screen sizes.
- **Form validation:** Learning how to validate user input with JavaScript, including checking for empty fields, invalid email formats, whitespace, and consecutive dots.
- **Regular expressions:** Using regular expressions (`RegEx`) to detect specific patterns in an email address.
- **DOM manipulation:** Selecting HTML elements, updating text content, and using `classList.add()` and `classList.remove()` to control different UI states.
- **Event handling:** Working with form submission events, `e.preventDefault()`, and event listeners to manage user interactions.
- **Debugging:** Learning to inspect my HTML structure, CSS styles, and JavaScript behaviour instead of assuming every issue is caused by CSS or JavaScript.

One concept I particularly enjoyed learning was how to use JavaScript to display a success message after successful form validation:

```js
successEmail.textContent = email;
successMessage.classList.add('is-visible');
signup.classList.add('is-success');
```

This updates the email address displayed in the success message and changes the interface to reflect a successful subscription.

### Continued development

I want to continue improving my JavaScript skills, especially in the following areas:

- Writing cleaner, more reusable JavaScript code.
- Getting more comfortable with regular expressions and form validation.
- Understanding accessibility best practices, particularly for forms and error messages.
- Improving my CSS layout skills and responsive design techniques.
- Becoming more confident with debugging and solving problems independently.
- Learning how to provide better feedback to users through interactive interfaces.

I also want to keep building projects that challenge me to apply what I've learned rather than simply following tutorials.

### Useful resources

- [MDN Web Docs – HTML Forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms) - Helped me understand HTML forms and how they work.
- [MDN Web Docs – Constraint Validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) - A useful resource for understanding form validation and the browser's built-in validation features.
- [MDN Web Docs – Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) - Helped me understand how regular expressions work in JavaScript.
- [Frontend Mentor](https://www.frontendmentor.io/) - Provided the challenge and design reference that helped me practise building a real-world interface.

### AI Collaboration

I used ChatGPT as a learning and debugging companion throughout this project.

Rather than relying on AI to write the entire solution, I used it to:

- Understand unfamiliar HTML, CSS, and JavaScript concepts.
- Break down JavaScript logic and regular expressions into simpler explanations.
- Debug issues with form validation, DOM manipulation, and CSS layouts.
- Understand why certain approaches worked and why others didn't.
- Explore alternative ways to structure and improve my code.

One important lesson from this experience was that not every problem requires a complicated solution. For example, I spent time investigating CSS and JavaScript when the actual issue was my HTML structure: I had placed the success message inside the signup body, which was being hidden when the success state was activated.

This experience reinforced the importance of understanding my code, testing my assumptions, and learning to debug independently.

Overall, AI was most useful when it helped me understand the reasoning behind a solution rather than simply giving me code to copy.

## Author

- Github - [Ehicodes](https://github.com/Ehicodes)
- Frontend Mentor - [@Ehicodes](https://www.frontendmentor.io/profile/@Ehicodes)
- X - [@Ehinomen_01](https://x.com/Ehinomen_01)

## Acknowledgments

Thanks to Frontend Mentor for the challenge and design.