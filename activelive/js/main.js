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
