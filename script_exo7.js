var button = document.getElementById("valider");

button.addEventListener("click", function(){
    var pointure = document.getElementById("pointure");
    var years = document.getElementById("annee");

    
    var result = (parseInt(pointure.value) * 2);
    alert(result + 5 * 50 - years.value + 1766);
});