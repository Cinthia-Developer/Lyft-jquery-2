$("#submit").click(function(){
    validToo();
});
//-- Funcion para aceptar solo letras en el input con Jquery:
$("#input").keyup(function(){
 this.value = (this.value + '').replace(/[^0-9]/g, '');
});
//-- Funcion para que el número de teléfono sea valido:
function validNumbers(evt){
    var input = $("#input").val();
    if(input.length<=10 && input.length>=4)
        return true;
}
//-- Funcion para validar el boton:
function validToo(){
    if (validNumbers()==true){
        onCode();
        window.location="index4.html";
    }else{
        sweetAlert("Número inválido, vuelve a intentar.");
        $("#input").val("");
    }
}
//-- Funcion para número aleatorio:
function onCode(){
    var lab = "LAB-";
    var aleatorio = Math.floor((Math.random()*999)+100);
    var codigo = (lab += aleatorio);
    alert("Tu código de usuario es : " + codigo ); 
    var number = $("#input").val();
    localStorage.setItem("input", number);
}
//--Funcion para obtener la informacion en un local store:
function init(){
    var bandera = $("#bandera");
    var dato = localStorage.getItem('banderaImg'); 
    var urlImagen = jsonArray[dato].srcImg;
    bandera.attr("src", urlImagen);
    var idCodigo = $("#codigo");
    var codigo = jsonArray[dato].codigo;
    idCodigo.text(codigo);
}