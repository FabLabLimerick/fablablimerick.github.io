
$("div.menucollapse").click(function(){
	if( $("#botones").hasClass("collapse") == true){
		$("#botones").removeClass("collapse");
	}else{
		$("#botones").addClass("collapse");
	}	
});


$("div#botones").click(function(){
	$("#botones").removeClass("collapse").addClass("collapse");	
});

