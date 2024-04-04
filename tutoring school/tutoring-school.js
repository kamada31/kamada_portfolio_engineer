// スマホナビの表示・非表示
$(function() {
  const hum = $('#hamburger, .close')
  const nav = $('.sp-nav')
  hum.on('click', function(){
      nav.toggleClass('toggle');
  });
});
