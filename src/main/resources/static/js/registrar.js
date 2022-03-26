// Call the dataTables jQuery plugin
$(document).ready(function() {
  // on ready
});

async function registrarUsuarios() {
    let datos = {
        nombre: document.getElementById('txtNombre').value,
        apellido: document.getElementById('txtApellido').value,
        email: document.getElementById('txtEmail').value,
        password: document.getElementById('txtPassword').value
    };

    let repeatPassword = document.getElementById('txtRepeatPassword').value;

    if(repeatPassword != datos.password) {
        alert('La contraseña que escribistes es diferente.');
        return;
    }

    const request = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    alert("La cuenta fue creada con exito.");
    window.location.href = "login.html";
}