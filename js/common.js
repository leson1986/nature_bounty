
$(document).ready(function(){
    //导航栏，鼠标移上去后，icon切换
   $(".menu li,.fastTouch").mouseover(function(){
       var src=$(this).find('img').attr('src');
       if(src.indexOf('-active')<1)
       {
           var type=src.substr(-4,4);
           var newImg=src.substring(0,src.length-4)+"-active"+type;
           $(this).find('img').attr('src',newImg)
       }
   });

    $(".menu li,.fastTouch").mouseleave(function(){
        var src=$(this).find('img').attr('src');
        if(src.indexOf('-active')>0 && !$(this).find('a').hasClass('active'))
        {
            var type=src.substr(-4,4);
            var newImg=src.substring(0,src.length-11)+type;
            $(this).find('img').attr('src',newImg)
        }
    })

    $('#backToTop').click(function(){
        $('html,body').animate({scrollTop: '0px'}, 800);
    });

    $(".home-grid").mouseover(function(){
        $(this).find('.home-grid-cover').fadeIn();
    });

    $(".home-grid").mouseleave(function(){
        $(this).find('.home-grid-cover').fadeOut();
    });

});//end

$(window).scroll(function() {
    if($(window).scrollTop() >= 300){
        $('#backToTop').fadeIn(300);
    }else{
        $('#backToTop').fadeOut(300);
    }
});

