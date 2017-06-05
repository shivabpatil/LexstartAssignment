

lxApp.controller('taskCtrl',function ($scope,taskService) {

  //get all the tasks
  taskService.getTasks().then(function (res) {
    $scope.data = res.data;
      console.log($scope.data);
  })



})
