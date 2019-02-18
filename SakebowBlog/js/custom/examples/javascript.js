function getJsonExample_1() {
	var source = "{'info':{'school':[{'code':'1000','name':'湖北大学'},{'code':'1100','name':'纺织大学'}],'specialty':[{'code':'1010','name':'计算机','school':'1000'},{'code':'1110','name':'纺织学','school':'1100'},{'code':'1020','name':'汉语言文学','school':'1000'},{'code':'1120','name':'服装设计学','school':'1100'}],'classes':[{'code':'1011','name':'计算机1班','specialty':'1010'},{'code':'1111','name':'纺织学1班','specialty':'1110'},{'code':'1021','name':'汉语言文学1班','specialty':'1020'},{'code':'1121','name':'服装设计学1班','specialty':'1120'}]}}";
	var target = eval('(' + source + ')');
	alert(target.info.school[0].name + ':' + target.info.school[0].code);
}

function getJsonExample_2() {
	var source = '{"info":{"school":[{"code":"1000","name":"湖北大学"},{"code":"1100","name":"纺织大学"}],"specialty":[{"code":"1010","name":"计算机","school":"1000"},{"code":"1110","name":"纺织学","school":"1100"},{"code":"1020","name":"汉语言文学","school":"1000"},{"code":"1120","name":"服装设计学","school":"1100"}],"classes":[{"code":"1011","name":"计算机1班","specialty":"1010"},{"code":"1111","name":"纺织学1班","specialty":"1110"},{"code":"1021","name":"汉语言文学1班","specialty":"1020"},{"code":"1121","name":"服装设计学1班","specialty":"1120"}]}}';
	var target = jQuery.parseJSON(source);
	alert(target.info.school[1].name + ':' + target.info.school[1].code);
}
function getJsonExample_3() {
	$.ajax({
		type:"get",
		url:"../../js/custom/examples/getJson.json",
		async:false,
		success: function(data) {
			alert(data.info.school[0].name + ":" + data.info.school[0].code);
		},
		error: function() {
			alert("请求失败！");
		}
	});
}
