//alert("Hola");
var tache = document.getElementsByTagName("span");

for(var i = 0; i < tache.length; i++) {
    tache[i].addEventListener('click', function(){
        this.parentNode.style.display='none';
    });
}
