(function(){function c(a){var b=d(a,this);b==="front left"?$(this).addClass("flipLeft back"):b==="front right"?$(this).addClass("flipRight back"):b==="back left"?$(this).removeClass("back flipRight flipLeft"):b==="back right"&&$(this).removeClass("back flipRight flipLeft")}function d(a,b){var c=$(b).width(),d=a.offsetX,e=$(b).hasClass("back");return e?d<c/2?"back left":"back right":d<c/2?"front left":"front right"}var a=$("#mainNav").find(".nav"),b=$("#mainNav").find("a");b.click(function(a){a.preventDefault()});a.click(c)})();