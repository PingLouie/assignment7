$("body").click(function() {
	alert("click any colored boxes!!!")
});

$(document).ready(function() {
	$(".lastRed").hide();
	$(".lastOrange").hide();
	$(".lastYellow").hide();
	$(".lastGreen").hide();
});

$(".box9").click(function() {
	$(".box9").hide(1000);
	$(".lastRed").show(1000);
	$(".lastOrange").show(1000);
	$(".lastYellow").show(1000);
	$(".lastGreen").show(1000);
});

$(".box1").click(function() {
	$(".box1").fadeOut(1000);
});

$(".hover").mouseover(function() {
	$(".hover").animate({
		left: "700px",
		width: "700px"
	});
});

$(".hover").mouseout(function () {
	$(".hover").animate({
		left: "100px",
		width: "100px"
	});
});

$(".box3").click(function(){
	$(".box3").hide();
});

$(".box4").click(function(){
	$(".box4").hide();
});

$(".box5").mouseover(function(){
	$(".box5").slideUp("slow")
});

$(".box6").click(function(){
	$(".box6").slideUp("slow")
});

$(".box10").click(function(){
	$(".box10").slideUp("slow")
});

$(".box7").click(
	function() {
		$(".box7").fadeOut(1000);
	});

$(".box8").click(
	function() {
		$(".box8").fadeOut(1000);
	});

$(".box2").click(
	function() {
		$(".box2").fadeOut(1000);
	});
