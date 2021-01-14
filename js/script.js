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
    $('.dropdown-container').removeClass('black');
    $(this).find('.dropdown').addClass('active');
    $(this).addClass('black');
  });


  $('body').click(function () {
    $('.dropdown').removeClass('active');
    $('.dropdown-container').removeClass('black');
  });

  $('.dropdown-container').click(function () {
    $('.dropdown').removeClass('active');
    $(this).find('.dropdown').toggleClass('active');
  });
});
