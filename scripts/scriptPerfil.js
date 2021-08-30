const nombrePerfil = document.getElementById('nombre-perfil')
const emailPerfil = document.getElementById('email-perfil')
const btnEditar = document.getElementById('editarPerfil')
const formulario = document.getElementById('formulario')
const enviarEdit = document.getElementById('btn-editar-enviar')



const dataEditar = JSON.parse(localStorage.getItem('dataEditar'))


document.addEventListener('DOMContentLoaded', async (e) => {
    console.log(dataEditar.nombre)


    nombrePerfil.dataset.id = dataEditar.id


    let resp = await fetch(`http://localhost:5000/usuarios/${nombrePerfil.dataset.id}`)
    let data = await resp.json();

    nombrePerfil.textContent = data.nombre
    emailPerfil.textContent = data.correo

    console.log(data)
})

btnEditar.addEventListener('click', e=>{
    e.preventDefault()
    console.log('click')
    formulario.style.display=""
})

enviarEdit.addEventListener('click',async (e)=>{
    e.preventDefault()
    const nombreEdit = document.getElementById('nombre-edit').value
    const emailEdit = document.getElementById('correo-edit').value
    const contraseñaEdit = document.getElementById('contraseña-edit').value


    let resp = await fetch(`http://localhost:5000/usuarios/${nombrePerfil.dataset.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            "nombre": nombreEdit,
            "contraseña": contraseñaEdit,
            "correo": emailEdit,
            "preguntasTotales": 0,
            "preguntasCorrectas": 0,
            "preguntasIncorrectas": 0,
            "vidas": 0,
            "progreso": 0
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
})