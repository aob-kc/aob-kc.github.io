// 區塊切換顯示效果
var about_tag = document.querySelector(".about_tag");
var ps_tag = document.querySelector(".ps_tag");
var ai_tag = document.querySelector(".ai_tag");
var web_tag = document.querySelector(".web_tag");
var work_tag = document.querySelector(".work_tag");

var logo = document.querySelector(".logo");
var kang_about = document.querySelector(".kang_about");
var ps_about = document.querySelector(".ps_about");
var ai_about = document.querySelector(".ai_about");
var web_about = document.querySelector(".web_about");
var works_about = document.querySelector(".works_about");

about_tag.onclick = function(){
    about_tag.classList.add("show");
    ps_tag.classList.remove("show");
    ai_tag.classList.remove("show");
    web_tag.classList.remove("show");
    work_tag.classList.remove("show");

    logo.classList.add("hide");
    kang_about.classList.add("show");
    ps_about.classList.remove("show");
    ai_about.classList.remove("show");
    web_about.classList.remove("show");
    works_about.classList.remove("show");
};

ps_tag.onclick = function(){
    about_tag.classList.remove("show");
    ps_tag.classList.add("show");
    ai_tag.classList.remove("show");
    web_tag.classList.remove("show");
    work_tag.classList.remove("show");

    logo.classList.add("hide");
    kang_about.classList.remove("show");
    ps_about.classList.add("show");
    ai_about.classList.remove("show");
    web_about.classList.remove("show");
    works_about.classList.remove("show");
};

ai_tag.onclick = function(){
    about_tag.classList.remove("show");
    ps_tag.classList.remove("show");
    ai_tag.classList.add("show");
    web_tag.classList.remove("show");
    work_tag.classList.remove("show");

    logo.classList.add("hide");
    kang_about.classList.remove("show");
    ps_about.classList.remove("show");
    ai_about.classList.add("show");
    web_about.classList.remove("show");
    works_about.classList.remove("show");
};

web_tag.onclick = function(){
    about_tag.classList.remove("show");
    ps_tag.classList.remove("show");
    ai_tag.classList.remove("show");
    web_tag.classList.add("show");
    work_tag.classList.remove("show");

    logo.classList.add("hide");
    kang_about.classList.remove("show");
    ps_about.classList.remove("show");
    ai_about.classList.remove("show");
    web_about.classList.add("show");
    works_about.classList.remove("show");
};

work_tag.onclick = function(){
    about_tag.classList.remove("show");
    ps_tag.classList.remove("show");
    ai_tag.classList.remove("show");
    web_tag.classList.remove("show");
    work_tag.classList.add("show");

    logo.classList.add("hide");
    kang_about.classList.remove("show");
    ps_about.classList.remove("show");
    ai_about.classList.remove("show");
    web_about.classList.remove("show");
    works_about.classList.add("show");
};

// 小螢幕nav
var small_nav = document.querySelector("#small_nav");
var sn_line = document.querySelector(".sn_line");
var sn_line_a = document.querySelector(".sn_line_a");
var sn_line_b = document.querySelector(".sn_line_b");
var small_nav_box = document.querySelector("#small_nav_box");

small_nav.onclick = function(){
    small_nav.classList.toggle("click");
    sn_line.classList.toggle("click");
    sn_line_a.classList.toggle("click");
    sn_line_b.classList.toggle("click");
    small_nav_box.classList.toggle("show");
};