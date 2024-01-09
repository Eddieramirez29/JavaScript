let imagenDado1;
let imagenDado2;
let imagenDado3;
let imagenDado4;

function iniciar()
{
    const boton = document.getElementById("botónTirar");
    boton.addEventListener("click", tirarDados, false);

    imagenDado1 = document.getElementById("dado1");
    imagenDado2 = document.getElementById("dado2");
    imagenDado3 = document.getElementById("dado3");
    imagenDado4 = document.getElementById("dado4");
}

function tirarDados()
{
    establecerImagen(imagenDado1);
    establecerImagen(imagenDado2);
    establecerImagen(imagenDado3);
    establecerImagen(imagenDado4);
}

function establecerImagen(imgDado)
{
    let valorDado = Math.floor(1 + Math.random()*6);

    imgDado.setAttribute("src", "dados/dado"+ valorDado + ".png");
    imgDado.setAttribute("alt", "imagen de un dado con "+ valorDado + "punto(s)");
}


window.addEventListener("load", iniciar , false);