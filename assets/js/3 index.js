let element = document.getElementById("ele1");

//declarar la función...
function pintar(color = "green") {
    element.style.backgroundColor = color;
}
//llamar a la función...
pintar();
//llarma la fx con evento...
element.addEventListener("click", () => pintar('yellow'));