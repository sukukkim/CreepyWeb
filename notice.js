jQuery (document).ready(function() {

    $('.navi>li') .mouseover(function() {
      $('.submenu').stop().slideDown(300);
      $("#menu_bg").stop().slideDown(300);
    }) .mouseout(function () {
      $('.submenu').stop().slideUp(300);
      $("#menu_bg").stop().slideUp(300);
    });

});