
	// Класс View

	
	function View() {

	}


	View.prototype.taskTemplate = function (container){

		var taskText;
		if (container == "ordinary_list"){
			taskText = model.task.text();
		}
		else
		if (container == "priority_list"){
			taskText = model.advancedTask.text();
		}		

		var template = 
		'<div class="item" >'+ 
			taskText + 
			'<br>'+
			'<a href="#" >Удалить</a><div class="clear">'+
		'</div>';
		return template;
	};
	
	var view = new View();
