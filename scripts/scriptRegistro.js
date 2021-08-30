const botonCrear = document.getElementById('btn-crear');


botonCrear.addEventListener('click', e => {
    e.preventDefault();
    mostrarCorrecto()
})


const mostrarCorrecto = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cuenta creada con exito',
        showConfirmButton: false,
        timer: 2000
      })

    agregarData();
}


const agregarData = async () => {
    const inputNombre = document.getElementById('nombre').value;
    const inputCorreo = document.getElementById('correo').value;
    const inputContraseña = document.getElementById('contraseña').value;

    let resp = await fetch(`http://localhost:5000/usuarios/1`, {
        method: 'PUT',
        body: JSON.stringify({
            "nombre": inputNombre,
            "contraseña": inputContraseña,
            "correo": inputCorreo,
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })

    window.location.href = "home.html"
}