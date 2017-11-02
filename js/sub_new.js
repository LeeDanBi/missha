(function($){

$(window).on('scroll',function(){
  var goodsBox = $('#goodsBox');
  var sideBanner = $('#sideBanner');
  var footBox = $('#footBox');

  var winS = $(window).scrollTop();
  var boxW = goodsBox.offset().top + 350;
  var footW = footBox.offset().top - 700;

  // console.log(winS);
  // console.log(boxW);
  console.log(footW);

  if(winS>=boxW){
    sideBanner.css({position:'fixed', top:'100px'});
  }else{
    sideBanner.css({position:'absolute', top:'450px'});
  }
});

// sideBanner 

// topIcon.on('click',function(e){
//     e.preventDefault();
//     var htmlScroll = $('html, body');
//     htmlScroll.animate({scrollTop:$(this.hash).offset().top},500);

// });

// ____________ top버튼 누를때 자연스럽게 올라가기


})(this.jQuery);