$(document).ready(function(){
	$(".btng").click(function(){
		var i = $(this).attr("gl");
		$(".btng").removeClass("active");
		$(this).addClass("active");
		$(".gallery").slideUp(function(){
			$(i).slideDown();
		});
	});
});
