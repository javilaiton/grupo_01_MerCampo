window.addEventListener("load", function () {

    const form = document.querySelector(".form-register");

    form.addEventListener("submit", function (e) {
        let errors = [];

        let name = document.querySelector("input.barra#nombres");
        if (name.value == "") {
            errors.push('El campo nombre no puede estar vacío')

        } else if (name.value.length < 2) {
            errors.push('El nombre debe tener al menos 2 caracteres')
        }

        let last_name = document.querySelector(" input.barra#apellidos");
        if (last_name.value == "") {
            errors.push('El campo apellido no puede estar vacío')

        } else if (last_name.value.length < 2) {
            errors.push('El apellido debe tener al menos 2 caracteres')
        }

        let email = document.querySelector(" input.barra#email");
        let validation = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (email.value == "") {
            errors.push('El campo email no puede estar vacío')
        } else if (!validation.exec(email.value)){
            errors.push('El campo email debe estar escrito en un formato válido'); 
        }

        let image = document.querySelector(" input.barra#image");
        let imagevalidation =/.(gif|jpeg|jpg|png)$/i;
        if(image.value == ""){
            errors.push('Debe subir una imagen');           
        }else if(!imagevalidation.exec(image.value)){
            errors.push('Las extensiones de archivo permitidas son JPG, JPEG, PNG y/o GIF');               
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

        let confirmpassword = document.querySelector("input.barra#confirmpassword");
        if(confirmpassword.value == ""){
            errors.push('El campo confirmación de contraseña no puede estar vacío');           
        }else if(confirmpassword.value.length < 8){
            errors.push('El campo confirmación de contraseña debe contener al menos 8 caracteres');          
        }else if(confirmpassword.value !== password.value){
            errors.push('Los valores de los campos contraseña y confirmación de contraseña no coinciden');           
        }

        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector("div.errors");
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>";
            };
    
        } else {
            alert('El registro se ha realizado exitosamente');
            form.submit();
        }
    })
})//general


