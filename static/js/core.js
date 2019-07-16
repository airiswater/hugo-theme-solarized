document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ( $navbarBurgers.length>0){
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', ()=>{
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

/*if ($('.pageloader').length) {

    $('.pageloader').toggleClass('is-active');

    $(window).on('load', function() {
        var pageloaderTimeout = setTimeout( function() {
            $('.pageloader').toggleClass('is-active');
            $('.infraloader').toggleClass('is-active')
            clearTimeout( pageloaderTimeout );
        }, 300 );
    })
}*/

function functionPopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  setTimeout(function() { 
    document.getElementById("myPopup").classList.toggle("show");}, 2000);
}
/*
$('.btn-counter').on('click', function(event,count){
  event.preventDefault();
  var $this = $(this),
  count = $this.attr('data-count'),
  active = $this.hasClass('active'),
  multiple = $this.hasClass('multiple-count');
  
  $.fn.noop =$.noop;
  $this.attr('data-count', ! active || multiple ? ++count : --count )[multiple ? 'noop' : 'toggleClass']('active');

});
*/
