'use strict'; 
{

 // ヒーロエリアのスライドショー

 function move() {
  setTimeout(() => {
    images[currentIndex].classList.remove('current');
    currentIndex++;
    if(currentIndex > images.length -1) {
      currentIndex = 0;
    }

    images[currentIndex].classList.add('current');
    move();
  },4000)
}

const images = document.querySelectorAll('.top_wrapper li');
let currentIndex = 0;
move();



// Intersection Observer API

  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const observer = new IntersectionObserver(callback, {
    threshold: 0.2,
  });

  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });



  // ハンバーガーメニュー実装

(function($) {
    var $nav   = $('#navArea');
    var $navItem   = $('#navArea ul li ');
    var $btn   = $('.toggle_btn');
    var $mask  = $('#mask');
    var open   = 'open'; 
    
    $btn.on( 'click', function() {
      if ( ! $nav.hasClass( open ) ) {
        $nav.addClass( open );
      } else {
        $nav.removeClass( open );
      }
    });
    
    $mask.on('click', function() {
      $nav.removeClass( open );
    });

    $navItem.on('click', function() {
      $nav.removeClass( open );

    });
  } )(jQuery);



$(window).on('scroll',function(){

  $(".lineAnimate").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight){
      $(this).addClass('isActive');
    }
  });
  });



//  ヘッダースクロール

  jQuery(window).on('scroll', function () {
  　if (250 < jQuery(this).scrollTop()) {
  　　jQuery('.header_wrapper').addClass('scrolled2');
  　} else {
  　　jQuery('.header_wrapper').removeClass('scrolled2');
  　}
  });


function BlurTextAnimeControl() {
$('.blurTrigger').each(function(){ 
var elemPos = $(this).offset().top-50;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll >= elemPos - windowHeight){
  $(this).addClass('blur');
}else{
  $(this).removeClass('blur');
    }
  });
}

$(window).scroll(function () {
  BlurTextAnimeControl();
});

$(window).on('load', function () {
BlurTextAnimeControl();
});



  // slick実装

    $('.news_slider').slick({
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: '<div class="slick-prev"></div>',
      nextArrow: '<div class="slick-next"></div>',
      dots: true,
      responsive: [
        {
          breakpoint: 769,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 426,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});


  // scrolle smooth

  window.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const anchorLinksArr = Array.prototype.slice.call(anchorLinks);
  
    anchorLinksArr.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.hash;
        const targetElement = document.querySelector(targetId);
        const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
        window.scrollTo({
          top: targetOffsetTop,
          behavior: "smooth"
        });
      });
    });
  });

}