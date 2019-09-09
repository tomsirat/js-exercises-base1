var text1Element = document.getElementById("nom");
var text2Element = document.getElementById("prenom");
var text3Element = document.getElementById("ville");
var btnElement = document.getElementById("valider");

btnElement.addEventListener("click", function(){
   alert(text1Element.value+ text2Element.value+ text3Element.value);
});