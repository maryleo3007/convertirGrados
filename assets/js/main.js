var ferenheit = document.getElementById('txt_Farenheit');
var celsius = document.getElementById('txt_celsius');

function convertirC(){

   celsius.value = (ferenheit.value - 32)*(5/9);
}
function convertirF(){
    ferenheit.value = (celsius.value * (9/5))+32;
}
