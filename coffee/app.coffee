'use strict'

angular.module('Superwf', [
  'ngAnimate'
  'ngCookies'
  'ngResource'
  'ngRoute'
  'ngSanitize'
  'ngTouch'
  'ui.bootstrap'
  'ui.drop'
]).config ['$routeProvider', ($routeProvider) ->
  $routeProvider
    .when '/',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    .otherwise
      redirectTo: '/'
]
