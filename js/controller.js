

	$(window).ready(function() 
	{
		
		$(".input_value").click(function(event){
			model.emptyInput(event);
		});
		

		$(".input_value").keypress(function(event){
			model.task.add(event);
		});
		$(document).on("click", ".item a", function(event) {
			model.task.remove(event);
		});
		$(document).on("mousedown", ".item", function(event) {
			model.task.setMoved(event);
		});		
		

		$(document).on("mousedown", ".item", function(event) {	
			model.makeDroppable(event);
		});

	});