$('.parallaxie').parallaxie({
  speed: 0.4,
  size : "auto",
});
    
var wow = new WOW(
  {
    offset: 100,
    mobile: false,
  }
);
wow.init();
    
document.body.onload = function() {
  setTimeout(function() {
    var preloader = document.getElementById('loader');
    if( !preloader.classList.contains('done') )
    {
      preloader.classList.add('done');
    }
  }, 1000)
}

var Menu = {
  
  el: {
    ham: $('.back'),
    link: $('.mobile__link'),
    menuTop: $('.menu-top'),
    menuMiddle: $('.menu-middle'),
    menuBottom: $('.menu-bottom'),
    check: $('.mobile')
  },
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.link
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    ),
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    )
  },
  
  activateMenu: function() {
    Menu.el.ham.toggleClass('back-fixed');
    Menu.el.check.toggleClass('mobile-active');
    Menu.el.menuTop.toggleClass('menu-top-click');
    Menu.el.menuMiddle.toggleClass('menu-middle-click');
    Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
  }
};

Menu.init();
