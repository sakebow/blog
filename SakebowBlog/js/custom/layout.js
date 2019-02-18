function navLayout() {
	if($(window).width() >= 640 && !$(".layui-nav-item").eq(0).hasClass("layui-nav-itemed")) {
		$(".layui-nav-item").eq(0).addClass("layui-nav-itemed");
	} else if($(window).width() <= 640) {
		if($(".layui-nav-item").eq(0).hasClass("layui-nav-itemed")) {
			$(".layui-nav-item").eq(0).removeClass("layui-nav-itemed")
		}
	}
}
$(window).resize(function() {
	navLayout();
});
$(document).ready(function() {
	$("#closeCall").css("cursor", "pointer");
	$("#closeImg").css("cursor", "pointer");
	$("#closePay").css("cursor", "pointer");
	navLayout();
	$(".title-items").eq(2).click(function() {
		$(".bg").removeClass("alert-hide");
		$(".bg").addClass("bg-in");
		$(".alert").eq(0).addClass("alert-in").removeClass("alert-hide");
	});
	$("#closePay").click(function() {
		$(".bg").addClass("alert-hide");
		$(".alert").eq(0).removeClass("alert-in").addClass("alert-hide")
	});
	$(".title-items").eq(1).click(function(){
		$(".bg").removeClass("alert-hide");
		$(".bg").addClass("bg-in");
		$(".alert").eq(1).addClass("alert-in").removeClass("alert-hide");
	});
	$("#closeCall").click(function(){
		$(".bg").addClass("alert-hide");
		$(".alert").eq(1).removeClass("alert-in").addClass("alert-hide");
	});
	$(".doc-images-frame img").click(function(){
		var source = $(this).attr("src");
		var description = $(this).parent().children("figcaption").text()
		$("#showImg").attr("src", source);
		$("#showImg").parent().children("figcaption").text(description);
		$(".bg").removeClass("alert-hide");
		$(".bg").addClass("bg-in");
		$(".alert-img").eq(0).removeClass("alert-hide").addClass("alert-in");
		$(".alert-img img").css("max-width", $(window).width() * 0.83);
	});
	$("#closeImg").click(function(){
		$(".bg").addClass("alert-hide");
		$(".alert-img").eq(2).removeClass("alert-in").addClass("alert-hide");
	});
});