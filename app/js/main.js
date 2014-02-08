$(function(){
	$.vegas('slideshow', {
	  delay:9000,
	  preload:false,
	  backgrounds:[
	    { src:'/img/background_1.jpg', fade:3000, loading:false },
	    { src:'/img/background_2.jpg', fade:3000, loading:false },
	    { src:'/img/background_3.jpg', fade:3000, loading:false }
	  ]
	});
});
