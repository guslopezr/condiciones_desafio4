let divcontainer = document.getElementById("container-divs");
let div1 = document.getElementById("color1");
let div2 = document.getElementById("color2");
let div3 = document.getElementById("color3");
let div4 = document.getElementById("color4");
let ghost1 = document.getElementById("ghost1");
let ghost2 = document.getElementById("ghost2");


document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        divcontainer.style.backgroundColor = "blue";
        /* Cambiar a color 1 */
    } else if (event.key === 's') {
        divcontainer.style.backgroundColor = "red"
            /* Cambiar a color 2 */
    } else if (event.key === 'd') {
        divcontainer.style.backgroundColor = "yellow"
            /* Cambiar a color 3 */
    } else {
        divcontainer.style.backgroundColor = "black"
            /* Cambiar a color 3 */
    }

})



function cambiarColor1() {
    if (cambiarColor1, div1) {
        div1.style.backgroundColor = "blue";
    } else { div1.style.backgroundColor = "white" }
}

function cambiarColor2() {
    if (cambiarColor2, div2) {
        div2.style.backgroundColor = "red";
    } else { div2.style.backgroundColor = "white" }
}

function cambiarColor3() {
    if (cambiarColor3, div3) {
        div3.style.backgroundColor = "yellow";
    } else { div3.style.backgroundColor = "white" }
}

function cambiarColor4() {
    if (cambiarColor4, div4) {
        div4.style.backgroundColor = "green";
    } else { div4.style.backgroundColor = "white" }
}

function limpiarColor() {
    if (limpiarColor, div1, div2, div3, div4, ghost1, ghost2) {
        div1.style.backgroundColor = "rgb(231, 231, 231)";
        div2.style.backgroundColor = "rgb(172, 172, 172)";
        div3.style.backgroundColor = "rgb(119, 119, 119)";
        div4.style.backgroundColor = "rgb(63, 62, 62)";
        ghost1.style.transform = "translateX(100%)";
        ghost2.style.transform = "translateX(-100%)";;
    }
}


function resetGame() {
    if (resetGame, div1, div2, div3, div4, ghost1, ghost2) {
        div1.style.backgroundColor = "rgb(231, 231, 231)";
        div2.style.backgroundColor = "rgb(172, 172, 172)";
        div3.style.backgroundColor = "rgb(119, 119, 119)";
        div4.style.backgroundColor = "rgb(63, 62, 62)";
        ghost1.style.transform = "none";
        ghost2.style.transform = "none";
        divcontainer.style.backgroundColor = "black";


    }
}