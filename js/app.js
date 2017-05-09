//alert("Hola");
var tache = document.getElementsByTagName("span");

for (var i = 0; i < tache.length; i++) {
    tache[i].addEventListener('click', function () {
        this.parentNode.style.display = 'none';
    });
}

var textExtint = document.getElementById("text-extincion");
var btnOrigen = document.getElementById("origen");
btnOrigen.addEventListener('mouseover', function() {
    textExtint.parentNode.style.display= 'none';
    textOrigen.parentNode.style.display='block';
});

var textOrigen = document.getElementById("text-origen");
var btnExtint = document.getElementById("extincion");
btnExtint.addEventListener('mouseover', function() {
    textOrigen.parentNode.style.display= 'none';
    textExtint.parentNode.style.display= 'block';
});

var articulos = document.getElementById("articulos");
articulos.addEventListener('mouseout', function() {
    textExtint.parentNode.style.display= 'block';
    textOrigen.parentNode.style.display='block';
});

