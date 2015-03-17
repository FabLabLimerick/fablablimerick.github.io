
$('div.menucollapse').click(function(){
	if( $('#botones').hasClass('collapsing') === true){
		$('#botones').removeClass('collapsing');
	}else{
		$('#botones').addClass('collapsing');
	}
});


$('div#botones').click(function(){
	$('#botones').removeClass('collapsing').addClass('collapsing');
});

/*
	February- 2015
	Improving list of events
*/
$( document ).ready(function() {
	var num = $("#events .container .section-list").children("article").size();
   // Hide past events on Home Page
    $.each($("#events .container .section-list").children("article"),function(index,value){
    	var currentDate = new Date();
    	var eventDate = new Date(this.getAttribute("date"));
    	eventDate.setTime('23:59');
    	if(eventDate <  currentDate){
    		$(this).next("hr").remove();
    		$(this).remove();
    		}
    	// Case of 0 events on main, show "More events soon"
		if ( index == (num-1)){
	    	if($("#events .container .section-list").children('article').size() == 0){
		    	$("#events .container .section-list").remove();
		    	$("#events .container #nextEvents").text("MORE EVENTS COMING SOON");
	    	}
	    }
    });
    
    // Hide past events on Event Page
    num = $(".body-events.current .section-list").children("article").size();
    $.each($(".body-events.current .section-list").children("article"),function(index,value){
		var currentDate = new Date();	
		var eventDate = new Date(this.getAttribute("date"));
		eventDate.setTime('23:59');
		if(eventDate <  currentDate){ // It is a previous event
			$(this).addClass("past");
			if($(".body-events.previous .section-list hr").first().hasClass("gray") == false ){
				$(".body-events.previous .section-list hr").first().addClass("gray");
			}
    		//$(".body-events.previous .section-list").html("");			
    		$(".body-events.previous .section-list").prepend(this.outerHTML);
    		$(".body-events.previous .section-list").prepend("<hr class='event'>");
    		$(this).next("hr").remove();
    		$(this).remove();
    			
    	}
    	if ( index == (num-1)){
			if($(".body-events.current .section-list").children('article').size() == 0){
						$(".body-events.current .section-header").remove();
			}
    	}
	}); // end each

});