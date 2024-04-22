let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName(){
    let name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Precisa do nome';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Escreva seu nome Completo';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone(){
    let phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Precisa do numero';
        return false;
    }
    if(phone.length !== 11){
        phoneError.innerHTML = 'Seu numero precisa ter 11 digitos';
        return false;
    }

    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = 'Escreva seu numero';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    let email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Precisa do Email';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email invalido';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage(){
    let message = document.getElementById('contact-message').value;
    let required = 30;
    let left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + ' Precisa de mais caracteres';
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateName() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Por favor arrume os erros antes de enviar';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }

}