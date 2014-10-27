'use strict';
angular.module('Superwf').controller('MainCtrl', [
  '$scope', function($scope) {
    $scope.$broadcast('event:title', 'superwf.github.io');
    return null;
  }
]);
