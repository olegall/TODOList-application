


	// Класс Model
	function Model() {
	}
	
	var times = [];
	var taskIndex;
	
	Model.prototype.task = new Object();
	Model.prototype.advancedTask = new Object();
	
	

	
	Model.prototype.task.text = function(container){
		return $("."+container+" .input_value").val();
	}	
	
	Model.prototype.task.add = function(event){	
		$(event.target).parent().append(view.taskTemplate($(event.target).parent().attr("class").split(" ")[0]));
		$(".item").draggable({ revert: "invalid" });
	}	
	
	Model.prototype.task.remove = function(event){
		$(event.target).parent().remove();
	}
	
	Model.prototype.task.setMoved = function(event){
		$(".item").removeAttr("id");
		$(event.target).attr("id","draggable");
		taskIndex = $(".priority_list .item").index(event.target);
		console.log(taskIndex);	
	}	
	
	






	
	Model.prototype.advancedTask.__proto__ = Model.prototype.task;
	
	Model.prototype.advancedTask.time = function(){
		return $(".time").val();
	}	
	
	Model.prototype.advancedTask.assignNotification = function (notificationText){

		var notification = notificationText;
		function notify() {
			new Notification(notification);
		}
		
		times.push(setTimeout(notify, Model.prototype.advancedTask.time()));
		console.log(times);
	}
	


	
	
	
	Model.prototype.emptyInput = function(event){
		$(event.target).attr("value","");
	}	
	
	Model.prototype.makeDroppable = function(event){
		var droppableList;
		if ($(event.target).parent().attr("class").split(" ")[0] == "ordinary_list"){
			droppableList = ".priority_list";
			$(".ordinary_list").droppable({ disabled: true });
			$(".priority_list").droppable({ disabled: false });
		}
		
		if ($(event.target).parent().attr("class").split(" ")[0] == "priority_list"){
			droppableList = ".ordinary_list";
			$(".priority_list").droppable({ disabled: true });
			$(".ordinary_list").droppable({ disabled: false });
		}
		
		$(droppableList).droppable({
			accept: ".item",
			hoverClass: "ui-state-active",
			drop: function(event, ui) {
				$(this).append( $("#draggable").detach().css({top:0, left:0}) );
				$(".item").draggable();
			
				if ($(this).attr("class").split(" ")[0] == "ordinary_list"){
					clearTimeout(times[taskIndex]);
					times.splice(taskIndex, 1);
					console.log(times);
				} else {
					Model.prototype.advancedTask.assignNotification($("#draggable").text().replace("Удалить",""));
				}
				
			}
		});
	}
	
	
	
	
	var model = new Model();


	
	
