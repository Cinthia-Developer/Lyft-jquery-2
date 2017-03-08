function init(){
    solicitarEstimado();
}

function solicitarEstimado(){
    $.ajax({
        url:"https://clientes.geekadvice.pe/api/carrera",
        data:{"tipo":1}
    }).success(function(_data){
     //  console.log(_data);
        update(_data);
    }) 
}

function update(_info){
    $(".costo").html(_info.estimado.moneda + _info.final);
    $(".perfil").attr("src", _info.conductor.url);
}