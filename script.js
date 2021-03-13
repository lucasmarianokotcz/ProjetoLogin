document.addEventListener("DOMContentLoaded", addListeners, false);

var txtUsuario = document.getElementById("txtUsuario");
var txtSenha = document.getElementById("txtSenha");
var btnEntrar = document.getElementById("btnEntrar");

function addListeners() {
    txtUsuario.addEventListener("input", validFields);
    txtSenha.addEventListener("input", validFields);
    btnEntrar.addEventListener("click", login);
}

function validFields() {
    if (txtUsuario.value.trim() == "" || txtSenha.value.trim() == "") {
        btnEntrar.setAttribute("disabled", "true");
    } else {
        btnEntrar.removeAttribute("disabled");
    }
}

function login() {
    alert("Logado com sucesso!");
    resetForm();
}

function resetForm() {
    txtUsuario.value = "";
    txtSenha.value = "";
    btnEntrar.setAttribute("disabled", "true");
}
