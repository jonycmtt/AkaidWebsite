
 /*navbar scroll*/
 $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.navbar').addClass('menu_fixed animate fadeIn');
    } else {
      $('.navbar').removeClass('menu_fixed fadeOut');
    }
  });
      /*scroll button*/
$(document).ready(function() {
    $(window).scroll(function(){
    if($(this).scrollTop() > 500){
    $('#topBtn').fadeIn();
    }else {
    $('#topBtn').fadeOut();
    }
    })
    $('#topBtn').click(function(){
    $('html,body').animate({
        scrollTop: 0},500);
    });
    });
