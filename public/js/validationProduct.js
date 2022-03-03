window.addEventListener("load", function () {

    const form = document.querySelector(".form-register");

    form.addEventListener("submit", function (e) {
        let errors = [];

        let name = document.querySelector("input.barra#title");
        if (name.value == "") {
            errors.push('El nombre del producto no puede estar vacío ')

        } else if (name.value.length < 2) {
            errors.push('Escribe un nombre de producto Válido debe al menos tener 5 caracteres')
        }

        let description = document.querySelector(" textarea.barra#description");
        if (description.value == "") {
            errors.push('Coloca la descripción de tu producto,no puede estar vacío y debe tener mínimo 20 caracteres')

        } else if (description.value.length < 2) {
            errors.push('Escribe una descripción de tu producto debe al menos tener 20 caracteres')
        }

        /*let image = document.querySelector("input.barra#image-product");
        let imagevalidation =/.(gif|jpeg|jpg|png)$/i;
        if(image.value == ""){
            alert(holasllalasl)
            errors.push('Debe subir una imagen del producto');           
        }else if(!imagevalidation.exec(image.value)){
            errors.push('Las extensiones de archivo permitidas son JPG, JPEG, PNG y/o GIF');               
        }*/

        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector("div.errors-product");
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>";
            };
    
        } else {
            alert('El registro se ha realizado exitosamente');
            form.submit();
        }
    })
})//general