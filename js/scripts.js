
$('.menu-item').on('click',function(){
    console.log($(`.${$(this).data('submenu')}`));
     if( $(`.${$(this).data('submenu')}`).hasClass('open')){
        $('.submenu').removeClass('open');
        $(`.${$(this).data('submenu')}`).removeClass('open');
        $('.menu-shadow').removeClass('open');
     }else{
        $('.submenu').addClass('open');
        $('.menu-shadow').addClass('open');
        $(`.${$(this).data('submenu')}`).addClass('open');
     }
     
});