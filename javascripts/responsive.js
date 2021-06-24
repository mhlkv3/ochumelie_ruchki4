// $(document).ready(function() {
// let url = "https://cdnjs.cloudflare.com/ajax/libs/onepage-scroll/1.3.1/jquery.onepage-scroll.min.js";
//
// if ($(window).width() > 414 && $(window).width() > 769) {
//   $.getScript( url, function() {
//     $(".main_merch").onepage_scroll({
//       sectionContainer: ".merch_1, merch_2, merch_3, 4",
//       easing: "ease",
//
//       animationTime: 1000,
//       pagination: true,
//       updateURL: false,
//
//      beforeMove: function(index) {},
//      afterMove: function(index) {},
//      loop: false,
//      keyboard: true,
//      responsiveFallback: false,
//      direction: "vertical"
//      });
//   });
//
// } else if ($(window).width() > 414 && $(window).width() < 769) {
//   $.getScript( url, function() {
//     $(".forwidth768").onepage_scroll({
//       sectionContainer: ".forwidth768_1",
//       easing: "ease",
//
//       animationTime: 1000,
//       pagination: true,
//       updateURL: false,
//
//      beforeMove: function(index) {},
//      afterMove: function(index) {},
//      loop: false,
//      keyboard: true,
//      responsiveFallback: false,
//      direction: "vertical"
//      });
//   });
// }
//
// /////МЕРЧ//////
//
//   $(".floors_txt1").click(function(){
//     $(".merch_1.hidden").toggleClass("hidden");
//     $(".price_1, .price_2").removeClass("hidden");
//     $(".merch_img").addClass("hidden");
//     $(".sch_2_txt_2").addClass("hidden");
//     $(".merch_2, .merch_3, .merch_4").addClass("hidden");
//     $(".floors_txt2, .floors_txt3, .floors_txt4").toggleClass("grey_color_1");
//     $(".space_page_hr2, .space_page_hr3").toggleClass("grey_color");
//   });
//
//   $(".floors_txt2").click(function(){
//     $(".merch_2.hidden").toggleClass("hidden");
//     $(".price_1, .price_2").removeClass("hidden");
//     $(".merch_img").addClass("hidden");
//     $(".sch_2_txt_2").addClass("hidden");
//     $(".merch_1, .merch_3, .merch_4").addClass("hidden");
//     $(".merch_2").css("transform", "translate3d(0px, -200%, 0px)");
//     $(".floors_txt1, .floors_txt3, .floors_txt4").toggleClass("grey_color_1");
//     $(".space_page_hr1, .space_page_hr3").toggleClass("grey_color");
//   });
//
//   $(".floors_txt3").click(function(){
//     $(".merch_3.hidden").toggleClass("hidden");
//     $(".price_1, .price_2").removeClass("hidden");
//     $(".merch_img").addClass("hidden");
//     $(".sch_2_txt_2").addClass("hidden");
//     $(".merch_1, .merch_2, .merch_4").addClass("hidden");
//     $(".merch_3").css("transform", "translate3d(0px, -300%, 0px)");
//     $(".floors_txt2, .floors_txt1, .floors_txt4").toggleClass("grey_color_1");
//     $(".space_page_hr2, .space_page_hr1").toggleClass("grey_color");
//   });
//
//   $(".floors_txt4").click(function(){
//     $(".merch_4.hidden").toggleClass("hidden");
//     $(".price_1, .price_2").removeClass("hidden");
//     $(".merch_img").addClass("hidden");
//     $(".sch_2_txt_2").addClass("hidden");
//     $(".merch_1, .merch_2, .merch_3").addClass("hidden")
//     $(".merch_4").css("transform", "translate3d(0px, -500%, 0px)");
//     $(".floors_txt2, .floors_txt3, .floors_txt1").toggleClass("grey_color_1");
//     $(".space_page_hr2, .space_page_hr3, .space_page_hr1").toggleClass("grey_color");
//   });
// });
