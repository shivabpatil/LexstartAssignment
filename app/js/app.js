
var lxApp = angular.module('lxApp',['ngRoute','taskServices','dropbox-picker'])
  .config(['$routeProvider','$locationProvider','DropBoxSettingsProvider',function($routeProvider,$locationProvider,DropBoxSettingsProvider){
    $routeProvider
      .when('/tasks',{templateUrl:'/view/taskPage.html',controller:'taskCtrl'})
      .when('/addTasks',{templateUrl:'/view/addTask.html',controller:'taskCtrl'});
      $locationProvider.html5Mode(true);
      // Configure the options
        DropBoxSettingsProvider.configure({
            linkType: 'preview',//dropbox link type
            multiselect: true,//dropbox multiselect
            extensions: ['.pdf', '.doc', '.docx'],//dropbox file extensions
            box_clientId: 'tdjpulviw9wzj20gd1t8rlh93vpvvh4m',// box CLient Id
            box_linkType: 'shared',//box link type
            box_multiselect: 'true'//box multiselect
          });
  }]);
