
window.addEventListener("load", cargaPagina);

function cargaPagina(){
    document.querySelectorAll("img").forEach((img)=>{
        img.src=imagenAleatoria();
    }
    );

}

function generaAleatorio(max){
    return Math.round(Math.random()*max);
}

function imagenAleatoria(){
    var numeroImagen=generaAleatorio(255);
    return "https://picsum.photos/id/"+numeroImagen+"/200/300";
}

