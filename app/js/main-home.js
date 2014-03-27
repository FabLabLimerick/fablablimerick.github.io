
$("div.menucollapse").click(function(){
	if( $("#botones").hasClass("collapsing") == true){
		$("#botones").removeClass("collapsing");
	}else{
		$("#botones").addClass("collapsing");
	}	
});


$("div#botones").click(function(){
	$("#botones").removeClass("collapsing").addClass("collapsing");	
});

