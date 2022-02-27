window.addEventListener("load", function () {

    const form = document.querySelector(".form-login");
    
    form.addEventListener("submit", function (e) {
        let errors = [];

        let email = document.querySelector(" input.barra#email");
        let validation = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (email.value == "") {
            errors.push('El campo email no puede estar vacío')
        } else if (!validation.exec(email.value)){
            errors.push('Ingresa un correo válido'); 
        }

        let password = document.querySelector(" input.barra#password");
        let validationpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(password.value == ""){
            errors.push('El campo contraseña no puede estar vacío');          
        }else if(password.value.length < 8){
            errors.push('El campo contraseña debe contener al menos 8 caracteres');            
        }else if(!validationpassword.test(campoContraseña.value)){
            errors.push('El campo contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial');
        }
        
        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector("div.errors-login");
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>";
            };
    
        } else {
            alert('El registro se ha realizado exitosamente');
            form.submit();
        }
    })
})