let checkbox = document.getElementById('input')



checkbox.addEventListener("change", validaCheckbox, false);
function validaCheckbox()
{
  var checked = checkbox.checked;
  if(checked){
    console.log('checkbox1 esta seleccionado');
  }else{
      console.log('no lo esta')
  }
}