const circle1 = document.querySelector('.progress-circle');
const circle2 = document.querySelector('.progress-circle2');
const circle3 = document.querySelector('.progress-circle3');
const circle4 = document.querySelector('.progress-circle4');
const circle5 = document.querySelector('.progress-circle5');
const circunferencia1 = circle1.getTotalLength();
const circunferencia2 = circle1.getTotalLength();
const circunferencia3 = circle3.getTotalLength();
const circunferencia4 = circle4.getTotalLength();
const circunferencia5 = circle5.getTotalLength();
const progresoCont = JSON.parse(localStorage.getItem('progreso'))
const progresoAct = progresoCont
const URL_Estadisticas = 'http://localhost:5000/usuarios/1'





document.addEventListener('DOMContentLoaded', async (e) => {
    e.preventDefault();
    // actualizarProgreso()
    let resp = await fetch(URL_Estadisticas)
    let data = await resp.json();

    actualizarProgreso(data.progreso)
})

const actualizarProgreso = (data) => {
    console.log(data)

    if (data == 0) {
        circle1.style.strokeDashoffset = circunferencia1
        circle2.style.strokeDashoffset = circunferencia2
        circle3.style.strokeDashoffset = circunferencia3
        circle4.style.strokeDashoffset = circunferencia4
        circle5.style.strokeDashoffset = circunferencia5
    } else {
        if (data === undefined) {
            circle1.style.strokeDashoffset = circunferencia1
            circle2.style.strokeDashoffset = circunferencia2
            circle3.style.strokeDashoffset = circunferencia3
            circle4.style.strokeDashoffset = circunferencia4
            circle5.style.strokeDashoffset = circunferencia5
        } else {
            circle1.style.strokeDashoffset = data - (progresoAct / 100) * circunferencia1
            circle2.style.strokeDashoffset = data - (progresoAct / 100) * circunferencia2
            circle3.style.strokeDashoffset = data - (progresoAct / 100) * circunferencia3
            circle4.style.strokeDashoffset = circunferencia4
            circle5.style.strokeDashoffset = circunferencia5
        }
    }

}