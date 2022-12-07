
$('.menu-item').on('click',function(e){
   e.stopPropagation();
   $('.dropdown-menu').removeClass('open');
   let submenu = $(this).data('submenu');
     if( $(`.${submenu}`).length == 0 || $(`.${submenu}`).hasClass('open')){
      $('.menu-shadow').removeClass('open');  
      $('.submenu').removeClass('open');
      $('.submenu').find('ul').removeClass('open');       
     }else{
        $('.submenu').addClass('open');       
        $('.menu-shadow').addClass('open');
        $('.submenu').find('ul').map(function(index){
            $(`.submenu-${index}`).removeClass('open');
        });
        $(`.${submenu}`).addClass('open');
     }  
});

$('.menu-avatar').on('click',function(e){
   e.stopPropagation();
    $('.dropdown-menu').toggleClass('open');
});
$('body').on('click',function(){
   $('.dropdown-menu').removeClass('open');
   $('.menu-shadow').removeClass('open');  
      $('.submenu').removeClass('open');
      $('.submenu').find('ul').removeClass('open'); 
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
   $('.shadow_img').addClass('show');
   $('.shadow_img').find('img').attr('src', src);
});
$('.hide').on('click', function () {
   $('.shadow_img').removeClass('show');
});