const contenedor = document.getElementById('container')
const colores = ["#e74c3c", "#8e44ad", "#3498db", "#2ecc71"]
const cuadraditos = 500;




for (let index = 0; index < cuadraditos; index++) {
    let colorRandom = Math.floor(Math.random()*4);
    const square = document.createElement('div')
    square.classList.add('cuadrado')

    square.addEventListener("mouseover", () => {
        square.style.background = colores[colorRandom]
        square.style.transition = ".1s"
    })

    square.addEventListener("mouseout", () => {
        square.style.background = "grey"
        square.style.transition = "5s"
    })

    square.addEventListener('touchmove', () => {
        square.style.background = colores[colorRandom]
        square.style.transition = ".1s"
    })

    square.addEventListener('touchend', () => {
        square.style.background = "grey"
        square.style.transition = "5s"
    })

    contenedor.appendChild(square)

}

