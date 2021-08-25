let checkbox1 = document.getElementById('input1')
let checkbox2 = document.getElementById('input2')
let checkbox3 = document.getElementById('input3')
let botonComprobar = document.querySelector('.btn-comprobar');
let textoBotonComprobar = document.getElementById('texto-boton')
let botonContinuar = document.querySelector('.btn-continuar');
let alerta = document.querySelector('.alerta')
let imgCheckbox1 = document.getElementById('img1')
let imgCheckbox2 = document.getElementById('img2')
let imgCheckbox3 = document.getElementById('img3')

checkbox1.addEventListener("change", validaCheckbox, false);
checkbox2.addEventListener("change", validaCheckbox2, false);
checkbox3.addEventListener("change", validaCheckbox3, false);

console.log(checkbox2)

function validaCheckbox() {
  var checked = checkbox1.checked;
  if (checked && checkbox1.value === 'true') {
    console.log('checkbox1 esta seleccionado');
    botonComprobar.classList.add('verdadero')
    textoBotonComprobar.classList.add('verdadero')
    document.getElementById('labelInput1').classList = 'inputVerdadero'
  } else if (checked && checkbox1.value === 'false') {
    console.log('checkbox1 esta seleccionado');
    botonComprobar.classList.add('falso')
    textoBotonComprobar.classList.add('falso')
    document.getElementById('labelInput1').classList = 'inputFalso'
  } else {
    console.log('no lo esta')
    botonComprobar.classList.remove('verdadero')
    textoBotonComprobar.classList.remove('verdadero')
    document.getElementById('labelInput1').classList = 'input'
  }
}

function validaCheckbox2() {
  var checked = checkbox2.checked;
  if (checked && checkbox2.value === 'true') {
    console.log('checkbox2 esta seleccionado');
    botonComprobar.classList.add('verdadero')
    textoBotonComprobar.classList.add('verdadero')
    document.getElementById('labelInput2').classList = 'inputVerdadero'
  } else if (checked && checkbox2.value === 'false') {
    console.log('checkbox2 esta seleccionado');
    botonComprobar.classList.add('falso')
    textoBotonComprobar.classList.add('falso')
    document.getElementById('labelInput2').classList = 'inputFalso'
  } else {
    console.log('no lo esta')
    botonComprobar.classList.remove('verdadero')
    textoBotonComprobar.classList.remove('verdadero')
    botonComprobar.classList.remove('falso')
    textoBotonComprobar.classList.remove('falso')
    document.getElementById('labelInput2').classList = 'input'
  }
}
function validaCheckbox3() {
  var checked = checkbox3.checked;
  if (checked && checkbox3.value === 'true') {
    console.log('checkbox3 esta seleccionado');
    botonComprobar.classList.add('verdadero')
    textoBotonComprobar.classList.add('verdadero')
    document.getElementById('labelInput3').classList = 'inputVerdadero'
  } else if (checked && checkbox3.value === 'false') {
    console.log('checkbox3 esta seleccionado');
    botonComprobar.classList.add('falso')
    textoBotonComprobar.classList.add('falso')
    document.getElementById('labelInput3').classList = 'inputFalso'
  } else {
    console.log('no lo esta')
    botonComprobar.classList.remove('verdadero')
    textoBotonComprobar.classList.remove('verdadero')
    document.getElementById('labelInput3').classList = 'input'

  }
}



botonComprobar.addEventListener('click', e => {
  agregarAlerta(e);
  e.preventDefault();
  
})

function agregarAlerta(e) {
  // alerta.classList.add('alertaSeleccionada')
  if (e.target.classList.contains('verdadero')) {
    console.log('si')
    alerta.classList.add('alertaVerdadera')
  }else if(e.target.classList.contains('falso')){
    alerta.classList.remove('alert-success')
    alerta.classList.add('alert-danger')
    alerta.classList.add('alertaFalsa')
    document.getElementById('texto-alert').textContent = 'La respuesta correcta es'
    document.getElementById('texto-sec-alert').textContent = 'main'
    document.querySelector('.btn-continuar').classList.add('btn-danger')
    document.querySelector('.btn-continuar').style.backgroundColor = 'none'
    console.log(alerta)
  } 
  else {
    return
  }
}

botonContinuar.addEventListener('click', e => {
  devolverAlerta(e);
  e.preventDefault();
  console.log(e.target)
})

function devolverAlerta(e) {
  alerta.classList.remove('alertaVerdadera')
  alerta.classList.remove('alertaFalsa')
  botonComprobar.classList.remove('verdadero')
  textoBotonComprobar.classList.remove('verdadero')
  checkbox1.checked = false
  checkbox2.checked = false
  checkbox3.checked = false
  imgCheckbox1.checked = false
  imgCheckbox2.checked = false
  imgCheckbox3.checked = false
  document.getElementById('labelInput1').classList = 'input'
  document.getElementById('labelInput2').classList = 'input'
  document.getElementById('labelInput3').classList = 'input'

}