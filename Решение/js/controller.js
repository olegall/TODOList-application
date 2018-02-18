	
	$(window).ready(function(){
		$(".input_value").click(function(event){
			model.emptyInput(event);
		});

		$(".ordinary_list .input_value").keypress(function(event){
			if (event.which == 13){		
				model.task.add(event);
			}
		});
		
		$(document).on("click", ".item a", function(event) {
			model.task.remove(event);
		});
		
		$(document).on("mousedown", ".item", function(event) {
			model.task.setMoved(event);
		});	
		
		$(".priority_list .input_value").keypress(function(event){
			if (event.which == 13){
				model.advancedTask.add(event);
				model.advancedTask.assignNotification($(".priority_list .input_value").val());
			}
		});		
		
		$(document).on("mousedown", ".item", function(event) {	
			model.makeDroppable(event);
		});
	});