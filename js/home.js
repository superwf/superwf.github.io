'use strict';
angular.module('sequencingApp').controller('HomeCtrl', [
  '$scope', 'User', function($scope, User) {
    $scope.$emit('event:title', 'sequencing');
    return null;
  }
]);
