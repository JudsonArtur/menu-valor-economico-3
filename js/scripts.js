
$('.menu-avatar').on('click',function(e){
   e.stopPropagation();
    $('.dropdown-menu').toggleClass('open');
});
$('body').on('click',function(){
   $('.checkout-plans').removeClass('open');
   $('.dropdown-menu').removeClass('open');
});


$('body').on('click','.newspaper_addon',function(){
    let documentId = $(this).data('id');
    if(documentId === '' || documentId === undefined || documentId === null){ 
        alert('Sem documento...');
        return;
    }
    let config = { documentId: documentId, darkMode: true };
    CloudPDF(config, document.getElementById('viewer')).then((instance) => {});
    $('.modal-test').css('display','block')
})
$('body').on('click','.close-bar',function(){
    $('.modal-test').css('display','none')
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