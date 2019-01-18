// 點擊區塊顯示
var html_tag = document.querySelector('#html_title');
var css_tag = document.querySelector("#css_title");
var js_tag = document.querySelector("#js_title");
var order_tag = document.querySelector('#order_title');

var html_box = document.querySelector('#html_content');
var css_box = document.querySelector("#css_content");
var js_box = document.querySelector("#js_content");
var order_box = document.querySelector('#order_content');

html_tag.onclick = function () {
      html_tag.classList.remove('hide');
      css_tag.classList.remove('show');
      js_tag.classList.remove('show');
      order_tag.classList.remove('show');

      html_box.classList.remove('hide');
      css_box.classList.remove('show');
      js_box.classList.remove('show');
      order_box.classList.remove('show');
};
css_tag.onclick = function () {
      css_tag.classList.add('show');
      html_tag.classList.add('hide');
      js_tag.classList.remove('show');
      order_tag.classList.remove('show');
      
      css_box.classList.add('show');
      html_box.classList.add('hide');
      js_box.classList.remove('show');
      order_box.classList.remove('show');
};
js_tag.onclick = function () {
      js_tag.classList.add('show');
      html_tag.classList.add('hide');
      css_tag.classList.remove('show');
      order_tag.classList.remove('show');

      js_box.classList.add('show');
      css_box.classList.remove('show');
      html_box.classList.add('hide');
      order_box.classList.remove('show');
};
order_tag.onclick = function () {
      order_tag.classList.add('show');
      html_tag.classList.add('hide');
      css_tag.classList.remove('show');
      js_tag.classList.remove('show');

      order_box.classList.add('show');
      js_box.classList.remove('show');
      css_box.classList.remove('show');
      html_box.classList.add('hide');
};
