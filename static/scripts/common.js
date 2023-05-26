$(document).ready(function() {
  // Click event handler for the image element
  $('.nav').on('click', function() {
    var $img = $(this);
    
    // Check the current src value
    if ($img.attr('src') === './static/images/menu_open.png') {
      // Change the src to the new image
      $img.attr('src', './static/images/menu_close.png');
    } else {
      // Change the src back to the original image
      $img.attr('src', './static/images/menu_open.png');
    }
  });
});
