$(document).ready(function () {
   $('.button').click(function () {
      var buttonID = $(this).attr('id');
      $('#modal-container').removeAttr('class').addClass(buttonID);

   });

   $('#modal-container').click(function () {
      $(this).addClass('out');
      $('body').removeClass('.modal-active');
   });
});
