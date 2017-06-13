

lxApp.controller('taskCtrl',function ($scope,taskService,DropBoxSettings) {
  //file Upload
// var file = $scope.myFile;

  var filesDetail;
  var id = 1;
  $scope.updateTask = {};
  //Dropbox select for multiple file
  $scope.onDropboxSuccess = function (files) {
    filesDetail = files;
    angular.forEach(files, function (file, index) {
    //  console.log(file);
    });
  }

  //Cancel the select
  $scope.onDropboxCancel = function () {
     console.log('Dropbox close/cancel!');
  };

  //get all the tasks
  taskService.getTasks().then(function (res) {
    $scope.data = res.data;
    //  console.log($scope.data);
  })

  // create task
  $scope.createTask = function (task,operation) {
    task.id = id;
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
    var event = {};
    event.summary = task.Legal_Action_Type.template;
    event.start = {};
    event.end = {};
    event.start.dateTime = task.action_date;
    event.end.dateTime = task.action_date;
    addEvent(event);
    id++;
    console.log('Can not use post to write in to local json file');
  }

  $scope.updateTask1 = function (chTask,task,operation) {
    chTask.Legal_Action_Type.template = task.desc;
    chTask.updated_at = new Date();
    operation.updated_at = new Date();
    chTask.Legal_Action_Type.legal_action = task.Legal_Action_Type.legal_action;
    chTask.Legal_Action_Type.Action_Type_Operation.push(operation);
    chTask.Documents = filesDetail;
    $scope.deleteTask(chTask.id);
    console.log(chTask);
    console.log($scope.data.tasks);
    chTask.id = id;
    $scope.data.tasks.push(chTask);
    id++;
    $scope.updateTask = {};
  }

  $scope.editTask = function (taskId) {
    function getByValue(arr, value) {
      var result  = arr.filter(function(o){return o.id == value;} );
      return result? result[0] : null; // or undefined
    }
  $scope.updateTask = getByValue($scope.data.tasks,taskId);
  //console.log($scope.updateTask);
  }

  $scope.deleteTask = function (taskId) {
      var removeByAttr = function(arr, attr, value){
      var i = arr.length;
      while(i--){
         if( arr[i]
             && arr[i].hasOwnProperty(attr)
             && (arguments.length > 2 && arr[i][attr] === value ) ){

             arr.splice(i,1);

         }
      }
      return arr;
    }
    $scope.data.tasks = removeByAttr($scope.data.tasks,'id',taskId);
  }
})
