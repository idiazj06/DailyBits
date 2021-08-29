let random = ''
let dataDownload = JSON.parse(localStorage.getItem('dataDownload'))
let arrayData = ''
let dataLength = ''
const main = document.getElementById('principal')
const footer = document.getElementById('piePagina')
const template1 = document.getElementById('template-main').content
const template2 = document.getElementById('template-main2').content
const fragment = document.createDocumentFragment()
const botonComprobar = document.querySelector('.btn-comprobar');
const alerta = document.getElementById('alertaModal')
const botonContinuar = document.querySelector('.btn-alerta');
let vidasCont = JSON.parse(localStorage.getItem('vidas'))
let progresoCont = JSON.parse(localStorage.getItem('progreso'))
const barraVidas = document.getElementById('barra-vidas')
const vidas = document.getElementById('vidas')

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
})

const fetchData = async () => {
    try {
        const res = await fetch('http://localhost:4000/html')
        const data = await res.json()
        dataLength = data.length
        getRandom(data)
    } catch (error) {
        console.log(error)
    }
}

const getRandom = data => {

    if (dataDownload === null) {
        console.log('local random esta vacio - empieza desde cero')
        arrayData = data
        random = Math.floor(Math.random() * data.length)
        let dataPintar = data[random]

        if (random === 0 || random === 1 || random === 2) {
            pintarData1(dataPintar)
        } else {
            pintarData2(dataPintar)
        }
    } else {
        console.log('local tiene algo - modifica data y random desde ahi')
        arrayData = dataDownload
        random = Math.floor(Math.random() * arrayData.length)
        let dataPintar = arrayData[random]
        if (dataPintar.id === 'pregunta1' || dataPintar.id === 'pregunta2' || dataPintar.id === 'pregunta3') {
            console.log('es de las primeras 3')
            pintarData1(dataPintar)
        } else {
            console.log('es la 4')
            pintarData2(dataPintar)
        }
    }
}

const pintarData1 = data => {
    const {
        id,
        pregunta,
        imagen,
        opcion1,
        opcion2,
        opcion3
    } = data;

    template1.getElementById('character').setAttribute('src', imagen)
    template1.getElementById('texto-principal').textContent = pregunta
    template1.getElementById('texto-principal').dataset.id = id
    template1.querySelectorAll('.opciones')[0].textContent = opcion1.dato
    template1.querySelectorAll('.opciones')[1].textContent = opcion2.dato
    template1.querySelectorAll('.opciones')[2].textContent = opcion3.dato
    template1.querySelectorAll('.opciones')[0].setAttribute('id', opcion1.valor)
    template1.querySelectorAll('.opciones')[1].setAttribute('id', opcion2.valor)
    template1.querySelectorAll('.opciones')[2].setAttribute('id', opcion3.valor)

    fragment.appendChild(template1)
    main.appendChild(fragment)

    pintarCheck1(data)
}


const pintarCheck1 = data => {
    const {
        opcion1,
        opcion2,
        opcion3
    } = data

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
        if (checkbox3.value === 'true') {
            checkbox3.classList = 'verdadero'
            labelInput3.classList.add('inputVerdadero')
        } else {
            checkbox3.classList = 'falso'
            labelInput3.classList.add('inputFalso')
        }
    }

    botonComprobar.addEventListener('click', e => {
        e.preventDefault()
        pintarAlerta()
        validar()
    })


    const pintarAlerta = () => {
        let checkbox1 = document.getElementById('input1')
        let checkbox2 = document.getElementById('input2')
        let checkbox3 = document.getElementById('input3')



        if (checkbox1.value === 'true' || checkbox2.value === 'true' || checkbox3.value === 'true') {
            agregarAlertaVerdadera()
            sumarBarraProgress()
            // sumarPreguntasCorrectas()
            // sumarPreguntasCorrectas()
        } else if (checkbox1.value !== 'true' || checkbox2.value !== 'true' || checkbox3.value !== 'true') {
            agregarAlertaFalsa()
            restarVidas()
            // sumarPreguntasIncorrectas()
            // sumarPreguntasIncorrectas()
        }

    }
    const agregarAlertaVerdadera = () => {
        botonComprobar.setAttribute("disabled", "")
        alerta.classList.add('alertaVerdadera')
    }
    const agregarAlertaFalsa = () => {
        botonComprobar.setAttribute("disabled", "")
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
        let calculoProgreso = 100 / 4

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
    }
}
const pintarData2 = data => {
    const {
        pregunta,
        imagen,
        opcion1,
        opcion2,
        opcion3,
        opcion4
    } = data

    template2.getElementById('texto-principal').textContent = pregunta
    template2.getElementById('img-entrada-1').setAttribute('src', opcion1.dato.imagen)
    template2.getElementById('img-entrada-2').setAttribute('src', opcion2.dato.imagen)
    template2.getElementById('img-entrada-3').setAttribute('src', opcion3.dato.imagen)
    template2.getElementById('img-entrada-4').setAttribute('src', opcion4.dato.imagen)
    template2.querySelectorAll('.opciones')[0].setAttribute('id', opcion1.valor)
    template2.querySelectorAll('.opciones')[1].setAttribute('id', opcion2.valor)
    template2.querySelectorAll('.opciones')[2].setAttribute('id', opcion3.valor)
    template2.querySelectorAll('.opciones')[3].setAttribute('id', opcion4.valor)

    fragment.appendChild(template2)
    main.appendChild(fragment)

    pintarCheck2(data)
}

const pintarCheck2 = data => {
    const {
        opcion1,
        opcion2,
        opcion3,
        opcion4
    } = data

    let checkbox1 = document.getElementById('entrada-input-1')
    let checkbox2 = document.getElementById('entrada-input-2')
    let checkbox3 = document.getElementById('entrada-input-3')
    let checkbox4 = document.getElementById('entrada-input-4')
    let labelEntrada1 = document.getElementById('labelEntrada1')
    let labelEntrada2 = document.getElementById('labelEntrada2')
    let labelEntrada3 = document.getElementById('labelEntrada3')
    let labelEntrada4 = document.getElementById('labelEntrada4')

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
        validar()
    })

    const pintarAlerta2 = () => {
        let checkbox1 = document.getElementById('entrada-input-1')
        let checkbox2 = document.getElementById('entrada-input-2')
        let checkbox3 = document.getElementById('entrada-input-3')
        let checkbox4 = document.getElementById('entrada-input-4')



        if (checkbox1.value === 'true' || checkbox2.value === 'true' || checkbox3.value === 'true' || checkbox4.value === 'true') {
            agregarAlertaVerdadera()
            sumarBarraProgress()
            // sumarPreguntasCorrectas()
        } else if (checkbox1.value !== 'true' || checkbox2.value !== 'true' || checkbox3.value !== 'true' || checkbox4.value === 'true') {
            agregarAlertaFalsa()
            restarVidas()
            // sumarPreguntasIncorrectas()
        }

    }

    const agregarAlertaVerdadera = () => {
        botonComprobar.setAttribute("disabled", "")
        alerta.classList.add('alertaVerdadera')
    }
    const agregarAlertaFalsa = () => {
        botonComprobar.setAttribute("disabled", "")
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
        let calculoProgreso = 100 / 4

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
    })

    function devolverAlerta(e) {
        let checkbox1 = document.getElementById('entrada-input-1')
        let checkbox2 = document.getElementById('entrada-input-2')
        let checkbox3 = document.getElementById('entrada-input-3')
        let checkbox4 = document.getElementById('entrada-input-4')

        alerta.classList.remove('alertaVerdadera')
        alerta.classList.remove('alertaFalsa')
        checkbox1.checked = false
        checkbox2.checked = false
        checkbox3.checked = false
        checkbox4.checked = false

        location.reload()

    }
}

function validar() {
    if (dataDownload === null) {
        console.log('esta vacio - se puede agregar')
        arrayData.splice(random, 1)
        localStorage.setItem('dataDownload', JSON.stringify(arrayData))
    } else {
        arrayData.splice(random, 1)
        localStorage.setItem('dataDownload', JSON.stringify(arrayData))
    }
}