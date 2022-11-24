
$('.menu-item').on('click',function(e){
   e.stopPropagation();
   let submenu = $(this).data('submenu');
     if( $(`.${submenu}`).length == 0 || $(`.${submenu}`).hasClass('open')){
      $('.menu-shadow').removeClass('open');  
      $('.submenu').removeClass('open');
      $('.submenu').find('ul').removeClass('open');       
     }else{
        $('.submenu').addClass('open');
        $('.dropdown-menu').removeClass('open');
        $('.menu-shadow').addClass('open');
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