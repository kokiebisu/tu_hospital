$(document).ready(function () {
  $('#slideshow > div:gt(0)').hide();

  setInterval(function () {
    $('#slideshow > div:first-child')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  }, 5000);
});
