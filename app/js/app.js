
var lxApp = angular.module('lxApp',['ngRoute','taskServices'])
  .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    $routeProvider
      .when('/tasks',{templateUrl:'/view/taskPage.html',controller:'taskCtrl'});
      $locationProvider.html5Mode(true);
  }]);
