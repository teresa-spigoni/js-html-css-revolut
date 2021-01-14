$(document).ready(function () {
  $('.nav-left li').hover(
    function () {
      $(this).css({
        'color':'#000',
        'font-weight':'bold'
      })
    },
    function () {
      $(this).css({
        'color':'#8b959e',
        'font-weight':'normal'
      })
    }
  );

  $('.dropdown-container').mouseenter(function () {
    $('.dropdown').removeClass('active');
    $(this).find('.dropdown').addClass('active');
  });

  $('body').click(function () {
    $('.dropdown').removeClass('active');
  });
});
