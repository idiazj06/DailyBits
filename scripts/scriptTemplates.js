const main = document.getElementById('principal')
const footer = document.getElementById('piePagina')
const templateMain = document.getElementById('template-main').content
const templateFooter = document.getElementById('template-footer').content
const fragment = document.createDocumentFragment()
const barraVidas = document.getElementById('barra-vidas')
const vidas = document.getElementById('vidas')
const botonComprobar = document.querySelector('.btn-comprobar');
const alerta = document.getElementById('alertaModal')
const botonContinuar = document.querySelector('.btn-alerta');
let vidasCont = JSON.parse(localStorage.getItem('vidas'))
let progresoCont = JSON.parse(localStorage.getItem('progreso'))



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
    }else{
        vidas.textContent = vidasCont
    }

    
    // pintarProgreso()
})



const fetchData = async () => {
    try {
        const res = await fetch('./data/data.json')
        const data = await res.json()
        const dataHtml = [data.html]

        console.log([data][0])
        console.log(dataHtml)
        getRandom(dataHtml)

    } catch (error) {
        console.log(error)

    }
}

const getRandom = data => {
    data.forEach(datos => {

        const newArray = [datos.pregunta1, datos.pregunta2, datos.pregunta3]

        console.log(newArray[0])

        let random = Math.floor(Math.random() * newArray.length)
        let dataPintar = newArray[random]


        pintarMain(dataPintar)
        capturarCheck(dataPintar)


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

    document.getElementById('character').setAttribute('src', imagen)
    document.getElementById('texto-principal').textContent = pregunta
    document.querySelectorAll('.opciones')[0].textContent = opcion1.dato
    document.querySelectorAll('.opciones')[1].textContent = opcion2.dato
    document.querySelectorAll('.opciones')[2].textContent = opcion3.dato
    document.querySelectorAll('.opciones')[0].setAttribute('id', opcion1.valor)
    document.querySelectorAll('.opciones')[1].setAttribute('id', opcion2.valor)
    document.querySelectorAll('.opciones')[2].setAttribute('id', opcion3.valor)




}

const capturarCheck = data => {
    const {
        opcion1,
        opcion2,
        opcion3
    } = data
    console.log(opcion1, opcion2, opcion3)

    let checkbox1 = document.getElementById('input1')
    let checkbox2 = document.getElementById('input2')
    let checkbox3 = document.getElementById('input3')

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
        } else {
            checkbox1.classList = 'falso'
        }
    }

    function validaCheckbox2() {
        let seleccionado = checkbox2.checked

        if (seleccionado) {
            console.log('esta check')
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
        } else {
            checkbox2.classList = 'falso'
        }
    }

    function validaCheckbox3() {
        let seleccionado = checkbox3.checked

        if (seleccionado) {
            console.log('esta check')
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
        } else {
            checkbox3.classList = 'falso'
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

    document.getElementById('texto-alert').textContent = 'La respuesta correcta es'
    document.getElementById('texto-sec-alert').textContent = respCorrecta
    document.querySelector('.btn-continuar').classList.add('btn-danger')
    document.querySelector('.btn-continuar').style.backgroundColor = 'none'
}

const sumarBarraProgress = () => {
    // MIENTRAS TANTO
    let calculoProgreso = 100 / 3
    barraVidas.style.width = `${calculoProgreso}%`

    localStorage.setItem('progreso', JSON.stringify(barraVidas.style.width))
   
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
    console.log(vidas)

    


}



console.log(vidas)