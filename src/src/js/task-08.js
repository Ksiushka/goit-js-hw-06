const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value.trim();
    const password = formElements.password.value.trim();

    const formData = {
        mail,
        password,
    }

    if (mail === '' || password === '') {
        return alert('pleas, feel out');
    }
     
    console.log(formData);
    event.currentTarget.reset();
}
