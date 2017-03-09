$("#submit").click(function(){
    validToo();
});
//--Funcion para guardar la informacion en un local store:
function onNextClick(){
    var inputName = $("#input1").val();
    localStorage.setItem("input1", inputName);
    var inputEmail = $("#input2").val();
    localStorage.setItem("input2", inputEmail);
}
//-- Funcion para aceptar solo números en el input nombre con Jquery:
$("#input1").keyup(function(){
 this.value = (this.value + '').replace(/[^a-z][^A-Z]/g,"");
});
//-- Funcion para validar el nombre:
function firstNameChanges(){
    var input1 = $("#input1").val();
    if(input1.length <= 30 && input1.length>=5)
        return true;
}
//-- Funcion para validar el email (nombre@gmail.com):
function validateEmail(){
    var correo = $("#input2").val();
    var expresion=/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    if(expresion.test(correo) && correo.length<=50 && correo.length>=4)
        return true;
}
//--Funcion para validar el boton:
function validToo(){
    if (firstNameChanges()==true && validateEmail()==true){
        alert("Todo es correcto.! dale doble next para continuar")
        window.location="index5.html";
        onNextClick();
    }else{
        alert("Datos inválidos, vuelve a intentar");
        $("#input1, #input2").val("");
    }
}