(function($){

  
  var tabMenu = $('.tab_menu').children('li');
  var plBanner = $('.planning_banner');

  

//버튼 아이콘 돌아가기
  var menuBtn = $('#goodsMenu').find('button'); 
  var menuCon = $('.menu_content');
  
  menuBtn.on('click',function(e){
    e.preventDefault();
    var _$this = $(this);
    var menuConDispaly = _$this.next().css('display');

    _$this.next().stop().slideToggle();

      var icon = _$this.find('i');
      var next = _$this.next();
      var timed = 500;
    if(menuConDispaly=='none'){
      icon.removeClass('not_Rotate');
      icon.addClass('rotate');
    }else{
      icon.removeClass('rotate');
      icon.addClass('not_Rotate');
    }

  });


  var goodML = $('#goodsMenu>ul>li');
            var goodMLL = $('#goodsMenu>ul>li').length;

            for(var i=0;i<goodMLL;i++){
            var goodU = $('#goodsMenu>ul>li').eq(i)
                          .find('.menu_content');
            var goodL = goodU.find('li');
            var goodL0 = goodL.eq(0);
            var goodLIn = goodL.length; //각 li마다그 안에 #goodsMenu안의 li갯수를 파악
            var arr = [];
             // console.log(goodLIn);

             if(goodLIn <= 2){
                goodL0.css({marginLeft:'240px'})
             }else if(goodLIn == 3 ){
                goodL.eq(1).css({marginLeft : '220px'})
             }else if(goodLIn > 4){
                goodU.css({height:'900px'})
                if(goodLIn == 5){
                  goodL.eq(3).css({marginLeft : '240px'});
                }
             }
            }//for
})(this.jQuery);
