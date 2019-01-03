// js作用區塊下收
// js、jq第一列的slide遮色片
$(".slide").hover(function () {
    $(".slide_opacity").slideToggle("slow");
});

$(".slide_order").hover(function () {
    console.log(44544165);
    $(".slide_order_opacity").animate({width:'toggle'},500);
});

var setintervel_img_img = document.querySelector('.setintervel_img');
var setintervel_img_cat = 'https://ichef.bbci.co.uk/news/624/cpsprodpb/14DD1/production/_103175458_p06f24vf.jpg';
var setintervel_img_dog = 'https://cdn2.ettoday.net/images/1933/1933457.jpg';
var imageSources = [setintervel_img_cat, setintervel_img_dog]
		var index = 0;
		setInterval(function () {
			if (index === imageSources.length) {
				index = 0;
			}
			setintervel_img_img.src = imageSources[index];
			index++;
		}, 2000);
