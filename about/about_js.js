// 重新整理後會返回top，且頁面會如同重新載入般進行頂部動畫效果
window.onbeforeunload = function () {
    window.scrollTo(0, 0), 500;
};

// top_left區塊_觸摸邊線變化
document.querySelector('#top .pic').onmouseover = function(){
    document.querySelector('#top .left_line').style.cssText = 'bottom: 0;height: 100%;transition: 0.5s'
    document.querySelector('#top .right_line').style.cssText = 'top: 0;height: 100%;transition: 0.5s'
};
document.querySelector('#top .pic').onmouseout = function(){
    document.querySelector('#top .left_line').style.cssText = 'bottom: 0;height: 0;transition: 0.5s'
    document.querySelector('#top .right_line').style.cssText = 'top: 0;height: 0;transition: 0.5s'
};

// meter部分
document.querySelector('#ps_meter').value = '5';
document.querySelector('#ai_meter').value = '6';
document.querySelector('#html_meter').value = '8';
document.querySelector('#css_meter').value = '7';
document.querySelector('#js_meter').value = '5';

// 滾軸部分
// window.onscroll = function () {
//     let scrollTop = document.documentElement.scrollTop;
//     if(scrollTop < 399){
//         document.querySelector('nav .issuu').style.cssText = 'background-color:rgba(0,0,0,0);transition: 1s';
//         document.querySelector('nav .web').style.cssText = 'background-color:rgba(0,0,0,0);transition: 1s';
//         document.querySelector('nav .minigame').style.cssText = 'background-color:rgba(0,0,0,0);transition: 1s'
//     };

    // 以下rwd部分，局部高度變換，滾輪軸獲取位置就跟著變換，需思考對策
    // if(scrollTop > 799){
    //     document.querySelector('nav .issuu').style.cssText = 'background-color:#ceffce;transition: 0.5s';
    //     document.querySelector('nav .web').style.cssText = 'background-color:rgba(0,0,0,0);transition: 0.5s';
    //     document.querySelector('nav .minigame').style.cssText = 'background-color:rgba(0,0,0,0);transition: 0.5s';
    // }if(scrollTop > 1599){
    //     document.querySelector('nav .issuu').style.cssText = 'background-color:rgba(0,0,0,0);transition: 0.5s';
    //     document.querySelector('nav .web').style.cssText = 'background-color:#ceffce;transition: 0.5s';
    //     document.querySelector('nav .minigame').style.cssText = 'background-color:rgba(0,0,0,0);transition: 0.5s';
    // }if(scrollTop > 2499){
    //     document.querySelector('nav .issuu').style.cssText = 'background-color:rgba(0,0,0,0);transition: 0.5s';
    //     document.querySelector('nav .web').style.cssText = 'background-color:rgba(0,0,0,0);transition: 0.5s';
    //     document.querySelector('nav .minigame').style.cssText = 'background-color:#ceffce;transition: 0.5s';
    // }
// }

// nav點擊滑動效果、hover效果
$('nav .issuu').click(function () {
    $('html,body').animate({
        scrollTop: ($('#issuu').offset().top - $('nav').height())
    }, 1000)
    // document.querySelector('nav .issuu').style.cssText = 'background-color:#ceffce;transition: 0.5s';
    // document.querySelector('nav .web').style.cssText = 'background-color:rgba(0,0,0,0);transition: 0.5s';
    // document.querySelector('nav .minigame').style.cssText = 'background-color:rgba(0,0,0,0);transition: 0.5s'
});

document.querySelector('nav .issuu').onmouseover = function(){
    document.querySelector('nav .issuu_line').style.cssText = 'width:100%;transition: 0.5s'
};
document.querySelector('nav .issuu').onmouseout = function(){
    document.querySelector('nav .issuu_line').style.cssText = 'width:0;transition: 0.1s'
};

$('nav .web').click(function () {
    $('html,body').animate({
        scrollTop: ($('#web').offset().top - $('nav').height())
    }, 1000)
    // document.querySelector('nav .issuu').style.cssText = 'background-color:rgba(0,0,0,0);transition: 0.5s';
    // document.querySelector('nav .web').style.cssText = 'background-color:#ceffce;transition: 0.5s';
    // document.querySelector('nav .minigame').style.cssText = 'background-color:rgba(0,0,0,0);transition: 0.5s'
});

document.querySelector('nav .web').onmouseover = function(){
    document.querySelector('nav .web_line').style.cssText = 'width:100%;transition: 0.5s'
};
document.querySelector('nav .web').onmouseout = function(){
    document.querySelector('nav .web_line').style.cssText = 'width:0;transition: 0.1s'
};

$('nav .minigame').click(function () {
    $('html,body').animate({
        scrollTop: ($('#minigame').offset().top - $('nav').height())
    }, 1000)
    // document.querySelector('nav .issuu').style.cssText = 'background-color:rgba(0,0,0,0);transition: 0.5s';
    // document.querySelector('nav .web').style.cssText = 'background-color:rgba(0,0,0,0);transition: 0.5s';
    // document.querySelector('nav .minigame').style.cssText = 'background-color:#ceffce;transition: 0.5s'
});

document.querySelector('nav .minigame').onmouseover = function(){
    document.querySelector('nav .minigame_line').style.cssText = 'width:100%;transition: 0.5s'
};
document.querySelector('nav .minigame').onmouseout = function(){
    document.querySelector('nav .minigame_line').style.cssText = 'width:0;transition: 0.1s'
};

// issuu部分放大效果
document.querySelector('#issuu .left').onmouseover = function(){
    document.querySelector('#issuu .left .pic').style.cssText = 'transform: scale(1.05);transition: 1.5s';
}
document.querySelector('#issuu .left').onmouseout = function(){
    document.querySelector('#issuu .left .pic').style.cssText = 'transform: scale(1);transition: 1.5s';
}

document.querySelector('#issuu .right').onmouseover = function(){
    document.querySelector('#issuu .right .pic').style.cssText = 'transform: scale(1.05);transition: 1.5s';
}
document.querySelector('#issuu .right').onmouseout = function(){
    document.querySelector('#issuu .right .pic').style.cssText = 'transform: scale(1);transition: 1.5s';
}

// web部分放大效果
document.querySelector('#web .left').onmouseover = function(){
    document.querySelector('#web .left .pic').style.cssText = 'transform: scale(1.05);transition: 1.5s';
}
document.querySelector('#web .left').onmouseout = function(){
    document.querySelector('#web .left .pic').style.cssText = 'transform: scale(1);transition: 1.5s';
}

document.querySelector('#web .right').onmouseover = function(){
    document.querySelector('#web .right .pic').style.cssText = 'transform: scale(1.05);transition: 1.5s';
}
document.querySelector('#web .right').onmouseout = function(){
    document.querySelector('#web .right .pic').style.cssText = 'transform: scale(1);transition: 1.5s';
}

// minigame部分放大效果
document.querySelector('#minigame .left').onmouseover = function(){
    document.querySelector('#minigame .left .pic').style.cssText = 'transform: scale(1.05);transition: 1.5s;'
}
document.querySelector('#minigame .left').onmouseout = function(){
    document.querySelector('#minigame .left .pic').style.cssText = 'transform: scale(1);transition: 1.5s'
}
