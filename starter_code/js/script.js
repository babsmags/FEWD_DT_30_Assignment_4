$(document).ready(function(){
	console.log('this javascript is loading on Relaxr page');

		function readmore(){

		$('#show-this-on-click').slideDown('slow',function() {
			$('.readmore').hide();
			$('.readless').show();
		});


		console.log('readmore was clicked'); 
	}

		function readless(){
		$('#show-this-on-click').slideUp('slow',function() {
			$('.readless').hide();
			$('.readmore').show();
		});


		console.log('readless was clicked'); 
	}

		function learnmore(){
		$('.learnmore').hide();
		$('#learnmoretext').slideDown('slow');
	
		console.log('learnmore was clicked'); 
	}

	$(".readmore").click(readmore);
	$(".readless").click(readless);
	$(".learnmore").click(learnmore);


});
