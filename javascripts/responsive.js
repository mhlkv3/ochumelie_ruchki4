$(".floors_txt_1").click(function () {
     if ($(".space_images").hasClass("hidden")) {
       $(".floors_txt_2, .floors_txt_3, .floors_txt_4, .floors_txt_5").addClass("grey_color");
     	 $(".space_page_hr_2, .space_page_hr_3, .space_page_hr_4").addClass("grey_color_1");
     }
     $(this).toggleClass("grey_color");
   });




    $(".floors_txt_1").click(function(){
    	$(".space_images").addClass("hidden");
    	$(".reception_images").removeClass("hidden");
    	$(".floors_txt_2, .floors_txt_3, .floors_txt_4, .floors_txt_5").addClass("grey_color");
    	$(" .space_page_hr_2, .space_page_hr_3, .space_page_hr_4").addClass("grey_color_1");
    });









$(".floors_txt_1").click(function(){
	$(".space_images").addClass("hidden");
	$(".reception_images").removeClass("hidden");
	$(".floors_txt_2, .floors_txt_3, .floors_txt_4, .floors_txt_5").addClass("grey_color");
	$(" .space_page_hr_2, .space_page_hr_3, .space_page_hr_4").addClass("grey_color_1");
});

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
