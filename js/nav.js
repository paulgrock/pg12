(function(){
  var navContainer = $("#mainNav").find(".nav"),
      navLinks = $("#mainNav").find("a");
  navLinks.click(function(evt){
    evt.preventDefault();
  });

  function clickFlip(evt) {
    var side = calculateSide(evt, this);
    if (side === 'front left') {
      $(this).addClass("flipLeft back");
    } else if (side === 'front right') {
      $(this).addClass("flipRight back");
    } else if (side === 'back left') {
      $(this).removeClass("back flipRight flipLeft");
    } else if (side === 'back right') {
      $(this).removeClass("back flipRight flipLeft");
    }
  }

  function calculateSide(evt, elem){
    var width = $(elem).width(),
        left = evt.offsetX,
        back = $(elem).hasClass("back");
    if (!back) {
      if (left < width/2) {
        return "front left";
      } else {
        return "front right";
      }
    } else {
      if (left < width/2) {
        return "back left";
      } else {
        return "back right";
      }
    }
  }
  navContainer.click(clickFlip);

})();