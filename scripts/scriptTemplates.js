const main = document.getElementById('principal')
const footer = document.getElementById('piePagina')
const templateMain = document.getElementById('template-main').content
const templateMain2 = document.getElementById('template-main2').content
const fragment = document.createDocumentFragment()
const barraVidas = document.getElementById('barra-vidas')
const vidas = document.getElementById('vidas')
const botonComprobar = document.querySelector('.btn-comprobar');
const alerta = document.getElementById('alertaModal')
const botonContinuar = document.querySelector('.btn-alerta');
let vidasCont = JSON.parse(localStorage.getItem('vidas'))
let progresoCont = JSON.parse(localStorage.getItem('progreso'))
let newArray = ''
let arrReturn = JSON.parse(localStorage.getItem('aleatorias'))
let random = ''



// barraVidas.style.width = '0%'
// vidas.textContent = 5
// barraVidas.style.width = contadores[1]
// vidas.textContent = Number(contadores[0])

/* //CCAMBIO DE ESTILOS BARRA DE VIDAS
barraVidas.style.width = '5%' */


/* //CAMBIO DE VIDAS
vidas.textContent = '3' */



document.addEventListener('DOMContentLoaded', () => {

    fetchData()

    if (vidasCont === null) {
        vidas.textContent = 5
    } else {
        vidas.textContent = vidasCont
    }
    if (progresoCont === null) {
        barraVidas.style.width = '0%'
    } else {
        barraVidas.style.width = `${progresoCont}%`
    }

    console.log(arrReturn)
    console.log(JSON.parse(localStorage.getItem('aleatorias')))




    // pintarProgreso()
})



const fetchData = async () => {
    try {
        const res = await fetch('./data/data.json')
        const data = await res.json()
        const dataHtml = [data.html]

        getRandom(dataHtml)

    } catch (error) {
        console.log(error)

    }
}


const getRandom = data => {
    data.forEach(datos => {


        newArray = [datos.pregunta1, datos.pregunta2, datos.pregunta3, datos.pregunta4]
        console.log(newArray);
        console.log(arrReturn)



        if (arrReturn === null) {
            random = Math.floor(Math.random() * newArray.length)
            console.log(newArray.length)
            let dataPintar = newArray[random]
            console.log(random)
            if (random < 3) {
                pintarMain(dataPintar)
                capturarCheck(dataPintar)
            }else{
                pintarMain2(dataPintar)
                capturarCheck2(dataPintar)
            }
        } else {
            random = Math.floor(Math.random() * arrReturn.length)
            console.log(arrReturn.length)
            let dataPintar = arrReturn[random]
            
            console.log(datos.pregunta4)
            console.log(arrReturn)
            if(datos.pregunta4 = arrReturn[0]){
                pintarMain2(dataPintar)
                capturarCheck2(dataPintar)
            }else{
                pintarMain(dataPintar)
                capturarCheck(dataPintar)
            }
        }

    })
}


const pintarMain = data => {


    const {
        pregunta,
        imagen,
        opcion1,
        opcion2,
        opcion3
    } = data

    templateMain.getElementById('character').setAttribute('src', imagen)
    templateMain.getElementById('texto-principal').textContent = pregunta
    templateMain.querySelectorAll('.opciones')[0].textContent = opcion1.dato
    templateMain.querySelectorAll('.opciones')[1].textContent = opcion2.dato
    templateMain.querySelectorAll('.opciones')[2].textContent = opcion3.dato
    templateMain.querySelectorAll('.opciones')[0].setAttribute('id', opcion1.valor)
    templateMain.querySelectorAll('.opciones')[1].setAttribute('id', opcion2.valor)
    templateMain.querySelectorAll('.opciones')[2].setAttribute('id', opcion3.valor)

    fragment.appendChild(templateMain)
    main.appendChild(fragment)
}

const capturarCheck = data => {
    const {
        opcion1,
        opcion2,
        opcion3
    } = data
    // console.log(opcion1, opcion2, opcion3)

    let checkbox1 = document.getElementById('input1')
    let checkbox2 = document.getElementById('input2')
    let checkbox3 = document.getElementById('input3')
    let labelInput1 = document.getElementById('labelInput1')
    let labelInput2 = document.getElementById('labelInput2')
    let labelInput3 = document.getElementById('labelInput3')



    checkbox1.value = opcion1.valor
    checkbox2.value = opcion2.valor
    checkbox3.value = opcion3.valor




    checkbox1.addEventListener("change", validaCheckbox1, false);
    checkbox2.addEventListener("change", validaCheckbox2, false);
    checkbox3.addEventListener("change", validaCheckbox3, false);

    function validaCheckbox1() {
        let seleccionado = checkbox1.checked

        if (seleccionado) {
            console.log('esta check')
            labelInput2.classList.remove('inputVerdadero')
            labelInput2.classList.remove('inputFalso')
            labelInput3.classList.remove('inputVerdadero')
            labelInput3.classList.remove('inputFalso')
            checkbox2.checked = false
            checkbox3.checked = false
            checkbox1.value = opcion1.valor
            checkbox2.value = 'empty'
            checkbox3.value = 'empty'
            checkbox1.classList = 'verdadero'
            botonComprobar.removeAttribute("disabled", "")
        } else {
            console.log('no lo esta')
            botonComprobar.setAttribute("disabled", "")
        }

        pintarCheck1()

    }

    const pintarCheck1 = () => {
        if (checkbox1.value === 'true') {
            checkbox1.classList = 'verdadero'
            labelInput1.classList.add('inputVerdadero')

        } else {
            checkbox1.classList = 'falso'
            labelInput1.classList.add('inputFalso')
        }
    }

    function validaCheckbox2() {
        let seleccionado = checkbox2.checked

        if (seleccionado) {
            console.log('esta check')
            labelInput1.classList.remove('inputVerdadero')
            labelInput1.classList.remove('inputFalso')
            labelInput3.classList.remove('inputVerdadero')
            labelInput3.classList.remove('inputFalso')
            checkbox1.checked = false
            checkbox3.checked = false
            checkbox1.value = 'empty'
            checkbox2.value = opcion2.valor
            checkbox3.value = 'empty'
            checkbox2.classList = 'verdadero'
            botonComprobar.removeAttribute("disabled", "")
        } else {
            console.log('no lo esta')
            botonComprobar.setAttribute("disabled", "")

        }
        pintarCheck2()
    }

    const pintarCheck2 = () => {
        if (checkbox2.value === 'true') {
            checkbox2.classList = 'verdadero'
            labelInput2.classList.add('inputVerdadero')
        } else {
            checkbox2.classList = 'falso'
            labelInput2.classList.add('inputFalso')
        }
    }

    function validaCheckbox3() {
        let seleccionado = checkbox3.checked

        if (seleccionado) {
            console.log('esta check')
            labelInput1.classList.remove('inputVerdadero')
            labelInput1.classList.remove('inputFalso')
            labelInput2.classList.remove('inputVerdadero')
            labelInput2.classList.remove('inputFalso')
            checkbox1.checked = false
            checkbox2.checked = false
            checkbox1.value = 'empty'
            checkbox2.value = 'empty'
            checkbox3.classList = 'verdadero'
            checkbox3.value = opcion3.valor
            botonComprobar.removeAttribute("disabled", "")
        } else {
            console.log('no lo esta')
            botonComprobar.setAttribute("disabled", "")
        }
        pintarCheck3()
    }

    const pintarCheck3 = () => {
        if (checkbox3.value === 'true') {
            checkbox3.classList = 'verdadero'
            labelInput3.classList.add('inputVerdadero')
        } else {
            checkbox3.classList = 'falso'
            labelInput3.classList.add('inputFalso')
        }
    }

}


botonComprobar.addEventListener('click', e => {
    e.preventDefault()
    pintarAlerta()

    console.log(e.target)
})


const pintarAlerta = () => {
    let checkbox1 = document.getElementById('input1')
    let checkbox2 = document.getElementById('input2')
    let checkbox3 = document.getElementById('input3')
    let seleccionado1 = checkbox1.checked


    if (checkbox1.value === 'true' || checkbox2.value === 'true' || checkbox3.value === 'true') {
        agregarAlertaVerdadera()
        sumarBarraProgress()
    } else if (checkbox1.value !== 'true' || checkbox2.value !== 'true' || checkbox3.value !== 'true') {
        agregarAlertaFalsa()
        restarVidas()
    }

}

const pintarMain2 = data => {


    const {
        pregunta,
        imagen,
        opcion1,
        opcion2,
        opcion3,
        opcion4
    } = data

    console.log(opcion1.dato.texto)
    templateMain2.getElementById('img-entrada-1').setAttribute('src', opcion1.dato.imagen)
    templateMain2.getElementById('img-entrada-2').setAttribute('src', opcion2.dato.imagen)
    templateMain2.getElementById('img-entrada-3').setAttribute('src', opcion3.dato.imagen)
    templateMain2.getElementById('img-entrada-4').setAttribute('src', opcion4.dato.imagen)
    templateMain2.querySelectorAll('.opciones')[0].setAttribute('id', opcion1.valor)
    templateMain2.querySelectorAll('.opciones')[1].setAttribute('id', opcion2.valor)
    templateMain2.querySelectorAll('.opciones')[2].setAttribute('id', opcion3.valor)
    templateMain2.querySelectorAll('.opciones')[3].setAttribute('id', opcion4.valor)



    fragment.appendChild(templateMain2)
    main.appendChild(fragment)

}
    

const capturarCheck2 = data => {
    const {
        opcion1,
        opcion2,
        opcion3,
        opcion4
    } = data
    console.log(opcion1.valor, opcion2.valor, opcion3.valor,opcion4.valor)

    let checkbox1 = document.getElementById('entrada-input-1')
    let checkbox2 = document.getElementById('entrada-input-2')
    let checkbox3 = document.getElementById('entrada-input-3')
    let checkbox4 = document.getElementById('entrada-input-4')
    let labelEntrada1 = document.getElementById('labelEntrada1')
    let labelEntrada2 = document.getElementById('labelEntrada2')
    let labelEntrada3 = document.getElementById('labelEntrada3')
    let labelEntrada4 = document.getElementById('labelEntrada4')

    console.log(checkbox1)
    checkbox1.value = opcion1.valor
    checkbox2.value = opcion2.valor
    checkbox3.value = opcion3.valor
    checkbox4.value = opcion4.valor

    
    




    checkbox1.addEventListener("change", validaCheckbox1, false);
    checkbox2.addEventListener("change", validaCheckbox2, false);
    checkbox3.addEventListener("change", validaCheckbox3, false);
    checkbox4.addEventListener("change", validaCheckbox4, false);

    function validaCheckbox1() {
        let seleccionado = checkbox1.checked

        if (seleccionado) {
            console.log('esta check')
            labelEntrada2.classList.remove('inputVerdadero')
            labelEntrada2.classList.remove('inputFalso')
            labelEntrada3.classList.remove('inputVerdadero')
            labelEntrada3.classList.remove('inputFalso')
            labelEntrada4.classList.remove('inputVerdadero')
            labelEntrada4.classList.remove('inputFalso')
            checkbox2.checked = false
            checkbox3.checked = false
            checkbox4.checked = false
            checkbox1.value = opcion1.valor
            checkbox2.value = 'empty'
            checkbox3.value = 'empty'
            checkbox4.value = 'empty'
            checkbox1.classList = 'verdadero'
            botonComprobar.removeAttribute("disabled", "")
        } else {
            console.log('no lo esta')
            botonComprobar.setAttribute("disabled", "")
        }

        pintarCheck1()

    }

    const pintarCheck1 = () => {
        if (checkbox1.value === 'true') {
            checkbox1.classList = 'verdadero'
            labelEntrada1.classList.add('inputVerdadero')

        } else {
            checkbox1.classList = 'falso'
            labelEntrada1.classList.add('inputFalso')
        }
    }

    function validaCheckbox2() {
        let seleccionado = checkbox2.checked

        if (seleccionado) {
            console.log('esta check')
            labelEntrada1.classList.remove('inputVerdadero')
            labelEntrada1.classList.remove('inputFalso')
            labelEntrada3.classList.remove('inputVerdadero')
            labelEntrada3.classList.remove('inputFalso')
            labelEntrada4.classList.remove('inputVerdadero')
            labelEntrada4.classList.remove('inputFalso')
            checkbox1.checked = false
            checkbox3.checked = false
            checkbox4.checked = false
            checkbox1.value = 'empty'
            checkbox2.value = opcion2.valor
            checkbox3.value = 'empty'
            checkbox4.value = 'empty'
            checkbox2.classList = 'verdadero'
            botonComprobar.removeAttribute("disabled", "")
        } else {
            console.log('no lo esta')
            botonComprobar.setAttribute("disabled", "")

        }
        pintarCheck2()
    }

    const pintarCheck2 = () => {
        if (checkbox2.value === 'true') {
            checkbox2.classList = 'verdadero'
            labelEntrada2.classList.add('inputVerdadero')
        } else {
            checkbox2.classList = 'falso'
            labelEntrada2.classList.add('inputFalso')
        }
    }

    function validaCheckbox3() {
        let seleccionado = checkbox3.checked

        if (seleccionado) {
            console.log('esta check')
            labelEntrada1.classList.remove('inputVerdadero')
            labelEntrada1.classList.remove('inputFalso')
            labelEntrada2.classList.remove('inputVerdadero')
            labelEntrada2.classList.remove('inputFalso')
            labelEntrada4.classList.remove('inputVerdadero')
            labelEntrada4.classList.remove('inputFalso')
            checkbox1.checked = false
            checkbox2.checked = false
            checkbox4.checked = false
            checkbox1.value = 'empty'
            checkbox2.value = 'empty'
            checkbox4.value = 'empty'
            checkbox3.classList = 'verdadero'
            checkbox3.value = opcion3.valor
            botonComprobar.removeAttribute("disabled", "")
        } else {
            console.log('no lo esta')
            botonComprobar.setAttribute("disabled", "")
        }
        pintarCheck3()
    }

    const pintarCheck3 = () => {
        if (checkbox3.value === 'true') {
            checkbox3.classList = 'verdadero'
            labelEntrada3.classList.add('inputVerdadero')
        } else {
            checkbox3.classList = 'falso'
            labelEntrada3.classList.add('inputFalso')
        }
    }

    function validaCheckbox4() {
        let seleccionado = checkbox4.checked

        if (seleccionado) {
            console.log('esta check')
            labelEntrada1.classList.remove('inputVerdadero')
            labelEntrada1.classList.remove('inputFalso')
            labelEntrada2.classList.remove('inputVerdadero')
            labelEntrada2.classList.remove('inputFalso')
            labelEntrada3.classList.remove('inputVerdadero')
            labelEntrada3.classList.remove('inputFalso')
            checkbox1.checked = false
            checkbox2.checked = false
            checkbox3.checked = false
            checkbox1.value = 'empty'
            checkbox2.value = 'empty'
            checkbox3.value = 'empty'
            checkbox4.classList = 'verdadero'
            checkbox4.value = opcion4.valor
            botonComprobar.removeAttribute("disabled", "")
        } else {
            console.log('no lo esta')
            botonComprobar.setAttribute("disabled", "")
        }
        pintarCheck4()
    }

    const pintarCheck4 = () => {
        if (checkbox4.value === 'true') {
            checkbox4.classList = 'verdadero'
            labelEntrada4.classList.add('inputVerdadero')
        } else {
            checkbox4.classList = 'falso'
            labelEntrada4.classList.add('inputFalso')
        }
    }

}


botonComprobar.addEventListener('click', e => {
    e.preventDefault()
    pintarAlerta2()

    console.log(e.target)
})


const pintarAlerta2 = () => {
    let checkbox1 = document.getElementById('entrada-input-1')
    let checkbox2 = document.getElementById('entrada-input-2')
    let checkbox3 = document.getElementById('entrada-input-3')
    let checkbox4 = document.getElementById('entrada-input-4')
    


    if (checkbox1.value === 'true' || checkbox2.value === 'true' || checkbox3.value === 'true'||checkbox4.value === 'true') {
        agregarAlertaVerdadera()
        sumarBarraProgress()
    } else if (checkbox1.value !== 'true' || checkbox2.value !== 'true' || checkbox3.value !== 'true'||checkbox4.value === 'true') {
        agregarAlertaFalsa()
        restarVidas()
    }

}


const agregarAlertaVerdadera = () => {
    botonComprobar.setAttribute("disabled", "")
    alerta.classList.add('alertaVerdadera')
}
const agregarAlertaFalsa = () => {
    botonComprobar.setAttribute("disabled", "")
    console.log(document.getElementById('true').textContent)
    let respCorrecta = document.getElementById('true').textContent

    alerta.classList.remove('alert-success')
    alerta.classList.add('alert-danger')
    alerta.classList.add('alertaFalsa')

    document.getElementById('texto-alert').textContent = 'La respuesta correcta es:'
    document.getElementById('texto-sec-alert').textContent = respCorrecta
    document.querySelector('.btn-continuar').classList.add('btn-danger')
    document.querySelector('.btn-continuar').style.backgroundColor = 'none'
}

const sumarBarraProgress = () => {
    // MIENTRAS TANTO
    let calculoProgreso = 100 / 3

    console.log(calculoProgreso)
    console.log(progresoCont)

    if (progresoCont === null) {
        progresoCont = 0
    }

    let porcActual = calculoProgreso + progresoCont

    if (porcActual >= 100) {
        porcActual = 100
    }


    barraVidas.style.width = `${porcActual}%`
    localStorage.setItem('progreso', JSON.stringify(porcActual))

}

const restarVidas = () => {
    vidas.textContent = Number(vidas.textContent) - 1

    localStorage.setItem('vidas', JSON.stringify(Number(vidas.textContent)))
}

botonContinuar.addEventListener('click', e => {
    devolverAlerta(e);
    e.preventDefault();
    console.log(e.target)
})

function devolverAlerta(e) {
    let checkbox1 = document.getElementById('input1')
    let checkbox2 = document.getElementById('input2')
    let checkbox3 = document.getElementById('input3')

    alerta.classList.remove('alertaVerdadera')
    alerta.classList.remove('alertaFalsa')
    checkbox1.checked = false
    checkbox2.checked = false
    checkbox3.checked = false


    location.reload()


    validar()


}

function validar() {

    console.log(random)
    console.log(newArray)

    if (arrReturn === null) {
        console.log('esta vacio')
        newArray.splice(random, 1)
        localStorage.setItem('aleatorias', JSON.stringify(newArray));
    } else {
        arrReturn.splice(random, 1)
        localStorage.setItem('aleatorias', JSON.stringify(arrReturn));
    }

}