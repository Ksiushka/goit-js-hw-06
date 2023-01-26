const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail,
        password,
    }

    console.log(formElements);
    console.log(mail, password);
    console.log(formData)
    
}
