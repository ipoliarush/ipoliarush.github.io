var $bg = $('.bg'),
    $Vector_1 = $('.Vector-1'),
    $Vector_2 = $('.Vector-2'),
    $Ellipse_1 = $('.Ellipse-1'),
    $Ellipse_2 = $('.Ellipse-2'),
    $Ellipse_3 = $('.Ellipse-3'),
    $Ellipse_4 = $('.Ellipse-4'),
    $Ellipse_5 = $('.Ellipse-5'),
    $container = $('header'),
    container_w = $container.width(),
    container_h = $container.height();

$(window).on('mousemove.parallax', function(event) {
  var pos_x = event.pageX,
      pos_y = event.pageY,
      left  = 0,
      top   = 0;
      right  = 0,
      bottom   = 0;

  left = container_w / 2 - pos_x;
  top  = container_h / 2 - pos_y;
  
  TweenMax.to(
    $bg, 
    3, 
    { 
      css: { 
        transform: 'translateX(' + left / 12 + 'px) translateY(' + top / 18 + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $Vector_1, 
    2, 
    { 
      css: { 
        transform: 'translateX(' + left / 15 + 'px) translateY(' + top / 12 + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $Vector_2, 
    3, 
    { 
      css: { 
        transform: 'translateX(' + left / 18 + 'px) translateY(' + top / 15 + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $Ellipse_1, 
    3, 
    { 
      css: { 
        transform: 'translateX(' + left / 9 + 'px) translateY(' + top / 17 + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $Ellipse_2, 
    2, 
    { 
      css: { 
        transform: 'translateX(' + left / 10 + 'px) translateY(' + top / 10 + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $Ellipse_3, 
    3, 
    { 
      css: { 
        transform: 'translateX(' + left / 16 + 'px) translateY(' + top / 16 + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $Ellipse_4, 
    2, 
    { 
      css: { 
        transform: 'translateX(' + left / 17 + 'px) translateY(' + top / 15 + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $Ellipse_5, 
    2, 
    { 
      css: { 
        transform: 'translateX(' + left / 20 + 'px) translateY(' + top / 20 + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    }
  )
});