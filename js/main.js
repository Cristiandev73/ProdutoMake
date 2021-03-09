



$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
	 autoplay: true
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true

});

$('table input').on('input', function () {
  var $tr = $(this).closest('tr');
  var tot = 0;
  $('input', $tr).each(function () {
      tot += parseFloat(($(this).val()).replace(',', '.'));
  });
  $('td:last', $tr).text(tot);
}).trigger('input');



function sum(){
  let total = 0;
  let valor = 0;
  
  let valor_un = 0;
  $('.fields input').each(function(i) {
     valor =  $(this).val();
     // pega o valor correspondente
     valor_un =  $('[name="val_un['+i+']"]').val();
     total_un = valor*valor_un;
  
     total += total_un;
  });
  
  // aqui eu substituo o ponto por vírgula para ficar no formato brasileiro
  // convertendo o número em string com .toFixed(2)
  // para poder fazer o replace
  total =total.toFixed(2).replace('.', ',');
  
  $('#total').val(total);
} 

                  









$(document).ready(function()
{
    $('.adicionar').on('submit', function()
    {
        var id_produto = $(this).closest('tr').find('.id-produto').text();
        var nome_produto = $(this).closest('tr').find('.nome-produto').text();
        var quantidade = $(this).closest('tr').find('input').val();
        window.location.href = "adicionar.php?id_produto=" + id_produto + "&nome_produto=" + nome_produto + "&quantidade=" + quantidade;
        return true;
    });
});