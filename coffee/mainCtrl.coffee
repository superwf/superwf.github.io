'use strict'
angular.module('Superwf').controller 'MainCtrl', ['$scope', ($scope) ->
  $scope.$broadcast 'event:title', 'superwf.github.io'
  null
]
