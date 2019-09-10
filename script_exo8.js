var ageInput = document.getElementById("age");
var button = document.getElementById("valider");


button.addEventListener("click" , function(){
if (age.value > 18) {
    alert ("Vous ếtes majeur");
} else {
    alert ("Vous êtes mineur");
}

});