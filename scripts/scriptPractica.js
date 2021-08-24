let checkbox = document.getElementById('input1')
let botonComprobar = document.querySelector('.btn-comprobar');
let textoBotonComprobar = document.getElementById('texto-boton')
let botonContinuar = document.querySelector('.btn-continuar');
let alerta = document.querySelector('.alerta')
let imgCheckbox = document.getElementById('img') 


checkbox.addEventListener("change", validaCheckbox, false);

function validaCheckbox() {
  var checked = checkbox.checked;
  if (checked) {
    console.log('checkbox1 esta seleccionado');
    botonComprobar.classList.add('activado')
    textoBotonComprobar.classList.add('activado')
    
  } else {
    console.log('no lo esta')
  }
}

botonComprobar.addEventListener('click', e => {
    agregarAlerta(e);
    e.preventDefault();
    console.log(checkbox.checked)
    
    
})



function agregarAlerta(e) {
  // alerta.classList.add('alertaSeleccionada')
  if (e.target.classList.contains('activado')) {
    console.log('si')
    alerta.classList.add('alertaSeleccionada')
  }else{
    return
  }
}


botonContinuar.addEventListener('click', e => {
    devolverAlerta(e);
    e.preventDefault();
})



function devolverAlerta(e) {
    alerta.classList.remove('alertaSeleccionada')
    botonComprobar.classList.remove('activado')
    textoBotonComprobar.classList.remove('activado')
    checkbox.checked = false
    imgCheckbox.checked = false
    
}

