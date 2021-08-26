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





document.addEventListener('DOMContentLoaded', e => {
    e.preventDefault();
    actualizarProgreso()
})

const actualizarProgreso = () => {
    if (progresoCont === null) {
        circle1.style.strokeDashoffset = circunferencia1
        circle2.style.strokeDashoffset = circunferencia2
        circle3.style.strokeDashoffset = circunferencia3
        circle4.style.strokeDashoffset = circunferencia4
        circle5.style.strokeDashoffset = circunferencia5
    } else {
        circle1.style.strokeDashoffset = circunferencia1 - (progresoAct / 100) * circunferencia1
        circle2.style.strokeDashoffset = circunferencia2 - (progresoAct / 100) * circunferencia2
        circle3.style.strokeDashoffset = circunferencia3 - (progresoAct / 100) * circunferencia3
        circle4.style.strokeDashoffset = circunferencia4 - (progresoAct / 100) * circunferencia4
        circle5.style.strokeDashoffset = circunferencia5 - (progresoAct / 100) * circunferencia5

    }

    console.log(circle1.style.strokeDashoffset)
    console.log(circle2.style.strokeDashoffset)
}