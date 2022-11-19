
$('.menu-item').on('click',function(){
   let submenu = $(this).data('submenu');
     if( $(`.${submenu}`).length == 0 || $(`.${submenu}`).hasClass('open')){
      $('.menu-shadow').removeClass('open');  
      $('.submenu').removeClass('open');
      $('.submenu').find('ul').removeClass('open');
       
     }else{
        $('.submenu').addClass('open');
        $('.menu-shadow').addClass('open');
        $(`.${submenu}`).addClass('open');
     }  
});

$('.menu-avatar').on('click',function(){
    $('.dropdown-menu').toggleClass('open');
});