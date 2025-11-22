const numeroTambores = document.querySelectorAll(".drum").length;

for (var i = 0; i < numeroTambores; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var key = this.innerHTML;
        hacerSonido(key);
        animarBoton(key);
    });
}

document.addEventListener("keydown", function (event) {
    hacerSonido(event.key);
    animarBoton(event.key);
});

function hacerSonido(tecla) {
    switch (tecla) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick_bass = new Audio('sounds/kick_bass.mp3');
            kick_bass.play();
            break;

            default: console.log(tecla);
    }
}


function animarBoton(teclaActual) {
    //El ".", solo busca el botón que tiene la clase correspondiente a la tecla (ej. ".w", ".a")
    var botonActivo = document.querySelector("." + teclaActual); 

    //Si el botón existe en el html, se añade la clase "pressed"
    if (botonActivo) {
        botonActivo.classList.add("pressed");

        //Después de 100 milisegundos, se quita la clase y vuelve a ser normal
        setTimeout(function() {
            botonActivo.classList.remove("pressed");
        }, 100);
    }
}