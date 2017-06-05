

lxApp.controller('taskCtrl',function ($scope,taskService) {

  //get all the tasks
  taskService.getTasks().then(function (res) {
    $scope.tasks = res.data;
  })

  console.log($scope.tasks);

})
