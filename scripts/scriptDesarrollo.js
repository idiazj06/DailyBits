document.addEventListener('DOMContentLoaded', () => {
    fetchData();

})

const fetchData = async () => {
    try {
        const res = await fetch('http://localhost:4000/html/')
        const data = await res.json()
        console.log(data)
        pintarCards(data)
    } catch (error) {
        console.log(error)

    }
}


const pintarCards = data => {
    console.log(data)

    let imagen = data.pregunta1.imagen
    let pregunta = data.pregunta1.pregunta
    let opcion1 = data.pregunta1.opcion1
    let opcion2 = data.pregunta1.opcion2
    let opcion3 = data.pregunta1.opcion3
    let input1 = document.getElementById('input1')
    let input2 = document.getElementById('input2')
    let input3 = document.getElementById('input3')
    console.log(opcion1.valor, opcion2.valor, opcion3.valor)


    document.getElementById('character-joven').setAttribute('src', imagen)
    document.getElementById('texto-principal').textContent = pregunta
    document.getElementById('opcion1').textContent = opcion1.dato
    document.getElementById('opcion2').textContent = opcion2.dato
    document.getElementById('opcion3').textContent = opcion3.dato
    input1.value = opcion1.valor
    input2.value = opcion2.valor
    input3.value = opcion3.valor
    console.log(input1.value, input2.value, input3.value)

    if (input1.value === "true") {
        document.getElementById('input1').classList = 'verdadero'

    } else {
        document.getElementById('input1').classList = 'falso'
    }
    if (input2.value === "true") {
        document.getElementById('input2').classList = 'verdadero'

    } else {
        document.getElementById('input2').classList = 'falso'
    }
    if (input3.value === "true") {
        document.getElementById('input3').classList = 'verdadero'

    } else {
        document.getElementById('input3').classList = 'falso'
    }


}