

lxApp.controller('taskCtrl',function ($scope,taskService,DropBoxSettings) {
  //file Upload
// var file = $scope.myFile;

  var filesDetail;

  //Dropbox select for multiple file
  $scope.onDropboxSuccess = function (files) {
    filesDetail = files;
    angular.forEach(files, function (file, index) {
      console.log(file);
    });
  }

  //Cancel the select
  $scope.onDropboxCancel = function () {
     console.log('Dropbox close/cancel!');
  };

  //get all the tasks
  taskService.getTasks().then(function (res) {
    $scope.data = res.data;
      console.log($scope.data);
  })

  // create task
  $scope.createTask = function (task,operation) {
    task.created_at = new Date();
    task.updated_at = task.created_at;
    operation.url = "";
    operation.created_at = new Date();
    operation.updated_at = operation.created_at;
    task.Legal_Action_Type.template = task.desc;
    task.Legal_Action_Type.Action_Type_Operation = [];

    task.Legal_Action_Type.Action_Type_Operation.push(operation);
    task.Documents = filesDetail;
    console.log(task);
    $scope.data.tasks.push(task);
    console.log('Can not use post to write in to local json file');
  }
})
