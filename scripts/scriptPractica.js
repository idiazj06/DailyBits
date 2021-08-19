const navegacion = document.getElementById('navegacion')
const logoHomeIcono = document.querySelector('.path-logo-home-icono')
const textoHomeIcono = document.querySelector('.path-logo-home-letras')

console.log(navegacion)
console.log(logoHomeIcono)
console.log(textoHomeIcono)

navegacion.addEventListener('click',e=>{
    cambiarFill(e)
})

const cambiarFill = e=>{
    console.log(e.target/* .classList.contains('logo') */)
    console.log(e.target.classList.contains('logo'))
    if ((e.target.classList.contains('logo'))){
        logoHomeIcono.classList.remove('inactivo') 
        textoHomeIcono.classList.remove('inactivo')
        logoHomeIcono.classList.add('activo') 
        textoHomeIcono.classList.add('activo')
    }
}