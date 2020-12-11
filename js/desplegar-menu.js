$(document).ready(function(){ 
  $("a.desplegable").click(function(){
    if($('.BarraGeneral').is(":visible")){
        $('.BarraGeneral').slideUp();
    }else{
      $('.BarraGeneral').slideDown();
    }
  });
$(window).resize(function(){
  if($(this).width()>768){
      $(".BarraGeneral").show();
  } else{
      $(".BarraGeneral").hide();
  }
});
});