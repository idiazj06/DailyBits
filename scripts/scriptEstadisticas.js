const URL_Estadisticas = 'http://localhost:5000/usuarios/1'
const preguntas_correctas = document.getElementById('correctas')
const preguntas_incorrectas = document.getElementById('incorrectas')
const preguntas_totales = document.getElementById('totales')






document.addEventListener('DOMContentLoaded', async(e) => {
    e.preventDefault();

    let resp = await fetch(URL_Estadisticas)
    let data = await resp.json();
    

    let totales = data.preguntasTotales
    let correctas = data.preguntasCorrectas
    let incorrectas = data.preguntasIncorrectas


    if(incorrectas === null){
        incorrectas = 0
    }

   

    preguntas_correctas.textContent = correctas
    preguntas_incorrectas.textContent = incorrectas
    preguntas_totales.textContent = totales


    
    
})
