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

  $('.dropdown-container').click(function () {
    $(this).find('.dropdown').toggleClass('active');
    $(this).toggleClass('black');
  });

  // $('.dropdown-container').hover(
  //   function () {
  //     $(this).css('color', '#000');
  //     $(this).find('.dropdown').addClass('active');
  //   },
  //   function () {
  //     $(this).css('color', '#8b959e');
  //     $(this).find('.dropdown').removeClass('active');
  //   }
  // );
});
