$(window).on('resize', function () {
  if ($(window).width() > 380) {
    // код для окна больше 1280 пикселей
    $(document).ready(function(){
    	$(".floors_txt11").click(function(){
    		$(".merch_img").toggleClass("hidden");
    		$(".sch_2_txt").toggleClass("hidden");
    		$(".merch_1").toggleClass("hidden");
    		$(".floors_txt22, .floors_txt33, .floors_txt44").css("color","#575757");
    		$(".space_page_hr_2, .space_page_hr_3").css("border-color","#575757");
    	});
  } else {
    // код для окна меньше 1280 пикселей
    $(".floors_txt11").click(function(){
      $(".floors_txt11").click(function(){
      $("body").css("color","red");
    });
  }
});
