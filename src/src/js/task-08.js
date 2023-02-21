const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail,
        password,
    }

    if (formData.length <= 0) {
        return ('alert');
    }
    else {
        return;
    };

    event.currentTarget.reset();

    console.log(formElements);
    console.log(mail, password);
    console.log(formData)
    
}
