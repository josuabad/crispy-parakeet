const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Usando el array de hexadecimales proporcionado, crea un color hexadecimal aleatorio
const btn = document.getElementById("btn");
const colorSpan = document.querySelector(".color");

function getRandomHexColor() {
	let hexColor = "#";
	for (let i = 0; i < 6; i++) {  // Controlamos la longitud de la combinación
		hexColor += hex[Math.floor(Math.random() * hex.length)];
	}
	return hexColor;
}

btn.addEventListener("click", () =>{
	let color = getRandomHexColor();
	document.body.style.backgroundColor = color;
	colorSpan.textContent = color;
});
