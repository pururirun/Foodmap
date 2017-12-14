$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(100);
   }, 1000);
});


$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});

/*-------------Modal---------------------*/
$(document).ready(function(){
    $('#open').click(function(){
        $('.modal').toggle('slow');
    });
    $('.modal').click(function(){
      $(this).css({display:"none"});
    });
  });

  /*-----filtro------*/

  $(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList div").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
