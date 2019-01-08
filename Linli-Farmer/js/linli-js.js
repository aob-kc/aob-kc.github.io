// banner
var banner_Swiper = new Swiper('#banner_swiper', {
    speed: 400,
    spaceBetween: 100,
    loop: true,
    autoplay: {
        delay: 4000,
    },
});

// 區域移動效果
$('#nav_about').click(function () {
    $('html,body').animate({
        scrollTop:($('#about').offset().top - $('#nav').height())
    }, 1000);
}); 

$('#nav_product').click(function () {
    $('html,body').animate({
        scrollTop:($('#product').offset().top - $('#nav').height())
    }, 1000);
}); 

$('#nav_fun').click(function () {
    $('html,body').animate({
        scrollTop:($('#fun').offset().top - $('#nav').height())
    }, 1000);
}); 

$('#nav_news').click(function () {
    $('html,body').animate({
        scrollTop:($('#news').offset().top - $('#nav').height())
    }, 1000);
}); 