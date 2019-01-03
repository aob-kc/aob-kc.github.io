// js作用區塊下收
// js、jq第一列的slide遮色片
$(".slide").hover(function () {
    $(".slide_opacity").slideToggle("slow");
});

$(".slide_order").hover(function () {
    console.log(44544165);
    $(".slide_order_opacity").animate({width:'toggle'},500);
});