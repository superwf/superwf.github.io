'use strict';
angular.module('Superwf').controller('HomeCtrl', [
  '$scope', function($scope) {
    jsPlumb.setContainer('#board');
    jsPlumb.connect({
      source: 'debian',
      target: 'bash',
      endpoint: 'Dot',
      anchors: ['Bottom', 'Top'],
      connector: 'Flowchart',
      connectorStyle: {
        strokeStyle: '#00ee00',
        lineWidth: '4'
      },
      overlays: ['Arrow']
    });
    jsPlumb.connect({
      source: 'debian',
      target: 'vim',
      endpoint: 'Dot',
      anchors: ['Bottom', 'Top'],
      connector: 'Flowchart',
      connectorStyle: {
        strokeStyle: '#00ee00',
        lineWidth: '4'
      }
    });
    jsPlumb.connect({
      source: 'debian',
      target: 'mysql',
      endpoint: 'Dot',
      anchors: ['Bottom', 'Top'],
      connector: 'Flowchart',
      connectorStyle: {
        strokeStyle: '#00ee00',
        lineWidth: '4'
      }
    });
    return null;
  }
]);
