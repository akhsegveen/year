
$(document).ready(function(){
  var zindex = 10;
  
  $("div.card").click(function(e){
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true
    }

    if ($("div.cards").hasClass("showing")) {
      $("div.card.show")
        .removeClass("show");

      if (isShowing) {
        $("div.cards")
          .removeClass("showing");
      } else {
        $(this)
          .css({zIndex: zindex})
          .addClass("show");

      }

      zindex++;

    } else {
      $("div.cards")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
    }
    
  });
});



$(document).ready(function () {
 
  var show = true;
  var countbox = ".benefits__inner";
  $(window).on("scroll load resize", function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
      var w_height = $(window).height(); // Высота окна браузера
      var d_height = $(document).height(); // Высота всего документа
      var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
      if (w_top + 700 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          $('.benefits__number').css('opacity', '1');
          $('.benefits__number').spincrement({
              thousandSeparator: "",
              duration: 1200
          });
           
          show = false;
      }
  });

});


document.addEventListener('DOMContentLoaded', function () {
// инициализация слайдера
new SimpleAdaptiveSlider('.slider', {
  loop: true,
  autoplay: false,
  interval: 5000,
  swipe: true,
});
});

$(document).ready(function(){
  $("a.photo").fancybox({
    transitionIn: 'elastic',
    transitionOut: 'elastic',
    speedIn: 500,
    speedOut: 500,
  });
});
$('.btnn').click(function(){
$(this).addClass('active').siblings().removeClass('active');
});





(function() {
'use strict';
var btnScrollDown = document.querySelector('#scroll_down');
function scrollDown() {
  var windowCoords = document.documentElement.clientHeight;
  (function scroll() {
    if (window.pageYOffset < windowCoords) {
      window.scrollBy(0, 5);
      setTimeout(scroll, 0);
    }
    if (window.pageYOffset > windowCoords) {
      window.scrollTo(0, windowCoords);
    }
  })();
}
btnScrollDown.addEventListener('click', scrollDown);
})();


const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
window.addEventListener('scroll', animOnScroll);
function animOnScroll() {
  for (let index = 0; index < animItems.length; index++) {
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset (animItem).top;
    const animStart = 4;
    let animItemPoint = window.innerHeight - animItemHeight / animStart;
    if (animItemHeight > window.innerHeight) {
      animItemPoint =  window.innerHeight - window.innerHeight / animStart;
    }
    if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
      animItem.classList.add('_active');
    } else {
      if (!animItem.classList.contains('_anim-no-hide')) {
      animItem.classList.remove('_active');
      } 
    }
  }
}
function offset(el) {
  const rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
}
animOnScroll();
};


jQuery(($) => {
  $('.mybutton--animate-click-one, .mybutton--animate-click-two, .mybutton--animate-click-three')
      .click(function() {
          return _this = this,
          $(_this).stop().addClass('mybutton--click'), setTimeout(function() {
              $(_this).removeClass('mybutton--click');
          }, 600);
  });
});



$(document).ready(function() {
$('.header__burger').click(function(event) {
  $('.header__burger, .header__menu').toggleClass('active');
});
});
$(window).scroll(
  {
      previousTop: 0
  }, 
  function () {
  var currentTop = $(window).scrollTop();
  if (currentTop < this.previousTop) {
      $(".sidebar em").text("Up"); 
      $("header").fadeIn(400);
  } else {
      $(".sidebar em").text("Down");
      $("header").fadeOut(400);
  }
  this.previousTop = currentTop;
});


history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
}); 
