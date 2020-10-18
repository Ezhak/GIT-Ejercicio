const botonSubmit = document.getElementById("submit");
const formularioValidar = document.getElementById("formulario");

function validarFormulario(){
    let campoUsuario = document.getElementById("user");
    let campoContraseña = document.getElementById("pass").value;
    
    if(campoUsuario == null || campoContraseña == null){
        alert("Campos incorrectos");
        return false;
    }
    if(campoUsuario.value != "usu@rio"){
        alert("Usuario incorrecto");
        return false;
    }
    return true;
}

formularioValidar.onsubmit = validarFormulario;