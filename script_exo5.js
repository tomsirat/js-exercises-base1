var btnElement = document.getElementById("valider");


btnElement.addEventListener("click", function(){
    var firstnumberElement = document.getElementById("premier_nombre");
    var secondnumberElement = document.getElementById("deuxieme_nombre");
    alert(parseInt(firstnumberElement.value) * secondnumberElement.value);
});