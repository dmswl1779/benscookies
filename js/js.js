$(document).ready(function(){
    $(".productListSlider").slick({
        dots:false,
        arrows: true,
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        fade:true,
        fadeSpeed:1000,
    })
})

$(document).ready(function(){
    $(".noticeInfo p").hide();
    //$("ul > li:first-child a").next() .show()
    $(".noticeList").click(function(){
        $(this).next().slideToggle(300);
        $(".noticeList a").css("fontWeight","bold");
        $(".noticeList a").css("cursor","pointer");
        //$(this).next().slideDown(300);
        $(".noticeList").not(this).next().slideUp(300);
        $(".noticeList").not(this).children("a").css("fontWeight","normal");
        return true;
    });
    $(".noticeList a").eq(0).trigger("click");
})
$(document).ready(function(){
    $(".map2").click(function(){
        $(".map").off(".map11")
        $(".map").on(".map21")
    })
})