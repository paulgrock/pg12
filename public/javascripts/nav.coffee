$navLinks = $("nav").find("a")

clickFlip = (evt) ->
	evt.preventDefault()
	side = calculateSide evt, this
	if side isnt "back"
		getNewContent evt
		$navLinks.removeClass "flipLeft flipRight flipFront"
		if side is "front left"
			$(this).addClass("flipLeft").siblings().addClass("flipFront")
		else if side is "front right"
			$(this).addClass("flipRight").siblings().addClass("flipFront")

calculateSide = (evt, elem) ->
	width = $(elem).width()
	left = evt.offsetX
	back = $(elem).hasClass("back")

	if not back
		if left < width/2
			"front left"
		else
			"front right"
	else
		"back"

getNewContent = (evt) ->
	location = evt.target.href.split("/")
	pageLoad = $.ajax {"url": "/" + location[location.length- 1]}
	$content = $("#content")

	history.pushState {"page": location[location.length-1]}, (location[location.length - 1] + " |  paulgrock.com"), ("/" + location[location.length - 1])  
	sliding = $content.slideUp "fast"

	$.when(sliding.promise(), pageLoad)
		.done (elem, data) ->
			$content.html($(data[0]).find("#content").html()).slideDown "fast"


$navLinks.click clickFlip
