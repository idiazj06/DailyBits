let btnInicio = document.querySelector('.btn-ingresar')
const URL_DATA = 'http://localhost:5000/usuarios/'


btnInicio.addEventListener('click', async (e) => {
    e.preventDefault();
    let inputEmail = document.getElementById('input-correo').value

    let resp = await fetch(URL_DATA)
    let data = await resp.json();
    let buscar = data.find(mail=>mail.correo === inputEmail)
    

    

    if(buscar === undefined) {
        console.log('no exite')
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'El correo ingresado no esta registrado',
            footer: '<a href="registro.html">Registrate</a>'
          })
    }else{
        console.log('si existe')
        infoEditar(buscar)
        ejecutarIngreso()
    }
   
    
}
)

const infoEditar = data =>{
    localStorage.setItem('dataEditar', JSON.stringify(data))

}

const ejecutarIngreso = () =>{
    window.location.href = "home.html"
}