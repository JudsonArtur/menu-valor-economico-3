
$('.menu-avatar').on('click',function(e){
   e.stopPropagation();
    $('.dropdown-menu').toggleClass('open');
});
$('body').on('click',function(){
   $('.checkout-plans').removeClass('open');
   $('.dropdown-menu').removeClass('open');
});

$('.modal-open').on('click', function() {
  $($(this).data('target')).addClass('active');
});

$('.modal-close').on('click', function() {
  $('.modal').removeClass('active');
});

$('body').on('click','.btn-read',function(){
    let documentId = $(this).data('id');
    if(documentId === '' || documentId === undefined || documentId === null){ 
        alert('Sem documento...');
        return;
    }
    let config = { documentId: documentId, darkMode: true };
    CloudPDF(config, document.getElementById('viewer')).then((instance) => {});
    $('.modal-pdf').css('display','block')
})
$('body').on('click','.close-bar',function(){
    $('.modal-pdf').css('display','none')
})

$('body').on('click','.newspaper_addon',function(){
    if (window.matchMedia('(max-width: 888px)').matches){
          $('.press-cart').find('.press-content').addClass('open');
          $('.press-cart').animate({
            width: '100%',
            paddingLeft: '0px',
            paddingBottom: '20px'
          },function(){
            $('.item').removeClass('box4').addClass('box0');
            $('.w_100').addClass('open');
          });
        return;
    }
    $('.press-cart').find('.press-content').addClass('open');
    $('.press-cart').animate({
      width: '60%',
      paddingLeft: '20px',
      paddingBottom: '20px'
    },function(){
        $('.item').removeClass('box4').addClass('box2');
    });
});

$('body').on('click','.close_buy_now, .press-cancel',function(){
      $('.press-cart').find('.press-content').removeClass('open');
      $('.press-cart').animate({
        width: '0%',
        paddingLeft: '0px',
        paddingBottom: '0px'
      },function(){
        if (window.matchMedia('(max-width: 888px)').matches){
          $('.item').removeClass('box0').addClass('box4');
          $('.w_100').removeClass('open');
          return;
        }
        $('.item').removeClass('box2').addClass('box4');
      });
})

document.addEventListener("DOMContentLoaded", function() {
   const imageObserver = new IntersectionObserver((entries, imgObserver) => {
       entries.forEach((entry) => {
           if (entry.isIntersecting) {
               const lazyImage = entry.target
               lazyImage.src = lazyImage.dataset.src
               lazyImage.classList.remove("lzy_img");
               imgObserver.unobserve(lazyImage);
           }
       })
   });
   const arr = document.querySelectorAll('img.lzy_img')
   arr.forEach((v) => {
       imageObserver.observe(v);
   })
})
 //SHADOW BOX
 $('.show_imgs').on('click', function () {
   let src = $(this).parent('.buttons').parent('.item-description').siblings('img').attr('src');
    if(src === undefined){
        src =  $(this).find('img').attr('src');
    }
   $('.shadow_img').addClass('show');
   $('.shadow_img').find('img').attr('src', src);
});
$('.hide').on('click', function () {
   $('.shadow_img').removeClass('show');
});

$('.details-click').on('click',function(){
    $('.transaction-details').slideUp(0);
   $(this).parents('.ds-flex').siblings('.transaction-details').slideToggle(0);
});

$('.payment-ways--header').on('click',function(){
    $('.payment-gateway').find('input').prop('checked',false);
    $('.payment-transfer').find('input').prop('checked',false);
    $('.payment-ways--body').removeClass('open');
    $(this).find('input').prop('checked',true);
    $(this).siblings('.payment-ways--body').addClass('open');
      
      if( $('#transfer').is(":checked")){
        $('.pay-gateway').removeClass('open');
        $('.pay-transfer').addClass('open'); 
        return  
      }
        $('.pay-transfer').removeClass('open');
        $('.pay-gateway').addClass('open');  
});

$('.value-block').on('click',function(e){
    e.stopPropagation();
    $(this).find('.checkout-plans').addClass('open');
});
$('.history-table-row').on('click',function(e){
    $(this).toggleClass('open');
    $(this).find('.table-row--body').slideToggle(500);
});
$('.re-order, .status-skin.transf').on('click',function(e){  
    e.stopPropagation();
});
$('.loading').on('click',function(e){  
    $(this).addClass('active');
});