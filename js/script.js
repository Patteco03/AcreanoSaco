$(document).ready(function(){
  $('.date').mask('00/00/0000');
  $('.time').mask('00:00:00');
  $('.date_time').mask('00/00/0000 00:00:00');
  $('.cep').mask('00000-000');
  $('.phone').mask('0000-0000');
  $('.phone_with_ddd').mask('(00) 00000-0000');
  $('.phone_us').mask('(000) 000-0000');
  $('.mixed').mask('AAA 000-S0S');
  $('.cpf').mask('000.000.000-00', {reverse: true});
  $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
  $('.money').mask('000.000.000.000.000,00', {reverse: true});
  $('.money2').mask("#.##0,00", {reverse: true});

  $(document).on("keydown", ".cep", function () {
    var num = ($(this).val().length);
    if (num > 7) {
      $('.loginin').css('display','block')
    }else{
      $('.loginin').css('display','none')
    }
  });

  var content = $('#content');
  $('.list-menu a').on('click', function( e ){
    e.preventDefault();
    
    var href = $( this ).attr('href');
    $.ajax({
      type: 'GET',
      url: href,
      dataType: 'text',
      cache: false,
      beforeSend: function () {
        $('#reloade').css('display','block');
      },
      success: function( response ){
        $('#reloade').css('display','none');
         content.html(response);
        },
        error: function (erro) {
          console.log(erro);
        }
      });

  });
});

