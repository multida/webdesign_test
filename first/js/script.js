$(document).ready(function () {
    /* menu */
    var $gnb = $('.gnb_list');
    
    $gnb.hover(
        function(){
            $('.submenu').stop().slideDown(300);
        },function(){
            $('.submenu').stop().slideUp(300);
        }
    );
    
    /*  slide */
    var visual = $('.visualWrap .visual');
    var now = 0;
    var max = 3;
    var w = 1200;
    var h = 960;
    
    visual.prepend($('.visualWrap .visual .slideitem3'));
    var slide = setInterval(function () {
        if(now < 3){
            visual.animate({
                'top':(now*h*(-1))+'px'
            },600);
            now++;
            console.log(visual);
        }else{
            visual.animate({
                'top':'0px'
            },600);
            now = 1;
        }
        
    }, 1000);
    
});