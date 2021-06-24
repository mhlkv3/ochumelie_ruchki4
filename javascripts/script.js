$(document).ready(function(){
  setTimeout(function(){
    $("#loader").css("opacity","0");
  }, 2500);
  setTimeout(function(){
    $("#loader").css("display","none");
  }, 3500);


/////ГЛАВНЫЙ ЭКРАН//////

	$(".menu_text.1").click(function(){
		$(".ad_menu_1.hidden,.ad_menu_2.hidden").toggleClass("hidden");
	});

	$(".menu_text.2").click(function(){
		$(".ad_menu_3.hidden,.ad_menu_4.hidden,.ad_menu_5.hidden").toggleClass("hidden");
	});

	$(".ad_menu_4").click(function(){
		$(".ad_menu_6.hidden,.ad_menu_7.hidden").toggleClass("hidden");
	});



/////ФОТО ПРОСТРАНСТВА//////

$(".floors_txt_1").click(function(){
	$(".space_images").addClass("hidden");
	$(".reception_images").toggleClass("hidden");
	$(".floors_txt_2, .floors_txt_3, .floors_txt_4, .floors_txt_5").toggleClass("grey_color");
	$(" .space_page_hr_2, .space_page_hr_3, .space_page_hr_4").toggleClass("grey_color_1");
});

$(".floors_txt_2").click(function(){
	$(".space_images").addClass("hidden");
	$(".cafe_images").toggleClass("hidden");
	$(".reception_images, .stitching_images, .weaving_images, .knitting_images").addClass("hidden");
	$(".floors_txt_1, .floors_txt_3, .floors_txt_4, .floors_txt_5").toggleClass("grey_color");
	$(".space_page_hr_1, .space_page_hr_3, .space_page_hr_4").toggleClass("grey_color_1");
});

$(".floors_txt_3").click(function(){
	$(".space_images").addClass("hidden");
	$(".stitching_images").toggleClass("hidden");
	$(".floors_txt_1, .floors_txt_2, .floors_txt_4, .floors_txt_5").toggleClass("grey_color");
	$(".space_page_hr_1, .space_page_hr_2, .space_page_hr_4").toggleClass("grey_color_1");
});

$(".floors_txt_4").click(function(){
	$(".space_images").addClass("hidden");
	$(".weaving_images").toggleClass("hidden");
	$(".floors_txt_1, .floors_txt_2, .floors_txt_3, .floors_txt_5").toggleClass("grey_color");
	$(".space_page_hr_1, .space_page_hr_2, .space_page_hr_3").toggleClass("grey_color_1");
});

$(".floors_txt_5").click(function(){
	$(".space_images").add("hidden");
	$(".knitting_images").toggleClass("hidden");
	$(".floors_txt_1, .floors_txt_2, .floors_txt_3, .floors_txt_4").toggleClass("grey_color");
	$(".space_page_hr_1, .space_page_hr_2, .space_page_hr_3, .space_page_hr_4").toggleClass("grey_color_1");
});


		/////НАВИГАЦИЯ//////

			$(".floors_txt1").click(function(){
				$(".nav_img1").toggleClass("hidden");
				$(".nav_img_1").toggleClass("hidden");
				$(".floors_txt2, .floors_txt3, .floors_txt4, .floors_txt5, .floors_txt6, .floors_txt7").toggleClass("grey_color");
				$(".space_page_hr2, .space_page_hr3, .space_page_hr4, .space_page_hr5, .space_page_hr6").toggleClass("grey_color_1");
			});

			$(".floors_txt2").click(function(){
				$(".nav_img1").toggleClass("hidden");
				$(".nav_img_2").toggleClass("hidden");
				$(".floors_txt1, .floors_txt3, .floors_txt4, .floors_txt5, .floors_txt6, .floors_txt7").toggleClass("grey_color");
				$(".space_page_hr1, .space_page_hr3, .space_page_hr4, .space_page_hr5, .space_page_hr6").toggleClass("grey_color_1");
			});

			$(".floors_txt3").click(function(){
				$(".nav_img1").toggleClass("hidden");
				$(".nav_img_3").toggleClass("hidden");
				$(".floors_txt1, .floors_txt2, .floors_txt4, .floors_txt5, .floors_txt6, .floors_txt7").toggleClass("grey_color");
				$(".space_page_hr1, .space_page_hr2, .space_page_hr4, .space_page_hr5, .space_page_hr6").toggleClass("grey_color_1");
			});

			$(".floors_txt4").click(function(){
				$(".nav_img1").toggleClass("hidden");
				$(".nav_img_4").toggleClass("hidden");
				$(".floors_txt1, .floors_txt2, .floors_txt3, .floors_txt5, .floors_txt6, .floors_txt7").toggleClass("grey_color");
				$(".space_page_hr1, .space_page_hr2, .space_page_hr3, .space_page_hr5, .space_page_hr6").toggleClass("grey_color_1");
			});

			$(".floors_txt5").click(function(){
				$(".nav_img1").toggleClass("hidden");
				$(".nav_img_5").toggleClass("hidden");
				$(".floors_txt1, .floors_txt2, .floors_txt3, .floors_txt4, .floors_txt6, .floors_txt7").toggleClass("grey_color");
				$(".space_page_hr1, .space_page_hr2, .space_page_hr3, .space_page_hr4, .space_page_hr6").toggleClass("grey_color_1");
			});

			$(".floors_txt6").click(function(){
				$(".nav_img1").toggleClass("hidden");
				$(".nav_img_6").toggleClass("hidden");
				$(".floors_txt1, .floors_txt2, .floors_txt3, .floors_txt4, .floors_txt5, .floors_txt7").toggleClass("grey_color");
				$(".space_page_hr1, .space_page_hr2, .space_page_hr3, .space_page_hr4, .space_page_hr5").toggleClass("grey_color_1");
			});

			$(".floors_txt7").click(function(){
				$(".nav_img1").toggleClass("hidden");
				$(".nav_img_7").toggleClass("hidden");
				$(".floors_txt1, .floors_txt2, .floors_txt3, .floors_txt4, .floors_txt5, .floors_txt6").toggleClass("grey_color");
				$(".space_page_hr1, .space_page_hr2, .space_page_hr3, .space_page_hr4, .space_page_hr5, .space_page_hr6").toggleClass("grey_color_1");
			});

			/////МЕРЧ//////

				$(".floors_txt1").click(function(){
					$(".merch_1.hidden").toggleClass("hidden");
					$(".price_1, .price_2").removeClass("hidden");
					$(".merch_img").addClass("hidden");
					$(".sch_2_txt_2").addClass("hidden");
					$(".merch_2, .merch_3, .merch_4").addClass("hidden");
					$(".floors_txt2, .floors_txt3, .floors_txt4").toggleClass("grey_color_1");
					$(".space_page_hr2, .space_page_hr3").toggleClass("grey_color");
				});

				$(".floors_txt2").click(function(){
					$(".merch_2.hidden").toggleClass("hidden");
					$(".price_1, .price_2").removeClass("hidden");
					$(".merch_img").addClass("hidden");
					$(".sch_2_txt_2").addClass("hidden");
					$(".merch_1, .merch_3, .merch_4").addClass("hidden");
					$(".merch_2").css("transform", "translate3d(0px, -200%, 0px)");
					$(".floors_txt1, .floors_txt3, .floors_txt4").toggleClass("grey_color_1");
					$(".space_page_hr1, .space_page_hr3").toggleClass("grey_color");
				});

				$(".floors_txt3").click(function(){
					$(".merch_3.hidden").toggleClass("hidden");
					$(".price_1, .price_2").removeClass("hidden");
					$(".merch_img").addClass("hidden");
					$(".sch_2_txt_2").addClass("hidden");
					$(".merch_1, .merch_2, .merch_4").addClass("hidden");
					$(".merch_3").css("transform", "translate3d(0px, -300%, 0px)");
					$(".floors_txt2, .floors_txt1, .floors_txt4").toggleClass("grey_color_1");
					$(".space_page_hr2, .space_page_hr1").toggleClass("grey_color");
				});

				$(".floors_txt4").click(function(){
					$(".merch_4.hidden").toggleClass("hidden");
					$(".price_1, .price_2").removeClass("hidden");
					$(".merch_img").addClass("hidden");
					$(".sch_2_txt_2").addClass("hidden");
					$(".merch_1, .merch_2, .merch_3").addClass("hidden")
					$(".merch_4").css("transform", "translate3d(0px, -500%, 0px)");
					$(".floors_txt2, .floors_txt3, .floors_txt1").toggleClass("grey_color_1");
					$(".space_page_hr2, .space_page_hr3, .space_page_hr1").toggleClass("grey_color");
				});


});
