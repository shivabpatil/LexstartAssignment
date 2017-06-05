

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
    task.Legal_Action_Type.Action_Type_Operation = operation;
    task.Documents = filesDetail;
    task.created_at =new Date();
    task.updated_at = task.created_at;
    console.log(task);
    console.log('Can not use post to write in to local json file');
  }
})
