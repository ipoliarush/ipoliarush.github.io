$(function(){$(".header__slider").slick({infinite:!0,fade:!0,arrows:!1,autoplay:!0,autoplaySpeed:1e4,dots:!0,customPaging:function(i,e){return'<div class="header__dots" id='+e+"></div>"}}),$(".minib__slider").slick({infinite:!0,fade:!0,arrows:!1,autoplay:!0,autoplaySpeed:5e3,dots:!0,customPaging:function(i,e){return'<div class="minib__dots" id='+e+"></div>"}}),$(".portfolio__slider").slick({infinite:!0,fade:!0,arrows:!0,autoplay:!0,autoplaySpeed:5e3,dots:!0,prevArrow:'<div class="prev"></div>',nextArrow:'<div class="next"></div>',customPaging:function(i,e){return'<div class="portfolio__dots" id='+e+"></div>"}}),$(window).resize(function(){width=$(window).width(),991<=width&&0!==$(".parallaxie").length&&$(".parallaxie").parallaxie({speed:.4,size:"auto"})});var e={el:{ham:$(".burger"),link:$(".nav-mobile__elem"),check:$(".nav-mobile"),circle:$(".header__circle")},init:function(){e.bindUIactions()},bindUIactions:function(){e.el.link.on("click",function(i){e.activateMenu(i)}),e.el.ham.on("click",function(i){e.activateMenu(i),i.preventDefault()})},activateMenu:function(){e.el.check.toggleClass("nav-mobile-active"),e.el.circle.toggleClass("header__circle-active")}};e.init();new SmoothScroll('a[href*="#"]',{speed:500,easing:"easeInOutCubic"});new WOW({offset:200,mobile:!1}).init(),new WOW({mobile:!1,boxClass:"wow-mini"}).init()});
//# sourceMappingURL=main.js.map