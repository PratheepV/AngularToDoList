function ListCtrl(){
	var scope = this;
	
	scope.edit = function(task){
		scope.$parent.task = task;
		scope.$parent.add = true;
		scope.$parent.taskIndx = angular.Array.indexOf(scope.tasks,task);
	};
	
	scope.delete = function(task) {
		angular.Array.remove(scope.tasks,task);
	};
}