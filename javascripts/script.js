$(document).ready(function(){
	$(".menu_text.1").click(function(){
		$(".ad_menu_1.hidden,.ad_menu_2.hidden").toggleClass("hidden");
	});
});

$(document).ready(function(){
	$(".menu_text.2").click(function(){
		$(".ad_menu_3.hidden,.ad_menu_4.hidden,.ad_menu_5.hidden").toggleClass("hidden");
	});
});

$(document).ready(function(){
	$(".floors_txt_1").click(function(){
		$(".space_img1, .space_img2, .space_img3").toggleClass("hidden");
		$(".reception_images").toggleClass("hidden");
		$(".floors_txt_2, .floors_txt_3, .floors_txt_4, .floors_txt_5").css("color","#575757");
		$(" .space_page_hr_2, .space_page_hr_3, .space_page_hr_4").css("border-color","#575757");
	});
});



$(document).ready(function(){
	$(".floors_txt_2").click(function(){
		$(".space_img1, .space_img2, .space_img3").toggleClass("hidden");
		$(".cafe_images").toggleClass("hidden");
		$(".floors_txt_1, .floors_txt_3, .floors_txt_4, .floors_txt_5").css("color","#575757");
		$(".space_page_hr_1, .space_page_hr_3, .space_page_hr_4").css("border-color","#575757");
	});
});

$(document).ready(function(){
	$(".floors_txt_3").click(function(){
		$(".space_img1, .space_img2, .space_img3").toggleClass("hidden");
		$(".stitching_images").toggleClass("hidden");
		$(".floors_txt_1, .floors_txt_2, .floors_txt_4, .floors_txt_5").css("color","#575757");
		$(".space_page_hr_1, .space_page_hr_2, .space_page_hr_4").css("border-color","#575757");
	});
});

$(document).ready(function(){
	$(".floors_txt_4").click(function(){
		$(".space_img1, .space_img2, .space_img3").toggleClass("hidden");
		$(".weaving_images").toggleClass("hidden");
		$(".floors_txt_1, .floors_txt_2, .floors_txt_3, .floors_txt_5").css("color","#575757");
		$(".space_page_hr_1, .space_page_hr_2, .space_page_hr_3").css("border-color","#575757");
	});
});

$(document).ready(function(){
	$(".floors_txt_5").click(function(){
		$(".space_img1, .space_img2, .space_img3").toggleClass("hidden");
		$(".knitting_images").toggleClass("hidden");
		$(".floors_txt_1, .floors_txt_2, .floors_txt_3, .floors_txt_4").css("color","#575757");
		$(".space_page_hr_1, .space_page_hr_2, .space_page_hr_3, .space_page_hr_4").css("border-color","#575757");
	});
});
