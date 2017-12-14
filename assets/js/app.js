$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(100);
   }, 3000);
});



    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });


/*-------------Modal---------------------*/
    $('#open').click(function(){
        $('.modal').toggle('slow');
    });
    $('.modal').click(function(){
      $(this).css({display:"none"});
    });


  /*-----filtro------*/


  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList div").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
