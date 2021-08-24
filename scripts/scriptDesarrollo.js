let botonComprobar = document.querySelector('.btn-comprobar');
let botonContinuar = document.querySelector('.btn-continuar');
let alerta = document.querySelector('.alerta')


botonComprobar.addEventListener('click', e => {
    agregarAlerta(e);
    e.preventDefault();
    
})



function agregarAlerta(e) {
    alerta.classList.add('alertaSeleccionada')
}
botonContinuar.addEventListener('click', e => {
    devolverAlerta(e);
    e.preventDefault();
    
})



function devolverAlerta(e) {
    alerta.classList.remove('alertaSeleccionada')
}