function init(){
    crearLista();
    var lista = $("li"); 
    lista.each(function(){
        $(this).click(click);
    });
}
function crearLista() {
    var paises = $("#paises");
    for(var i in jsonArray){
        var html='<li id="' + i + '">' +  //--inicio link y lista.
                        '<img class="img" src="' + jsonArray[i].srcImg + '">' + //--imagen.
                        '<p>' + '<b>' + jsonArray[i].pais+ '</b>' + '<small  class="cod" id="codigo">(' + jsonArray[i].codigo +')</small>' + '</p>' + 
                        //--nombre del pais.
                        '</li>'+ //--cierre link y lista.
                        '<hr>';   
        
        paises.append(html); 
    }
}
function click(evt){
    localStorage.setItem("banderaImg",evt.currentTarget.id);
    location.href="index2.html";
}
