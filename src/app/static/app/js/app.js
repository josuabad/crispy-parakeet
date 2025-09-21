const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Utilizando el array de colores proporcionado, cambia el fondo y muestra el color
const btn = document.getElementById("btn");
const colorSpan = document.querySelector(".color");

let current = 0;
btn.addEventListener("click", () => {
    current = (current + 1) % colors.length;
    let color = colors[current];
    document.body.style.backgroundColor = color;
    colorSpan.textContent = color;
});
