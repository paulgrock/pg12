(function(){
  var navContainer = $("#mainNav").find(".nav"),
      navLinks = $("#mainNav").find("a");

  function clickFlip(evt) {
    evt.preventDefault();
    var side = calculateSide(evt, this);
    $(this).removeClass("tiltLeft tiltRight");
    if (side === 'front left') {
      $(this).addClass("flipLeft").siblings().addClass("flipFront");
    } else if (side === 'front right') {
      $(this).addClass("flipRight").siblings().addClass("flipFront");
    } else if (side === 'back') {
      $(this).removeClass("flipFront");
      $(this).siblings().removeClass("flipRight flipLeft");
    }
  }

  function clickTilt(evt) {
    var side = calculateSide(evt, this);
    if (side === 'front left') {
      $(this).addClass("tiltLeft");
    } else if (side === 'front right') {
      $(this).addClass("tiltRight");
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
      return "back";
    }
  }
  navLinks.click(clickFlip);
  navLinks.mousedown(clickTilt);

})();