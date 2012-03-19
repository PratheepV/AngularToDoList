function AppCtrl(){
	var scope = this;
	scope.add=false;
	scope.tasks = [];
	scope.task={};
	
	scope.flags={};
	//method for ellipse
	scope.ellipse = function(str,limit){
		if(!str){
			return;
		}
		limit = limit || 25;
		return str.length > limit ? str.substr(0,limit)+'...' : str;
	}
	
	scope.save = function(taskIndx){
		var task = {};
		if(!scope.task.name || !scope.task.name.trim()){
			scope.flags.required=true;
			return;
		}
		scope.task.date = document.getElementById('date').value;
		console.log(taskIndx,taskIndx !=undefined);
		angular.Object.extend(task,scope.task);
		if(taskIndx != undefined){
			console.log('updating');
			scope.tasks[taskIndx] = task;
		}
		else{
			console.log('adding')
			scope.tasks.unshift(task);
		}
		scope.cancel();
	}
	
	scope.cancel = function(){
		scope.task={};
		scope.add = false;
	}
}