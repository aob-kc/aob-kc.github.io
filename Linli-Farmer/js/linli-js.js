// banner
var banner_Swiper = new Swiper('#banner_swiper', {
    speed: 400,
    spaceBetween: 100,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    effect: 'fade',
    fade: {
        crossFade: false,
    },
});

// 區域移動效果
// 重新整理後會返回top，且頁面會如同重新載入般進行頂部動畫效果
window.onbeforeunload = function () {
    window.scrollTo(0, 0), 500;
};

// nav_logo
$('#img_logo').click(function () {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0), 500;
    };
});

// nav
$('#nav_about').click(function () {
    $('html,body').animate({
        scrollTop: ($('#about').offset().top - $('#nav').height())
    }, 1000);
});

$('#nav_about').click(function () {
    $('html,body').animate({
        scrollTop: ($('#about').offset().top - $('#nav').height())
    }, 1000);
});

$('#nav_product').click(function () {
    $('html,body').animate({
        scrollTop: ($('#product').offset().top - $('#nav').height())
    }, 1000);
});

$('#nav_fun').click(function () {
    $('html,body').animate({
        scrollTop: ($('#fun').offset().top - $('#nav').height())
    }, 1000);
});

$('#nav_news').click(function () {
    $('html,body').animate({
        scrollTop: ($('#news').offset().top - $('#nav').height())
    }, 1000);
});

// 小農產品點擊提示


// 小農產品-小項目
var product_item_swiper = new Swiper('#product_item_swiper', {
    slidesPerView: 4,
    spaceBetween: 25,
    speed: 400,
    loop: true,
    autoplay: {
        delay: 4000,
    },
});