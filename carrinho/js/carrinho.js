var quantidade = 70
var quantidade2 = 70

$(window).ready(function ()  {

  
    $('#table-itens tr td.class_quant').keyup(function () {
        var quantidade = $(this).find('#qtn02').val();
        $('#table-itens tr td.class_unit').keyup(function () {
            valor_unitario = $(this).find('#valor_unitario03').val();
            var total = (quantidade * valor_unitario);
            $('#table-itens tr td.class_total').keyup(function () {
                $(this).find('#total02').attr('value', total);

               
                var azul = 70;
var rosa = 70;
var pele = 70;
var total = azul + rosa ;
var total2 = azul + pele ;
var total3 = azul 

function tt() {
    return  rosa || azul || pele ||total|| total2||total3;
    
}
alert (tt);
            });
        });
    });
});



