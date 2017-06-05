angular.module('taskServices',[])
  .service('taskService',['$http','$q',function ($http,$q) {

    // service to get tasks
    
    this.getTasks = function () {
      return $http.get('/js/services/tasks/task.json');
    }

  }])
