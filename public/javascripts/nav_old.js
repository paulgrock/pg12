(function(){
  var navLinks = $("nav").find("a");

  function clickFlip(evt) {
    evt.preventDefault();
    var side = calculateSide(evt, this);
    if (side !== 'back') {
      getNewContent(evt);
      navLinks.removeClass("flipLeft flipRight flipFront");
      if (side === 'front left') {
        $(this).addClass("flipLeft").siblings().addClass("flipFront");
      } else if (side === 'front right') {
        $(this).addClass("flipRight").siblings().addClass("flipFront");
      }
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
  function getNewContent(evt){
    var documentLocation = evt.target.href.split("/"),
        pageLoad = $.ajax({
          url: "/" + documentLocation[documentLocation.length-1]
        }),
        $content = $("#content");
    history.pushState({"page": documentLocation[documentLocation.length-1]}, documentLocation[documentLocation.length-1] + " |  paulgrock.com", "/" + documentLocation[documentLocation.length-1]);
    var sliding = $content.slideUp("fast");
    $.when(sliding.promise(), pageLoad).done(function(elem, data){
      $content.html($(data[0]).find("#content").html()).slideDown("fast");
    });
  }
  window.addEventListener("popstate", function(evt){
    console.log(evt, evt.state);
  });
  navLinks.click(clickFlip);

})();